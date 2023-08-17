let distancia = prompt('Ingresa la distancia a recorrer (km)')
let velocidad = prompt('Ingresa el dato de la velocidad (km/h)')
let tiempo = 0


tiempo = (distancia / velocidad)

const body = document.querySelector('body')
const text = document.createElement('h2')
text.innerText = `El tiempo en recorrer la distancia es de ${tiempo} Hr`
body.append(text)
