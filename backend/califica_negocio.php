<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);
include("conexion.phtml");
$link=Conectarse();

$id_directorio = $_GET['id_directorio'];
$id_usuario = $_GET['id_usuario'];
$calificacion = $_GET['calificacion'];
$comentario = $_GET['comentario'];
$privado = $_GET['privado'];
$creado = date("Y-m-d H:i:s");

if(!isset($id_directorio)){
    $result['response'] = 'Error';
    $result['message'] = 'No se ha seleccionado el negocio.';
    echo json_encode($result);
    exit();
}
if(!isset($id_usuario)){
    $result['response'] = 'Error';
    $result['message'] = 'No se ha seleccionado el usuario.';
    exit();
}
if(!isset($calificacion)){
    $result['response'] = 'Error';
    $result['message'] = 'No se ha recibido calificación.';
    exit();
}

$updFlag = mysql_query("select * from `calificacion_directorio` where `id_usuario` = $id_usuario and `id_directorio`= $id_directorio", $link);

if(mysql_fetch_array($updFlag)){
    mysql_query("UPDATE `calificacion_directorio` SET `calificacion`=$calificacion, `comentario`='$comentario', `privado`=$privado, `creado`='$creado' WHERE `id_usuario` = $id_usuario and `id_directorio`= $id_directorio", $link);
    $result['response'] = 'OK';
    $result['message'] = 'Se ha calificado el negocio.';
    echo json_encode($result);
}else{
    mysql_query("INSERT INTO `calificacion_directorio` (`id_directorio`,`id_usuario`,`calificacion`,`comentario`,`creado`) VALUES ($id_directorio, $id_usuario,$calificacion,'$comentario','$creado')",$link);
    if(mysql_insert_id()){
        $result['response'] = 'OK';
        $result['message'] = 'Se ha calificado el negocio.';
        echo json_encode($result);
    }
}