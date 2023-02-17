"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/astro";
exports.ids = ["pages/api/astro"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/astro.js":
/*!****************************!*\
  !*** ./pages/api/astro.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    const { priceMin , priceMax , gender , age , hobbies  } = req.body;\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: generatePrompt(priceMin, priceMax, gender, age, hobbies),\n        temperature: 0.6,\n        max_tokens: 2048\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n}\nfunction generatePrompt(priceMin, priceMax, gender, age, hobbies) {\n    return `hi hwllo how are you`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXN0cm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLElBQUcsRUFBRUMsUUFBTyxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFDN0QsTUFBTUMsYUFBYSxNQUFNVCxPQUFPVSxnQkFBZ0IsQ0FBQztRQUMvQ0MsT0FBTztRQUNQQyxRQUFRQyxlQUFlVixVQUFVQyxVQUFVQyxRQUFRQyxLQUFLQztRQUN4RE8sYUFBYTtRQUNiQyxZQUFZO0lBQ2Q7SUFDQWIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxRQUFRVCxXQUFXVSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7SUFBQztBQUNqRSxDQUFDO0FBQ0QsU0FBU1IsZUFBZVYsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFDaEUsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9hc3Ryby5qcz9lMGNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gJ29wZW5haSc7XHJcblxyXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXHJcbn0pO1xyXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBwcmljZU1pbiwgcHJpY2VNYXgsIGdlbmRlciwgYWdlLCBob2JiaWVzIH0gPSByZXEuYm9keTtcclxuICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xyXG4gICAgbW9kZWw6ICd0ZXh0LWRhdmluY2ktMDAzJyxcclxuICAgIHByb21wdDogZ2VuZXJhdGVQcm9tcHQocHJpY2VNaW4sIHByaWNlTWF4LCBnZW5kZXIsIGFnZSwgaG9iYmllcyksXHJcbiAgICB0ZW1wZXJhdHVyZTogMC42LFxyXG4gICAgbWF4X3Rva2VuczogMjA0OCxcclxuICB9KTtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChwcmljZU1pbiwgcHJpY2VNYXgsIGdlbmRlciwgYWdlLCBob2JiaWVzKSB7XHJcbiAgcmV0dXJuIGBoaSBod2xsbyBob3cgYXJlIHlvdWA7XHJcbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJwcmljZU1pbiIsInByaWNlTWF4IiwiZ2VuZGVyIiwiYWdlIiwiaG9iYmllcyIsImJvZHkiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwiZ2VuZXJhdGVQcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/astro.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/astro.js"));
module.exports = __webpack_exports__;

})();