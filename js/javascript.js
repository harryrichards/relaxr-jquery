$(document).ready(function() {
  $('.readmore').on('click', function(event){
  event.preventDefault();
  $('#show-this-on-click').slideDown();
  $('.readmore').hide();
  $('.readless').show();
});


$('.readless').on('click', function(event){
  event.preventDefault();
  $('#show-this-on-click').slideUp();
  $('.readless').hide();
  $('.readmore').show();
});


$('.learnmore').on('click', function(event){
  event.preventDefault();
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();
});

});
