<?php

$lat=$_POST["lat"];
$lng=$_POST["lng"];

$bu=$_POST["b"];
$cl=$_POST["c"];

$npag=$_POST['np'];

if ($bu=="Buscar por palabra clave") $bu="";

//if ($bu) $bu=str_replace(" ", '%', " $bu ");
//if ($cl) $cl=str_replace(" ", '%', " $cl ");

$lat1=$lat-0.03;
$lat2=$lat+0.03;
$lng1=$lng-0.03;
$lng2=$lng+0.03;


// elementos por pagina
$elpp=20;

require_once("genormovil.php");
require_once('conexion.phtml');
$cn=conectarse();

//echo "- $bu - $cl $lat $lng<br><br>";

$fl="";
//if ($bu) $fl.="(palabras like '$bu') and ";
if ($cl) $fl.="(clasificacion='$cl') and ";

$l=array();
$qs=genormovil($bu,0);

if ($p=strpos($qs,"order")) {
	$qs1=substr($qs, $p);
	$qs=substr($qs,0,$p);
} else {
	$qs1="";
}
$qs.=" and $fl (latitud between $lat1 and $lat2) and (longitud between $lng1 and $lng2) ".$qs1;
//$qs.=$qs1;

/*$qs1="select count(*) as n ".substr($qs, strpos($qs,"from"));
if (!$q=mysql_query($qs1,$cn)) {
	echo "Error : ".mysql_error();
	return;
}
$f=mysql_fetch_array($q);
$nre=$f['n'];
mysql_free_result($q);*/

//echo "$qs <br>";
if (!$q=mysql_query($qs,$cn)) {
	echo "Error : ".mysql_error();
	return;
}
while ($f=mysql_fetch_array($q)) $l[]=array('dist' => distanciaGeodesica($lat,$lng,$dlat=$f['latitud'],$dlng=$f['longitud']), 'otrosdatos' => trim($f['otrosdatos']), 'idnum' => trim($f['idnum']), 'nombre' => trim($f['nombre']), 'plan' => trim($f['plan']), 'imagen' => trim($f['imagen']),'lat' => $dlat, 'lng' => $dlng,"dta" => $f);
//$l[($d=distanciaGeodesica($lat,$lng,$dlat=$f['latitud'],$dlng=$f['longitud'])).($nom=trim($f['nombre']))]=array('dist' => $d, 'nombre' => $nom,'lat' => $dlat, 'lng' => $dlng,"dta" => $f);
mysql_free_result($q);
array_multisort($l);

$nre=count($l);
if ($nre>$elpp) {
	$nups=intval($nre/$elpp);
	if ($nre % $elpp) $nups++;
	if ($npag<1) $npag=1;
	if ($npag>$nups) $npag=$nups;
	//echo "[ $nre $elpp $npag $nups ]<br>";
} else $npag="";
if ($npag) {
	$ri=(($npag-1)*$elpp)+1;
	$rf=$ri+$elpp;
	if ($rf>($nre+1)) $rf=$nre+1;
} else {
	$ri=1;
	$rf=$nre+1;
}

//echo "<div style=\"width:90%; height:20px; margin:0 auto; font-size:12px; color:#666;\">";
//printf("<strong><font color=black size=4 face=Arial>$nre</font></strong>");
//echo "<strong>resultados</strong></div>";
echo "<div id='contenedor_items'><ul class='items'>";
//$i=0;
//foreach ($l as $f) {

