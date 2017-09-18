/*****************************************
	
    *Author			Bryan Maxim
	*Website		www.bryanmaxim.com
		
 *****************************************/
 
 /* 1. Transition Between Pages
  * 2. Transition Links
  * 3. Ajax Subscribe
  * 4. Ajax Contact
  * 5. Owl Carousel Trigger for Services
  * 6. Owl Carousel Trigger for Contact
  * 7. CountDown Date of Release
 */

/*Page Links (on Click Effects)*/


/* === Home Pages Animations + PageLoader === */

$(document).ready( function(){
'use strict';	
$('#background').mouseParallax({ moveFactor: 2 });
/*Start Page Loader*/
setTimeout(function() {

			  $('.loader').fadeOut('slow');
			  
}, 1240);


/*End Page Loader*/

setTimeout(function() {

			  $('.logo').addClass('animated fadeInDown');
}, 1200);
			  
	setTimeout(function() {
			  $('.container h1').addClass('animated fadeInUp');
	}, 1200);
	

			setTimeout(function() {
			  $('.bar').addClass('animated fadeInUp');
			}, 1200);


				setTimeout(function() {
			  $('.countdown').addClass('animated fadeIn');
				}, 1200);


					setTimeout(function() {
			  $('.scrolldownhome').addClass('animated bounceIn');
					}, 1200);

	
/*1.Transition When You Click the arrow on HomePage*/
function nextHome() {
	'use strict';
		$('#home-page').fadeOut('fast');
		$('#aboutus').fadeIn('slow');
	}
	
/*2.Transition When You Click "Back Arrow" on AboutUs*/
function hideAbout() {
	'use strict';
	    $('#aboutus').fadeOut('fast');
	    $('#home-page').fadeIn('slow');
	}
	
/*3.Transition When You Click "View Our Services" on AboutUs*/
function showServices() {
	'use strict';
	   $('#aboutus').fadeOut('fast');
	   $('#ourservices').fadeIn('slow');
	}
	
/*4.Transition When You Click "Back Arrow" on Our Services*/
function hideServices() {
	'use strict';
	   $('#ourservices').fadeOut('fast');
	   $('#aboutus').fadeIn('slow');
	}
	
/*5.Transition When You Click "Subscribe now" on Our Services*/
function showSubscribe() {
	'use strict';
	    $('#ourservices').fadeOut('fast');
	    $('#subscribe').fadeIn('slow');
	}
	
/*6.Transition When You Click "Back Arrow" on Subscribe*/
function hideSubscribe() {
	'use strict';
	    $('#subscribe').fadeOut('fast');
	    $('#ourservices').fadeIn('slow');
	}
	
/*7.Transition When You Click go "Back to homepage" on Subscribe*/
function hideSubscribeHome() {
	'use strict';
	   $('#subscribe').fadeOut('fast');
	   $('#home-page').fadeIn('slow');
	}
	
/*8.Transition When You Click "Contact Form" on About Us*/	
function showContact() {
	'use strict';
	   $('#aboutus').fadeOut('fast');
	   $('#contact').fadeIn('slow');
	}
	
/*9.Transition When You Click "Back Arrow" on Contact*/
function hideContact() {
	'use strict';
	   $('#contact').fadeOut('fast');
	   $('#aboutus').fadeIn('slow');
	}
	
	
/* === 2.Transition Links ===*/


/*HomePage*/
$('.scrolldownhome').click(function() {	
		nextHome();	
});

/*About Us(back button)*/
$('.gabout').click(function() {	
		hideAbout();	
});

/*About Us("View our Services" button)*/
$('.nextoserv').click(function() {	
		showServices();	
}); 

/*About Us ("Contact Form" button)*/
$('.nextocontact').click(function() {	
		showContact();	
});

/*Our Services("back button)*/
$('.gservices').click(function() {	
		hideServices();	
});

/*Our Services("Subscribe Now" button)*/ 			  
$('.nextosubscribe').click(function() {	
		showSubscribe();	
});
 
/*Subscribe to us ("back button)*/
$('.gsubscribe').click(function() {	
		hideSubscribe();	
});

/*Subscribe to us ("Go back to homepage" button)*/
$('.backtohome').click(function() {	
		hideSubscribeHome();	
});

/*Contact Us ("back button)*/
$('.gcontact').click(function() {	
		hideContact();	
});



	
/* === 3. Ajax Subscribe === */


	
	$('.sub-form').submit(function() {
		  var postdata = $('.sub-form').serialize();
		  $.ajax({
			  type: 'POST',
			  url: 'inc/subscribe.php',
			  data: postdata,
			  dataType: 'json',
			  success: function(json) {
				  if(json.valid == 0) {
					  $('.status-message').html(json.error);
					  $('.status-message').fadeIn('slow');
					  $('.status-message').css('margin-top','5px');
				  }
				  else {
					  $("input, textarea").val('');
					  $('.subscribe-form button').prop('disabled',true);
					  $('.status-message').html(json.message);
					  $('.status-message').fadeIn('slow');
					  $('.status-message').css('margin-top','5px');
				  }
			  }
			});
			return false;
		});
		


/* === 4. Ajax Contact === */


	
	$('.contact-form form').submit(function() {
	
			$('.contact-form form .nameLabel').html('Name');
			$('.contact-form form .emailLabel').html('Email');
			$('.contact-form form .messageLabel').html('Message');
	
			var postdata = $('.contact-form form').serialize();
			$.ajax({
				type: 'POST',
				url: 'inc/sendmail.php',
				data: postdata,
				dataType: 'json',
				success: function(json) {
					if(json.nameMessage != '') {
						$('.contact-form form .nameLabel').append(' - <span class="status"> ' + json.nameMessage + '</span>');
					}
					if(json.emailMessage != '') {
						$('.contact-form form .emailLabel').append(' - <span class="status"> ' + json.emailMessage + '</span>');
					}
					if(json.messageMessage != '') {
						$('.contact-form form .messageLabel').append(' - <span class="status"> ' + json.messageMessage + '</span>');
					}
					if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
							$('.contact-form .status-message-contact').addClass('animated fadeIn').html('EMAIL SENT SUCCESSFULLY.');
							$('input[type="text"],textarea').val('');
					}
				}
			});
			return false;
		});	
			


/* === 5. Owl Carousel Trigger for Services === */

 
  var owl = $(".servicesCar");
 
  owl.owlCarousel({
     
      items : 4,
      itemsDesktop : [4],
      itemsTablet: [768,2],
      itemsDesktopSmall : [1],
      pagination : true
      
 
  });
 


/* === 6. Owl Carousel Trigger for Contact === */


 
  var owl = $(".contactCar");
 
  owl.owlCarousel({
     
      items : 1,
      itemsDesktop : [1],
      itemsTablet: [768,1],
      itemsDesktopSmall : [1],
      pagination : false,
      autoPlay : true
      
 
  });
 
});

/* === 7. CountDown Date of Release === */

	 $('.countdown').countdown('2017/10/01', function(event) { /*Edit the Date of Release Here*/
     $(this).html(event.strftime('<li class="count"><span>%D</span> <p>วัน</p></li> <li class="count"><span>%H</span> <p>ชั่วโมง</p></li><li class="count"><span>%M</span> <p>นาที</p></li><li class="count"><span>%S</span> <p>วินาที</p></li>'));
   });
