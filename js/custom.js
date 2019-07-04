/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Home Slider
5. Init Gallery
6. Init Testimonials Slider
7. Init Lightbox


******************************/


$(document).ready(function()
{
	"use strict";

	/*

	1. Vars and Inits

	*/

	let header = document.getElementById('header');
	let menuActive = false;
	let menu = document.getElementById('menu');
	let burger = document.getElementById('burger_container');



	/*
	2. Set Header
	*/

	function setHeader()
	{

		if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) && ($(window).width() < 991)) {
			header.classList.add("scrolled");
			header.style.backgroundColor = 'rgba(255,255,255,.8)';
		}
		else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
		{
			header.classList.add("scrolled");

		}
		else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && ($(window).width() < 991))
		{
			header.classList.remove("scrolled");

			header.style.backgroundColor = 'rgba(255,255,255,0)';
		}
		else if ((document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) && ($(window).width() > 991))
		{
			header.classList.remove("scrolled");

			header.style.backgroundColor = 'rgba(255,255,255,.5)';
		}
	}

	setHeader();

	window.onresize = function()
	{
		setHeader();
	}

	window.onscroll = function()
	{
		setHeader();
	}


	/*
	3. Init Menu
	*/

	function openMenu()
	{
		menu.classList.add("active");
		menuActive = true;
	}

	function closeMenu()
	{
		menu.classList.remove("active");
		menuActive = false;
	}

	function initMenu()
	{
		if(menu)
		{
			if(burger_container)
			{
				burger.onclick = function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						})
					}
				}
			}
		}
	}




	/*
	6. Init Testimonials Slider
	*/

	function initTestSlider()
	{
		if($('.test_slider').length)
		{
			var testSlider = $('.test_slider');
			testSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				smartSpeed:1200,
				nav:false,
				dots:false
			});
		}
	}

// Instafeed

	var userFeed = new Instafeed({
        get: 'user',
        userId: '15533227278',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '15533227278.1677ed0.d4fe0f36ca7c48b8ad1e753f197976f4',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	});
	

//NiCe ScRoLl//	

	const homeRect = document.getElementById('home_container').getBoundingClientRect();
	const homeTop = homeRect.top;
	const homeBot = homeRect.bottom;

	const collRect = document.getElementById('collections').getBoundingClientRect();
	const collTop = collRect.top;
	const collBot = collRect.bottom;

	const arrivRect = document.getElementById('arrivals').getBoundingClientRect();
	const arrivTop = arrivRect.top;
	const arrivBot = arrivRect.bottom;

	const extRect = document.getElementById('extra').getBoundingClientRect();
	const extTop = extRect.top;
	const extBot = extRect.bottom;




	
	const throttle = (func, limit) => {
		let inThrottle
		return function() {
		  const args = arguments
		  const context = this
		  if (!inThrottle) {
			func.apply(context, args)
			inThrottle = true
			setTimeout(() => inThrottle = false, limit)
		  }
		}
	  }

	// window.addEventListener('scroll', );


	// Initial state
	var scrollPos = 0;
	// adding scroll event
	// window.addEventListener('scroll', throttle(function() {
	// 	if ((document.body.getBoundingClientRect()).top > scrollPos) {
	// 		if (pageYOffset > extTop) {
	// 			// window.scrollTo(0,extTop)
	// 			window.scrollTo({
	// 				top: extTop,
	// 				left: 0,
	// 				behavior: 'smooth',
	// 			  })
	// 		} else if (pageYOffset > arrivTop) {
	// 			// window.scrollTo(0,arrivTop)
	// 			window.scrollTo({
	// 				top: arrivTop,
	// 				left: 0,
	// 				behavior: 'smooth',
	// 			  })
	// 		} else if (pageYOffset > collTop) {
	// 			window.scrollTo({
	// 				top: collTop,
	// 				left: 0,
	// 				behavior: 'smooth',
	// 			  })
	// 			// window.scrollTo(0,collTop)
	// 		} else if (pageYOffset > homeTop) {
	// 			window.scrollTo({
	// 				top: homeTop,
	// 				left: 0,
	// 				behavior: 'smooth',
	// 			  })
	// 			// window.scrollTo(0,homeTop)
	// 		}
	// 	} else {
	// 		// if (pageYOffset < homeTop) {
	// 		// 	window.scrollTo(0,homeTop)
	// 		// }
	// 		if (pageYOffset < collTop) {
	// 			// window.scrollTo(0,collTop)
	// 			window.scrollTo({
	// 				top: collTop,
	// 				left: 0,
	// 				behavior: 'smooth',
	// 			  })
	// 		} else if (pageYOffset < arrivTop) {
	// 			// window.scrollTo(0,arrivTop)
	// 			window.scrollTo({
	// 				top: arrivTop,
	// 				left: 0,
	// 				behavior: 'smooth',
	// 			  })
	// 		} else if (pageYOffset < extTop) {
	// 			// window.scrollTo(0,extTop)
	// 			window.scrollTo({
	// 				top: extTop,
	// 				left: 0,
	// 				behavior: 'smooth',
	// 			  })
	// 		}
	// 	}		// saves the new position for iteration.
	// 	scrollPos = (document.body.getBoundingClientRect()).top;
	// 	}, 1000))
	// detects new state and compares it with the new one
	


    userFeed.run();
	initMenu();
	initTestSlider();

});
