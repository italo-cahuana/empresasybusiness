// Esperamos a que todo el HTML se cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    
    /* ----------------------------------------------------
       1. EFECTO DE SCROLL EN LA BARRA DE NAVEGACIÓN
       ---------------------------------------------------- */
    const navbar = document.querySelector('.custom-navbar');
    
    // Escuchamos el evento de desplazamiento (scroll) en la ventana
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Si bajamos más de 50px, agregamos una sombra más fuerte
            navbar.classList.add('shadow-lg');
        } else {
            // Si estamos arriba, la quitamos
            navbar.classList.remove('shadow-lg');
        }
    });

    /* ----------------------------------------------------
       2. MENSAJE AL ENVIAR FORMULARIO DE CONTACTO
       ---------------------------------------------------- */
    // Buscamos el formulario por su nombre
    const contactForm = document.querySelector('form[name="contacto-negocio"]');
    
    // Si el formulario existe en la página actual (solo está en contacto.html)
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            // Netlify se encargará del envío real, aquí solo mostramos una alerta al usuario
            alert("¡Gracias por contactarnos! Hemos recibido tu mensaje y nos comunicaremos pronto.");
        });
    }
});