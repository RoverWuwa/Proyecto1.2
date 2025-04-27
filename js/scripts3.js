// Obtener elementos del DOM
const boton = document.getElementById("miBoton");
const modal = document.getElementById("miModal");
const cerrar = document.querySelector(".cerrar");

// Abrir modal al hacer clic en el botón
boton.addEventListener("click", function(e) {
  e.preventDefault(); // Evita que el enlace recargue la página
  document.body.style.overflow = "hidden"; // Desactiva el scroll del body
  modal.style.display = "flex";
});

// Cerrar modal al hacer clic en la "X"
cerrar.addEventListener("click", function() {
    document.body.style.overflow = "auto"; // Reactiva el scroll del body
  modal.style.display = "none";
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    document.body.style.overflow = "auto"; // Reactiva el scroll del body
    modal.style.display = "none";
  }
});
