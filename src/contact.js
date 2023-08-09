export function contactPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.classList.add('contact-grid');

  const map = document.createElement('div');

  map.classList.add('map');
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4966.005004690869!2d-0.14071354976563108!3d51.51317008725825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4b7f9b%3A0xe44e57cc537e5dd2!2sSoho%2C%20London!5e0!3m2!1sen!2suk!4v1691428299228!5m2!1sen!2suk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  const container = document.createElement('div');
  container.classList.add('icon-container-grid');

  const address = document.createElement('p');
  const phoneNumber = document.createElement('p');
  const openingTimes = document.createElement('p');
  const email = document.createElement('p');
  const addressIcon = document.createElement('i');
  const openingTimesIcon = document.createElement('i');
  const phoneNumberIcon = document.createElement('i');
  const emailIcon = document.createElement('i');

  addressIcon.innerHTML = "<i class='fa-solid fa-location-dot fa-lg'></i>";
  openingTimesIcon.innerHTML = "<i class='fa-solid fa-clock fa-lg'></i>";
  phoneNumberIcon.innerHTML = "<i class='fa-solid fa-phone fa-lg'></i>";
  emailIcon.innerHTML = "<i class='fa-solid fa-envelope fa-lg'></i>";

  address.innerHTML = '13 Fake Street, Somewhere in Soho, London...';
  phoneNumber.innerHTML = '149192130498';
  openingTimes.innerHTML = 'Mon-Thurs:5pm-10pm, Fri-Sun:11am-11pm';
  email.innerHTML = 'davesdelightfuldigestables@fake-email.co.uk';

  container.appendChild(addressIcon);
  container.appendChild(address);
  container.appendChild(openingTimesIcon);
  container.appendChild(openingTimes);
  container.appendChild(phoneNumberIcon);
  container.appendChild(phoneNumber);
  container.appendChild(emailIcon);
  container.appendChild(email);
  main.appendChild(container);
  main.appendChild(map);
}