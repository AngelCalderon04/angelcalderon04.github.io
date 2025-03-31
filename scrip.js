document.addEventListener("DOMContentLoaded", function () {
    const formRegistro = document.getElementById("formRegistro");
    const registro = document.getElementById("registro");
    const reproductor = document.getElementById("reproductor");

    formRegistro.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe
        registro.style.display = "none"; // Oculta el formulario
        reproductor.style.display = "block"; 
    });
});

const canciones = [
    { nombre: "Count On ME", ruta: "audio/BrunoMars-CountonMecompr.mp3", imagen: "imagenes/count on me.jpg" },
    { nombre: "Rather Be", ruta: "audio/CleanBandit-RatherBeft.JessGlynnecompri.mp3", imagen: "imagenes/rather be.jpg" },
    { nombre: "can't stop ", ruta: "audio/Justin Timberlake - CANT STOP THE FEELING!compri.mp3", imagen: "imagenes/can't stop.jpg" },
    { nombre: "Love theory", ruta: "audio/Kirk Franklin - Love Theorycompri (1).mp3", imagen: "imagenes/love theory.jpg" },
    { nombre: "symphony", ruta: "audio/CleanBandit-Symphonyfeat.ZaraLarsson Covercompr.mp3", imagen: "imagenes/symphony.jpg" },
]


let indiceActual = 0; // Canción actual
const audio = document.getElementById("audio");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnAnterior = document.getElementById("btnAnterior");

// Agrega la imagen del reproductor
const imagenCancion = document.createElement("img");
imagenCancion.id = "imagenCancion";
document.getElementById("reproductor").insertBefore(imagenCancion, audio);

// Función para cargar la canción actual
function cargarCancion(indice) {
    audio.src = canciones[indice].ruta;
    imagenCancion.src = canciones[indice].imagen;
    btnPlayPause.innerHTML = "▶️ Play"; // Reinicia el botón al cambiar
}

// Función para reproducir/pausar
btnPlayPause.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        btnPlayPause.innerHTML = "⏸️ Pause";
    } else {
        audio.pause();
        btnPlayPause.innerHTML = "▶️ Play";
    }
});

// Función para la siguiente canción
btnSiguiente.addEventListener("click", function () {
    indiceActual = (indiceActual + 1) % canciones.length;
    cargarCancion(indiceActual);
    audio.play();
    btnPlayPause.innerHTML = "⏸️ Pause";
});

// Función para la canción anterior
btnAnterior.addEventListener("click", function () {
    indiceActual = (indiceActual - 1 + canciones.length) % canciones.length;
    cargarCancion(indiceActual);
    audio.play();
    btnPlayPause.innerHTML = "⏸️ Pause";
});

// Cargar la primera canción al inicio
cargarCancion(indiceActual);

