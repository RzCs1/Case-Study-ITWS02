const gamerlist = [
    {
      perinfo: {
        img: ['Renz1.png', 'Renz2.png', 'Renz3.png', 'Renz4.png'],
        name: `Censon, Renz M.`,
        gquote: `"Games are a great way to have fun."`,
        about: `I am a gamer since I was a child. I love playing games and spending hours in front of the screen. I also enjoy playing games with friends and family. I am always looking for new challenges and opportunities to explore.`,
      },
      ingame: {
        game1: {
          gamename: `MLBB`,
          ign: `アスタ`,
        },
        game2: {
          gamename: `CODM`,
          ign: `RcNaPepsi`,
        },
        game3: {
          gamename: `COC`,
          ign: `Slayer`,
        },
      },
      socialmedia: {
        socialmedia2: {
          socialmediaplatform: `Facebook`,
          socialmedialink: `facebook.com`,
          socialmedianame: `Renz censon`,
        },
        socialmedia4: {
          socialmediaplatform: `Instagram`,
          socialmedialink: `instagram.com`,
          socialmedianame: `@RZCS`,
        },
        socialmedia5: {
          socialmediaplatform: `Email Address`,
          socialmedialink: `email@email.com`,
          socialmedianame: `renz@cyberduo.com`,
        },
      },
    },
    {
      perinfo: {
        img: ['Kenji1.png', 'Kenji2.png', 'Kenji3.png', 'Kenji4.png'],
        name: `Veneracion, Kenji B.`,
        gquote: `"Respawn. Retry. Repeat."`,
        about: `A kid born with a gaming heart. Growing up, gaming was more than a hobby; it was where I felt most at ease. When I play, I don't simply want to win; I want to have fun and make memories with other. Up until now, it remains my go-to destination for both adventure and relaxation.`,
      },
      ingame: {
        game1: {
          gamename: `MLBB`,
          ign: `KENJI`,
        },
        game2: {
          gamename: `CODM`,
          ign: `Friox`,
        },
        game3: {
          gamename: `COC`,
          ign: `Friox`,
        },
      },
      socialmedia: {
        socialmedia1: {
          socialmediaplatform: `Facebook`,
          socialmedialink: `https://www.facebook.com/kenji.veneracion29?mibextid=ZbWKwL`,
          socialmedianame: `Kenji Veneracion`,
        },
        socialmedia2: {
          socialmediaplatform: `Instagram`,
          socialmedialink: `https://www.instagram.com/knjvnrcn_?igsh=MWZwa2s4MmNyc2ZsMg==`,
          socialmedianame: `@knjvnrcn_`,
        },
        socialmedia3: {
          socialmediaplatform: `Email Address`,
          socialmedianame: `kenjiveneracion@gmail.com`,
        },
      },
    },
  ];
  
  let gamerlists = ``;
  
  gamerlist.forEach((gamer) => {
    let gameInfos = ``;
    Object.keys(gamer.ingame).forEach((key) => {
      const game = gamer.ingame[key];
      gameInfos += `
        <div class="game-info">
          <h4>${game.gamename}</h4>
          <p>${game.ign}</p>
        </div>
      `;
    });
  
    let socialInfos = ``;
    Object.keys(gamer.socialmedia).forEach((key) => {
      const social = gamer.socialmedia[key];
      socialInfos += `
        <li>
          <span>${social.socialmediaplatform}</span>
          <a href="${social.socialmedialink}" target="_blank">${social.socialmedianame}</a>
        </li>
      `;
    });
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomInt = getRandomInt(0, 3);

    gamerlists += `
      <div class="gamer-card">
        <div class="gamer-card-img">
          <img src="../img/person/${gamer.perinfo.img[randomInt]}" alt="${gamer.perinfo.name}">
        </div>
        <div class="gamer-infos">
          <div class="personal-info">
            <h3>Who?</h3>
            <h4>${gamer.perinfo.name}</h4>
            <p>${gamer.perinfo.gquote}</p>
            <p>${gamer.perinfo.about}</p>
          </div>
          <div class="gameinfos display-none">
            <h3>IGNs</h3>
            <div class="game-iformation">
              ${gameInfos}
            </div>
          </div>
          <div class="contact display-none">
            <h3>Contacts</h3>
            <ul>
              ${socialInfos}
            </ul>
          </div>
          <div class="buttons">
            <button class="personalbut unselected btn-selected">Personal</button>
            <button class="gameinfosbut unselected">Game</button>
            <button class="socialmediabut unselected">Contacts</button>
          </div>
        </div>
      </div>
    `;
  });
  
  document.querySelector("#gamer-list").innerHTML = gamerlists;
  