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

// =============================
// Firmware Download Logic
// =============================

const firmwareSelect = document.getElementById("firmwareSelect");
const downloadBtn = document.getElementById("downloadBtn");

// Direct GitHub Release links (latest version auto)
const firmwareLinks = {
  no: "https://github.com/gamerclash244/JUNO/releases/latest/download/JUNO.1%20Firmware%20NO%20%20Updater%20Setup%201.0.0.exe",
  nc: "https://github.com/gamerclash244/JUNO/releases/latest/download/JUNO.1%20Firmware%20NC%20Updater%20Setup%201.0.0.exe"
};

// Update button link based on selection
function updateDownload() {
  const selectedVersion = firmwareSelect.value;
  downloadBtn.href = firmwareLinks[selectedVersion];
}

// Set default link on page load
updateDownload();

// Update when dropdown changes
firmwareSelect.addEventListener("change", updateDownload);