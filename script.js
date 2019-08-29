var x = "Total Width: " + screen.width;
let menuBarButton = document.getElementById('menu-bar-button');
let menuBar = document.getElementById('menu-bar');

/* Hide Menu Bar when window is resized */
$(window).resize(function() {

  if ($(this).width() > 640) {

    $(menuBar).hide();

  } 
});

$(menuBarButton).click(function(){
  $(menuBar).toggle();
  menuBar.style.textAlign = 'center';
});

//Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

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

//Contact Form Validation
function test() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  if(firstName === "" || lastName === "" || email === "" || message === ""){
    alert("Please fill in all fields");
  }
  else if(!validateEmail(email)){
    alert("Please enter a valid email");
  }
  else{
    alert("Thank You!");
  }
}
