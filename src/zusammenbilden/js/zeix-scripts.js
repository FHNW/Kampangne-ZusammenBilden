/**
 * © 2013 Zeix AG
 */
$(document).ready(function(){

	// Flyouts

	$('.infotext-phone').click(function(e){
		 $(".headerline, .infotext-phone").toggleClass('active');
	});

	
	 $(".videorow").empty();
	 $("#video").remove();
     
       if (Modernizr.mq('only screen and (max-width: 767px)')){
    	
    	$('[id^=person-]').click(function(e){
     		
     		$('.layer').removeClass('active');
     		$(".videocontainer").removeClass('active');
     		
     		var id_person = $(this).attr("id");
     		var a = parseInt(id_person.match(/\d+/), 10);
     		
     		switch (a) {
                case 0:
                case 1:
                case 2:
                    var container = ('one');
                    break;
                case 3:
                case 4:
                   var container = ('two');
                    break;
                case 5:
                case 6:
                	var container = ('four');
                    break;
                case 7:
                case 8:
                	var container = ('five');
                    break;
                case 9:
                case 10:
                	var container = ('six');
                    break;
                default:
                   var container = ('six');
            }
			
			   	/*Scrolling*/	
     			if ($('.row-fluid').length > 0){
				 function scrollToElement(selector, time, verticalOffset) {
				    time = typeof(time) != 'undefined' ? time : 1000;
				    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
				    element = $(selector);
				    offset = element.offset();
				    offsetTop = offset.top + verticalOffset;
				    $('html, body').animate({
				        scrollTop: offsetTop
				    }, time);
				 }	 	 
			   }	
     		
     		scrollToElement(".videocontainer." + container, 800, -28);
     		
			$('#person-' + a + ' .layer').addClass('active');
			$(".videorow").slideUp('slow');
			$(".videorow").empty();
	    	$("#video").remove();
			$(".videocontainer").removeClass('active');
			
	    	$(".videocontainer." + container).load(id_person + 'small.html', function(){
		    	
		    	$(".videocontainer." + container + " .videorow").slideDown('slow');
	    		$(".videocontainer." + container).addClass('active');
		    	
		    	$('a.close-video').click(function(e){
		    		 $(".videocontainer." + container).removeClass('active');
				     $('.layer').removeClass('active');
				     
		    		 $(".videorow").slideUp('slow');
				     $("#video").remove();
				     $(".elastic-video").remove();
				     /*stop the video */
		    		
				     var video = document.getElementById('video');
			    		 video.pause();
			    		 video.stop();
				     
				     
				     return false;
			    });
	    	});
      });
    }
     
    if (Modernizr.mq('only screen and (min-width: 768px) and (max-width: 979px)')){
    	
    	$('[id^=person-]').click(function(){
     		
     		$('.layer').removeClass('active');
     		$(".videocontainer").removeClass('active');
     		
     		var id_person = $(this).attr("id");
     		var a = parseInt(id_person.match(/\d+/), 10);
     		
     		switch (a) {
     			case 0:
     			case 1:
     			case 2:
     			case 3:
                    var container = ('one');
                    break;
                case 4:
                case 5:
                case 6:
                   var container = ('three');
                    break;
                case 7:
                case 8:
                case 9:
                	var container = ('five');
                    break;
                case 10:
                	var container = ('seven');
                    break;
                default:
                   var container = ('one');
            }
           
           /*Scrolling*/ 
           if ($('.row-fluid').length > 0){
			 function scrollToElement(selector, time, verticalOffset) {
			    time = typeof(time) != 'undefined' ? time : 1000;
			    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
			    element = $(selector);
			    offset = element.offset();
			    offsetTop = offset.top + verticalOffset;
			    $('html, body').animate({
			        scrollTop: offsetTop
			    }, time);
			 }	 	 
		   }	
     		
     		scrollToElement(".videocontainer." + container, 800, -28);
			
			$('#person-' + a + ' .layer').addClass('active');
			$(".videorow").slideUp('slow');
			$(".videorow").empty();
	    	$("#video").remove();
			
			$(".videocontainer").removeClass('active');
	    	
	    	$(".videocontainer." + container).load(id_person + 'medium.html', function(){
	    		
	    		$(".videocontainer." + container + " .videorow").slideDown('slow');
	    		$(".videocontainer." + container).addClass('active');
		    			    	
		    	$('a.close-video').click(function(e){
		    		 $(".videocontainer." + container).removeClass('active');
				     $('.layer').removeClass('active');
		    		 
				     $(".videorow").slideUp('slow');
				     $("#video").remove();
				     $(".elastic-video").remove();
				     /*stop the video */
		    		  var video = document.getElementById('video');
			    		 video.pause();
			    		 video.stop();
				     				     
				     return false;
			    });
	    	});
	    
      });
    }
    
   if (($('html').hasClass('ie8') && $(window).width() >= 980) || Modernizr.mq('only screen and (min-width: 980px)')) {
        
        $('[id^=person-]').click(function(){
        	
        	$('.layer').removeClass('active');
        	$(".videocontainer").removeClass('active');
        	
     		var id_person = $(this).attr("id");
     		var a = parseInt(id_person.match(/\d+/), 10);
     		
     		var container = (a < 6 ? 'one' : 'five');
     		
     		
     		/*Scrolling*/
     		if ($('.row-fluid').length > 0){
			 function scrollToElement(selector, time, verticalOffset) {
			    time = typeof(time) != 'undefined' ? time : 1000;
			    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
			    element = $(selector);
			    offset = element.offset();
			    offsetTop = offset.top + verticalOffset;
			    $('html, body').animate({
			        scrollTop: offsetTop
			    }, time);
			 }	 	 
		   }	
     		scrollToElement(".videocontainer." + container, 800, -28);
     		
	    	$('#person-' + a + ' .layer').addClass('active');
	    	$(".videorow").slideUp('slow');
	    	
	    	$(".videorow").empty();
	    	$("#video").remove();
	    		    	
	    	$(".videocontainer." + container).load(id_person + 'high.html', function(){
		    	
		    	$(".videocontainer." + container).slideDown('slow');
		    	$(".videocontainer." + container).addClass('active');
		    	
		    	
		    	$('a.close-video').click(function(){
		    		 
		    		 $(".videocontainer." + container).removeClass('active');
		    		 $('.layer').removeClass('active');
		    		 
		    		 $(".videorow").slideUp('slow');
		    		 $("#video").hide();
		    		 $("#video").remove();

		    		 $(".elastic-video").remove();
		    		 /*stop the video */
		    		  var video = document.getElementById('video');
			    		 video.pause();
			    		 video.stop();
			    		 
			    	 return false;
			    });
	    	});
	    	return false;
	    
	    	
      });
  }

});