$(document).ready(function() {
  // Preloader
  setTimeout(function() {
      $('#loader').addClass('active');
  }, 3500);

  // Infinite scrolling with animation
  $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Loop through each section to check if it should be animated
      $('.section').each(function(i) {
          var sectionTop = $(this).offset().top;

          // If section is visible on the screen
          if (sectionTop <= scrollDistance + windowHeight) {
              $(this).addClass('visible');
          }
      });
  });

  // Progress bar on scroll
  $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
      var documentHeight = $(document).height() - $(window).height();
      var scrollPercentage = (scrollDistance / documentHeight) * 100;
      $('#progressbar').css('width', scrollPercentage + '%');
  });

  // Background particles setup
  var particles = $('.particles');
  var particleCount = 100; // Adjust particle count as needed

  for (var i = 0; i < particleCount; i++) {
      var size = Math.random() * 5;
      particles.append('<span style="top:' + Math.random() * 100 + '%; left:' + Math.random() * 100 + '%; width:' + size + 'px; height:' + size + 'px; animation-delay:' + (Math.random() * 4) + 's;"></span>');
  }

  // Star background setup
  var stars = $('.star-background');
  var starCount = 50; // Adjust star count as needed

  for (var i = 0; i < starCount; i++) {
      var size = Math.random() * 3;
      stars.append('<span style="top:' + Math.random() * 100 + '%; left:' + Math.random() * 100 + '%; width:' + size + 'px; height:' + size + 'px; animation-delay:' + (Math.random() * 4) + 's;"></span>');
  }
});
