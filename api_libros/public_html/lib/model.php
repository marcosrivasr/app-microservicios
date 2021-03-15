<?php

include_once 'lib/imodel.php';

class Model{

    function __construct(){
        $this->db = new Database();
    }

    function query($query){
        return $this->db->connect()->query($query);
    }

    function prepare($query){
        return $this->db->connect()->prepare($query);
    }
}

?>