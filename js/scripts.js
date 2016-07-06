$(window).load( function() {

	var count = 1;
	var timer = setTimeout(function tick() {
		$('.load_stripe div').width(count-8+'%');
		if (count > 8) {
			$('.load_stripe span').html(count+' %');
		}
		count++;

		if (count !== 100) {
			timer = setTimeout(tick, 40);
		}
		else {
			$('.preloader').fadeOut(1000);
		}
	}, 40);

	$('#smoothslides').smoothSlides({
		effectModifier: 1.4,
		effectDuration: 6000,
		captions: false,
		navigation: false,
		pagination: false,
		matchImageSize: false
	});

	function isMobile() {
    	return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
	}

	var opened = false;
	var h = $(window).height();

	$(this).scroll(function(){
		if (!opened) {
			if ($(this).scrollTop()	> 100) {
				$('.top_block').css({'top':'-100px'});
				$('.menu_block').addClass('menu_hovered_block');
			}
			else {
				$('.top_block').css({'top':'0'});
				$('.menu_block').removeClass('menu_hovered_block');
			}
		}

		if (!isMobile()) {
			for (i=1; i<=10; i++) {
				if ($(this).scrollTop() > $('#li_'+i).offset().top - h + 100) {
					$('#li_'+i).addClass('magictime twisterInUp');
				}
				else {
					$('#li_'+i).removeClass('magictime twisterInUp');
				}
			}
			for (j=1; j<=5; j++) {
				if ($(this).scrollTop() > $('.layout_'+j).offset().top - h + 100) {
					$('.layout_'+j).addClass('layout_animated');
				}
				else {
					$('.layout_'+j).removeClass('layout_animated');
				}
			}
		}
		// console.log($(this).scrollTop());
	});


	$('#menu_button').click( function() {
		toggleMenu();
	});

	$('.left_block').click( function() {
		toggleMenu();
	});
	
	$('.content_cover').click( function() {
		if (opened) {
			toggleMenu();
			unHoverMenu();
		}
	});

	$('.left_block').hover(
		function() { hoverMenu();},
		function() { unHoverMenu();}
	);
	$('.menu_block').hover(
		function() { hoverMenu();},
		function() { unHoverMenu();}
	);
	$('#menu_button').hover(
		function() { hoverMenu();},
		function() { unHoverMenu();}
	);

	function isFirefox() {
		return (navigator.userAgent.search(/Firefox/) > 0);
	}

	function hoverMenu() {
		if (!opened) {
			$('.left_block').addClass('left_hovered_block');
			$('.menu_block').addClass('menu_hovered_block');
			if (!isFirefox()) {
		        $('#line1').css({'transform':'rotate(29deg)', 'x':'10px', 'y':'10px'});
		        $('#line4').css({'transform':'rotate(-29deg)', 'x':'10px', 'y':'20px'});
			}
		}
	}

	function unHoverMenu() {
		if (!opened) {
			$('.left_block').removeClass('left_hovered_block');
			$('.menu_block').removeClass('menu_hovered_block');
	        $('#line1').css({'transform':'rotate(0)', 'x':'4px', 'y':'7px'});
	        $('#line4').css({'transform':'rotate(0)', 'x':'4px', 'y':'23px'});
		}

	}

	function toggleMenu() {
		if(opened) {
			$('body').removeClass('show_menu');
			$('.left_block').css({'width':'100px'});
			$('.menu_block').css({'opacity':'1'});

	        $('#line1').css('y', '7');
	        $('#line2').css({'transform':'rotate(0)'});
	        $('#line3').css({'transform':'rotate(0)'});
	        $('#line4').css('y','23')
		}
		else {
			$('body').addClass('show_menu');
			$('.top_block').css({'top':'0'});
			$('.left_block').css({'width':'0'});
			$('.menu_block').css({'opacity':'0'});

	        $('#line1').css('y', '-100');
	        $('#line2').css({'transform':'rotate(405deg)',});
	        $('#line3').css({'transform':'rotate(-45deg)'});
	        $('#line4').css('y','100')
		}

		opened = !opened;		
	}

	$('.smoothScroll').click(function() {
		var scrolldelay = 100;

		if (!$(this).hasClass('notoggle')) {
			toggleMenu();
			setTimeout(unHoverMenu, 1000);
			scrolldelay = 1000;
		}
		
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	        if (target.length) {
	          $('html, body').delay(scrolldelay).animate({
	            scrollTop: target.offset().top
	          }, 1500);
	          return false;
	        }
      	}

	});


	if (!isMobile()) {
		skrollr.init();	
	}
	

	setInterval(function() {
		$('#email').toggleClass('magictime foolishIn');
		setTimeout(function() {
			$('#phone').toggleClass('magictime vanishIn');
		}, 1500);
	}, 4000);

	function initMap() {

		var styleArray = [
		    {
		      featureType: "all",
		      stylers: [
		       { hue: "#000033" },
		       { lightness: "-50" },
		       { saturation: -50 }
		      ]
		    },{
		      featureType: "road.highway",
		      stylers: [
		        { visibility: "off" }
		      ]
		    },{
		      featureType: "landscape",
		      stylers: [
		        { visibility: "off" }
		      ]
		    },{
		      featureType: "administrative",
		      stylers: [
		        { visibility: "off" }
		      ]
		    },{
		      featureType: "poi",
		      stylers: [
		        { visibility: "off" }
		      ]
		    }
		];

	  	coords = {lat: 50.395755, lng: 30.500518};

		var map = new google.maps.Map(document.getElementById('map'), {
		    center: coords,
		    styles: styleArray,
		    scrollwheel: false,
		    zoom: 14,
		    mapTypeControl: false,
		    backgroundColor: "#1e1e1e",
		    // fullscreenControl: true
		});

	  	new google.maps.Marker({
	        map: map, 
	        position: coords,
	        title: "Ambit Studio",
	        icon: new google.maps.MarkerImage(
	            '/imgs/mapDot1.png'
	        )
    	});

	};
	
	initMap();


});


function sendmail() {
	var name = $('#name').val();
	var email = $('#mail').val();
	var captcha = $('#captcha').val();
	var text = $('#text').val();
	
	if (name && email && captcha && text) {
	    $.ajax({
	            url: 'message.php',
	            type: 'POST',
	            cache: false,
	            data: {
	                name: name,
	                email: email,
	                captcha: captcha,
	                text: text
	            },
	            success: function(data) {
	                if (data) {$('#mail_message').html(data);}
	                else {$('#mail_message').html('не удалось отправить сообщение. Ошибка сервера. Попробуйте позже');}
	            }
	    });

	}
	else {
		$('#mail_message').html('Введите значения во все поля формы');
	}

	$('#myModal').modal();
}
