<?php
$path = __DIR__ . '/ipas';
$ipas = scandir($path);
foreach ($ipas as $ipa) {
    if ($ipa == '..' || $ipa == '.') {
        continue;
    }
    preg_match('/(.*)_.*\.ipa/', $ipa, $result);
    $pinyin = $result[1];
    $filePath = __DIR__ . '/games/' . $pinyin . '/ios/' . str_replace('.ipa','-dyt.ipa', $ipa);
    if (!is_dir(dirname($filePath))) {
        mkdir(dirname($filePath), 0777, true);
    }
//    copy($path . '/' . $ipa, $filePath);
    print_r($pinyin);
    print_r(PHP_EOL);
}