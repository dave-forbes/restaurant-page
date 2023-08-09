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
  main.classList.remove('contact-grid');
  main.innerHTML = '';

  const arr = [];

  createMenuTitle('Starters');
  createMenuItem('Fresh Garden Salad', "A mix of crisp lettuce, cherry tomatoes, cucumber, and bell peppers served with a tangy balsamic vinaigrette.");
  createMenuItem('Zesty Quinoa Avocado Bites', "Quinoa and avocado mixed with a hint of lime, cilantro, and diced red onions, served on a bed of baby spinach.");
  createMenuItem('Roasted Garlic Hummus Platter', "Creamy homemade hummus served with a variety of colorful veggie sticks and whole wheat pita bread.");
  createMenuTitle('Mains');
  createMenuItem('Grilled Lemon Herb Chicken', "Tender chicken breast marinated in a zesty lemon-herb blend, served with a side of steamed broccoli and quinoa.");
  createMenuItem('Veggie Stir-Fry', "Fresh seasonal vegetables sautéed in a light soy-ginger sauce, served over brown rice or cauliflower rice.");
  createMenuItem('Baked Salmon with Dill Sauce', "Succulent salmon fillet baked to perfection and topped with a creamy dill sauce, accompanied by roasted sweet potatoes and asparagus.");
  createMenuTitle('Desserts');
  createMenuItem('Fresh Fruit Parfait', "Layers of mixed berries, kiwi, and tropical fruits, topped with Greek yogurt and a sprinkle of granola for added crunch.");
  createMenuItem('Dark Chocolate-Dipped Strawberries', "Juicy strawberries dipped in rich, dark chocolate, a guilt-free indulgence.");
  createMenuItem('Chia Seed Pudding', 'A delightful blend of chia seeds and almond milk, topped with fresh mango slices and a drizzle of honey.');

  function createMenuItem(Title, Description) {
    const menuItem = document.createElement('p');
    menuItem.innerHTML = `<strong>${Title} - </strong>${Description}`
    return arr.push(menuItem);
  }

  function createMenuTitle(title) {
    const titleItem = document.createElement('h4');
    titleItem.textContent = title;
    return arr.push(titleItem);
  }

  arr.forEach(item => main.appendChild(item));

}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxPQUFPLGFBQWEsWUFBWTtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0LWdyaWQnKTtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBhcnIgPSBbXTtcblxuICBjcmVhdGVNZW51VGl0bGUoJ1N0YXJ0ZXJzJyk7XG4gIGNyZWF0ZU1lbnVJdGVtKCdGcmVzaCBHYXJkZW4gU2FsYWQnLCBcIkEgbWl4IG9mIGNyaXNwIGxldHR1Y2UsIGNoZXJyeSB0b21hdG9lcywgY3VjdW1iZXIsIGFuZCBiZWxsIHBlcHBlcnMgc2VydmVkIHdpdGggYSB0YW5neSBiYWxzYW1pYyB2aW5haWdyZXR0ZS5cIik7XG4gIGNyZWF0ZU1lbnVJdGVtKCdaZXN0eSBRdWlub2EgQXZvY2FkbyBCaXRlcycsIFwiUXVpbm9hIGFuZCBhdm9jYWRvIG1peGVkIHdpdGggYSBoaW50IG9mIGxpbWUsIGNpbGFudHJvLCBhbmQgZGljZWQgcmVkIG9uaW9ucywgc2VydmVkIG9uIGEgYmVkIG9mIGJhYnkgc3BpbmFjaC5cIik7XG4gIGNyZWF0ZU1lbnVJdGVtKCdSb2FzdGVkIEdhcmxpYyBIdW1tdXMgUGxhdHRlcicsIFwiQ3JlYW15IGhvbWVtYWRlIGh1bW11cyBzZXJ2ZWQgd2l0aCBhIHZhcmlldHkgb2YgY29sb3JmdWwgdmVnZ2llIHN0aWNrcyBhbmQgd2hvbGUgd2hlYXQgcGl0YSBicmVhZC5cIik7XG4gIGNyZWF0ZU1lbnVUaXRsZSgnTWFpbnMnKTtcbiAgY3JlYXRlTWVudUl0ZW0oJ0dyaWxsZWQgTGVtb24gSGVyYiBDaGlja2VuJywgXCJUZW5kZXIgY2hpY2tlbiBicmVhc3QgbWFyaW5hdGVkIGluIGEgemVzdHkgbGVtb24taGVyYiBibGVuZCwgc2VydmVkIHdpdGggYSBzaWRlIG9mIHN0ZWFtZWQgYnJvY2NvbGkgYW5kIHF1aW5vYS5cIik7XG4gIGNyZWF0ZU1lbnVJdGVtKCdWZWdnaWUgU3Rpci1GcnknLCBcIkZyZXNoIHNlYXNvbmFsIHZlZ2V0YWJsZXMgc2F1dMOpZWQgaW4gYSBsaWdodCBzb3ktZ2luZ2VyIHNhdWNlLCBzZXJ2ZWQgb3ZlciBicm93biByaWNlIG9yIGNhdWxpZmxvd2VyIHJpY2UuXCIpO1xuICBjcmVhdGVNZW51SXRlbSgnQmFrZWQgU2FsbW9uIHdpdGggRGlsbCBTYXVjZScsIFwiU3VjY3VsZW50IHNhbG1vbiBmaWxsZXQgYmFrZWQgdG8gcGVyZmVjdGlvbiBhbmQgdG9wcGVkIHdpdGggYSBjcmVhbXkgZGlsbCBzYXVjZSwgYWNjb21wYW5pZWQgYnkgcm9hc3RlZCBzd2VldCBwb3RhdG9lcyBhbmQgYXNwYXJhZ3VzLlwiKTtcbiAgY3JlYXRlTWVudVRpdGxlKCdEZXNzZXJ0cycpO1xuICBjcmVhdGVNZW51SXRlbSgnRnJlc2ggRnJ1aXQgUGFyZmFpdCcsIFwiTGF5ZXJzIG9mIG1peGVkIGJlcnJpZXMsIGtpd2ksIGFuZCB0cm9waWNhbCBmcnVpdHMsIHRvcHBlZCB3aXRoIEdyZWVrIHlvZ3VydCBhbmQgYSBzcHJpbmtsZSBvZiBncmFub2xhIGZvciBhZGRlZCBjcnVuY2guXCIpO1xuICBjcmVhdGVNZW51SXRlbSgnRGFyayBDaG9jb2xhdGUtRGlwcGVkIFN0cmF3YmVycmllcycsIFwiSnVpY3kgc3RyYXdiZXJyaWVzIGRpcHBlZCBpbiByaWNoLCBkYXJrIGNob2NvbGF0ZSwgYSBndWlsdC1mcmVlIGluZHVsZ2VuY2UuXCIpO1xuICBjcmVhdGVNZW51SXRlbSgnQ2hpYSBTZWVkIFB1ZGRpbmcnLCAnQSBkZWxpZ2h0ZnVsIGJsZW5kIG9mIGNoaWEgc2VlZHMgYW5kIGFsbW9uZCBtaWxrLCB0b3BwZWQgd2l0aCBmcmVzaCBtYW5nbyBzbGljZXMgYW5kIGEgZHJpenpsZSBvZiBob25leS4nKTtcblxuICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShUaXRsZSwgRGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbS5pbm5lckhUTUwgPSBgPHN0cm9uZz4ke1RpdGxlfSAtIDwvc3Ryb25nPiR7RGVzY3JpcHRpb259YFxuICAgIHJldHVybiBhcnIucHVzaChtZW51SXRlbSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNZW51VGl0bGUodGl0bGUpIHtcbiAgICBjb25zdCB0aXRsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHRpdGxlSXRlbS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHJldHVybiBhcnIucHVzaCh0aXRsZUl0ZW0pO1xuICB9XG5cbiAgYXJyLmZvckVhY2goaXRlbSA9PiBtYWluLmFwcGVuZENoaWxkKGl0ZW0pKTtcblxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=