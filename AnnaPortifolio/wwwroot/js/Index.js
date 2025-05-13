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

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
};

window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
};
