const nav_links = {
  home: "index.html",
  games: "games.html",
  news: "Gamers.html",
  about: "about.html",
  contact: "contact.html",
  logo: "web-logo2.png",
};
const currentPage = window.location.pathname.split("/").pop();
document.querySelector("nav").innerHTML = ` 
  <div class="logo"> 
    <a href="${currentPage === "index.html" ? "" + nav_links.home : "..\\" + nav_links.home}"> 
      <img src="${currentPage === "index.html" ? "img/logo/" + nav_links.logo : "..\\img\\logo\\" + nav_links.logo}" alt="Logo"> 
    </a> 
  </div> 
    <div class="nav-bar"> 
      <ul class="nav-list"> 
        <li>
          <a href="${currentPage === "index.html" ? "" + nav_links.home  + "#" : "..\\" + nav_links.home + "#"}"><i class="fa-solid fa-house" style="  transform: translateY(-2.5px);"></i>Home</a>
        </li> 
        <li>
          <a href="${currentPage === "index.html" ? "html-pages/" + nav_links.games  + "#" : "" + nav_links.games  + "#"}"><i class="fa-solid fa-gamepad"></i>Games</a>
        </li> 
        <li>
          <a href="${currentPage === "index.html" ? "html-pages/" + nav_links.about  + "#" : "" + nav_links.about  + "#"}"><i class="fa-solid fa-pager"></i>About</a>
        </li> 
        <li>
          <a href="${currentPage === "index.html" ? "html-pages/" + nav_links.contact  + "#" : "" + nav_links.contact  + "#"}"><i class="fa-solid fa-envelope"></i>Contact</a>
        </li> 
      </ul> 
      <button> 
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 18L20 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/> <path d="M4 12L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round"/> <path d="M4 6L20 6" stroke="#fff" stroke-width="2" stroke-linecap="round"/> </svg> 
      </button> 
    </div> `;
const button = document.querySelector("nav button");
const navList = document.querySelector(".nav-list");
button.addEventListener("click", () => {
  navList.classList.toggle("active");
});
