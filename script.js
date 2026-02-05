const grid = document.getElementById("game-grid");
const frame = document.getElementById("game-frame");
const player = document.getElementById("player-container");
const back = document.getElementById("back-btn");

async function tryURL(url) {
  return new Promise(resolve => {
    const test = document.createElement("iframe");
    test.style.display = "none";
    test.src = url;

    // If it loads, it's good
    test.onload = () => {
      test.remove();
      resolve(true);
    };

    // If it errors, it's bad
    test.onerror = () => {
      test.remove();
      resolve(false);
    };

    // Safety timeout (3 seconds)
    setTimeout(() => {
      test.remove();
      resolve(false);
    }, 3000);

    document.body.appendChild(test);
  });
}

async function findWorkingURL(urls) {
  for (let url of urls) {
    const ok = await tryURL(url);
    if (ok) return url;
  }
  return null;
}

fetch("data/all.json")
  .then(res => res.json())
  .then(games => {
    games.forEach(g => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `<p>${g.name}</p>`;

      card.onclick = async () => {
        grid.style.display = "none";
        player.style.display = "block";

        const working = await findWorkingURL(g.urls);

        if (working) {
          frame.src = working;
        } else {
          frame.src = "";
          alert("No working AZGames URL found.");
        }
      };

      grid.appendChild(card);
    });
  });

back.onclick = () => {
  frame.src = "";
  player.style.display = "none";
  grid.style.display = "grid";
};
