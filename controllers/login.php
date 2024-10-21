<?php

include("conexao.php");

$email    = $_POST["email"];
$password = $_POST["password"];

$query = "SELECT nome_usuario FROM usuario WHERE email_usuario = '$email' AND senha_usuario = '$password'";

if (mysqli_query($mysqli, $query)) {
    header("Location: ../index.html");
} else {
    echo "Erro: " . $query . "<br />" . mysqli_error($mysqli);
}

mysqli_close($mysqli);

?>
