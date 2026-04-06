<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: index.php");
}
?>

<h2>Bienvenido</h2>
<a href="productos.php">Productos</a><br>
<a href="logout.php">Salir</a>