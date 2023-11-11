// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const arrImg = galleryItems.map((item) =>{
    return `
    <li class ="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
        </a>
    </li>`
})
gallery.insertAdjacentHTML('beforeend', arrImg.join(""))

gallery.addEventListener("click", event =>{
    event.preventDefault();
    if(event.target.classList.contains('gallery__image')){
        basicLightbox.create(`<img class='img-generate-big' width="1400" height="900" src="${event.target.getAttribute("data-source")}" ></img>`).show();
    }
})


console.log(galleryItems);
