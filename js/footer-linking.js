const footer_links = [{
  cyberduo: ``,
  facebook: `https://www.facebook.com/cyberduo.official/`,
  twitter: `https://tiktok.com/cyber_duo`,
  instagram: `https://www.instagram.com/cyber_duo/`,
  youtube: `https://www.youtube.com/channel/UC1-3-6-5-0-0-0`,
  linkedin: `https://www.linkedin.com/company/cyber-duo/`,
  github: `https://github.com/cyber-duo`
}];

document.querySelector("footer").innerHTML = `
  <a href="${currentPage === "index.html" ? "" + nav_links.home  + "#" : "..\\" + nav_links.home + "#"}">CYBERDUO</a>
  <div class="web-social-media">
    <ul>
      <li title="Facebook">
        <a href="${footer_links[0].facebook}" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li title="Twitter">
        <a href="${footer_links[0].twitter}" target="_blank">
          <i class="fa-brands fa-tiktok"></i>
        </a>
      </li>
      <li title="Instagram">
        <a href="${footer_links[0].instagram}" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li title="YouTube">
        <a href="${footer_links[0].youtube}" target="_blank">
          <i class="fab fa-youtube"></i>
        </a>
      </li>
      <li title="LinkedIn">
        <a href="${footer_links[0].linkedin}" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li title="GitHub">
        <a href="${footer_links[0].github}" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </div>
  <p>copyright © 2024 CYBERDUO All rights reserved</p>
`;
