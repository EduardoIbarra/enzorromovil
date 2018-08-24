<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);
include("conexion.phtml");
$link=Conectarse();

$email = $_GET['email'];
$password = $_GET['password'];

// echo("select * from usuariosinfox where email = '".$email."' AND password = '" . md5($password)) . "'"; die();
$password = md5($password);
$result=mysql_query("select * from usuariosinfox where email = '$email' AND password = '$password'", $link);
if(mysql_num_rows($result) > 0){
    $result = mysql_fetch_array($result);
    $response['user'] = $result;
}else{
    $response['error'] = 'Email incorrecto.';
}

mysql_close($link);
echo json_encode($response);

?>