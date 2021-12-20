
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Exercise 7</title>
</head>
<body>
    <h2>What do you think?</h2>
        <ul>
        <?php
            $path = "./";
            require $path.'../../../dbConnect.inc'; 
            $query = "SELECT * FROM comments ORDER BY id DESC"; // selects everything from database 
            $result = $mysqli->query($query);
            // loops through rrows and prints info out in the list
            while($row = $result -> fetch_assoc()) {
            echo "<li><strong>" . $row['from'] . ": </strong>";
            echo $row['message'] . " @ " . $row['date'] . "</li>"; 
           } 
        ?>
        </ul>
    
    <hr>
    
    <h2>What do you have to say?</h2>
    <form action="index.php" method="get">
        First name: <input type="text" name="from">
        <br>
        <textarea name="message" rows="3" cols="20" placeholder="say what?"></textarea> 
        <br>
        <input type="submit" value="Add to the List" />
    </form>
    </body>
</html>
    
















