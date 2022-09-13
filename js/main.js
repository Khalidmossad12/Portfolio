
// Portfolio
var mixer = mixitup('.port'); 
// End Portfolio

// loading Page
$(document).ready(function() {  
  $("#load").fadeOut(1000 , ()=>{
      $("#loading ").fadeOut(1000,()=>{
          // $("#loading").remove();
          $("body").css("overflow-y" , "auto")
      })
  });
})
// End Loading Page

// Home
var typed = new Typed('.typed', {
    strings: ['Freelance', 'Developer','Designer'],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
    loopCount: Infinity,
});
// End Home 

// for Hearder Links
  $('.offcanvas-body li').click(function(){
      $(this).find('i').addClass('ico-active');
      $(this).siblings().find('i').removeClass('ico-active');
  });
// For Header bar
$('#bar').click(function(){

    $('#header').animate({left :'0'},500);
    $('#bar').fadeOut(5);
    $('#close').fadeIn(5 , () => {
        $('body').css("overflow-y" , "hidden");
    });
    $('#header').removeClass('tran');
})
// For Header Close
$('#close').click(function(){
    
    $('#header').animate({left :'-300px'},100);
    $('#close').fadeOut(5);
    $('#bar').fadeIn(5 ,() => {
        $('body').css("overflow-y" , "auto");
    });
    $('#header').addClass('tran');
})
 

//===================================== Scroll=======================================

// Button UP
let aboutOffset = $("#about").offset().top;

$(window).scroll(function() {
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 500) {
        $(".arrow").fadeIn(500)
    }
    else{
        $(".arrow").fadeOut(500);
    }
})

$(".arrow").click(function() {
    $(window).scrollTop(0);
})

// sideBar Scroll


let nav_sections = $('section');
var main_nav = $('.nav-menu');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;
    nav_sections.each(function() {
    var top = $(this).offset().top,
    bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('ico-active');
        }
        
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('ico-active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('ico-active');
      }
    });
  });