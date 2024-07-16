// function Producto(id, nombre, stock, precioCompra) {
//     this.id = id;
//     this.nombre = nombre;
//     this.stock = stock;
//     this.precioCompra = precioCompra;
//     this.precioVenta = Math.round(precioCompra * 1.3); // Calculamos el precio de venta
//     this.carrovacio = stock
// }

// const producto_1 = new Producto('1', 'Fernet', 20, 385);
// const producto_2 = new Producto('2', 'Whisky', 20, 1265);
// const producto_3 = new Producto('3', 'Coca', 20, 134);

// console.log(producto_1);
// console.log(producto_2);
// console.log(producto_3);


// let productos = [producto_1, producto_2, producto_3];

// console.log(productos);

// const producto_4 = new Producto("4", "Cerveza", 20, 104);
// productos.push(producto_4);

// let precioCompra = productos.map(producto => producto.precioCompra);
// let precioVenta = productos.map(producto => producto.precioVenta);

// const producto_5 = new Producto("5", "Jagermaister", 20, 684);
// productos.push(producto_5);

// console.log(productos.length);

// // let carrovacio = productos.map(producto => producto.stock)

// // console.log(carrovacio);

// function cancelarCompra() {productos.forEach(producto => {producto.stock = producto.carrovacio;})
// alert("Compra cancelada.");
// }

// function agregarProducto(id) {
//     let producto = productos.find(producto => producto.id === id);
//     if (producto) {
//         if (producto.stock > 0) {
//             alert(`Agregaste un ${producto.nombre} a tu carrito, su costo es de $${producto.precioVenta}`);
//             producto.stock--; //resto
//         } else {
//             alert(`Lo siento, no tenemos más ${producto.nombre} en el stock`);
//         }
//     } else {
//         alert("Producto no válido");
//     }
// }

// let nombre = prompt("Hola, ¿cómo estás? Bienvenido a Blinders. ¿Cuál es tu nombre?");
// if (nombre === null || nombre === "") {
//     nombre = "Usuario";
// }

// let nacimiento = prompt(`${nombre}, ¿en qué año naciste?`);

// while (nacimiento === null || isNaN(nacimiento) || nacimiento === "" || nacimiento > 2024 || nacimiento < 1900) {
//     alert("Ingresa un año de nacimiento correcto");
//     nacimiento = prompt("Vuelve a ingresar tu año de nacimiento, por favor");
// }
// let edad = 2024 - nacimiento;

// if (edad < 18) {
//     alert("No tienes edad suficiente para ingresar a la página. ¡Saludos!"); //se cierra la app porque no tenes edad suficiente
// } else {
//     alert(`Ahora si, Bienvenido a Blinders ${nombre}! Tu edad es ${edad} años.`);

//     let orden = "";
//     while (orden !== "0" && orden !== "#") {
//         orden = prompt(`Hola ${nombre}, ¿qué producto queres comprar?
//         \n 1. Fernet | Precio: $${producto_1.precioVenta}
//         \n 2. Whisky | Precio: $${producto_2.precioVenta}
//         \n 3. Coca-Cola | Precio: $${producto_3.precioVenta}
//         \n 4. Cerveza | Precio: $${producto_4.precioVenta}
//         \n 5. Jagermaister | Precio: $${producto_5.precioVenta}
//         \n 0. Realizar la compra
//         \n #. Cancelar la compra`); //no logro hacer que no descuente los productos del stock. 


//         switch (orden) {
//             case "1":
//                 agregarProducto('1');
//                 break;
//             case "2":
//                 agregarProducto('2');
//                 break;
//             case "3":
//                 agregarProducto('3');
//                 break;
//             case "4":
//                 agregarProducto('4');
//                 break;
//             case "5":
//                 agregarProducto('5');
//                 break;
//             case "0":
//                 let resumen = productos
//                 .filter(producto => producto.stock < 20)
//                 .map(producto => `${20 - producto.stock} botella/as de ${producto.nombre}`)
//                 .join('\n');
//                 alert(`${nombre}, el total de tu pedido es de $${productos.reduce((totalCompra, producto) => totalCompra + (producto.precioVenta * (20 - producto.stock)), 0)}. 
//                 \nResumen de tu compra:
//                 \n${resumen}
//                 \nMuchas gracias por elegir Blinders! Salud!`);
//                 break;
//             case "#":
//                 /*Cuando cancele la venta no descuente del stock
//                 variable del stock. producto.stock
//                 producto.stock que sea igual a inicio*/
//                 cancelarCompra()
//                 break;
//             default:
//                 alert("Opción no válida");
//                 break;
//         }
//     }
// }


