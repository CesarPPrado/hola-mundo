// --- Script para la interacción del botón de contacto ---

// 1. Obtener el elemento del botón usando su clase
//    querySelector devuelve el primer elemento que coincide con el selector.
const contactButton = document.querySelector('.boton-primario');

// 2. Comprobar si el botón existe para evitar errores
if (contactButton) {
    // 3. Añadir un "escuchador de eventos" (event listener) al botón
    //    Cuando el botón sea "cliqueado", se ejecutará la función anónima.
    contactButton.addEventListener('click', (event) => {
        // 4. Prevenir el comportamiento por defecto del enlace (que es navegar a #)
        event.preventDefault(); 
        
        // 5. Mostrar un mensaje de alerta al usuario
        alert('¡Gracias por tu interés, César! Pronto añadiré un formulario de contacto aquí.');
    });
}