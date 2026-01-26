// Arreglo de productos
const productos = [
    {
        nombre: "Laptop",
        precio: 800,
        descripcion: "Laptop para uso académico"
    },
    {
        nombre: "Mouse",
        precio: 15,
        descripcion: "Mouse inalámbrico"
    },
    {
        nombre: "Teclado",
        precio: 25,
        descripcion: "Teclado mecánico básico"
    }
];

// Referencia al UL
const lista = document.getElementById("lista-productos");

// Función para mostrar los productos
function mostrarProductos() {
    lista.innerHTML = ""; // Limpia la lista

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;
        lista.appendChild(li);
    });
}

// Mostrar productos al cargar la página
mostrarProductos();

// Botón para agregar un nuevo producto
document.getElementById("btnAgregar").addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Producto nuevo",
        precio: 10,
        descripcion: "Descripción del nuevo producto"
    };

    productos.push(nuevoProducto);
    mostrarProductos();
});