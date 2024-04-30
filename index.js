let destinos = ["París", "Londres", "Nueva York", "Tokio", "Roma"];
let promociones = {
    "París": "Descuento del 20% en hoteles seleccionados",
    "Londres": "2x1 en entradas a museos",
    "Nueva York": "Noche gratis en estancias de más de 5 días",
    "Tokio": "Tour gratuito por la ciudad",
    "Roma": "Descuento del 15% en tours gastronómicos"
};
destinos.forEach(destino => {
    console.log(destino);
    console.log(promociones[destino]);
});
document.getElementById("busqueda-hotel").addEventListener("submit", function (event) {
    event.preventDefault();
    let dondeIr = document.getElementById("donde-ir").value;
    let entrada = document.getElementById("entrada").value;
    let salida = document.getElementById("salida").value;
    let habitaciones = document.getElementById("habitaciones").value;

    console.log("Donde ir:", dondeIr);
    console.log("Entrada:", entrada);
    console.log("Salida:", salida);
    console.log("Habitaciones:", habitaciones);
});

const url = "https://images.pexehttps://pixabay.com/es/images/search/paisaje/ls.com/photos/3243020/pexels-photo-3243020.jpeg"
const app = document.getElementById("app")
for (let i = 1; i < 20; i++) {
    fetch(url + i)
        .then(response => response.json())
        .then(data => console.log(data));
}

function mostrarFotos(data) {
        const div = document.createElement("div");
        div.innerHTML = ` <h2>${datos.name}</h2>
        <img src=  ${data}`;
       
};

  const botonAlerta = document.getElementById('botonAlerta');
botonAlerta.addEventListener('click', ()=>{
Swal.fire({
    title: '¿Querés ver los hoteles disponibles?¡',
    text: '¡Vamos a la aventura!',
    confirmButtonText: 'Ver más'
})})
