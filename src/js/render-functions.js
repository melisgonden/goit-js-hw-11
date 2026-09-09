const gallery = document.querySelector('.gallery');

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
          </a>

          <div class="image-info">
            <p><b>Likes</b>${image.likes}</p>
            <p><b>Views</b>${image.views}</p>
            <p><b>Comments</b>${image.comments}</p>
            <p><b>Downloads</b>${image.downloads}</p>
          </div>
        </li>
      `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  gallery.innerHTML = '';
}
