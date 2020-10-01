webpackHotUpdate_N_E("pages/index",{

/***/ "./components/number-pad.tsx":
/*!***********************************!*\
  !*** ./components/number-pad.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumberPad; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/number-pad.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    box: {\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    number: {\n      cursor: 'pointer',\n      backgroundColor: 'rgb(51,51,51)',\n      width: '70px',\n      height: '70px',\n      borderRadius: '50%',\n      color: 'white',\n      fontSize: '36px',\n      alignItems: 'center',\n      justifyContent: 'center',\n      '&:hover': {\n        backgroundColor: 'rgb(75,75,75)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(115,115,115)'\n      }\n    },\n    sign: {\n      backgroundColor: 'rgb(166,166,166)',\n      color: 'black',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    selectedSymbol: {\n      backgroundColor: 'white',\n      color: 'rgb(242,162,60)',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    symbol: {\n      backgroundColor: 'rgb(242,162,60)',\n      '&:hover': {\n        backgroundColor: 'rgb(243,180,100)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(244,200,149)'\n      }\n    }\n  });\n});\nfunction NumberPad(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      prev = _useState[0],\n      setPrev = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      symbol = _useState3[0],\n      setSymbol = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      symbolFlag = _useState4[0],\n      setSymbolFlag = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      flag = _useState5[0],\n      setFlag = _useState5[1];\n\n  var classes = useStyles();\n  var keypad = [{\n    value: 'AC',\n    type: 'sign'\n  }, {\n    value: '+/−',\n    type: 'sign'\n  }, {\n    value: '%',\n    type: 'sign'\n  }, {\n    value: '÷',\n    type: 'symbol'\n  }, {\n    value: '7',\n    type: 'number'\n  }, {\n    value: '8',\n    type: 'number'\n  }, {\n    value: '9',\n    type: 'number'\n  }, {\n    value: '×',\n    type: 'symbol'\n  }, {\n    value: '4',\n    type: 'number'\n  }, {\n    value: '5',\n    type: 'number'\n  }, {\n    value: '6',\n    type: 'number'\n  }, {\n    value: '−',\n    type: 'symbol'\n  }, {\n    value: '1',\n    type: 'number'\n  }, {\n    value: '2',\n    type: 'number'\n  }, {\n    value: '3',\n    type: 'number'\n  }, {\n    value: '+',\n    type: 'symbol'\n  }, {\n    value: '0',\n    type: 'number'\n  }, {\n    value: '00',\n    type: 'number'\n  }, {\n    value: '.',\n    type: 'number'\n  }, {\n    value: '=',\n    type: 'symbol'\n  }];\n\n  var calc = function calc(num1, num2, sign) {\n    switch (sign) {\n      case '+':\n        return num1 + num2;\n\n      case '−':\n        return num1 - num2;\n\n      case '÷':\n        return num1 / num2;\n\n      case '×':\n        return num1 * num2;\n\n      case '%':\n        return props.input * 0.01;\n\n      case '+/−':\n        return props.input * -1;\n    }\n\n    return 0;\n  };\n\n  var downHandler = function downHandler(_ref) {\n    var key = _ref.key;\n\n    if (typeof Number(key) === 'number') {\n      handleNumberClick(key.toString());\n    } else if (key === '-' || key === '+' || key === '/' || key === '*' || key === '.' || key === '%') {\n      console.log(key);\n      handleSignClick(key);\n    } else if (key === 'enter' || key === '=') {\n      handleSignClick('=');\n    }\n\n    console.log(key);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('keydown', downHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener('keydown', downHandler);\n    };\n  });\n\n  var handleNumberClick = function handleNumberClick(input) {\n    var newInput = '';\n    var newCurrent = props.input;\n    var prevInput = flag ? 0 : newCurrent;\n\n    switch (input) {\n      case '0':\n        newInput = prevInput ? prevInput.toString() + input : '0';\n        break;\n\n      case '00':\n        newInput = prevInput ? prevInput.toString() + input : '0';\n        break;\n\n      default:\n        newInput = prevInput ? prevInput.toString() + input : prevInput.toString().substring(1) + input;\n    }\n\n    setFlag(false);\n    setCurrent(Number(newInput));\n    props.setInput(Number(newInput));\n  };\n\n  var initValue = function initValue() {\n    props.setInput(0);\n    setPrev(0);\n    setCurrent(0);\n    setSymbol('');\n    setFlag(false);\n  };\n\n  var handleSignClick = function handleSignClick(input) {\n    switch (input) {\n      case 'AC':\n        initValue();\n        break;\n\n      case '%':\n        props.setInput(calc(prev, current, input));\n        break;\n\n      case '+/−':\n        props.setInput(calc(prev, current, input));\n        break;\n\n      case '=':\n        var newInput1 = calc(prev, current, symbol);\n        setPrev(newInput1);\n        props.setInput(newInput1);\n        setFlag(true);\n        break;\n\n      default:\n        var newInput2 = calc(prev, current, symbol);\n        setFlag(true);\n        setSymbol(input);\n\n        if (symbol === input) {\n          if (symbolFlag) {\n            setPrev(newInput2);\n            props.setInput(newInput2);\n            setSymbolFlag(false);\n          } else {\n            setPrev(props.input);\n          }\n        } else {\n          setPrev(props.input);\n          setSymbolFlag(true);\n        }\n\n    }\n  };\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 4,\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 7\n    }\n  }, keypad.map(function (key, index) {\n    var keyValue = key.value === 'AC' && props.input ? 'C' : key.value;\n    var classStr = null;\n\n    switch (key.type) {\n      case 'symbol':\n        if (symbol === key.value) {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.selectedSymbol);\n        } else {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.symbol);\n        }\n\n        break;\n\n      case 'sign':\n        classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.sign);\n        break;\n\n      default:\n        classStr = classes.number;\n    }\n\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      className: classes.box,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 229,\n        columnNumber: 13\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      onClick: function onClick() {\n        return key.type === 'number' ? handleNumberClick(key.value) : handleSignClick(key.value);\n      },\n      className: classStr,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 230,\n        columnNumber: 15\n      }\n    }, keyValue));\n  })));\n}\n\n_s(NumberPad, \"63YhXQ0yKxcYu8Wbqoatz4yZm74=\", false, function () {\n  return [useStyles];\n});\n\n_c = NumberPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"NumberPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9udW1iZXItcGFkLnRzeD85ZDhiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImJveCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm51bWJlciIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsInNpZ24iLCJzZWxlY3RlZFN5bWJvbCIsInN5bWJvbCIsIk51bWJlclBhZCIsInByb3BzIiwidXNlU3RhdGUiLCJwcmV2Iiwic2V0UHJldiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2V0U3ltYm9sIiwic3ltYm9sRmxhZyIsInNldFN5bWJvbEZsYWciLCJmbGFnIiwic2V0RmxhZyIsImNsYXNzZXMiLCJrZXlwYWQiLCJ2YWx1ZSIsInR5cGUiLCJjYWxjIiwibnVtMSIsIm51bTIiLCJpbnB1dCIsImRvd25IYW5kbGVyIiwia2V5IiwiTnVtYmVyIiwiaGFuZGxlTnVtYmVyQ2xpY2siLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTaWduQ2xpY2siLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5ld0lucHV0IiwibmV3Q3VycmVudCIsInByZXZJbnB1dCIsInN1YnN0cmluZyIsInNldElucHV0IiwiaW5pdFZhbHVlIiwibmV3SW5wdXQxIiwibmV3SW5wdXQyIiwibWFwIiwiaW5kZXgiLCJrZXlWYWx1ZSIsImNsYXNzU3RyIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLDZFQUFZLENBQUM7QUFDWEMsT0FBRyxFQUFF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RFg7QUFNRSxlQUFTLEVBQUU2QixRQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRR0QsUUFSSCxDQURGLENBREY7QUFjRCxHQS9CQSxDQURILENBREYsQ0FERjtBQXNDRDs7R0FsTHVCMUMsUztVQU1ObEIsUzs7O0tBTk1rQixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9udW1iZXItcGFkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBLZXkgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCwgRmxleCwgQm94LCBQc2V1ZG9Cb3gsIFNpbXBsZUdyaWQgfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGJveDoge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDUxLDUxLDUxKScsXG4gICAgICB3aWR0aDogJzcwcHgnLFxuICAgICAgaGVpZ2h0OiAnNzBweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBmb250U2l6ZTogJzM2cHgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDc1LDc1LDc1KScsXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTE1LDExNSwxMTUpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzaWduOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTY2LDE2NiwxNjYpJyxcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgZm9udFNpemU6ICczMHB4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTkwLDE5MCwxOTApJyxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMTcsMjE3LDIxNyknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlbGVjdGVkU3ltYm9sOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICBjb2xvcjogJ3JnYigyNDIsMTYyLDYwKScsXG4gICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxOTAsMTkwLDE5MCknLFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIxNywyMTcsMjE3KScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3ltYm9sOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQyLDE2Miw2MCknLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDMsMTgwLDEwMCknLFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0NCwyMDAsMTQ5KScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgSU51bWJlclBhZFByb3BzIHtcbiAgc2V0SW5wdXQ6IChpbnB1dDogbnVtYmVyKSA9PiB2b2lkO1xuICBpbnB1dDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJQYWQocHJvcHM6IElOdW1iZXJQYWRQcm9wcykge1xuICBjb25zdCBbcHJldiwgc2V0UHJldl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzeW1ib2wsIHNldFN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzeW1ib2xGbGFnLCBzZXRTeW1ib2xGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGtleXBhZCA9IFtcbiAgICB7IHZhbHVlOiAnQUMnLCB0eXBlOiAnc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnKy/iiJInLCB0eXBlOiAnc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnJScsIHR5cGU6ICdzaWduJyB9LFxuICAgIHsgdmFsdWU6ICfDtycsIHR5cGU6ICdzeW1ib2wnIH0sXG4gICAgeyB2YWx1ZTogJzcnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc4JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnOScsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJ8OXJywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgICB7IHZhbHVlOiAnNCcsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzUnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc2JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAn4oiSJywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgICB7IHZhbHVlOiAnMScsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzInLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICczJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnKycsIHR5cGU6ICdzeW1ib2wnIH0sXG4gICAgeyB2YWx1ZTogJzAnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICcwMCcsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJy4nLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc9JywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgXTtcblxuICBjb25zdCBjYWxjID0gKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyLCBzaWduOiBzdHJpbmcpID0+IHtcbiAgICBzd2l0Y2ggKHNpZ24pIHtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgICBjYXNlICfiiJInOlxuICAgICAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gICAgICBjYXNlICfDtyc6XG4gICAgICAgIHJldHVybiBudW0xIC8gbnVtMjtcbiAgICAgIGNhc2UgJ8OXJzpcbiAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICAgIHJldHVybiBwcm9wcy5pbnB1dCAqIDAuMDE7XG4gICAgICBjYXNlICcrL+KIkic6XG4gICAgICAgIHJldHVybiBwcm9wcy5pbnB1dCAqIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBkb3duSGFuZGxlciA9ICh7IGtleSB9OiB7IGtleTogS2V5IH0pID0+IHtcbiAgICBpZiAodHlwZW9mIE51bWJlcihrZXkpID09PSAnbnVtYmVyJykge1xuICAgICAgaGFuZGxlTnVtYmVyQ2xpY2soa2V5LnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBrZXkgPT09ICctJyB8fFxuICAgICAga2V5ID09PSAnKycgfHxcbiAgICAgIGtleSA9PT0gJy8nIHx8XG4gICAgICBrZXkgPT09ICcqJyB8fFxuICAgICAga2V5ID09PSAnLicgfHxcbiAgICAgIGtleSA9PT0gJyUnXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgaGFuZGxlU2lnbkNsaWNrKGtleSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdlbnRlcicgfHwga2V5ID09PSAnPScpIHtcbiAgICAgIGhhbmRsZVNpZ25DbGljaygnPScpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhrZXkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcik7XG4gICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBvbiBjbGVhbnVwXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZU51bWJlckNsaWNrID0gKGlucHV0OiBzdHJpbmcpID0+IHtcbiAgICBsZXQgbmV3SW5wdXQgPSAnJztcbiAgICBjb25zdCBuZXdDdXJyZW50ID0gcHJvcHMuaW5wdXQ7XG4gICAgY29uc3QgcHJldklucHV0ID0gZmxhZyA/IDAgOiBuZXdDdXJyZW50O1xuICAgIHN3aXRjaCAoaW5wdXQpIHtcbiAgICAgIGNhc2UgJzAnOlxuICAgICAgICBuZXdJbnB1dCA9IHByZXZJbnB1dCA/IHByZXZJbnB1dC50b1N0cmluZygpICsgaW5wdXQgOiAnMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnMDAnOlxuICAgICAgICBuZXdJbnB1dCA9IHByZXZJbnB1dCA/IHByZXZJbnB1dC50b1N0cmluZygpICsgaW5wdXQgOiAnMCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbmV3SW5wdXQgPSBwcmV2SW5wdXRcbiAgICAgICAgICA/IHByZXZJbnB1dC50b1N0cmluZygpICsgaW5wdXRcbiAgICAgICAgICA6IHByZXZJbnB1dC50b1N0cmluZygpLnN1YnN0cmluZygxKSArIGlucHV0O1xuICAgIH1cbiAgICBzZXRGbGFnKGZhbHNlKTtcbiAgICBzZXRDdXJyZW50KE51bWJlcihuZXdJbnB1dCkpO1xuICAgIHByb3BzLnNldElucHV0KE51bWJlcihuZXdJbnB1dCkpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRWYWx1ZSA9ICgpID0+IHtcbiAgICBwcm9wcy5zZXRJbnB1dCgwKTtcbiAgICBzZXRQcmV2KDApO1xuICAgIHNldEN1cnJlbnQoMCk7XG4gICAgc2V0U3ltYm9sKCcnKTtcbiAgICBzZXRGbGFnKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaWduQ2xpY2sgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuICAgIHN3aXRjaCAoaW5wdXQpIHtcbiAgICAgIGNhc2UgJ0FDJzpcbiAgICAgICAgaW5pdFZhbHVlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICAgIHByb3BzLnNldElucHV0KGNhbGMocHJldiwgY3VycmVudCwgaW5wdXQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcrL+KIkic6XG4gICAgICAgIHByb3BzLnNldElucHV0KGNhbGMocHJldiwgY3VycmVudCwgaW5wdXQpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc9JzpcbiAgICAgICAgY29uc3QgbmV3SW5wdXQxID0gY2FsYyhwcmV2LCBjdXJyZW50LCBzeW1ib2wpO1xuICAgICAgICBzZXRQcmV2KG5ld0lucHV0MSk7XG4gICAgICAgIHByb3BzLnNldElucHV0KG5ld0lucHV0MSk7XG4gICAgICAgIHNldEZsYWcodHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc3QgbmV3SW5wdXQyID0gY2FsYyhwcmV2LCBjdXJyZW50LCBzeW1ib2wpO1xuICAgICAgICBzZXRGbGFnKHRydWUpO1xuICAgICAgICBzZXRTeW1ib2woaW5wdXQpO1xuICAgICAgICBpZiAoc3ltYm9sID09PSBpbnB1dCkge1xuICAgICAgICAgIGlmIChzeW1ib2xGbGFnKSB7XG4gICAgICAgICAgICBzZXRQcmV2KG5ld0lucHV0Mik7XG4gICAgICAgICAgICBwcm9wcy5zZXRJbnB1dChuZXdJbnB1dDIpO1xuICAgICAgICAgICAgc2V0U3ltYm9sRmxhZyhmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFByZXYocHJvcHMuaW5wdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRQcmV2KHByb3BzLmlucHV0KTtcbiAgICAgICAgICBzZXRTeW1ib2xGbGFnKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXs0fSBzcGFjaW5nPXsyfT5cbiAgICAgICAge2tleXBhZC5tYXAoKGtleSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0ga2V5LnZhbHVlID09PSAnQUMnICYmIHByb3BzLmlucHV0ID8gJ0MnIDoga2V5LnZhbHVlO1xuICAgICAgICAgIGxldCBjbGFzc1N0ciA9IG51bGw7XG4gICAgICAgICAgc3dpdGNoIChrZXkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0ga2V5LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NTdHIgPSBjbHN4KGNsYXNzZXMubnVtYmVyLCBjbGFzc2VzLnNlbGVjdGVkU3ltYm9sKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGFzc1N0ciA9IGNsc3goY2xhc3Nlcy5udW1iZXIsIGNsYXNzZXMuc3ltYm9sKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NpZ24nOlxuICAgICAgICAgICAgICBjbGFzc1N0ciA9IGNsc3goY2xhc3Nlcy5udW1iZXIsIGNsYXNzZXMuc2lnbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgY2xhc3NTdHIgPSBjbGFzc2VzLm51bWJlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBrZXkudHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgPyBoYW5kbGVOdW1iZXJDbGljayhrZXkudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIDogaGFuZGxlU2lnbkNsaWNrKGtleS52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1N0cn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtrZXlWYWx1ZX1cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/number-pad.tsx\n");

/***/ })

})