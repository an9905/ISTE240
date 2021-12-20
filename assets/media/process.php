<?php
 $visitor  = $_POST['visitor'];
 $groupNum = $_POST['groupNum'];
 $vdate    = $_POST['vdate'];
 $place    = $_POST['fplace'];
 $rating   = $_POST['rating'];
 $destination_email = "an9905@rit.edu";
$email_subject = "Queens, NY.  - Necaj, Adrian";
$email_body = "Visitor name  $visitor\n";
// $email_body .= "Group Size $groupNum\n";
// $email_body .= "Date Visited=$vdate\n";
// $email_body .= "Favorite Place $place ";
if (isset($_POST['SOMEPLACE'])) {
    $email_body .= $_POST['SOMEPLACE'] .  "\n";
}
$email_body .= "\nRating -> $rating\n";

$email_body .= "\n Updated September 2021 \n";
mail($destination_email, $email_subject, $email_body);
echo "Data Sent\n";

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<title>Thank you for your Feedback</title>
	<link rel="stylesheet" type="text/css" href="ex4.css">
</head>

<body>

	<!-- navbar -->
	<nav>
		<ul>
			<!-- logo within navbar -->
			<li>
				<a style = "padding: 0px;" href = "https://www.ny.gov/counties/queens">
					<img src = "home.jpeg" alt = "Queens NY" width="125px" height="125px;">
				</a>
			</li>
			<li> <a href = "../../ex3.html"> Home </a> </li>
			<li> <a href = "#"> Activities </a> </li>
			<li> <a href = "#"> Food </a> </li>
			<li> <a href = "#"> Rest </a> </li>
			<li> <a href = "#"> People </a> </li>
			<li> <a href = "#"> Facebook </a> </li>
		</ul>
	</nav>
<div id="content">
<figure>
 <img src="thankyou.jpeg" alt="Thank you very much for your feedback" />
 <figcaption>Your Feedback can only help us to be a better town.</figcaption>
</figure>
   <article>
	<p>Thank you so much for taking the time out of your
	day to complete our short survey.
	We appreciate it so much, as your feedback will directly
	help us to keep track of why visitors come to
	our beautiful town of Plymouth Michigan.
    </p>
    </article>
</div>
</body>
<html>
