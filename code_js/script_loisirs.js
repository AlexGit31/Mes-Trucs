let count = 0;

function toggleLanguage() {
  if (count % 2 === 0) {
    //ANGLAIS
    document.getElementById("language").innerHTML = "🇫🇷Français";
    count += 1;

    //on modifie des paragraphes et des entêtes:
    document.getElementById("home0").innerHTML = "Home &zwnj; &zwnj;";
    document.getElementById("cv0").innerHTML = "CV";
    document.getElementById("projets0").innerHTML = "Projects";
    document.getElementById("biblio0").innerHTML = "Bibliography&zwnj;";
    document.getElementById("loisirs0").innerHTML = "Hobies ";
    document.getElementById("contact0").innerHTML = "Contact";
  } else {
    //FRANCAIS
    document.getElementById("language").innerHTML = "🇬🇧Anglais";
    count += 1;

    //on modifie des paragraphes et des entêtes:
    document.getElementById("home0").innerHTML = "Acceuil";
    document.getElementById("cv0").innerHTML = "CV";
    document.getElementById("projets0").innerHTML = "Projets &zwnj;";
    document.getElementById("biblio0").innerHTML = "Bibliographie";
    document.getElementById("loisirs0").innerHTML = "Loisirs";
    document.getElementById("contact0").innerHTML = "Contact";
  }
}
