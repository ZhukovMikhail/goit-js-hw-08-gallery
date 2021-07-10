const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const jsGallery = document.querySelector('.js-gallery');

const listEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href = ${original}><img class="gallery__image" src="${preview}" alt="${description}"></li></a>`,
  )
  .join('');

jsGallery.insertAdjacentHTML('beforeend', listEl);
jsGallery.addEventListener('click', openModalHandler);

const modal = document.querySelector('.js-lightbox');
const modalClose = document.querySelector('[data-action="close-lightbox"]');
const modalImage = document.querySelector('.lightbox__image');

// modalClose.addEventListener('click', closeModalHandler);
// window.addEventListener('click', altModalCloseHandler);

//=============== Function Open Modal ====================================
function openModalHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  modal.classList.add('is-open');

  modalImage.src = event.target.parentNode.href;
  modalImage.alt = event.target.alt;

  modalClose.addEventListener('click', closeModalHandler);
  window.addEventListener('click', altModalCloseHandler);

  window.addEventListener('keydown', leftKeyHandler);
  window.addEventListener('keydown', rightKeyHandler);
  window.addEventListener('keydown', escapeHanler);
}

//=============== Function Close Modal ====================================
function closeModalHandler() {
  modal.classList.remove('is-open');
  modalImage.src = '';
  modalImage.alt = '';

  modalClose.removeEventListener('click', closeModalHandler);
  window.removeEventListener('click', altModalCloseHandler);

  window.removeEventListener('keydown', leftKeyHandler);
  window.removeEventListener('keydown', rightKeyHandler);
  window.removeEventListener('keydown', escapeHanler);
}
//------------------------------------------------------------------------
function altModalCloseHandler(event) {
  if (event.target.nodeName === 'IMG') {
    return;
  }
  closeModalHandler();
}
//------------------------------------------------------------------------
function escapeHanler(evt) {
  console.log(evt);
  if (evt.code !== 'Escape') {
    return;
  }
  closeModalHandler();
}

//=============== Function Left key ====================================
function leftKeyHandler(evt) {
  const originalSrcArray = galleryItems.map(({ original }) => original);
  let currentImageIndex = originalSrcArray.indexOf(modalImage.src);
  console.log(currentImageIndex);
  if (!modal.classList.contains('is-open')) {
    return;
  }
  if (evt.code !== 'ArrowLeft') {
    return;
  }
  if (currentImageIndex === 0) {
    return (modalImage.src = originalSrcArray[originalSrcArray.length - 1]);
  }
  modalImage.src = originalSrcArray[currentImageIndex - 1];
}
//=============== Function Right key ====================================
function rightKeyHandler(evt) {
  const originalSrcArray = galleryItems.map(({ original }) => original);
  let currentImageIndex = originalSrcArray.indexOf(modalImage.src);

  if (!modal.classList.contains('is-open')) {
    return;
  }
  if (evt.code !== 'ArrowRight') {
    return;
  }
  if (currentImageIndex === originalSrcArray.length - 1) {
    return (modalImage.src = originalSrcArray[0]);
  }
  modalImage.src = originalSrcArray[currentImageIndex + 1];
}
//------------------------------------------------------------------------
