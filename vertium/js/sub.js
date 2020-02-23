$(document).ready(function () {
    
    $(document).ready(function() {
            $('#mixItUp').mixItUp({
                selector: {
                    filter: '.filter'
                }
            });
        });
    
    $('.toggle_btn').click(function () {
        $('.toggle').css('right','0%');
    });
    $('.tog_close').click(function () {
        $('.toggle').css('right','-100%');
    });
    

    $('.controls button').click(function () {
        $('.con1_box').css('height', 'auto');

    });
    
});