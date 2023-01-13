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

    // Get the container element
    var btnContainer = document.getElementById("navbarSupportedContent");

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("nav-link");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }


});

