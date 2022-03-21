

let html = ''
const images = [
    './Assets/Gifs/cherry.gif',
    './Assets/Gifs/cherryfall.gif',
    './Assets/Gifs/cooking-gif.gif',
    './Assets/Gifs/brushing.gif',
    './Assets/Gifs/cottage.gif',
    './Assets/Gifs/facade.gif'

]

for(const image of images){
    html += `
        <img src=${image} alt='#'>
    `
}
console.log(html)
document.body.innerHTML = html