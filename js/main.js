$(function () {
	$(window).scroll(function() {
	    $('.launch').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass('fadeInUp');
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.time').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass('rotateIn');
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.beach').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass('fadeInDown');
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.input__slide_left').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass('animated fadeInLeft');
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.input__slide_right').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass('animated fadeInRight');
	        }
	    });
	});
	$('#btn').click(function(e){
		e.preventDefault();
		$('.desktop').removeClass('zoomInRight');
		$('.desktop').toggleClass('bounce');
	})
})

