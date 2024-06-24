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

// const form = document.getElementById("validationForm");
// const ingresoModal = document.getElementById("miModaIingreso");
// const denegadoModal = document.getElementById("miModalDenegado");
// //boton cerrar modales
// const cerrarButtons = document.querySelectorAll(".btncerrar");

// //boton formulario
// const btnDelete = document.getElementById("btnDelete");
// //botones del carrito
// const btnMostrarCarrito = document.getElementById('btnMostrarCarrito');
// const btnOcultarCarrito = document.getElementById('btnOcultarCarrito');
// const carrito = document.getElementById('carrito');


// form.addEventListener("submit", (event) => {
//     event.preventDefault(); 
//     const fechadenacimiento = document.getElementById("fdn").value;

//     // Validamos la edad
//     if (isAgeValid(fechadenacimiento)) {
//         closeModal();
//         showModal(ingresoModal);
//     } else {
//         showModal(denegadoModal);
//     }
// });

// // Función para validar la edad
// function isAgeValid(fechadenacimiento) {
//     const today = new Date();
//     const birthDate = new Date(fechadenacimiento);
//     const birthYear = birthDate.getFullYear();

//     // Verificar si el año de nacimiento es anterior a 1924
//     if (birthYear < 1924) {
//         return false;
//     }

//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();

//     // Por si la fecha de nacimiento aún no ha ocurrido este año
//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age >= 18;
// }

// function closeModal() {
//     const modal = document.getElementById("validationModal");
//     modal.style.display = "none";
// }

// function showModal(modal) {
//     modal.style.display = "block";
// }

// // Evento para cerrar los modales
// cerrarButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         ingresoModal.style.display = "none";
//         denegadoModal.style.display = "none";
//     });
// });

// btnDelete.addEventListener("click", () => {
//     form.reset();
// });

// /*--------------------------------------------------------------------------------------PRODUCTOS*/

// class Producto {
//     constructor(id, nombre, stock, precioCompra, imagen, descripcion) {
//         this.id = id;
//         this.nombre = nombre;
//         this.stock = stock;
//         this.precioCompra = precioCompra;
//         this.precioVenta = this.calcularPrecioVenta(precioCompra);
//         this.imagen = imagen;
//         this.descripcion = descripcion;
//     }

//     calcularPrecioVenta(precioCompra) {
//         return Math.round(precioCompra * 1.3);
//     }
// }

// const productos = [];

// // Función para agregar un producto al array
// function agregarProducto(id, nombre, stock, precioCompra, imagen, descripcion) {
//     const producto = new Producto(id, nombre, stock, precioCompra, imagen, descripcion);
//     productos.push(producto);
// }

// // productos
// /**
//  * id = number
//  * nombre = String
//  * stock = number
//  * preciocompra = number
//  */
// agregarProducto('1', 'Fernet Branca', 20, 385, "./img/fernet.jpg" ,"Licor de hierbas Fernet Branca 700 CC de procedencia Argentina");
// agregarProducto('2', 'Jhonnie Walker Blue', 20, 1265, "./img/walkerBlue.jpg" , "Whisky Johnnie Walker Blue Label 18 años 750 ml");
// agregarProducto('3', 'Coca Cola 1.5L', 20, 134, "./img/cocaCOla.jpg", "Refresco Coca Cola 1.5 Litros Descartable");
// agregarProducto('4', 'Jagermaister', '20', '834', "./img/jasgger.jpg", "Botella de licor alemán Jaggermeister de 700 ml.");
// agregarProducto('5', 'Jhonnie Walker Black', 20, 1644, "./img/walkerBlack.jpg" ,"Whisky escocés Johnnie Walker Negro en presentación de un litro.");
// agregarProducto('6', 'Gin Tanqueray', 20, 1840, "./img/tanqueray.jpg" , "Botella de Gin Tanqueray de origen inglés en presentación de 750 ml" );
// agregarProducto('7', 'Cerveza Stella Artois 1L', 20, 154, "./img/artois.jpg", "Cerveza Stella Artois en envase retornable de un litro");
// agregarProducto('8', 'Energizante Monter', 20, 88, "./img/monster.jpg", "Bebida Energizante Monster 473 cc");


// console.log(productos);

// function mostrarProductos() {
//     const cardContainer = document.querySelector('.card-container');

//     for (const producto of productos) {
//         const card = document.createElement('div');
//         card.classList.add('card');

