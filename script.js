// script.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Efecto de aparición secuencial para las manchas
    const manchas = document.querySelectorAll('.mancha');
    manchas.forEach((mancha, index) => {
        setTimeout(() => {
            mancha.style.opacity = "0.8";
            mancha.style.transform = "scale(1)";
        }, 500 * (index + 1));
    });

    // 2. Control dinámico del efecto de máquina de escribir
    const titulo = document.getElementById('titulo');
    setTimeout(() => {
        titulo.style.borderRight = "none"; // Quita el cursor al terminar
    }, 3500); // El tiempo coincide con la animación CSS
});
