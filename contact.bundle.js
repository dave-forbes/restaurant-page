/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactPage: () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlVQUFpVTs7QUFFalU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZ3JpZCcpO1xuXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcbiAgbWFwLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDQ5NjYuMDA1MDA0NjkwODY5ITJkLTAuMTQwNzEzNTQ5NzY1NjMxMDghM2Q1MS41MTMxNzAwODcyNTgyNSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4NDg3NjA0ZDQ5ZjRiN2Y5YiUzQTB4ZTQ0ZTU3Y2M1MzdlNWRkMiEyc1NvaG8lMkMlMjBMb25kb24hNWUwITNtMiExc2VuITJzdWshNHYxNjkxNDI4Mjk5MjI4ITVtMiExc2VuITJzdWtcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPidcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb24tY29udGFpbmVyLWdyaWQnKTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgb3BlbmluZ1RpbWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYWRkcmVzc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IG9wZW5pbmdUaW1lc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IHBob25lTnVtYmVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuXG4gIGFkZHJlc3NJY29uLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLWxvY2F0aW9uLWRvdCBmYS1sZyc+PC9pPlwiO1xuICBvcGVuaW5nVGltZXNJY29uLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLWNsb2NrIGZhLWxnJz48L2k+XCI7XG4gIHBob25lTnVtYmVySWNvbi5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdmYS1zb2xpZCBmYS1waG9uZSBmYS1sZyc+PC9pPlwiO1xuICBlbWFpbEljb24uaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtc29saWQgZmEtZW52ZWxvcGUgZmEtbGcnPjwvaT5cIjtcblxuICBhZGRyZXNzLmlubmVySFRNTCA9ICcxMyBGYWtlIFN0cmVldCwgU29tZXdoZXJlIGluIFNvaG8sIExvbmRvbi4uLic7XG4gIHBob25lTnVtYmVyLmlubmVySFRNTCA9ICcxNDkxOTIxMzA0OTgnO1xuICBvcGVuaW5nVGltZXMuaW5uZXJIVE1MID0gJ01vbi1UaHVyczo1cG0tMTBwbSwgRnJpLVN1bjoxMWFtLTExcG0nO1xuICBlbWFpbC5pbm5lckhUTUwgPSAnZGF2ZXNkZWxpZ2h0ZnVsZGlnZXN0YWJsZXNAZmFrZS1lbWFpbC5jby51ayc7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3NJY29uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQob3BlbmluZ1RpbWVzSWNvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nVGltZXMpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXJJY29uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYXApO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==