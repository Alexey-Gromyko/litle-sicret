
// открывает и закрывает вклядку Shop

$('#subMenu').on('click', function () {
    $('.sub-menu-shop').toggleClass('active');
})









// открывает поиск и запрещает скролл страницы

$('.search').on('click', function () {
	$('.search-section').addClass('active');
	$('body').addClass('scroll-hide');
})

$('.close-search').on('click', function () {
	$('.search-section').removeClass('active');
	$('body').removeClass('scroll-hide');
})









//мобильное меню




$('.mobile-menu').on('click', function () {
	$('.mobile-menu').toggleClass('active');
	$('.mobile-menu-wrapper-one').toggleClass('menu-active');
	$('.mobile-menu-wrapper-two').toggleClass('active-sub');
	
})

$('#hideLeft').on('click', function () {
	$('.mobile-menu-wrapper-one').addClass('hideLeft');
	$('.mobile-menu-wrapper-two').addClass('showLeft');
})

$('#hideRight').on('click', function () {
	$('.mobile-menu-wrapper-one').removeClass('hideLeft');
	$('.mobile-menu-wrapper-two').removeClass('showLeft');
})









// Переключает вкладки

$(".tab_item").not(":first").hide();
$(".menu .tab").click(function() {
	$(".menu .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");












//  slick слайдеры

$('.slider').slick({
	dots: true,
	adaptiveHeight: true,
	speed: 1000,
});


$('.comments-slider-container').slick({
	dots: true,
	adaptiveHeight: true,
	speed: 1000,
	slidesToShow: 3,
	infinite: false,
});











// сколл меню в footer


$('#navFirst').on('click', function () {
	$('#navFirst').toggleClass('active');

	if ($('#navFirst').hasClass('active')) {
		$('.mobile-list-first').show('fast');
	} else {
		$('.mobile-list-first').hide('fast');
	}
})


function windowSizeOne() {
	if ($(window).width() < 767) {
		$('.mobile-list-second').hide();
	} else {
		$('.mobile-list-second').show();
	}
}
windowSizeOne()





$('#navSecond').on('click', function () {
	$('#navSecond').toggleClass('active');

	if ($('#navSecond').hasClass('active')) {
		$('.mobile-list-second').show('fast');
	} else {
		$('.mobile-list-second').hide('fast');
	}

})




function windowSizeTwo() {
	if ($(window).width() < 767) {
		$('.mobile-list-third').hide();
	} else {
		$('.mobile-list-third').show();
	}
}
windowSizeTwo()



$('#navThird').on('click', function () {
	$('#navThird').toggleClass('active');

	if ($('#navThird').hasClass('active')) {
		$('.mobile-list-third').show('fast');
	} else {
		$('.mobile-list-third').hide('fast');
	}
})