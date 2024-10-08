<?php

include("conexao.php");

$name     = $_POST["name"];
$email    = $_POST["email"];
$password = $_POST["password"];

$query = "INSERT INTO `usuario`(`email_usuario`, `senha_usuario`, `nome_usuario`) VALUES ('$email','$password','$name')";

if (mysqli_query($mysqli, $query)) {
    header("Location: ../views/log.php");
} else {
    echo "Erro: " . $query . "<br />" . mysqli_error($mysqli);
}

mysqli_close($mysqli);

?>
