import axios from 'axios';
// --------
// Onscroll

$(function(){
  $(window).on('scroll', function(){
      var changeOn = 20;
      var y = window.scrollY;
      var didScroll = false;
      if(!didScroll){
        didScroll=true;
        setTimeout(changeHeader, 1);
      }

      function changeHeader(){
        var h = $('.nav-wrapper');
        var i = $('nav ul li');
        var j = $('.logo');
        var k = $('li');



        if(y >= changeOn){
          h.addClass('sticky');
          i.addClass('small');
          j.addClass('shrink');
          k.addClass('up');


        }else{
          h.removeClass('sticky');
          i.removeClass('small');
          j.removeClass('shrink');
          k.removeClass('up');

        }
        didScroll=false;
      };
  });
});
