<?php
include("conexion.phtml"); 
$link=Conectarse();

$ip = $HTTP_SERVER_VARS['REMOTE_ADDR']; 
$hoy = date("y.m.d");  
$hora= date("H:i:s"); 

/* Define los valores que seran evaluados, en este ejemplo son valores estaticos,
en una verdadera aplicacion generalmente son dinamicos a partir de una base de datos */
/* Extrae los valores enviados desde la aplicacion movil */
include("genor.php"); 
/* crea un array con datos arbitrarios que seran enviados de vuelta a la aplicacion */
$cadena = $_GET['termino'];
$page = $_GET['page'];
$ciudad = $_GET['ciudad'];
$dia = $_GET['dia'];

function eliminar_acentos($str){
	$a = array('�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','�','?�','�','�','�','A','a','A','a','A','a','C','c','C','c','C','c','C','c','D','d','�','d','E','e','E','e','E','e','E','e','E','e','G','g','G','g','G','g','G','g','H','h','H','h','I','i','I','i','I','i','I','i','I','i','?','?','J','j','K','k','L','l','?�','l','L','l','?','?','L','l','N','n','N','n','N','n','?','O','o','O','o','O','o','�','�','R','r','R','r','R','r','S','s','S','s','S','s','�','�','T','t','T','t','T','t','U','u','U','u','U','u','U','u','U','u','U','u','W','w','Y','y','�','Z','z','?�','z','�','�','?','�','O','o','U','u','?','?�','?','?','?','?');
	$b = array('A','A','A','A','A','A','AE','C','E','E','E','E','I','I','I','I','D','N','O','O','O','O','O','O','U','U','U','U','Y','s','a','a','a','a','a','a','ae','c','e','e','e','e','i','i','i','i','n','o','o','o','o','o','o','u','u','u','u','y','y','A','a','A','a','A','a','C','c','C','c','C','c','C','c','D','d','D','d','E','e','E','e','E','e','E','e','E','e','G','g','G','g','G','g','G','g','H','h','H','h','I','i','I','i','I','i','I','i','I','i','IJ','ij','J','j','K','k','L','l','L','l','L','l','L','l','l','l','N','n','N','n','N','n','n','O','o','O','o','O','o','OE','oe','R','r','R','r','R','r','S','s','S','s','S','s','S','s','T','t','T','t','T','t','U','u','U','u','U','u','U','u','U','u','U','u','W','w','Y','y','Y','Z','z','Z','z','Z','z','s','f','O','o','U','u','A','a','I','i','O','o','U','u','A','a','AE','ae','O','o');
	return str_replace($a, $b, $str);
}

$cadenabusqueda = eliminar_acentos($cadena);

$cadena = str_replace("+"," ",$cadenabusqueda);
$cadena = str_replace(","," ",$cadena);
$cadena = str_replace("."," ",$cadena);

function eliminar_acentos2($str){
	$a = array('%C3%A1','%C3%A9','%C3%AD','%C3%B3','%C3%BA','%C3%B1','%C3%91');
	$b = array('a','e','i','o','u','�','�');
	return str_replace($a, $b, $str);
}
$cadena = eliminar_acentos2($cadena);

if(empty($page)){
	$page="1";
}
$resultados = array();
/* verifica que el usuario y password concuerden correctamente */
	if(!empty($cadena))
	{
		//$result=mysql_query("select * from directorio where nombre like '% $cadena %' order by idnum limit 15");
		//if ($row = mysql_fetch_array($result)){		
		
			
			$resultc=mysql_query(genor($cadena,"0",$ciudad));
			while($rowc = mysql_fetch_array($resultc)) 
			{$n=$rowc["total"];}	
			$resultados["filas"] = $n;
			
			
			$terminos = trim($terminos);
			$result=mysql_query("select * from busquedas where cadena = '$terminos' limit 1",$link); 
			$row = mysql_fetch_array($result);
			$contador = $row["cantidad"];
			$contador = $contador + 1;
			
			if(!empty($row["cantidad"]))
				{
					mysql_query("UPDATE busquedas SET cantidad = $contador, resultados = $n where cadena = '$terminos'",$link); 
				}
				else
				{
						mysql_query("INSERT INTO busquedas (cadena,cantidad,resultados) VALUES ('$terminos',1,$n)",$link);
				}
			
			
			
			mysql_query("INSERT INTO busqueda (fecha,cadena,hora,ip,resultados,modulo,usuario) VALUES ('$hoy','$cadena','$hora','$ip',$n,'APP','APP')",$link);
	
			
			$result=mysql_query(genor($cadena,$page,$ciudad));
			$resultados["validacion"] = "ok";
			$resultados["cadenatexto"] = $cadena;
			//$result=mysql_query("select * from directorio where nombre like '%{$_REQUEST['nombre']}%' order by idnum limit 15");
			$data = array();
			$i=0;
			while($row = mysql_fetch_array($result)) {
                    $reviews_select = mysql_query("select cd.calificacion from calificacion_directorio cd 
                                      inner join usuariosinfox u on u.id = cd.id_usuario
                                      where id_directorio = " . $row["idnum"]);
                    $count_review=0;
                    $sum_review=0;
                    if(mysql_num_rows($reviews_select) > 0){
                        while($review = mysql_fetch_array($reviews_select)) {
                            $sum_review += $review['calificacion'];
                            $count_review++;
                        }
                    }
                    if($count_review !== 0){
                        $average_review = $sum_review / $count_review;
                    }else{
                        $average_review = 0;
                    }

                    array_push($data,array("nombre" => $row["nombre"], "clasificacion" => $row["clasificacion"], "banner" => $row["imagen"], "plan" => $row["plan"], "horarios" => $row["horario"], "ciudad" => strtolower($row["ciudadz"]), "estado" => strtolower($row["nestado"]), "otrosdatos" => strtolower($row["otrosdatos"]), "casa" => strtolower($row["casa"]), "latitud" => $row["latitud"], "idnum" => $row["idnum"], "linkfb" => $row["linkbtn10"], "longitud" => $row["longitud"], "promedio_calificacion" => $average_review, "num_resenas" => $count_review));
					//Obteniendo promociones
					$data[$i]["promos"] = array();
					$cliente = $row["idnum"];
					$result_promos = mysql_query("SELECT * FROM avisos WHERE idcliente = $cliente AND dia='$dia'");
					while($promo = mysql_fetch_array($result_promos)) {
						$data[$i]["promos"][] = array('promo_dia'=>$promo['dia'],'descripcion'=>$promo['descripcion'], 'idpromo'=>$promo['idnum']);
					}

                    $i++;
			}
			$resultados["data"] = $data;
	}
	else {
		} 
mysql_free_result($result);
mysql_free_result($resultc);
mysql_close($link);
/*convierte los resultados a formato json*/
$resultadosJson = json_encode($resultados);
/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';
?>