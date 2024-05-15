<?php
error_reporting(0);

$date = @date("l d F H:i:s");
$ip = $_SERVER['REMOTE_ADDR'];
$url = $_SERVER['REQUEST_URI'];
$agent = $_SERVER['HTTP_USER_AGENT'];

$fp = fopen("log.txt", "a");
fputs($fp, $ip." - DATE: ".$date." - [URL: ".$url."] | [Agent: ".$agent."] \n");
fclose($fp);

define("EMAIL", "asclgtool@gmail.com");
