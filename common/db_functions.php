<?php
function get_module_attributes($module_id){
    global $connection;
    $qs = "SELECT * FROM attributes WHERE module_id = {$module_id}";
    
    $q = mysqli_query($connection, $qs);
    
    if($q){
        $attr = [];
        while($row = mysqli_fetch_assoc($q)){
            $attr[$row['attr_name']] = $row['attr_value_str'];
        }
        return $attr;
    }
    
}

function get_modules_for_page($page_id){
    global $connection;
    $qs = "SELECT modules.module_id as module_id, templates.tmpl_name as tmpl_name FROM modules, templates WHERE modules.mod_tmpl_id = templates.tmpl_id AND page_id = {$page_id} ORDER BY modules.mod_order";
    
    $q = mysqli_query($connection, $qs);
    
    if($q){
        $modules = [];
        while($row = mysqli_fetch_assoc($q)){
            $modules[$row['module_id']] = $row['tmpl_name'];
        }
        return $modules;
    }
}

function update_module_attrs($module_id, $attrs){
    global $connection;
    foreach($attrs as $key => $value){
        $qs = "UPDATE attributes SET attr_value_str='{$value}' WHERE attr_name='{$key}' AND module_id = {$module_id}";
        
        echo $qs;
        
        $q = mysqli_query($connection, $qs);
    }
}
?>