for ($i=$ri;$i<$rf;$i++) {
	$f=$l[$i-1];
	$idnegocio=$f['idnum'];
	$nom=$f['nombre'];
	$otrosdatos=$f['otrosdatos'];
	$img=$f['imagen'];
	$plan=$f['plan'];
	$dlat=$f['lat'];
	$dlng=$f['lng'];
	$dist=$f['dist'];
	$clas=$f['dta']['clasificacion'];
	$ima='https://www.infox.mx/'.$img;
	
	echo"<li>";
    echo"<a href='view.php?id=$idnegocio' class='item_btn'>";
	if($plan!=0){ echo"<img src='$ima' class='item_img' />"; } else { echo"<img src='//infox.mx/mobile/images/no_images.jpg' class='item_img' />"; }   
    echo"<div id='item_left'>";
    echo"<span class='item_number'>$i</span>";
    echo"<h1>$nom</h1>";
    //echo"<div class='review'><img src='review.png' class='item_img' /></div>";
    echo"<font color='blue'><div class='item_dir'>$clas</div></font>";
    echo"<div class='item_descripcion'>$otrosdatos</div>";
	echo"</div>";
	echo"<div id='item_right'>";
	echo"<div class='item_distancia'>$dist km</div>";
    echo"</div>";
	//echo"<div id='promo'> 2x1 en wraps!!!</div>";
	echo"</a>";
    echo"</li>";
}
echo "</ul></div>";
if ($npag) {
echo"<div id='breadcrum'>";
echo"<a href='#' onclick='setpoints($lat,$lng,1);' class='anterior'>Primero</a> <a href='#' onclick=\"setpoints($lat,$lng,".($npag-1).");\" class='anterior'>Anterior</a> <span class='num_paginas'>Pag. $npag/$nups</span>  <a href='#' onclick=\"setpoints($lat,$lng,".($npag+1).");\" class='siguiente'>Siguiente</a> <a href='#' onclick=\"setpoints($lat,$lng,$nups);\" class='siguiente'>Ultimo</a>";
echo"</div>";
}

	$idmap="Mapa";

echo "<%";
echo "var i=0; 
	infowindow.open(map$idmap);
	infowindow.setContent('Estas aqui.'); 
	infowindow.setPosition(new google.maps.LatLng($lat,$lng)); 
	for (i=0;i<nummarkers;i++) markers[i].setMap(null); 
	nummarkers=0;";
	//$n=0;
//foreach ($l as $f) {
for ($n=$ri;$n<$rf;$n++) {
	$f=$l[$n-1];
	//$n++;
	$nom=$f['nombre'];
	$dlat=$f['lat'];
	$dlng=$f['lng'];
	$dist=$f['dist'];
	$clas=$f['dta']['clasificacion'];
	$icono='https://www.infox.mx/marcadores/infox-01.png';

	if($clas=='BANCOS'){ $icono='https://www.infox.mx/marcadores/banks-01.png'; }
	if($clas=='IGLESIAS'){ $icono='https://www.infox.mx/marcadores/church-01.png'; }
	if($clas=='RESTAURANTES'){ $icono='https://www.infox.mx/marcadores/restaurant-01.png'; }
	if($clas=='HOSPITALES'){ $icono='https://www.infox.mx/marcadores/hospital-01.png'; }
	if($clas=='ESCUELAS'){ $icono='https://www.infox.mx/marcadores/school-01.png'; }
	if($clas=='CAJEROS AUTOMATICOS'){ $icono='https://www.infox.mx/marcadores/atm-01.png'; }
	if($clas=='GASOLINERAS'){ $icono='https://www.infox.mx/marcadores/gas-01.png'; }
	if($clas=='MUSEOS'){ $icono='https://www.infox.mx/marcadores/museum-01.png'; }
	if($clas=='HOTELES'){ $icono='https://www.infox.mx/marcadores/hotel-01.png'; }
	$lk=gitem($f['dta'],$bu,$dist);
	echo "var pos = new google.maps.LatLng($dlat,$dlng);

      markers[nummarkers] = new MarkerWithLabel({
        map: map$idmap,
        position: pos,
		icon: '$icono',
        title: '$nom ($dist km)',
        labelContent: '$n',
        labelAnchor: new google.maps.Point(1, 20),
        labelClass: 'mlabels'
      });
	(function(cont,mar){ google.maps.event.addListener(mar, 'click', function(){ infowindow.open(map$idmap,mar); infowindow.setContent(cont);  } ); })('$lk',markers[nummarkers]);
	
	nummarkers++;

";
}

echo "%>";
mysql_close($cn);

