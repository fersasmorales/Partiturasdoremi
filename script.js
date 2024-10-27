function actualizarHora() {
    const horaActual = new Date();
    const horaFormateada = horaActual.toLocaleTimeString();
    document.getElementById('hora-actual').textContent = horaFormateada;
}
actualizarHora();
setInterval(actualizarHora, 1000);
const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleDateString();
    document.getElementById('fecha-actual').textContent = fechaFormateada;

    window.onload = function() {
        let mensaje;
         if(document.title=="Acerca de"){
            mensaje = "¿Tienes alguna duda? Contáctanos 3332292008";
            alert(mensaje);
         }else if(document.title=="Canción"){
            mensaje = "Esta es la canción que has seleccionado";
            alert(mensaje);
         }

        
    };