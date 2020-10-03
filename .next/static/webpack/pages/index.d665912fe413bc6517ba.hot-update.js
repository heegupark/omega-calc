webpackHotUpdate_N_E("pages/index",{

/***/ "./components/number-pad.tsx":
/*!***********************************!*\
  !*** ./components/number-pad.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumberPad; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/number-pad.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    box: {\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    numberSizeSm: {\n      width: '55px',\n      height: '55px'\n    },\n    numberSizeMd: {\n      width: '65px',\n      height: '65px'\n    },\n    number: {\n      cursor: 'pointer',\n      backgroundColor: 'rgb(51,51,51)',\n      borderRadius: '50%',\n      color: 'white',\n      fontSize: '36px',\n      alignItems: 'center',\n      justifyContent: 'center',\n      '&:hover': {\n        backgroundColor: 'rgb(75,75,75)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(115,115,115)'\n      }\n    },\n    sign: {\n      backgroundColor: 'rgb(166,166,166)',\n      color: 'black',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    selectedSymbol: {\n      backgroundColor: 'white',\n      color: 'rgb(242,162,60)',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    symbol: {\n      backgroundColor: 'rgb(242,162,60)',\n      '&:hover': {\n        backgroundColor: 'rgb(243,180,100)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(244,200,149)'\n      }\n    }\n  });\n});\nfunction NumberPad(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      prev = _useState[0],\n      setPrev = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      symbol = _useState3[0],\n      setSymbol = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      symbolFlag = _useState4[0],\n      setSymbolFlag = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      flag = _useState5[0],\n      setFlag = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isNaN = _useState6[0],\n      setIsNaN = _useState6[1];\n\n  var classes = useStyles();\n  var keypad = [{\n    display: 'AC',\n    type: 'sign',\n    value: 'AC'\n  }, {\n    display: '+/−',\n    type: 'sign',\n    value: '+/−'\n  }, {\n    display: '%',\n    type: 'sign',\n    value: '%'\n  }, {\n    display: '÷',\n    type: 'symbol',\n    value: '/'\n  }, {\n    display: '7',\n    type: 'number',\n    value: '7'\n  }, {\n    display: '8',\n    type: 'number',\n    value: '8'\n  }, {\n    display: '9',\n    type: 'number',\n    value: '9'\n  }, {\n    display: '×',\n    type: 'symbol',\n    value: '*'\n  }, {\n    display: '4',\n    type: 'number',\n    value: '4'\n  }, {\n    display: '5',\n    type: 'number',\n    value: '5'\n  }, {\n    display: '6',\n    type: 'number',\n    value: '6'\n  }, {\n    display: '−',\n    type: 'symbol',\n    value: '-'\n  }, {\n    display: '1',\n    type: 'number',\n    value: '1'\n  }, {\n    display: '2',\n    type: 'number',\n    value: '2'\n  }, {\n    display: '3',\n    type: 'number',\n    value: '3'\n  }, {\n    display: '+',\n    type: 'symbol',\n    value: '+'\n  }, {\n    display: '0',\n    type: 'number',\n    value: '0'\n  }, {\n    display: '00',\n    type: 'number',\n    value: '00'\n  }, {\n    display: '.',\n    type: 'number',\n    value: '.'\n  }, {\n    display: '=',\n    type: 'symbol',\n    value: '='\n  }];\n  var keypadLandscape = [{\n    display: 'AC',\n    type: 'sign',\n    value: 'AC'\n  }, {\n    display: '7',\n    type: 'number',\n    value: '7'\n  }, {\n    display: '8',\n    type: 'number',\n    value: '8'\n  }, {\n    display: '9',\n    type: 'number',\n    value: '9'\n  }, {\n    display: '÷',\n    type: 'symbol',\n    value: '/'\n  }, {\n    display: '+/−',\n    type: 'sign',\n    value: '+/−'\n  }, {\n    display: '4',\n    type: 'number',\n    value: '4'\n  }, {\n    display: '5',\n    type: 'number',\n    value: '5'\n  }, {\n    display: '6',\n    type: 'number',\n    value: '6'\n  }, {\n    display: '×',\n    type: 'symbol',\n    value: '*'\n  }, {\n    display: '%',\n    type: 'sign',\n    value: '%'\n  }, {\n    display: '1',\n    type: 'number',\n    value: '1'\n  }, {\n    display: '2',\n    type: 'number',\n    value: '2'\n  }, {\n    display: '3',\n    type: 'number',\n    value: '3'\n  }, {\n    display: '−',\n    type: 'symbol',\n    value: '-'\n  }, {\n    display: '=',\n    type: 'symbol',\n    value: '='\n  }, {\n    display: '.',\n    type: 'number',\n    value: '.'\n  }, {\n    display: '0',\n    type: 'number',\n    value: '0'\n  }, {\n    display: '00',\n    type: 'number',\n    value: '00'\n  }, {\n    display: '+',\n    type: 'symbol',\n    value: '+'\n  }];\n\n  var calc = function calc(num1, num2, sign) {\n    switch (sign) {\n      case '+':\n        return num1 + num2;\n\n      case '-':\n        return num1 - num2;\n\n      case '÷':\n        return num1 / num2;\n\n      case '/':\n        return num1 / num2;\n\n      case '×':\n        return num1 * num2;\n\n      case '*':\n        return num1 * num2;\n\n      case '%':\n        return Number(props.input) * 0.01;\n\n      case '+/−':\n        return Number(props.input) * -1;\n    }\n\n    return 0;\n  };\n\n  var downHandler = function downHandler(_ref) {\n    var key = _ref.key;\n\n    if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {\n      if (!isNaN) handleNumberClick(key.toString());\n    } else if (key === '-' || key === '+' || key === '/' || key === '*' || key === '.' || key === '%') {\n      handleSignClick(key);\n    } else if (key === 'Enter' || key === '=') {\n      handleSignClick('=');\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('keyup', downHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener('keyup', downHandler);\n    };\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (props.input.length > 25) setIsNaN(true);else setIsNaN(false);\n  }, [props.input]);\n\n  var handleInput = function handleInput(inputStr) {\n    props.setInput(inputStr);\n  };\n\n  var handleNumberClick = function handleNumberClick(input) {\n    var newInput = '';\n    var newCurrent = props.input;\n    var prevInput = flag ? '0' : newCurrent;\n\n    switch (input) {\n      case '0':\n        newInput = prevInput !== '0' ? prevInput.toString() + input : '0';\n        break;\n\n      case '00':\n        newInput = prevInput !== '0' ? prevInput.toString() + input : '0';\n        break;\n\n      case '.':\n        if (!props.input.toString().includes('.')) {\n          newInput = \"\".concat(props.input, \".\");\n        } else {\n          return;\n        }\n\n        break;\n\n      default:\n        console.log(prevInput);\n        newInput = Number(prevInput) !== 0 ? prevInput.toString() + input : prevInput.toString().substring(1) + input;\n    }\n\n    setFlag(false);\n    setCurrent(Number(newInput));\n    handleInput(newInput);\n  };\n\n  var initValue = function initValue() {\n    handleInput('0');\n    setPrev(0);\n    setCurrent(0);\n    setSymbol('');\n    setFlag(false);\n  };\n\n  var handleSignClick = function handleSignClick(input) {\n    switch (input) {\n      case 'AC':\n        initValue();\n        break;\n\n      case '%':\n        handleInput(calc(prev, current, input).toString());\n        break;\n\n      case '+/−':\n        handleInput(calc(prev, current, input).toString());\n        break;\n\n      case '=':\n        console.log(prev, current, symbol);\n        var newInput1 = calc(prev, current, symbol);\n        setPrev(newInput1);\n        handleInput(newInput1.toString()); // setSymbol(input);\n\n        setFlag(true);\n        break;\n\n      default:\n        var newInput2 = calc(prev, current, symbol);\n        setFlag(true);\n        setSymbol(input);\n\n        if (symbol === input) {\n          if (symbolFlag) {\n            setPrev(newInput2);\n            handleInput(newInput2.toString());\n            setSymbolFlag(false);\n          } else {\n            setPrev(Number(props.input));\n          }\n        } else {\n          setPrev(Number(props.input));\n          setSymbolFlag(true);\n        }\n\n    }\n  };\n\n  var isLandscape = props.height <= 414;\n  var isSmall = props.height <= 320;\n  var pad = isLandscape ? keypadLandscape : keypad;\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 275,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: isLandscape ? 5 : 4,\n    spacing: isSmall ? 1 : 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 276,\n      columnNumber: 7\n    }\n  }, pad.map(function (key, index) {\n    var keyValue = key.display === 'AC' && props.input !== '0' && props.sign === '' ? 'C' : key.display;\n    var classStr = null;\n\n    switch (key.type) {\n      case 'symbol':\n        if (symbol === key.value) {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(isSmall ? classes.numberSizeSm : classes.numberSizeMd, classes.number, classes.selectedSymbol);\n        } else {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(isSmall ? classes.numberSizeSm : classes.numberSizeMd, classes.number, classes.symbol);\n        }\n\n        break;\n\n      case 'sign':\n        classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(isSmall ? classes.numberSizeSm : classes.numberSizeMd, classes.number, classes.sign);\n        break;\n\n      default:\n        classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(isSmall ? classes.numberSizeSm : classes.numberSizeMd, classes.number);\n    }\n\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      className: classes.box,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 313,\n        columnNumber: 13\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      onClick: function onClick() {\n        return key.type === 'number' ? handleNumberClick(key.value) : handleSignClick(key.value);\n      },\n      className: classStr,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 314,\n        columnNumber: 15\n      }\n    }, keyValue));\n  })));\n}\n\n_s(NumberPad, \"bpOtWCDOUW+JEQyP7Y51mqu1A+c=\", false, function () {\n  return [useStyles];\n});\n\n_c = NumberPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"NumberPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9udW1iZXItcGFkLnRzeD85ZDhiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImJveCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm51bWJlclNpemVTbSIsIndpZHRoIiwiaGVpZ2h0IiwibnVtYmVyU2l6ZU1kIiwibnVtYmVyIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsInNpZ24iLCJzZWxlY3RlZFN5bWJvbCIsInN5bWJvbCIsIk51bWJlclBhZCIsInByb3BzIiwidXNlU3RhdGUiLCJwcmV2Iiwic2V0UHJldiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2V0U3ltYm9sIiwic3ltYm9sRmxhZyIsInNldFN5bWJvbEZsYWciLCJmbGFnIiwic2V0RmxhZyIsImlzTmFOIiwic2V0SXNOYU4iLCJjbGFzc2VzIiwia2V5cGFkIiwiZGlzcGxheSIsInR5cGUiLCJ2YWx1ZSIsImtleXBhZExhbmRzY2FwZSIsImNhbGMiLCJudW0xIiwibnVtMiIsIk51bWJlciIsImlucHV0IiwiZG93bkhhbmRsZXIiLCJrZXkiLCJoYW5kbGVOdW1iZXJDbGljayIsInRvU3RyaW5nIiwiaGFuZGxlU2lnbkNsaWNrIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJoYW5kbGVJbnB1dCIsImlucHV0U3RyIiwic2V0SW5wdXQiLCJuZXdJbnB1dCIsIm5ld0N1cnJlbnQiLCJwcmV2SW5wdXQiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJzdWJzdHJpbmciLCJpbml0VmFsdWUiLCJuZXdJbnB1dDEiLCJuZXdJbnB1dDIiLCJpc0xhbmRzY2FwZSIsImlzU21hbGwiLCJwYWQiLCJtYXAiLCJpbmRleCIsImtleVZhbHVlIiwiY2xhc3NTdHIiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxPQUFHLEVBQUU7QUFDSEMsZ0JBQVUsRUFBRSxRQURUO0FBRUhDLG9CQUFjLEVBQUU7QUFGYixLQURNO0FBS1hDLGdCQUFZLEVBQUU7QUFDWkMsV0FBSyxFQUFFLE1BREs7QUFFWkMsWUFBTSxFQUFFO0FBRkksS0FMSDtBQVNYQyxnQkFBWSxFQUFFO0FBQ1pGLFdBQUssRUFBRSxNQURLO0FBRVpDLFlBQU0sRUFBRTtBQUZJLEtBVEg7QUFhWEUsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRSxTQURGO0FBRU5DLHFCQUFlLEVBQUUsZUFGWDtBQUdOQyxrQkFBWSxFQUFFLEtBSFI7QUFJTkMsV0FBSyxFQUFFLE9BSkQ7QUFLTkMsY0FBUSxFQUFFLE1BTEo7QUFNTlgsZ0JBQVUsRUFBRSxRQU5OO0FBT05DLG9CQUFjLEVBQUUsUUFQVjtBQVFOLGlCQUFXO0FBQ1RPLHVCQUFlLEVBQUU7QUFEUixPQVJMO0FBV04sa0JBQVk7QUFDVkEsdUJBQWUsRUFBRTtBQURQO0FBWE4sS0FiRztBQTRCWEksUUFBSSxFQUFFO0FBQ0pKLHFCQUFlLEVBQUUsa0JBRGI7QUFFSkUsV0FBSyxFQUFFLE9BRkg7QUFHSkMsY0FBUSxFQUFFLE1BSE47QUFJSixpQkFBVztBQUNUSCx1QkFBZSxFQUFFO0FBRFIsT0FKUDtBQU9KLGtCQUFZO0FBQ1ZBLHVCQUFlLEVBQUU7QUFEUDtBQVBSLEtBNUJLO0FBdUNYSyxrQkFBYyxFQUFFO0FBQ2RMLHFCQUFlLEVBQUUsT0FESDtBQUVkRSxXQUFLLEVBQUUsaUJBRk87QUFHZEMsY0FBUSxFQUFFLE1BSEk7QUFJZCxpQkFBVztBQUNUSCx1QkFBZSxFQUFFO0FBRFIsT0FKRztBQU9kLGtCQUFZO0FBQ1ZBLHVCQUFlLEVBQUU7QUFEUDtBQVBFLEtBdkNMO0FBa0RYTSxVQUFNLEVBQUU7QUFDTk4scUJBQWUsRUFBRSxpQkFEWDtBQUVOLGlCQUFXO0FBQ1RBLHVCQUFlLEVBQUU7QUFEUixPQUZMO0FBS04sa0JBQVk7QUFDVkEsdUJBQWUsRUFBRTtBQURQO0FBTE47QUFsREcsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQXFFZSxTQUFTTyxTQUFULENBQW1CQyxLQUFuQixFQUEyQztBQUFBOztBQUFBOztBQUFBLGtCQUNoQ0Msc0RBQVEsQ0FBQyxDQUFELENBRHdCO0FBQUEsTUFDakRDLElBRGlEO0FBQUEsTUFDM0NDLE9BRDJDOztBQUFBLG1CQUUxQkYsc0RBQVEsQ0FBQyxDQUFELENBRmtCO0FBQUEsTUFFakRHLE9BRmlEO0FBQUEsTUFFeENDLFVBRndDOztBQUFBLG1CQUc1Qkosc0RBQVEsQ0FBQyxFQUFELENBSG9CO0FBQUEsTUFHakRILE1BSGlEO0FBQUEsTUFHekNRLFNBSHlDOztBQUFBLG1CQUlwQkwsc0RBQVEsQ0FBQyxLQUFELENBSlk7QUFBQSxNQUlqRE0sVUFKaUQ7QUFBQSxNQUlyQ0MsYUFKcUM7O0FBQUEsbUJBS2hDUCxzREFBUSxDQUFDLEtBQUQsQ0FMd0I7QUFBQSxNQUtqRFEsSUFMaUQ7QUFBQSxNQUszQ0MsT0FMMkM7O0FBQUEsbUJBTTlCVCxzREFBUSxDQUFDLEtBQUQsQ0FOc0I7QUFBQSxNQU1qRFUsS0FOaUQ7QUFBQSxNQU0xQ0MsUUFOMEM7O0FBT3hELE1BQU1DLE9BQU8sR0FBR2xDLFNBQVMsRUFBekI7QUFDQSxNQUFNbUMsTUFBTSxHQUFHLENBQ2I7QUFBRUMsV0FBTyxFQUFFLElBQVg7QUFBaUJDLFFBQUksRUFBRSxNQUF2QjtBQUErQkMsU0FBSyxFQUFFO0FBQXRDLEdBRGEsRUFFYjtBQUFFRixXQUFPLEVBQUUsS0FBWDtBQUFrQkMsUUFBSSxFQUFFLE1BQXhCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FGYSxFQUdiO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsTUFBdEI7QUFBOEJDLFNBQUssRUFBRTtBQUFyQyxHQUhhLEVBSWI7QUFBRUYsV0FBTyxFQUFFLEdBQVg7QUFBZ0JDLFFBQUksRUFBRSxRQUF0QjtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBSmEsRUFLYjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FMYSxFQU1iO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQU5hLEVBT2I7QUFBRUYsV0FBTyxFQUFFLEdBQVg7QUFBZ0JDLFFBQUksRUFBRSxRQUF0QjtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBUGEsRUFRYjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FSYSxFQVNiO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQVRhLEVBVWI7QUFBRUYsV0FBTyxFQUFFLEdBQVg7QUFBZ0JDLFFBQUksRUFBRSxRQUF0QjtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBVmEsRUFXYjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FYYSxFQVliO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQVphLEVBYWI7QUFBRUYsV0FBTyxFQUFFLEdBQVg7QUFBZ0JDLFFBQUksRUFBRSxRQUF0QjtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBYmEsRUFjYjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FkYSxFQWViO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQWZhLEVBZ0JiO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQWhCYSxFQWlCYjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FqQmEsRUFrQmI7QUFBRUYsV0FBTyxFQUFFLElBQVg7QUFBaUJDLFFBQUksRUFBRSxRQUF2QjtBQUFpQ0MsU0FBSyxFQUFFO0FBQXhDLEdBbEJhLEVBbUJiO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQW5CYSxFQW9CYjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FwQmEsQ0FBZjtBQXNCQSxNQUFNQyxlQUFlLEdBQUcsQ0FDdEI7QUFBRUgsV0FBTyxFQUFFLElBQVg7QUFBaUJDLFFBQUksRUFBRSxNQUF2QjtBQUErQkMsU0FBSyxFQUFFO0FBQXRDLEdBRHNCLEVBRXRCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQUZzQixFQUd0QjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FIc0IsRUFJdEI7QUFBRUYsV0FBTyxFQUFFLEdBQVg7QUFBZ0JDLFFBQUksRUFBRSxRQUF0QjtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBSnNCLEVBS3RCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQUxzQixFQU10QjtBQUFFRixXQUFPLEVBQUUsS0FBWDtBQUFrQkMsUUFBSSxFQUFFLE1BQXhCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FOc0IsRUFPdEI7QUFBRUYsV0FBTyxFQUFFLEdBQVg7QUFBZ0JDLFFBQUksRUFBRSxRQUF0QjtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBUHNCLEVBUXRCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQVJzQixFQVN0QjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0FUc0IsRUFVdEI7QUFBRUYsV0FBTyxFQUFFLEdBQVg7QUFBZ0JDLFFBQUksRUFBRSxRQUF0QjtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBVnNCLEVBV3RCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsTUFBdEI7QUFBOEJDLFNBQUssRUFBRTtBQUFyQyxHQVhzQixFQVl0QjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0Fac0IsRUFhdEI7QUFBRUYsV0FBTyxFQUFFLEdBQVg7QUFBZ0JDLFFBQUksRUFBRSxRQUF0QjtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBYnNCLEVBY3RCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQWRzQixFQWV0QjtBQUFFRixXQUFPLEVBQUUsR0FBWDtBQUFnQkMsUUFBSSxFQUFFLFFBQXRCO0FBQWdDQyxTQUFLLEVBQUU7QUFBdkMsR0Fmc0IsRUFnQnRCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQWhCc0IsRUFpQnRCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQWpCc0IsRUFrQnRCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQWxCc0IsRUFtQnRCO0FBQUVGLFdBQU8sRUFBRSxJQUFYO0FBQWlCQyxRQUFJLEVBQUUsUUFBdkI7QUFBaUNDLFNBQUssRUFBRTtBQUF4QyxHQW5Cc0IsRUFvQnRCO0FBQUVGLFdBQU8sRUFBRSxHQUFYO0FBQWdCQyxRQUFJLEVBQUUsUUFBdEI7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQXBCc0IsQ0FBeEI7O0FBdUJBLE1BQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBZUMsSUFBZixFQUE2QnpCLElBQTdCLEVBQThDO0FBQ3pELFlBQVFBLElBQVI7QUFDRSxXQUFLLEdBQUw7QUFDRSxlQUFPd0IsSUFBSSxHQUFHQyxJQUFkOztBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU9ELElBQUksR0FBR0MsSUFBZDs7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPRCxJQUFJLEdBQUdDLElBQWQ7O0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBT0QsSUFBSSxHQUFHQyxJQUFkOztBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU9ELElBQUksR0FBR0MsSUFBZDs7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPRCxJQUFJLEdBQUdDLElBQWQ7O0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBT0MsTUFBTSxDQUFDdEIsS0FBSyxDQUFDdUIsS0FBUCxDQUFOLEdBQXNCLElBQTdCOztBQUNGLFdBQUssS0FBTDtBQUNFLGVBQU9ELE1BQU0sQ0FBQ3RCLEtBQUssQ0FBQ3VCLEtBQVAsQ0FBTixHQUFzQixDQUFDLENBQTlCO0FBaEJKOztBQWtCQSxXQUFPLENBQVA7QUFDRCxHQXBCRDs7QUFzQkEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBMkI7QUFBQSxRQUF4QkMsR0FBd0IsUUFBeEJBLEdBQXdCOztBQUM3QyxRQUNFQSxHQUFHLEtBQUssR0FBUixJQUNBQSxHQUFHLEtBQUssR0FEUixJQUVBQSxHQUFHLEtBQUssR0FGUixJQUdBQSxHQUFHLEtBQUssR0FIUixJQUlBQSxHQUFHLEtBQUssR0FKUixJQUtBQSxHQUFHLEtBQUssR0FMUixJQU1BQSxHQUFHLEtBQUssR0FOUixJQU9BQSxHQUFHLEtBQUssR0FQUixJQVFBQSxHQUFHLEtBQUssR0FSUixJQVNBQSxHQUFHLEtBQUssR0FWVixFQVdFO0FBQ0EsVUFBSSxDQUFDZCxLQUFMLEVBQVllLGlCQUFpQixDQUFDRCxHQUFHLENBQUNFLFFBQUosRUFBRCxDQUFqQjtBQUNiLEtBYkQsTUFhTyxJQUNMRixHQUFHLEtBQUssR0FBUixJQUNBQSxHQUFHLEtBQUssR0FEUixJQUVBQSxHQUFHLEtBQUssR0FGUixJQUdBQSxHQUFHLEtBQUssR0FIUixJQUlBQSxHQUFHLEtBQUssR0FKUixJQUtBQSxHQUFHLEtBQUssR0FOSCxFQU9MO0FBQ0FHLHFCQUFlLENBQUNILEdBQUQsQ0FBZjtBQUNELEtBVE0sTUFTQSxJQUFJQSxHQUFHLEtBQUssT0FBUixJQUFtQkEsR0FBRyxLQUFLLEdBQS9CLEVBQW9DO0FBQ3pDRyxxQkFBZSxDQUFDLEdBQUQsQ0FBZjtBQUNEO0FBQ0YsR0ExQkQ7O0FBNEJBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ1AsV0FBakMsRUFEYyxDQUVkOztBQUNBLFdBQU8sWUFBTTtBQUNYTSxZQUFNLENBQUNFLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DUixXQUFwQztBQUNELEtBRkQ7QUFHRCxHQU5RLENBQVQ7QUFRQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTdCLEtBQUssQ0FBQ3VCLEtBQU4sQ0FBWVUsTUFBWixHQUFxQixFQUF6QixFQUE2QnJCLFFBQVEsQ0FBQyxJQUFELENBQVIsQ0FBN0IsS0FDS0EsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNOLEdBSFEsRUFHTixDQUFDWixLQUFLLENBQUN1QixLQUFQLENBSE0sQ0FBVDs7QUFJQSxNQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQXNCO0FBQ3hDbkMsU0FBSyxDQUFDb0MsUUFBTixDQUFlRCxRQUFmO0FBQ0QsR0FGRDs7QUFJQSxNQUFNVCxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNILEtBQUQsRUFBbUI7QUFDM0MsUUFBSWMsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFNQyxVQUFVLEdBQUd0QyxLQUFLLENBQUN1QixLQUF6QjtBQUNBLFFBQU1nQixTQUFTLEdBQUc5QixJQUFJLEdBQUcsR0FBSCxHQUFTNkIsVUFBL0I7O0FBQ0EsWUFBUWYsS0FBUjtBQUNFLFdBQUssR0FBTDtBQUNFYyxnQkFBUSxHQUFHRSxTQUFTLEtBQUssR0FBZCxHQUFvQkEsU0FBUyxDQUFDWixRQUFWLEtBQXVCSixLQUEzQyxHQUFtRCxHQUE5RDtBQUNBOztBQUNGLFdBQUssSUFBTDtBQUNFYyxnQkFBUSxHQUFHRSxTQUFTLEtBQUssR0FBZCxHQUFvQkEsU0FBUyxDQUFDWixRQUFWLEtBQXVCSixLQUEzQyxHQUFtRCxHQUE5RDtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFLFlBQUksQ0FBQ3ZCLEtBQUssQ0FBQ3VCLEtBQU4sQ0FBWUksUUFBWixHQUF1QmEsUUFBdkIsQ0FBZ0MsR0FBaEMsQ0FBTCxFQUEyQztBQUN6Q0gsa0JBQVEsYUFBTXJDLEtBQUssQ0FBQ3VCLEtBQVosTUFBUjtBQUNELFNBRkQsTUFFTztBQUNMO0FBQ0Q7O0FBQ0Q7O0FBQ0Y7QUFDRWtCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZSCxTQUFaO0FBQ0FGLGdCQUFRLEdBQ05mLE1BQU0sQ0FBQ2lCLFNBQUQsQ0FBTixLQUFzQixDQUF0QixHQUNJQSxTQUFTLENBQUNaLFFBQVYsS0FBdUJKLEtBRDNCLEdBRUlnQixTQUFTLENBQUNaLFFBQVYsR0FBcUJnQixTQUFyQixDQUErQixDQUEvQixJQUFvQ3BCLEtBSDFDO0FBaEJKOztBQXFCQWIsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBTCxjQUFVLENBQUNpQixNQUFNLENBQUNlLFFBQUQsQ0FBUCxDQUFWO0FBQ0FILGVBQVcsQ0FBQ0csUUFBRCxDQUFYO0FBQ0QsR0E1QkQ7O0FBOEJBLE1BQU1PLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJWLGVBQVcsQ0FBQyxHQUFELENBQVg7QUFDQS9CLFdBQU8sQ0FBQyxDQUFELENBQVA7QUFDQUUsY0FBVSxDQUFDLENBQUQsQ0FBVjtBQUNBQyxhQUFTLENBQUMsRUFBRCxDQUFUO0FBQ0FJLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQU5EOztBQVFBLE1BQU1rQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNMLEtBQUQsRUFBbUI7QUFDekMsWUFBUUEsS0FBUjtBQUNFLFdBQUssSUFBTDtBQUNFcUIsaUJBQVM7QUFDVDs7QUFDRixXQUFLLEdBQUw7QUFDRVYsbUJBQVcsQ0FBQ2YsSUFBSSxDQUFDakIsSUFBRCxFQUFPRSxPQUFQLEVBQWdCbUIsS0FBaEIsQ0FBSixDQUEyQkksUUFBM0IsRUFBRCxDQUFYO0FBQ0E7O0FBQ0YsV0FBSyxLQUFMO0FBQ0VPLG1CQUFXLENBQUNmLElBQUksQ0FBQ2pCLElBQUQsRUFBT0UsT0FBUCxFQUFnQm1CLEtBQWhCLENBQUosQ0FBMkJJLFFBQTNCLEVBQUQsQ0FBWDtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNFYyxlQUFPLENBQUNDLEdBQVIsQ0FBWXhDLElBQVosRUFBa0JFLE9BQWxCLEVBQTJCTixNQUEzQjtBQUNBLFlBQU0rQyxTQUFTLEdBQUcxQixJQUFJLENBQUNqQixJQUFELEVBQU9FLE9BQVAsRUFBZ0JOLE1BQWhCLENBQXRCO0FBQ0FLLGVBQU8sQ0FBQzBDLFNBQUQsQ0FBUDtBQUNBWCxtQkFBVyxDQUFDVyxTQUFTLENBQUNsQixRQUFWLEVBQUQsQ0FBWCxDQUpGLENBS0U7O0FBQ0FqQixlQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0E7O0FBQ0Y7QUFDRSxZQUFNb0MsU0FBUyxHQUFHM0IsSUFBSSxDQUFDakIsSUFBRCxFQUFPRSxPQUFQLEVBQWdCTixNQUFoQixDQUF0QjtBQUNBWSxlQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FKLGlCQUFTLENBQUNpQixLQUFELENBQVQ7O0FBQ0EsWUFBSXpCLE1BQU0sS0FBS3lCLEtBQWYsRUFBc0I7QUFDcEIsY0FBSWhCLFVBQUosRUFBZ0I7QUFDZEosbUJBQU8sQ0FBQzJDLFNBQUQsQ0FBUDtBQUNBWix1QkFBVyxDQUFDWSxTQUFTLENBQUNuQixRQUFWLEVBQUQsQ0FBWDtBQUNBbkIseUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxXQUpELE1BSU87QUFDTEwsbUJBQU8sQ0FBQ21CLE1BQU0sQ0FBQ3RCLEtBQUssQ0FBQ3VCLEtBQVAsQ0FBUCxDQUFQO0FBQ0Q7QUFDRixTQVJELE1BUU87QUFDTHBCLGlCQUFPLENBQUNtQixNQUFNLENBQUN0QixLQUFLLENBQUN1QixLQUFQLENBQVAsQ0FBUDtBQUNBZix1QkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNEOztBQWpDTDtBQW1DRCxHQXBDRDs7QUFzQ0EsTUFBTXVDLFdBQVcsR0FBRy9DLEtBQUssQ0FBQ1osTUFBTixJQUFnQixHQUFwQztBQUNBLE1BQU00RCxPQUFPLEdBQUdoRCxLQUFLLENBQUNaLE1BQU4sSUFBZ0IsR0FBaEM7QUFDQSxNQUFNNkQsR0FBRyxHQUFHRixXQUFXLEdBQUc3QixlQUFILEdBQXFCSixNQUE1QztBQUNBLFNBQ0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBRUQsT0FBTyxDQUFDOUIsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBWSxXQUFPLEVBQUVnRSxXQUFXLEdBQUcsQ0FBSCxHQUFPLENBQXZDO0FBQTBDLFdBQU8sRUFBRUMsT0FBTyxHQUFHLENBQUgsR0FBTyxDQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFVBQUN6QixHQUFELEVBQU0wQixLQUFOLEVBQXdCO0FBQy9CLFFBQU1DLFFBQVEsR0FDWjNCLEdBQUcsQ0FBQ1YsT0FBSixLQUFnQixJQUFoQixJQUF3QmYsS0FBSyxDQUFDdUIsS0FBTixLQUFnQixHQUF4QyxJQUErQ3ZCLEtBQUssQ0FBQ0osSUFBTixLQUFlLEVBQTlELEdBQ0ksR0FESixHQUVJNkIsR0FBRyxDQUFDVixPQUhWO0FBSUEsUUFBSXNDLFFBQVEsR0FBRyxJQUFmOztBQUNBLFlBQVE1QixHQUFHLENBQUNULElBQVo7QUFDRSxXQUFLLFFBQUw7QUFDRSxZQUFJbEIsTUFBTSxLQUFLMkIsR0FBRyxDQUFDUixLQUFuQixFQUEwQjtBQUN4Qm9DLGtCQUFRLEdBQUdDLG9EQUFJLENBQ2JOLE9BQU8sR0FBR25DLE9BQU8sQ0FBQzNCLFlBQVgsR0FBMEIyQixPQUFPLENBQUN4QixZQUQ1QixFQUVid0IsT0FBTyxDQUFDdkIsTUFGSyxFQUdidUIsT0FBTyxDQUFDaEIsY0FISyxDQUFmO0FBS0QsU0FORCxNQU1PO0FBQ0x3RCxrQkFBUSxHQUFHQyxvREFBSSxDQUNiTixPQUFPLEdBQUduQyxPQUFPLENBQUMzQixZQUFYLEdBQTBCMkIsT0FBTyxDQUFDeEIsWUFENUIsRUFFYndCLE9BQU8sQ0FBQ3ZCLE1BRkssRUFHYnVCLE9BQU8sQ0FBQ2YsTUFISyxDQUFmO0FBS0Q7O0FBQ0Q7O0FBQ0YsV0FBSyxNQUFMO0FBQ0V1RCxnQkFBUSxHQUFHQyxvREFBSSxDQUNiTixPQUFPLEdBQUduQyxPQUFPLENBQUMzQixZQUFYLEdBQTBCMkIsT0FBTyxDQUFDeEIsWUFENUIsRUFFYndCLE9BQU8sQ0FBQ3ZCLE1BRkssRUFHYnVCLE9BQU8sQ0FBQ2pCLElBSEssQ0FBZjtBQUtBOztBQUNGO0FBQ0V5RCxnQkFBUSxHQUFHQyxvREFBSSxDQUNiTixPQUFPLEdBQUduQyxPQUFPLENBQUMzQixZQUFYLEdBQTBCMkIsT0FBTyxDQUFDeEIsWUFENUIsRUFFYndCLE9BQU8sQ0FBQ3ZCLE1BRkssQ0FBZjtBQXhCSjs7QUE2QkEsV0FDRSxNQUFDLG9EQUFEO0FBQU0sZUFBUyxFQUFFdUIsT0FBTyxDQUFDOUIsR0FBekI7QUFBOEIsU0FBRyxFQUFFb0UsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUNQMUIsR0FBRyxDQUFDVCxJQUFKLEtBQWEsUUFBYixHQUNJVSxpQkFBaUIsQ0FBQ0QsR0FBRyxDQUFDUixLQUFMLENBRHJCLEdBRUlXLGVBQWUsQ0FBQ0gsR0FBRyxDQUFDUixLQUFMLENBSFo7QUFBQSxPQURYO0FBTUUsZUFBUyxFQUFFb0MsUUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUdELFFBUkgsQ0FERixDQURGO0FBY0QsR0FqREEsQ0FESCxDQURGLENBREY7QUF3REQ7O0dBOVB1QnJELFM7VUFPTnBCLFM7OztLQVBNb0IsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbnVtYmVyLXBhZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgS2V5IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCwgU2ltcGxlR3JpZCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgc2lnbiB9IGZyb20gJ2NyeXB0byc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBib3g6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgbnVtYmVyU2l6ZVNtOiB7XG4gICAgICB3aWR0aDogJzU1cHgnLFxuICAgICAgaGVpZ2h0OiAnNTVweCcsXG4gICAgfSxcbiAgICBudW1iZXJTaXplTWQ6IHtcbiAgICAgIHdpZHRoOiAnNjVweCcsXG4gICAgICBoZWlnaHQ6ICc2NXB4JyxcbiAgICB9LFxuICAgIG51bWJlcjoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNTEsNTEsNTEpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGZvbnRTaXplOiAnMzZweCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoNzUsNzUsNzUpJyxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxMTUsMTE1LDExNSknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNpZ246IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxNjYsMTY2LDE2NiknLFxuICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigxOTAsMTkwLDE5MCknLFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIxNywyMTcsMjE3KScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VsZWN0ZWRTeW1ib2w6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgIGNvbG9yOiAncmdiKDI0MiwxNjIsNjApJyxcbiAgICAgIGZvbnRTaXplOiAnMzBweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE5MCwxOTAsMTkwKScsXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjE3LDIxNywyMTcpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzeW1ib2w6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDIsMTYyLDYwKScsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0MywxODAsMTAwKScsXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ0LDIwMCwxNDkpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBJTnVtYmVyUGFkUHJvcHMge1xuICBzZXRJbnB1dDogKGlucHV0OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGlucHV0OiBzdHJpbmc7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOdW1iZXJQYWQocHJvcHM6IElOdW1iZXJQYWRQcm9wcykge1xuICBjb25zdCBbcHJldiwgc2V0UHJldl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzeW1ib2wsIHNldFN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzeW1ib2xGbGFnLCBzZXRTeW1ib2xGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNOYU4sIHNldElzTmFOXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBrZXlwYWQgPSBbXG4gICAgeyBkaXNwbGF5OiAnQUMnLCB0eXBlOiAnc2lnbicsIHZhbHVlOiAnQUMnIH0sXG4gICAgeyBkaXNwbGF5OiAnKy/iiJInLCB0eXBlOiAnc2lnbicsIHZhbHVlOiAnKy/iiJInIH0sXG4gICAgeyBkaXNwbGF5OiAnJScsIHR5cGU6ICdzaWduJywgdmFsdWU6ICclJyB9LFxuICAgIHsgZGlzcGxheTogJ8O3JywgdHlwZTogJ3N5bWJvbCcsIHZhbHVlOiAnLycgfSxcbiAgICB7IGRpc3BsYXk6ICc3JywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnNycgfSxcbiAgICB7IGRpc3BsYXk6ICc4JywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnOCcgfSxcbiAgICB7IGRpc3BsYXk6ICc5JywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnOScgfSxcbiAgICB7IGRpc3BsYXk6ICfDlycsIHR5cGU6ICdzeW1ib2wnLCB2YWx1ZTogJyonIH0sXG4gICAgeyBkaXNwbGF5OiAnNCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzQnIH0sXG4gICAgeyBkaXNwbGF5OiAnNScsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzUnIH0sXG4gICAgeyBkaXNwbGF5OiAnNicsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzYnIH0sXG4gICAgeyBkaXNwbGF5OiAn4oiSJywgdHlwZTogJ3N5bWJvbCcsIHZhbHVlOiAnLScgfSxcbiAgICB7IGRpc3BsYXk6ICcxJywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnMScgfSxcbiAgICB7IGRpc3BsYXk6ICcyJywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnMicgfSxcbiAgICB7IGRpc3BsYXk6ICczJywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnMycgfSxcbiAgICB7IGRpc3BsYXk6ICcrJywgdHlwZTogJ3N5bWJvbCcsIHZhbHVlOiAnKycgfSxcbiAgICB7IGRpc3BsYXk6ICcwJywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnMCcgfSxcbiAgICB7IGRpc3BsYXk6ICcwMCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzAwJyB9LFxuICAgIHsgZGlzcGxheTogJy4nLCB0eXBlOiAnbnVtYmVyJywgdmFsdWU6ICcuJyB9LFxuICAgIHsgZGlzcGxheTogJz0nLCB0eXBlOiAnc3ltYm9sJywgdmFsdWU6ICc9JyB9LFxuICBdO1xuICBjb25zdCBrZXlwYWRMYW5kc2NhcGUgPSBbXG4gICAgeyBkaXNwbGF5OiAnQUMnLCB0eXBlOiAnc2lnbicsIHZhbHVlOiAnQUMnIH0sXG4gICAgeyBkaXNwbGF5OiAnNycsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzcnIH0sXG4gICAgeyBkaXNwbGF5OiAnOCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzgnIH0sXG4gICAgeyBkaXNwbGF5OiAnOScsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzknIH0sXG4gICAgeyBkaXNwbGF5OiAnw7cnLCB0eXBlOiAnc3ltYm9sJywgdmFsdWU6ICcvJyB9LFxuICAgIHsgZGlzcGxheTogJysv4oiSJywgdHlwZTogJ3NpZ24nLCB2YWx1ZTogJysv4oiSJyB9LFxuICAgIHsgZGlzcGxheTogJzQnLCB0eXBlOiAnbnVtYmVyJywgdmFsdWU6ICc0JyB9LFxuICAgIHsgZGlzcGxheTogJzUnLCB0eXBlOiAnbnVtYmVyJywgdmFsdWU6ICc1JyB9LFxuICAgIHsgZGlzcGxheTogJzYnLCB0eXBlOiAnbnVtYmVyJywgdmFsdWU6ICc2JyB9LFxuICAgIHsgZGlzcGxheTogJ8OXJywgdHlwZTogJ3N5bWJvbCcsIHZhbHVlOiAnKicgfSxcbiAgICB7IGRpc3BsYXk6ICclJywgdHlwZTogJ3NpZ24nLCB2YWx1ZTogJyUnIH0sXG4gICAgeyBkaXNwbGF5OiAnMScsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzEnIH0sXG4gICAgeyBkaXNwbGF5OiAnMicsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzInIH0sXG4gICAgeyBkaXNwbGF5OiAnMycsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzMnIH0sXG4gICAgeyBkaXNwbGF5OiAn4oiSJywgdHlwZTogJ3N5bWJvbCcsIHZhbHVlOiAnLScgfSxcbiAgICB7IGRpc3BsYXk6ICc9JywgdHlwZTogJ3N5bWJvbCcsIHZhbHVlOiAnPScgfSxcbiAgICB7IGRpc3BsYXk6ICcuJywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnLicgfSxcbiAgICB7IGRpc3BsYXk6ICcwJywgdHlwZTogJ251bWJlcicsIHZhbHVlOiAnMCcgfSxcbiAgICB7IGRpc3BsYXk6ICcwMCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogJzAwJyB9LFxuICAgIHsgZGlzcGxheTogJysnLCB0eXBlOiAnc3ltYm9sJywgdmFsdWU6ICcrJyB9LFxuICBdO1xuXG4gIGNvbnN0IGNhbGMgPSAobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIsIHNpZ246IHN0cmluZykgPT4ge1xuICAgIHN3aXRjaCAoc2lnbikge1xuICAgICAgY2FzZSAnKyc6XG4gICAgICAgIHJldHVybiBudW0xICsgbnVtMjtcbiAgICAgIGNhc2UgJy0nOlxuICAgICAgICByZXR1cm4gbnVtMSAtIG51bTI7XG4gICAgICBjYXNlICfDtyc6XG4gICAgICAgIHJldHVybiBudW0xIC8gbnVtMjtcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICByZXR1cm4gbnVtMSAvIG51bTI7XG4gICAgICBjYXNlICfDlyc6XG4gICAgICAgIHJldHVybiBudW0xICogbnVtMjtcbiAgICAgIGNhc2UgJyonOlxuICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgICBjYXNlICclJzpcbiAgICAgICAgcmV0dXJuIE51bWJlcihwcm9wcy5pbnB1dCkgKiAwLjAxO1xuICAgICAgY2FzZSAnKy/iiJInOlxuICAgICAgICByZXR1cm4gTnVtYmVyKHByb3BzLmlucHV0KSAqIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBkb3duSGFuZGxlciA9ICh7IGtleSB9OiB7IGtleTogS2V5IH0pID0+IHtcbiAgICBpZiAoXG4gICAgICBrZXkgPT09ICcwJyB8fFxuICAgICAga2V5ID09PSAnMScgfHxcbiAgICAgIGtleSA9PT0gJzInIHx8XG4gICAgICBrZXkgPT09ICczJyB8fFxuICAgICAga2V5ID09PSAnNCcgfHxcbiAgICAgIGtleSA9PT0gJzUnIHx8XG4gICAgICBrZXkgPT09ICc2JyB8fFxuICAgICAga2V5ID09PSAnNycgfHxcbiAgICAgIGtleSA9PT0gJzgnIHx8XG4gICAgICBrZXkgPT09ICc5J1xuICAgICkge1xuICAgICAgaWYgKCFpc05hTikgaGFuZGxlTnVtYmVyQ2xpY2soa2V5LnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBrZXkgPT09ICctJyB8fFxuICAgICAga2V5ID09PSAnKycgfHxcbiAgICAgIGtleSA9PT0gJy8nIHx8XG4gICAgICBrZXkgPT09ICcqJyB8fFxuICAgICAga2V5ID09PSAnLicgfHxcbiAgICAgIGtleSA9PT0gJyUnXG4gICAgKSB7XG4gICAgICBoYW5kbGVTaWduQ2xpY2soa2V5KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICc9Jykge1xuICAgICAgaGFuZGxlU2lnbkNsaWNrKCc9Jyk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZG93bkhhbmRsZXIpO1xuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkb3duSGFuZGxlcik7XG4gICAgfTtcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMuaW5wdXQubGVuZ3RoID4gMjUpIHNldElzTmFOKHRydWUpO1xuICAgIGVsc2Ugc2V0SXNOYU4oZmFsc2UpO1xuICB9LCBbcHJvcHMuaW5wdXRdKTtcbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoaW5wdXRTdHI6IHN0cmluZykgPT4ge1xuICAgIHByb3BzLnNldElucHV0KGlucHV0U3RyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOdW1iZXJDbGljayA9IChpbnB1dDogc3RyaW5nKSA9PiB7XG4gICAgbGV0IG5ld0lucHV0ID0gJyc7XG4gICAgY29uc3QgbmV3Q3VycmVudCA9IHByb3BzLmlucHV0O1xuICAgIGNvbnN0IHByZXZJbnB1dCA9IGZsYWcgPyAnMCcgOiBuZXdDdXJyZW50O1xuICAgIHN3aXRjaCAoaW5wdXQpIHtcbiAgICAgIGNhc2UgJzAnOlxuICAgICAgICBuZXdJbnB1dCA9IHByZXZJbnB1dCAhPT0gJzAnID8gcHJldklucHV0LnRvU3RyaW5nKCkgKyBpbnB1dCA6ICcwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcwMCc6XG4gICAgICAgIG5ld0lucHV0ID0gcHJldklucHV0ICE9PSAnMCcgPyBwcmV2SW5wdXQudG9TdHJpbmcoKSArIGlucHV0IDogJzAnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy4nOlxuICAgICAgICBpZiAoIXByb3BzLmlucHV0LnRvU3RyaW5nKCkuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgICAgIG5ld0lucHV0ID0gYCR7cHJvcHMuaW5wdXR9LmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2cocHJldklucHV0KTtcbiAgICAgICAgbmV3SW5wdXQgPVxuICAgICAgICAgIE51bWJlcihwcmV2SW5wdXQpICE9PSAwXG4gICAgICAgICAgICA/IHByZXZJbnB1dC50b1N0cmluZygpICsgaW5wdXRcbiAgICAgICAgICAgIDogcHJldklucHV0LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDEpICsgaW5wdXQ7XG4gICAgfVxuICAgIHNldEZsYWcoZmFsc2UpO1xuICAgIHNldEN1cnJlbnQoTnVtYmVyKG5ld0lucHV0KSk7XG4gICAgaGFuZGxlSW5wdXQobmV3SW5wdXQpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRWYWx1ZSA9ICgpID0+IHtcbiAgICBoYW5kbGVJbnB1dCgnMCcpO1xuICAgIHNldFByZXYoMCk7XG4gICAgc2V0Q3VycmVudCgwKTtcbiAgICBzZXRTeW1ib2woJycpO1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25DbGljayA9IChpbnB1dDogc3RyaW5nKSA9PiB7XG4gICAgc3dpdGNoIChpbnB1dCkge1xuICAgICAgY2FzZSAnQUMnOlxuICAgICAgICBpbml0VmFsdWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgICAgaGFuZGxlSW5wdXQoY2FsYyhwcmV2LCBjdXJyZW50LCBpbnB1dCkudG9TdHJpbmcoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnKy/iiJInOlxuICAgICAgICBoYW5kbGVJbnB1dChjYWxjKHByZXYsIGN1cnJlbnQsIGlucHV0KS50b1N0cmluZygpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICc9JzpcbiAgICAgICAgY29uc29sZS5sb2cocHJldiwgY3VycmVudCwgc3ltYm9sKTtcbiAgICAgICAgY29uc3QgbmV3SW5wdXQxID0gY2FsYyhwcmV2LCBjdXJyZW50LCBzeW1ib2wpO1xuICAgICAgICBzZXRQcmV2KG5ld0lucHV0MSk7XG4gICAgICAgIGhhbmRsZUlucHV0KG5ld0lucHV0MS50b1N0cmluZygpKTtcbiAgICAgICAgLy8gc2V0U3ltYm9sKGlucHV0KTtcbiAgICAgICAgc2V0RmxhZyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBuZXdJbnB1dDIgPSBjYWxjKHByZXYsIGN1cnJlbnQsIHN5bWJvbCk7XG4gICAgICAgIHNldEZsYWcodHJ1ZSk7XG4gICAgICAgIHNldFN5bWJvbChpbnB1dCk7XG4gICAgICAgIGlmIChzeW1ib2wgPT09IGlucHV0KSB7XG4gICAgICAgICAgaWYgKHN5bWJvbEZsYWcpIHtcbiAgICAgICAgICAgIHNldFByZXYobmV3SW5wdXQyKTtcbiAgICAgICAgICAgIGhhbmRsZUlucHV0KG5ld0lucHV0Mi50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHNldFN5bWJvbEZsYWcoZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQcmV2KE51bWJlcihwcm9wcy5pbnB1dCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRQcmV2KE51bWJlcihwcm9wcy5pbnB1dCkpO1xuICAgICAgICAgIHNldFN5bWJvbEZsYWcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNMYW5kc2NhcGUgPSBwcm9wcy5oZWlnaHQgPD0gNDE0O1xuICBjb25zdCBpc1NtYWxsID0gcHJvcHMuaGVpZ2h0IDw9IDMyMDtcbiAgY29uc3QgcGFkID0gaXNMYW5kc2NhcGUgPyBrZXlwYWRMYW5kc2NhcGUgOiBrZXlwYWQ7XG4gIHJldHVybiAoXG4gICAgPEZsZXggY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtpc0xhbmRzY2FwZSA/IDUgOiA0fSBzcGFjaW5nPXtpc1NtYWxsID8gMSA6IDJ9PlxuICAgICAgICB7cGFkLm1hcCgoa2V5LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5VmFsdWUgPVxuICAgICAgICAgICAga2V5LmRpc3BsYXkgPT09ICdBQycgJiYgcHJvcHMuaW5wdXQgIT09ICcwJyAmJiBwcm9wcy5zaWduID09PSAnJ1xuICAgICAgICAgICAgICA/ICdDJ1xuICAgICAgICAgICAgICA6IGtleS5kaXNwbGF5O1xuICAgICAgICAgIGxldCBjbGFzc1N0ciA9IG51bGw7XG4gICAgICAgICAgc3dpdGNoIChrZXkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0ga2V5LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NTdHIgPSBjbHN4KFxuICAgICAgICAgICAgICAgICAgaXNTbWFsbCA/IGNsYXNzZXMubnVtYmVyU2l6ZVNtIDogY2xhc3Nlcy5udW1iZXJTaXplTWQsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLm51bWJlcixcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMuc2VsZWN0ZWRTeW1ib2xcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzU3RyID0gY2xzeChcbiAgICAgICAgICAgICAgICAgIGlzU21hbGwgPyBjbGFzc2VzLm51bWJlclNpemVTbSA6IGNsYXNzZXMubnVtYmVyU2l6ZU1kLFxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcy5udW1iZXIsXG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLnN5bWJvbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzaWduJzpcbiAgICAgICAgICAgICAgY2xhc3NTdHIgPSBjbHN4KFxuICAgICAgICAgICAgICAgIGlzU21hbGwgPyBjbGFzc2VzLm51bWJlclNpemVTbSA6IGNsYXNzZXMubnVtYmVyU2l6ZU1kLFxuICAgICAgICAgICAgICAgIGNsYXNzZXMubnVtYmVyLFxuICAgICAgICAgICAgICAgIGNsYXNzZXMuc2lnblxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGNsYXNzU3RyID0gY2xzeChcbiAgICAgICAgICAgICAgICBpc1NtYWxsID8gY2xhc3Nlcy5udW1iZXJTaXplU20gOiBjbGFzc2VzLm51bWJlclNpemVNZCxcbiAgICAgICAgICAgICAgICBjbGFzc2VzLm51bWJlclxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIGtleS50eXBlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZU51bWJlckNsaWNrKGtleS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVTaWduQ2xpY2soa2V5LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU3RyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2tleVZhbHVlfVxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/number-pad.tsx\n");

/***/ }),

