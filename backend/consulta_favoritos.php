<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);
include("conexion.phtml");
$link=Conectarse();

$id_usuario = $_GET['id_usuario'];
$negociosFav = array();

$result_select=mysql_query("select d.nombre nombre_negocio,u.nombres nombre_usuario,u.apellidos apellidos_usuario, f.nota_personal, f.id_directorio
                           from favoritos f 
                           inner join directorio d on d.idnum = f.id_directorio
                           inner join usuariosinfox u on u.id = f.id_usuario 
                           where f.id_usuario = $id_usuario");

$arr_favoritos = array();
while($row = mysql_fetch_array($result_select)){
    $id_directorio = $row['id_directorio'];
    $negociosFav[] = $id_directorio;
    //echo $id_directorio;
    $result=mysql_query("select visitas,idnum,ciudad,nombre,clasificacion from directorio where idnum = $id_directorio");
    $row = mysql_fetch_array($result);
    $idnum = $row['idnum'];
    $ciudad = $row["ciudad"];
    $nombre = $row["nombre"];
    $clasificacion = $row["clasificacion"];

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

        array_push($data,array("web" => $row["web"], "nombre" => $row["nombre"], "linkfb" => $row["linkbtn10"], "clasificacion" => $row["clasificacion"], "banner" => $row["imagen2"], "plan" => $row["plan"], "horarios" => $row["horario"], "ciudad" => $ciudades, "estado" => $estados, "otrosdatos" => strtolower($row["otrosdatos"]), "casa" => strtolower($row["casa"]), "latitud" => $row["latitud"], "longitud" => $row["longitud"], "idnum" => $row["idnum"], "domicilio" => $row["domicilio"], "telefonos" => nl2br($row["telefonos"]), "visitas" => $row["visitas"], "idciudad" => $row["ciudad"], "informacion" => $row["informacion"] ));
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
    $arr_favoritos[] = $resultados;
}

$response['favoritos_info'] = $arr_favoritos;
$response['negociosFav'] = $negociosFav;

echo json_encode($response);

?>