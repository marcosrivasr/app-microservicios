<?php

class Login extends Controller{

    function __construct(){
        parent::__construct();
    }

    function render(){
        //$this->view->render('login/index');
        
        echo '{"mensaje": "Hola desde PHP"}';
    }

    function authenticate(){
    }

    function saludo(){
        
    }
}

?>