// console.log("Stock restante de productos:"); //asi aparece en la consola la frase del stock 
// console.log(productos.map(producto => `${producto.nombre}: ${producto.stock}`));

// Seleccionamos el formulario

/*------------------------------------------------------------------------------------------------------------
const form = document.getElementById("validationForm");
const btnDelete = document.getElementById("btnDelete");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const fechadenacimiento = document.getElementById("fdn").value;

    // Validamos la edad
    if (isAgeValid(fechadenacimiento)) {
        closeModal()
        alert("Bienvenido a la página", "success");
    } else {
        alert("Lo siento, debes tener al menos 18 años para ingresar a este sitio", "error");
    }
});

// Función para validar la edad
function isAgeValid(fechadenacimiento) {
    const today = new Date();
    const birthDate = new Date(fechadenacimiento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Ajustamos la edad si la fecha de nacimiento aún no ha ocurrido este año
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age >= 18;
}

function closeModal() {
    const modal = document.getElementById("validationModal");
    modal.style.display = "none";
}

// const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", () => {
    form.reset();
});

-------------------------------------------------------------------------------------------------------------desde aca empieza el proyecto*/
const form = document.getElementById("validationForm");
const denegadoModal = document.getElementById("miModalDenegado");
//boton cerrar modales
const cerrarButtons = document.querySelectorAll(".btncerrar");

//boton formulario
const btnDelete = document.getElementById("btnDelete");
//botones del carrito
const btnMostrarCarrito = document.getElementById('btnMostrarCarrito');
const btnOcultarCarrito = document.getElementById('btnOcultarCarrito');
const carrito = document.getElementById('carrito');


// Funciones para mostrar las secciones de login y registro
function mostrarLogin() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('loginTab').classList.add('activo');
    document.getElementById('registerTab').classList.remove('activo');
    document.body.classList.add('noFunciona'); //no borres!
    document.body.classList.add('body-no-scroll');

        // Desplazar la página hacia arriba
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
}

function mostrarRegistro() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'block';
    document.getElementById('loginTab').classList.remove('activo');
    document.getElementById('registerTab').classList.add('activo');
    document.body.classList.add('noFunciona') //no borres!
    document.body.classList.add('body-no-scroll');
}

document.addEventListener('DOMContentLoaded', function() { //con esto identifico si hay usuarios guardados y arranca en registro si no hay
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (Object.keys(usuarios).length === 0) {
        mostrarRegistro();
    } else {
        mostrarLogin();
    }
});

function esMayorDeEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;  
    }
    return edad >= 18 && edad <80; //limito a 80 años para que no puedan poner cualquier año de naciomiento
}

function mostrarModal(mensaje) {
    document.getElementById('errorText').innerText = mensaje;
    document.getElementById('miModalDenegado').style.display = 'block';
    document.body.classList.add('noFunciona') //no borrar esta declaracion en ninguna parte del codigo, todas son necesarias
}

function cerrarModal() {
    document.getElementById('miModalDenegado').style.display = 'none';
}

function registrarUsuario(event) {
    event.preventDefault();

    const username = document.getElementById('register-usuario').value;
    const password = document.getElementById('register-password').value;
    const birthdate = document.getElementById('register-fecha-nacimiento').value;

    if (!username || !password) {
        mostrarModal('El nombre de usuario y la contraseña no pueden estar vacíos.');
        return;
    }

    if (!esMayorDeEdad(birthdate)) {
        mostrarModal('Hay un error en la fecha de nacimiento.');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (usuarios[username]) {
        mostrarModal('El nombre de usuario ya está registrado.');
        return;
    }

    usuarios[username] = password;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    mostrarModal('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
    mostrarLogin();
    document.getElementById('register-usuario').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-fecha-nacimiento').value = '';
}
// Asociar la función registrarUsuario al evento click del botón de registro
document.getElementById('registerSection').querySelector('button[type="submit"]').onclick = registrarUsuario;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('input-usuario').value;
    const password = document.getElementById('input-password').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {}; 

    if (usuarios[username] && usuarios[username] === password) {

        mostrarModal('Inicio de sesión exitoso.');
        document.body.classList.remove('noFunciona'); 
        document.body.classList.remove('body-no-scroll')//borro la clase del body que impide que haga scroll

        document.getElementById('modalLogin').style.display = 'none'; // Cerrar el modal
        document.getElementById('input-usuario').value = '';
        document.getElementById('input-password').value = '';
    } else if (!usuarios[username]) {
        mostrarModal('Nombre de usuario no registrado.');
    } else {
        mostrarModal('Nombre de usuario o contraseña incorrectos.');
    }
});

