document.addEventListener("DOMContentLoaded", () => {
  const allCards = document.querySelectorAll(".gamer-card");
  allCards.forEach((card) => {
    const buttons = card.querySelectorAll(".buttons button");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const section = this.textContent.toLowerCase();
        const personalInfo = card.querySelector(".personal-info");
        const gameInfos = card.querySelector(".gameinfos");
        const contactInfo = card.querySelector(".contact");
        [personalInfo, gameInfos, contactInfo].forEach((sec) => {
          sec.classList.remove("show");
          sec.classList.add("hide");
        });
        buttons.forEach((btn) => btn.classList.remove("btn-selected"));
        if (section === "personal") {
          personalInfo.classList.remove("hide");
          personalInfo.classList.add("show");
          this.classList.add("btn-selected");
        } else if (section === "game") {
          gameInfos.classList.remove("hide");
          gameInfos.classList.add("show");
          this.classList.add("btn-selected");
        } else if (section === "contacts") {
          contactInfo.classList.remove("hide");
          contactInfo.classList.add("show");
          this.classList.add("btn-selected");
        }
      });
    });
    const personalInfo = card.querySelector(".personal-info");
    personalInfo.classList.add("show");
    card.querySelector(".personalbut").classList.add("btn-selected");
  });
});
