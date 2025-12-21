<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; 

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid form submission."]);
    exit;
}

// Honeypot check
if (!empty($data['website'])) {
    echo json_encode(["success" => false, "message" => "Spam detected."]);
    exit;
}

// Collect fields
$firstName = htmlspecialchars($data['firstName'] ?? '');
$lastName  = htmlspecialchars($data['lastName'] ?? '');
$email     = htmlspecialchars($data['email'] ?? '');
$phone     = htmlspecialchars($data['phone'] ?? '');
$date      = htmlspecialchars($data['date'] ?? '');
$time      = htmlspecialchars($data['time'] ?? '');
$message   = htmlspecialchars($data['message'] ?? '');
$formType  = htmlspecialchars($data['formType'] ?? 'Appointment');
$recipient = htmlspecialchars($data['recipientEmail'] ?? 'appointments@humancapital360.com');

// Build email body
$body  = "<h3>New {$formType} Request</h3>";
$body .= "<p><strong>Name:</strong> {$firstName} {$lastName}</p>";
$body .= "<p><strong>Email:</strong> {$email}</p>";
$body .= "<p><strong>Phone:</strong> {$phone}</p>";
$body .= "<p><strong>Date:</strong> {$date}</p>";
$body .= "<p><strong>Time:</strong> {$time}</p>";
$body .= "<p><strong>Notes:</strong><br>" . nl2br($message) . "</p>";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = getenv('SMTP_HOST');
    $mail->SMTPAuth   = true;
    $mail->Username   = getenv('SMTP_USER_APPOINTMENTS');
    $mail->Password   = getenv('SMTP_PASS_APPOINTMENTS');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = getenv('SMTP_PORT');

    $mail->setFrom(getenv('SMTP_USER_APPOINTMENTS'), 'Human Capital 360');
    $mail->addAddress($recipient);

    if (!empty($email)) {
        $mail->addReplyTo($email, $firstName . " " . $lastName);
    }

    $mail->isHTML(true);
    $mail->Subject = "[{$formType}] Appointment Request";
    $mail->Body    = $body;

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Your appointment request has been sent successfully!"
    ]);
} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => "Mailer Error: " . $mail->ErrorInfo
    ]);
}
