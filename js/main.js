// Portfolio
var mixer = mixitup('.port');
// End Portfolio
$(document).ready(function() {
    var typed = new Typed('.element', {
        // Waits 1000ms after typing "First"
        strings: ['Developer', 'freelancer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
    });
})

    $(".navigate").click(function() {
        $(".head").animate({left : "0px" },500);
        $(".navigate").addClass("d-none");
        $(".close").removeClass("d-none");
    })

    $(".close").click(function() {
        $(".head").animate({left : "-300px"},500);
        $(".close").addClass("d-none");
        $(".navigate").removeClass("d-none");
    })

let mainWidth = $(".main").outerWidth();
if (mainWidth >= "992px" ) {
    $(".navigate").removeClass("d-block")
    $(".navigate").addClass("d-none")
    $(".close").removeClass("d-block")
    $(".close").addClass("d-none")
}

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