/***/ "./node_modules/asn1.js/lib/asn1.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/api.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/buffer.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/node.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/base/reporter.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/constants/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/decoders/pem.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/der.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/index.js":
false,

/***/ "./node_modules/asn1.js/lib/asn1/encoders/pem.js":
false,

/***/ "./node_modules/asn1.js/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/brorand/index.js":
false,

/***/ "./node_modules/browserify-aes/aes.js":
false,

/***/ "./node_modules/browserify-aes/authCipher.js":
false,

/***/ "./node_modules/browserify-aes/browser.js":
false,

/***/ "./node_modules/browserify-aes/decrypter.js":
false,

/***/ "./node_modules/browserify-aes/encrypter.js":
false,

/***/ "./node_modules/browserify-aes/ghash.js":
false,

/***/ "./node_modules/browserify-aes/incr32.js":
false,

/***/ "./node_modules/browserify-aes/modes/cbc.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb1.js":
false,

/***/ "./node_modules/browserify-aes/modes/cfb8.js":
false,

/***/ "./node_modules/browserify-aes/modes/ctr.js":
false,

/***/ "./node_modules/browserify-aes/modes/ecb.js":
false,

/***/ "./node_modules/browserify-aes/modes/index.js":
false,

/***/ "./node_modules/browserify-aes/modes/list.json":
false,