function distanciaGeodesica($lat1, $long1, $lat2, $long2) { 
	$degtorad = 0.01745329; 
	$radtodeg = 57.29577951; 

	$dlong = ($long1 - $long2); 
	$dvalue = (sin($lat1 * $degtorad) * sin($lat2 * $degtorad)) + (cos($lat1 * $degtorad) * cos($lat2 * $degtorad) * cos($dlong * $degtorad)); 

	$dd = acos($dvalue) * $radtodeg; 

	//$miles = ($dd * 69.16); 
	$km = number_format($dd * 111.302,2); 

	return $km; 
} 


function gitem($row,$terminos,$dist) {
	global $cn;
	$idnum=$row["idnum"];
	$nombre=safestr($row["nombre"]);
	$clasi=$row["clasificacion"];

	$r="";
	switch($row["plan"]) {
	case "": // gratis
		$r.="<li class=\"gratis\"><a href=\"view.php?id=$idnum&palabras=$terminos\"><h2>";
     	$r.="<strong>$nombre ($dist km)</strong></h2></a>";
		$r.="<a href=\"#\" class=\"categoria\"> <h3>".$row["clasificacion"]."</h3></a>";
		$r.="<div class=\"info\"><span><font color=\"blue\">";
		if (!empty($row["latitud"])) { 
		} 
		$r.=strtolower($row["ciudadz"]).', '.strtolower($row["nestado"])."</font></span><span>";
		if (!empty($row["horario"])) {
			$r.="<p>Horario: ".$row["horario"]."</p>";
		} 
		$r.="</span></div><div class=\"descripcion\">";
		if (!empty($row["otrosdatos"])) { 
			$r.=safestr($row["otrosdatos"]); 
		} else { 
			$r.=strtolower($row["casa"]); 
		} 
		$r.="</div></li>";
		break;
	case 2: //
		$r.="<li class=\"paga\"><a href=\"view.php?id=$idnum&palabras=$terminos;\">";
		$r.="<div class=\"thumb\" style =\"height:30px;\"><img style=\"height:30px;\" src=\"https://www.infox.mx/".$row["imagen"]."\" /></div></a>";
		$r.="<div class=\"info_item\"><a href=\"view.php?id=$idnum&palabras=$terminos\"><h2>";
		$r.="<strong>$nombre ($dist km)</strong></h2></a><a href=\"#\"><h3>$clasi</h3></a>";
		$r.="<div class=\"info\"><span>";
		if (!empty($row["latitud"])) {
		} 
		$r.=strtolower($row["ciudadz"]).', '.strtolower($row["nestado"])."<br /></span><span>";
		if (!empty($row["horario"])) {
			$r.="<p>Horario: ".$row["horario"]."</p>";
		} 
		$r.="</span></div></div>";
		$r.="<div class=\"descripcion\">";
		if (!empty($row["otrosdatos"])) { 
			$r.=safestr($row["otrosdatos"]); 
		} else { 
			$r.=safestr(strtolower($row["casa"])); 
		} 
		$r.="</div></li>";
		break;
	case 3: //
		$r.="<li class=\"paga\"><a href=\"view.php?id=$idnum&palabras=$terminos;\">";
		$r.="<div class=\"thumb\" style =\"height:30px;\"><img style=\"height:30px;\" src=\"https://www.infox.mx/".$row["imagen"]."\" /></div></a>";
		$r.="<div class=\"info_item\"><a href=\"view.php?id=$idnum&palabras=$terminos\"><h2>";
		$r.=$row["nombre"]." ($dist km)</h2></a><a href=\"#\"> <h3>$clasi</h3></a>";
		$r.="<div class=\"info\"><span>";
		if (!empty($row["latitud"])) { 
		} 
		$r.=strtolower($row["ciudadz"]).', '.strtolower($row["nestado"])."<br /></span></div></div>";
		$r.="<div class=\"descripcion\"> <span>";
		if (!empty($row["horario"])) {
			$r.="<p>Horario: ".$row["horario"]."</p>";
		} 
		$r.="</span></br>";
		if (!empty($row["otrosdatos"])) { 
			$r.=safestr($row["otrosdatos"]); 
		} else { 
			$r.=safestr(strtolower($row["casa"])); 
		} 
		$r.="</div></li>";
		break;
	case 4: //
		$r.="<li class=\"paga\">";
		$r.="<a href=\"view.php?id=$idnum&palabras=$terminos\"><div class=\"thumb\" style =\"height:30px;\"><img style =\"height:30px;\" src=\"https://www.infox.mx/".$row["imagen"]."\" /></div></a>";
		$r.="<div class=\"info_item\"><a href=\"view.php?id=$idnum&palabras=$terminos\"><h2><strong>";
		$r.=$row["nombre"]." ($dist km)</strong></h2></a><a href=\"#\"> <h3>$clasi</h3></a>";
		$r.="<div class=\"info\"><span><font color=\"blue\">";
		if (!empty($row["latitud"])) {
		} 
		$r.=strtolower($row["ciudadz"]).', '.strtolower($row["nestado"])."</font><br /></span></div></div>";
		$r.="<div class=\"descripcion\"><strong><span>";
		if (!empty($row["horario"])) {
			$r.="<p>Horario: ".$row["horario"]."</p>";
		} 
		$r.="</span></strong>";
		if (!empty($row["otrosdatos"])) { 
			$r.=$row["otrosdatos"]; 
		} else { 
			$r.=strtolower($row["casa"]); 
		} 
		$r.="</div>";
		
		$idnegocio =$row["idnum"];
		$result3=mysql_query("select idnum,idcliente,titulo,comentarios from avisos where idcliente = $idnegocio and dia = '$dia' order by idnum desc limit 1",$cn);
		$row3 = mysql_fetch_array($result3);
		if (!empty($row3["titulo"])) {
			$r.="<div class=\"promo\"><strong><font color=\"blue\">Hoy $dia ".$row3["titulo"]."</font></strong></div>";
		}
		$idnegocio = $row["idnum"]; 
		$result2=mysql_query("select idcliente from menuplatillos where idcliente = $idnegocio limit 1"); 
		$row2 = mysql_fetch_array($result2); 
		if (!empty($row2["idcliente"])) {
			$r.="<div><a href=\"http://www.infox.mx/platillos.php?id=$idnum\"><strong>Men&uacute; de platillos</strong></a> |</div>";
		}
 		$r.="</li>";
		break;
	}
	$r=str_replace("\n", "", $r);
	$r=str_replace("\r", "", $r);
	$r=str_replace("'", "\\'", $r);
	$r=str_replace('"', "\\".'"', $r);
	return($r);
}

