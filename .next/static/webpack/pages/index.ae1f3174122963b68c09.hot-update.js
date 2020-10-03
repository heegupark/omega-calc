webpackHotUpdate_N_E("pages/index",{

/***/ "./components/input-pad.tsx":
/*!**********************************!*\
  !*** ./components/input-pad.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputPad; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/input-pad.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction InputPad(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('42px'),\n      fontSize = _useState[0],\n      setFontSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!props.isOutOfRange) {\n      setFontSize(Number(props.input).toString().length > 11 ? \"\".concat(42 - props.input.toString().length, \"px\") : '42px');\n    }\n  }, [props.input]);\n\n  var formatInput = function formatInput(inputStr) {\n    if (props.isOutOfRange) {\n      // setFontSize('42px');\n      return 'Out of Range';\n    }\n\n    var hasE = Number(inputStr).toString().includes('e');\n    var hasDot = inputStr.includes('.');\n    var result = '';\n\n    if (hasDot) {\n      result = Number(inputStr.split('.')[0]).toLocaleString() + '.' + inputStr.split('.')[1];\n    } else {\n      result = hasE ? Number(inputStr).toString() : Number(inputStr).toLocaleString();\n    }\n\n    return result;\n  };\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"] // width=\"300px\"\n  , {\n    align: \"center\",\n    height: \"60px\",\n    color: \"white\",\n    overflow: \"hidden\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 1,\n    spacing: 1,\n    width: \"100%\",\n    p: 2,\n    fontSize: fontSize,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, formatInput(props.input))));\n}\n\n_s(InputPad, \"4UxuHbqweceuZuT91HxW4FfvpBk=\");\n\n_c = InputPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"InputPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC1wYWQudHN4PzRlYzciXSwibmFtZXMiOlsiSW5wdXRQYWQiLCJwcm9wcyIsInVzZVN0YXRlIiwiZm9udFNpemUiLCJzZXRGb250U2l6ZSIsInVzZUVmZmVjdCIsImlzT3V0T2ZSYW5nZSIsIk51bWJlciIsImlucHV0IiwidG9TdHJpbmciLCJsZW5ndGgiLCJmb3JtYXRJbnB1dCIsImlucHV0U3RyIiwiaGFzRSIsImluY2x1ZGVzIiwiaGFzRG90IiwicmVzdWx0Iiwic3BsaXQiLCJ0b0xvY2FsZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9lLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlDO0FBQUE7O0FBQUEsa0JBQ3RCQyxzREFBUSxDQUFDLE1BQUQsQ0FEYztBQUFBLE1BQy9DQyxRQUQrQztBQUFBLE1BQ3JDQyxXQURxQzs7QUFHdERDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0osS0FBSyxDQUFDSyxZQUFYLEVBQXlCO0FBQ3ZCRixpQkFBVyxDQUNURyxNQUFNLENBQUNOLEtBQUssQ0FBQ08sS0FBUCxDQUFOLENBQW9CQyxRQUFwQixHQUErQkMsTUFBL0IsR0FBd0MsRUFBeEMsYUFDTyxLQUFLVCxLQUFLLENBQUNPLEtBQU4sQ0FBWUMsUUFBWixHQUF1QkMsTUFEbkMsVUFFSSxNQUhLLENBQVg7QUFLRDtBQUNGLEdBUlEsRUFRTixDQUFDVCxLQUFLLENBQUNPLEtBQVAsQ0FSTSxDQUFUOztBQVVBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBc0I7QUFDeEMsUUFBSVgsS0FBSyxDQUFDSyxZQUFWLEVBQXdCO0FBQ3RCO0FBQ0EsYUFBTyxjQUFQO0FBQ0Q7O0FBRUQsUUFBTU8sSUFBSSxHQUFHTixNQUFNLENBQUNLLFFBQUQsQ0FBTixDQUFpQkgsUUFBakIsR0FBNEJLLFFBQTVCLENBQXFDLEdBQXJDLENBQWI7QUFDQSxRQUFNQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0UsUUFBVCxDQUFrQixHQUFsQixDQUFmO0FBQ0EsUUFBSUUsTUFBTSxHQUFHLEVBQWI7O0FBRUEsUUFBSUQsTUFBSixFQUFZO0FBQ1ZDLFlBQU0sR0FDSlQsTUFBTSxDQUFDSyxRQUFRLENBQUNLLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQUQsQ0FBTixDQUErQkMsY0FBL0IsS0FDQSxHQURBLEdBRUFOLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FIRjtBQUlELEtBTEQsTUFLTztBQUNMRCxZQUFNLEdBQUdILElBQUksR0FDVE4sTUFBTSxDQUFDSyxRQUFELENBQU4sQ0FBaUJILFFBQWpCLEVBRFMsR0FFVEYsTUFBTSxDQUFDSyxRQUFELENBQU4sQ0FBaUJNLGNBQWpCLEVBRko7QUFHRDs7QUFFRCxXQUFPRixNQUFQO0FBQ0QsR0F0QkQ7O0FBd0JBLFNBQ0UsTUFBQyxvREFBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUMsUUFGUjtBQUdFLFVBQU0sRUFBQyxNQUhUO0FBSUUsU0FBSyxFQUFDLE9BSlI7QUFLRSxZQUFRLEVBQUMsUUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQywwREFBRDtBQUNFLFdBQU8sRUFBRSxDQURYO0FBRUUsV0FBTyxFQUFFLENBRlg7QUFHRSxTQUFLLEVBQUMsTUFIUjtBQUlFLEtBQUMsRUFBRSxDQUpMO0FBS0UsWUFBUSxFQUFFYixRQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QlEsV0FBVyxDQUFDVixLQUFLLENBQUNPLEtBQVAsQ0FBbkMsQ0FQRixDQVBGLENBREY7QUFtQkQ7O0dBeER1QlIsUTs7S0FBQUEsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvaW5wdXQtcGFkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQsIEZsZXgsIEJveCwgUHNldWRvQm94LCBTaW1wbGVHcmlkIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW50ZXJmYWNlIElJbnB1dFBhZFByb3BzIHtcbiAgaW5wdXQ6IHN0cmluZztcbiAgaXNPdXRPZlJhbmdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dFBhZChwcm9wczogSUlucHV0UGFkUHJvcHMpIHtcbiAgY29uc3QgW2ZvbnRTaXplLCBzZXRGb250U2l6ZV0gPSB1c2VTdGF0ZSgnNDJweCcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5pc091dE9mUmFuZ2UpIHtcbiAgICAgIHNldEZvbnRTaXplKFxuICAgICAgICBOdW1iZXIocHJvcHMuaW5wdXQpLnRvU3RyaW5nKCkubGVuZ3RoID4gMTFcbiAgICAgICAgICA/IGAkezQyIC0gcHJvcHMuaW5wdXQudG9TdHJpbmcoKS5sZW5ndGh9cHhgXG4gICAgICAgICAgOiAnNDJweCdcbiAgICAgICk7XG4gICAgfVxuICB9LCBbcHJvcHMuaW5wdXRdKTtcblxuICBjb25zdCBmb3JtYXRJbnB1dCA9IChpbnB1dFN0cjogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHByb3BzLmlzT3V0T2ZSYW5nZSkge1xuICAgICAgLy8gc2V0Rm9udFNpemUoJzQycHgnKTtcbiAgICAgIHJldHVybiAnT3V0IG9mIFJhbmdlJztcbiAgICB9XG5cbiAgICBjb25zdCBoYXNFID0gTnVtYmVyKGlucHV0U3RyKS50b1N0cmluZygpLmluY2x1ZGVzKCdlJyk7XG4gICAgY29uc3QgaGFzRG90ID0gaW5wdXRTdHIuaW5jbHVkZXMoJy4nKTtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG5cbiAgICBpZiAoaGFzRG90KSB7XG4gICAgICByZXN1bHQgPVxuICAgICAgICBOdW1iZXIoaW5wdXRTdHIuc3BsaXQoJy4nKVswXSkudG9Mb2NhbGVTdHJpbmcoKSArXG4gICAgICAgICcuJyArXG4gICAgICAgIGlucHV0U3RyLnNwbGl0KCcuJylbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGhhc0VcbiAgICAgICAgPyBOdW1iZXIoaW5wdXRTdHIpLnRvU3RyaW5nKClcbiAgICAgICAgOiBOdW1iZXIoaW5wdXRTdHIpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICAvLyB3aWR0aD1cIjMwMHB4XCJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIGhlaWdodD1cIjYwcHhcIlxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgPlxuICAgICAgPFNpbXBsZUdyaWRcbiAgICAgICAgY29sdW1ucz17MX1cbiAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgcD17Mn1cbiAgICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgPlxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cInJpZ2h0XCI+e2Zvcm1hdElucHV0KHByb3BzLmlucHV0KX08L0JveD5cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input-pad.tsx\n");

/***/ })

})