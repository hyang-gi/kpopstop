$(document).ready(function () {
    console.log("works!");
    var mobileStyleLink = $("<link>").attr({
        "rel": "stylesheet",
        "href": "../styles/index-mobile.css"
    });
    var fontLink = $("<link>").attr({
        "rel": "stylesheet",
        "href": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    })
    $("head").append(mobileStyleLink);
    $("head").append(fontLink);
    $(document).on('click', '.hamburger-menu', function () {
        console.log("hamburger moves");
        $('.primary-nav').toggleClass('nav-hidden nav-visible');
    });
    $(".header").load("../templates.html #header", function (content) {
        console.log("header load performed");
    });
    $(".footer").load("../templates.html #footer", function (content) {
        console.log("footer load performed");
    });
});