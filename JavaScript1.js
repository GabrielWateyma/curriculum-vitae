document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
            } else {
                localStorage.setItem('dark-mode', 'disabled');
            }
        });
    }

});
function enviarMensajeWhatsApp() {
    var numero = "584243695760";
    var mensaje = "Hola, he visto tu portafolio y estoy interesado/a en contratarte para un proyecto.";
    var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, '_blank');
}