/***/ "./node_modules/browserify-aes/modes/ofb.js":
false,

/***/ "./node_modules/browserify-aes/streamCipher.js":
false,

/***/ "./node_modules/browserify-cipher/browser.js":
false,

/***/ "./node_modules/browserify-des/index.js":
false,

/***/ "./node_modules/browserify-des/modes.js":
false,

/***/ "./node_modules/browserify-rsa/index.js":
false,

/***/ "./node_modules/browserify-rsa/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/browserify-sign/algos.js":
false,

/***/ "./node_modules/browserify-sign/browser/algorithms.json":
false,

/***/ "./node_modules/browserify-sign/browser/curves.json":
false,

/***/ "./node_modules/browserify-sign/browser/index.js":
false,

/***/ "./node_modules/browserify-sign/browser/sign.js":
false,

/***/ "./node_modules/browserify-sign/browser/verify.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/errors-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/from-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/pipeline.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/state.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/browserify-sign/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/buffer-xor/index.js":
false,

/***/ "./node_modules/cipher-base/index.js":
false,

/***/ "./node_modules/core-util-is/lib/util.js":
false,

/***/ "./node_modules/create-ecdh/browser.js":
false,

/***/ "./node_modules/create-ecdh/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/create-hash/browser.js":
false,

/***/ "./node_modules/create-hash/md5.js":
false,

