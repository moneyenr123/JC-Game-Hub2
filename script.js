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

  // Go to embed mode instead of redirecting away
  window.location.href = "embed.html#u=" + encoded;
};
