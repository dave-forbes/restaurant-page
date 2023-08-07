export function homePage() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');
  const main = document.createElement('main');
  const img = document.createElement('img');
  const h4 = document.createElement('h4');
  const p = document.createElement('p');

  h1.textContent = "Dave's Delightful Digestibles";
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  contact.textContent = 'Contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  header.appendChild(h1);
  header.appendChild(nav);

  img.src = "/src/filipp-romanovski-naSJ-jJyqNQ-unsplash.jpg";
  h4.textContent = "Welcome to Dave's Delightful Digestibles!";
  p.textContent = 'Come try our sensational selection of scrumptous salads, soups and stews.'

  main.appendChild(img);
  main.appendChild(h4);
  main.appendChild(p);

  content.appendChild(header);
  content.appendChild(main);

  return content;
}