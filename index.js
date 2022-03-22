const container = document.getElementById('container')

let html = ''
const images = [
    './Assets/Gifs/cherry.gif',
    './Assets/Gifs/cherryfall.gif',
    './Assets/Gifs/cooking-gif.gif',
    './Assets/Gifs/brushing.gif',
    './Assets/Gifs/cottage.gif',
    './Assets/Gifs/facade.gif',
    './Assets/Gifs/fireworks.gif',
    './Assets/Gifs/fuji.gif',
    './Assets/Gifs/ladywithcat.gif',
    './Assets/Gifs/Pagoda.gif',
    './Assets/Gifs/rain.gif',
    './Assets/Gifs/redFall.gif',
    './Assets/Gifs/scrolling.gif',
    './Assets/Gifs/see-japan-seawaves.gif',
    './Assets/Gifs/singingBird.gif',
    './Assets/Gifs/snowflakes.gif',
    './Assets/Gifs/splashing-water.gif',
    './Assets/Gifs/sppeding-train.gif',
    './Assets/Gifs/superwave.gif',
    './Assets/Gifs/tea.gif',
    './Assets/Gifs/transit.gif',
    './Assets/Gifs/urbanStreet.gif',
    './Assets/Gifs/waves.gif',
    './Assets/Gifs/woodworking.gif',
    './Assets/Gifs/breaking-waves.avif',
    './Assets/Gifs/village.avif',
    './Assets/Gifs/farmers.avif'
]
getImages(images)

function getImages(arr){
    for(const item of arr){
        html += `
            <img src=${item} alt='#' class="reel">
        `
    }
    container.innerHTML = html
}
function growImage(e){
    const img = e.target
    if(img.classList.contains('big')){
        img.classList.remove('big')
        img.classList.add('reel')
    } else{
        img.classList.add('big')
        img.classList.remove('reel')
    }
}
// Event listener for clicking on images
container.addEventListener('click', growImage)