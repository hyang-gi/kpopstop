$(document).ready(function () {
    console.log("works!");
    $( ".header" ).load( "../templates.html #header", function(content) {
        console.log("header load performed");
    });
    $( ".footer" ).load( "../templates.html #footer", function(content) {
        console.log("header load performed");
    });
});