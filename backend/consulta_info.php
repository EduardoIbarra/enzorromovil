<?php
include("conexion.phtml"); 
error_reporting(0);
$link=Conectarse();
/* Define los valores que seran evaluados, en este ejemplo son valores estaticos,
en una verdadera aplicacion generalmente son dinamicos a partir de una base de datos */
/* Extrae los valores enviados desde la aplicacion movil */
/* crea un array con datos arbitrarios que seran enviados de vuelta a la aplicacion */

$_SERVER["HTTP_CLIENT_IP"]!=""?$ip=$_SERVER["HTTP_CLIENT_IP"]:
$ip = $HTTP_SERVER_VARS['REMOTE_ADDR'] || '127.0.0.1'; 
//
$url = $_SERVER['HTTP_REFERER']; 
$nombredeip= gethostbyaddr($ip);
$hoy = date("y.m.d");  
$hora= date("H:i:s"); 



$idnum = $_GET['idnum'];
$resultados = array();
/* verifica que el usuario y password concuerden correctamente */
	if(!empty($idnum))
	{		
			$result=mysql_query("select visitas,idnum,ciudad,nombre,clasificacion from directorio where idnum = $idnum");
			$row = mysql_fetch_array($result);
			$ciudad = $row["ciudad"];
			$nombre = $row["nombre"];
			$clasificacion = $row["clasificacion"];
			$contador = $row["visitas"];
			$contador = $contador + 1;
			
			//$result3=mysql_query("select nombre,fecha,ip,idnum from registroclick where idnegocio = $idnum and fecha = '$hoy' and ip = '$nombredeip' order by idnum limit 8",$link); 
			//$total_rows = mysql_num_rows($result3); 
			//if($total_rows <= 5)
			//	{
				if(!empty($idnum))
					{
						//mysql_query("UPDATE clics SET visitas = $clics WHERE idnegocio = $id",$link); 
					}
				else
					{
						//mysql_query("INSERT INTO clics (ip,visitas,idnegocio) VALUES ('$nombredeip',$clics,$id)",$link);
					}
     
					mysql_query("UPDATE directorio SET visitas = $contador WHERE idnum = $idnum",$link);
					$nombredeip = "APP ".$nombredeip;
					mysql_query("INSERT INTO registroclick (fecha,ip,hora,nombre,clasificacion,ciudad,visitas,accion,idnegocio,usuario) VALUES ('$hoy', '$nombredeip', '$hora', '$nombre', '$clasificacion', '$ciudad', $contador,'CONSULTADO',$idnum,'APP')",$link);
			//	}
			
			$result2=mysql_query("select nombreimg,idcliente from galeriafotos where idcliente = $idnum and nombreimg <> '' limit 1");
			$row2 = mysql_fetch_array($result2);
			if(!empty($row2["nombreimg"])){ $resultados["fotos"] = "1"; } else { $resultados["fotos"] = "0"; }
			
			$result2=mysql_query("select nombreimg,idcliente,idnum from menuplatillos where idcliente = $idnum and nombreimg <> '' order by idnum desc limit 1");
			$row2 = mysql_fetch_array($result2);
			if(!empty($row2["nombreimg"])){ $resultados["menu"] = "1"; $resultados["idmenu"] = $row2["idnum"]; } else { $resultados["menu"] = "0"; }
			

			$resultados["validacion"] = "ok";
			$data = array();
			$result=mysql_query("select * from directorio where idnum = $idnum");
			while($row = mysql_fetch_array($result)) {
					
					$ciudad = $row["ciudad"];
					
					$result2=mysql_query("select * from ciudades where idciudad = $ciudad limit 1");
					$row2 = mysql_fetch_array($result2);
					$ciudades = $row2["ciudad"];
					$estados = $row2["ESTADO"];
					$reviews = array();
                    $reviews_select = mysql_query("select cd.calificacion, cd.comentario, u.nombres, u.apellidos, DATE_FORMAT(cd.creado, '%e %M %Y %r') as creado from calificacion_directorio cd 
                                  inner join usuariosinfox u on u.id = cd.id_usuario
                                  where id_directorio = $idnum");
                    $count_review=0;
                    $sum_review=0;
                    while($review = mysql_fetch_array($reviews_select)) {
                        $r['calificacion'] = $review['calificacion'];
                        $r['comentario'] = $review['comentario'];
                        $r['nombres'] = $review['nombres'];
                        $r['apellidos'] = $review['apellidos'];
                        $r['creado'] = $review['creado'];
                        $count_review++;
                        $sum_review += $review['calificacion'];
                        array_push($reviews, $r);
                    }
                    $average_review = $sum_review / $count_review;
                    //$reviews = mysql_fetch_array($reviews);
                    array_push($data,array("web" => $row["web"], "nombre" => $row["nombre"], "linkfb" => $row["linkbtn10"], "clasificacion" => $row["clasificacion"], "banner" => $row["imagen2"], "plan" => $row["plan"], "horarios" => $row["horario"], "ciudad" => $ciudades, "estado" => $estados, "otrosdatos" => strtolower($row["otrosdatos"]), "casa" => strtolower($row["casa"]), "latitud" => $row["latitud"], "longitud" => $row["longitud"], "idnum" => $row["idnum"], "domicilio" => $row["domicilio"], "telefonos" => nl2br($row["telefonos"]), "visitas" => $row["visitas"], "idciudad" => $row["ciudad"], "informacion" => $row["informacion"], "reviews" => $reviews, "promedio_calificacion" => $average_review,"num_resenas" => $count_review));
			}
			$resultados["data"] = $data;
			//Obteniendo platillos
			$resultados["platillos"] = array();
			$cliente = $idnum;
			$result_platillos = mysql_query("SELECT * FROM menuplatillos WHERE idcliente = $cliente");
			while($platillo = mysql_fetch_array($result_platillos)) {
				$resultados["platillos"][] = $platillo;
			}
			$resultados["galeria"] = array();
			$result_galeria = mysql_query("SELECT * FROM galeriafotos WHERE idcliente = $cliente ORDER BY noimagen");
			while($g = mysql_fetch_array($result_galeria)) {
				$resultados["galeria"][] = $g;
			}
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