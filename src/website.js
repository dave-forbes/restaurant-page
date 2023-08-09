import { homePage } from "./homepage";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

function createHeader() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');

  h1.textContent = "Dave's Delightful Digestibles";

  header.appendChild(h1);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  homeLink.textContent = 'Home';
  homeLink.id = 'home';
  menuLink.textContent = 'Menu';
  menuLink.id = 'menu'
  contactLink.textContent = 'Contact';
  contactLink.id = 'contact';

  nav.appendChild(homeLink);
  nav.appendChild(menuLink);
  nav.appendChild(contactLink);

  homeLink.addEventListener('click', homePage);
  menuLink.addEventListener('click', menuPage);
  contactLink.addEventListener('click', contactPage);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  return main;
}

function initializeWebsite() {
  const content = document.createElement('div');
  content.id = 'content';

  content.appendChild(createHeader());
  content.appendChild(createMain());

  document.body.appendChild(content);

  homePage();
}

export default initializeWebsite;