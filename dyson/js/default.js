$(document).ready(function(){
    $('.pop_cf').css('display','none');
    $('.cf_play').click(function(){
        $('.pop_cf').css('display','block');
        return false;
    });
    $('.pop_close').click(function(){
        $('.pop_cf').css('display','none');
        return false;
    });
    

  $('#tit_btn1').click(function(){
      $('.right_wrap').css('margin-left','0%');
      $('#vacc_info1').css('z-index','90');
      $('.left_wrap').css('margin-left','0%');
      return false;
      
  });
    $('#tit_btn2').click(function(){
      $('.right_wrap').css('margin-left','-82.8%');
        $('#vacc_info2').css('opacity','1');
        $('.left_wrap').css('margin-left','-98.5%');
        return false;
  });
    $('#tit_btn3').click(function(){
      $('.right_wrap').css('margin-left','-165.6%');
        $('#vacc_info3').css('opacity','1');
        $('.left_wrap').css('margin-left','-197%');
        return false;
  });
    
    
    
    $('.mob_left ul').css('margin-left','0%');
    $('#mob_tit_btn1').click(function(){
      $('.mob_left ul').css('margin-left','0%');
      $('.mob_right ul').css('margin-left','0%');
      return false;
      
  });
    $('#mob_tit_btn2').click(function(){
      $('.mob_left ul').css('margin-left','-98%');
        $('.mob_right ul').css('margin-left','-98%');
        return false;
  });
    $('#mob_tit_btn3').click(function(){
      $('.mob_left ul').css('margin-left','-196%');
        $('.mob_right ul').css('margin-left','-196%');
        return false;
  });
    
    
    
//    $('.toggle').hide();
//    $('.toggle_btn').click(function(){
//        $('.toggle').show();
//    })
//    $('.tog_close').click(function(){
//        $('.toggle').hide();
//    })
    
    $('.toggle_btn').click(function(){
        $('.toggle').css('left','0%');
    });
    $('.tog_close').click(function(){
        $('.toggle').css('left','100%');
    });
    
    $('.tog_gnb1').click(function(){
        $('#tog_sub1').toggle();
    });
    $('.tog_gnb2').click(function(){
        $('#tog_sub2').toggle();
    });
    $('.tog_gnb3').click(function(){
        $('#tog_sub3').toggle();
    });
    $('.tog_gnb4').click(function(){
        $('#tog_sub4').toggle();
    });
    
    
    
});









