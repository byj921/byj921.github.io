$(document).ready(function () {

    $('.btnOpen').click(function () {
        $('#quickMenu').css('top', '40px');
        $('.btnOpen').css('display', 'none')
    })
    $('.btnClose').click(function () {
        $('#quickMenu').css('top', '-691px');
        $('.btnOpen').css('display', 'block')
    });

    $('.more_btn').click(function () {
        $('.con1_box').css('height', '1920px');
        $('.more_btn').css('display', 'none');
    });
    
    $('.toggle_btn').click(function () {
        $('.toggle').css('right','0%');
    });
    $('.tog_close').click(function () {
        $('.toggle').css('right','-100%');
    });
   
     $('.tog_dep1').click(function () {
        $('.tog_sub').toggle('display','block');
    });
    
    $('.fam_tit').click(function () {
        $('.ft_sub').toggle('opacity','1');
    });
    
});


