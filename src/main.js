import './style.css'
import content from '../content/home.json';

// Portada
document.querySelector('#hero-title').textContent = content.hero_title;
document.querySelector('#hero-subtitle').textContent = content.hero_subtitle;
document.querySelector('#hero-image').src = content.hero_image;

// Horarios
document.querySelector('#schedule-title').textContent = content.schedule_title;
const scheduleList = document.querySelector('#schedule-list');
content.schedule_items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.day_time} — ${item.activity}`;
  scheduleList.appendChild(li);
});

// Avisos
document.querySelector('#announcements-title').textContent = content.announcements_title;
const announcementsList = document.querySelector('#announcements-list');
content.announcements.forEach(item => {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
  announcementsList.appendChild(div);
});

// Reflexión
document.querySelector('#reflection-title').textContent = content.reflection_title;
document.querySelector('#reflection-text').textContent = content.reflection_text;
document.querySelector('#reflection-author').textContent = content.reflection_author;

// Contacto
document.querySelector('#contact-title').textContent = content.contact_title;
document.querySelector('#contact-address').textContent = content.contact_address;
document.querySelector('#contact-phone').textContent = content.contact_phone;
document.querySelector('#contact-email').textContent = content.contact_email;