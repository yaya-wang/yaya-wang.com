// $(function(){
//   var boxes = $('.parallax'),
//       $window = $(window);
//   $window.scroll(function(){
//     var scrollTop = $window.scrollTop();
//     boxes.each(function(){
//       var $this = $(this),
//           scrollspeed = parseInt($this.data('scroll-speed')),
//           val = - scrollTop / scrollspeed;
//       $this.css('transform', 'translateY(' + val + 'px)');
//     });
//   });
// })


$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed' 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});

$(function(){
  var boxes = $('.box'),
      $window = $(window);
  $window.scroll(function(){
    var scrollTop = $window.scrollTop();
    boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'translateY(' + val + 'px)');
    });
  });
})

