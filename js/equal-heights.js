(function() {
    // Wait for the page to load and render
    document.addEventListener('DOMContentLoaded', function() {
      // Use setTimeout to ensure all images and content are loaded
      setTimeout(function() {
        equalizeCardHeights();
        
        // Recalculate when window size changes
        window.addEventListener('resize', debounce(equalizeCardHeights, 250));
      }, 100);
    });
    
    function equalizeCardHeights() {
      // Reset all card heights
      var cards = document.querySelectorAll('.projects .links .item');
      cards.forEach(function(card) {
        card.style.height = 'auto';
      });
      
      // Find the tallest card
      var maxHeight = 0;
      cards.forEach(function(card) {
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });
      
      // Apply uniform height
      if (maxHeight > 0) {
        cards.forEach(function(card) {
          card.style.height = maxHeight + 'px';
        });
      }
    }
    
    // Debounce function to prevent frequent resize event triggers
    function debounce(func, wait) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          func.apply(context, args);
        }, wait);
      };
    }
  })();