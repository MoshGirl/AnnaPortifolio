function alternarIdioma() {
    const textoPT = document.getElementById("texto-pt");
    const textoEN = document.getElementById("texto-en");

    if (textoPT.style.display === "none") {
        textoPT.style.display = "block";
        textoEN.style.display = "none";
    } else {
        textoPT.style.display = "none";
        textoEN.style.display = "block";
    }
}