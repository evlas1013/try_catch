<?php

$producer = $_REQUEST['producer'];

$prodCompany = $_REQUEST['prodCompany'];

$prodContact = $_REQUEST['email'];

$assignment = $_REQUEST['assignment'];

$embed = $_REQUEST['embed'];

$embedStr = "'".'<iframe width="560" height="315" src="https://www.youtube.com/embed/'.$embed.'" frameborder="0" allowfullscreen></iframe>'."'";

$message = '["'.$producer.'","'.$prodCompany.'","'.$prodContact.'","'.$assignment.'",'.$embedStr.']';

mail('trycatchfilms@gmail.com', 'A new video for review on Try-Catch{films}', $message, 'From: noreply@trycatchfilms.com');



$servername = "204.93.177.137:3306";

$username = "evlascom_TryCatch";

$password = "myReallySecurePassword123456";

$dbname = "evlascom_TryCatchData";

// Create connection

$conn = new mysqli($servername, $username, $password, $dbname);



// Check connection

if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);

} 
$sql = "select NextId from ProjectData";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$nextId = $row["NextId"];
		$sql = "INSERT INTO Projects (Id, Producer, Company, Email, Link, Assignment)
		VALUES ('$nextId','$producer','$prodCompany','$prodContact','$embed','$assignment')";
		
		if ($conn->query($sql) != TRUE) {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
		
		$newNext = $row["NextId"] + 1;
		$sql = "UPDATE `evlascom_TryCatchData`.`ProjectData` SET `NextId` = '$newNext'";
		if ($conn->query($sql) != TRUE) {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
    }
} else {
    echo "0 results";
}



?>



<html>

<link rel="stylesheet" type="text/css" href="http://www.nicksalve.com/try_catch/style.css">

<div>

<a href="http://www.trycatchfilms.com"><img src="http://www.nicksalve.com/try_catch/images/trycatch.png"></a>

<p>Congratulations on finishing your film! Your submission will be reviewed by our team and your video will be added to the site once it is approved.<br><br>



Note: we do not exclude videos for content. We review your submission to ensure that your video is an actual entry to Try-Catch{films} and that you're not just uploading every short film you've ever made to our site.</p>

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