function safestr($str) {
	$r=$str;
	$r=htmlentities($r);
	$r=str_replace("'","&#39;",$r);
	$r=str_replace('"',"&quot;",$r);
	$r=str_replace("\n","<br>",$r);
	return($r);
}

/*
	//alert(lat+' '+lng);
      var pos = new google.maps.LatLng(lat-0.02,lng-0.02);

      var infowindow = new google.maps.InfoWindow({
        map: map$idmap,
        position: pos,
        content: 'Estas cerca aqui.'
      });


      idnum
palabras
palabrasextras
nombre
clasificacion
domicilio
pais
estado
ciudades
ciudad
cp
colonia
fecha
nextel
casa
celular
telefonos
email
email2
nocliente
imagen
flash
imagen2
activo
visitas
croquis
croquis2
texto
plan
web
video
applet
fecharegistro
fechacontrato
fechavencimiento
vendedor
historial
estatus
formapago
horario
swlink
linktexto
linkinfo
referencia
comentario
swecom
informacion
btn1
linkbtn1
btn2
linkbtn2
btn3
linkbtn3
btn4
linkbtn4
btn5
linkbtn5
btn6
add_publi
c_validada
info_validada
subdominio
opcioncredito
latitud
longitud
btn10
linkbtn10
fechaclick
usuario
youtube
creado
creadopor
facebook
twitter
idusuario
otrosdatos
factura
encendido
recomendar
config_sitio
sd
*/
?>