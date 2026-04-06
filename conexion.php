<?php
$conn = new mysqli("localhost", "root", "", "sistema");

if ($conn->connect_error) {
    die("Error de conexión");
}
?>