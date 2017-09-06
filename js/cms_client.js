$(document).ready(function(){
    //SHOW Save button when a contenteditable html element is clicked on
$("*[contenteditable=true]").click(function(){
    $('#savetocms').show();  
});

$('#savetocms').on('click',function(){
    console.log('button clicked');
   savePageData(); 
});
    
});

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