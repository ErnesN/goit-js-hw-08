// Add imports above this line
// import { galleryItems } from './gallery-items';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const createGalleryItems = ({ preview, original, description }) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const makeGalleryItem = galleryItems.map(createGalleryItems).join('');
galleryEl.insertAdjacentHTML('beforeend', makeGalleryItem);


const onGalleryImageClick = e => {
  e.preventDefault();
  if (e.code === 'Escape') {
    modal.close();
  }

  const createMarkupModalElementsGallery = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="auto" height="auto">`);
  createMarkupModalElementsGallery.show();

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      createMarkupModalElementsGallery.close();
    }
  });
};

galleryEl.addEventListener('click', onGalleryImageClick);