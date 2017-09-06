<?php
    //echo $module_id;
    // module id defined in page template
    $attr = get_module_attributes($module_id);
    
?>
<header class="masthead" data-module-id="<?php echo $module_id;?>">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h1 class="mb-5" contenteditable="true" name="h1"><?php echo $attr['h1'];?></h1>
              <a href="<?php echo $attr['cta_link'];?>" class="btn btn-outline btn-xl js-scroll-trigger" contenteditable="true" name="cta_label"><?php echo $attr['cta_label'];?></a>
            </div>
          </div>
          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="img/<?php echo $attr['heroimg'];?>" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>