
	$(function(){
		'use strict';
		$('.smoothScroll').click(function(e){
			e.preventDefault();
			//window.console.log('#' + $(this).data('scroll'));
			$('html,body').animate({
				scrollTop:$('#' + $(this).data('scroll')).offset().top
			},1000);
		});
	});
