

// Lista de productos disponibles
const productos = [
    { id: 1, nombre: "Fundas diseño para motorola", precio: 8500 },
    { id: 2, nombre: "Fundas puffer para motorola", precio: 9000 },
    { id: 3, nombre: "Fundas de diseño samsung", precio: 8500 },
    { id: 4, nombre: "Fundas puffer samsung", precio: 9000 }
];

let carrito = []; 

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = ''; // Limpiar el carrito
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoItems.appendChild(li);
        total += item.precio;
    });

    // Mostrar el total
    document.getElementById('total').textContent = `$${total}`;
}

// Función para añadir al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function realizarCompra() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. No puedes comprar.");
    } else {
        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        alert(`¡Compra realizada con éxito! Total: $${total}`);
        // Vaciar el carrito después de la compra
        vaciarCarrito();
    }
}



// Asignar eventos a los botones
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productoId = parseInt(this.closest('.producto').getAttribute('data-id'));
        agregarAlCarrito(productoId);
    });
});

document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);