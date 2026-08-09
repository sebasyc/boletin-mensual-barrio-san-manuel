import './style.css'
import content from '../content/home.json';

document.querySelector('#site-title').textContent = content.site_title;
document.querySelector('#site-subtitle').textContent = content.site_subtitle;
document.querySelector('#site-neighborhood').textContent = content.site_neighborhood;