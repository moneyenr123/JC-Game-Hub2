const form = document.getElementById("proxyForm");
const input = document.getElementById("query");
const pills = document.querySelectorAll(".pill");

pills.forEach(p => {
  p.onclick = () => {
    input.value = p.dataset.fill;
    input.focus();
  };
});

form.onsubmit = e => {
  e.preventDefault();
  const q = input.value.trim();

  const encoded = btoa(q);

  // Open ScrambleJet in a NEW TAB
  window.open("scramblejet.html?u=" + encoded, "_blank");
};
