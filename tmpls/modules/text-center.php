<?php
    // module id defined in page template
    $attr = get_module_attributes($module_id);  
?>
     <section class="download bg-primary text-center" id="download" data-module-id="<?php echo $module_id;?>">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <h2 class="section-heading" contenteditable="true" name="heading"><?php echo $attr['heading'];?></h2>
            <p contenteditable="true" name="p"><?php echo $attr['p'];?></p>
            <div class="badges">
              <a class="badge-link" href="#"><img src="img/<?php echo $attr['cta1'];?>" alt=""></a>
              <a class="badge-link" href="#"><img src="img/<?php echo $attr['cta2'];?>" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </section>