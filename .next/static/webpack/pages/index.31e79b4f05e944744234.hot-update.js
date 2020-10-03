webpackHotUpdate_N_E("pages/index",{

/***/ "./components/input-pad.tsx":
/*!**********************************!*\
  !*** ./components/input-pad.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputPad; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/input-pad.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction InputPad(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('42px'),\n      fontSize = _useState[0],\n      setFontSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setFontSize(Number(props.input).toString().length > 11 ? \"\".concat(42 - props.input.toString().length, \"px\") : '42px');\n  }, [props.input]);\n\n  var formatInput = function formatInput(inputStr) {\n    var hasE = Number(inputStr).toString().includes('e');\n    var hasDot = inputStr.includes('.');\n    var result = '';\n\n    if (hasDot) {\n      result = Number(inputStr.split('.')[0]).toLocaleString() + '.' + inputStr.split('.')[1];\n    } else {\n      result = hasE ? Number(inputStr).toString() : Number(inputStr).toLocaleString();\n    }\n\n    return result;\n  };\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // width=\"300px\"\n  , {\n    align: \"center\",\n    height: \"60px\",\n    color: \"white\",\n    overflow: \"hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 1,\n    spacing: 1,\n    width: \"100%\",\n    p: 2,\n    fontSize: fontSize,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, formatInput(props.input))));\n}\n\n_s(InputPad, \"4UxuHbqweceuZuT91HxW4FfvpBk=\");\n\n_c = InputPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"InputPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC1wYWQudHN4PzRlYzciXSwibmFtZXMiOlsiSW5wdXRQYWQiLCJwcm9wcyIsInVzZVN0YXRlIiwiZm9udFNpemUiLCJzZXRGb250U2l6ZSIsInVzZUVmZmVjdCIsIk51bWJlciIsImlucHV0IiwidG9TdHJpbmciLCJsZW5ndGgiLCJmb3JtYXRJbnB1dCIsImlucHV0U3RyIiwiaGFzRSIsImluY2x1ZGVzIiwiaGFzRG90IiwicmVzdWx0Iiwic3BsaXQiLCJ0b0xvY2FsZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1lLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlDO0FBQUE7O0FBQUEsa0JBQ3RCQyxzREFBUSxDQUFDLE1BQUQsQ0FEYztBQUFBLE1BQy9DQyxRQUQrQztBQUFBLE1BQ3JDQyxXQURxQzs7QUFHdERDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxlQUFXLENBQ1RFLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDTSxLQUFQLENBQU4sQ0FBb0JDLFFBQXBCLEdBQStCQyxNQUEvQixHQUF3QyxFQUF4QyxhQUNPLEtBQUtSLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxRQUFaLEdBQXVCQyxNQURuQyxVQUVJLE1BSEssQ0FBWDtBQUtELEdBTlEsRUFNTixDQUFDUixLQUFLLENBQUNNLEtBQVAsQ0FOTSxDQUFUOztBQVFBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBc0I7QUFDeEMsUUFBTUMsSUFBSSxHQUFHTixNQUFNLENBQUNLLFFBQUQsQ0FBTixDQUFpQkgsUUFBakIsR0FBNEJLLFFBQTVCLENBQXFDLEdBQXJDLENBQWI7QUFDQSxRQUFNQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0UsUUFBVCxDQUFrQixHQUFsQixDQUFmO0FBQ0EsUUFBSUUsTUFBTSxHQUFHLEVBQWI7O0FBRUEsUUFBSUQsTUFBSixFQUFZO0FBQ1ZDLFlBQU0sR0FDSlQsTUFBTSxDQUFDSyxRQUFRLENBQUNLLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQUQsQ0FBTixDQUErQkMsY0FBL0IsS0FDQSxHQURBLEdBRUFOLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FIRjtBQUlELEtBTEQsTUFLTztBQUNMRCxZQUFNLEdBQUdILElBQUksR0FDVE4sTUFBTSxDQUFDSyxRQUFELENBQU4sQ0FBaUJILFFBQWpCLEVBRFMsR0FFVEYsTUFBTSxDQUFDSyxRQUFELENBQU4sQ0FBaUJNLGNBQWpCLEVBRko7QUFHRDs7QUFFRCxXQUFPRixNQUFQO0FBQ0QsR0FqQkQ7O0FBbUJBLFNBQ0UsTUFBQyxvREFBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUMsUUFGUjtBQUdFLFVBQU0sRUFBQyxNQUhUO0FBSUUsU0FBSyxFQUFDLE9BSlI7QUFLRSxZQUFRLEVBQUMsUUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywwREFBRDtBQUNFLFdBQU8sRUFBRSxDQURYO0FBRUUsV0FBTyxFQUFFLENBRlg7QUFHRSxTQUFLLEVBQUMsTUFIUjtBQUlFLEtBQUMsRUFBRSxDQUpMO0FBS0UsWUFBUSxFQUFFWixRQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Qk8sV0FBVyxDQUFDVCxLQUFLLENBQUNNLEtBQVAsQ0FBbkMsQ0FQRixDQVBGLENBREY7QUFtQkQ7O0dBakR1QlAsUTs7S0FBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaW5wdXQtcGFkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQsIEZsZXgsIEJveCwgUHNldWRvQm94LCBTaW1wbGVHcmlkIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW50ZXJmYWNlIElJbnB1dFBhZFByb3BzIHtcbiAgaW5wdXQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRQYWQocHJvcHM6IElJbnB1dFBhZFByb3BzKSB7XG4gIGNvbnN0IFtmb250U2l6ZSwgc2V0Rm9udFNpemVdID0gdXNlU3RhdGUoJzQycHgnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvbnRTaXplKFxuICAgICAgTnVtYmVyKHByb3BzLmlucHV0KS50b1N0cmluZygpLmxlbmd0aCA+IDExXG4gICAgICAgID8gYCR7NDIgLSBwcm9wcy5pbnB1dC50b1N0cmluZygpLmxlbmd0aH1weGBcbiAgICAgICAgOiAnNDJweCdcbiAgICApO1xuICB9LCBbcHJvcHMuaW5wdXRdKTtcblxuICBjb25zdCBmb3JtYXRJbnB1dCA9IChpbnB1dFN0cjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaGFzRSA9IE51bWJlcihpbnB1dFN0cikudG9TdHJpbmcoKS5pbmNsdWRlcygnZScpO1xuICAgIGNvbnN0IGhhc0RvdCA9IGlucHV0U3RyLmluY2x1ZGVzKCcuJyk7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuXG4gICAgaWYgKGhhc0RvdCkge1xuICAgICAgcmVzdWx0ID1cbiAgICAgICAgTnVtYmVyKGlucHV0U3RyLnNwbGl0KCcuJylbMF0pLnRvTG9jYWxlU3RyaW5nKCkgK1xuICAgICAgICAnLicgK1xuICAgICAgICBpbnB1dFN0ci5zcGxpdCgnLicpWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBoYXNFXG4gICAgICAgID8gTnVtYmVyKGlucHV0U3RyKS50b1N0cmluZygpXG4gICAgICAgIDogTnVtYmVyKGlucHV0U3RyKS50b0xvY2FsZVN0cmluZygpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgLy8gd2lkdGg9XCIzMDBweFwiXG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBoZWlnaHQ9XCI2MHB4XCJcbiAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgID5cbiAgICAgIDxTaW1wbGVHcmlkXG4gICAgICAgIGNvbHVtbnM9ezF9XG4gICAgICAgIHNwYWNpbmc9ezF9XG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIHA9ezJ9XG4gICAgICAgIGZvbnRTaXplPXtmb250U2l6ZX1cbiAgICAgID5cbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJyaWdodFwiPntmb3JtYXRJbnB1dChwcm9wcy5pbnB1dCl9PC9Cb3g+XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/input-pad.tsx\n");

/***/ })

})