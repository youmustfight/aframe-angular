// Set Section Height
$('section').height($(window).height());

// Menu Variables
var sectionShowing = false;
var downScroll = 0;
var upScroll = 0;

// Scroll Event
$(document).on('mousewheel DOMMouseScroll', function(e) {
  e.preventDefault();
  var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
  if (delta < 0) {
    downScroll++;
    upScroll = 0;
    if (downScroll > 30){
      downScroll = 0;
      sectionToggle(true);
    }
  } else {
    upScroll++;
    downScroll = 0;
    if (upScroll > 30){
      upScroll = 0;
      sectionToggle(false);
    }
  }
});

// Menu Opening/Closing Function
var sectionToggle  = function(newState){
  if (!sectionShowing && newState) {
    sectionShowing = true;
    console.log('Revealing Section');
    $('.overlay-content').show();
    $('.overlay-content').fadeTo("200", .95, function(){
      console.log('Animation Complete');
    });
  } 
  if (sectionShowing && !newState) {
    sectionShowing = false;
    console.log('Hiding Section');
    $('.overlay-content').fadeTo("200", 0, function(){
      $('.overlay-content').hide();
      console.log('Animation Complete');
    });
  }
}