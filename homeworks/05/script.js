const name = prompt(`Escribe tu nombre`)

const body = document.querySelector(`body`)
const text = document.createElement(`h2`)
text.innerText= `Tu nombre es ${name}`
body.append(text)