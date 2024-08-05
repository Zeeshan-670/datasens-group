<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './lib/PHPMailer.php';
require './lib/Exception.php';
require './lib/SMTP.php';

// Function to send email
function sendEmail($recipientEmail, $subject, $body)
{
    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';  // Specify your SMTP server
        $mail->Port = 465;  // Set the SMTP port
        $mail->SMTPSecure = 'ssl';  // Enable encryption, 'tls' also accepted

        // Debugging
        // $mail->SMTPDebug = 2; // Enable verbose debug output

        // Disable SSL verification (for testing purposes)
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );

        // SMTP authentication
        $mail->AuthType = 'LOGIN'; // Change to LOGIN or PLAIN
        $mail->SMTPAuth = true;
        $mail->Username = 'support@datasensegroup.co';  // Your SMTP username
        $mail->Password = '$Password@22';  // Your SMTP password

        // Sender and recipient details
        $mail->setFrom('support@datasensegroup.co', 'DataSense Group');  // Sender email and name
        $mail->addAddress($recipientEmail);  // Recipient email

        // Email subject and body
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $body;

        // Send the email
        $mail->send();

        return 'Email sent successfully!';
    } catch (Exception $e) {
        return 'Error sending email: ' . $mail->ErrorInfo;
    }
}

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Get user input from the POST data
    $name = $_GET['name'];
    $email = $_GET['email'];
    $companyName = $_GET['companyName'];
    $phoneNo = $_GET['phoneNo'];
    $SelectService = $_GET['SelectService'];
    $detail = $_GET['detail'];
    $recipientEmail = $_GET['email'];
    // $recipientEmail1 = 'muneerzeeshan670@gmail.com';
    $recipientEmail1 = 'aaraf@datasensegroup.co';
    $subject = 'Thanks To Contact DataSense';
    $subject1 = 'Recieved Mail From'. $name;
    
    $body = "
