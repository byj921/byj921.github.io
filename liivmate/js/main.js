$(document).ready(function(){
    var intv = setInterval(function() { nextAni(); }, 3000);
    function nextAni() {
        $(".wallet ul").not(":animated").animate({"margin-left":"-32%"}, 800, function(){
            $(".wall_frame li").eq(0).appendTo($(".wall_frame"));
            $(".wall_frame").css("margin-left", "0%");
        });
    }
    function prevAni(){
        $(".wall_frame li").eq(2).prependTo($(".wall_frame"));
        $(".wall_frame").css("margin-left", "-32%");
        $(".wall_frame").not(":animated").animate({"margin-left":"0%"}, 800);
    }
    $(".nextBtn").click(function(){
        clearInterval(intv);
        nextAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".prevBtn").click(function(){
        clearInterval(intv);
        prevAni();
        intv = setInterval(function() { nextAni(); }, 2800);
    });
    $(".popOpenBtn").click(function(){
       $(".popBox").fadeIn(); 
    });
    $(".closeBtn").click(function(){
       $(".popBox").fadeOut(); 
    });
    
    $('.tog_btn').click(function(){
        $('.toggle').css('display','block');
    });
    $('.tog_cls').click(function(){
        $('.toggle').css('display','none');
    });
    
});