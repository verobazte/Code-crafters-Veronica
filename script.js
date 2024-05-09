const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners () {

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100% >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="$(elemento.id)">X </a>
        </td>
    `;

    lista.appendChild(row);

}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
// Slider automatico
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');

let index = 0;
let slideWidth = slides[0].clientWidth; // Cambiado de const a let

function nextSlide() {
index++;
if (index === slides.length) {
    index = 0;
}
updateSlidePosition();
}

function prevSlide() {
    index--;
    if (index < 0) {
    index = slides.length - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
  const offset = -slideWidth * index;
document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

// Función para calcular el ancho del slider cuando la ventana cambia de tamaño o de orientación
function resizeSlider() {
  slideWidth = slides[0].clientWidth; // No necesitas declarar slideWidth nuevamente, solo reasignar su valor
updateSlidePosition();
}

window.addEventListener('resize', resizeSlider); // Actualiza el slider al cambiar el tamaño de la ventana
window.addEventListener('orientationchange', resizeSlider); // Actualiza el slider al cambiar la orientación del dispositivo
resizeSlider(); // Ajusta el slider al cargar la página

setInterval(nextSlide, 7000); // Cambia de slide cada 7 segundos

// Obtenemos el botón de login, el formulario de login y el icono de cierre
var btnLogin = document.getElementById("btn-login");
var loginForm = document.getElementById("loginForm");
var iconClose = document.querySelector('.icon-close');
var loginRegister = document.querySelector('.login-register');
var loginBox = document.querySelector('.login');
var registerBox = document.querySelector('.register');
var registerLink = document.querySelector('.register-link');
var loginLink = document.querySelector('.login-link');

// Función para mostrar el formulario de login y ocultar el de registro
function showLoginForm() {
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
    loginLink.innerHTML = 'Login';
}

// Función para mostrar el formulario de registro y ocultar el de login
function showRegisterForm() {
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
    registerLink.innerHTML = 'Register';
}

// Agregamos un evento de click al botón de login
btnLogin.addEventListener("click", function() {
    // Mostramos el formulario de login al hacer clic en el botón
    loginForm.classList.add("active-popup");
});

// Agregamos un evento de click al icono de cierre
iconClose.addEventListener('click', function() {
    // Ocultamos el formulario de login al hacer clic en el icono de cierre
    loginForm.classList.remove("active-popup");
});

// Agregamos un evento de click al enlace de registro
registerLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos que se ejecute el enlace
    
    if (registerBox.style.display !== 'block') {
        // Mostramos el formulario de registro y ocultamos el de login
        showRegisterForm();
    } else {
        // Mostramos el formulario de login y ocultamos el de registro
        showLoginForm();
    }
});

// Agregamos un evento de click al enlace de login
loginLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos que se ejecute el enlace
    
    if (loginBox.style.display !== 'block') {
        // Mostramos el formulario de login y ocultamos el de registro
        showLoginForm();
    } else {
        // Mostramos el formulario de registro y ocultamos el de login
        showRegisterForm();
    }
});