/***/ "./node_modules/create-hmac/browser.js":
false,

/***/ "./node_modules/create-hmac/legacy.js":
false,

/***/ "./node_modules/crypto-browserify/index.js":
false,

/***/ "./node_modules/des.js/lib/des.js":
false,

/***/ "./node_modules/des.js/lib/des/cbc.js":
false,

/***/ "./node_modules/des.js/lib/des/cipher.js":
false,

/***/ "./node_modules/des.js/lib/des/des.js":
false,

/***/ "./node_modules/des.js/lib/des/ede.js":
false,

/***/ "./node_modules/des.js/lib/des/utils.js":
false,

/***/ "./node_modules/diffie-hellman/browser.js":
false,

/***/ "./node_modules/diffie-hellman/lib/dh.js":
false,

/***/ "./node_modules/diffie-hellman/lib/generatePrime.js":
false,

/***/ "./node_modules/diffie-hellman/lib/primes.json":
false,

/***/ "./node_modules/diffie-hellman/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/base.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/edwards.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/mont.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curve/short.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/curves.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/ec/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/index.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/key.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/eddsa/signature.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/precomputed/secp256k1.js":
false,

/***/ "./node_modules/elliptic/lib/elliptic/utils.js":
false,

/***/ "./node_modules/elliptic/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/elliptic/package.json":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/evp_bytestokey/index.js":
false,

