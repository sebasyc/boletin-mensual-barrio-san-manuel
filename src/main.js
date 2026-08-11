import './style.css'
import content from '../content/home.json';
import { initParallax } from './sections/parallax'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos'

initParallax()


AOS.init({
  easing: 'ease-out',
  once: true,
  offset: 100, 
})

document.querySelector('#site-title').textContent = content.site_title;
document.querySelector('#site-subtitle').textContent = content.site_subtitle;
document.querySelector('#site-neighborhood').textContent = content.site_neighborhood;