/* Capturar entradas mediante prompt().
Declarar variables y objetos necesarios para simular el proceso seleccionado.
Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().*/

function saludar() {
    alert ("HOLA CHUCHIS")
    
}

saludar();


let nombre = prompt("Ingrese su primer Nombre: ")
alert("su nombre es: " + nombre)
console.log(nombre)

let apellido = prompt("Ingrese su primer Apellido: ")
alert("su apellido es: " + apellido)
console.log(apellido)


alert("Bienvenido " + nombre + " a Margaritas accesorios")
let producto = prompt ("ingrese NUMERO producto para saber precio 1 Moño - 2 Vincha - 3 Scrunchie - 4 Bijou ")
switch (producto) {
    case "1":
        alert("Los moños salen 500")
    case "2":
        alert("Las vinchas salen 200")
    case "3":
        alert("La bijou sale 300")
}

const productos = [{id:1, producto:"moños"},
                   {id:2, producto:"vinchas"},
                   {id:3,producto:"bijou"}]


for (const producto of productos){
    console.log (prdocto.id);
    console.log (producto.producto)
}

alert("Calculadora de precios: ")


let precio1= Number (prompt("ingrese precio 1:"))
let precio2= Number (prompt("ingrese precio 2:"))

alert ("ingrese: \n1 - para SUMAR \n2- para RESTAR \n.3 paea MULTIPLICAR \n0 para SALIR")

let eleccion 

do{
    eleccion = Number (prompt(menu)) 
    if (eleccion == 1) {
        alert("la Suma es: "+ (precio1 + precio2) )
    } else if ( eleccion == 2 ) {
        alert("la resta es: "+ (precio1 - precio2) )
    } else if (eleccion == 3){
        alert("la division es: "+ (precio1 / precio2).toFixed(2) )

    }else if (eleccion == 4){
        alert("la multiplicacion es: "+ (precio1 * precio2) )
    } else if (eleccion != 0) {
        alert ("ha ingresado una opcion INCORRECTA")
    }
    
} while (eleccion != 0) 

alert ("Calcular factura final con IVA")

function calcularTotalFactura (monto,porcentaje){
    let monto= Number (prompt("ingrese monto total :"))    
    let iva= 21
    if (porentaje){
        iva=porcentaje
    }
    return monto + monto * porcentaje /100
}

alert("debe pagar: " +calcularTotalFactura(1000,10))


