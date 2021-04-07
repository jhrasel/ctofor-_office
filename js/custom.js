$(document).ready(function(){
	
		$( "#tabs" ).tabs();
		 
		$('.counter').counterUp({
		   delay: 10,
  			time: 2000
		
		});

		/*********** slider***************/
			$('.magazine-owl-slider').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				autoplay:false,
				navText: [
		        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
		        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
		    	],
				autoplayTimeout:3000,
				dots:false,
				responsive:{
					0:{
						items:1
					},
					575:{
						items:2
					},
					767:{
						items:2
					},
					992:{
						items:3
					},
					1200:{
						items:3
					}
				}
			})


});







		




