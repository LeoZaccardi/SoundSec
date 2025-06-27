// Animacion SOUNDSEC inicio
const soundsecTitle = document.querySelector("#hero h1");
const heroSection = document.querySelector("#hero");

if (soundsecTitle && heroSection) {
  soundsecTitle.addEventListener("mouseenter", () => {
    for (let i = 0; i < 15; i++) {
      const icon = document.createElement("span");
      icon.classList.add("floating-icon");

      const icons = ["🎵", "🔒", "☁️"];
      icon.textContent = icons[Math.floor(Math.random() * icons.length)];

      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.position = "absolute";
      icon.style.zIndex = "2";
      icon.style.fontSize = "2rem";
      icon.style.pointerEvents = "none";

      heroSection.appendChild(icon);

      setTimeout(() => {
        icon.remove();
      }, 4000);
    }
  });
}
