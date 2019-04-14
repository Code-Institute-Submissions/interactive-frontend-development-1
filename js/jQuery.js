$(document).ready(function() {
    // Set the height of contact form div
    $("#ct-form").css("height", "216px");
    //Hide the contact form
    $("#cont-form").css("display", "none");
    //Toogle the contact form when click on "contact"
    $("nav p a").click(function() {
        $("#cont-form").fadeToggle();
    });
    //Hover the info buttons
    $("#info-to").hover(function() {
        $(".info-to").fadeToggle(600);
    });
    $("#info-new").hover(function() {
        $(".info-new").fadeToggle(600);
    });
    $("#info-rio").hover(function() {
        $(".info-rio").fadeToggle(600);
    });
    $("#info-lon").hover(function() {
        $(".info-lon").fadeToggle(600);
    });
    $("#info-cap").hover(function() {
        $(".info-cap").fadeToggle(600);
    });

});
