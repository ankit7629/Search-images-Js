const input = document.querySelector('#input');
const submitBtn = document.querySelector('#submit');
const imageContainer = document.querySelector('.image-container');

submitBtn.addEventListener('click', async () => {
     const query = input.value;
     const API_KEY = 'uSF3xE1uKNicwjFUD18zd4M8jC_WRAAqJUG4pCi6b90'
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`);
    const data = await response.json();
    console.log(data)

    data.results.forEach((image) => {
        const img = document.createElement('img');
        img.src = image.urls.regular;
        img.height = '200px';
        img.width = '200px';
        imageContainer.appendChild(img);
    })
})