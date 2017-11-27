$(document).ready(function () {
    var box = $(".box");
    $(document).mousemove(function (e) {
        var angle = e.pageX - e.pageY;
        box.css({
            "-webkit-transform": 'rotate(' + angle + 'deg)'
        });
        box.css({
            '-moz-transform': 'rotate(' + angle + 'deg)'
        });
        box.css({
            'transform': 'rotate(' + angle + 'deg)'
        });
    });
});