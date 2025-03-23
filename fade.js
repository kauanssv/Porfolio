document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".aparecer");

    elementos.forEach((elemento) => {
        setTimeout(() => {
            elemento.classList.add("visivel");
        }, 300); // Pequeno delay para suavizar o efeito
    });
});
