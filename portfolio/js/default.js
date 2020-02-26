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
        $('.screen_shot3').css('bottom','-17%');
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
    $('#contact_me').click(function(){
			var offset = $('.contact_me').offset(); 
	        $('body').animate({scrollTop : offset.top}, 400);
		});
    
    $('.neck_card').click(function(){
			var offset = $('.port').offset(); 
	        $('body').animate({scrollTop : offset.top}, 600);
		});
    
    
});

