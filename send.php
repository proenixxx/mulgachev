<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<title>Данные отправлены</title>
<body>
<?php
$name = $_POST['name'];
$country_code = $_POST['country_code'];
$phone_number = $_POST['phone_number'];
$email = $_POST['email'];
if (empty($email)) {
	if (mail("andreyka27@mail.ru", "Заявка с сайта", "".$name." +$country_code-$phone_number")) {    
		echo "<h1>Спасибо! Мы свяжемся с вами!</h1>"; 
	} else { 
	    echo "<h1>При отправке сообщения возникли ошибки :(</h1>";
	}
} else {
	if (mail("andreyka27@mail.ru", "Заявка с сайта", "".$name." +$country_code-$phone_number $email")) {   
		echo "<h1>Спасибо! Мы свяжемся с вами!</h1>"; 
	} else { 
	    echo "<h1>При отправке сообщения возникли ошибки :(</h1>";
	}
}
?>
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 1000);
</script> 

</body>
</html>