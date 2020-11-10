
$(".dropdirect").hide();
$(document).mouseup(function (e) {

    var container = $(".dropdirect");
    var activity = $(".menu__activity");

    activity.click(function () {
        container.toggle();

    })
    if (container.has(e.target).length == 0) container.hide();
});

