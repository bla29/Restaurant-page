// index.js
import { headline, description } from "./home.js";
import image from "./Noodles.jpg";
import chefImage from "./Lau.jpg";
import aboutText from "./about.js";
import menu from "./menu.js"
import "./styles.css"

let content = document.querySelector('#content');

//add image
let imageElement = document.createElement('img');
imageElement.src = image;
content.appendChild(imageElement);

let headlineElement = document.createElement('h1');
headlineElement.textContent = headline;
content.appendChild(headlineElement);

let descriptionElement = document.createElement('h3');
descriptionElement.textContent = description;
content.appendChild(descriptionElement);

let homeButton = document.querySelector('#home');
let menuButton = document.querySelector('#menu');
let aboutButton = document.querySelector('#about');

homeButton.addEventListener('click', () => {
    content.innerHTML = ' ';
    let imageElement = document.createElement('img');
    imageElement.src = image;
    content.appendChild(imageElement);

    let headlineElement = document.createElement('h1');
    headlineElement.textContent = headline;
    content.appendChild(headlineElement);

    let descriptionElement = document.createElement('h3');
    descriptionElement.textContent = description;
    content.appendChild(descriptionElement);
});

menuButton.addEventListener('click', () => {
    content.innerHTML = ' ';

    let menuNames = document.createElement('ol');
    for (let dish of menu) {
        let menuItem = document.createElement('li');
        menuItem.textContent = dish.item;
        menuNames.appendChild(menuItem);
    }

    content.appendChild(menuNames)
});

aboutButton.addEventListener('click', () => {
    content.innerHTML = ' ';

    let aboutImage = document.createElement('img');
    aboutImage.src = chefImage;
    content.appendChild(aboutImage);

    let aboutDescription = document.createElement('h3');
    aboutDescription.textContent = aboutText;
    content.appendChild(aboutDescription);
});