document.getElementById('btnCerrar').addEventListener('click', cerrarModal);


/*---------------------------------------------------------------------------------------imagenes inicio*/

const contenedorImagenes = document.getElementById('contenedorImagenes');
const publicidad = document.getElementById('publicidad');
const heroTituloBoton = document.querySelector('.hero-titulo-boton');

// Definir las imágenes para cada botón
const imagenes = {
    botonFernet: "./img/botellaFernet1.png",
    botonJagger: "./img/botellaJagger1.png",
    botonTanque: "./img/botellaTanqueray1.png",
    botonJhonnie: "./img/botellaBluelabel1.png"
};

// Función para ocultar la publicidad y mostrar las imágenes pequeñas
function restaurarImagenesPequenas() {
    publicidad.classList.remove('float-in');
    publicidad.classList.add('float-out');

    const textoContenedor = document.querySelector('.texto-contenedor');

    if (textoContenedor) {
        textoContenedor.classList.add('fade-out');
        setTimeout(() => {
            textoContenedor.remove();
            heroTituloBoton.classList.remove('fade-out');
            heroTituloBoton.classList.add('fade-in');
            heroTituloBoton.style.display = 'flex';
        }, 500); // Tiempo de la animación de salida del cuadro
    }

    setTimeout(() => {
        publicidad.style.display = 'none';
        publicidad.classList.remove('float-out');
        contenedorImagenes.querySelectorAll('.img-container').forEach(imgContainer => {
            imgContainer.style.display = 'flex';
            imgContainer.classList.remove('fade-out', 'float-down'); // Eliminar ambas clases de animación asi no se tranca
            imgContainer.classList.add('fade-in');
        });
    }, 500); //Tiempo aparecen los iconos chicos
}

// Función para manejar el clic en los botones de imagen
function manejarClickBotonImagen(boton) {
    const botonId = boton.id;
    const imgSrc = imagenes[botonId];

    const imgGrande = document.createElement('img');
    imgGrande.src = imgSrc;
    imgGrande.style.objectFit = 'cover';

    // Crear nuevo contenedor de texto
    const textoContenedor = document.createElement('div');
    textoContenedor.classList.add('texto-contenedor');

    // Fetch para obtener un trago aleatorio
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const cocktail = data.drinks[0];
            textoContenedor.innerHTML = `
                <h3>Prepara tu Coctel "${cocktail.strDrink}"</h3>
                <img src="${cocktail.strDrinkThumb}" alt="Cocktail Image">
                <p>Instrucciones: ${cocktail.strInstructions}</p>
            `;

            contenedorImagenes.querySelectorAll('.img-container').forEach(imgContainer => {
                imgContainer.classList.remove('fade-in', 'fade-out'); // Eliminar clases de animación anteriores porque sino se tranca
                imgContainer.classList.add('float-down');
            });

            setTimeout(() => {
                contenedorImagenes.querySelectorAll('.img-container').forEach(imgContainer => {
                    imgContainer.style.display = 'none';
                    imgContainer.classList.remove('float-down'); // Remover clases de animación porque sino se tranca
                });

                heroTituloBoton.classList.add('fade-out');

                setTimeout(() => {
                    heroTituloBoton.style.display = 'none';
                    publicidad.innerHTML = '';
                    publicidad.appendChild(imgGrande);
                    publicidad.classList.add('float-in');
                    publicidad.style.display = 'block';

                    document.body.appendChild(textoContenedor);
                    textoContenedor.classList.add('fade-in');
                    textoContenedor.style.display = 'block';
                }, 500); //aparece img promo y cuadro
            }, 200); //desaparece boton hero
        })
        .catch(error => {
            console.error('Error:', error);
            mostrarModal('Hubo un error al obtener el coctel. Por favor, intenta nuevamente.');
        });
}

