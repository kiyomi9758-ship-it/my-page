let player;
let currentVolume = 50;
let hasStarted = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: 'FIk0oHVORhU',
    playerVars: {
      autoplay: 0,
      loop: 1,
      playlist: 'FIk0oHVORhU'
    },
    events: {
      onReady: function(event) {
        event.target.setVolume(currentVolume);
      }
    }
  });
}

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

document.addEventListener("DOMContentLoaded", function() {

  const container = document.querySelector(".container");

  // 🎵 Démarrer musique au premier clic
  document.addEventListener("click", function() {
    if (!hasStarted && player) {
      player.playVideo();
      hasStarted = true;
    }
  });

  // 👑 Compteur
  fetch("https://api.countapi.xyz/hit/kiyomi-site-2024/visits")
    .then(res => res.json())
    .then(data => {
      document.getElementById("visitCount").textContent = data.value;
    })
    .catch(() => {
      document.getElementById("visitCount").textContent = "0";
    });

  // 🌀 Effet 3D
  document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 25;
    let y = (window.innerHeight / 2 - e.clientY) / 25;
    container.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });

  document.addEventListener("mouseleave", () => {
    container.style.transform = "rotateY(0deg) rotateX(0deg)";
  });

  // 🎚 Volume slider
  const slider = document.getElementById("volumeSlider");
  slider.addEventListener("input", function() {
    currentVolume = this.value;
    if (player) {
      player.setVolume(currentVolume);
    }
  });

});

// 🔗 Redirections
function goToLink(site) {
  let url = "";

  if (site === "tiktok") {
    url = "https://www.tiktok.com/@kiyomi9276";
  } 
  else if (site === "instagram") {
    url = "https://www.instagram.com/aeryx7547/";
  }
  else if (site === "roblox") {
    url = "https://www.roblox.com/users/9775764201/profile";
  }

  window.open(url, "_blank");
}