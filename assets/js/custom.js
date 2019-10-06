$(document).ready(function()
{
	"use strict";


	const burger = document.getElementById('burger');
	const header = document.getElementById('header');
	let burger_clicked = false 

	function solidifyHeader() {
		burger.onclick = function() {
			if(!burger_clicked) {
				header.style.backgroundColor = "white"
				burger_clicked = true
			} else {
				header.style.backgroundColor = "rgba(255,255,255,.5)"
				burger_clicked = false
			} 
		}
	}	

	function headerResize() {
		window.onresize = function() {
			if(document.body.clientWidth > 991) {
				header.style.backgroundColor = "rgba(255,255,255,.5)"
			} else if(document.body.clientWidth < 991 && burger_clicked === true) {
				header.style.backgroundColor = "white"
			}
		}
	}

	// Instafeed vars
	
	let leftPos = 0;
	let instaImgs = document.getElementsByClassName('instaimg');
	const galleryLeft = document.getElementById("gallery-left");
	const galleryRight = document.getElementById("gallery-right");
	

	// Instafeed div

	var userFeed = new Instafeed({
        get: 'user',
        userId: '15533227278',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '15533227278.1677ed0.d4fe0f36ca7c48b8ad1e753f197976f4',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
	});

	// Adding Aria label to instaimgs
	// Remove col-lg-3 class from instaimgs

	window.onload = function() {
		for (let i = 0; i < instaImgs.length; i++) {
			console.log("removed col");
			let imgCont = instaImgs[i];
			imgCont.classList.remove("col-lg-3");
		}

		for (let i = 0; i < instaImgs.length; i++) {
			let imglink = instaImgs[i].querySelector("a");
			imglink.setAttribute('aria-label', 'instagram image');
			console.log("set attribute" + i);
		}

		for (let i = 0; i < instaImgs.length; i++) {
			console.log("removed col");
			let img = instaImgs[i].querySelector("a").querySelector("img");
			img.classList.remove("img-fluid");
		}
	};
	

	// Instafeed arrow behavior
	
	function instaScroll() {
		if (event.target === galleryRight) {
			if (leftPos <= -(instaImgs.length * 100)) {
				console.log('no more scrolling');
				return
			} else {
				leftPos -= 100;
				for(let i = 0; i < instaImgs.length; i++) {
					instaImgs[i].style.left = leftPos + 'vw';
				}
			}
		} else {
			if (leftPos >= 0) {
				console.log('no more scrolling');
				return
			} else {
				leftPos += 100;
				for(let i = 0; i < instaImgs.length; i++) {
					instaImgs[i].style.left = leftPos + 'vw';
				}
			}
			
		}	
	}	
	
	galleryLeft.addEventListener('click', instaScroll);
	galleryRight.addEventListener('click', instaScroll);
		
	
	// // Disappearing Header
	let prevScrollpos = window.pageYOffset;

	function setHeader() {
		console.log("in setheader")
		let currentScrollPos = window.pageYOffset;
  		if (prevScrollpos < currentScrollPos) {
    		header.classList.add("scrolled");
  		} else {
    		header.classList.remove("scrolled");;
  		}
  		prevScrollpos = currentScrollPos;
	}

	window.onresize = function()
	{
		setHeader();
	}

	window.onscroll = function()
	{
		setHeader();
	}


	// Add hover effect to featured product images when not mobile.

	function isMobile() {
		try{ document.createEvent("TouchEvent"); return true; }
		catch(e){ return false; }
		}

	function onHoverAdd() {
		if (!isMobile()) {
			$(".product-image").hover(function(){
				$(this).css("transform", "scale(1.1)");
				}, function() {
				$(this).css("transform", "scale(1)");
				});
		}
	}

	userFeed.run();
	solidifyHeader();
	headerResize();
	onHoverAdd();
});