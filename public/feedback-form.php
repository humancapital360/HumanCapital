<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$experience = isset($_POST['experience']) ? trim($_POST['experience']) : '';

// Validate required fields
if (empty($name) || empty($experience)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name and experience are required']);
    exit;
}

// Handle file upload
$screenshot_info = '';
if (isset($_FILES['screenshot']) && $_FILES['screenshot']['error'] === UPLOAD_ERR_OK) {
    $upload_dir = 'uploads/feedback/';
    
    // Create directory if it doesn't exist
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0755, true);
    }
    
    $file_extension = pathinfo($_FILES['screenshot']['name'], PATHINFO_EXTENSION);
    $filename = 'feedback_' . time() . '_' . uniqid() . '.' . $file_extension;
    $upload_path = $upload_dir . $filename;
    
    if (move_uploaded_file($_FILES['screenshot']['tmp_name'], $upload_path)) {
        $screenshot_info = "Screenshot attached: " . $filename;
    }
}

// Email configuration
$to = 'charlesh@humancapital360.com';
$subject = 'Website Feedback from ' . $name;

// Email body
$body = "New website feedback received:\n\n";
$body .= "Name: " . $name . "\n";
$body .= "Experience: " . $experience . "\n";
if (!empty($screenshot_info)) {
    $body .= $screenshot_info . "\n";
}
$body .= "\nSubmitted on: " . date('Y-m-d H:i:s') . "\n";
$body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers
$headers = "From: noreply@humancapital360.com\r\n";
$headers .= "Reply-To: noreply@humancapital360.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Feedback sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send feedback']);
}
?>
