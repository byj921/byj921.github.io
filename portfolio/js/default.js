$(document).ready(function(){
    
    $('#mockup1').mouseover(function(){
        $('.screen_shot').css('bottom','0');
    });
    $('#mockup1').mouseout(function(){
        $('.screen_shot').css('bottom','-384%');
    });
    
    $('#mockup2').mouseover(function(){
        $('.screen_shot2').css('bottom','0');
    });
    $('#mockup2').mouseout(function(){
        $('.screen_shot2').css('bottom','-339%');
    });
    
    $('#mockup3').mouseover(function(){
        $('.screen_shot3').css('bottom','0');
    });
    $('#mockup3').mouseout(function(){
        $('.screen_shot3').css('bottom','-16%');
    });
    
    $('#intro').click(function(){
			var offset = $('.main').offset(); 
	        $('body').animate({scrollTop : offset.top}, 800);
		});
    $('#about').click(function(){
			var offset = $('.aboutme').offset(); 
	        $('body').animate({scrollTop : offset.top}, 500);
		});
    $('#port').click(function(){
			var offset = $('.port').offset(); 
	        $('body').animate({scrollTop : offset.top}, 800);
		});
    $('#contact').click(function(){
			var offset = $('.contact_me').offset(); 
	        $('body').animate({scrollTop : offset.top}, 400);
		});
    
    $('.neck_card').click(function(){
			var offset = $('.port').offset(); 
	        $('body').animate({scrollTop : offset.top}, 600);
		});
    
    $('#card_wrap').click(function(){
        $('#pop_card').css('opacity','1');
        $('#pop_card').css('visibility','visible');
    });
    $('#seminar_wrap').click(function(){
        $('#pop_seminar').css('opacity','1');
        $('#pop_seminar').css('visibility','visible');
    });
    
    $('.pop_banner .pop_cls').click(function(){
        $('.pop_banner').css('opacity','0');
        $('.pop_banner').css('visibility','hidden');
    })
    
});

