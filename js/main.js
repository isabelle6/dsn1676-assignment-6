var $btnShow = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnShow.on('click', function() {
    $box.toggleClass('js-box-show-hide');
});

$btnMove.on('click', function() {
    $diamond.toggleClass('js-diamond-move');
});

$btnCollapse.on('click', function() {
    $panel.toggleClass('js-panel-collapse-expand');
});