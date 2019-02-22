
var menu = $(".navbar");
var pos = menu.offset();

$(window).scroll(function() {
if ($(this).scrollTop() > pos.top && menu.hasClass("navbar")) {
    menu.addClass("navtop");
} else if ($(this).scrollTop() <= pos.top && menu.hasClass("navtop")) {
    menu.removeClass("navtop");
}
})