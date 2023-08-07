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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPage: () => (/* binding */ menuPage)
/* harmony export */ });
function menuPage() {
  const main = document.querySelector('main');
  main.innerHTML = '';
  const starterTitle = document.createElement('h4');
  const mainsTitle = document.createElement('h4');
  const desertsTitle = document.createElement('h4');
  const starter1 = document.createElement('p');
  const starter2 = document.createElement('p');
  const starter3 = document.createElement('p');
  const main1 = document.createElement('p');
  const main2 = document.createElement('p');
  const main3 = document.createElement('p');
  const desert1 = document.createElement('p');
  const desert2 = document.createElement('p');
  const desert3 = document.createElement('p');

  starterTitle.textContent = 'Starters';
  starter1.innerHTML = '<strong>Fresh Garden Salad -</strong> A mix of crisp lettuce, cherry tomatoes, cucumber, and bell peppers served with a tangy balsamic vinaigrette.';
  starter2.innerHTML = '<strong>Zesty Quinoa Avocado Bites -</strong> Quinoa and avocado mixed with a hint of lime, cilantro, and diced red onions, served on a bed of baby spinach.';
  starter3.innerHTML = '<strong>Roasted Garlic Hummus Platter -</strong> Creamy homemade hummus served with a variety of colorful veggie sticks and whole wheat pita bread.';
  mainsTitle.innerHTML = 'Mains';
  main1.innerHTML = '<strong>Grilled Lemon Herb Chicken -</strong> Tender chicken breast marinated in a zesty lemon-herb blend, served with a side of steamed broccoli and quinoa.';
  main2.innerHTML = '<strong>Veggie Stir-Fry -</strong> Fresh seasonal vegetables sautéed in a light soy-ginger sauce, served over brown rice or cauliflower rice.';
  main3.innerHTML = '<strong>Baked Salmon with Dill Sauce -</strong> Succulent salmon fillet baked to perfection and topped with a creamy dill sauce, accompanied by roasted sweet potatoes and asparagus.';
  desertsTitle.innerHTML = 'Desserts';
  desert1.innerHTML = '<strong>Fresh Fruit Parfait -</strong> Layers of mixed berries, kiwi, and tropical fruits, topped with Greek yogurt and a sprinkle of granola for added crunch.'
  desert2.innerHTML = '<strong>Dark Chocolate-Dipped Strawberries -</strong> Juicy strawberries dipped in rich, dark chocolate, a guilt-free indulgence.';
  desert3.innerHTML = '<strong>Chia Seed Pudding -</strong> A delightful blend of chia seeds and almond milk, topped with fresh mango slices and a drizzle of honey.';

  const arr = [starterTitle, starter1, starter2, starter3, mainsTitle, main1, main2, main3, desertsTitle, desert1, desert2, desert3];

  arr.forEach(item => main.appendChild(item));

}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgY29uc3Qgc3RhcnRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgbWFpbnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbnN0IGRlc2VydHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbnN0IHN0YXJ0ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBzdGFydGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgc3RhcnRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1haW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBtYWluMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbWFpbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlc2VydDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlc2VydDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlc2VydDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgc3RhcnRlclRpdGxlLnRleHRDb250ZW50ID0gJ1N0YXJ0ZXJzJztcbiAgc3RhcnRlcjEuaW5uZXJIVE1MID0gJzxzdHJvbmc+RnJlc2ggR2FyZGVuIFNhbGFkIC08L3N0cm9uZz4gQSBtaXggb2YgY3Jpc3AgbGV0dHVjZSwgY2hlcnJ5IHRvbWF0b2VzLCBjdWN1bWJlciwgYW5kIGJlbGwgcGVwcGVycyBzZXJ2ZWQgd2l0aCBhIHRhbmd5IGJhbHNhbWljIHZpbmFpZ3JldHRlLic7XG4gIHN0YXJ0ZXIyLmlubmVySFRNTCA9ICc8c3Ryb25nPlplc3R5IFF1aW5vYSBBdm9jYWRvIEJpdGVzIC08L3N0cm9uZz4gUXVpbm9hIGFuZCBhdm9jYWRvIG1peGVkIHdpdGggYSBoaW50IG9mIGxpbWUsIGNpbGFudHJvLCBhbmQgZGljZWQgcmVkIG9uaW9ucywgc2VydmVkIG9uIGEgYmVkIG9mIGJhYnkgc3BpbmFjaC4nO1xuICBzdGFydGVyMy5pbm5lckhUTUwgPSAnPHN0cm9uZz5Sb2FzdGVkIEdhcmxpYyBIdW1tdXMgUGxhdHRlciAtPC9zdHJvbmc+IENyZWFteSBob21lbWFkZSBodW1tdXMgc2VydmVkIHdpdGggYSB2YXJpZXR5IG9mIGNvbG9yZnVsIHZlZ2dpZSBzdGlja3MgYW5kIHdob2xlIHdoZWF0IHBpdGEgYnJlYWQuJztcbiAgbWFpbnNUaXRsZS5pbm5lckhUTUwgPSAnTWFpbnMnO1xuICBtYWluMS5pbm5lckhUTUwgPSAnPHN0cm9uZz5HcmlsbGVkIExlbW9uIEhlcmIgQ2hpY2tlbiAtPC9zdHJvbmc+IFRlbmRlciBjaGlja2VuIGJyZWFzdCBtYXJpbmF0ZWQgaW4gYSB6ZXN0eSBsZW1vbi1oZXJiIGJsZW5kLCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygc3RlYW1lZCBicm9jY29saSBhbmQgcXVpbm9hLic7XG4gIG1haW4yLmlubmVySFRNTCA9ICc8c3Ryb25nPlZlZ2dpZSBTdGlyLUZyeSAtPC9zdHJvbmc+IEZyZXNoIHNlYXNvbmFsIHZlZ2V0YWJsZXMgc2F1dMOpZWQgaW4gYSBsaWdodCBzb3ktZ2luZ2VyIHNhdWNlLCBzZXJ2ZWQgb3ZlciBicm93biByaWNlIG9yIGNhdWxpZmxvd2VyIHJpY2UuJztcbiAgbWFpbjMuaW5uZXJIVE1MID0gJzxzdHJvbmc+QmFrZWQgU2FsbW9uIHdpdGggRGlsbCBTYXVjZSAtPC9zdHJvbmc+IFN1Y2N1bGVudCBzYWxtb24gZmlsbGV0IGJha2VkIHRvIHBlcmZlY3Rpb24gYW5kIHRvcHBlZCB3aXRoIGEgY3JlYW15IGRpbGwgc2F1Y2UsIGFjY29tcGFuaWVkIGJ5IHJvYXN0ZWQgc3dlZXQgcG90YXRvZXMgYW5kIGFzcGFyYWd1cy4nO1xuICBkZXNlcnRzVGl0bGUuaW5uZXJIVE1MID0gJ0Rlc3NlcnRzJztcbiAgZGVzZXJ0MS5pbm5lckhUTUwgPSAnPHN0cm9uZz5GcmVzaCBGcnVpdCBQYXJmYWl0IC08L3N0cm9uZz4gTGF5ZXJzIG9mIG1peGVkIGJlcnJpZXMsIGtpd2ksIGFuZCB0cm9waWNhbCBmcnVpdHMsIHRvcHBlZCB3aXRoIEdyZWVrIHlvZ3VydCBhbmQgYSBzcHJpbmtsZSBvZiBncmFub2xhIGZvciBhZGRlZCBjcnVuY2guJ1xuICBkZXNlcnQyLmlubmVySFRNTCA9ICc8c3Ryb25nPkRhcmsgQ2hvY29sYXRlLURpcHBlZCBTdHJhd2JlcnJpZXMgLTwvc3Ryb25nPiBKdWljeSBzdHJhd2JlcnJpZXMgZGlwcGVkIGluIHJpY2gsIGRhcmsgY2hvY29sYXRlLCBhIGd1aWx0LWZyZWUgaW5kdWxnZW5jZS4nO1xuICBkZXNlcnQzLmlubmVySFRNTCA9ICc8c3Ryb25nPkNoaWEgU2VlZCBQdWRkaW5nIC08L3N0cm9uZz4gQSBkZWxpZ2h0ZnVsIGJsZW5kIG9mIGNoaWEgc2VlZHMgYW5kIGFsbW9uZCBtaWxrLCB0b3BwZWQgd2l0aCBmcmVzaCBtYW5nbyBzbGljZXMgYW5kIGEgZHJpenpsZSBvZiBob25leS4nO1xuXG4gIGNvbnN0IGFyciA9IFtzdGFydGVyVGl0bGUsIHN0YXJ0ZXIxLCBzdGFydGVyMiwgc3RhcnRlcjMsIG1haW5zVGl0bGUsIG1haW4xLCBtYWluMiwgbWFpbjMsIGRlc2VydHNUaXRsZSwgZGVzZXJ0MSwgZGVzZXJ0MiwgZGVzZXJ0M107XG5cbiAgYXJyLmZvckVhY2goaXRlbSA9PiBtYWluLmFwcGVuZENoaWxkKGl0ZW0pKTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==