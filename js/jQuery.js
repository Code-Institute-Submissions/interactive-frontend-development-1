$(document).ready(function(){
    
    $("#ct-form").css("height", "216px");
    
    $("#cont-form").css("display", "none");
    
    $("nav p a").click(function() {
        $("#cont-form").fadeToggle();
    });
})