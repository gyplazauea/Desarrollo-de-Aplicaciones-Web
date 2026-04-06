<?php
session_start();
include("conexion.php");

if ($_POST) {
    $user = $_POST['usuario'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM usuarios WHERE usuario='$user' AND password='$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $_SESSION['user'] = $user;
        header("Location: dashboard.php");
    } else {
        echo "Datos incorrectos";
    }
}
?>

<form method="POST">
Usuario: <input name="usuario"><br>
Password: <input type="password" name="password"><br>
<button>Ingresar</button>
</form>