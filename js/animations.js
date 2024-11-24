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
      const boxTop = element.getBoundingClientRect().top; 

      if (boxTop < window.innerHeight) {
        element.classList.add('active'); 
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); 
  activateInElements(); 
});
