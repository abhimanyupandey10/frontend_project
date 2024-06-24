$(document).ready(function() {
    
  setTimeout(function() {
      $('#loader').addClass('active');
      $(this).scrollTop(0);
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
$(document).ready(function() {
    var testimonials = [
        { user: "Rakesh Datta", comment: "This is a great adoption center!", rating: getRandomRating() },
        { user: "Martin Geokhaskar", comment: "I adopted a pet from here and it's the best decision I ever made!", rating: getRandomRating() },
        { user: "Ramesh Chavan", comment: "The staff is very friendly and helpful.", rating: getRandomRating() },
        { user: "Sara Thompson", comment: "Absolutely love the pets here! The adoption process was smooth and easy.", rating: getRandomRating() },
        { user: "John Smith", comment: "Great service and caring staff. Would recommend to anyone looking to adopt a pet.", rating: getRandomRating() },
        { user: "Emily Davis", comment: "The pets are well taken care of and they have a variety of animals available for adoption.", rating: getRandomRating() },
        { user: "Michael Brown", comment: "Friendly environment and knowledgeable staff. Adopted a wonderful dog last week.", rating: getRandomRating() },
        { user: "Sophia Wilson", comment: "Excellent place to find a new furry friend. Adopted a kitten here and she's a joy.", rating: getRandomRating() },
        { user: "David Garcia", comment: "The adoption center has a clean and welcoming atmosphere. Found my perfect dog here.", rating: getRandomRating() },
        { user: "Emma Martinez", comment: "Helpful staff and a variety of animals to choose from. Adopted a rabbit and he's delightful.", rating: getRandomRating() },
        // Add more testimonials as needed
    ];

    displayTestimonials(testimonials);

    function displayTestimonials(testimonials) {
        var testimonialContainer = $('#testimonialContainer');
        testimonialContainer.empty(); // Clear existing content

        testimonials.forEach(function(testimonial) {
            var starsHtml = generateStarsHtml(testimonial.rating);

            var testimonialHtml = `
                <div class="col-md-4">
                    <p>"${testimonial.comment}"</p>
                    <p>- ${testimonial.user}</p>
                    <p>${starsHtml}</p>
                </div>
            `;
            testimonialContainer.append(testimonialHtml);
        });
    }

    function getRandomRating() {
        return Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
    }

    function generateStarsHtml(rating) {
        var starsHtml = '';
        for (var i = 0; i < rating; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        for (var i = rating; i < 5; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        return starsHtml;
    }
});
