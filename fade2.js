document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2 // O efeito ativa quando 20% do elemento aparece na tela
    });

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
});
