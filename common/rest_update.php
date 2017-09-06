<?php include "db.php" ?>
<?php include "db_functions.php" ?>
<?php
if(isset($_POST['dataupdate'])){
    echo print_r($_POST['attrs']);
    
    //SQL INJECTION TODO
    update_module_attrs($_POST['module_id'], $_POST['attrs']);
}
?>