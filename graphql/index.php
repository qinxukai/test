<?php

use GraphQL\GraphQL;
use GraphQL\Utils\BuildSchema;

require_once __DIR__ . '/../vendor/autoload.php';

try {
    $schema = BuildSchema::build(file_get_contents(__DIR__ . '/schema.graphqls'));
    $rootValue = include __DIR__ . '/rootvalue.php';
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    $result = GraphQL::executeQuery($schema, $input['query'], $rootValue, null, null);
} catch (\Exception $e) {
    $result = [
        'error' => [
            'message' => $e->getMessage()
        ]
    ];
}
header('Content-Type: application/json; charset=UTF-8');
echo json_encode($result);

