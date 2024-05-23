const Fernet = 360;
const Whisky = 560;
const Coca = 150;

let orden;

let ordenfernet = 0;
let ordenwhisky = 0;
let ordencoca = 0;

let totaldelpedido = 0;

let stockfernet = 10;
let stockwhisky = 10;
let stockcoca = 10;

let nombre = prompt ("Hola como estas? Bienvenido a Blinders, Como es tu nombre?")
const nacimiento = prompt (" " + nombre +  " te consulto, en que año naciste?")


if (nacimiento === null || isNaN(nacimiento) || nacimiento === "") {
    alert ("Ingresa un valor correcto")
} else {
    let edad = 2024 - nacimiento;
    if (edad >= 18) {
    while (orden != 0) {
        orden = prompt("Ingrese una opción: \n 1. Agregar un Fernet \n 2. Agregar una Whisky \n 3. Agregar una Coca-Cola \n 0. Salir");

        if (orden == 1) {
            if (ordenfernet < stockfernet){
            alert("Agregaste un Fernet a tu carrito, su costo es de $" + Fernet + "")
            totaldelpedido += Fernet
            ordenfernet ++
            }else {
                alert ("Lo siento no tenemos mas Botellas de Fernet en el Stock")
            }
        } else if (orden == 2) {
            if (ordenwhisky < stockwhisky){
                alert("Agregaste un Whisky a tu carrito, su costo es de $" + Whisky + "")
                totaldelpedido += Whisky
                ordenwhisky ++
                }else {
                    alert ("Lo siento no tenemos mas Botellas de Whisky en el Stock")
                }
        } else if (orden == 3) {
            if (ordencoca < stockcoca){
                alert("Agregaste una Coca a tu carrito, su costo es de $" + Coca + "")
                totaldelpedido += Coca
                ordencoca ++
                }else {
                    alert ("Lo siento no tenemos mas Botellas de Coca-Cola en el Stock")
                }
        } else if (orden == 0) {
            alert("" + nombre + " el total de tu pedido es de $" + totaldelpedido +". Muchas gracias por elegir Blinders! Salud!")
        } else {
            alert("Opcion no valida")
        }
    }
    } else {
        alert (" " + nombre + " tenes " + edad + " años de edad, no podes entrar a esta pagina.")
}
}
let inventario = (stock , salida ,) => console.log("Quedan en deposito " + Number(stock - salida) + " botellas de Fernet");
let inventario1 = (stock , salida) => console.log("Quedan en deposito " + Number(stock - salida) + " botellas de Whisky");
let inventario2 = (stock , salida) => console.log("Quedan en deposito " + Number(stock - salida) + " botellas Coca");


inventario (stockfernet , ordenfernet)
inventario1 (stockwhisky , ordenwhisky)
inventario2 (stockcoca , ordencoca)
