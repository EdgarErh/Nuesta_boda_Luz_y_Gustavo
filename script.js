const container = document.getElementById('petalos-container');
const imagenes = ['Petalo_1.png', 'Petalo_2.png', 'Petalo_3.png', 'Petalo_4.png', 'Petalo_5.png', 'Petalo_6.png'];

function crearPetalo() {
    const petalo = document.createElement('div');
    petalo.className = 'petalo';
    
    // Selección aleatoria
    const img = imagenes[Math.floor(Math.random() * imagenes.length)];
    const pos = Math.random() * 100;
    const duracion = Math.random() * 8 + 7; // Entre 7 y 15 seg
    const tamano = Math.random() * 20 + 20;

    petalo.style.left = `${pos}%`;
    petalo.style.animationDuration = `${duracion}s`;
    petalo.style.width = `${tamano}px`;
    petalo.style.height = `${tamano}px`;
    petalo.style.backgroundImage = `url('${img}')`;
    petalo.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(petalo);
    setTimeout(() => { petalo.remove(); }, duracion * 1000);
}

setInterval(crearPetalo, 1200); // Frecuencia de pétalos
