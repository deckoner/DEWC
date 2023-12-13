$(document).ready(function () {
    $(".content-tab:not(:eq(0))").toggle();
    $(".title-tab i").toggleClass("fa-plus");

    $(".title-tab").click(function () {
        $(".content-tab").hide();
        $(".title-tab i").removeClass("fa-minus");
        $(".title-tab i").addClass("fa-plus");
        $(this).next().show();
        $(this).children().addClass("fa-minus");
    });
});