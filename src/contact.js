export function contactPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.classList.add('contact-grid');

  const map = document.createElement('div');

  map.classList.add('map');
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4966.005004690869!2d-0.14071354976563108!3d51.51317008725825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4b7f9b%3A0xe44e57cc537e5dd2!2sSoho%2C%20London!5e0!3m2!1sen!2suk!4v1691428299228!5m2!1sen!2suk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  const address = document.createElement('p');
  const phoneNumber = document.createElement('p');
  const openingTimes = document.createElement('p');
  const email = document.createElement('p');

  address.innerHTML = '<i class="fa-solid fa-location-dot fa-lg"></i> - 13 Fake Street, Somewhere in Soho, London...';
  phoneNumber.innerHTML = '<i class="fa-solid fa-phone fa-lg"></i> - 149192130498';
  openingTimes.innerHTML = '<i class="fa-solid fa-clock fa-lg"></i> - Mon-Thurs:5pm-10pm, Fri-Sun:11am-11pm';
  email.innerHTML = '<i class="fa-solid fa-envelope fa-lg"></i> - davesdelightfuldigestables@fake-email.co.uk';

  main.appendChild(map);
  main.appendChild(address);
  main.appendChild(openingTimes);
  main.appendChild(phoneNumber);
  main.appendChild(email);
}