// Agregar evento click a cada botón de imagen
contenedorImagenes.querySelectorAll('.img-container button').forEach(boton => {
    boton.addEventListener('click', function() {
        manejarClickBotonImagen(boton);
    });
});

// Detectar click fuera de la publicidad dentro y en el contenedor también
document.addEventListener('click', function(event) {
    if (publicidad.style.display === 'block' &&
        (!publicidad.contains(event.target) || publicidad.contains(event.target))) {
        restaurarImagenesPequenas();
    }
});

// el unico error que no logro solucionar es que si se hace por error dos click en el icono de la marca carga 2 coctel y se queda ahi esa imagen.
/*--------------------------------------------------------------------------------------PRODUCTOS*/

class Producto {
    constructor(id, nombre, stock, precioCompra, imagen, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precioCompra = precioCompra;
        this.precioVenta = this.calcularPrecioVenta(precioCompra);
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

    calcularPrecioVenta(precioCompra) {
        return Math.round(precioCompra * 1.3);
    }
}

const productos = [];

// Función para agregar un producto al array
function agregarProducto(id, nombre, stock, precioCompra, imagen, descripcion) {
    const producto = new Producto(id, nombre, stock, precioCompra, imagen, descripcion);
    productos.push(producto);
}

// productos
/**
 * id = number
 * nombre = String
 * stock = number
 * preciocompra = number
 */
agregarProducto('1', 'Fernet Branca', 20, 385, "./img/fernet.jpg" ,"Licor de hierbas Fernet Branca 700 CC de procedencia Argentina");
agregarProducto('2', 'Jhonnie Walker Blue', 20, 1265, "./img/walkerBlue.jpg" , "Whisky Johnnie Walker Blue Label 18 años 750 ml");
agregarProducto('3', 'Coca Cola 1.5L', 20, 134, "./img/cocaCOla.jpg", "Refresco Coca Cola 1.5 Litros Descartable");
agregarProducto('4', 'Jagermaister', 20, 834, "./img/jasgger.jpg", "Botella de licor alemán Jaggermeister de 700 ml.");
agregarProducto('5', 'Jhonnie Walker Black', 20, 1644, "./img/walkerBlack.jpg" ,"Whisky escocés Johnnie Walker Negro en presentación de un litro.");
agregarProducto('6', 'Gin Tanqueray', 20, 1840, "./img/tanqueray.jpg" , "Botella de Gin Tanqueray de origen inglés en presentación de 750 ml" );
agregarProducto('7', 'Stella Artois 1L', 20, 154, "./img/artois.jpg", "Cerveza Stella Artois en envase retornable de un litro");
agregarProducto('8', 'Energizante Monster', 20, 88, "./img/monster.jpg", "Bebida Energizante Monster 473 cc");
agregarProducto('9', 'Bolsa de Hielo', 20, 120, "./img/hielo.jpeg", "Bolsa de hielo de 5 kilos.");


console.log(productos); //aso sale por consola los productos en el array

function mostrarProductos() {
    const cardContainer = document.querySelector('.card-container');

    for (const producto of productos) {
        const card = document.createElement('div');
        card.classList.add('card');

card.innerHTML = `
    <div class="card">
    <div class="card-image">
        <img class="card-img" src="${producto.imagen}" alt="${producto.nombre}">
    </div>
    <a href="#" class="card-link"></a>
    <div class="card-info">
        <span class="card-category">${producto.nombre}</span>
        <h3 class="card-title">$ ${producto.precioVenta}</h3>
        <p class="card-text"> ${producto.descripcion} </p>
        <button id="btnAgregarAlCarrito" class="card-button" type="button">Agregar al Carrito</button>
    </div>
    </div>
    `;

    cardContainer.appendChild(card);
}
}

mostrarProductos();

/*---------------------------------------------------------------------------------------------cerrar modal con enter*/


/*---------------------------------------------------------------------------------------------carrito de compras*/

btnMostrarCarrito.addEventListener('click', () => {
    document.getElementById('carrito').classList.add('visible');
    document.getElementById('carrito').classList.remove('oculto');
});

btnOcultarCarrito.addEventListener('click', () => {
    document.getElementById('carrito').classList.remove('visible');
    document.getElementById('carrito').classList.add('oculto');
});

/*------------------------------------------------------------------------------------------------cerrar modales*/

document.addEventListener('click', function(event) {
    if (!carrito.contains(event.target) && event.target !== btnMostrarCarrito) {
        carrito.style.right = '-400px';
    }
});

btnMostrarCarrito.addEventListener('click', function(event) {
    event.stopPropagation(); //evento que limita el click dentro del boton, no afecta a el contenedor padre
    carrito.style.right = '0';
});

btnOcultarCarrito.addEventListener('click', function(event) {
    event.stopPropagation();
    carrito.style.right = '-400px';
});


/*----------------------------------------------------------------------------------------------------------------------*/

let contadorID = 0; // Contador para generar IDs únicos

document.addEventListener('DOMContentLoaded', () => {
    const btnsAgregarAlCarrito = document.querySelectorAll('.card-button');

    btnsAgregarAlCarrito.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const producto = {
                imagen: card.querySelector('.card-img').src,
                nombre: card.querySelector('.card-category').textContent,
                precio: parseFloat(card.querySelector('.card-title').textContent.replace('$', '')),
                cantidad: 1 // Inicialmente 1 unidad
            };
            
            agregarProductoAlCarrito(producto);

            Toastify({
                text: `¡Se sumo un ${producto.nombre} al carrito!`,
                className: "info",
                duration: 900,
                style: {
                    background: "#0360179f",
                    borderRadius: "25px",
                }
            }).showToast();
        });
    });

