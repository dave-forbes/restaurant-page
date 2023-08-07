import { homePage } from "./homepage";
import { menuPage } from "./menu";
import { contactPage } from "./contact";
import './style.css';

const content = document.createElement('div');
content.id = 'content';
const header = document.createElement('header');
const h1 = document.createElement('h1');
const nav = document.createElement('nav');
const homeLink = document.createElement('a');
const menuLink = document.createElement('a');
const contactLink = document.createElement('a');
const main = document.createElement('main');

h1.textContent = "Dave's Delightful Digestibles";
homeLink.textContent = 'Home';
homeLink.id = 'home';
menuLink.textContent = 'Menu';
menuLink.id = 'menu'
contactLink.textContent = 'Contact';
contactLink.id = 'contact';

nav.appendChild(homeLink);
nav.appendChild(menuLink);
nav.appendChild(contactLink);
header.appendChild(h1);
header.appendChild(nav);

content.appendChild(header);
content.appendChild(main);

document.body.appendChild(content);

homePage();

homeLink.addEventListener('click', homePage);
menuLink.addEventListener('click', menuPage);
contactLink.addEventListener('click', contactPage);