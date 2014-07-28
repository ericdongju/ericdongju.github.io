$(function () {
    $(".border, #s_head, #background,#s_scroll").hide();
    $("#leftbar").delay(100).show();
    $("#leftbar").animate({
        height: "128px"
    }, 600, function () {
        $("#topbar").delay(100).show();
        $("#topbar").animate({
            width: "480px"
        }, 800, function () {
            $("#rightbar").delay(100).show();
            $("#rightbar").animate({
                height: "128px"
            }, 500, function () {
                $("#bottombar").delay(100).show();
                $("#bottombar").animate({
                    width: "480px"
                }, 770, function () {
                    $("#s_head,#background").fadeIn(1000);
                    $("#s_scroll").delay(1000).fadeIn(3500);
                });
            });
        });
    });
});


