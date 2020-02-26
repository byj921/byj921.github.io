$(document).ready(function(){
    $('#intro').mouseover(function(){
        $('.circle').css('top','3%');
        $('.circle').css('border','1.3px solid #00ead8');
    });
    $('#bar1').mouseover(function(){
        $('.circle').css('top','7.6%');
        $('.circle').css('border','1.3px solid #01ffd8');
    });
    $('#bar2').mouseover(function(){
        $('.circle').css('top','10.3%');
        $('.circle').css('border','1px solid #00ffa7');
    });
    $('#bar3').mouseover(function(){
        $('.circle').css('top','13%');
        $('.circle').css('border','1px solid #00fa7d');
    });
    $('#bar4').mouseover(function(){
        $('.circle').css('top','15.6%');
        $('.circle').css('border','1px solid #ffa700');
    });
    $('#bar5').mouseover(function(){
        $('.circle').css('top','18.2%');
        $('.circle').css('border','1px solid #ff4242');
    });
    $('#bar6').mouseover(function(){
        $('.circle').css('top','21%');
        $('.circle').css('border','1px solid #ff0d99');
    });
    $('#bar7').mouseover(function(){
        $('.circle').css('top','24.2%');
        $('.circle').css('border','1px solid #f500ff');
    });
    
    
    $('#about').mouseover(function(){
        $('.circle').css('top','27.5%');
         $('.circle').css('border','1px solid #ebff00');
         $('.circle').css('border','1px solid #bb04ff');
    });
     $('#bar8').mouseover(function(){
        $('.circle').css('top','30.2%');
        $('.circle').css('border','1px solid #ff00ba');
    });
    $('#bar9').mouseover(function(){
        $('.circle').css('top','32.8%');
        $('.circle').css('border','1px solid #ff004e');
    });
    $('#bar10').mouseover(function(){
        $('.circle').css('top','35.4%');
        $('.circle').css('border','1px solid #ff3737');
    });
    $('#bar11').mouseover(function(){
        $('.circle').css('top','38%');
        $('.circle').css('border','1px solid #ff3100');
    });
    $('#bar12').mouseover(function(){
        $('.circle').css('top','40.6%');
        $('.circle').css('border','1px solid #ff8900');
    });
    $('#bar13').mouseover(function(){
        $('.circle').css('top','43.2%');
        $('.circle').css('border','1px solid #ff9300');
    });
    $('#bar14').mouseover(function(){
        $('.circle').css('top','45.8%');
        $('.circle').css('border','1px solid #ffb100');
    });
    
    
    
    $('#port').mouseover(function(){
        $('.circle').css('top','51.5%');
        $('.circle').css('border','1.5px solid #e5f800');
    });
    $('#bar15').mouseover(function(){
        $('.circle').css('top','51.6%');
        $('.circle').css('border','1px solid #c4ff00');
    });
    $('#bar16').mouseover(function(){
        $('.circle').css('top','54.2%');
        $('.circle').css('border','1px solid #9dff00');
    });
    $('#bar17').mouseover(function(){
        $('.circle').css('top','56.8%');
        $('.circle').css('border','1px solid #14ff00');
    });
    $('#bar18').mouseover(function(){
        $('.circle').css('top','59.4%');
        $('.circle').css('border','1px solid #00ff4e');
    });
    $('#bar19').mouseover(function(){
        $('.circle').css('top','62%');
        $('.circle').css('border','1px solid #d8ff00');
    });
    $('#bar20').mouseover(function(){
        $('.circle').css('top','64.6%');
        $('.circle').css('border','1px solid #00ff76');
    });
    $('#bar21').mouseover(function(){
        $('.circle').css('top','67.2%');
        $('.circle').css('border','1px solid #00baff');
    });
    $('#contact').mouseover(function(){
        $('.circle').css('top','76.4%');
        $('.circle').css('border','1.3px solid #00f000');
    });
    
  
 
    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing_txt").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     };  
    
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

