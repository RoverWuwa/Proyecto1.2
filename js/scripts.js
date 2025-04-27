const titulos = [
  "Bienvenido",
  "Hola de nuevo",
  "¡Descubre algo nuevo!",
  "Gracias por visitarnos"
];

const textos = [
  "Explora nuestro sitio web",
  "Tenemos mucho que mostrarte",
  "Tu próxima aventura empieza aquí",
  "Encuentra lo que necesitas"
];

let index = 0;

const bienvenida = document.querySelector(".Bienvenida");

function cambiarTexto() {
  bienvenida.classList.remove("slide-show");
  bienvenida.classList.add("slide-out");

  setTimeout(() => {
    index = (index + 1) % titulos.length;
    bienvenida.innerHTML = `<h1>${titulos[index]}</h1><p>${textos[index]}</p>`;

    bienvenida.classList.remove("slide-out");
    bienvenida.classList.add("slide-in");

    setTimeout(() => {
      bienvenida.classList.remove("slide-in");
      bienvenida.classList.add("slide-show");
      }, 10);
    }, 500);
}

setInterval(cambiarTexto, 15000);


const vacantes = [
  {
    titulo: "Desarrollador Frontend en Google",
    descripcion: "Trabajo híbrido, salario competitivo. Experiencia con React y JavaScript.",
    imagen: "../imagenes/noti1.jpg",
    autor: "Publicado por Carla Ruiz"
  },
  {
    titulo: "Ingeniero de Datos en Amazon",
    descripcion: "Ubicación remota, herramientas Big Data, SQL, Python.",
    imagen: "../imagenes/noti2.jpg",
    autor: "Publicado por Andrés Méndez"
  },
  {
    titulo: "Diseñador UX/UI en Spotify",
    descripcion: "Diseño de interfaces modernas con Figma. Remoto.",
    imagen: "../imagenes/noti3.jpg",
    autor: "Publicado por Laura Herrera"
  }
];

const contenedor = document.getElementById('contenedor-cards');

vacantes.forEach(v => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${v.imagen}" alt="Imagen de vacante">
    <div class="contenido">
      <h3>${v.titulo}</h3>
      <p>${v.descripcion}</p>
      <small>${v.autor}</small>
    </div>
  `;
  contenedor.appendChild(card);
});

let pagina = 0;
const porPagina = 3;

function mostrarNoticias() {
  contenedor.innerHTML = "";
  const inicio = pagina * porPagina;
  const fin = inicio + porPagina;
  const noticiasActuales = vacantes.slice(inicio, fin);

  noticiasActuales.forEach(v => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${v.imagen}" alt="Imagen de vacante">
      <div class="contenido">
        <h3>${v.titulo}</h3>
        <p>${v.descripcion}</p>
        <small>${v.autor}</small>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

document.getElementById('anterior').addEventListener('click', () => {
  if (pagina > 0) {
    pagina--;
    mostrarNoticias();
  }
});

document.getElementById('siguiente').addEventListener('click', () => {
  if ((pagina + 1) * porPagina < vacantes.length) {
    pagina++;
    mostrarNoticias();
  }
  mostrarNoticias(); // Muestra la primera vez
});