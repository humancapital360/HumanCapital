<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configuration
$recipient_email = "techexincorporation@gmail.com";
$company_name = "Human Capital 360°";

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to validate email
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Check if request is POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate email
if (empty($data['email'])) {
    echo json_encode(['success' => false, 'message' => 'Email address is required']);
    exit;
}

if (!validate_email($data['email'])) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
    exit;
}

$email = sanitize_input($data['email']);
$source = isset($data['source']) ? sanitize_input($data['source']) : 'Website';

// Create email subject
$email_subject = "[$company_name] New Newsletter Subscription";

// Create email body
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #007D05, #2A3199); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #007D05; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 4px solid #007D05; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>$company_name</h2>
            <p>New Newsletter Subscription</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>$email</div>
            </div>
            <div class='field'>
                <div class='label'>Source:</div>
                <div class='value'>$source</div>
            </div>
            <div class='field'>
                <div class='label'>Subscribed:</div>
                <div class='value'>" . date('F j, Y \a\t g:i A T') . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the $company_name website newsletter signup.</p>
        </div>
    </div>
</body>
</html>";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $company_name . ' Website <noreply@humancapital360.com>',
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mail_sent = mail($recipient_email, $email_subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Send welcome email to subscriber
    $welcome_subject = "Welcome to $company_name Newsletter!";
    $welcome_body = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #007D05, #2A3199); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>$company_name</h2>
                <p>Welcome to Our Newsletter!</p>
            </div>
            <div class='content'>
                <p>Thank you for subscribing to the $company_name newsletter!</p>
                <p>You'll receive updates about:</p>
                <ul>
                    <li>Success stories and transformations</li>
                    <li>Upcoming events and workshops</li>
                    <li>Business development tips</li>
                    <li>Community impact news</li>
                    <li>Exclusive opportunities</li>
                </ul>
                <p>If you have any questions, feel free to contact us at <strong>Info@humancapital360.com</strong> or call <strong>(269) 985-6441</strong>.</p>
                <p>Best regards,<br>The Human Capital 360° Team</p>
            </div>
            <div class='footer'>
                <p>Human Capital 360° | Info@humancapital360.com | (269) 985-6441</p>
            </div>
        </div>
    </body>
    </html>";
    
    $welcome_headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . $company_name . ' <Info@humancapital360.com>',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    mail($email, $welcome_subject, $welcome_body, implode("\r\n", $welcome_headers));
    
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you for subscribing! Check your email for a welcome message.'
    ]);
} else {
    echo json_encode([
        'success' => false, 
        'message' => 'Sorry, there was an error processing your subscription. Please try again.'
    ]);
}
?>
