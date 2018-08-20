<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);
include("conexion.phtml");
$link=Conectarse();

$token = $_GET['token'];

$id = mysql_query("SELECT `id` FROM `usuariosinfox` WHERE `hash_id`='$token'");
$id = mysql_fetch_array($id)['id'];

mysql_query("UPDATE `usuariosinfox` SET `active`=1 WHERE id=$id");
if(mysql_affected_rows()){
    $result['response'] = 'OK';
    $result['message'] = 'El usuario ha sido activado exitosamente.';
}else{
    $result['response'] = 'ERROR';
    $result['message'] = 'El usuario no ha podido ser activado, ponte en contacto con el administrador.';
}

echo json_encode($result);