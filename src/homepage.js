export function homePage() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  const h4 = document.createElement('h4');
  const p = document.createElement('p');

  h4.textContent = "Welcome to Dave's Delightful Digestibles!";
  p.textContent = "Indulge in a delightful culinary journey where taste meets health in perfect harmony. At Dave's Delightful Digestibles, we believe that eating well should never compromise on flavor. Our passion for wholesome ingredients and mouthwatering dishes is evident in every plate we serve."

  main.appendChild(h4);
  main.appendChild(p);

  content.appendChild(main);
}