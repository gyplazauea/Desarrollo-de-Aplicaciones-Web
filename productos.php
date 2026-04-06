<?php
include("conexion.php");

if ($_POST) {
    $nombre = $_POST['nombre'];
    $conn->query("INSERT INTO productos(nombre) VALUES('$nombre')");
}

if (isset($_GET['eliminar'])) {
    $id = $_GET['eliminar'];
    $conn->query("DELETE FROM productos WHERE id=$id");
}

$result = $conn->query("SELECT * FROM productos");
?>

<form method="POST">
<input name="nombre" placeholder="Producto">
<button>Guardar</button>
</form>

<h3>Lista</h3>
<?php while($row = $result->fetch_assoc()) { ?>
<?= $row['nombre'] ?>
<a href="?eliminar=<?= $row['id'] ?>">Eliminar</a><br>
<?php } ?>