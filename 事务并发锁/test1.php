<?php
error_reporting(E_ERROR);
$pdo = new \PDO('mysql:host=127.0.0.1;dbname=sdk', 'root', 'root');

$pdo->beginTransaction();
$pdo->exec('UPDATE `tmp` SET `value` = value+1 WHERE `id` = 1;');
$pdo->commit();