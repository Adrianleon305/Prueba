// Obtenemos el contenedor que envuelve al video y el gif animado
const container = document.querySelector('.center-image');
const video = container.querySelector('.center-video');
const gif = container.querySelector('img');

// Evento para detectar si el video se cargó correctamente
video.addEventListener('error', () => {
  // Ocultamos el video y mostramos el gif animado en su lugar
  video.style.display = 'none';
  gif.style.display = 'block';
});

// Evento para detectar si el video se cargó correctamente
video.addEventListener('loadeddata', () => {
  // Mostramos el video y ocultamos el gif animado
  video.style.display = 'block';
  gif.style.display = 'none';
});






document.addEventListener("DOMContentLoaded", function() {
    const leerDescripcionBtns = document.querySelectorAll(".leer-descripcion");

    leerDescripcionBtns.forEach(function(btn) {
        const ptextDescription = btn.nextElementSibling;
        const container = btn.parentElement;
        const targetWord = container.querySelector(".target-word");

        if (targetWord) {
            targetWord.innerHTML += "...";
        }

        ptextDescription.style.display = "none";

        btn.addEventListener("click", function() {
            if (ptextDescription.style.display === "none") {
                ptextDescription.style.display = "block";
                if (targetWord) {
                    targetWord.innerHTML = targetWord.textContent.replace("...", ""); // Remove the "..."
                }
                this.textContent = "Cerrar texto";
                container.style.flexDirection = "column";
            } else {
                ptextDescription.style.display = "none";
                if (targetWord) {
                    targetWord.innerHTML += "..."; // Add the "..."
                }
                this.textContent = "Leer Más...";
                container.style.flexDirection = "row";
            }
        });
    });
});


window.addEventListener('scroll', function () {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('reading-position-indicator').style.width = scrolled + '%';
  });
  
    // Arreglo con las rutas de las imágenes que quieres alternar
    const imageSources = ['cara/car.webp', 'L1.png'];
    let currentImageIndex = 0;
  
    // Función para cambiar la imagen
    function changeImage() {
      const profileImage = document.getElementById('profile-image');
      profileImage.style.opacity = 0; // Establece la opacidad a 0 para que se desvanezca
      setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % imageSources.length;
        profileImage.src = imageSources[currentImageIndex];
        profileImage.style.opacity = 1; // Establece la opacidad a 1 para que aparezca gradualmente
      }, 2000); // Espera 1 segundo (1000 ms) antes de cambiar la imagen
    }
  
    // Llamar a la función para cambiar la imagen cada 10 segundos (10000 ms)
    setInterval(changeImage, 10000);

        // Lista de fuentes que quieres aplicar al título
        const fonts = [
            "Arial, sans-serif",
            "Verdana, Geneva, Tahoma, sans-serif",
            "Georgia, serif",
            "Helvetica, Arial, sans-serif",
            "Times New Roman, serif"
          ];
      
          // Función para cambiar la fuente del título
          function changeFont() {
            const title = document.getElementById("title");
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            title.style.fontFamily = randomFont;
          }
      
          // Cambiar la fuente cada 15 segundos
          setInterval(changeFont, 1000);
          
          // Variable para almacenar el título original
    var originalTitle = document.title;

    // Función para cambiar el título cuando el cursor sale de la página
    function changeTitle() {
      document.title = "😖No te vayas 😭";
    }

    // Función para restaurar el título original cuando el cursor entra a la página
    function restoreTitle() {
      document.title = originalTitle;
    }

    // Evento que se activa cuando el cursor sale de la página
    document.body.addEventListener("mouseout", changeTitle);

    // Evento que se activa cuando el cursor entra a la página
    document.body.addEventListener("mouseover", restoreTitle);


 // Función para prevenir el clic derecho
 function preventRightClick(event) {
  event.preventDefault();
}

// Capturar el evento del clic derecho en la página
document.addEventListener("contextmenu", preventRightClick);

















// Función para ajustar el tamaño de fuente según el zoom
function adjustFontSize() {
  const baseFontSize = 18; // Tamaño de fuente base en px
  const devicePixelRatio = window.devicePixelRatio || 1;
  const zoomFactor = devicePixelRatio / -2; // Puedes ajustar este valor según tus necesidades

  const fontSize = baseFontSize * zoomFactor;
  document.getElementById("zoom-text").style.fontSize = `${fontSize}px`;
}

// Llamar a la función cuando se carga la página y cada vez que se cambia el tamaño de la ventana
window.addEventListener("DOMContentLoaded", adjustFontSize);
window.addEventListener("resize", adjustFontSize);


