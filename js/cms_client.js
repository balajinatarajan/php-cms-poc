$(document).ready(function(){
$("*[contenteditable=true]").click(function(){
    $('#savetocms').show();  
});

$('#savetocms').on('click',function(){
    console.log('button clicked');
   savePageData(); 
});
    
});

function savePageData(){
    var attrs = {};
    $("*[contenteditable=true]").each(function(){
        var key = $(this).attr('name');
        var value = $(this).html();
        attrs[key] = value;
        console.log(attrs[key]);
    });
    console.log(attrs);
    var module_id = $('*[data-module-id]').attr('data-module-id');
    var post_data = { dataupdate: "true", module_id: module_id, attrs: {} };
    post_data.attrs = attrs;
    
    console.log(post_data);
    
    $.post( "common/rest_update.php",  post_data);
}