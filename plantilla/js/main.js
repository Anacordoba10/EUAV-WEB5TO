/**
 * main.js - Archivo principal de JavaScript
 * Aquí puedes agregar la interactividad de tu página.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para el botón de cambio de tema (Modo Claro / Oscuro)
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    themeToggleBtn.addEventListener('click', () => {
        // Obtenemos el elemento <html>
        const rootElement = document.documentElement;
        
        // Comprobamos si actualmente tiene el atributo data-theme="dark"
        if (rootElement.getAttribute('data-theme') === 'dark') {
            // Cambiamos a modo claro
            rootElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = 'Modo Oscuro';
        } else {
            // Cambiamos a modo oscuro
            rootElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = 'Modo Claro';
        }
    });

    // 2. Ejemplo de un micro-efecto: Animar números al cargar la página
    const contadorProyectos = document.getElementById('contador-proyectos');
    let cuenta = 0;
    const maxProyectos = 5; // Cambia este número
    
    const intervalo = setInterval(() => {
        if (cuenta < maxProyectos) {
            cuenta++;
            contadorProyectos.textContent = cuenta;
        } else {
            clearInterval(intervalo);
        }
    }, 200); // 200ms por cada incremento

    // Mensaje en consola para verificar que el JS está funcionando
    console.log('¡Hola! El archivo main.js se ha cargado correctamente. 🚀');
});
