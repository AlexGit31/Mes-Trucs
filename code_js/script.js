let count = 0;

function toggleLanguage() {
  if (count % 2 === 0) {
    document.getElementById("language").innerHTML = "🇫🇷Français";
    count += 1;

    //on modifie des paragraphes et des entêtes:
    document.getElementById("home0").innerHTML = "Home";
    document.getElementById("home1").innerHTML = "Home";
  } else {
    document.getElementById("language").innerHTML = "🇬🇧Anglais";
    count += 1;
    document.getElementById("home0").innerHTML = "Acceuil";
    document.getElementById("home1").innerHTML = "Acceuil";
  }
}
