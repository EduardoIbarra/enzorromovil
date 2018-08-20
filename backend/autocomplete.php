<?php
include("conexion.phtml"); 
$link=Conectarse();
/* Define los valores que seran evaluados, en este ejemplo son valores estaticos,
en una verdadera aplicacion generalmente son dinamicos a partir de una base de datos */
/* Extrae los valores enviados desde la aplicacion movil */
/* crea un array con datos arbitrarios que seran enviados de vuelta a la aplicacion */
$termino = $_GET['termino'];


function eliminar_acentos($str){
	$a = array('À','Á','Â','Ã','Ä','Å','Æ','Ç','È','É','Ê','Ë','Ì','Í','Î','Ï','Ğ','Ñ','Ò','Ó','Ô','Õ','Ö','Ø','Ù','Ú','Û','Ü','İ','ß','à','á','â','ã','ä','å','æ','ç','è','é','ê','ë','ì','í','î','ï','ñ','ò','ó','ô','õ','ö','ø','ù','ú','?»','ü','ı','ÿ','A','a','A','a','A','a','C','c','C','c','C','c','C','c','D','d','Ğ','d','E','e','E','e','E','e','E','e','E','e','G','g','G','g','G','g','G','g','H','h','H','h','I','i','I','i','I','i','I','i','I','i','?','?','J','j','K','k','L','l','?»','l','L','l','?','?','L','l','N','n','N','n','N','n','?','O','o','O','o','O','o','Œ','œ','R','r','R','r','R','r','S','s','S','s','S','s','Š','š','T','t','T','t','T','t','U','u','U','u','U','u','U','u','U','u','U','u','W','w','Y','y','Ÿ','Z','z','?»','z','','','?','ƒ','O','o','U','u','?','?»','?','?','?','?');
	$b = array('A','A','A','A','A','A','AE','C','E','E','E','E','I','I','I','I','D','N','O','O','O','O','O','O','U','U','U','U','Y','s','a','a','a','a','a','a','ae','c','e','e','e','e','i','i','i','i','n','o','o','o','o','o','o','u','u','u','u','y','y','A','a','A','a','A','a','C','c','C','c','C','c','C','c','D','d','D','d','E','e','E','e','E','e','E','e','E','e','G','g','G','g','G','g','G','g','H','h','H','h','I','i','I','i','I','i','I','i','I','i','IJ','ij','J','j','K','k','L','l','L','l','L','l','L','l','l','l','N','n','N','n','N','n','n','O','o','O','o','O','o','OE','oe','R','r','R','r','R','r','S','s','S','s','S','s','S','s','T','t','T','t','T','t','U','u','U','u','U','u','U','u','U','u','U','u','W','w','Y','y','Y','Z','z','Z','z','Z','z','s','f','O','o','U','u','A','a','I','i','O','o','U','u','A','a','AE','ae','O','o');
	return str_replace($a, $b, $str);
}

$cadenabusqueda = eliminar_acentos($termino);

$termino = str_replace("+"," ",$cadenabusqueda);
$termino = str_replace(","," ",$termino);
$termino = str_replace("."," ",$termino);

function eliminar_acentos2($str){
	$a = array('%C3%A1','%C3%A9','%C3%AD','%C3%B3','%C3%BA','%C3%B1','%C3%91');
	$b = array('a','e','i','o','u','ñ','Ñ');
	return str_replace($a, $b, $str);
}
$termino = eliminar_acentos2($termino);



$resultados = array();
/* verifica que el usuario y password concuerden correctamente */
	if(!empty($termino))
	{
			
			$resultados["validacion"] = "ok";
			$data = array();
			$result=mysql_query("SELECT * FROM busquedas WHERE cadena LIKE '%" . $_GET['termino'] . "%' and cantidad > 1 and resultados <> 0 order by cantidad desc limit 10");
			while($row = mysql_fetch_array($result)) {
					array_push($data,array("cadena" => $row["cadena"]) );
			}
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