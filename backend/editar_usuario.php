<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);
include("conexion.phtml");
$link=Conectarse();

$passFlag = 0;
$id = $_GET['id'];
$email = $_GET['email'];
$contrasena = $_GET['contrasena'];
$contrasena2 = $_GET['contrasena2'];
$nombres = $_GET['nombres'];
$apellidos = $_GET['apellidos'];
$pais = $_GET['pais'];
$estado = $_GET['estado'];
$ciudad = $_GET['ciudad'];
$sexo = $_GET['sexo'];
$domicilio = $_GET['domicilio'];
$telefono = $_GET['telefono'];
$foto = $_GET['foto'];

if(!empty($contrasena)){
    if(strlen($contrasena) >= 6){
        if($contrasena === $contrasena2){
            $contrasena = md5($contrasena);
            $passFlag = 1;
        }else{
            $passFlag = 0;
            $result['response'] = 'Error';
            $result['message'] = 'Las contraseñas ingresadas deben de coincidir.';
        }
    }else{
        $passFlag = 0;
        $result['response'] = 'Error';
        $result['message'] = 'La contraseña debe ser de almenos 6 carácteres.';
    }
}else{
    $passFlag = 1;
}

if($passFlag == 1){
    $query = "UPDATE `usuariosinfox` SET `nombres`='$nombres', `apellidos`='$apellidos', `email`='$email', `pais`='$pais', `estado`='$estado', `ciudades`='$ciudad', `ciudad`='$ciudad', `sexo`='$sexo', `domicilio`='$domicilio', `telefono`='$telefono', `facebook_photo`='$foto' ";

    if(!empty($contrasena)){
        $query .= ", `password`='$contrasena' ";
    }
    $query .= " WHERE id=$id";
    mysql_query($query, $link);

    if(mysql_affected_rows()){
        $result['response'] = 'OK';
        $result['message'] = 'El usuario ha sido editado exitosamente.';
    }else{
        $result['response'] = 'ERROR';
        $result['message'] = 'El usuario no ha podido ser ediado, ponte en contacto con el administrador.';
    }
}

echo json_encode($result);