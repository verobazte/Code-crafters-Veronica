// Selecciona los contenedores de vista previa y las cajas de vista previa
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
// Añade un evento clic a cada producto
document.querySelectorAll('.products-container .product').forEach((product, index) =>{
    product.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        // Añade la clase 'active' a la caja de vista previa correspondiente al índice del producto
        previewBox[index].classList.add('active');
         // Si el producto tiene un precio de oferta, actualiza el precio en la vista previa
        let ofertaPrice = product.querySelector('.oferta-price');
        if (ofertaPrice) {
            // Actualiza el precio en la vista previa y le aplica el estilizado
        let previewPrice = previewBox[index].querySelector('.price');
        previewPrice.innerText = ofertaPrice.innerText;
        previewPrice.style.color = '#f00';
        }
    };
});
// Añade un evento clic para cerrar cada caja de vista previa
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});

// Agregar carrito

const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-2');
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
        // Cerrar el preview del producto
        preveiwContainer.style.display = 'none';
        // Sacar la clase 'active' de todos los previews
        previewBox.forEach(preview => {
            preview.classList.remove('active');
        });
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.price').textContent,
        id: elemento.querySelector('a').getAttribute('data-target')
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
        elementoId = elemento.querySelector('a').getAttribute('data-target');
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
