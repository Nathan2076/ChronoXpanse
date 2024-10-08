<?php
  
  $user = 'root';
  $pass = '';
  $server = 'localhost';
  $db = 'cx';

  $mysqli = mysqli_connect($server, $user, $pass, $db);
  $mysqli->set_charset('utf8');

  if ($mysqli->connect_error){
    die ('Connect Error');
  }
?>