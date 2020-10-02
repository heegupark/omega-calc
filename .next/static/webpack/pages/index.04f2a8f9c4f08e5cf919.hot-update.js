webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _number_pad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-pad */ \"./components/number-pad.tsx\");\n/* harmony import */ var _input_pad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-pad */ \"./components/input-pad.tsx\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar conatiner = {\n  width: '100%',\n  alignItem: 'center',\n  justifyContents: 'center',\n  height: '100vh'\n};\nfunction Main() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      width = _useState2[0],\n      setWidth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      height = _useState3[0],\n      setHeight = _useState3[1];\n\n  var handleSize = function handleSize() {\n    setWidth(window.innerWidth);\n    setHeight(window.innerHeight);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('resize', handleSize); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener('resize', handleSize);\n    };\n  });\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    style: conatiner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 1,\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(_input_pad__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    input: input,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(_number_pad__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setInput: setInput,\n    input: input,\n    height: height,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Main, \"nhstWNnYZs/7nV4zbtO88s1v6yU=\");\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbImNvbmF0aW5lciIsIndpZHRoIiwiYWxpZ25JdGVtIiwianVzdGlmeUNvbnRlbnRzIiwiaGVpZ2h0IiwiTWFpbiIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInNldFdpZHRoIiwic2V0SGVpZ2h0IiwiaGFuZGxlU2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUUsTUFEUztBQUVoQkMsV0FBUyxFQUFFLFFBRks7QUFHaEJDLGlCQUFlLEVBQUUsUUFIRDtBQUloQkMsUUFBTSxFQUFFO0FBSlEsQ0FBbEI7QUFPZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsQ0FBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFSEYsc0RBQVEsQ0FBQyxDQUFELENBRkw7QUFBQSxNQUV0QkwsS0FGc0I7QUFBQSxNQUVmUSxRQUZlOztBQUFBLG1CQUdESCxzREFBUSxDQUFDLENBQUQsQ0FIUDtBQUFBLE1BR3RCRixNQUhzQjtBQUFBLE1BR2RNLFNBSGM7O0FBSzdCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJGLFlBQVEsQ0FBQ0csTUFBTSxDQUFDQyxVQUFSLENBQVI7QUFDQUgsYUFBUyxDQUFDRSxNQUFNLENBQUNFLFdBQVIsQ0FBVDtBQUNELEdBSEQ7O0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkSCxVQUFNLENBQUNJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTCxVQUFsQyxFQURjLENBRWQ7O0FBQ0EsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNOLFVBQXJDO0FBQ0QsS0FGRDtBQUdELEdBTlEsQ0FBVDtBQVFBLFNBQ0UsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRVgsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFZLFdBQU8sRUFBRSxDQUFyQjtBQUF3QixXQUFPLEVBQUUsQ0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBVSxTQUFLLEVBQUVPLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFXLFlBQVEsRUFBRUMsUUFBckI7QUFBK0IsU0FBSyxFQUFFRCxLQUF0QztBQUE2QyxVQUFNLEVBQUVILE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREYsQ0FERjtBQVlEOztHQTlCdUJDLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGbGV4LCBCb3gsIFNpbXBsZUdyaWQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IE51bWJlclBhZCBmcm9tICcuL251bWJlci1wYWQnO1xuaW1wb3J0IElucHV0UGFkIGZyb20gJy4vaW5wdXQtcGFkJztcblxuY29uc3QgY29uYXRpbmVyID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBhbGlnbkl0ZW06ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudHM6ICdjZW50ZXInLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlU2l6ZSA9ICgpID0+IHtcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgc2V0SGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlU2l6ZSk7XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVTaXplKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4IHN0eWxlPXtjb25hdGluZXJ9PlxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17MX0gc3BhY2luZz17Mn0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPElucHV0UGFkIGlucHV0PXtpbnB1dH0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPE51bWJlclBhZCBzZXRJbnB1dD17c2V0SW5wdXR9IGlucHV0PXtpbnB1dH0gaGVpZ2h0PXtoZWlnaHR9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})