// Escuchar eventos de click en los botones de eliminar y restar
document.getElementById('listaCompras').addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (target) {
        event.stopPropagation();
        const itemID = target.dataset.id;
        if (target.classList.contains('eliminarProducto')) {
            document.getElementById(itemID).remove();
            // Cambiar el ícono del carrito si está vacío
            if (!document.querySelector('#listaCompras li')) {
                cambiarIconoCarritoVacio();
            }
            Toastify({
                text: "¡Producto Eliminado!",
                className: "info",
                gravity: "bottom",
                duration: 900,
                style: {
                    background: "rgba(136, 3, 3, 0.621)",
                    borderRadius: "25px",
                }
            }).showToast();
        }
        if (target.classList.contains('restarProducto')) {
            const item = document.getElementById(itemID);
            const cantidad = item.querySelector('.cantidadEnCarrito');
            const precioTotal = item.querySelector('.precioTotalEnCarrito');
            const cantidadActual = parseInt(cantidad.textContent);
            const precioUnitario = parseFloat(precioTotal.textContent.replace('$', '')) / cantidadActual;
            Toastify({
                text: "¡Producto Eliminado!",
                className: "info",
                gravity: "bottom",
                duration: 900,
                style: {
                    background: "rgb(9, 9, 131)",
                    borderRadius: "25px",
                }
            }).showToast();
            if (cantidadActual > 1) {
                cantidad.textContent = cantidadActual - 1;
                precioTotal.textContent = `$${(precioUnitario * (cantidadActual - 1)).toFixed(2)}`;
            } else {
                item.remove();
                // Cambiar el ícono del carrito si está vacío
                if (!document.querySelector('#listaCompras li')) {
                    cambiarIconoCarritoVacio();
                }
            }
        }
    }
});
});

function agregarProductoAlCarrito(producto) {
    const listaCompras = document.getElementById('listaCompras');
    const itemExistente = listaCompras.querySelector(`[data-nombre="${producto.nombre}"]`);
    
    if (itemExistente) {
        const cantidad = itemExistente.querySelector('.cantidadEnCarrito');
        const precioTotal = itemExistente.querySelector('.precioTotalEnCarrito');
        const cantidadActual = parseInt(cantidad.textContent);
        cantidad.textContent = cantidadActual + 1;
        precioTotal.textContent = `$${(producto.precio * (cantidadActual + 1)).toFixed(2)}`;
    } else {
        const li = document.createElement('li');
        li.setAttribute('data-nombre', producto.nombre);
        const itemID = `item-${contadorID++}`; // Generar un ID único
        li.id = itemID; // Asignar el ID al elemento li
        li.innerHTML = `
            <div>
                <img class="imagenCarrito" src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="productoCantidad">
                <span class="nombre">${producto.nombre}</span>
                <span>Cantidad: <span class="cantidadEnCarrito">1</span></span>
            </div>
            <div class="precioBoton"> 
                <span>Total: <span class="precioTotalEnCarrito">$${producto.precio.toFixed(2)}</span></span> 
            <div>
                <button class="restarProducto" data-id="${itemID}"><i class="bi bi-arrow-down-circle"></i></button>
                <button class="eliminarProducto" data-id="${itemID}"><i class="bi bi-ban"></i></button>
            </div>
            </div>
        `; 
        listaCompras.appendChild(li);
    }
    cambiarIconoCarrito();
}

