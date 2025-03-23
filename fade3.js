document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".fade-effect");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });
});
