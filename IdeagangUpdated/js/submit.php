<?php
echo "PHP is working!";
$fname = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$message = $_POST['message'];

$email_from = 'manoj.d@thresholdsoft.com';
$Bcc = 'sanjay.g@zeroco.de';
$email_subject = "New enquiry";
$email_body = "<table border='1' style='table-layout: fixed'>
<tr><th style='width:50%'>Name</th><td style='width:50%'>".$fname."</td></tr>
<tr><th>Email</th><td>".$email."</td></tr>
<tr><th>Phone Number</th><td>".$phone."</td></tr>
<tr><th>Company</th><td>".$company."</td></tr>
<tr><th>Message</th><td>".$message."</td></tr></table>";

$to = "ramu.b@thresholdsoft.com";
$headers = "From: $email_from \r\n";
$headers .= "Bcc: $Bcc \r\n";
$headers .= "Return-Path: The Sender <$email> \r\n";
$headers .= 'Content-Type: text/html; charset=ISO-8859-1' . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "X-Mailer: PHP". phpversion() ."\r\n";

$retvals = mail($to, $email_subject, $email_body, $headers);

if ($retvals == true) {
   header("Location: thankyou.html");
} else {
   echo "Failed to send email.";
}
?>