<!DOCTYPE html>
<html lang='en'>
  <head>
    <!-- Meta Tags -->
    <meta charset='utf-8' />
    <meta http-equiv='x-ua-compatible' content='ie=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta name='author' content='aDDy' />
    <!-- Site Title -->
    <title>Detailed Emailer</title>
    <!-- <link href='assets/css/mailStyle.css' rel='stylesheet' type='text/css' /> -->
    <style type='text/css'>
      body,
      td,
      th {
        font-family: Inter, sans-serif;
      }
    </style>
  </head>

  <body>
    <div style='max-width: 800px; padding: 30px 15px; margin-left: auto; margin-right: auto; background: #e8e3ff; border-radius: 16px;' >
      <div
        class='cs-logo cs-mb5'
        style='text-align: center; margin-bottom: 40px;margin-top: 20px'
      >
        <font face='Poppins'
          ><img src='https://datasensegroup.co/assets/img/mail/mail_top.png' alt='Logo' style=' max-width: 280px; width: 100%; '
        /></font>
      </div>
      <div class='cs-invoice cs-style1' style='background: #fff;
        border-radius: 10px;padding: 15px;max-width: 600px;margin: auto;padding-bottom: 60px;'>
        <div class='cs-invoice_in' id='download_section'>
          <div class='cs-invoice_head cs-type1' style='text-align: center;'>
            <div class='cs-invoice_center cs-text_center' style='text-align: center;'>
              <div class='cs-logo cs-mb5' style='text-align: center;margin: auto'>
                <font face='Poppins'
                  ><img src='https://datasensegroup.co/assets/img/mail/mailBanner.png' alt='Logo' width=''
                /></font>
              </div>
            </div>
          </div>

          <div>
            <table
              width='100%'
              border='0'
              align='center'
              cellpadding='0'
              cellspacing='0'
            >
              <tbody>
                <tr>
                  <td align='center' style='padding-top: 0'>
                    <h3>
                      <font face='Poppins'
                        ><strong
                          style='color: #5a30ec; font-family: Inter, sans-serif'
                          ><font size='5'>Thank You For Contacting Us</font
                          ><br /> </strong
                      ></font>
                    </h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
              <tbody>
                <tr>
                  <td align='left' style='color: #777777'>
                    <font face='Poppins'>
                      <strong
                        style='
                          font-family: Inter;
                          font-size: 14px;
                          line-height: 12px;
                          letter-spacing: 0em;
                          text-align: left;
                          color: #434343;
                          padding: 0 45px;
                          width: 100%;
                          display: block;
                        '
                      >
                        Dear $name,</strong
                      ></font
                    >
                  </td>
                </tr>
                <tr>
                  <td style='color: #777777'>
                    <font face='Poppins'
                      ><p
                        style='
                        font-family: Inter;
                        font-size: 11.5px;
                        line-height: 18px;
                        letter-spacing: 0em;
                        text-align: left;
                        color: #434343;
                        padding: 0 25px;
                        width: 92%;
                        display: block;
                        margin-bottom: 30px;
                        '
                      >
                        We are delighted to inform you that your registration
                        with DataSense Group has been successfully received.
                        Thank you for choosing us as your preferred platform.
                        Our dedicated team is currently processing your request,
                        and you can expect a response from us within 24
                        hours.<br /><br />
                        We appreciate your trust in DataSense Group, and we look
                        forward to serving you.<br /></p
                    ></font>
                    <strong
                    style='
                      font-family: Inter;
                      font-size: 14px;
                      line-height: 18px;
                      letter-spacing: 0em;
                      text-align: left;
                      color: #434343;
                      padding: 0 25px;
                      width: 100%;
                      display: block;
                    '
                  >
                  Best Regards,<br>DataSense Group</strong
                  ></font
                >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        class='cs-logo cs-mb5'
        style='text-align: center; margin-top: 60px'
      >
        <font face='Poppins'
          ><img src='https://datasensegroup.co/assets/img/mail/mail_bot.png' alt='Logo'
          style=' max-width: 175px; width: 100%; '
        /></font>
      </div>
      <div>
        <table
          width='100%'
          border='0'
          align='center'
          cellpadding='0'
          cellspacing='0'
        >
          <tbody>
            <tr>
              <td align='center' style='padding-top: 0;padding-bottom: 0;'>
                <p style='
                font-family: Inter;
                font-size: 12.5px;
                line-height: 18px;
                letter-spacing: 0em;
                text-align: left;
                color: #170034;
                padding: 0 25px;
                width: 100%;
                max-width: 450px;
                display: block;
                text-align: center;
                margin: 35px 0px;
              '>
                if you have any questions or require assistance,
                please feel free to reach out to us via email at 
                <a href='mailto:support@datasensegroup.co'
                style='text-decoration: underline; font-weight: 600; color: #5a30ec;'
                  >support@datasensegroup.co</a
                >
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <hr style='border-top: 1.5px solid #b293d9; max-width: 285px;'>

        <div
        class='cs-logo cs-mb5'
        style='text-align: center; margin-top: 40px'
      >
        <font face='Poppins'
          ><img src='https://datasensegroup.co/assets/img/mail/links.png' alt='Logo'
          style=' max-width: 175px; width: 100%; '
        /></font>
      </div>

      <table
          width='100%'
          border='0'
          align='center'
          cellpadding='0'
          cellspacing='0'
        >
          <tbody>
            <tr>
              <td align='center' style='padding-top: 0;padding-bottom: 0;'>
                <p style='
                font-family: Inter;
                font-size: 12.5px;
                line-height: 18px;
                letter-spacing: 0em;
                text-align: left;
                color: #170034;
                padding: 0 25px;
                width: 100%;
                max-width: 450px;
                display: block;
                text-align: center;
                margin: 40px 0px 20px 0;
              '>
               <span style='margin: 15px;'>London</span> |
               <span style='margin: 15px;'>Dubai</span> |
               <span style='margin: 15px;'>Karachi</span> 
                </p>
              </td>
            </tr>

            <tr>
                <td align='center' style='padding-top: 20px;'>
                    <p style='font-family: Inter;
                    font-size: 12.5px;
                    line-height: 18px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: #170034;
                    width: 100%;
                    max-width: 450px;
                    display: block;
                    text-align: center;
                    margin-top: 0px;margin-bottom: 0 !important;'>© DataSense Group Ltd. 2024</p>
            </tr>
          </tbody>
        </table>



      </div>
    </div>
    <font face='Poppins'> </font>
    
  </body>
</html>

";

$body1 = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Email Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>Email Information</h2>
    <table>
        <tr>
            <th>Field</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Name</td>
            <td>$name</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>$email</td>
        </tr>
        <tr>
            <td>Company Name</td>
            <td>$companyName</td>
        </tr>
        <tr>
            <td>Company Size</td>
            <td>$phoneNo</td>
        </tr>
        <tr>
            <td>Company Size</td>
            <td>$SelectService</td>
        </tr>
        <tr>
            <td>Detail</td>
            <td>$detail</td>
        </tr>
    </table>
</body>
</html>
";

    // Call the function to send the email
    $result = sendEmail($recipientEmail, $subject, $body);
    $result1 = sendEmail($recipientEmail1, $subject1, $body1);

    // Return the result to the AJAX request
    echo $result;
} else {
    // Handle other types of requests or direct access to the script
    echo 'Invalid request.';
}
?>