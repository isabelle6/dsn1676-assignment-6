var $btnShow = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShow.on('click', function () {
    $box.toggleClass('js-box-show-hide');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-diamond-move');
});

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse-expand');
});

$btnBounce.on('click', function () {
    $circle.addClass('js-circle-bounce');
});

$circle.on('animationend', function () {
    $circle.removeClass('js-circle-bounce');
});

$btnAppend.on('click', function () {
    var $li = $('<li>');
    var $listItem = $('<p>').html('New List Item');
    
    $list.append($li);
    $li.append($listItem);
});