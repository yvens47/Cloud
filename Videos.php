<?php

require "connection.php";
$all = mysqli_query(connect(), "Select * from Haitian");



while($row = mysqli_fetch_assoc($all)){
      $rows[] = $row;
    
}


echo json_encode($rows);