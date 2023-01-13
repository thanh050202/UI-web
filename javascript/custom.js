$(document).ready(function () {
    $("#TrangChu").click(function () {
        $("#contentTrangChu").show();
        $("#contentNhatTin").hide();
        $("#contentNhatGom").hide();
    });
    $("#NhatTin").click(function () {
        $("#contentTrangChu").hide();
        $("#contentNhatTin").show();
        $("#contentNhatGom").hide();
    });
    $("#NhatGom").click(function () {
        $("#contentTrangChu").hide();
        $("#contentNhatTin").hide();
        $("#contentNhatGom").show();
    });
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });


});

