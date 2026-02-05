const grid = document.getElementById("game-grid");

fetch("data/all.json")
  .then(res => res.json())
  .then(games => {
    games.forEach(g => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <img src="${g.img}" onerror="this.style.display='none'">
        <p>${g.name}</p>
      `;
      card.onclick = () => {
        // Open the AZGames URL directly (no iframe, no blocking)
        window.location.href = g.url;
        // or use this if you want a new tab:
        // window.open(g.url, "_blank");
      };
      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading games:", err);
  });
