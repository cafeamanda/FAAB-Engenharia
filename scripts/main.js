$('.glyphicon-chevron-down').click(function() {
  var clicked = this;
  $('body').animate(
    {
      scrollTop: $(clicked).closest('.jumbotron').next('.jumbotron').offset().top
    }, 1000);
});

$('.glyphicon-chevron-up').click(function() {
  var clicked = this;
  $('body').animate(
    {
      scrollTop: $(clicked).closest('.jumbotron').prev('.jumbotron').offset().top
    }, 1000);
});
