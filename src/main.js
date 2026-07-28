import content from '../content/home.json';
import './style.css'

document.querySelector('#hero-title').textContent = content.hero_title;
document.querySelector('#hero-image').src = content.hero_image;