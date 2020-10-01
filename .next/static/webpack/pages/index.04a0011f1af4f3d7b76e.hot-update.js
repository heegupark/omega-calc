webpackHotUpdate_N_E("pages/index",{

/***/ "./components/number-pad.tsx":
/*!***********************************!*\
  !*** ./components/number-pad.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumberPad; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/number-pad.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    box: {\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    number: {\n      cursor: 'pointer',\n      backgroundColor: 'rgb(51,51,51)',\n      width: '70px',\n      height: '70px',\n      borderRadius: '50%',\n      color: 'white',\n      fontSize: '36px',\n      alignItems: 'center',\n      justifyContent: 'center',\n      '&:hover': {\n        backgroundColor: 'rgb(75,75,75)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(115,115,115)'\n      }\n    },\n    sign: {\n      backgroundColor: 'rgb(166,166,166)',\n      color: 'black',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    selectedSymbol: {\n      backgroundColor: 'white',\n      color: 'rgb(242,162,60)',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    symbol: {\n      backgroundColor: 'rgb(242,162,60)',\n      '&:hover': {\n        backgroundColor: 'rgb(243,180,100)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(244,200,149)'\n      }\n    }\n  });\n});\nfunction NumberPad(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      prev = _useState[0],\n      setPrev = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      symbol = _useState3[0],\n      setSymbol = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      symbolFlag = _useState4[0],\n      setSymbolFlag = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      flag = _useState5[0],\n      setFlag = _useState5[1];\n\n  var classes = useStyles();\n  var keypad = [{\n    value: 'AC',\n    type: 'sign'\n  }, {\n    value: '+/−',\n    type: 'sign'\n  }, {\n    value: '%',\n    type: 'sign'\n  }, {\n    value: '÷',\n    type: 'symbol'\n  }, {\n    value: '7',\n    type: 'number'\n  }, {\n    value: '8',\n    type: 'number'\n  }, {\n    value: '9',\n    type: 'number'\n  }, {\n    value: '×',\n    type: 'symbol'\n  }, {\n    value: '4',\n    type: 'number'\n  }, {\n    value: '5',\n    type: 'number'\n  }, {\n    value: '6',\n    type: 'number'\n  }, {\n    value: '−',\n    type: 'symbol'\n  }, {\n    value: '1',\n    type: 'number'\n  }, {\n    value: '2',\n    type: 'number'\n  }, {\n    value: '3',\n    type: 'number'\n  }, {\n    value: '+',\n    type: 'symbol'\n  }, {\n    value: '0',\n    type: 'number'\n  }, {\n    value: '00',\n    type: 'number'\n  }, {\n    value: '.',\n    type: 'number'\n  }, {\n    value: '=',\n    type: 'symbol'\n  }];\n\n  var calc = function calc(num1, num2, sign) {\n    switch (sign) {\n      case '+':\n        return num1 + num2;\n\n      case '−':\n        return num1 - num2;\n\n      case '÷':\n        return num1 / num2;\n\n      case '×':\n        return num1 * num2;\n\n      case '%':\n        return props.input * 0.01;\n\n      case '+/−':\n        return props.input * -1;\n    }\n\n    return 0;\n  };\n\n  var downHandler = function downHandler(_ref) {\n    var key = _ref.key;\n\n    if (typeof Number(key) === 'number') {\n      handleNumberClick(key.toString());\n    } else if (key === '-' || key === '+' || key === '/' || key === '*' || key === '.' || key === '%') {\n      console.log(key);\n      handleSignClick(key);\n    } else if (key === 'enter' || key === '=') {\n      handleSignClick('=');\n    }\n\n    console.log(key === '+');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('keyup', downHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener('keyup', downHandler);\n    };\n  });\n\n  var handleNumberClick = function handleNumberClick(input) {\n    var newInput = '';\n    var newCurrent = props.input;\n    var prevInput = flag ? 0 : newCurrent;\n\n    switch (input) {\n      case '0':\n        newInput = prevInput ? prevInput.toString() + input : '0';\n        break;\n\n      case '00':\n        newInput = prevInput ? prevInput.toString() + input : '0';\n        break;\n\n      default:\n        newInput = prevInput ? prevInput.toString() + input : prevInput.toString().substring(1) + input;\n    }\n\n    setFlag(false);\n    setCurrent(Number(newInput));\n    props.setInput(Number(newInput));\n  };\n\n  var initValue = function initValue() {\n    props.setInput(0);\n    setPrev(0);\n    setCurrent(0);\n    setSymbol('');\n    setFlag(false);\n  };\n\n  var handleSignClick = function handleSignClick(input) {\n    switch (input) {\n      case 'AC':\n        initValue();\n        break;\n\n      case '%':\n        props.setInput(calc(prev, current, input));\n        break;\n\n      case '+/−':\n        props.setInput(calc(prev, current, input));\n        break;\n\n      case '=':\n        var newInput1 = calc(prev, current, symbol);\n        setPrev(newInput1);\n        props.setInput(newInput1);\n        setFlag(true);\n        break;\n\n      default:\n        var newInput2 = calc(prev, current, symbol);\n        setFlag(true);\n        setSymbol(input);\n\n        if (symbol === input) {\n          if (symbolFlag) {\n            setPrev(newInput2);\n            props.setInput(newInput2);\n            setSymbolFlag(false);\n          } else {\n            setPrev(props.input);\n          }\n        } else {\n          setPrev(props.input);\n          setSymbolFlag(true);\n        }\n\n    }\n  };\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 4,\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 7\n    }\n  }, keypad.map(function (key, index) {\n    var keyValue = key.value === 'AC' && props.input ? 'C' : key.value;\n    var classStr = null;\n\n    switch (key.type) {\n      case 'symbol':\n        if (symbol === key.value) {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.selectedSymbol);\n        } else {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.symbol);\n        }\n\n        break;\n\n      case 'sign':\n        classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.sign);\n        break;\n\n      default:\n        classStr = classes.number;\n    }\n\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      className: classes.box,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 229,\n        columnNumber: 13\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      onClick: function onClick() {\n        return key.type === 'number' ? handleNumberClick(key.value) : handleSignClick(key.value);\n      },\n      className: classStr,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 230,\n        columnNumber: 15\n      }\n    }, keyValue));\n  })));\n}\n\n_s(NumberPad, \"63YhXQ0yKxcYu8Wbqoatz4yZm74=\", false, function () {\n  return [useStyles];\n});\n\n_c = NumberPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"NumberPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9udW1iZXItcGFkLnRzeD85ZDhiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImJveCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm51bWJlciIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsInNpZ24iLCJzZWxlY3RlZFN5bWJvbCIsInN5bWJvbCIsIk51bWJlclBhZCIsInByb3BzIiwidXNlU3RhdGUiLCJwcmV2Iiwic2V0UHJldiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2V0U3ltYm9sIiwic3ltYm9sRmxhZyIsInNldFN5bWJvbEZsYWciLCJmbGFnIiwic2V0RmxhZyIsImNsYXNzZXMiLCJrZXlwYWQiLCJ2YWx1ZSIsInR5cGUiLCJjYWxjIiwibnVtMSIsIm51bTIiLCJpbnB1dCIsImRvd25IYW5kbGVyIiwia2V5IiwiTnVtYmVyIiwiaGFuZGxlTnVtYmVyQ2xpY2siLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTaWduQ2xpY2siLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5ld0lucHV0IiwibmV3Q3VycmVudCIsInByZXZJbnB1dCIsInN1YnN0cmluZyIsInNldElucHV0IiwiaW5pdFZhbHVlIiwibmV3SW5wdXQxIiwibmV3SW5wdXQyIiwibWFwIiwiaW5kZXgiLCJrZXlWYWx1ZSIsImNsYXNzU3RyIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsT0FBRyxFQUFF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QUhaO0FBQUEsT0FEWDtBQU1FLGVBQVMsRUFBRTZCLFFBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFHRCxRQVJILENBREYsQ0FERjtBQWNELEdBL0JBLENBREgsQ0FERixDQURGO0FBc0NEOztHQWxMdUIxQyxTO1VBTU5sQixTOzs7S0FOTWtCLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL251bWJlci1wYWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEtleSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0LCBGbGV4LCBCb3gsIFBzZXVkb0JveCwgU2ltcGxlR3JpZCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgYm94OiB7XG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIG51bWJlcjoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIHdpZHRoOiAnNzBweCcsXG4gICAgICBoZWlnaHQ6ICc3MHB4JyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGZvbnRTaXplOiAnMzZweCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNzUsNzUsNzUpJyxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNpZ246IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxNjYsMTY2LDE2NiknLFxuICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxOTAsMTkwLDE5MCknLFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIxNywyMTcsMjE3KScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VsZWN0ZWRTeW1ib2w6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGNvbG9yOiAncmdiKDI0MiwxNjIsNjApJyxcbiAgICAgIGZvbnRTaXplOiAnMzBweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE5MCwxOTAsMTkwKScsXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjE3LDIxNywyMTcpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzeW1ib2w6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDIsMTYyLDYwKScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0MywxODAsMTAwKScsXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ0LDIwMCwxNDkpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBJTnVtYmVyUGFkUHJvcHMge1xuICBzZXRJbnB1dDogKGlucHV0OiBudW1iZXIpID0+IHZvaWQ7XG4gIGlucHV0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE51bWJlclBhZChwcm9wczogSU51bWJlclBhZFByb3BzKSB7XG4gIGNvbnN0IFtwcmV2LCBzZXRQcmV2XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3N5bWJvbCwgc2V0U3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N5bWJvbEZsYWcsIHNldFN5bWJvbEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qga2V5cGFkID0gW1xuICAgIHsgdmFsdWU6ICdBQycsIHR5cGU6ICdzaWduJyB9LFxuICAgIHsgdmFsdWU6ICcrL+KIkicsIHR5cGU6ICdzaWduJyB9LFxuICAgIHsgdmFsdWU6ICclJywgdHlwZTogJ3NpZ24nIH0sXG4gICAgeyB2YWx1ZTogJ8O3JywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgICB7IHZhbHVlOiAnNycsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzgnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc5JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnw5cnLCB0eXBlOiAnc3ltYm9sJyB9LFxuICAgIHsgdmFsdWU6ICc0JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnNScsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzYnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICfiiJInLCB0eXBlOiAnc3ltYm9sJyB9LFxuICAgIHsgdmFsdWU6ICcxJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnMicsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzMnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICcrJywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgICB7IHZhbHVlOiAnMCcsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzAwJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnLicsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJz0nLCB0eXBlOiAnc3ltYm9sJyB9LFxuICBdO1xuXG4gIGNvbnN0IGNhbGMgPSAobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIsIHNpZ246IHN0cmluZykgPT4ge1xuICAgIHN3aXRjaCAoc2lnbikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgIGNhc2UgJ+KIkic6XG4gICAgICAgIHJldHVybiBudW0xIC0gbnVtMjtcbiAgICAgIGNhc2UgJ8O3JzpcbiAgICAgICAgcmV0dXJuIG51bTEgLyBudW0yO1xuICAgICAgY2FzZSAnw5cnOlxuICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgICBjYXNlICclJzpcbiAgICAgICAgcmV0dXJuIHByb3BzLmlucHV0ICogMC4wMTtcbiAgICAgIGNhc2UgJysv4oiSJzpcbiAgICAgICAgcmV0dXJuIHByb3BzLmlucHV0ICogLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIGNvbnN0IGRvd25IYW5kbGVyID0gKHsga2V5IH06IHsga2V5OiBLZXkgfSkgPT4ge1xuICAgIGlmICh0eXBlb2YgTnVtYmVyKGtleSkgPT09ICdudW1iZXInKSB7XG4gICAgICBoYW5kbGVOdW1iZXJDbGljayhrZXkudG9TdHJpbmcoKSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGtleSA9PT0gJy0nIHx8XG4gICAgICBrZXkgPT09ICcrJyB8fFxuICAgICAga2V5ID09PSAnLycgfHxcbiAgICAgIGtleSA9PT0gJyonIHx8XG4gICAgICBrZXkgPT09ICcuJyB8fFxuICAgICAga2V5ID09PSAnJSdcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICBoYW5kbGVTaWduQ2xpY2soa2V5KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2VudGVyJyB8fCBrZXkgPT09ICc9Jykge1xuICAgICAgaGFuZGxlU2lnbkNsaWNrKCc9Jyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGtleSA9PT0gJysnKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRvd25IYW5kbGVyKTtcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZG93bkhhbmRsZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZU51bWJlckNsaWNrID0gKGlucHV0OiBzdHJpbmcpID0+IHtcbiAgICBsZXQgbmV3SW5wdXQgPSAnJztcbiAgICBjb25zdCBuZXdDdXJyZW50ID0gcHJvcHMuaW5wdXQ7XG4gICAgY29uc3QgcHJldklucHV0ID0gZmxhZyA/IDAgOiBuZXdDdXJyZW50O1xuICAgIHN3aXRjaCAoaW5wdXQpIHtcbiAgICAgIGNhc2UgJzAnOlxuICAgICAgICBuZXdJbnB1dCA9IHByZXZJbnB1dCA/IHByZXZJbnB1dC50b1N0cmluZygpICsgaW5wdXQgOiAnMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMDAnOlxuICAgICAgICBuZXdJbnB1dCA9IHByZXZJbnB1dCA/IHByZXZJbnB1dC50b1N0cmluZygpICsgaW5wdXQgOiAnMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbmV3SW5wdXQgPSBwcmV2SW5wdXRcbiAgICAgICAgICA/IHByZXZJbnB1dC50b1N0cmluZygpICsgaW5wdXRcbiAgICAgICAgICA6IHByZXZJbnB1dC50b1N0cmluZygpLnN1YnN0cmluZygxKSArIGlucHV0O1xuICAgIH1cbiAgICBzZXRGbGFnKGZhbHNlKTtcbiAgICBzZXRDdXJyZW50KE51bWJlcihuZXdJbnB1dCkpO1xuICAgIHByb3BzLnNldElucHV0KE51bWJlcihuZXdJbnB1dCkpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRWYWx1ZSA9ICgpID0+IHtcbiAgICBwcm9wcy5zZXRJbnB1dCgwKTtcbiAgICBzZXRQcmV2KDApO1xuICAgIHNldEN1cnJlbnQoMCk7XG4gICAgc2V0U3ltYm9sKCcnKTtcbiAgICBzZXRGbGFnKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWduQ2xpY2sgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuICAgIHN3aXRjaCAoaW5wdXQpIHtcbiAgICAgIGNhc2UgJ0FDJzpcbiAgICAgICAgaW5pdFZhbHVlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICAgIHByb3BzLnNldElucHV0KGNhbGMocHJldiwgY3VycmVudCwgaW5wdXQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcrL+KIkic6XG4gICAgICAgIHByb3BzLnNldElucHV0KGNhbGMocHJldiwgY3VycmVudCwgaW5wdXQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc9JzpcbiAgICAgICAgY29uc3QgbmV3SW5wdXQxID0gY2FsYyhwcmV2LCBjdXJyZW50LCBzeW1ib2wpO1xuICAgICAgICBzZXRQcmV2KG5ld0lucHV0MSk7XG4gICAgICAgIHByb3BzLnNldElucHV0KG5ld0lucHV0MSk7XG4gICAgICAgIHNldEZsYWcodHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc3QgbmV3SW5wdXQyID0gY2FsYyhwcmV2LCBjdXJyZW50LCBzeW1ib2wpO1xuICAgICAgICBzZXRGbGFnKHRydWUpO1xuICAgICAgICBzZXRTeW1ib2woaW5wdXQpO1xuICAgICAgICBpZiAoc3ltYm9sID09PSBpbnB1dCkge1xuICAgICAgICAgIGlmIChzeW1ib2xGbGFnKSB7XG4gICAgICAgICAgICBzZXRQcmV2KG5ld0lucHV0Mik7XG4gICAgICAgICAgICBwcm9wcy5zZXRJbnB1dChuZXdJbnB1dDIpO1xuICAgICAgICAgICAgc2V0U3ltYm9sRmxhZyhmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFByZXYocHJvcHMuaW5wdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRQcmV2KHByb3BzLmlucHV0KTtcbiAgICAgICAgICBzZXRTeW1ib2xGbGFnKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXs0fSBzcGFjaW5nPXsyfT5cbiAgICAgICAge2tleXBhZC5tYXAoKGtleSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0ga2V5LnZhbHVlID09PSAnQUMnICYmIHByb3BzLmlucHV0ID8gJ0MnIDoga2V5LnZhbHVlO1xuICAgICAgICAgIGxldCBjbGFzc1N0ciA9IG51bGw7XG4gICAgICAgICAgc3dpdGNoIChrZXkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0ga2V5LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NTdHIgPSBjbHN4KGNsYXNzZXMubnVtYmVyLCBjbGFzc2VzLnNlbGVjdGVkU3ltYm9sKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc1N0ciA9IGNsc3goY2xhc3Nlcy5udW1iZXIsIGNsYXNzZXMuc3ltYm9sKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NpZ24nOlxuICAgICAgICAgICAgICBjbGFzc1N0ciA9IGNsc3goY2xhc3Nlcy5udW1iZXIsIGNsYXNzZXMuc2lnbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgY2xhc3NTdHIgPSBjbGFzc2VzLm51bWJlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBrZXkudHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgPyBoYW5kbGVOdW1iZXJDbGljayhrZXkudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIDogaGFuZGxlU2lnbkNsaWNrKGtleS52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1N0cn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtrZXlWYWx1ZX1cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/number-pad.tsx\n");

/***/ })

})