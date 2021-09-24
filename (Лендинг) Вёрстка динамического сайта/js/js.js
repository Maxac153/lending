$(function(){
	$("[data-scroll]").on("click", function (event){
		event.preventDefault();
		var blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;
		$("html, body").animate({
			scrollTop: blockOffset
		});
	});
});

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
	});
});

$('.tabs-wrapper').each(function () {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function () {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});

$('.t-tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.t-tab-item').not(':first').hide();
	ths.find('.t-tab').click(function() {
		ths.find('.t-tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.t-tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});