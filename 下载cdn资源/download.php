<?php
require_once __DIR__ . '/../vendor/autoload.php';

$files = [
    'https://cdn.bootcss.com/twig.js/0.8.9/twig.min.js',
    'https://cdn.bootcss.com/URI.js/1.19.1/URI.min.js',
    'https://cdn.bootcss.com/mobile-detect/1.4.3/mobile-detect.min.js',
];

$path = __DIR__ . '/files';

foreach ($files as $file) {
    $filePath = $path . parse_url($file)['path'];
    if (!is_dir(dirname($filePath))) {
        mkdir(dirname($filePath), 0777, true);
    }
    file_put_contents($filePath, file_get_contents($file));
}