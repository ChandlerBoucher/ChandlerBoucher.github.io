$(document).ready(function () {
    $("#navHeader").mouseenter(function () {
        $(this).addClass("z-depth-2");
    });
    $("#navHeader").mouseleave(function () {
        $(this).removeClass("z-depth-2");
    });
    $("#navHeader a").mouseenter(function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0.46)").addClass("z-depth-5");
    });
    $("#navHeader a").mouseleave(function () {
        $(this).css("background-color", "#26a69a").removeClass("z-depth-5");
    });
    $("#navHeader .navbar-toggle").mouseenter(function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0.46)").addClass("z-depth-5");
    });
    $("#navHeader .navbar-toggle").mouseleave(function () {
        $(this).css("background-color", "#26a69a").removeClass("z-depth-5");
    });
    $("#navBottom a").mouseenter(function () {
        $(this).css("background-color", "rgba(0, 0, 0, 0.46)");
    });
    $("#navBottom a").mouseleave(function () {
        $(this).css("background-color", "#26a69a");
    });
    $("#portfolio").mouseover(function () {
        $(this).fadeOut("slow", function () {
            $(this).fadeIn("slow");
        });
    });
    $("#message").focus(function () {
        $(this).css("border-bottom", "2px #26a69a solid").css("outline", "none");
    });
    $("#message").blur(function () {
        $(this).css("border-bottom", "1px #A0A0A0 solid").css("outline", "none");
    });
});
