function buscarExperiencia() {
    // 1. Obtenemos el elemento donde el usuario elige el área
    const selectCategoria = document.getElementById("categoria");
    
    // Verificamos que el select exista en la página para evitar errores
    if (selectCategoria) {
        const categoriaSeleccionada = selectCategoria.value;

        // 2. Guardamos la selección en la memoria temporal del navegador (localStorage)
        localStorage.setItem("categoria", categoriaSeleccionada);

        // 3. Redirigimos a la página de programas (destinos.html)
        window.location.href = "destinos.html";
    } else {
        console.error("No se encontró el selector de categorías.");
    }
}

// =========================================================
// EFECTO NAVBAR AL HACER SCROLL
// =========================================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        // Si bajamos más de 50px, siempre añadimos la clase scrolled (fondo sólido)
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            // Si estamos en la parte superior de la página
            // Verificamos si estamos en el Index (buscando si existe el elemento hero principal o similar)
            const isIndexPage = !document.querySelector('.page-header');

            if (isIndexPage) {
                // En el Index arriba del todo, quitamos 'scrolled' para que sea transparente
                navbar.classList.remove('scrolled');
            } else {
                // En páginas secundarias, aseguramos que mantenga el fondo sólido
                navbar.classList.add('scrolled');
            }
        }
    }
});

// =========================================================
// ANIMACIÓN DE APARICIÓN SUAVE AL HACER SCROLL
// =========================================================
document.addEventListener('DOMContentLoaded', function () {
    const elementos = document.querySelectorAll(
        '.card, .gallery-item, .video-card, .paquete-card, .interactive-card, .intro-text, .intro-video, .footer-col, .footer-brand, .pillar, .program-card'
    );

    if (!('IntersectionObserver' in window) || elementos.length === 0) return;

    elementos.forEach(function (el) { el.classList.add('reveal'); });

    const observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('in-view');
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    elementos.forEach(function (el) { observador.observe(el); });
});