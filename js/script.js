document.getElementById('photos-btn').addEventListener('click',function(){
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => getAlbum(data))
})

function getAlbum(photos){
  const photosContainer = document.getElementById('photos-container')
  for(const photo of photos){
    const photosDiv = document.createElement('div')
    photosDiv.classList.add('photos')
    photosDiv.innerHTML = `
      <h6>AlbumId:${photo.albumId}</h6>
      <h6>Id:${photo.id}</h6>
      <h5>Title:${photo.title}</h5>
      <h6>Title:${photo.url}</h6>
      <h6>Thumbnail-Url:${photo.thumbnailUrl}</h6>
    `
    photosContainer.appendChild(photosDiv)
  }
}