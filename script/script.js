$(document).ready(function () {

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

	

$('#subMenu').on('click', function () {
    $('.sub-menu-shop').toggleClass('active');
})

$(document).on('click', function(e) {
  if (!$(e.target).closest("#subMenu").length) {
    $('.sub-menu-shop').removeClass('active');
  }
  e.stopPropagation();
});



$('.search').on('click', function () {
	$('.search-section').addClass('active');
	$('body').addClass('scroll-hide');
})

$('.close-search').on('click', function () {
	$('.search-section').removeClass('active');
	$('body').removeClass('scroll-hide');
})



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


	
	
	
	
	
	
	
	
 $(".tab_item").not(":first").hide();

// $(".menu .tab").on('click', function() {
// 	$(".menu .tab").removeClass("active").eq($(this).index()).addClass("active");
// 	$(".tab_item").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");


	$(".menu .tab").on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).addClass('active').siblings().removeClass('active');
			$(".tab_item").hide().eq($(this).index()).fadeIn();
		}
	})


<<<<<<< HEAD:script/script.js
=======


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

>>>>>>> 96ae3c53e5fe7ce09568ce9a18bd3979a4807b3d:script.js
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
	responsive: [
    {
      breakpoint: 1070,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


	$('.mobile-wrapper').on('click', function () {
		const $thisNav = $(this).parents('.footer-links').find('ul');
		$(this).toggleClass('active');
		$(this).children('.footer-nav-img').toggleClass('active');
		if ($(this).hasClass('active')) {
			$thisNav.show('fast');
		} else {
			$thisNav.hide('fast');
		}
	})






  AOS.init();

	


<<<<<<< HEAD:script/script.js
	
=======
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

>>>>>>> 96ae3c53e5fe7ce09568ce9a18bd3979a4807b3d:script.js
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

})
