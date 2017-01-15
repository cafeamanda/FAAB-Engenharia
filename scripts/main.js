$(document).ready(function() {

  $('.carousel').carousel({
     interval: 4000,
     cycle: true
   });

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

  $('footer p').unbind('mouseenter mouseleave');
  $('footer p').on('mouseenter', function() {
      $(this).stop().animate({
        paddingLeft:5
      }, 100);
  });
  $('footer p').on('mouseleave', function() {
    $(this).stop().animate({
      paddingLeft:0
    }, 100);
  });

  $('.chamada').unbind('mouseenter mouseleave');
  $('.chamada').on('mouseenter', function() {
      $(this).stop().animate({
        paddingLeft:40
      }, 100);
  });
  $('.chamada').on('mouseleave', function() {
    $(this).stop().animate({
      paddingLeft:0
    }, 100);
  });

  $('#maisExec').hide();
  $('#maisEmExec').hide();

  $('#maisEmExecBtn').on('click', function() {
    if ($(this).hasClass('fa-plus')==true) {
      $(this).removeClass('fa-plus').addClass('fa-minus');
      $('#maisEmExec').show(200);
    }
    else {
      $(this).removeClass('fa-minus').addClass('fa-plus');
      $('#maisEmExec').hide(200);
    }
  });

  $('#maisExecBtn').on('click', function() {
    if ($(this).hasClass('fa-plus')==true) {
      $(this).removeClass('fa-plus').addClass('fa-minus');
      $('#maisExec').show(200);
    }
    else {
      $(this).removeClass('fa-minus').addClass('fa-plus');
      $('#maisExec').hide(200);
    }
  });

});
