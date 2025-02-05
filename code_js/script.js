let count = 0;

function toggleLanguage() {
  if (count % 2 === 0) {
    document.getElementById("language").innerHTML = "English";
    count += 1;
  } else {
    document.getElementById("language").innerHTML = "Français";
    count += 1;
  }
}