/***/ "./node_modules/hash-base/index.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/errors-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/from-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/pipeline.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/state.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/hash-base/node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/hash.js/lib/hash.js":
false,

/***/ "./node_modules/hash.js/lib/hash/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/hmac.js":
false,

/***/ "./node_modules/hash.js/lib/hash/ripemd.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/1.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/224.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/256.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/384.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/512.js":
false,

/***/ "./node_modules/hash.js/lib/hash/sha/common.js":
false,

/***/ "./node_modules/hash.js/lib/hash/utils.js":
false,

/***/ "./node_modules/hmac-drbg/lib/hmac-drbg.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/md5.js/index.js":
false,

/***/ "./node_modules/miller-rabin/lib/mr.js":
false,

/***/ "./node_modules/miller-rabin/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/minimalistic-assert/index.js":
false,

/***/ "./node_modules/minimalistic-crypto-utils/lib/utils.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/stream-browserify/index.js":
false,

/***/ "./node_modules/parse-asn1/aesid.json":
false,

/***/ "./node_modules/parse-asn1/asn1.js":
false,

/***/ "./node_modules/parse-asn1/certificate.js":
false,

/***/ "./node_modules/parse-asn1/fixProc.js":
false,

/***/ "./node_modules/parse-asn1/index.js":
false,

