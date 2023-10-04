<?php

$producer = $_REQUEST['producer'];

$prodCompany = $_REQUEST['prodCompany'];

$prodContact = $_REQUEST['email'];

$assignment = $_REQUEST['assignment'];



$message = $producer . ",\r\n" . "Thank you for your submission to Try Catch {films}! This is your confirmation.\r\n" . 

"Submission Details:\r\n" . 

"Producer: " . $producer . "\r\n" . 

"Production Company: " . $prodCompany . "\r\n\n" . 

"Assignment: ". $assignment . "\r\n";



// In case any of our lines are larger than 70 characters, we should use wordwrap()

$message = wordwrap($message, 70, "\r\n");



$sent = mail($prodContact, 'Your Submission to Try-Catch {Films}', $message.$assignment, 'From: noreply@trycatchfilms.com');

if($sent){

	mail('trycatchfilms@gmail.com', 'New Submission to Try-Catch {Films}', $message.$assignment, 'From: noreply@trycatchfilms.com');

} else {

	print "Something went wrong";

}

?>

<html>

<link rel="stylesheet" type="text/css" href="http://www.nicksalve.com/try_catch/style.css">

<div>

<a href="http://www.trycatchfilms.com"><img src="http://www.nicksalve.com/try_catch/images/trycatch.png"></a>

<p>Thank you for your submission! An email has been sent to the address you provided. Click <a href="http://www.trycatchfilms.com/">here </a>to return to Try Catch {films}.</p>

</div>



<table border="0">

  <tbody>

    <tr>

    

    

      <td><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- Random Film Gen Sm -->

<ins class="adsbygoogle"

     style="display:inline-block;width:300px;height:250px"

     data-ad-client="ca-pub-2181634026638448"

     data-ad-slot="4630365777"></ins>

<script>

(adsbygoogle = window.adsbygoogle || []).push({});

</script></td>





      <td><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- Random Film Gen 2 -->

<ins class="adsbygoogle"

     style="display:inline-block;width:300px;height:250px"

     data-ad-client="ca-pub-2181634026638448"

     data-ad-slot="4490764971"></ins>

<script>

(adsbygoogle = window.adsbygoogle || []).push({});

</script></td>

      

      

      <td><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- Random Film Gen 3 -->

<ins class="adsbygoogle"

     style="display:inline-block;width:300px;height:250px"

     data-ad-client="ca-pub-2181634026638448"

     data-ad-slot="5967498176"></ins>

<script>

(adsbygoogle = window.adsbygoogle || []).push({});

</script></td>





    </tr>

  </tbody>

</table>

</html>

