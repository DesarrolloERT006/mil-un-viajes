// =========================================================
// CARRUSEL / SLIDER DE DESTINOS AUTOMÁTICO
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carousel-container');
    
    if (container) {
        let scrollInterval;
        
        // Función para mover el carrusel automáticamente
        function startAutoScroll() {
            scrollInterval = setInterval(() => {
                // Si llega al final, regresa al inicio; si no, avanza 350px
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: 350, behavior: 'smooth' });
                }
            }, 4000); // Cambia de tarjeta cada 4 segundos
        }

        // Iniciar el movimiento automático
        startAutoScroll();

        // Pausar el movimiento automático si el usuario pasa el mouse por encima (para que pueda leer con calma)
        container.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });

        // Reanudar cuando el mouse sale del carrusel
        container.addEventListener('mouseleave', () => {
            startAutoScroll();
        });
    }
});