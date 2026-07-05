const container = document.getElementById('petalos-container');
const petaloImg = 'petalo.png'; // Asegúrate de que este archivo esté en tu carpeta

function crearPetalo() {
    const petalo = document.createElement('div');
    petalo.className = 'petalo';
    
    const posInicial = Math.random() * 100;
    const duracion = Math.random() * 4 + 4;
    const tamano = Math.random() * 20 + 20;

    petalo.style.left = `${posInicial}%`;
    petalo.style.animationDuration = `${duracion}s`;
    petalo.style.width = `${tamano}px`;
    petalo.style.height = `${tamano}px`;
    petalo.style.backgroundImage = `url('${petaloImg}')`;

    container.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, duracion * 1000);
}

setInterval(crearPetalo, 800);

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
