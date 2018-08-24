<?php
include("conexion.phtml"); 
header("Access-Control-Allow-Origin: *");
$link=Conectarse();
$fecha= date("Y-m-d");
$operation = $_GET['operation'];

switch ($operation) {
    case "countries":
        getCountries();
        break;
    case "states":
        getStates($_GET['country']);
        break;
    case "cities":
        getCities($_GET['state']);
        break;
    default:
        $data['error'] = 'Opción inválida';
        echo json_encode($data);
        break;
}

function getCountries() {
	$data = array();		
	$result=mysql_query("SELECT * FROM paises ORDER BY pais");
	while($r = mysql_fetch_assoc($result)) {
	    $data[] = $r;
	}
	echo json_encode($data);
	die();
}
function getStates($country) {
	$data = array();		
	$result=mysql_query("SELECT * FROM estados WHERE idpais = " . $country . " ORDER BY estado");
	while($r = mysql_fetch_assoc($result)) {
	    $data[] = $r;
	}
	echo json_encode($data);
	die();
}
function getCities($state) {
	$data = array();		
	$result=mysql_query("SELECT * FROM ciudades WHERE idestado = " . $state . " ORDER BY ciudad");
	while($r = mysql_fetch_assoc($result)) {
	    $data[] = $r;
	}
	echo json_encode($data);
	die();
}
?>