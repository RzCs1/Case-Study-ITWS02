document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.animationScroll');
  const animatedInElements = document.querySelectorAll('.animation_in');

  function checkScroll() {
    const triggerBottom = window.innerHeight / 1; 

    animatedElements.forEach(element => {
      const boxTop = element.getBoundingClientRect().top; 

      if (boxTop < triggerBottom) {
        element.classList.add('active'); 
      } else {
        element.classList.remove('active'); 
      }
    });
  }


  function activateInElements() {
    animatedInElements.forEach(element => {
      const boxTop = element.getBoundingClientRect().top; // Get the top position of the element

      if (boxTop < window.innerHeight) {
        element.classList.add('active'); // Add active class to trigger animation
      }
    });
  }

  // Initial checks
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check scroll position for animationScroll elements
  activateInElements(); // Activate animation for already visible elements
});
