const user = prompt(`ingresa el nombre a registrar`)
const password = prompt(`ingresa la contraseña a registrar`)

let user2 = ''
let password2 = ''

const body = document.querySelector('body')
let textH2 = document.createElement('h2')

console.log(user);
console.log(password);

user2 = prompt(`Ingresa el nombre`)
password2 = prompt(`Ingresa la contraseña`)

if (user == user2 && password == password2) {
    textH2.innerText = 'Los datos son correctos puedes ingresar'
    body.append(textH2)
} else {
    do {
        alert(`Los datos son incorrecto, vuelve a intentar`)
        user2 = prompt(`Ingresa el nombre`)
        password2 = prompt(`Ingresa la contraseña`)

    } while (user !== user2 || password !== password2);
}
textH2.innerText = 'Los datos son correctos puedes ingresar'
body.append(textH2)


