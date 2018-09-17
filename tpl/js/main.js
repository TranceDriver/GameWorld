$(document).ready(function(){

	//Scroll
	if ($(this).scrollTop() != 0) {
		$('div.header div.top').css('padding-top', '10px').css('padding-bottom', '10px');
	}

	$(this).scroll(function(){
		if ($('div.header div.top').css('padding-top') == '40px') {
			$('div.header div.top').stop().animate({'paddingTop': '10px', 'paddingBottom': '10px'}, 500);
		}

		if ($(this).scrollTop() == 0) {
			$('div.header div.top').stop().animate({'paddingTop': '40px', 'paddingBottom': '40px'}, 200);
		}
	});

	//Menu button
	$('div.menu-button a').click(function(event){
		$('div.menu-slider-grid').stop().slideToggle(function(){
			if ($(this).is(':visible')) {
				$(this).css('display', 'grid');
			}
		});
		event.preventDefault();
	});

	//Search
	$('div.header div.search form input[type=text]').focus(function(){
		$(this).attr('placeholder', '').stop().animate({'width': '250px'}, 500);
	}).focusout(function(){
		if ($(this).val() == '') {
			$(this).attr('placeholder', 'Искать...').stop().animate({'width': '100px'}, 500);
		}
	});

	//Block info
	$('div.body-wrapper div.post').mouseenter(function(){
		$(this).find('p').stop().slideDown();
	}).mouseleave(function(){
		$(this).find('p').stop().slideUp();
	});

	//Slider
	$('div.slider-wrapper div.article-slider').mouseenter(function(){
		$(this).find('h1').stop().animate({'opacity': '0'}, 500);
	}).mouseleave(function(){
		$(this).find('h1').stop().animate({'opacity': '10'}, 5000);
	});

	$('div.slider-wrapper div.article-slider, div.slider-wrapper div.top-slider').click(function(){
		console.log('click'); //TODO
	});
});

$(window).on('load', function () {
   $('.ma5slider').ma5slider();
});