/***/ "./node_modules/pbkdf2/browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/async.js":
false,

/***/ "./node_modules/pbkdf2/lib/default-encoding.js":
false,

/***/ "./node_modules/pbkdf2/lib/precondition.js":
false,

/***/ "./node_modules/pbkdf2/lib/sync-browser.js":
false,

/***/ "./node_modules/pbkdf2/lib/to-buffer.js":
false,

/***/ "./node_modules/process-nextick-args/index.js":
false,

/***/ "./node_modules/public-encrypt/browser.js":
false,

/***/ "./node_modules/public-encrypt/mgf.js":
false,

/***/ "./node_modules/public-encrypt/node_modules/bn.js/lib/bn.js":
false,

/***/ "./node_modules/public-encrypt/privateDecrypt.js":
false,

/***/ "./node_modules/public-encrypt/publicEncrypt.js":
false,

/***/ "./node_modules/public-encrypt/withPublic.js":
false,

/***/ "./node_modules/public-encrypt/xor.js":
false,

/***/ "./node_modules/randombytes/browser.js":
false,

/***/ "./node_modules/randomfill/browser.js":
false,

/***/ "./node_modules/readable-stream/duplex-browser.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_duplex.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_passthrough.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_readable.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_transform.js":
false,

/***/ "./node_modules/readable-stream/lib/_stream_writable.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/BufferList.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/destroy.js":
false,

