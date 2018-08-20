<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);
include("conexion.phtml");

$id_usuario = $_GET['id_usuario'];
$id_directorio = $_GET['id_directorio'];
$nota_personal = $_GET['nota_personal'];
$creado = date("Y-m-d H:i:s");

$link=Conectarse();

if(!empty($id_directorio)){
    $updFlag = mysql_query("select * from favoritos where id_usuario = $id_usuario and id_directorio = $id_directorio", $link);
    if(mysql_fetch_array($valida)){
        $response['error']= "El negocio ya se encuentra en favoritos.";
    }else{
        mysql_query("INSERT INTO `favoritos` (`id_usuario`,`id_directorio`,`nota_personal`,`creado`) VALUES ($id_usuario, $id_directorio, '$nota_personal', '$creado')",$link);
        $response['ok'] = "El negocio ha sido agregado a favoritos.";
    }
}

mysql_close($link);

echo json_encode($response);

?>