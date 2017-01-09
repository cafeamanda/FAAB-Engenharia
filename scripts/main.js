$(document).ready(function() {

  $('.carousel').carousel({
     interval: 4000,
     cycle: true
   })

  $('#logoSymbol').hide();

  $('[data-toggle="tooltip"]').tooltip();

  var onResize = function() {
    var navbarHeight = $('.navbar-fixed-top').height();
    $('#j1').stop().animate({
      paddingTop:navbarHeight
    }, 300);
  };

  $(window).resize(onResize);
  $(function() {onResize()});

  $(window).scroll(function(event){

    var scroll = $(this).scrollTop();
    if (scroll > 0){
      $('#navLogo').hide(300);
      $('.navbar').css('padding','0');
      $('#logoSymbol').show(200);
    } else {
      $('#navLogo').show(300)
      $('.navbar').css('padding-top','10px');
      $('#logoSymbol').hide(100);
    }
    onResize();
  });

  $('#menuWrapper').hover(function() {
    $('#menu').css('display','block');
    $('#menuIconWrapper').css('opacity','0.8');
  });

  $('.jumbotron').hover(function(event) {
    if ($('#menu').css('display')=='block' && !$(event.target).hasClass('showMenu')) {
      $('#menu').css('display','none');
      $('#menuIconWrapper').css('opacity','0.5');
    }
  });

  $('#inicio').click(function() {
    $('html, body').animate({
      scrollTop: $('#j1').offset().top
    }, 500);
  });
  $('#servicos').click(function() {
    $('html, body').animate({
      scrollTop: $('#j2').offset().top
    }, 500);
  });
  $('#noticias').click(function() {
    $('html, body').animate({
      scrollTop: $('#j3').offset().top
    }, 500);
  });
  $('#clientes').click(function() {
    $('html, body').animate({
      scrollTop: $('#j4').offset().top
    }, 500);
  });
  $('#mapa').click(function() {
    $('html, body').animate({
      scrollTop: $('#j5').offset().top
    }, 500);
  });

  $('html, body').css({
    'overflow-x':'hidden',
    '-webkit-scroll-snap-type':'mandatory',
    'scroll-snap-type':'mandatory',
    '-webkit-scroll-snap-points-y':'repeat(100%)',
    'scroll-snap-points-y':'repeat(100%)'
  });
});
