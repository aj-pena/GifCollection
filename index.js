const container = document.getElementById('container')
const h1El = document.getElementById('title')
let html = ''
// array of images locations
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
// load images into page
getImages(images)
// function to create image html elements from an array of images and print them into the document
function getImages(arr){
    for(const item of arr){
        html += `
            <img src=${item} alt='#' class="reel">
        `
    }
    container.innerHTML = html
}
// Displays the selected image full height and hides the other images
function growImage(e){
    // create new image element
    let nImg = document.createElement('img')
    // set properties of new image same as the target of the click event (duplicate clicked image)
    nImg.src = e.target.src
    // add class so that it will be displayed big
    nImg.classList.add('big')
    // event listener to restore initial view when clicked
    nImg.addEventListener('click',restore)
    // add duplicate to document
    document.body.appendChild(nImg)
    // hide other images and title of the page
    container.style.opacity = 0
    h1El.style.display = 'none'
}
// restores the gallery of images to its original display by removing the full height image
function restore(e){
    // restore the other images and title of the page
    container.style.opacity = 1
    h1El.style.display = 'block'
    // remove the duplicate image
    document.body.removeChild(e.target)
}
// Event listener for clicking on images
container.addEventListener('click', growImage)