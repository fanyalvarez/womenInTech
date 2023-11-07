const banner = document.getElementsByClassName('banner')[0]
const blocks = document.getElementsByClassName('blocks')

for (let index = 0; index < 400; index++) {
    banner.innerHTML += " <div class='blocks'></div>"
    blocks[index].style.animationDelay = `${index * 0.05}s`



}