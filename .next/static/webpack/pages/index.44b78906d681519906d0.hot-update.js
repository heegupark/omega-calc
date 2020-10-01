webpackHotUpdate_N_E("pages/index",{

/***/ "./components/number-pad.tsx":
/*!***********************************!*\
  !*** ./components/number-pad.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumberPad; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/number-pad.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    box: {\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    number: {\n      cursor: 'pointer',\n      backgroundColor: 'rgb(51,51,51)',\n      width: '70px',\n      height: '70px',\n      borderRadius: '50%',\n      color: 'white',\n      fontSize: '36px',\n      alignItems: 'center',\n      justifyContent: 'center',\n      '&:hover': {\n        backgroundColor: 'rgb(75,75,75)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(115,115,115)'\n      }\n    },\n    sign: {\n      backgroundColor: 'rgb(166,166,166)',\n      color: 'black',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    selectedSymbol: {\n      backgroundColor: 'white',\n      color: 'rgb(242,162,60)',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    symbol: {\n      backgroundColor: 'rgb(242,162,60)',\n      '&:hover': {\n        backgroundColor: 'rgb(243,180,100)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(244,200,149)'\n      }\n    }\n  });\n});\nfunction NumberPad(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      prev = _useState[0],\n      setPrev = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      symbol = _useState3[0],\n      setSymbol = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      symbolFlag = _useState4[0],\n      setSymbolFlag = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      flag = _useState5[0],\n      setFlag = _useState5[1];\n\n  var classes = useStyles();\n  var keypad = [{\n    value: 'AC',\n    type: 'sign'\n  }, {\n    value: '+/−',\n    type: 'sign'\n  }, {\n    value: '%',\n    type: 'sign'\n  }, {\n    value: '÷',\n    type: 'symbol'\n  }, {\n    value: '7',\n    type: 'number'\n  }, {\n    value: '8',\n    type: 'number'\n  }, {\n    value: '9',\n    type: 'number'\n  }, {\n    value: '×',\n    type: 'symbol'\n  }, {\n    value: '4',\n    type: 'number'\n  }, {\n    value: '5',\n    type: 'number'\n  }, {\n    value: '6',\n    type: 'number'\n  }, {\n    value: '−',\n    type: 'symbol'\n  }, {\n    value: '1',\n    type: 'number'\n  }, {\n    value: '2',\n    type: 'number'\n  }, {\n    value: '3',\n    type: 'number'\n  }, {\n    value: '+',\n    type: 'symbol'\n  }, {\n    value: '0',\n    type: 'number'\n  }, {\n    value: '00',\n    type: 'number'\n  }, {\n    value: '.',\n    type: 'number'\n  }, {\n    value: '=',\n    type: 'symbol'\n  }];\n\n  var calc = function calc(num1, num2, sign) {\n    switch (sign) {\n      case '+':\n        return num1 + num2;\n\n      case '-':\n        return num1 - num2;\n\n      case '÷':\n        return num1 / num2;\n\n      case '×':\n        return num1 * num2;\n\n      case '×':\n        return num1 * num2;\n\n      case '%':\n        return props.input * 0.01;\n\n      case '+/−':\n        return props.input * -1;\n    }\n\n    return 0;\n  };\n\n  var downHandler = function downHandler(_ref) {\n    var key = _ref.key;\n\n    if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {\n      handleNumberClick(key.toString());\n    } else if (key === '-' || key === '+' || key === '/' || key === '*' || key === '.' || key === '%') {\n      handleSignClick(key);\n    } else if (key === 'Enter' || key === '=') {\n      handleSignClick('=');\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('keyup', downHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener('keyup', downHandler);\n    };\n  });\n\n  var handleNumberClick = function handleNumberClick(input) {\n    var newInput = '';\n    var newCurrent = props.input;\n    var prevInput = flag ? 0 : newCurrent;\n\n    switch (input) {\n      case '0':\n        newInput = prevInput ? prevInput.toString() + input : '0';\n        break;\n\n      case '00':\n        newInput = prevInput ? prevInput.toString() + input : '0';\n        break;\n\n      default:\n        newInput = prevInput ? prevInput.toString() + input : prevInput.toString().substring(1) + input;\n    }\n\n    setFlag(false);\n    setCurrent(Number(newInput));\n    props.setInput(Number(newInput));\n  };\n\n  var initValue = function initValue() {\n    props.setInput(0);\n    setPrev(0);\n    setCurrent(0);\n    setSymbol('');\n    setFlag(false);\n  };\n\n  var handleSignClick = function handleSignClick(input) {\n    switch (input) {\n      case 'AC':\n        initValue();\n        break;\n\n      case '%':\n        props.setInput(calc(prev, current, input));\n        break;\n\n      case '+/−':\n        props.setInput(calc(prev, current, input));\n        break;\n\n      case '=':\n        var newInput1 = calc(prev, current, symbol);\n        setPrev(newInput1);\n        props.setInput(newInput1);\n        setFlag(true);\n        break;\n\n      default:\n        var newInput2 = calc(prev, current, symbol);\n        setFlag(true);\n        setSymbol(input);\n\n        if (symbol === input) {\n          if (symbolFlag) {\n            setPrev(newInput2);\n            props.setInput(newInput2);\n            setSymbolFlag(false);\n          } else {\n            setPrev(props.input);\n          }\n        } else {\n          setPrev(props.input);\n          setSymbolFlag(true);\n        }\n\n    }\n  };\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 4,\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 221,\n      columnNumber: 7\n    }\n  }, keypad.map(function (key, index) {\n    var keyValue = key.value === 'AC' && props.input ? 'C' : key.value;\n    var classStr = null;\n\n    switch (key.type) {\n      case 'symbol':\n        if (symbol === key.value) {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.selectedSymbol);\n        } else {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.symbol);\n        }\n\n        break;\n\n      case 'sign':\n        classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.sign);\n        break;\n\n      default:\n        classStr = classes.number;\n    }\n\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      className: classes.box,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 240,\n        columnNumber: 13\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      onClick: function onClick() {\n        return key.type === 'number' ? handleNumberClick(key.value) : handleSignClick(key.value);\n      },\n      className: classStr,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 241,\n        columnNumber: 15\n      }\n    }, keyValue));\n  })));\n}\n\n_s(NumberPad, \"63YhXQ0yKxcYu8Wbqoatz4yZm74=\", false, function () {\n  return [useStyles];\n});\n\n_c = NumberPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"NumberPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9udW1iZXItcGFkLnRzeD85ZDhiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImJveCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm51bWJlciIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsInNpZ24iLCJzZWxlY3RlZFN5bWJvbCIsInN5bWJvbCIsIk51bWJlclBhZCIsInByb3BzIiwidXNlU3RhdGUiLCJwcmV2Iiwic2V0UHJldiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2V0U3ltYm9sIiwic3ltYm9sRmxhZyIsInNldFN5bWJvbEZsYWciLCJmbGFnIiwic2V0RmxhZyIsImNsYXNzZXMiLCJrZXlwYWQiLCJ2YWx1ZSIsInR5cGUiLCJjYWxjIiwibnVtMSIsIm51bTIiLCJpbnB1dCIsImRvd25IYW5kbGVyIiwia2V5IiwiaGFuZGxlTnVtYmVyQ2xpY2siLCJ0b1N0cmluZyIsImhhbmRsZVNpZ25DbGljayIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmV3SW5wdXQiLCJuZXdDdXJyZW50IiwicHJldklucHV0Iiwic3Vic3RyaW5nIiwiTnVtYmVyIiwic2V0SW5wdXQiLCJpbml0VmFsdWUiLCJuZXdJbnB1dDEiLCJuZXdJbnB1dDIiLCJtYXAiLCJpbmRleCIsImtleVZhbHVlIiwiY2xhc3NTdHIiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxPQUFHLEVBQUU7QUFDSEMsZ0JBQVUsRUFB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QUFBLGVBQ1BsQixHQUFHLENBQUNOLElBQUosS0FBYSxRQUFiLEdBQ0lPLGlCQUFpQixDQUFDRCxHQUFHLENBQUNQLEtBQUwsQ0FEckIsR0FFSVUsZUFBZSxDQUFDSCxHQUFHLENBQUNQLEtBQUwsQ0FIWjtBQUFBLE9BRFg7QUFNRSxlQUFTLEVBQUUyQixRQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRR0QsUUFSSCxDQURGLENBREY7QUFjRCxHQS9CQSxDQURILENBREYsQ0FERjtBQXNDRDs7R0E3THVCeEMsUztVQU1ObEIsUzs7O0tBTk1rQixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9udW1iZXItcGFkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBLZXkgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCwgRmxleCwgQm94LCBQc2V1ZG9Cb3gsIFNpbXBsZUdyaWQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGJveDoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICB3aWR0aDogJzcwcHgnLFxuICAgICAgaGVpZ2h0OiAnNzBweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDc1LDc1LDc1KScsXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTE1LDExNSwxMTUpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzaWduOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTY2LDE2NiwxNjYpJyxcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgZm9udFNpemU6ICczMHB4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTkwLDE5MCwxOTApJyxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMTcsMjE3LDIxNyknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlbGVjdGVkU3ltYm9sOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBjb2xvcjogJ3JnYigyNDIsMTYyLDYwKScsXG4gICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxOTAsMTkwLDE5MCknLFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIxNywyMTcsMjE3KScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3ltYm9sOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQyLDE2Miw2MCknLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDMsMTgwLDEwMCknLFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0NCwyMDAsMTQ5KScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgSU51bWJlclBhZFByb3BzIHtcbiAgc2V0SW5wdXQ6IChpbnB1dDogbnVtYmVyKSA9PiB2b2lkO1xuICBpbnB1dDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJQYWQocHJvcHM6IElOdW1iZXJQYWRQcm9wcykge1xuICBjb25zdCBbcHJldiwgc2V0UHJldl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzeW1ib2wsIHNldFN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzeW1ib2xGbGFnLCBzZXRTeW1ib2xGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGtleXBhZCA9IFtcbiAgICB7IHZhbHVlOiAnQUMnLCB0eXBlOiAnc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnKy/iiJInLCB0eXBlOiAnc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnJScsIHR5cGU6ICdzaWduJyB9LFxuICAgIHsgdmFsdWU6ICfDtycsIHR5cGU6ICdzeW1ib2wnIH0sXG4gICAgeyB2YWx1ZTogJzcnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc4JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnOScsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJ8OXJywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgICB7IHZhbHVlOiAnNCcsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzUnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc2JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAn4oiSJywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgICB7IHZhbHVlOiAnMScsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzInLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICczJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnKycsIHR5cGU6ICdzeW1ib2wnIH0sXG4gICAgeyB2YWx1ZTogJzAnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICcwMCcsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJy4nLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc9JywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgXTtcblxuICBjb25zdCBjYWxjID0gKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyLCBzaWduOiBzdHJpbmcpID0+IHtcbiAgICBzd2l0Y2ggKHNpZ24pIHtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgY2FzZSAnw7cnOlxuICAgICAgICByZXR1cm4gbnVtMSAvIG51bTI7XG4gICAgICBjYXNlICfDlyc6XG4gICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgIGNhc2UgJ8OXJzpcbiAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICAgIHJldHVybiBwcm9wcy5pbnB1dCAqIDAuMDE7XG4gICAgICBjYXNlICcrL+KIkic6XG4gICAgICAgIHJldHVybiBwcm9wcy5pbnB1dCAqIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBkb3duSGFuZGxlciA9ICh7IGtleSB9OiB7IGtleTogS2V5IH0pID0+IHtcbiAgICBpZiAoXG4gICAgICBrZXkgPT09ICcwJyB8fFxuICAgICAga2V5ID09PSAnMScgfHxcbiAgICAgIGtleSA9PT0gJzInIHx8XG4gICAgICBrZXkgPT09ICczJyB8fFxuICAgICAga2V5ID09PSAnNCcgfHxcbiAgICAgIGtleSA9PT0gJzUnIHx8XG4gICAgICBrZXkgPT09ICc2JyB8fFxuICAgICAga2V5ID09PSAnNycgfHxcbiAgICAgIGtleSA9PT0gJzgnIHx8XG4gICAgICBrZXkgPT09ICc5J1xuICAgICkge1xuICAgICAgaGFuZGxlTnVtYmVyQ2xpY2soa2V5LnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBrZXkgPT09ICctJyB8fFxuICAgICAga2V5ID09PSAnKycgfHxcbiAgICAgIGtleSA9PT0gJy8nIHx8XG4gICAgICBrZXkgPT09ICcqJyB8fFxuICAgICAga2V5ID09PSAnLicgfHxcbiAgICAgIGtleSA9PT0gJyUnXG4gICAgKSB7XG4gICAgICBoYW5kbGVTaWduQ2xpY2soa2V5KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICc9Jykge1xuICAgICAgaGFuZGxlU2lnbkNsaWNrKCc9Jyk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZG93bkhhbmRsZXIpO1xuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkb3duSGFuZGxlcik7XG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtYmVyQ2xpY2sgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuICAgIGxldCBuZXdJbnB1dCA9ICcnO1xuICAgIGNvbnN0IG5ld0N1cnJlbnQgPSBwcm9wcy5pbnB1dDtcbiAgICBjb25zdCBwcmV2SW5wdXQgPSBmbGFnID8gMCA6IG5ld0N1cnJlbnQ7XG4gICAgc3dpdGNoIChpbnB1dCkge1xuICAgICAgY2FzZSAnMCc6XG4gICAgICAgIG5ld0lucHV0ID0gcHJldklucHV0ID8gcHJldklucHV0LnRvU3RyaW5nKCkgKyBpbnB1dCA6ICcwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcwMCc6XG4gICAgICAgIG5ld0lucHV0ID0gcHJldklucHV0ID8gcHJldklucHV0LnRvU3RyaW5nKCkgKyBpbnB1dCA6ICcwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuZXdJbnB1dCA9IHByZXZJbnB1dFxuICAgICAgICAgID8gcHJldklucHV0LnRvU3RyaW5nKCkgKyBpbnB1dFxuICAgICAgICAgIDogcHJldklucHV0LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDEpICsgaW5wdXQ7XG4gICAgfVxuICAgIHNldEZsYWcoZmFsc2UpO1xuICAgIHNldEN1cnJlbnQoTnVtYmVyKG5ld0lucHV0KSk7XG4gICAgcHJvcHMuc2V0SW5wdXQoTnVtYmVyKG5ld0lucHV0KSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdFZhbHVlID0gKCkgPT4ge1xuICAgIHByb3BzLnNldElucHV0KDApO1xuICAgIHNldFByZXYoMCk7XG4gICAgc2V0Q3VycmVudCgwKTtcbiAgICBzZXRTeW1ib2woJycpO1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25DbGljayA9IChpbnB1dDogc3RyaW5nKSA9PiB7XG4gICAgc3dpdGNoIChpbnB1dCkge1xuICAgICAgY2FzZSAnQUMnOlxuICAgICAgICBpbml0VmFsdWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgICAgcHJvcHMuc2V0SW5wdXQoY2FsYyhwcmV2LCBjdXJyZW50LCBpbnB1dCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJysv4oiSJzpcbiAgICAgICAgcHJvcHMuc2V0SW5wdXQoY2FsYyhwcmV2LCBjdXJyZW50LCBpbnB1dCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz0nOlxuICAgICAgICBjb25zdCBuZXdJbnB1dDEgPSBjYWxjKHByZXYsIGN1cnJlbnQsIHN5bWJvbCk7XG4gICAgICAgIHNldFByZXYobmV3SW5wdXQxKTtcbiAgICAgICAgcHJvcHMuc2V0SW5wdXQobmV3SW5wdXQxKTtcbiAgICAgICAgc2V0RmxhZyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBuZXdJbnB1dDIgPSBjYWxjKHByZXYsIGN1cnJlbnQsIHN5bWJvbCk7XG4gICAgICAgIHNldEZsYWcodHJ1ZSk7XG4gICAgICAgIHNldFN5bWJvbChpbnB1dCk7XG4gICAgICAgIGlmIChzeW1ib2wgPT09IGlucHV0KSB7XG4gICAgICAgICAgaWYgKHN5bWJvbEZsYWcpIHtcbiAgICAgICAgICAgIHNldFByZXYobmV3SW5wdXQyKTtcbiAgICAgICAgICAgIHByb3BzLnNldElucHV0KG5ld0lucHV0Mik7XG4gICAgICAgICAgICBzZXRTeW1ib2xGbGFnKGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UHJldihwcm9wcy5pbnB1dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFByZXYocHJvcHMuaW5wdXQpO1xuICAgICAgICAgIHNldFN5bWJvbEZsYWcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezR9IHNwYWNpbmc9ezJ9PlxuICAgICAgICB7a2V5cGFkLm1hcCgoa2V5LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBrZXkudmFsdWUgPT09ICdBQycgJiYgcHJvcHMuaW5wdXQgPyAnQycgOiBrZXkudmFsdWU7XG4gICAgICAgICAgbGV0IGNsYXNzU3RyID0gbnVsbDtcbiAgICAgICAgICBzd2l0Y2ggKGtleS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSBrZXkudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc1N0ciA9IGNsc3goY2xhc3Nlcy5udW1iZXIsIGNsYXNzZXMuc2VsZWN0ZWRTeW1ib2wpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzU3RyID0gY2xzeChjbGFzc2VzLm51bWJlciwgY2xhc3Nlcy5zeW1ib2wpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2lnbic6XG4gICAgICAgICAgICAgIGNsYXNzU3RyID0gY2xzeChjbGFzc2VzLm51bWJlciwgY2xhc3Nlcy5zaWduKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBjbGFzc1N0ciA9IGNsYXNzZXMubnVtYmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIGtleS50eXBlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZU51bWJlckNsaWNrKGtleS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVTaWduQ2xpY2soa2V5LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU3RyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2tleVZhbHVlfVxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/number-pad.tsx\n");

/***/ })

})