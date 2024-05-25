const btn_about = document.querySelector('#more_about');
const btn_experiences = document.querySelector('#btn_experiences');
const btn_projects = document.querySelector('#btn_projects');
const btn_contact = document.querySelector('#btn_contact');
const btn_form = document.querySelector('#btn_form');

btn_about.addEventListener('click', () => {
    window.scroll({top: document.getElementById('skills').offsetTop, behavior: "smooth"});
});

btn_experiences.addEventListener('click', () => {
    window.scroll({top: document.getElementById('experiences').offsetTop, behavior: "smooth"});
});

btn_projects.addEventListener('click', () => {
    window.scroll({top: document.getElementById('projects').offsetTop, behavior: "smooth"});
});

btn_contact.addEventListener('click', () => {
    window.scroll({top: document.getElementById('contact').offsetTop, behavior: "smooth"});
});
btn_form.addEventListener('click', () => {
    window.scroll({top: document.getElementById('').offsetTop, behavior: "smooth"});
});
