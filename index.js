function Producto(id, nombre, stock, precioCompra) {
    this.id = id;
    this.nombre = nombre;
    this.stock = stock;
    this.precioCompra = precioCompra;
    this.precioVenta = Math.round(precioCompra * 1.3); // Calculamos el precio de venta
    this.carrovacio = stock
}

const producto_1 = new Producto('1', 'Fernet', 20, 385);
const producto_2 = new Producto('2', 'Whisky', 20, 1265);
const producto_3 = new Producto('3', 'Coca', 20, 134);

console.log(producto_1);
console.log(producto_2);
console.log(producto_3);


let productos = [producto_1, producto_2, producto_3];

console.log(productos);

const producto_4 = new Producto("4", "Cerveza", 20, 104);
productos.push(producto_4);

let precioCompra = productos.map(producto => producto.precioCompra);
let precioVenta = productos.map(producto => producto.precioVenta);

const producto_5 = new Producto("5", "Jagermaister", 20, 684);
productos.push(producto_5);

console.log(productos.length);

// let carrovacio = productos.map(producto => producto.stock)

// console.log(carrovacio);

function cancelarCompra() {productos.forEach(producto => {producto.stock = producto.carrovacio;})
alert("Compra cancelada.");
}

function agregarProducto(id) {
    let producto = productos.find(producto => producto.id === id);
    if (producto) {
        if (producto.stock > 0) {
            alert(`Agregaste un ${producto.nombre} a tu carrito, su costo es de $${producto.precioVenta}`);
            producto.stock--; //resto
        } else {
            alert(`Lo siento, no tenemos más ${producto.nombre} en el stock`);
        }
    } else {
        alert("Producto no válido");
    }
}

let nombre = prompt("Hola, ¿cómo estás? Bienvenido a Blinders. ¿Cuál es tu nombre?");
if (nombre === null || nombre === "") {
    nombre = "Usuario";
}

let nacimiento = prompt(`${nombre}, ¿en qué año naciste?`);

while (nacimiento === null || isNaN(nacimiento) || nacimiento === "" || nacimiento > 2024 || nacimiento < 1900) {
    alert("Ingresa un año de nacimiento correcto");
    nacimiento = prompt("Vuelve a ingresar tu año de nacimiento, por favor");
}
let edad = 2024 - nacimiento;

if (edad < 18) {
    alert("No tienes edad suficiente para ingresar a la página. ¡Saludos!"); //se cierra la app porque no tenes edad suficiente
} else {
    alert(`Ahora si, Bienvenido a Blinders ${nombre}! Tu edad es ${edad} años.`);

    let orden = "";
    while (orden !== "0" && orden !== "#") {
        orden = prompt(`Hola ${nombre}, ¿qué producto queres comprar?
        \n 1. Fernet | Precio: $${producto_1.precioVenta}
        \n 2. Whisky | Precio: $${producto_2.precioVenta}
        \n 3. Coca-Cola | Precio: $${producto_3.precioVenta}
        \n 4. Cerveza | Precio: $${producto_4.precioVenta}
        \n 5. Jagermaister | Precio: $${producto_5.precioVenta}
        \n 0. Realizar la compra
        \n #. Cancelar la compra`); //no logro hacer que no descuente los productos del stock. 


        switch (orden) {
            case "1":
                agregarProducto('1');
                break;
            case "2":
                agregarProducto('2');
                break;
            case "3":
                agregarProducto('3');
                break;
            case "4":
                agregarProducto('4');
                break;
            case "5":
                agregarProducto('5');
                break;
            case "0":
                let resumen = productos
                .filter(producto => producto.stock < 20)
                .map(producto => `${20 - producto.stock} botella/as de ${producto.nombre}`)
                .join('\n');
                alert(`${nombre}, el total de tu pedido es de $${productos.reduce((totalCompra, producto) => totalCompra + (producto.precioVenta * (20 - producto.stock)), 0)}. 
                \nResumen de tu compra:
                \n${resumen}
                \nMuchas gracias por elegir Blinders! Salud!`);
                break;
            case "#":
                /*Cuando cancele la venta no descuente del stock
                variable del stock. producto.stock
                producto.stock que sea igual a inicio*/
                cancelarCompra()
                break;
            default:
                alert("Opción no válida");
                break;
        }
    }
}


console.log("Stock restante de productos:"); //asi aparece en la consola la frase del stock 
console.log(productos.map(producto => `${producto.nombre}: ${producto.stock}`));
