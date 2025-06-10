/* ******************* Start Loading ****************** */
$(document).ready(function () {
  $(".my-logo").fadeOut(2500, () => {
    $(".my-logo")
      .parent()
      .fadeOut(3500, () => {
        $(".loading").remove();
        $("body").css("overflow-y", "auto");
      });
  });
});
/* ******************* End Loading ****************** */

/* ****************** Start Header ****************** */
let mainNavPhone = document.querySelector(".main-nav-phone");
let menuIconBars = document.querySelector(".menu .fa-bars");
let menuIconTimes = document.querySelector(".menu .fa-times");
document.addEventListener("click", (e) => {
  if (e.target.target == "_self" || e.target.classList.contains("fa-times")) {
    mainNavPhone.style.transform = "translateY(-120%)";
    menuIconBars.classList.remove("d-non");
    menuIconTimes.classList.add("d-non");
  } else if (e.target.classList.contains("fa-bars")) {
    menuIconBars.classList.add("d-non");
    mainNavPhone.style.transform = "translateY(0%)";
    menuIconTimes.classList.remove("d-non");
  }
});
/* ****************** End Header ****************** */
/* ****** Start Main-Slider ****** */
let SliderContent = document.querySelector(".slider_content");

window.addEventListener("scroll", () => {
  SliderContent.style.opacity = 1 - +window.pageYOffset / 550 + "";
  SliderContent.style.top = +window.pageYOffset + "px";
  SliderContent.style.backgroundPositionY = -+window.pageYOffset / 2 + "px";
});
/* ****** End ****** */

/* ****** Start My_sections ****** */
$("a[href^= '#'] ").click(function (e) {
  let aHref = e.target.getAttribute("href");
  let secOffset = $(aHref).offset().top;
  $("body,html").animate({ scrollTop: secOffset }, 1000);
});
/* ****** End ****** */

/********* Start My_social *******/
let My_social = document.querySelector(".My_social");
My_social.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== My_social) {
    My_social.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  if (My_social.classList.contains("active")) {
    My_social.classList.remove("active");
  }
});
/* ****** End ****** */

/* ****************** Start MY Works ****************** */

/* ****** Start nav-pills  ****** */
$(".nav-item").click(function () {
  $(this).find(".nav-link").addClass("active");
  $(this).siblings().find(".nav-link").removeClass("active");
});
/* ****** End ****** */

/* ****** Start Img Slide  ****** */
let imgs = Array.from(document.querySelectorAll(".inn-img"));
let Plus = Array.from(document.querySelectorAll(".plus"));
let SelectedImg = document.querySelector("#selectedImg");
let prevButton = document.querySelector(".fa-angle-left");
let nextButton = document.querySelector(".fa-angle-right");
let closeButton = document.querySelector(".fa-times-square");

let currentIndex = 0;

for (let x = 0; x < Plus.length; x++) {
  Plus[x].addEventListener("click", function () {
    currentIndex = x;
    let imgSrc = imgs[x].getAttribute("src");
    SelectedImg.setAttribute("src", imgSrc);
  });
}

function slide(i) {
  currentIndex = currentIndex + i;

  if (currentIndex == -1) {
    currentIndex = imgs.length - 1;
  }
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  let imgSrc = imgs[currentIndex].getAttribute("src");
  SelectedImg.setAttribute("src", imgSrc);
}

function closeSlider() {
  document.querySelector(".modal").style.cssText =
    "transform: translate(0,-50)";
  document.querySelector(".modal-backdrop.show").remove();
  document.body.style.cssText = "overflow : auto !important";
}

nextButton.addEventListener("click", function () {
  slide(1);
});

prevButton.addEventListener("click", function () {
  slide(-1);
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  } else if (e.key == "Escape") {
    closeSlider();
  }
});
/* ****** End ****** */

/* ******************* End MY Works ****************** */

/* ******************* Start btnUp ****************** */
let aboutOffset = $("#About_Me").offset().top;
$(window).scroll(function () {
  let wScroll = $(window).scrollTop();
  if (wScroll > aboutOffset - 300) {
    $("#btnUp").fadeIn(500);
  } else {
    $("#btnUp").fadeOut(500);
  }
});
$("#btnUp").click(function () {
  $("body,html").animate({ scrollTop: 0 }, 1000);
});
/* ******************* End btnUp ****************** */
/* ******************* Start Contact ME ****************** */
let userNameInput = document.getElementById("name");
let userEmailInput = document.getElementById("email");
let userSubInput = document.getElementById("subject");
let userMessageInput = document.getElementById("message");

