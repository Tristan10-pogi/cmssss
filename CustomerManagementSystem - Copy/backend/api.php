<?php
    include_once './config/database .php';
    include_once './header.php';
    
    header('Content-Type: application/json');

    $res = ['error' => false];
    $action = isset($_GET['action']) ? $_GET['action'] : '';
    switch($action) {
        case 'fetch':
            include './pages/fetch.php';
            fetchData();
            break;

        case 'login':
            login();
            break;
            
        case 'register':
            register();
            break;
            
        case 'add':
            addEmployee();
            break;
            
        case 'update':
            break;
            
        case 'delete':
            break;
            
        default:
            $res = [
                'error' => true,
                'message' => 'Invalid action'
            ];
            echo json_encode($res);
            break;
    }
   