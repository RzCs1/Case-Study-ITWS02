export function initializeImageModal() {
  const modal = document.getElementById("game-images-modal");
  const modalImage = document.getElementById("game-modal-image");
  const closeBtn = modal.querySelector(".close-btn");
  const prevBtn = document.getElementById("prev-game-btn");
  const nextBtn = document.getElementById("next-game-btn");
  const thumbnails = document.querySelectorAll("#game-images img");

  let currentIndex = -1;

  function showImageByIndex(index) {
    if (index >= 0 && index < thumbnails.length) {
      modalImage.src = thumbnails[index].src;
      currentIndex = index;
      modal.style.display = "flex";

      setTimeout(() => {
        modal.style.opacity = 1;
        modal.style.transform = "scale(1)";
        modalImage.style.transform = "scale(1)";
      }, 10);
    }
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
      showImageByIndex(index);
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.opacity = 0;
    modal.style.transform = "scale(0.9)";
    modalImage.style.transform = "scale(0.9)";

    setTimeout(() => {
      modal.style.display = "none";
    }, 400);
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.opacity = 0;
      modal.style.transform = "scale(0.9)";
      modalImage.style.transform = "scale(0.9)";

      setTimeout(() => {
        modal.style.display = "none";
      }, 400);
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      showImageByIndex(currentIndex - 1);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < thumbnails.length - 1) {
      showImageByIndex(currentIndex + 1);
    }
  });
}

export function initializeGalleryModal() {
  const modal = document.getElementById("players-gallery-modal");
  const modalImage = document.getElementById("player-modal-image");
  const closeBtn = modal.querySelector(".close-btn");
  const prevBtn = document.getElementById("prev-player-btn");
  const nextBtn = document.getElementById("next-player-btn");
  const thumbnails = document.querySelectorAll(".gallery-image-container .thumbnail");

  let currentIndex = -1;

  function showImageByIndex(index) {
    if (index >= 0 && index < thumbnails.length) {
      modalImage.src = thumbnails[index].src;
      currentIndex = index;
      modal.style.display = "flex";

      setTimeout(() => {
        modal.style.opacity = 1;
        modal.style.transform = "scale(1)";
        modalImage.style.transform = "scale(1)";
      }, 10);
    }
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function () {
      showImageByIndex(index);
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.opacity = 0;
    modal.style.transform = "scale(0.9)";
    modalImage.style.transform = "scale(0.9)";

    setTimeout(() => {
      modal.style.display = "none";
    }, 400);
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.opacity = 0;
      modal.style.transform = "scale(0.9)";
      modalImage.style.transform = "scale(0.9)";

      setTimeout(() => {
        modal.style.display = "none";
      }, 400);
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      showImageByIndex(currentIndex - 1);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < thumbnails.length - 1) {
      showImageByIndex(currentIndex + 1);
    }
  });
}
