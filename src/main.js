import content from '../content/home.json';
import { initParallax } from './sections/parallax'
import { initNavbar } from './sections/navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import AOS from 'aos'

import './style.css'

initParallax()
initNavbar()

AOS.init({
  easing: 'ease-out',
  once: true,
  offset: 100, 
})

document.querySelector('#site-subtitle').textContent = content.site_subtitle;
document.querySelector('#site-neighborhood').textContent = content.site_neighborhood;

document.querySelector('#schedule-title').textContent = content.schedule_title;
const scheduleAccordion = document.querySelector('#schedule-accordion');

content.schedule_items.forEach((item, index) => {
  const isFirst = index === 0;
  const descriptionItems = item.description.map(point => `<li>${point}</li>`).join('');
  const div = document.createElement('div');
  div.className = 'accordion-item';
  div.innerHTML = `
    <h2 class="accordion-header">
      <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button"
        data-bs-toggle="collapse" data-bs-target="#schedule-item-${index}">
        ${item.activity}
      </button>
    </h2>
    <div id="schedule-item-${index}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}"
      data-bs-parent="#schedule-accordion">
      <div class="accordion-body">
        <div class="day-time"><i class="bi bi-clock-fill"></i><p>${item.day_time}</p></div>
        <ul>${descriptionItems}</ul>
      </div>
    </div>
  `;
  scheduleAccordion.appendChild(div);
});

document.querySelector('#weekly-schedule-title').textContent = content.weekly_schedule_title;

const weeklyScheduleAccordion = document.querySelector('#weekly-schedule-accordion');

content.weekly_schedule_items.forEach((item, index) => {
  const isFirst = index === 0;
  const descriptionItems = item.description.map(point => `<li>${point}</li>`).join('');
  const div = document.createElement('div');
  div.className = 'accordion-item';
  div.innerHTML = `
    <h2 class="accordion-header">
      <button class="accordion-button ${isFirst ? '' : 'collapsed'}" type="button"
        data-bs-toggle="collapse" data-bs-target="#weekly-item-${index}">
        ${item.activity}
      </button>
    </h2>
    <div id="weekly-item-${index}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}"
      data-bs-parent="#weekly-schedule-accordion">
      <div class="accordion-body">
        <div class="day-time"><i class="bi bi-calendar-fill"></i><p>${item.day}</p></div>
        <div class="day-time"><i class="bi bi-clock-fill"></i><p>${item.time}</p></div>
        <ul>${descriptionItems}</ul>
      </div>
    </div>
  `;
  weeklyScheduleAccordion.appendChild(div);
});

document.querySelector('#announcements-title').textContent = content.announcements_title;

const announcementsList = document.querySelector('#announcements-list');

content.announcements.forEach(item => {
  const div = document.createElement('div');
  div.className = 'announcement-item';
  div.innerHTML = `
    <h3>${item.title}</h3>
    <p class="subtitle">${item.description}</p>
    <div class="day-time">
      <i class="bi bi-calendar-fill"></i>
      <p>${item.day_time}</p>
    </div>
  `;
  announcementsList.appendChild(div);
});

document.querySelector('#birthdays-title').textContent = content.birthdays_title;

const birthdaysList = document.querySelector('#birthdays-list');

content.birthdays.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${item.name}</h3>
    <div class="date">
      <i class="bi bi-cake2-fill"></i>
      <p>${item.date}</p>
    </div>
  `;
  birthdaysList.appendChild(li);
});

document.querySelector('#member-spotlight-title').textContent = content.member_spotlight_title;
document.querySelector('#member-spotlight-photo').src = content.member_spotlight_photo;
document.querySelector('#member-spotlight-name').textContent = content.member_spotlight_name;

const characteristicsList = document.querySelector('#member-spotlight-characteristics');
content.member_spotlight_characteristics.forEach(point => {
  const li = document.createElement('li');
  li.textContent = point;
  characteristicsList.appendChild(li);
});

document.querySelector('#member-spotlight-interviewer').textContent = content.member_spotlight_interviewer;

document.querySelector('#scripture-title').textContent = content.scripture_title;
document.querySelector('#scripture-text').textContent = content.scripture_text;
document.querySelector('#scripture-passage').textContent = content.scripture_passage;
document.querySelector('#scripture-testimony').textContent = content.scripture_testimony;
document.querySelector('#scripture-author').textContent = content.scripture_author;

document.querySelector('#come-follow-me-title').textContent = content.come_follow_me_title;
document.querySelector('#come-follow-me-image').src = content.come_follow_me_image;
document.querySelector('#come-follow-me-character').textContent = content.come_follow_me_character;
document.querySelector('#come-follow-me-character-description').textContent = content.come_follow_me_character_description;
document.querySelector('#come-follow-me-quote').textContent = content.come_follow_me_quote;
document.querySelector('#come-follow-me-quote-author').textContent = content.come_follow_me_quote_author;
document.querySelector('#come-follow-me-reflection').textContent = content.come_follow_me_reflection;