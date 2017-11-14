// ===== PRELOADER

$(window).on('load', function () {
    var $preloader = $('#page-preloader');

    $preloader.fadeOut();
});


$(document).ready(function(){
  $(".menu-btn").click(function() {
    $(".menu-desktop").fadeToggle(300);
  });
});
$(document).ready(function(){
  $(".menu-close").click(function() {
    $(".menu-desktop").fadeToggle(300);
  });
});
$(document).ready(function(){
  $(".menu-btn").click(function() {
    $('.menu-close').addClass('change');
  });
});
$(document).ready(function(){
  $(".menu-close").click(function() {
    $('.menu-close').removeClass('change');
  });
});


$(document).ready(function(){
  $(".arrowDown").click(function() {
    $('.redForm').toggleClass("show"); 
    $('.redForm form').fadeToggle(200); 
    $(this).toggleClass("rotated");
    $(".bottom-part").toggleClass("long");
  });
});



$(document).ready(function(){
  $(".close-cookies").click(function() {
    $('.cookie-branch').hide();
    $('#section1').css("height", "100vh");
    $('#section2').css("height", "100vh");
    $('#section3').css("height", "100vh");
    $('#section4').css("height", "100vh");
    $('#section5').css("height", "100vh");
    $('#top-part').css("height", "50vh");
  });
});



$("document").ready(function(){
  if(window.innerWidth > 500){
    if ($(".cookie-branch").length) {
      $('#section1').css("height", "calc(100vh - 40px)");
        $('#section2').css("height", "calc(100vh - 40px)");
        $('#section3').css("height", "calc(100vh - 40px)");
        $('#section4').css("height", "calc(100vh - 40px)");
        $('#section5').css("height", "calc(100vh - 40px)");
        $('#top-part').css("height", "calc(50vh - 40px)");

    }
    else { $('#section1').css("height", "100vh");
        $('#section2').css("height", "100vh");
        $('#section3').css("height", "100vh");
        $('#section4').css("height", "100vh");
        $('#section5').css("height", "100vh");
        $('#top-part').css("height", "50vh");
    }
  }
});

