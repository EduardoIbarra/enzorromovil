<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ERROR | E_PARSE);
include("conexion.phtml");
$link=Conectarse();

$nombre = $_GET['nombres'];
$apellidos = $_GET['apellidos'];
$email = $_GET['email'];
$user_facebook_id = $_GET['user_facebook_id'];
$facebook_object = $_GET['facebook_object'];
$facebook_photo = $_GET['facebook_photo'];

if(isset($user_facebook_id) && !empty($user_facebook_id)){
    if(!empty($nombre)){
        mysql_query("INSERT INTO `usuariosinfox` (`login`,`nombres`,`apellidos`,`amaterno`, `password`, `email`, `domicilio`, `pais`,
                `estado`, `ciudades`, `telefono`, `link`, `online`, `idusuario`, `fecharegistro`, `sexo`, `estatus`, `ciudad`, `fechaacceso`,
                `premium`, `capturista`, `panel_capturistas`, `lastactivity`, `academica`, `experiencia`, `cve_promotor`, `banco`, `clabe`,
                `cuenta`, `titular`, `imguser`, `config`, `op_grafica`, `tiporegistro`, `pinfox`, `user_facebook_id`, `facebook_object`, `facebook_photo`) 
              VALUES ('','$nombre','$apellidos','','','$email','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','$user_facebook_id','$facebook_object','$facebook_photo')",$link);

        $response['registro_id'] = mysql_insert_id();

        $inserted_id = mysql_insert_id();
        $hash_id = md5($inserted_id);
        mysql_query("UPDATE `usuariosinfox` SET `hash_id` = '$hash_id' WHERE id=$inserted_id");
        $result=mysql_query("select * from usuariosinfox where id = $inserted_id");
        if (mysql_num_rows($result) == 0) {
	    	$result=mysql_query("select * from usuariosinfox where email = '$email'");    
        }
        $result = mysql_fetch_array($result);
        $response['user'] = $result;
    }
}else{
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['error']= "Formato no válido.";
        echo json_encode($response);
        die();
    }else{
        $password = $_GET['password'];
        $password2 = $_GET['password2'];
        $photo = '';//isset($_GET['photo']) ? $_GET['photo'] : '';
        if(strlen($password) < 6){
            $response['error']= "La contraseña debe ser de mínimo 6 carácteres.";
            echo json_encode($response);
            die();
        }else{
            if($password == $password2){

                $valida = mysql_query("select * from usuariosinfox where email = $email");
                if(mysql_fetch_array($valida)){
                    $response['error']= "El correo ya ha sido registrado.";
                    echo json_encode($response);
                    die();
                }else{
                    $password = md5($password);
                    $insert_result = mysql_query("INSERT INTO `usuariosinfox` (`login`,`nombres`,`apellidos`,`amaterno`, `password`, `email`, `domicilio`, `pais`,
                `estado`, `ciudades`, `telefono`, `link`, `online`, `idusuario`, `fecharegistro`, `sexo`, `estatus`, `ciudad`, `fechaacceso`,
                `premium`, `capturista`, `panel_capturistas`, `lastactivity`, `academica`, `experiencia`, `cve_promotor`, `banco`, `clabe`,
                `cuenta`, `titular`, `imguser`, `config`, `op_grafica`, `tiporegistro`, `pinfox`, `user_facebook_id`, `facebook_object`, `facebook_photo`) 
              VALUES ('','$nombre','$apellidos','','$password','$email','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','$photo')",$link);

                    if ( $insert_result === false ){
                        $response['error'] = 'El correo ya ha sido registrado.';
                        echo json_encode($response);
                        die();
                    }else{
                        $inserted_id = mysql_insert_id();
                        $hash_id = md5($inserted_id);
                        mysql_query("UPDATE `usuariosinfox` SET `hash_id` = '$hash_id' WHERE id=$inserted_id");
                        
                        
                        $message = '<html><body>';
                        $message .= '<b>Bienvenido a Infox, para completar el registro da clic <a href="http://infoxsoft.com/app/completa_registro.php?token=' . $hash_id . '" >aquí</a></b>';
                        $message .= '</body></html>';
                        
                        require_once "Mail.php";

						$from = 'infoxnotificacion@gmail.com';
						$to = $email;
						$subject = 'Activa tu cuenta en Infox!';
						$body = $message;
						
						$headers = array(
						    'From' => $from,
						    'To' => $to,
						    'Subject' => $subject,
						    'MIME-Version' => 1,
							'Content-type' => 'text/html;charset=iso-8859-1'
						);
						
						$smtp = Mail::factory('smtp', array(
						        'host' => 'ssl://smtp.gmail.com',
						        'port' => '465',
						        'auth' => true,
						        'username' => 'infoxnotificacion@gmail.com',
						        'password' => 'aora1345678'
						    ));
						
						$mail = $smtp->send($to, $headers, $body);
						
						if (PEAR::isError($mail)) {
						    echo('<p>' . $mail->getMessage() . '</p>');
						    die();
						}
                        
						/*require("class.phpmailer.php"); 
						$mail = new PHPMailer();  
						$mail->IsSMTP();  
						$mail->Mailer = "smtp";
						$mail->Host = "ssl://smtp.gmail.com";
						$mail->Port = 465;
						$mail->SMTPAuth = true; 
						$mail->Username = "infoxnotificacion@gmail.com"; 
						$mail->Password = "aora1345678";  
						$mail->From     = "infoxnotificacion@gmail.com";
						$mail->FromName = "Infox";
						$mail->AddAddress($email);  
						$mail->Body = $message;
						
						$mail->isHTML(true);
						
						$mail->Subject  = "Activar tu cuenta en Infox";
						
						if(!$mail->Send()) {
						  echo 'Mensaje no enviado.';
						}*/
	

                        /*$to = $email;

                        $subject = 'Registro Infox';

                        $headers = "From: " . strip_tags($email) . "\r\n";
                        $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
                        $headers .= "MIME-Version: 1.0\r\n";
                        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
                        $message = '<html><body>';
                        $message .= '<b>Bienvenido a Infox, para completar el registro da clic <a href="http://infoxsoft.com/app/completa_registro.php?token=" ' . $hash_id . ' >aquí</a></b>';
                        $message .= '</body></html>';

                        mail($to, $subject, $message, $headers);*/

                        $result=mysql_query("select * from usuariosinfox where id = $inserted_id");
                        $result = mysql_fetch_array($result);
                        $response['user'] = $result;
                    }
                }
            }else{
                $response['error']= "Las contraseñas no coinciden.";
                echo json_encode($response);
                die();
            }
        }
    }
}



mysql_close($link);


echo json_encode($response);

?>