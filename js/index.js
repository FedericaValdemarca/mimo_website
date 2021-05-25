
// Navbar changing on scrolling //
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 700);
	$('span').toggleClass('scrolled', $(this).scrollTop() > 700);
});



// Hamburger Navbar Animation //
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});



// Add active class to the current button ON CLICK (highlight it) //
  var header = document.getElementById("navbarDefault");
  var btns = header.getElementsByClassName("nav-link");
  for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
	});
  }



// Closes responsive menu when a scroll trigger link is clicked //
$('.nav-link').on("click", function () {
	$('.navbar-collapse').collapse('hide');
	$('#nav-icon1').removeClass('open');
});
	


// Add active class to the current button ON HOVER (highlight it)_Using Scrollspy, Bootstrap //
$(document).ready(function(){
	$('body').scrollspy({target: ".navbar", offset: 120});   
  });
  


// Example starter JavaScript for disabling form submissions if there are invalid fields //
(function() {
	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to //
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission //
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  })();



// Smooth Scroll Discover button //
  $(document).ready(function(){
	// Add smooth scrolling to all links
	$(".button-scopri").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });



  // Smooth Scroll navbar//
  $(document).ready(function(){
	// Add smooth scrolling to all links
	$(".nav-link").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });



// Scroll to top when arrow up clicked //
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});