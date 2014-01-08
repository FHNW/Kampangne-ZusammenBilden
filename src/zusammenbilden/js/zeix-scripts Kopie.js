/**
 * © 2013 Zeix AG
 */
$(document).ready(function(){
	
	 //$("#videocontainer").hide();
     $(".show_hide").show();
     
     $("[id^=content]").hide();

     $('.span2 p > a.one, .span2 p > a.two, .span2 p > a.three, .span2 p > a.four, .span2 p > a.five').click(function(){
     	 
	     $(".videorow").slideToggle('slow');
	     	/*
var id = $(this).attr('class').replace('thumb-content','');
	     	$(".videocontainer").html($("#content-"+id).html());
*/		

		$(".videocontainer.one ").load("person1.html");
			
	     return false;
     });	
    
    $('.show_hide').click(function(){
	     $(".videorow").slideUp('slow');
	     return false;
    });
    
    
    //SCROLLING Scripts for the Accodions
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
	 $('.btn').click(function(){
		 scrollToElement('.videorow', 500, -30);
	 });
   }
   
   
   		 // Use the relocate function to move things around:
    //var videorow = document.getElementsByClassName("videorow");
    //var videocontainer = document.getElementsByClassName("videocontainer");
    //relocate(480, videorow, videocontainer);	
    
    


});