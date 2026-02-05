const grid = document.getElementById("game-grid");
const frame = document.getElementById("game-frame");
const player = document.getElementById("player-container");
const back = document.getElementById("back-btn");

fetch("data/all.json")
  .then(res => res.json())
  .then(games => {
    games.forEach(g => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <img src="${g.img}">
        <p>${g.name}</p>
      `;
      card.onclick = () => {
        grid.style.display = "none";
        player.style.display = "block";
        frame.src = g.url;
      };
      grid.appendChild(card);
    });
  });

back.onclick = () => {
  frame.src = "";
  player.style.display = "none";
  grid.style.display = "grid";
};
