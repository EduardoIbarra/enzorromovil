<?php
include("conexion.phtml"); 
$link=Conectarse();
$fecha= date("Y-m-d");
$idnegocio = $_GET['idnegocio'];
$dia=$_GET['dia'];
$resultados = array();
/* verifica que el usuario y password concuerden correctamente */
	if(!empty($idnegocio))
	{
			//$result=mysql_query("SELECT visitas,idnum FROM avisos  WHERE idnum = $idnum");
			//$row = mysql_fetch_array($result);
			//$contador = $row["visitas"];
			//$contador = $contador + 1;
			
			//mysql_query("UPDATE avisos SET visitas = $contador WHERE idnum = $idnum",$link); 
			
			$resultados["validacion"] = "ok";
			$data = array();
			//$result=mysql_query("SELECT * , avisos.visitas as visitaaviso FROM avisos,directorio WHERE directorio.idnum = avisos.idcliente and avisos.idnum = $idnum");
			//while($row = mysql_fetch_array($result)) {
					//$ciudad = $row["ciudad"];
					
					
					//$result2=mysql_query("select * from ciudades where idciudad = $ciudad limit 1");
					//$row2 = mysql_fetch_array($result2);
					//$ciudades = $row2["ciudad"];
					//$estados = $row2["ESTADO"];
					
					
					//$result=mysql_query("SELECT * FROM avisos  WHERE idcliente = $idnegocio and dia = '$dia' and '$fecha' >= fechainicio and '$fecha' <= fechafinal order by idnum desc limit 1");
					$result=mysql_query("SELECT * FROM avisos  WHERE idcliente = $idnegocio and dia = '$dia' order by idnum desc limit 1");
					$row = mysql_fetch_array($result);
					array_push($data,array("titulo" => $row["titulo"], "descripcion" => $row["descripcion"], "idanuncio" => $row["idnum"] ) );
			//}
			$resultados["data"] = $data;
	}
	else {
		} 
mysql_free_result($result);
mysql_close($link);
/*convierte los resultados a formato json*/
$resultadosJson = json_encode($resultados);
/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
?>