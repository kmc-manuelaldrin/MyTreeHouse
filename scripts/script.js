( function($) {

	var app =  {

		init: function(){
			this.browserDetector();
			this.magnificPopUpFunction();
			this.slickFunction();
		},

		browserDetector: function(){
			var browserName = bowser.name; 
			var browserNameLowerCase = browserName.toLowerCase();
			var browserNameTrim = browserNameLowerCase.replace(/\s+/g, '');
			$('html').addClass(browserNameTrim);
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		},

		slickFunction: function(){
		    $('.slider-holder').slick({
			  infinite: true, 
			  slidesToShow: 1, 
			  slidesToScroll: 1, 
			  arrows: false, 
			  autoplay: true, 
			  fade: true,
			  dots: false,
			  autoplaySpeed: 5500
			});
		}



	} 

	$(document).ready( function() {
		app.init();

		// $('.slider-form input').blur(function() {
		// 	if(!$.trim(this.value).length) { // zero-length string AFTER a trim
		// 		   $(this).parents('.slider-form-field').addClass('warning');
		// 	}else{
		// 		$(this).parents('.slider-form-field').removeClass('warning');
		// 	}
		// });

		$('#nextBtn1').click(function(){ 
			var errors = 0;
			$('#slider-form-1 input').each(function() {
				if( !$(this).val() ) {
					$(this).next().remove();
					$(this).after('<span class="field-validation-error text-danger">Field is required.</span>');
					errors++;
				}else{ $(this).next().remove(); }		
			});
			console.log(errors)
			if(errors === 0){
				$('#slider-form-1, #nextBtn1').removeClass('current');
				$('#slider-form-2, #nextBtn2').addClass('current');
				$('.slider-form-header').attr('data-form','2');
				$('.slider-progress-bar').attr('data-progress','2');
				$('.slider-form-header[data-form="2"] h3').text("Step 2/3");
				$('.slider-form-header[data-form="2"] p').text("Please tell us a little more about your home");
				$('#backBtn1').addClass('current');
			}
		})

		$('#nextBtn2').click(function(){ 
			var errors = 0;
			$('#slider-form-2 select').each(function() {
				if( !$(this).val() ) {
					$(this).next().remove();
					$(this).after('<span class="field-validation-error text-danger">Field is required.</span>');
					errors++;
				}else{ $(this).next().remove(); }		
			});
			console.log(errors)
			if(errors === 0){
				$('#slider-form-2, #nextBtn2').removeClass('current');
				$('#slider-form-3, #submitBtn').addClass('current');
				$('.slider-form-header').attr('data-form','3');
				$('.slider-progress-bar').attr('data-progress','3');
				$('.slider-form-header[data-form="3"] h3').text("Last step, hooray!");
				$('.slider-form-header[data-form="3"] p').text("Where do we send your home report to?");
				$('#backBtn1').removeClass('current');
				$('#backBtn2').addClass('current');
			}
		})

		$('#backBtn1').click(function(){ 
			$('#slider-form-1, #nextBtn1').addClass('current');
			$('#slider-form-2, #nextBtn2').removeClass('current');
			$('.slider-form-header').attr('data-form','1');
			$('.slider-progress-bar').attr('data-progress','1');
			$('.slider-form-header[data-form="1"] h3').text("Step 1/3");
			$('.slider-form-header[data-form="1"] p').text("Simply fill in the fields below");
			$('#backBtn1').removeClass('current');
		})

		$('#backBtn2').click(function(){ 
			$('#slider-form-2, #nextBtn2').addClass('current');
			$('#slider-form-3, #submitBtn').removeClass('current');
			$('.slider-form-header').attr('data-form','2');
			$('.slider-progress-bar').attr('data-progress','2');
			$('.slider-form-header[data-form="2"] h3').text("Step 2/3");
			$('.slider-form-header[data-form="2"] p').text("Please tell us a little more about your home");
			$('#backBtn2').removeClass('current');
			$('#backBtn1').addClass('current');
		})

		$('#submitBtn').click(function(){ 
			var errors = 0;
			$('#slider-form-3 input').each(function() {
				if( !$(this).val() ) {
					$(this).next().remove();
					$(this).after('<span class="field-validation-error text-danger">Field is required.</span>');
					errors++;
				}else{ $(this).next().remove(); }		
			});
			console.log(errors)
			if(errors === 0){
				// $('#slider-form-2, #nextBtn2').removeClass('current');
				// $('#slider-form-3, #submitBtn').addClass('current');
				// $('.slider-form-header').attr('data-form','3');
				// $('.slider-progress-bar').attr('data-progress','3');
				// $('.slider-form-header[data-form="3"] h3').text("Last step, hooray!");
				// $('.slider-form-header[data-form="3"] p').text("Where do we send your home report to?");
			}
		})

		

		   
	});

	$(window).load(function () { 

	});

	$(window).resize(function () { 

	});
	
})(jQuery);


