const home_cover_links = {
  news: 'html-pages/games.html',
  about: 'html-pages/about.html'
};

document.querySelector("#home-cover-buttons").innerHTML = `
  <a href="${home_cover_links.news}" class="buttonlink">Explore</a>
  <a href="${home_cover_links.about}" class="buttonlink">About us</a>
`;
