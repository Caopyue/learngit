$(function(){
	$('.allgoods dl').each(function(){
		$(this).hover(function(){
			$(this).addClass('nowactive');
		},function(){
			$(this).removeClass('nowactive');
		})
	})
})



















