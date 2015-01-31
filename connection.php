<?php

function connect(){
    
    $con = mysqli_connect("172.17.1.172","yvens47","","Videos") or die("could not connect to DB");
    
    return $con;
}