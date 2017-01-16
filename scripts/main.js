/**
*   @author Amanda Café <contato@cafeamanda.com.br>
*   @description custom javascript source code file for FAAB Engenharia's website.
*
**/

$(document).ready(function() {

  // hide smaller navbar-brand on all pages
  $('#logoSymbol').hide();

  // hide toggleable content @ OBRAS <obras.html>
  $('#maisExec').hide();
  $('#maisEmExec').hide();

  // Initiate tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Initiate Carousel
  $('.carousel').carousel({
     interval: 4000,
     cycle: true
   });

  // Navbar gets smaller when window.scrollTop() > 0
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
  });

  // Show #menu @ HOME <index.html> when mouse hovers the 'plus' sign @ the bottom right corner of the page
  $('#menuWrapper').hover(function() {
    $('#menu').css('display','block');
    $('#menuIconWrapper').css('opacity','0.8');
  });

  // Close #menu on mouseleave
  $('.jumbotron, footer').hover(function(event) {
    if ($('#menu').css('display')=='block' && !$(event.target).hasClass('showMenu')) {
      $('#menu').css('display','none');
      $('#menuIconWrapper').css('opacity','0.5');
    }
  });

  // Animate CSS changes in #menu on hover
  $('#menu ul li').unbind('mouseenter mouseleave'); // Unbind 'hover' back to 'mousenter' and 'mouseleave'
  $('#menu ul li').on('mouseenter', function() {
    $(this).css({
      'background':'#32336b',
      'color':'#eee',
    });
    $(this).stop().animate({
      paddingLeft:25
    },100);
  });
  $('#menu ul li').on('mouseleave', function() {
    $(this).css({
      'background':'#eee',
      'color':'#32336b',
    });
    $(this).stop().animate({
      paddingLeft:20
    },100);
  });

  // Scroll to designated jumbotron on click @ HOME <index.html>
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
  $('#rodape').click(function() {
    $('html, body').animate({
      scrollTop: $('#home footer').offset().top
    }, 500);
  });

  // Animate CSS changes in 'footer' on hover
  $('footer p').unbind('mouseenter mouseleave'); // Unbind 'hover' back to 'mousenter' and 'mouseleave'
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

  // hide() and show() toggleable content @ OBRAS <obras.html>
  // change font-awesome icon from 'plus' to 'minus' and vice versa
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