//         card.innerHTML = `
//             <div class="card">
//             <div class="card-image">
//                 <img class="card-img" src="${producto.imagen}" alt="${producto.nombre}">
//             </div>
//             <a href="#" class="card-link">
//                 <div class="card-image-hover"></div>
//             </a>
//             <div class="card-info">
//                 <span class="card-category">${producto.nombre}</span>
//                 <h3 class="card-title">$ ${producto.precioVenta}</h3>
//                 <p class="card-text"> ${producto.descripcion} </p>
//                 <button id="btnAgregarAlCarrito" class="card-button" type="button">Agregar al Carrito</button>
//             </div>
//             </div>
//         `;

//         cardContainer.appendChild(card);
//     }
// }

// mostrarProductos();

// /*---------------------------------------------------------------------------------------------cerrar modal con enter*/


// /*---------------------------------------------------------------------------------------------carrito de compras*/

// btnMostrarCarrito.addEventListener('click', () => {
//     document.getElementById('carrito').classList.add('visible');
//     document.getElementById('carrito').classList.remove('oculto');
// });

// btnOcultarCarrito.addEventListener('click', () => {
//     document.getElementById('carrito').classList.remove('visible');
//     document.getElementById('carrito').classList.add('oculto');
// });

// /*------------------------------------------------------------------------------------------------cerrar modales*/

// document.addEventListener('click', function(event) {
//     if (!carrito.contains(event.target) && event.target !== btnMostrarCarrito) {
//         carrito.style.right = '-400px';
//     }
// });

// btnMostrarCarrito.addEventListener('click', function(event) {
//     event.stopPropagation(); //evento que limita el click dentro del boton, no afecta a el contenedor padre
//     carrito.style.right = '0';
// });

// btnOcultarCarrito.addEventListener('click', function(event) {
//     event.stopPropagation();
//     carrito.style.right = '-400px';
// });


// /*----------------------------------------------------------------------------------------------------------------------*/

// document.addEventListener('DOMContentLoaded', () => {
//     const btnsAgregarAlCarrito = document.querySelectorAll('.card-button');

//     btnsAgregarAlCarrito.forEach((btn) => {
//         btn.addEventListener('click', (event) => {
//             const card = event.target.closest('.card');
//             const producto = {
//                 imagen: card.querySelector('.card-img').src,
//                 nombre: card.querySelector('.card-category').textContent,
//                 precio: parseFloat(card.querySelector('.card-title').textContent.replace('$', '')),
//                 cantidad: 1 // Inicialmente 1
//             };
            
//             agregarProductoAlCarrito(producto);
//         });
//     });

//     // Escuchar eventos de click en los botones de eliminar
//     document.getElementById('listaCompras').addEventListener('click', (event) => {
//         if (event.target.classList.contains('eliminarProducto')) {
//             event.stopPropagation();
//             const item = event.target.closest('li');
//             item.remove();
//             // Cambiar el ícono del carrito si está vacío
//             if (!document.querySelector('#listaCompras li')) {
//                 cambiarIconoCarritoVacio();
//             }
//         }
//     });
// });

// function agregarProductoAlCarrito(producto) {
//     const listaCompras = document.getElementById('listaCompras');
//     const itemExistente = listaCompras.querySelector(`[data-nombre="${producto.nombre}"]`);
    
//     if (itemExistente) {
//         const cantidad = itemExistente.querySelector('.cantidadEnCarrito');
//         const precioTotal = itemExistente.querySelector('.precioTotalEnCarrito');
//         const cantidadActual = parseInt(cantidad.textContent);
//         cantidad.textContent = cantidadActual + 1;
//         precioTotal.textContent = `$${producto.precio * (cantidadActual + 1)}`;
//     } else {
//         const li = document.createElement('li');
//         li.setAttribute('data-nombre', producto.nombre);
//         li.innerHTML = `
//         <img class = "imagenCarrito" src="${producto.imagen}" alt="${producto.nombre}">
//         <div class="productoCantidad">
//         <span class="nombre">${producto.nombre}</span>
//         <span>Cantidad: <span class="cantidadEnCarrito">1</span></span>
//         </div>
//         <div class ="precioBoton">
//         <span>Total: <span class="precioTotalEnCarrito">$${producto.precio}</span></span>
//         <button class="eliminarProducto">Eliminar</button>
//         </div>
//         `;
//         listaCompras.appendChild(li);
//     }
//     cambiarIconoCarrito();
// }

// function cambiarIconoCarrito() {
//     const btnCarrito = document.getElementById('btnMostrarCarrito');
//     const imgCarrito = btnCarrito.querySelector('img');
//     imgCarrito.src = './img/carritolleno.png';
// }

// function cambiarIconoCarritoVacio() {
//     const btnCarrito = document.getElementById('btnMostrarCarrito');
//     const imgCarrito = btnCarrito.querySelector('img');
//     imgCarrito.src = './img/carrito.png';
// }



// const modalOverlay = document.querySelector('.modal-overlay');
// modalOverlay.classList.add('active');




/*--------------------*/

