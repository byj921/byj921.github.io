$(document).ready(function () {
    
    $('.btnOpen').click(function () {
        $('#quickMenu').css('top', '40px');
        $('.btnOpen').css('display', 'none')
    });
    
    $('.btnClose').click(function () {
        $('#quickMenu').css('top', '-691px');
        $('.btnOpen').css('display', 'block')
    });
    
    $('.toggle_btn').click(function () {
        $('.toggle').css('right','0%');
    });
    $('.tog_close').click(function () {
        $('.toggle').css('right','-100%');
    });
    
});

