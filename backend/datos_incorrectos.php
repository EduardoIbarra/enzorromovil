<?php
include("conexion.phtml"); 
error_reporting(0);
$link=Conectarse();

$_SERVER["HTTP_CLIENT_IP"]!=""?$ip=$_SERVER["HTTP_CLIENT_IP"]:
$ip = $HTTP_SERVER_VARS['REMOTE_ADDR'] || '127.0.0.1'; 
$url = $_SERVER['HTTP_REFERER']; 
$comentariosdeip= gethostbyaddr($ip);
$hoy = date("y.m.d");  
$hora= date("H:i:s"); 

$idnum = $_GET['idnum'];
$comentarios = $_GET['comentarios'];
/* verifica que el usuario y password concuerden correctamente */
if(!empty($idnum)){		
		$comentariosdeip = "APP ".$comentariosdeip;
		mysql_query("INSERT INTO notelefonos (fecha,ip,hora,comentarios) VALUES ('$hoy', '$comentariosdeip', '$hora', '$comentarios')",$link);
}
mysql_close($link);
/*convierte los resultados a formato json*/
$resultadosJson = json_encode("OK");
/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
?>