function cambiarIconoCarrito() {
    const btnCarrito = document.getElementById('btnMostrarCarrito');
    const imgCarrito = btnCarrito.querySelector('img');
    imgCarrito.src = './img/carritolleno.png';
}

function cambiarIconoCarritoVacio() {
    const btnCarrito = document.getElementById('btnMostrarCarrito');
    const imgCarrito = btnCarrito.querySelector('img');
    imgCarrito.src = './img/carrito.png';
}


/*---------------------------------------------------------------------------------------------------modal cierre de ventas*/ 

document.getElementById('btnConfirmarPedido').addEventListener('click', function() {
    const resumenCompra = document.getElementById('resumenCompra');
    resumenCompra.innerHTML = ''; // Limpiar el contenido previo

    const productosEnCarrito = document.querySelectorAll('#listaCompras li');
    let totalCompra = 0;

    // Verificar si el carrito está vacío
    if (productosEnCarrito.length === 0) {
        Swal.fire({
            title: "Tu carrito está vacío!",
            icon: "error"
        });
        return; // Detener la ejecución si el carrito está vacío
    }

productosEnCarrito.forEach(item => {
    const nombre = item.querySelector('.nombre').textContent;
    const cantidad = item.querySelector('.cantidadEnCarrito').textContent;
    const total = item.querySelector('.precioTotalEnCarrito').textContent;

    totalCompra += parseFloat(total.replace('$', ''));

    const productoItem = document.createElement('div');
    productoItem.classList.add('producto-item');
    productoItem.innerHTML = `
        <div class="producto-info">
            <span>${nombre}</span>
            <br>
            <span>Cantidad: ${cantidad}</span>
        </div>
        <div class="producto-total">${total}</div>
    `;

    resumenCompra.appendChild(productoItem);
});

    const totalItem = document.createElement('div');
    totalItem.classList.add('producto-item');
    totalItem.innerHTML = `
        <div class="producto-info">
            <strong>Total</strong>
        </div>
        <div class="producto-total">$${totalCompra.toFixed(2)}</div> 
    `;

    resumenCompra.appendChild(totalItem);

    // Desplazar la página hacia arriba
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Mostrar el modal solo si hay productos en el carrito
    document.getElementById('modalConfirmarPedido').style.display = 'block';
    carrito.style.right = '-400px'; // Mueve el carrito
});

document.getElementById('btnCerrarConfirmarPedido').addEventListener('click', function() {
    document.getElementById('modalConfirmarPedido').style.display = 'none';
});

document.getElementById('btnFinalizarCompra').addEventListener('click', function() {
    // Verificar si el carrito está vacío
    const productosEnCarrito = document.querySelectorAll('#listaCompras li');
    if (productosEnCarrito.length === 0) {
        Swal.fire({
            title: "Tu carrito está vacío!",
            icon: "error"
        });
        return; // Detener la ejecución si el carrito está vacío
    }

// Cerrar el modal de confirmar pedido
document.getElementById('modalConfirmarPedido').style.display = 'none';

// Mostrar el mensaje de confirmación de compra
Swal.fire({
    title: "Confirmas la compra?",
    text: "No hay vuelta atrás!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar!"
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: "¡Listo!",
            text: "¡Muchas gracias por elegirnos! ¡Salud!",
            icon: "success"
        });

            // Vaciar el carrito
            const carrito = document.getElementById('listaCompras');
            carrito.innerHTML = '';

            // Cambiar el icono del carrito a vacío
            cambiarIconoCarritoVacio();

            productosEnCarrito.forEach(item => {
                const nombreProducto = item.querySelector('.nombre').textContent;
                const cantidadProducto = parseInt(item.querySelector('.cantidadEnCarrito').textContent);
        
                // Encontrar el producto en el arreglo
                const producto = productos.find(prod => prod.nombre === nombreProducto);
                
                if (producto) {
                    // Restar la cantidad vendida del stock actual
                    producto.stock -= cantidadProducto;
                    console.log(`Producto: ${producto.nombre}, Stock actualizado: ${producto.stock}`);
                }
            });
        }
    });
});


/*------------------------------------------------------------------------------------------------stock*/

