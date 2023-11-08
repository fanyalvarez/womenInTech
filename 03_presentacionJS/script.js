const banner = document.getElementsByClassName('banner')[0]
const blocks = document.getElementsByClassName('blocks')

for (let index = 0; index < 400; index++) {
    banner.innerHTML += " <div class='blocks'></div>"
    blocks[index].style.animationDelay = `${index * 0.05}s`
}

// --------------------------------------------------------
//Crear un programa que permita a una cadena de texto muestre el caracter '-' entre cada caracter de la cadena.
let texto = "hola padawans como estan?"
let cambio = texto.replaceAll(" ", "-")
console.log(texto)
console.log(cambio)
console.log("----------")


//determina el area de un triangulo-- b*h/2 
let base = 20
let altura = 20
let calculo = (base * altura) / 2
console.log(base , altura)
console.log(calculo)
console.log("----------")


//Determinar si la persona es mayor de edad o no
// let edad = prompt("registra la edad")
let edad = 19

if (edad >= 18 ) {
    console.log('si es mayor de edad')
} else {
    console.log('es menor de edad')
}


console.log("----------")
//Dado un numero obten la tabla de multiplicar
let numero = 5
let contador = 1

while (contador <= 10) {
    // console.log(contador, "antes de sumar")
    let resultado = numero * contador
    console.log(` ${numero} x ${contador}  = ${resultado} `)
    contador++
    // console.log(contador, "despues de sumar ++")

}