/***/ "./node_modules/readable-stream/lib/internal/streams/stream-browser.js":
false,

/***/ "./node_modules/readable-stream/passthrough.js":
false,

/***/ "./node_modules/readable-stream/readable-browser.js":
false,

/***/ "./node_modules/readable-stream/transform.js":
false,

/***/ "./node_modules/readable-stream/writable-browser.js":
false,

/***/ "./node_modules/ripemd160/index.js":
false,

/***/ "./node_modules/safe-buffer/index.js":
false,

/***/ "./node_modules/safer-buffer/safer.js":
false,

/***/ "./node_modules/sha.js/hash.js":
false,

/***/ "./node_modules/sha.js/index.js":
false,

/***/ "./node_modules/sha.js/sha.js":
false,

/***/ "./node_modules/sha.js/sha1.js":
false,

/***/ "./node_modules/sha.js/sha224.js":
false,

/***/ "./node_modules/sha.js/sha256.js":
false,

/***/ "./node_modules/sha.js/sha384.js":
false,

/***/ "./node_modules/sha.js/sha512.js":
false,

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
false,

/***/ "./node_modules/util-deprecate/browser.js":
false,

/***/ 10:
false,

/***/ 11:
false,

/***/ 12:
false,

/***/ 13:
false,

/***/ 14:
false,

/***/ 15:
false,

/***/ 16:
false,

/***/ 2:
false,

/***/ 3:
false,

/***/ 4:
false,

/***/ 5:
false,

/***/ 6:
false,

/***/ 7:
false,

/***/ 8:
false,

/***/ 9:
false

})