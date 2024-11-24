export function initializeVideoGallery() {
  const modal = document.getElementById("video-gallery-modal");
  const modalVideo = document.getElementById("video-gallery-modal-video");
  const closeBtn = document.querySelector(".video-gallery-close-btn");
  const modalCaption = document.getElementById("video-gallery-modal-caption");
  const modalDescription = document.getElementById(
    "video-gallery-modal-description"
  );
  const prevBtn = document.getElementById("prev-video-btn");
  const nextBtn = document.getElementById("next-video-btn");
  const videoThumbnails = document.querySelectorAll(
    ".video-gallery-thumbnail-wrapper"
  );
  let currentIndex = -1;
  function showVideoByIndex(index) {
    if (index >= 0 && index < videoThumbnails.length) {
      const thumbnail = videoThumbnails[index];
      const video = thumbnail.querySelector("source");
      const caption = thumbnail.querySelector(
        ".video-gallery-caption"
      ).textContent;
      const description = thumbnail.querySelector(
        ".video-gallery-description"
      ).textContent;
      modalVideo.src = video.getAttribute("src");
      modalCaption.textContent = caption;
      modalDescription.textContent = description;
      currentIndex = index;
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.opacity = 1;
        modal.style.transform = "scale(1)";
      }, 10);
    }
  }
  videoThumbnails.forEach((thumbnail, index) => {
    const video = thumbnail.querySelector("video");
    thumbnail.addEventListener("click", function () {
      showVideoByIndex(index);
    });
    thumbnail.addEventListener("mouseenter", function () {
      video.play();
    });
    thumbnail.addEventListener("mouseleave", function () {
      video.pause();
      video.currentTime = 0;
    });
  });
  closeBtn.addEventListener("click", function () {
    modal.style.opacity = 0;
    modal.style.transform = "scale(0.9)";
    modalVideo.pause();
    modalVideo.currentTime = 0;
    setTimeout(() => {
      modal.style.display = "none";
    }, 400);
  });
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.opacity = 0;
      modal.style.transform = "scale(0.9)";
      modalVideo.pause();
      modalVideo.currentTime = 0;
      setTimeout(() => {
        modal.style.display = "none";
      }, 400);
    }
  });
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      showVideoByIndex(currentIndex - 1);
    }
  });
  nextBtn.addEventListener("click", function () {
    if (currentIndex < videoThumbnails.length - 1) {
      showVideoByIndex(currentIndex + 1);
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  initializeVideoGallery();
});
