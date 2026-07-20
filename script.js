 const contenedorProductos = document.getElementById("lista-productos");

const imagenesPorId = {
    1: "tenis1.jpg.jpeg",
    2: "tenis2.jpg (2).jpeg",
    3: "tenis3.jpg.jpeg",
    4: "tenis4.jpg (2).jpeg",
    5: "tenis5.jpg (2).jpeg",
    6: "tenis6.jpg (2).jpeg",
    7: "tenis7.jpg (2).jpeg",
    8: "tenis8.jpg (3).jpeg",
    9: "tenis9.jpg (3).jpeg",
    10: "tenis10.jpg (3).jpeg",
    11: "tenis11.jpg.webp",
    12: "tenis12.jpg (2).jpeg",
    13: "tenis13.jpg (2).jpeg",
    14: "tenis14.jpg (2).jpeg",
    15: "tenis15.jpg.jpeg",
    16: "tenis16.jpg.jpeg",
    17: "tenis17.jpg (2).jpeg",
    18: "tenis18.jpg.jpeg",
    19: "tenis19.jpg.jpeg",
    20: "tenis20.jpg.jpeg",
    21: "tenis21.jpg.jpeg",
    22: "playera1.jpg.jpeg",
    23: "playera2.jpg.jpeg",
    24: "playera3.jpg.jpeg",
    25: "playera4.jpg.jpeg",
    26: "pantalon1.jpg.jpeg",
    27: "pantalon2.jpg.jpeg",
    28: "pantalon3.jpg.jpeg",
    29: "pantalon4.jpg.jpeg",
    30: "pantalon5.jpg.jpeg",
    31: "pantalon6.jpg.jpeg",
    32: "pantalon7.jpg.jpeg",
    33: "pantalon8.jpg.jpeg",
    34: "pantalon9.jpg.jpeg",
    35: "pantalon10.jpg.jpeg",
    36: "pantalon11.jpg.jpeg",
    37: "pantalon12.jpg.jpeg",
    38: "pantalon13.jpg.jpeg",
    39: "pantalon14.jpg.jpeg",
    40: "pantalon15.jpg.jpeg",
    41: "pantalon16.jpg.jpeg",
    42: "pantalon17.jpg.jpeg",
    43: "pantalon18.jpg.jpeg",
    44: "pantalon19.jpg.jpeg",
    45: "pantalon20.jpg.jpeg",
    46: "pantalon21.jpg.jpeg",
    47: "pantalon22.jpg.jpeg",
    48: "pantalon23.jpg.jpeg",
    49: "pantalon24.jpg.jpeg",
    50: "perfume1.jpg.jpeg",
    51: "perfume3.jpg.jpeg",
    52: "perfume2.jpg.webp",
    53: "perfume8.jpg.jpeg",
    54: "perfume4.jpg.jpeg",
    55: "perfume5.jpg.jpeg",
    56: "perfume6.jpg.jpeg",
    57: "perfume7.jpg.jpeg",
    58: "perfume8.jpg.jpeg",
    59: "bolsa1.jpg.jpeg",
    60: "bolsa2.jpg.jpeg",
    61: "bolsa3.jpg.jpeg",
    62: "bolsa4.jpg.jpeg",
    63: "bolsa5.jpg.jpeg",
    64: "bolsa6.jpg.jpeg",
    65: "bolsa7.jpg (2).jpeg",
    66: "bolsa8.jpg.jpeg",
    67: "cartera1.jpg.jpeg",
    68: "cartera2.jpg.jpeg",
    69: "cartera3.jpg.jpeg",
    70: "cartera4.jpg.jpeg",
    71: "cartera5.jpg.jpeg",
    72: "cartera6.jpg.jpeg",
    73: "cartera7.jpg.jpeg",
    74: "cartera8.jpg.jpeg",
    75: "cartera9.jpg.jpeg",
    76: "cartera10.jpg.jpeg",
    77: "cartera11.jpg.jpeg",
    78: "cartera12.jpg.jpeg",
    79: "cartera13.jpg.jpeg",
    80: "maquillaje1.jpg.jpeg",
    81: "maquillaje2.jpg.jpeg",
    82: "maquillaje3.jpg.jpeg",
    83: "maquillaje4.jpg.jpeg",
    84: "maquillaje5.jpg.jpeg",
    85: "maquillaje6.jpg.jpeg",
    86: "maquillaje7.jpg.jpeg",
    87: "maquillaje8.jpg.jpeg",
    88: "maquillaje9.jpg.jpeg",
    89: "maquillaje10.jpg.jpeg",
    90: "maquillaje11.jpg.jpeg",
    91: "maquillaje12.jpg.jpeg",
    92: "maquillje13.jpg.jpeg",
    93: "maquillaje14.jpg.jpeg",
    94: "maquillje15.jpg.jpeg",
    95: "maquillaje16.jpg.jpeg",
    96: "maquillaje17.jpg.jpeg",
    97: "maquillaje18.jpg.jpeg",
    98: "maquillaje19.jpg.jpeg",
    99: "maquillaje20.jpg.jpeg",
    100: "maquillaje21.jpg.jpeg",
    101: "maquillaje22.jpg.jpeg",
    102: "maquillaje23.jpg.jpeg",
    103: "maquillaje24.jpg.jpeg",
    104: "maquillaje25.jpg.jpeg",
    105: "maquillaje26.jpg.jpeg",
    106: "maquillaje27.jpg.jpeg",
    107: "maquillaje28.jpg.jpeg",
    108: "maquillaje29.jpg.jpeg",
    109: "maquillaje30.jpg.jpeg",
    110: "cinturones3.jpg.jpeg",
    111: "cinturones2.jpg.jpeg",
    112: "cinturones6.jpg.jpeg",
    113: "cinturones5.jpg.jpeg",
    114: "cinturones13.jpg.jpeg",
    115: "cinturones7.jpg.jpeg",
    116: "cinturones11.jpg.jpeg",
    117: "cinturones8.jpg.jpeg",
    118: "cinturones9.jpg.jpeg",
    119: "cinturones10.jpg.jpeg",
    120: "cinturones14.jpg.jpeg",
    121: "cinturones12.jpg.jpeg",
    122: "cinturones4.jpg.jpeg",
    123: "cinturones1.jpg.jpeg",
    124: "gorra1.jpg.jpeg",
    125: "gorra2.jpg.jpeg",
    126: "gorra3.jpg.jpeg",
    127: "gorra4.jpg.jpeg",
    128: "gorra5.jpg.jpeg",
    129: "gorra6.jpg.jpeg",
    130: "gorra7.jpg.jpeg",
    131: "gorra8.jpg.jpeg"
};

function resolverImagenPublicada(producto) {
    const original = (producto.imagen || "").split("/").pop();

    if (original && original !== "logo.jpeg") {
        return original;
    }

    return imagenesPorId[producto.id] || "logo.jpeg";
}


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

        const imagenPublicada = resolverImagenPublicada(producto);

        tarjeta.innerHTML = `
    <div class="imagen-producto">

        <img src="./${imagenPublicada}" alt="${producto.nombre}">

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
