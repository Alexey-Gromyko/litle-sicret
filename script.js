
// выезжающий header при склодде вверх

let header = $('header'),
		scrollPrev = 0;

$(window).scroll(function() {
	let scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});







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



//
// $(".menu .tab").on('click', function() {
// 	$(".menu .tab").removeClass("active").eq($(this).index()).addClass("active");
// 	$(".tab_item").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");






$(".menu .tab").on('click', function() {
	if (!$(this).hasClass('active')) {
		$(this).addClass('active').siblings().removeClass('active');
		$(".tab_item").hide().eq($(this).index()).fadeIn();
	}
});


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




// footer меню


function windowSizeOne() {
	if ($(window).width() < 767) {
		$('.mobile-list-second').hide();
	} else {
		$('.mobile-list-second').show();
	}
}
windowSizeOne()



$('.footer-nav').on('click', function () {
	const $thisNav = $(this).parents('.footer-links').find('ul');
	
	$(this).toggleClass('active');

	if ($(this).hasClass('active')) {
		$thisNav.show('fast');
	} else {
		$thisNav.hide('fast');
	}
})

// FAQs секция

//$('#fadeOutText').hide();

// $('.content').on('click', function () {
// 	$('.fadeOutText').toggleClass('active');
// 	$('.fadeOutText').each(function (index) {
// 		if ($(this).hasClass('active')) {
// 			$('.fadeOutText').show('slow');
// 		} else {
// 			$('.fadeOutText').hide('slow');
// 		}
			
// 	});
// })


// $('.content').on('click', function () {
// 	$('.fadeOutText').toggleClass('active');
// 	let arrText = [$('.fadeOutText')];
// 	let i = 0;
// 	for ( let i = 0; i < arrText.length; i++);
// 	if (i == 1) {
// 		$('.fadeOutText').show('slow');
// 	} else {
// 		$('.fadeOutText').hide('slow');
// 	}
// })









$('.content').on('click', function (){
	$(this).toggleClass('show-this');
	if($(this).hasClass('show-this')) {
		$('.content.show-this p').slideDown();
		$('.open').addClass('active');
 		$('.title-color').addClass('active');
	} else {
		$('.content p').slideUp();
		$('.open').removeClass('active');
		$('.title-color').removeClass('active');
	}
})



















// $('.content').on('click', function () {
// 	if ($(this)) {
// 		$(this).toggleClass('show-this');
// 	}
// 	else if ($('.content').hasClass('show-this')) {
// 		$('.content.show-this p').show('slow');
// 		$('.open').addClass('active');
// 		$('.title-color').addClass('active');
// 	} else {
// 		$('.content p').hide('slow');
// 		$('.open').removeClass('active');
// 		$('.title-color').removeClass('active');
// 	}
// })

































// $('.content').each(function () {
// 	if ($(this).hasClass('show-this')) {
// 		$('.fadeOutText').show('slow');
// 	} else {
// 		$('.fadeOutText').hide('slow');
// 	}
// })


// $('.content').on('click', function () {
// 	$('.fadeOutText').toggleClass('active');
// 		if ($('.fadeOutText').hasClass('active')) {
// 		$('.fadeOutText').show('slow');
// 	} else {
// 		$('.fadeOutText').hide('slow');
// 	}
// })














// $('.content').on('click', function () {
// 	if ($('.content').hasClass('show-this')) {
// 		$('.open').addClass('active');
// 		$('.title-color').addClass('active');
// 	} else {
// 		$('.open').removeClass('active');
// 		$('.title-color').removeClass('active');
// 	}
// }) 





















// $('.content').click(function() {
//   $(this).toggleClass('active').next()[$(this).next().is(':hidden') ? "slideDown" : "slideUp"](400);
// });