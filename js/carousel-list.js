import games from "./all-games.js";
let currentIndex = 0;
let autoSlideInterval;
function generateCarousel() {
  const slideContainer = document.querySelector(".carousel .carousel-inner");
  const thumbnailContainer = document.querySelector(
    ".carousel .thumbnail-container"
  );
  slideContainer.innerHTML = "";
  thumbnailContainer.innerHTML = "";
  let slidesHtml = "";
  let thumbnailsHtml = "";
  games.forEach((data, index) => {
    slidesHtml += ` 
      <div class="carousel-item ${index === 0 ? "active" : ""}"> 
        <div class="carousel-img-but"> 
          <img src="${"img/games/" + data.thumbnail_image}" alt="${data.full_gamename}"> 
          <a href="${"html-pages/" + data.link}" target="_blank" class="image-link"> Go to Page </a> 
        </div> 
      </div> `;
    thumbnailsHtml += ` 
      <div class="thumbnail-container-item"> 
        <img src="${"img/games/" + data.thumbnail_image}" alt="${data.full_gamename}" class="thumbnail" data-index="${index}"> 
        <span class="thumbnail-caption">${data.name}</span> 
      </div> `;
  });
  slideContainer.innerHTML = slidesHtml;
  thumbnailContainer.innerHTML = thumbnailsHtml;
  updateCarousel();
  attachThumbnailClickListeners();
  attachCarouselButtonListeners();
  resetAutoSlide();
}
function moveSlide(direction) {
  const totalSlides = games.length;
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateCarousel();
  resetAutoSlide();
}
function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
  resetAutoSlide();
}
function updateCarousel() {
  const slides = document.querySelectorAll(".carousel .carousel-item");
  const carouselWidth = document.querySelector(
    ".carousel .carousel-container"
  ).offsetWidth;
  const offset = -currentIndex * carouselWidth;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}px)`;
  });
  const thumbnails = document.querySelectorAll(".carousel .thumbnail");
  thumbnails.forEach((thumb, index) => {
    if (index === currentIndex) {
      thumb.style.opacity = 1;
    } else {
      thumb.style.opacity = 0.6;
    }
  });
}
function attachCarouselButtonListeners() {
  const prevButton = document.querySelector(".carousel .prev");
  const nextButton = document.querySelector(".carousel .next");
  if (prevButton) {
    prevButton.addEventListener("click", () => moveSlide(-1));
  }
  if (nextButton) {
    nextButton.addEventListener("click", () => moveSlide(1));
  }
}
function attachThumbnailClickListeners() {
  const thumbnails = document.querySelectorAll(".carousel .thumbnail");
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"), 10);
      goToSlide(index);
    });
  });
}
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    moveSlide(1);
  }, 5000);
}
generateCarousel();
z;
