// Obtiene todos los enlaces de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previene el comportamiento por defecto del ancla
        e.preventDefault();

        // Obtiene el elemento al que apunta el enlace
        const targetElement = document.querySelector(this.getAttribute('href'));

        if (targetElement) {
            // Desplaza la página suavemente hasta el elemento
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});