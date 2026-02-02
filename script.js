// Sidebar menu
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Firmware download logic
const firmwareSelect = document.getElementById("firmwareSelect");
const downloadBtn = document.getElementById("downloadBtn");

// 🔥 CHANGE THIS TO YOUR REAL GITHUB LINK
const firmwareLinks = {
  no: "https://github.com/yourusername/yourrepo/releases/latest/download/JUNO_NO.exe",
  nc: "https://github.com/yourusername/yourrepo/releases/latest/download/JUNO_NC.exe"
};

function updateDownload() {
  const version = firmwareSelect.value;
  downloadBtn.href = firmwareLinks[version];
}

updateDownload();
firmwareSelect.addEventListener("change", updateDownload);