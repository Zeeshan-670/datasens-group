<?php
// Database connection settings
$servername = "localhost";
$username = "u404467477_admin";
$password = '$Password@22';
$dbname = "u404467477_Datasense"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
