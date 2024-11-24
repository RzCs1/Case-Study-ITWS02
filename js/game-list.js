import games from "./all-games.js";
let gameList = ``;
games.forEach((game) => {
  gameList += ` 
  <div class="game-list-card"> 
      <img src="${"../img/games/" + game.cover_image}" alt="Image Description"> 
    <div class="game-list-card-content"> 
      <h2>${game.full_gamename}</h2> 
      <p>${game.short_desc}</p> 
      <div class="button-container"> 
        <a href="${game.link}" class="button">Visit Game Page</a> 
        <a href="${game.videogame_link}" class="button">Videos</a> 
        <a href="${game.gamersgallery}" class="button">Players Gallery</a> 
      </div> 
    </div> 
  </div> `;
});
document.querySelector("#all-game-lists").innerHTML = gameList;
