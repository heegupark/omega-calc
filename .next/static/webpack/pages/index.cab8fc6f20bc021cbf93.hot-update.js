webpackHotUpdate_N_E("pages/index",{

/***/ "./components/input-pad.tsx":
/*!**********************************!*\
  !*** ./components/input-pad.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputPad; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/input-pad.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction InputPad(props) {\n  var fontSize = '';\n\n  switch (true) {\n    case props.input.toString().length > 15:\n      fontSize = '22px';\n      break;\n\n    case props.input.toString().length > 10:\n      fontSize = '32px';\n      break;\n\n    default:\n      fontSize = '42px';\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    width: \"300px\",\n    align: \"center\",\n    height: \"50px\",\n    justify: \"row-end\",\n    color: \"white\",\n    overflow: \"scroll\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 1,\n    spacing: 1,\n    width: \"100%\",\n    p: 2,\n    fontSize: fontSize,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, props.input.toLocaleString())));\n}\n_c = InputPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"InputPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC1wYWQudHN4PzRlYzciXSwibmFtZXMiOlsiSW5wdXRQYWQiLCJwcm9wcyIsImZvbnRTaXplIiwiaW5wdXQiLCJ0b1N0cmluZyIsImxlbmd0aCIsInRvTG9jYWxlU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQU1lLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlDO0FBQ3RELE1BQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFVBQVEsSUFBUjtBQUNFLFNBQUtELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxRQUFaLEdBQXVCQyxNQUF2QixHQUFnQyxFQUFyQztBQUNFSCxjQUFRLEdBQUcsTUFBWDtBQUNBOztBQUNGLFNBQUtELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxRQUFaLEdBQXVCQyxNQUF2QixHQUFnQyxFQUFyQztBQUNFSCxjQUFRLEdBQUcsTUFBWDtBQUNBOztBQUNGO0FBQ0VBLGNBQVEsR0FBRyxNQUFYO0FBUko7O0FBVUEsU0FDRSxNQUFDLG9EQUFEO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxTQUFLLEVBQUMsUUFGUjtBQUdFLFVBQU0sRUFBQyxNQUhUO0FBSUUsV0FBTyxFQUFDLFNBSlY7QUFLRSxTQUFLLEVBQUMsT0FMUjtBQU1FLFlBQVEsRUFBQyxRQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLDBEQUFEO0FBQ0UsV0FBTyxFQUFFLENBRFg7QUFFRSxXQUFPLEVBQUUsQ0FGWDtBQUdFLFNBQUssRUFBQyxNQUhSO0FBSUUsS0FBQyxFQUFFLENBSkw7QUFLRSxZQUFRLEVBQUVBLFFBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUcsY0FBWixFQUF4QixDQVBGLENBUkYsQ0FERjtBQW9CRDtLQWhDdUJOLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0LXBhZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0LCBGbGV4LCBCb3gsIFBzZXVkb0JveCwgU2ltcGxlR3JpZCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmludGVyZmFjZSBJSW5wdXRQYWRQcm9wcyB7XG4gIGlucHV0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0UGFkKHByb3BzOiBJSW5wdXRQYWRQcm9wcykge1xuICBsZXQgZm9udFNpemUgPSAnJztcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBwcm9wcy5pbnB1dC50b1N0cmluZygpLmxlbmd0aCA+IDE1OlxuICAgICAgZm9udFNpemUgPSAnMjJweCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIHByb3BzLmlucHV0LnRvU3RyaW5nKCkubGVuZ3RoID4gMTA6XG4gICAgICBmb250U2l6ZSA9ICczMnB4JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmb250U2l6ZSA9ICc0MnB4JztcbiAgfVxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAganVzdGlmeT1cInJvdy1lbmRcIlxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICBvdmVyZmxvdz1cInNjcm9sbFwiXG4gICAgPlxuICAgICAgPFNpbXBsZUdyaWRcbiAgICAgICAgY29sdW1ucz17MX1cbiAgICAgICAgc3BhY2luZz17MX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgcD17Mn1cbiAgICAgICAgZm9udFNpemU9e2ZvbnRTaXplfVxuICAgICAgPlxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cInJpZ2h0XCI+e3Byb3BzLmlucHV0LnRvTG9jYWxlU3RyaW5nKCl9PC9Cb3g+XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/input-pad.tsx\n");

/***/ })

})