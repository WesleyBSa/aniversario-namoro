// Ocultar a tela de carregamento após um breve período de tempo
window.addEventListener("load", function () {
    setTimeout(function () {
        const loadingScreen = document.querySelector(".loading-screen");
        loadingScreen.style.display = "none";

        // Adicionar a classe "loaded" à seção .hero após a conclusão do loading
        const heroSection = document.querySelector(".hero");
        heroSection.classList.add("loaded");
    }, 1000); // Tempo em milissegundos (1 segundo neste caso)
});