let timesIconName = document.getElementById("timesCircleName");
let timesIconEmail = document.getElementById("timesCircleEmail");
let timesIconSub = document.getElementById("timesCircleSub");
let timesIconMess = document.getElementById("timesCircleMess");
let checkIcons = Array.from(document.querySelectorAll('.fa-check-circle'));

function validateName() {
  let regexText = /^[a-zA-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;
  if (regexText.test(userNameInput.value) == true) {
    timesIconName.nextElementSibling.classList.remove("d-none");
    timesIconName.classList.add("d-none");
    return true;
  } else {
    timesIconName.classList.remove("d-none");
    timesIconName.nextElementSibling.classList.add("d-none");
    return false;
  }
}
function validateEmail() {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexEmail.test(userEmailInput.value) == true) {
    timesIconEmail.nextElementSibling.classList.remove("d-none");
    timesIconEmail.classList.add("d-none");
    return true;
  } else {
    timesIconEmail.classList.remove("d-none");
    timesIconEmail.nextElementSibling.classList.add("d-none");
    return false;
  }
}
function validateSub() {
  let regexText = /^[a-zA-Z][a-zA-Z '.-]*[A-Za-z][^-]$/;
  if (regexText.test(userSubInput.value) == true) {
    timesIconSub.nextElementSibling.classList.remove("d-none");
    timesIconSub.classList.add("d-none");
    return true;
  } else {
    timesIconSub.classList.remove("d-none");
    timesIconSub.nextElementSibling.classList.add("d-none");
    return false;
  }
}
function validateMessage() {
  let regexMessage = /^([A-z ]{3,200})$/;
  if (regexMessage.test(userMessageInput.value) == true) {
    timesIconMess.nextElementSibling.classList.remove("d-none");
    timesIconMess.classList.add("d-none");
    return true;
  } else {
    timesIconMess.classList.remove("d-none");
    timesIconMess.nextElementSibling.classList.add("d-none");
    return false;
  }
}
userNameInput.addEventListener("keyup", function () {
  validateName();
});
userEmailInput.addEventListener("keyup", function () {
  validateEmail();
});
userSubInput.addEventListener("keyup", function () {
  validateSub();
});
userMessageInput.addEventListener("keyup", function () {
  validateMessage();
});
document.getElementById("send").addEventListener("click", function () {
  if (
    validateName() == true &&
    validateEmail() == true &&
    validateSub() == true &&
    validateMessage() == true
  ) {
    send();
  }
});

function send() {
  (function () {
    emailjs.init("eLTrGnrMa7te4GHg0");
  })();

  let serviceId = "service_qptnh4u";
  let templateId = "template_nnqslrf";

  let params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      
        Swal.fire({
            icon: 'success',
            title: 'Thanks! ' + params["sendername"] + ' for your interest'
        });
        userNameInput.value = '';
        userEmailInput.value = '';
        userSubInput.value = '';
        userMessageInput.value = '';
        for(let i = 0; i < checkIcons.length; i++) {
          checkIcons[i].classList.add('d-none');
        }
    })
    .catch();
}

/* ******************* End Contact ME ****************** */
/* ******************* Start lock inspect ****************** */

// document.onkeydown = function(e) {
//     if (e.key === 'F12') { // f12
//         return false;
//     }
//     if (e.ctrlKey == true && e.shiftKey == true && e.key == 'I') {
//         return false;
//     }
//     if (e.ctrlKey == true && e.shiftKey == true && e.key == 'C') {
//         return false;
//     }
//     if (e.ctrlKey == true && e.shiftKey == true && e.key == 'J') {
//         return false;
//     }
//     // view source code for html source
//     if (e.ctrlKey == true && (e.key == 'U' || e.key == 'u')) {
//         return false;
//     }
// };

// document.addEventListener('contextmenu', e => e.preventDefault());

/* ******************* End lock inspect ****************** */
