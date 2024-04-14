

// Array of Objects 
const planets = [
  {
    name: "Mercury",
    image: "assets/images/mercury.png",
  },
  {
    name: "Venus",
    image: "assets/images/venus.png",
  },
  {
    name: "Earth",
    image: "assets/images/earth.png",
  },
  {
    name: "Mars",
    image: "assets/images/mars.png",
  },
  {
    name: "Jupiter",
    image: "assets/images/jupiter.png",
  },
  {
    name: "Saturn",
    image: "assets/images/saturn.png",
  },
  {
    name: "Uranus",
    image: "assets/images/uranus.png",
  },
  {
    name: "Neptune",
    image: "assets/images/neptune.png",
  },
]

// Add events
const thumbnails = document.querySelectorAll(".thumbnails li img");

thumbnails.forEach((thumbnail, index) => {
  /* console.log(planets[index]['name']); */
  thumbnail.addEventListener('click', () => {
    changePlanetImage(planets[index]['image']);
    changePlanetTitle(planets[index]['name']);
  });
});

// A function that change the planet image
function changePlanetImage(image) {
  document.querySelector('.hero-section__image-container img').src = image;
}

// A function that change the hero title
function changePlanetTitle(title) {

  document.querySelector('[planet-name]').textContent = title;

}