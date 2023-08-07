export function contactPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const map = document.createElement('div');

  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4966.005004690869!2d-0.14071354976563108!3d51.51317008725825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4b7f9b%3A0xe44e57cc537e5dd2!2sSoho%2C%20London!5e0!3m2!1sen!2suk!4v1691428299228!5m2!1sen!2suk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  main.appendChild(map);

  const address = document.createElement('p');
  const phoneNumber = document.createElement('p');

  address.innerHTML = '<strong>Our Address is -</strong> 13 Fake Street, Somewhere in Soho, London...';
  phoneNumber.innerHTML = '<strong>Our phone number is -</strong> 149192130498';

  main.appendChild(address);
  main.appendChild(phoneNumber);
  address.style.cssText = "margin: 1rem 0;"
}