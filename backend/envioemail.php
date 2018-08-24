<?php 
$email_negocio="aayr2000@hotmail.com";
$idnegocio=3;
$contador=100;
require("class.phpmailer.php"); 
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
$mail->AddAddress($email_negocio);  
$htmlBody = '';  
$email_liga="https://www.infox.mx/mailing_clics.php?id=".$idnegocio."&clics=".$contador;     
$mail->Body = file_get_contents($email_liga);

$mail->isHTML(true);

$mail->Subject  = "Te han enviado un mensaje usando infox, es importante";

if(!$mail->Send()) {
  echo 'Mensaje no enviado.';
	}
?>