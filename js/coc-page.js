import { initializeImageModal, initializeGalleryModal } from "./image-modal.js";
import games from "./all-games.js";

const gamedata = games[1];

document.addEventListener("DOMContentLoaded", function () {
  const trailerVideoContainer = document.getElementById("trailer-video");

  const trailervideo = `
    <video id="game-video" src="../video/trailer/${gamedata.trailer}" title="" controls autoplay muted>
      Your browser does not support the video tag.
    </video>
  `;
  trailerVideoContainer.innerHTML = trailervideo;

  document.querySelector("#description-game").innerHTML = `<p>${gamedata.description}</p>`;

  let gameImagesHTML = '';
  gamedata.images.forEach((image) => {
    gameImagesHTML += `
      <img src="../img/games/coc/${image.imgsrc}" alt="${image.imgalt}" class="thumbnail">
    `;
  });
  document.querySelector("#game-images").innerHTML = gameImagesHTML;

  let gameGalleryHTML = '';
  gamedata.playersgallery.forEach((playersgallery) => {
    gameGalleryHTML += `
      <div class="thumbnail-wrapper">
        <img src="../img/games/coc/gallery/${playersgallery.imgsrc}" alt="${playersgallery.imgalt}" class="thumbnail">
        <div class="cap-desc">
          <h4 class="caption">${playersgallery.caption}</h4>
          <p class="description">${playersgallery.imgdesc}</p>
        </div>
      </div>
    `;
  });
  document.querySelector("#game-gallery").innerHTML = gameGalleryHTML;

  let videoGameHTML = '';
  gamedata.videogame.forEach((video) => {
    videoGameHTML += `
      <div class="video-gallery-thumbnail-wrapper">
        <div class="video-gallery-thumbnail-container">
          <video class="video-gallery-thumbnail-video" muted loop>
            <source src="../video/coc/${video.videosrc}" type="video/mp4">
          </video>
        </div>
        <div class="video-gallery-cap-desc">
          <h4 class="video-gallery-caption">${video.videocaption}</h4>
        </div>
        <p class="video-gallery-description">${video.videodesc}</p>
      </div>
    `;
  });
  document.querySelector("#game-videos").innerHTML = videoGameHTML;

  initializeImageModal();
  initializeGalleryModal();
});
