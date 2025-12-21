<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // PHPMailer via Composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName'] ?? '');
    $lastName  = htmlspecialchars($_POST['lastName'] ?? '');
    $email     = htmlspecialchars($_POST['email'] ?? '');
    $phone     = htmlspecialchars($_POST['phone'] ?? '');
    $date      = htmlspecialchars($_POST['date'] ?? '');
    $time      = htmlspecialchars($_POST['time'] ?? '');
    $message   = htmlspecialchars($_POST['message'] ?? '');
    $website   = $_POST['website'] ?? ''; // honeypot field

    // If honeypot is filled, it's spam
    if (!empty($website)) {
        http_response_code(400);
        echo "Bad request.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP server config (update with your domain/email creds)
        $mail->isSMTP();
        $mail->Host       = getenv('SMTP_HOST');
        $mail->SMTPAuth   = true;
        $mail->Username   = getenv('SMTP_USER_APPOINTMENTS'); 
        $mail->Password   = getenv('SMTP_PASS_APPOINTMENTS'); // replace with real password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = getenv('SMTP_PORT');   // 587 for TLS, 465 for SSL

        // Sender & recipient
        $mail->setFrom(getenv('SMTP_USER_APPOINTMENTS'), 'Human Capital 360 Appointments');
        $mail->addAddress('appointments@humancapital360.com'); // change to your recipient email

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Appointment Booking from $firstName $lastName";
        $mail->Body    = "
            <h2>New Appointment Request</h2>
            <p><strong>Name:</strong> {$firstName} {$lastName}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Date:</strong> {$date}</p>
            <p><strong>Time:</strong> {$time}</p>
            <p><strong>Message:</strong><br>{$message}</p>
        ";
        $mail->AltBody = "New appointment request from {$firstName} {$lastName}\n
                          Email: {$email}\n
                          Phone: {$phone}\n
                          Date: {$date}\n
                          Time: {$time}\n
                          Message: {$message}";

        $mail->send();
        echo "success";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
