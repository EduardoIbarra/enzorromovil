<?php
include("conexion.phtml"); 
$link=Conectarse();
$fecha= date("Y-m-d");
$ciudad = $_GET['ciudad'];
			$resultados = array();		
			$resultados["validacion"] = "ok";
			$data = array();		
			$result=mysql_query("SELECT * FROM anuncioportada WHERE fechaini >= '$fecha' and fechafin <= '$fecha' order by idnum desc limit 1");
			$row = mysql_fetch_array($result);
			array_push($data,array("img" => $row["img"], "enlace" => $row["enlace"] ) );
			$resultados["data"] = $data; 
			mysql_free_result($result);
			mysql_close($link);
$resultadosJson = json_encode($resultados);
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
?>