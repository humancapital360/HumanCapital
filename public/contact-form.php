<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer
require 'vendor/autoload.php'; // Make sure PHPMailer is installed via Composer

header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid form submission."]);
    exit;
}

// Collect form fields
$firstName = htmlspecialchars($data['firstName'] ?? '');
$lastName  = htmlspecialchars($data['lastName'] ?? '');
$email     = htmlspecialchars($data['email'] ?? '');
$phone     = htmlspecialchars($data['phone'] ?? '');
$subject   = htmlspecialchars($data['subject'] ?? '');
$message   = htmlspecialchars($data['message'] ?? '');
$formType  = htmlspecialchars($data['formType'] ?? 'Contact Form');
$recipient = htmlspecialchars($data['recipientEmail'] ?? 'contact@humancapital360.com');

// Build email body
$body  = "<h3>New {$formType} Submission</h3>";
$body .= "<p><strong>Name:</strong> {$firstName} {$lastName}</p>";
$body .= "<p><strong>Email:</strong> {$email}</p>";
$body .= "<p><strong>Phone:</strong> {$phone}</p>";
$body .= "<p><strong>Subject:</strong> {$subject}</p>";
$body .= "<p><strong>Message:</strong><br>" . nl2br($message) . "</p>";

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = getenv('SMTP_HOST');   // e.g. smtp.gmail.com
    $mail->SMTPAuth   = true;
    $mail->Username   = getenv('SMTP_USER_CONTACT');      // SMTP username
    $mail->Password   = getenv('SMTP_PASS_CONTACT');        // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // or PHPMailer::ENCRYPTION_SMTPS
    $mail->Port       = getenv('SMTP_PORT');                   // 587 for TLS, 465 for SSL

    // Sender and Recipient
    $mail->setFrom(getenv('SMTP_USER_CONTACT'), 'Human Capital 360');
    $mail->addAddress($recipient);

    // Reply to user
    if (!empty($email)) {
        $mail->addReplyTo($email, $firstName . " " . $lastName);
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = "[{$formType}] " . $subject;
    $mail->Body    = $body;

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Your message has been sent successfully!"
    ]);
} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => "Mailer Error: " . $mail->ErrorInfo
    ]);
}

// Spam prevention: Honeypot check
if (!empty($data['website'])) {
    echo json_encode(["success" => false, "message" => "Spam detected."]);
    exit;
}
