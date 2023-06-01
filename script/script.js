document.addEventListener('DOMContentLoaded', () => {
    // Obtener el elemento de video
    const video = document.getElementById('videoElement');

    // Verificar si el navegador es compatible con la API de media getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Solicitar acceso a la cámara web
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                // Asignar el flujo de la cámara al elemento de video
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.log('Ocurrió un error al acceder a la cámara:', error);
            });
    } else {
        console.log('El navegador no es compatible con la API de media getUserMedia');
    }
});
