<?php
// Verbind met de database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pakkettenDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Haal de gegevens uit de POST
$naam = $_POST['naam'];
$code = $_POST['code'];
$bedrijf = $_POST['bedrijf'];
$bestemming = $_POST['bestemming'];

// Sla de gegevens op in de database
$sql = "INSERT INTO pakketten (naam, code, bedrijf, bestemming)
VALUES ('$naam', '$code', '$bedrijf', '$bestemming')";

if ($conn->query($sql) === TRUE) {
  echo "Pakket toegevoegd!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>