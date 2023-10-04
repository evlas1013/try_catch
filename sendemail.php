<?php

$from = $_REQUEST['from'];

$to = $_REQUEST['to'];


$message = "
<html>
<head>
<title>New Scarborough Login</title>
</head>
<body>
<p>Hello all.</p><br>
<p>We will now be using a new website for Employee Intranet login. Please use the following site to set up your new information.</p>
<a href='www.nicksalve.com/try_catch/scarboroughlogin.html'>www.scarboroughschools.com/intranetlogin.asp</a>
<p>Thanks.<br>Anne</p><br>

</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: alovejoy@scarboroughschools.com' . "\r\n";

mail($to, 'New Scarborough Schools login site', $message, $headers);
?>



<html>

message sent.

</html>

