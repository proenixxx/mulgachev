$(function(){
	if ($(window).width() < 480) {
		$('.multiple-items').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	} else if ($(window).width() < 1025) {
        $('.multiple-items').slick({
			dots: true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1
		});
    } else {
        $('.multiple-items').slick({
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1
		});
    }

    $('.header__burger').on('click', function() {
    	$('header').toggleClass('header-burger');
		$('.hidden').toggleClass('burger-menu');
		$('.first-line').toggleClass('first-line-menu');
		$('#header__burger-icon').toggleClass('icofont-close-line icofont-navigation-menu');
	});

    $('.nav__zakaz,.footer__zakaz-button, .nav__zakaz_mob').on('click', function() {
    	$('#popup-container').fadeIn(500);
    	$('#popup__zakaz-zvonka').show();
	});

	$('.zakaz-button').on('click', function() {
    	$('#popup-container').fadeIn(500);
    	$('#popup__more-information').show();
	});

	$('#popup-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
			$(this).children().hide();
		}
	})

	$('#popup__form1, #popup__form2').submit(function(){
		$.post(
        'send.php', 
         $(this).serialize(),       

	        function() {  
	            $('#popup__form1').hide('slow');
	            $('#popup__form2').hide('slow');
	            $('.sent-message').fadeIn(500);
	            $('#popup-container').fadeOut(4500);
	            $('#popup__more-information, #popup__zakaz-zvonka').fadeOut(4500);
	        	}
    	);
    return false;
	});

	$('#popup__close1, #popup__close2').click(function(){
			$(this).parent().hide();
			$(this).parent().parent().fadeOut(400);
	})

	$(function(){
	  	$("#phone_number1, #phone_number2").mask("999-999-9999");
	});

	$.fn.setCursorPosition = function(pos) {
		  if ($(this).get(0).setSelectionRange) {
		    	$(this).get(0).setSelectionRange(pos, pos);
		  } else if ($(this).get(0).createTextRange) {
			    var range = $(this).get(0).createTextRange();
			    range.collapse(true);
			    range.moveEnd('character', pos);
			    range.moveStart('character', pos);
			    range.select();
		  }
	};

	$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(0); 
  });
});