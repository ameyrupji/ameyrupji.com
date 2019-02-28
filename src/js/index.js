// Can also be included with a regular script tag
import Typed from 'typed.js';


$(document).ready(function() {
  var $timeline_block = $('.timeline-block');
  var $timeline_block_alt = $('.timeline-block-alt');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.timeline-img-container, .timeline-content').addClass('is-hidden');
    }
  });

  $timeline_block_alt.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.timeline-img-container-alt').addClass('is-hidden');
    }
  });

  // on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img-container').hasClass('is-hidden') ) {
        $(this).find('.timeline-img-container, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
    $timeline_block_alt.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img-container-alt').hasClass('is-hidden') ) {
        $(this).find('.timeline-img-container-alt').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });

  
  // scroll amination
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // typing animations
  var options = {
    strings: ["Welcome to my website!", "I am still in the process of build this website."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
  }

  var typed = new Typed(".typed", options);
  
  //Enable tooltips everywhere
  $('[data-toggle="tooltip"]').tooltip()

  $('#timeline-btn-all').click(function() {
    $('#timeline-main .btn-group .btn').removeClass('btn-primary').addClass('btn-light')
    $(this).removeClass('btn-light').addClass('btn-primary')

    $timeline_block.each(function(){
      $(this).find('.timeline-img-container, .timeline-content').show();
    });

    $timeline_block_alt.each(function(){
      $(this).find('.timeline-img-container-alt').show();
    });
  });
  $('#timeline-btn-work').click(function() {
    $('#timeline-main .btn-group .btn').removeClass('btn-primary').addClass('btn-light')
    $(this).removeClass('btn-light').addClass('btn-primary')

    // unhide everything
    $timeline_block.each(function(){
      $(this).find('.timeline-img-container, .timeline-content').show();
    });

    $timeline_block_alt.each(function(){
      $(this).find('.timeline-img-container-alt').show();
    });

    // hide everything thing but the work
    $timeline_block.each(function(){
      if(!$(this).hasClass('work')) {
        $(this).find('.timeline-img-container, .timeline-content').hide();
      }
    });

    $timeline_block_alt.each(function(){
      if(!$(this).hasClass('work')) {
        $(this).find('.timeline-img-container-alt').hide();
      }
    });
  });
  $('#timeline-btn-education').click(function() {
    $('#timeline-main .btn-group .btn').removeClass('btn-primary').addClass('btn-light')
    $(this).removeClass('btn-light').addClass('btn-primary')

    // unhide everything
    $timeline_block.each(function(){
      $(this).find('.timeline-img-container, .timeline-content').show();
    });

    $timeline_block_alt.each(function(){
      $(this).find('.timeline-img-container-alt').show();
    });

    // hide everything thing but the work
    $timeline_block.each(function(){
      if(!$(this).hasClass('education')) {
        $(this).find('.timeline-img-container, .timeline-content').hide();
      }
    });

    $timeline_block_alt.each(function(){
      if(!$(this).hasClass('education')) {
        $(this).find('.timeline-img-container-alt').hide();
      }
    });
  });
});