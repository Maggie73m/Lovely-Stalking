function typeWriter(element, text, delay) {
    var i = 0;
    var timer = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, delay);
}

window.addEventListener('DOMContentLoaded', function() {
    var texto = document.getElementById('texto');
    var textoCompleto = texto.innerHTML;
    texto.innerHTML = '';
    typeWriter(texto, textoCompleto, 100);
});
