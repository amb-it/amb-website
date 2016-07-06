<?php  

session_start();

if ($_POST) {

	if ($_POST['captcha'] == $_SESSION['captchacode']) {

		$to = 'ambitmain@gmail.com';

		if ($_SESSION['sent'] == true) {
			echo 'Вы недавно уже отправили нам сообщение. Мы ответим как только сможем.';
		}
		else {
			$headers = "From: amb.in.ua-USER <".$_POST['email'].">\r\nContent-type: text/html; charset=utf-8 \r\n";
			$subject = 'письмо с моего сайта';
			$message_text = 'имя - '.$_POST['name'].'<br>'.'Сообщение - '.$_POST['text'].'<br>';

			if (mail($to, $subject, $message_text, $headers)) {
				echo 'Ваше сообщение удачно отправлено. Мы постараемся ответить Вам как можно быстрее';
				$_SESSION['sent'] = true;
			}
			else {
				echo 'К сожалению, не удалось отправить сообщение. Попробуйте позже';
			}
		}
	}

	else {
		echo 'не верно введен проверочный код. Попробуйте еще раз или перезагрузите страницу.';
	}
}

?>