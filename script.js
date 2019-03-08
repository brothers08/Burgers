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
