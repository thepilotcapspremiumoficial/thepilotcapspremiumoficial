const contenedorProductos = document.getElementById("lista-productos");


function mostrarProductos(lista) {

    contenedorProductos.innerHTML = "";

    lista.forEach(producto => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("producto");

        const bloquePrecio = producto.categoria === "Gorras"
            ? `
        <p class="precio-gorras">
            Precios varian de diseno, marca, modelo.
        </p>

        <p class="contacto-gorras">
            Duda o pregunta del precio:
            <a href="https://wa.me/+529623835723" target="_blank">+529623835723</a>
        </p>
        `
            : `
        <h2 class="precio-producto">$${producto.precio} MXN</h2>

        <p class="precio-mayoreo">
            Mayoreo: $${producto.mayoreo} MXN
        </p>
        `;

        tarjeta.innerHTML = `
    <div class="imagen-producto">

        <img src="${producto.imagen}" alt="${producto.nombre}">

    </div>

    <div class="info-producto">

        <h3 class="nombre-producto">${producto.nombre}</h3>

        <p class="marca-producto">${producto.marca}</p>

        <p class="categoria-producto">${producto.categoria}</p>

        ${bloquePrecio}

        <button class="btn-carrito" onclick="agregarCarrito(${producto.id})">

            Agregar al carrito

        </button>

    </div>
`;

        contenedorProductos.appendChild(tarjeta);

    });

}

function irCatalogo(){
    const seccion = document.getElementById('productos');
    if(seccion){
        seccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// MOSTRAR BOTON AL BAJAR
window.onscroll = function(){

    let boton = document.getElementById("btnArriba");

    if(document.documentElement.scrollTop > 400){

        boton.style.display = "block";

    }else{

        boton.style.display = "none";

    }

};

// VOLVER ARRIBA SUAVEMENTE
function volverArriba(){
    window.scrollTo({

        top:0,
        behavior:"smooth"

    });
}


function filtrarProductos(categoria) {

    if(categoria === "Todos") {

        mostrarProductos(productos);

    } else {

        const filtrados = productos.filter(producto => producto.categoria === categoria);

        mostrarProductos(filtrados);

    }

}


let carrito = [];


function agregarCarrito(id){

    const producto = productos.find(p => p.id === id);

    carrito.push(producto);

    actualizarCarrito();

}


function actualizarCarrito(){

    const lista = document.getElementById("productos-carrito");

    const contador = document.getElementById("contador-carrito");

    const total = document.getElementById("total");


    lista.innerHTML = "";

    let suma = 0;


    carrito.forEach(producto => {

        lista.innerHTML += `
        <p>
        ${producto.marca}
        - $${producto.precio}
        </p>
        `;


        suma += producto.precio;

    });


    contador.innerHTML = carrito.length;

    total.innerHTML = suma;

}


function abrirCarrito(){

    document.getElementById("carrito")
    .classList.toggle("activo");

}

function abrirMenu(){

    document
    .getElementById("menu")
    .classList.toggle("mostrar");

}

function abrirPago(){
    document.getElementById("modalPago").classList.add("activo");
}

function cerrarPago(){
    document.getElementById("modalPago").classList.remove("activo");
}

function vaciarCarrito(){

    carrito = [];

    actualizarCarrito();

}


function comprarWhatsApp(){

    if(carrito.length === 0){

        alert("Tu carrito está vacío");

        return;

    }


    let mensaje = "Hola, quiero realizar este pedido:%0A%0A";


    let total = 0;


    carrito.forEach(producto => {

        mensaje += 
        `• ${producto.marca} - $${producto.precio} MXN%0A`;

        total += producto.precio;

    });


    mensaje += `%0ATotal: $${total} MXN`;


    let numero = "529623835723";


    window.open(
        `https://wa.me/${numero}?text=${mensaje}`,
        "_blank"
    );

}

function buscarProductos(){

    let texto = document
    .getElementById("buscarProducto")
    .value
    .toLowerCase();


    let resultados = productos.filter(producto =>

        producto.marca.toLowerCase().includes(texto) ||
        producto.categoria.toLowerCase().includes(texto)

    );


    mostrarProductos(resultados);

}

// Mostrar todos al cargar
mostrarProductos(productos);
