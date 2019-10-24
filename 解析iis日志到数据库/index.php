<?php
error_reporting(E_ERROR);

$pdo = new \PDO('mysql:host=127.0.0.1;dbname=weblog', 'root', 'root');

$path = __DIR__ . '/log';
foreach (scandir($path) as $file) {
    if (strpos($file, '.log')) {
        file_get_contents($file);
        $file = fopen($path . '/' . $file, "r");
        while (!feof($file)) {
            $log = fgets($file);
            if (empty($log) || strpos($log, '#') === 0) {
                continue;
            }
            $data = explode(' ', $log);

            $url = $data[4] . ($data[5] == '-' ? '' : ('?' . $data[5]));
            $ip = $data[2];
            $time = strtotime($data[0] . ' ' . $data[1]);
            $referrer = $data[count($data) - 5];
            if ($referrer == '-') {
                $referrer = '';
            }

            $pdo->exec('INSERT INTO log(`url`, `ip`, `time`, `referrer`) VALUES (\'' . $url . '\', \'' . $ip . '\', \'' . $time . '\', \'' . $referrer . '\')');
        }
    }
}