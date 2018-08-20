<?php

    function genormovil($te,$page) {

        $a=split(" ",$te." �");

        $r="";

        $r1="";

        $r2="";

        for ($i=0;$a[$i]!="�";$i++) if (strlen(rtrim($a[$i]))>0) {

        	$qq=mysql_query("select count(*) as n from palabras where palabra='".rtrim($a[$i])."'");

        	$ff=mysql_fetch_array($qq);

        	if ($ff['n']==0) {

	            if ($r<>"") $r.=" and ";

    	        if ($r1<>"") $r1.="+";

        	    $r.="(concat(' ',a.palabras,' ') like '% ".rtrim(ltrim($a[$i]))." %')";

            	$r1.="if(concat(' ',a.palabras,' ') like '% ".rtrim(ltrim($a[$i]))." %',1,0)";

            }

        }

        if ($r<>"") {	
			$r=" where ".$r;
			$idciudads=$_SESSION["idciudad"];
			if ($idciudads <> "" && $idciudads <> "0") {
				$r.=" and b.idciudad = a.ciudad and a.ciudad=$idciudads";
			}else{
				$r.=" and b.idciudad = a.ciudad";
			}
		} else {
			$r=" where b.idciudad = a.ciudad";
		}



        if ($r1<>"") {

            $r1=", (".$r1.") as roc";

			if($page == 0){

	            //$r2=" order by a.activo desc, a.ciudad asc, a.nombre asc";
				$r2=" order by a.plan desc, a.ciudad asc, a.clasificacion asc, a.nombre asc";

			}else{

				//$r2=" order by a.activo desc, a.ciudad asc, a.nombre asc limit ".(($page*15)-15).",15";
				$r2=" order by a.plan desc, a.ciudad asc, a.clasificacion asc, a.nombre asc limit ".(($page*15)-15).",15";

			}

        }

		//if($page == 0){

		//	return "select COUNT(a.idnum) as total from directorio as a, ciudades as b$r$r2";

		//}else{

			return "select a.idnum, a.horario, a.comentario, a.fecharegistro, a.flash, a.web, a.applet, nombre, a.activo, a.imagen, a.plan, a.casa, a.ciudad, a.nextel, a.croquis, a.latitud, a.longitud, a.domicilio, a.celular, a.linkbtn10, a.swlink, a.linktexto, a.linkinfo, b.ciudad as ciudadz, b.ESTADO as nestado, a.btn1, a.recomendar, a.otrosdatos, a.clasificacion, a.telefonos$r1 from directorio as a, ciudades as b$r$r2";

		//}

    }

?>