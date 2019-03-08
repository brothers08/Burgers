var x = "Total Width: " + screen.width;
let menuBarButton = document.getElementById('menu-bar-button');
let menuBar = document.getElementById('menu-bar');

/* Hide Menu Bar when window is resized */
$(window).resize(function() {

  if ($(this).width() > 451) {

    $(menuBar).hide();

  } 
});

$(menuBarButton).click(function(){
  $(menuBar).toggle();
  menuBar.style.textAlign = 'center';
});

//Make Image Appear when scrolling
function showImages(el) {
  var windowHeight = jQuery( window ).height();
  $(el).each(function(){
      var thisPos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight - 200 > thisPos ) {
          $(this).addClass("fadeIn");
      }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
      showImages('.home-image1');
      showImages('.home-image2');
      document.getElementById('column').style.visibility = 'visible';
      document.getElementById('column2').style.visibility = 'visible';
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
      showImages('.home-image1');
      showImages('.home-image2');
      document.getElementById('column').style.visibility = 'visible';
      document.getElementById('column2').style.visibility = 'visible';
});
