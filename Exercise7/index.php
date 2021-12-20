<?php

// connect with your dbConnect.inc
$path = "./";
require $path.'../../../dbConnect.inc'; 

if(!isset($_GET['from']) || $_GET['from'] == "") {
        die('Error - no name provided');
    }else{
        $name = $_GET['from'];
    }

if(!isset($_GET['message']) || $_GET['message'] == "") {
        die('Error - no message provided');
    }else{
        $message = $_GET['message'];
    }

    $date = date("Y-m-d H:i:s"); // gets exact time

     // inserts data into datatable    
    $stmp = $mysqli->prepare("INSERT INTO `comments` (`from`, `message`, `date`) VALUES (?,?,?);");  
    
    // sets the values in the table
    $stmp->bind_param("sss", $_GET['from'], $_GET['message'], $date);

    $stmp->execute(); // executes

    $mysqli->close(); // closes

    header('location: comments.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>240</title>

    <style>
        body{
          background-color: linen;
        }
        h3 {
          color: maroon;
          margin-left: 40px;
        }
        </style>
</head>
<body>
<h3>The List</h3>
<div id="list">
	<ul>
	<?php
		foreach($records as $this_row){
			echo '<li>'.$this_row['name'] . " " . $this_row['message'].'</li>';
		} // end of foreach loop
	?>
	</ul>
</div>
<hr/>
<h3>Add to the list</h3>
<form action="index.php" method="GET">		
		Name:&nbsp;<input type="text" id="name" name="name" width="40" placeholder="Enter Your name" /> 
		<p>&nbsp;</p>
		Message: <br /> 
		<textarea id="message" name="message" cols="90" rows="10"></textarea>
		<p><input type="submit" value="Add to the List"/></p>
</form>

    
    
<!-- GET Date from operating System -->    
<?php
$filename = 'index.php';
if (file_exists($filename)) {
    echo "Last modified: " . date ("l, F d Y h:ia", filemtime($filename));
}
?>

</body>
</html>