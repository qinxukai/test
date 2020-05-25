<?php

return [
    /*'echo' => function($rootValue, $args, $context) {
        return "123";
    },*/
    'game' => function($rootValue, $args, $context) {
        return [
            'id' => '1334',
            'name' => '神之路',
        ];
    },
];

interface download {
    public function getDownloadUrl();
}

class miluDownload implements download{

    public function getDownloadUrl()
    {
        // TODO: Implement getDownload() method.
    }
}

class aiquDownload implements download{

    public function getDownloadUrl()
    {
        // TODO: Implement getDownload() method.
    }
}
