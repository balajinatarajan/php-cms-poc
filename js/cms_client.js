$(document).ready(function(){
    //SHOW Save button when a contenteditable html element is clicked on
//$("*[contenteditable=true]").click(function(){
//    $('#savetocms').show();  
//});
    insertCMSNav();

$('#savetocms').on('click',function(){
    console.log('button clicked');
   savePageData(); 
});
    
});

function insertCMSNav(){
    $('body').css('margin-top','100px');
    $('#mainNav').css('margin-top','50px');
    $('body').append('<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="-webkit-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.75);-moz-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.75);box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.75);background-color: white;" id="cmsNav"><div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top">CMS Preview Tool</a><button class="btn btn-primary hide" id="savetocms">Save</button>');
}


/*function to save content editable fields on the page */
function savePageData(){
    
    //gather all content editable fields' name and value for each module and post the update to cms
    $('*[data-module-id]').each(function(){
        var attrs = {};
        var module_id = $(this).attr('data-module-id');
       $(this).find('*[contenteditable=true]').each(function(){
            var key = $(this).attr('name');
            var value = $(this).html();
            attrs[key] = value;
            console.log(attrs[key]);   
       }); 
        //form post data
        var post_data = { dataupdate: "true", module_id: module_id, attrs: {} };
        post_data.attrs = attrs;

        console.log(post_data);
        // call cms service
        $.post( "common/rest_update.php",  post_data);
    });
}