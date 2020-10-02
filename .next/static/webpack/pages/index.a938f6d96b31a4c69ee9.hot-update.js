webpackHotUpdate_N_E("pages/index",{

/***/ "./components/number-pad.tsx":
/*!***********************************!*\
  !*** ./components/number-pad.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumberPad; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-calc/components/number-pad.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"createStyles\"])({\n    box: {\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    number: {\n      cursor: 'pointer',\n      backgroundColor: 'rgb(51,51,51)',\n      width: '70px',\n      height: '70px',\n      borderRadius: '50%',\n      color: 'white',\n      fontSize: '36px',\n      alignItems: 'center',\n      justifyContent: 'center',\n      '&:hover': {\n        backgroundColor: 'rgb(75,75,75)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(115,115,115)'\n      }\n    },\n    sign: {\n      backgroundColor: 'rgb(166,166,166)',\n      color: 'black',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    selectedSymbol: {\n      backgroundColor: 'white',\n      color: 'rgb(242,162,60)',\n      fontSize: '30px',\n      '&:hover': {\n        backgroundColor: 'rgb(190,190,190)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(217,217,217)'\n      }\n    },\n    symbol: {\n      backgroundColor: 'rgb(242,162,60)',\n      '&:hover': {\n        backgroundColor: 'rgb(243,180,100)'\n      },\n      '&:active': {\n        backgroundColor: 'rgb(244,200,149)'\n      }\n    }\n  });\n});\nfunction NumberPad(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      prev = _useState[0],\n      setPrev = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      current = _useState2[0],\n      setCurrent = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      symbol = _useState3[0],\n      setSymbol = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      symbolFlag = _useState4[0],\n      setSymbolFlag = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      flag = _useState5[0],\n      setFlag = _useState5[1];\n\n  var classes = useStyles();\n  var keypad = [{\n    value: 'AC',\n    type: 'sign'\n  }, {\n    value: '+/−',\n    type: 'sign'\n  }, {\n    value: '%',\n    type: 'sign'\n  }, {\n    value: '÷',\n    type: 'symbol'\n  }, {\n    value: '7',\n    type: 'number'\n  }, {\n    value: '8',\n    type: 'number'\n  }, {\n    value: '9',\n    type: 'number'\n  }, {\n    value: '×',\n    type: 'symbol'\n  }, {\n    value: '4',\n    type: 'number'\n  }, {\n    value: '5',\n    type: 'number'\n  }, {\n    value: '6',\n    type: 'number'\n  }, {\n    value: '−',\n    type: 'symbol'\n  }, {\n    value: '1',\n    type: 'number'\n  }, {\n    value: '2',\n    type: 'number'\n  }, {\n    value: '3',\n    type: 'number'\n  }, {\n    value: '+',\n    type: 'symbol'\n  }, {\n    value: '0',\n    type: 'number'\n  }, {\n    value: '00',\n    type: 'number'\n  }, {\n    value: '.',\n    type: 'number'\n  }, {\n    value: '=',\n    type: 'symbol'\n  }];\n  var keypadLandscape = [{\n    value: 'AC',\n    type: 'sign'\n  }, {\n    value: '7',\n    type: 'number'\n  }, {\n    value: '8',\n    type: 'number'\n  }, {\n    value: '9',\n    type: 'number'\n  }, {\n    value: '÷',\n    type: 'symbol'\n  }, {\n    value: '+/−',\n    type: 'sign'\n  }, {\n    value: '4',\n    type: 'number'\n  }, {\n    value: '5',\n    type: 'number'\n  }, {\n    value: '6',\n    type: 'number'\n  }, {\n    value: '×',\n    type: 'symbol'\n  }, {\n    value: '%',\n    type: 'sign'\n  }, {\n    value: '1',\n    type: 'number'\n  }, {\n    value: '2',\n    type: 'number'\n  }, {\n    value: '3',\n    type: 'number'\n  }, {\n    value: '−',\n    type: 'symbol'\n  }, {\n    value: '=',\n    type: 'symbol'\n  }, {\n    value: '.',\n    type: 'number'\n  }, {\n    value: '0',\n    type: 'number'\n  }, {\n    value: '00',\n    type: 'number'\n  }, {\n    value: '+',\n    type: 'symbol'\n  }];\n\n  var calc = function calc(num1, num2, sign) {\n    switch (sign) {\n      case '+':\n        return num1 + num2;\n\n      case '-':\n        return num1 - num2;\n\n      case '÷':\n        return num1 / num2;\n\n      case '/':\n        return num1 / num2;\n\n      case '×':\n        return num1 * num2;\n\n      case '*':\n        return num1 * num2;\n\n      case '%':\n        return props.input * 0.01;\n\n      case '+/−':\n        return props.input * -1;\n    }\n\n    return 0;\n  };\n\n  var downHandler = function downHandler(_ref) {\n    var key = _ref.key;\n\n    if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {\n      handleNumberClick(key.toString());\n    } else if (key === '-' || key === '+' || key === '/' || key === '*' || key === '.' || key === '%') {\n      handleSignClick(key);\n    } else if (key === 'Enter' || key === '=') {\n      handleSignClick('=');\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.addEventListener('keyup', downHandler); // Remove event listeners on cleanup\n\n    return function () {\n      window.removeEventListener('keyup', downHandler);\n    };\n  });\n\n  var handleNumberClick = function handleNumberClick(input) {\n    var newInput = '';\n    var newCurrent = props.input;\n    var prevInput = flag ? 0 : newCurrent;\n\n    switch (input) {\n      case '0':\n        newInput = prevInput ? prevInput.toString() + input : '0';\n        break;\n\n      case '00':\n        newInput = prevInput ? prevInput.toString() + input : '0';\n        break;\n\n      default:\n        newInput = prevInput ? prevInput.toString() + input : prevInput.toString().substring(1) + input;\n    }\n\n    setFlag(false);\n    setCurrent(Number(newInput));\n    props.setInput(Number(newInput));\n  };\n\n  var initValue = function initValue() {\n    props.setInput(0);\n    setPrev(0);\n    setCurrent(0);\n    setSymbol('');\n    setFlag(false);\n  };\n\n  var handleSignClick = function handleSignClick(input) {\n    switch (input) {\n      case 'AC':\n        initValue();\n        break;\n\n      case '%':\n        props.setInput(calc(prev, current, input));\n        break;\n\n      case '+/−':\n        props.setInput(calc(prev, current, input));\n        break;\n\n      case '=':\n        var newInput1 = calc(prev, current, symbol);\n        setPrev(newInput1);\n        props.setInput(newInput1);\n        setFlag(true);\n        break;\n\n      default:\n        var newInput2 = calc(prev, current, symbol);\n        setFlag(true);\n        setSymbol(input);\n\n        if (symbol === input) {\n          if (symbolFlag) {\n            setPrev(newInput2);\n            props.setInput(newInput2);\n            setSymbolFlag(false);\n          } else {\n            setPrev(props.input);\n          }\n        } else {\n          setPrev(props.input);\n          setSymbolFlag(true);\n        }\n\n    }\n  };\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    className: classes.box,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 244,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n    columns: 5,\n    spacing: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 245,\n      columnNumber: 7\n    }\n  }, keypadLandscape.map(function (key, index) {\n    var keyValue = key.value === 'AC' && props.input ? 'C' : key.value;\n    var classStr = null;\n\n    switch (key.type) {\n      case 'symbol':\n        if (symbol === key.value) {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.selectedSymbol);\n        } else {\n          classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.symbol);\n        }\n\n        break;\n\n      case 'sign':\n        classStr = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.number, classes.sign);\n        break;\n\n      default:\n        classStr = classes.number;\n    }\n\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      className: classes.box,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 264,\n        columnNumber: 13\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      onClick: function onClick() {\n        return key.type === 'number' ? handleNumberClick(key.value) : handleSignClick(key.value);\n      },\n      className: classStr,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 265,\n        columnNumber: 15\n      }\n    }, keyValue));\n  })));\n}\n\n_s(NumberPad, \"63YhXQ0yKxcYu8Wbqoatz4yZm74=\", false, function () {\n  return [useStyles];\n});\n\n_c = NumberPad;\n\nvar _c;\n\n$RefreshReg$(_c, \"NumberPad\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9udW1iZXItcGFkLnRzeD85ZDhiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImJveCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm51bWJlciIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJmb250U2l6ZSIsInNpZ24iLCJzZWxlY3RlZFN5bWJvbCIsInN5bWJvbCIsIk51bWJlclBhZCIsInByb3BzIiwidXNlU3RhdGUiLCJwcmV2Iiwic2V0UHJldiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic2V0U3ltYm9sIiwic3ltYm9sRmxhZyIsInNldFN5bWJvbEZsYWciLCJmbGFnIiwic2V0RmxhZyIsImNsYXNzZXMiLCJrZXlwYWQiLCJ2YWx1ZSIsInR5cGUiLCJrZXlwYWRMYW5kc2NhcGUiLCJjYWxjIiwibnVtMSIsIm51bTIiLCJpbnB1dCIsImRvd25IYW5kbGVyIiwia2V5IiwiaGFuZGxlTnVtYmVyQ2xpY2siLCJ0b1N0cmluZyIsImhhbmRsZVNpZ25DbGljayIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmV3SW5wdXQiLCJuZXdDdXJyZW50IiwicHJldklucHV0Iiwic3Vic3RyaW5nIiwiTnVtYmVyIiwic2V0SW5wdXQiLCJpbml0VmFsdWUiLCJuZXdJbnB1dDEiLCJuZXdJbnB1dDIiLCJtYXAiLCJpbmRleCIsImtleVZhbHVlIiwiY2xhc3NTdHIiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsNkVBQVksQ0FBQztBQUNYQyxPQUFHLEVBQUU7QUFDSEMsZ0JBQVUsRUFBRSxRQURUO0FBRUhDLG9CQUFjLEVBQUU7QUFGYixLQURNO0FBS1hDLFVBQU0sRUFBRTtBQUNOQyxZQUFNLEVBQUUsU0FERjtBQUVOQyxxQkFBZSxFQUFFLGVBRlg7QUFHTkMsV0FBSyxFQUFFLE1BSEQ7QUFJTkMsWUFBTSxFQUFFLE1BSkY7QUFLTkMsa0JBQVksRUFBRSxLQUxSO0FBTU5DLFdBQUssRUFBRSxPQU5EO0FBT05DLGNBQVEsRUFBRSxNQVBKO0FBUU5ULGdCQUFVLEVBQUUsUUFSTjtBQVNOQyxvQkFBYyxFQUFFLFFBVFY7QUFVTixpQkFBVztBQUNURyx1QkFBZSxFQUFFO0FBRFIsT0FWTDtBQWFOLGtCQUFZO0FBQ1ZBLHVCQUFlLEVBQUU7QUFEUDtBQWJOLEtBTEc7QUFzQlhNLFFBQUksRUFBRTtBQUNKTixxQkFBZSxFQUFFLGtCQURiO0FBRUpJLFdBQUssRUFBRSxPQUZIO0FBR0pDLGNBQVEsRUFBRSxNQUhOO0FBSUosaUJBQVc7QUFDVEwsdUJBQWUsRUFBRTtBQURSLE9BSlA7QUFPSixrQkFBWTtBQUNWQSx1QkFBZSxFQUFFO0FBRFA7QUFQUixLQXRCSztBQWlDWE8sa0JBQWMsRUFBRTtBQUNkUCxxQkFBZSxFQUFFLE9BREg7QUFFZEksV0FBSyxFQUFFLGlCQUZPO0FBR2RDLGNBQVEsRUFBRSxNQUhJO0FBSWQsaUJBQVc7QUFDVEwsdUJBQWUsRUFBRTtBQURSLE9BSkc7QUFPZCxrQkFBWTtBQUNWQSx1QkFBZSxFQUFFO0FBRFA7QUFQRSxLQWpDTDtBQTRDWFEsVUFBTSxFQUFFO0FBQ05SLHFCQUFlLEVBQUUsaUJBRFg7QUFFTixpQkFBVztBQUNUQSx1QkFBZSxFQUFFO0FBRFIsT0FGTDtBQUtOLGtCQUFZO0FBQ1ZBLHVCQUFlLEVBQUU7QUFEUDtBQUxOO0FBNUNHLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7QUE4RGUsU0FBU1MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMkM7QUFBQTs7QUFBQTs7QUFBQSxrQkFDaENDLHNEQUFRLENBQUMsQ0FBRCxDQUR3QjtBQUFBLE1BQ2pEQyxJQURpRDtBQUFBLE1BQzNDQyxPQUQyQzs7QUFBQSxtQkFFMUJGLHNEQUFRLENBQUMsQ0FBRCxDQUZrQjtBQUFBLE1BRWpERyxPQUZpRDtBQUFBLE1BRXhDQyxVQUZ3Qzs7QUFBQSxtQkFHNUJKLHNEQUFRLENBQUMsRUFBRCxDQUhvQjtBQUFBLE1BR2pESCxNQUhpRDtBQUFBLE1BR3pDUSxTQUh5Qzs7QUFBQSxtQkFJcEJMLHNEQUFRLENBQUMsS0FBRCxDQUpZO0FBQUEsTUFJakRNLFVBSmlEO0FBQUEsTUFJckNDLGFBSnFDOztBQUFBLG1CQUtoQ1Asc0RBQVEsQ0FBQyxLQUFELENBTHdCO0FBQUEsTUFLakRRLElBTGlEO0FBQUEsTUFLM0NDLE9BTDJDOztBQU14RCxNQUFNQyxPQUFPLEdBQUc5QixTQUFTLEVBQXpCO0FBQ0EsTUFBTStCLE1BQU0sR0FBRyxDQUNiO0FBQUVDLFNBQUssRUFBRSxJQUFUO0FBQWVDLFFBQUksRUFBRTtBQUFyQixHQURhLEVBRWI7QUFBRUQsU0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFFBQUksRUFBRTtBQUF0QixHQUZhLEVBR2I7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBSGEsRUFJYjtBQUFFRCxTQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FKYSxFQUtiO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQUxhLEVBTWI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBTmEsRUFPYjtBQUFFRCxTQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FQYSxFQVFiO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQVJhLEVBU2I7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBVGEsRUFVYjtBQUFFRCxTQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FWYSxFQVdiO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQVhhLEVBWWI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBWmEsRUFhYjtBQUFFRCxTQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FiYSxFQWNiO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQWRhLEVBZWI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBZmEsRUFnQmI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBaEJhLEVBaUJiO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQWpCYSxFQWtCYjtBQUFFRCxTQUFLLEVBQUUsSUFBVDtBQUFlQyxRQUFJLEVBQUU7QUFBckIsR0FsQmEsRUFtQmI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBbkJhLEVBb0JiO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQXBCYSxDQUFmO0FBc0JBLE1BQU1DLGVBQWUsR0FBRyxDQUN0QjtBQUFFRixTQUFLLEVBQUUsSUFBVDtBQUFlQyxRQUFJLEVBQUU7QUFBckIsR0FEc0IsRUFFdEI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBRnNCLEVBR3RCO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQUhzQixFQUl0QjtBQUFFRCxTQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FKc0IsRUFLdEI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBTHNCLEVBTXRCO0FBQUVELFNBQUssRUFBRSxLQUFUO0FBQWdCQyxRQUFJLEVBQUU7QUFBdEIsR0FOc0IsRUFPdEI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBUHNCLEVBUXRCO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQVJzQixFQVN0QjtBQUFFRCxTQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0FUc0IsRUFVdEI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBVnNCLEVBV3RCO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQVhzQixFQVl0QjtBQUFFRCxTQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0Fac0IsRUFhdEI7QUFBRUQsU0FBSyxFQUFFLEdBQVQ7QUFBY0MsUUFBSSxFQUFFO0FBQXBCLEdBYnNCLEVBY3RCO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQWRzQixFQWV0QjtBQUFFRCxTQUFLLEVBQUUsR0FBVDtBQUFjQyxRQUFJLEVBQUU7QUFBcEIsR0Fmc0IsRUFnQnRCO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQWhCc0IsRUFpQnRCO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQWpCc0IsRUFrQnRCO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQWxCc0IsRUFtQnRCO0FBQUVELFNBQUssRUFBRSxJQUFUO0FBQWVDLFFBQUksRUFBRTtBQUFyQixHQW5Cc0IsRUFvQnRCO0FBQUVELFNBQUssRUFBRSxHQUFUO0FBQWNDLFFBQUksRUFBRTtBQUFwQixHQXBCc0IsQ0FBeEI7O0FBdUJBLE1BQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBZUMsSUFBZixFQUE2QnRCLElBQTdCLEVBQThDO0FBQ3pELFlBQVFBLElBQVI7QUFDRSxXQUFLLEdBQUw7QUFDRSxlQUFPcUIsSUFBSSxHQUFHQyxJQUFkOztBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU9ELElBQUksR0FBR0MsSUFBZDs7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPRCxJQUFJLEdBQUdDLElBQWQ7O0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBT0QsSUFBSSxHQUFHQyxJQUFkOztBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU9ELElBQUksR0FBR0MsSUFBZDs7QUFDRixXQUFLLEdBQUw7QUFDRSxlQUFPRCxJQUFJLEdBQUdDLElBQWQ7O0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBT2xCLEtBQUssQ0FBQ21CLEtBQU4sR0FBYyxJQUFyQjs7QUFDRixXQUFLLEtBQUw7QUFDRSxlQUFPbkIsS0FBSyxDQUFDbUIsS0FBTixHQUFjLENBQUMsQ0FBdEI7QUFoQko7O0FBa0JBLFdBQU8sQ0FBUDtBQUNELEdBcEJEOztBQXNCQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUEyQjtBQUFBLFFBQXhCQyxHQUF3QixRQUF4QkEsR0FBd0I7O0FBQzdDLFFBQ0VBLEdBQUcsS0FBSyxHQUFSLElBQ0FBLEdBQUcsS0FBSyxHQURSLElBRUFBLEdBQUcsS0FBSyxHQUZSLElBR0FBLEdBQUcsS0FBSyxHQUhSLElBSUFBLEdBQUcsS0FBSyxHQUpSLElBS0FBLEdBQUcsS0FBSyxHQUxSLElBTUFBLEdBQUcsS0FBSyxHQU5SLElBT0FBLEdBQUcsS0FBSyxHQVBSLElBUUFBLEdBQUcsS0FBSyxHQVJSLElBU0FBLEdBQUcsS0FBSyxHQVZWLEVBV0U7QUFDQUMsdUJBQWlCLENBQUNELEdBQUcsQ0FBQ0UsUUFBSixFQUFELENBQWpCO0FBQ0QsS0FiRCxNQWFPLElBQ0xGLEdBQUcsS0FBSyxHQUFSLElBQ0FBLEdBQUcsS0FBSyxHQURSLElBRUFBLEdBQUcsS0FBSyxHQUZSLElBR0FBLEdBQUcsS0FBSyxHQUhSLElBSUFBLEdBQUcsS0FBSyxHQUpSLElBS0FBLEdBQUcsS0FBSyxHQU5ILEVBT0w7QUFDQUcscUJBQWUsQ0FBQ0gsR0FBRCxDQUFmO0FBQ0QsS0FUTSxNQVNBLElBQUlBLEdBQUcsS0FBSyxPQUFSLElBQW1CQSxHQUFHLEtBQUssR0FBL0IsRUFBb0M7QUFDekNHLHFCQUFlLENBQUMsR0FBRCxDQUFmO0FBQ0Q7QUFDRixHQTFCRDs7QUE0QkFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDUCxXQUFqQyxFQURjLENBRWQ7O0FBQ0EsV0FBTyxZQUFNO0FBQ1hNLFlBQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0NSLFdBQXBDO0FBQ0QsS0FGRDtBQUdELEdBTlEsQ0FBVDs7QUFRQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNILEtBQUQsRUFBbUI7QUFDM0MsUUFBSVUsUUFBUSxHQUFHLEVBQWY7QUFDQSxRQUFNQyxVQUFVLEdBQUc5QixLQUFLLENBQUNtQixLQUF6QjtBQUNBLFFBQU1ZLFNBQVMsR0FBR3RCLElBQUksR0FBRyxDQUFILEdBQU9xQixVQUE3Qjs7QUFDQSxZQUFRWCxLQUFSO0FBQ0UsV0FBSyxHQUFMO0FBQ0VVLGdCQUFRLEdBQUdFLFNBQVMsR0FBR0EsU0FBUyxDQUFDUixRQUFWLEtBQXVCSixLQUExQixHQUFrQyxHQUF0RDtBQUNBOztBQUNGLFdBQUssSUFBTDtBQUNFVSxnQkFBUSxHQUFHRSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ1IsUUFBVixLQUF1QkosS0FBMUIsR0FBa0MsR0FBdEQ7QUFDQTs7QUFDRjtBQUNFVSxnQkFBUSxHQUFHRSxTQUFTLEdBQ2hCQSxTQUFTLENBQUNSLFFBQVYsS0FBdUJKLEtBRFAsR0FFaEJZLFNBQVMsQ0FBQ1IsUUFBVixHQUFxQlMsU0FBckIsQ0FBK0IsQ0FBL0IsSUFBb0NiLEtBRnhDO0FBUko7O0FBWUFULFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUwsY0FBVSxDQUFDNEIsTUFBTSxDQUFDSixRQUFELENBQVAsQ0FBVjtBQUNBN0IsU0FBSyxDQUFDa0MsUUFBTixDQUFlRCxNQUFNLENBQUNKLFFBQUQsQ0FBckI7QUFDRCxHQW5CRDs7QUFxQkEsTUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0Qm5DLFNBQUssQ0FBQ2tDLFFBQU4sQ0FBZSxDQUFmO0FBQ0EvQixXQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0FFLGNBQVUsQ0FBQyxDQUFELENBQVY7QUFDQUMsYUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBSSxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFNYyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNMLEtBQUQsRUFBbUI7QUFDekMsWUFBUUEsS0FBUjtBQUNFLFdBQUssSUFBTDtBQUNFZ0IsaUJBQVM7QUFDVDs7QUFDRixXQUFLLEdBQUw7QUFDRW5DLGFBQUssQ0FBQ2tDLFFBQU4sQ0FBZWxCLElBQUksQ0FBQ2QsSUFBRCxFQUFPRSxPQUFQLEVBQWdCZSxLQUFoQixDQUFuQjtBQUNBOztBQUNGLFdBQUssS0FBTDtBQUNFbkIsYUFBSyxDQUFDa0MsUUFBTixDQUFlbEIsSUFBSSxDQUFDZCxJQUFELEVBQU9FLE9BQVAsRUFBZ0JlLEtBQWhCLENBQW5CO0FBQ0E7O0FBQ0YsV0FBSyxHQUFMO0FBQ0UsWUFBTWlCLFNBQVMsR0FBR3BCLElBQUksQ0FBQ2QsSUFBRCxFQUFPRSxPQUFQLEVBQWdCTixNQUFoQixDQUF0QjtBQUNBSyxlQUFPLENBQUNpQyxTQUFELENBQVA7QUFDQXBDLGFBQUssQ0FBQ2tDLFFBQU4sQ0FBZUUsU0FBZjtBQUNBMUIsZUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBOztBQUNGO0FBQ0UsWUFBTTJCLFNBQVMsR0FBR3JCLElBQUksQ0FBQ2QsSUFBRCxFQUFPRSxPQUFQLEVBQWdCTixNQUFoQixDQUF0QjtBQUNBWSxlQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FKLGlCQUFTLENBQUNhLEtBQUQsQ0FBVDs7QUFDQSxZQUFJckIsTUFBTSxLQUFLcUIsS0FBZixFQUFzQjtBQUNwQixjQUFJWixVQUFKLEVBQWdCO0FBQ2RKLG1CQUFPLENBQUNrQyxTQUFELENBQVA7QUFDQXJDLGlCQUFLLENBQUNrQyxRQUFOLENBQWVHLFNBQWY7QUFDQTdCLHlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsV0FKRCxNQUlPO0FBQ0xMLG1CQUFPLENBQUNILEtBQUssQ0FBQ21CLEtBQVAsQ0FBUDtBQUNEO0FBQ0YsU0FSRCxNQVFPO0FBQ0xoQixpQkFBTyxDQUFDSCxLQUFLLENBQUNtQixLQUFQLENBQVA7QUFDQVgsdUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRDs7QUEvQkw7QUFpQ0QsR0FsQ0Q7O0FBb0NBLFNBQ0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBRUcsT0FBTyxDQUFDMUIsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBWSxXQUFPLEVBQUUsQ0FBckI7QUFBd0IsV0FBTyxFQUFFLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzhCLGVBQWUsQ0FBQ3VCLEdBQWhCLENBQW9CLFVBQUNqQixHQUFELEVBQU1rQixLQUFOLEVBQXdCO0FBQzNDLFFBQU1DLFFBQVEsR0FBR25CLEdBQUcsQ0FBQ1IsS0FBSixLQUFjLElBQWQsSUFBc0JiLEtBQUssQ0FBQ21CLEtBQTVCLEdBQW9DLEdBQXBDLEdBQTBDRSxHQUFHLENBQUNSLEtBQS9EO0FBQ0EsUUFBSTRCLFFBQVEsR0FBRyxJQUFmOztBQUNBLFlBQVFwQixHQUFHLENBQUNQLElBQVo7QUFDRSxXQUFLLFFBQUw7QUFDRSxZQUFJaEIsTUFBTSxLQUFLdUIsR0FBRyxDQUFDUixLQUFuQixFQUEwQjtBQUN4QjRCLGtCQUFRLEdBQUdDLG9EQUFJLENBQUMvQixPQUFPLENBQUN2QixNQUFULEVBQWlCdUIsT0FBTyxDQUFDZCxjQUF6QixDQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0w0QyxrQkFBUSxHQUFHQyxvREFBSSxDQUFDL0IsT0FBTyxDQUFDdkIsTUFBVCxFQUFpQnVCLE9BQU8sQ0FBQ2IsTUFBekIsQ0FBZjtBQUNEOztBQUNEOztBQUNGLFdBQUssTUFBTDtBQUNFMkMsZ0JBQVEsR0FBR0Msb0RBQUksQ0FBQy9CLE9BQU8sQ0FBQ3ZCLE1BQVQsRUFBaUJ1QixPQUFPLENBQUNmLElBQXpCLENBQWY7QUFDQTs7QUFDRjtBQUNFNkMsZ0JBQVEsR0FBRzlCLE9BQU8sQ0FBQ3ZCLE1BQW5CO0FBWko7O0FBY0EsV0FDRSxNQUFDLG9EQUFEO0FBQU0sZUFBUyxFQUFFdUIsT0FBTyxDQUFDMUIsR0FBekI7QUFBOEIsU0FBRyxFQUFFc0QsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUNQbEIsR0FBRyxDQUFDUCxJQUFKLEtBQWEsUUFBYixHQUNJUSxpQkFBaUIsQ0FBQ0QsR0FBRyxDQUFDUixLQUFMLENBRHJCLEdBRUlXLGVBQWUsQ0FBQ0gsR0FBRyxDQUFDUixLQUFMLENBSFo7QUFBQSxPQURYO0FBTUUsZUFBUyxFQUFFNEIsUUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUdELFFBUkgsQ0FERixDQURGO0FBY0QsR0EvQkEsQ0FESCxDQURGLENBREY7QUFzQ0Q7O0dBck51QnpDLFM7VUFNTmxCLFM7OztLQU5Na0IsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvbnVtYmVyLXBhZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgS2V5IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQsIEZsZXgsIEJveCwgUHNldWRvQm94LCBTaW1wbGVHcmlkIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlcywgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICBib3g6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgbnVtYmVyOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig1MSw1MSw1MSknLFxuICAgICAgd2lkdGg6ICc3MHB4JyxcbiAgICAgIGhlaWdodDogJzcwcHgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgZm9udFNpemU6ICczNnB4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig3NSw3NSw3NSknLFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDExNSwxMTUsMTE1KScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2lnbjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE2NiwxNjYsMTY2KScsXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIGZvbnRTaXplOiAnMzBweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDE5MCwxOTAsMTkwKScsXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjE3LDIxNywyMTcpJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWxlY3RlZFN5bWJvbDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgY29sb3I6ICdyZ2IoMjQyLDE2Miw2MCknLFxuICAgICAgZm9udFNpemU6ICczMHB4JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMTkwLDE5MCwxOTApJyxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMTcsMjE3LDIxNyknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN5bWJvbDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0MiwxNjIsNjApJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQzLDE4MCwxMDApJyxcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDQsMjAwLDE0OSknLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIElOdW1iZXJQYWRQcm9wcyB7XG4gIHNldElucHV0OiAoaW5wdXQ6IG51bWJlcikgPT4gdm9pZDtcbiAgaW5wdXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTnVtYmVyUGFkKHByb3BzOiBJTnVtYmVyUGFkUHJvcHMpIHtcbiAgY29uc3QgW3ByZXYsIHNldFByZXZdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc3ltYm9sLCBzZXRTeW1ib2xdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3ltYm9sRmxhZywgc2V0U3ltYm9sRmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBrZXlwYWQgPSBbXG4gICAgeyB2YWx1ZTogJ0FDJywgdHlwZTogJ3NpZ24nIH0sXG4gICAgeyB2YWx1ZTogJysv4oiSJywgdHlwZTogJ3NpZ24nIH0sXG4gICAgeyB2YWx1ZTogJyUnLCB0eXBlOiAnc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnw7cnLCB0eXBlOiAnc3ltYm9sJyB9LFxuICAgIHsgdmFsdWU6ICc3JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnOCcsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzknLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICfDlycsIHR5cGU6ICdzeW1ib2wnIH0sXG4gICAgeyB2YWx1ZTogJzQnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc1JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnNicsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJ+KIkicsIHR5cGU6ICdzeW1ib2wnIH0sXG4gICAgeyB2YWx1ZTogJzEnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICcyJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnMycsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJysnLCB0eXBlOiAnc3ltYm9sJyB9LFxuICAgIHsgdmFsdWU6ICcwJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnMDAnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICcuJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnPScsIHR5cGU6ICdzeW1ib2wnIH0sXG4gIF07XG4gIGNvbnN0IGtleXBhZExhbmRzY2FwZSA9IFtcbiAgICB7IHZhbHVlOiAnQUMnLCB0eXBlOiAnc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnNycsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzgnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICc5JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnw7cnLCB0eXBlOiAnc3ltYm9sJyB9LFxuICAgIHsgdmFsdWU6ICcrL+KIkicsIHR5cGU6ICdzaWduJyB9LFxuICAgIHsgdmFsdWU6ICc0JywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnNScsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzYnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICfDlycsIHR5cGU6ICdzeW1ib2wnIH0sXG4gICAgeyB2YWx1ZTogJyUnLCB0eXBlOiAnc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnMScsIHR5cGU6ICdudW1iZXInIH0sXG4gICAgeyB2YWx1ZTogJzInLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICczJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAn4oiSJywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgICB7IHZhbHVlOiAnPScsIHR5cGU6ICdzeW1ib2wnIH0sXG4gICAgeyB2YWx1ZTogJy4nLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICcwJywgdHlwZTogJ251bWJlcicgfSxcbiAgICB7IHZhbHVlOiAnMDAnLCB0eXBlOiAnbnVtYmVyJyB9LFxuICAgIHsgdmFsdWU6ICcrJywgdHlwZTogJ3N5bWJvbCcgfSxcbiAgXTtcblxuICBjb25zdCBjYWxjID0gKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyLCBzaWduOiBzdHJpbmcpID0+IHtcbiAgICBzd2l0Y2ggKHNpZ24pIHtcbiAgICAgIGNhc2UgJysnOlxuICAgICAgICByZXR1cm4gbnVtMSArIG51bTI7XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgcmV0dXJuIG51bTEgLSBudW0yO1xuICAgICAgY2FzZSAnw7cnOlxuICAgICAgICByZXR1cm4gbnVtMSAvIG51bTI7XG4gICAgICBjYXNlICcvJzpcbiAgICAgICAgcmV0dXJuIG51bTEgLyBudW0yO1xuICAgICAgY2FzZSAnw5cnOlxuICAgICAgICByZXR1cm4gbnVtMSAqIG51bTI7XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgcmV0dXJuIG51bTEgKiBudW0yO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICAgIHJldHVybiBwcm9wcy5pbnB1dCAqIDAuMDE7XG4gICAgICBjYXNlICcrL+KIkic6XG4gICAgICAgIHJldHVybiBwcm9wcy5pbnB1dCAqIC0xO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBjb25zdCBkb3duSGFuZGxlciA9ICh7IGtleSB9OiB7IGtleTogS2V5IH0pID0+IHtcbiAgICBpZiAoXG4gICAgICBrZXkgPT09ICcwJyB8fFxuICAgICAga2V5ID09PSAnMScgfHxcbiAgICAgIGtleSA9PT0gJzInIHx8XG4gICAgICBrZXkgPT09ICczJyB8fFxuICAgICAga2V5ID09PSAnNCcgfHxcbiAgICAgIGtleSA9PT0gJzUnIHx8XG4gICAgICBrZXkgPT09ICc2JyB8fFxuICAgICAga2V5ID09PSAnNycgfHxcbiAgICAgIGtleSA9PT0gJzgnIHx8XG4gICAgICBrZXkgPT09ICc5J1xuICAgICkge1xuICAgICAgaGFuZGxlTnVtYmVyQ2xpY2soa2V5LnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBrZXkgPT09ICctJyB8fFxuICAgICAga2V5ID09PSAnKycgfHxcbiAgICAgIGtleSA9PT0gJy8nIHx8XG4gICAgICBrZXkgPT09ICcqJyB8fFxuICAgICAga2V5ID09PSAnLicgfHxcbiAgICAgIGtleSA9PT0gJyUnXG4gICAgKSB7XG4gICAgICBoYW5kbGVTaWduQ2xpY2soa2V5KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICc9Jykge1xuICAgICAgaGFuZGxlU2lnbkNsaWNrKCc9Jyk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZG93bkhhbmRsZXIpO1xuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkb3duSGFuZGxlcik7XG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtYmVyQ2xpY2sgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuICAgIGxldCBuZXdJbnB1dCA9ICcnO1xuICAgIGNvbnN0IG5ld0N1cnJlbnQgPSBwcm9wcy5pbnB1dDtcbiAgICBjb25zdCBwcmV2SW5wdXQgPSBmbGFnID8gMCA6IG5ld0N1cnJlbnQ7XG4gICAgc3dpdGNoIChpbnB1dCkge1xuICAgICAgY2FzZSAnMCc6XG4gICAgICAgIG5ld0lucHV0ID0gcHJldklucHV0ID8gcHJldklucHV0LnRvU3RyaW5nKCkgKyBpbnB1dCA6ICcwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcwMCc6XG4gICAgICAgIG5ld0lucHV0ID0gcHJldklucHV0ID8gcHJldklucHV0LnRvU3RyaW5nKCkgKyBpbnB1dCA6ICcwJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBuZXdJbnB1dCA9IHByZXZJbnB1dFxuICAgICAgICAgID8gcHJldklucHV0LnRvU3RyaW5nKCkgKyBpbnB1dFxuICAgICAgICAgIDogcHJldklucHV0LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDEpICsgaW5wdXQ7XG4gICAgfVxuICAgIHNldEZsYWcoZmFsc2UpO1xuICAgIHNldEN1cnJlbnQoTnVtYmVyKG5ld0lucHV0KSk7XG4gICAgcHJvcHMuc2V0SW5wdXQoTnVtYmVyKG5ld0lucHV0KSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdFZhbHVlID0gKCkgPT4ge1xuICAgIHByb3BzLnNldElucHV0KDApO1xuICAgIHNldFByZXYoMCk7XG4gICAgc2V0Q3VycmVudCgwKTtcbiAgICBzZXRTeW1ib2woJycpO1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNpZ25DbGljayA9IChpbnB1dDogc3RyaW5nKSA9PiB7XG4gICAgc3dpdGNoIChpbnB1dCkge1xuICAgICAgY2FzZSAnQUMnOlxuICAgICAgICBpbml0VmFsdWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgICAgcHJvcHMuc2V0SW5wdXQoY2FsYyhwcmV2LCBjdXJyZW50LCBpbnB1dCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJysv4oiSJzpcbiAgICAgICAgcHJvcHMuc2V0SW5wdXQoY2FsYyhwcmV2LCBjdXJyZW50LCBpbnB1dCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJz0nOlxuICAgICAgICBjb25zdCBuZXdJbnB1dDEgPSBjYWxjKHByZXYsIGN1cnJlbnQsIHN5bWJvbCk7XG4gICAgICAgIHNldFByZXYobmV3SW5wdXQxKTtcbiAgICAgICAgcHJvcHMuc2V0SW5wdXQobmV3SW5wdXQxKTtcbiAgICAgICAgc2V0RmxhZyh0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBuZXdJbnB1dDIgPSBjYWxjKHByZXYsIGN1cnJlbnQsIHN5bWJvbCk7XG4gICAgICAgIHNldEZsYWcodHJ1ZSk7XG4gICAgICAgIHNldFN5bWJvbChpbnB1dCk7XG4gICAgICAgIGlmIChzeW1ib2wgPT09IGlucHV0KSB7XG4gICAgICAgICAgaWYgKHN5bWJvbEZsYWcpIHtcbiAgICAgICAgICAgIHNldFByZXYobmV3SW5wdXQyKTtcbiAgICAgICAgICAgIHByb3BzLnNldElucHV0KG5ld0lucHV0Mik7XG4gICAgICAgICAgICBzZXRTeW1ib2xGbGFnKGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UHJldihwcm9wcy5pbnB1dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFByZXYocHJvcHMuaW5wdXQpO1xuICAgICAgICAgIHNldFN5bWJvbEZsYWcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezV9IHNwYWNpbmc9ezF9PlxuICAgICAgICB7a2V5cGFkTGFuZHNjYXBlLm1hcCgoa2V5LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBrZXkudmFsdWUgPT09ICdBQycgJiYgcHJvcHMuaW5wdXQgPyAnQycgOiBrZXkudmFsdWU7XG4gICAgICAgICAgbGV0IGNsYXNzU3RyID0gbnVsbDtcbiAgICAgICAgICBzd2l0Y2ggKGtleS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSBrZXkudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjbGFzc1N0ciA9IGNsc3goY2xhc3Nlcy5udW1iZXIsIGNsYXNzZXMuc2VsZWN0ZWRTeW1ib2wpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsYXNzU3RyID0gY2xzeChjbGFzc2VzLm51bWJlciwgY2xhc3Nlcy5zeW1ib2wpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2lnbic6XG4gICAgICAgICAgICAgIGNsYXNzU3RyID0gY2xzeChjbGFzc2VzLm51bWJlciwgY2xhc3Nlcy5zaWduKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBjbGFzc1N0ciA9IGNsYXNzZXMubnVtYmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIGtleS50eXBlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZU51bWJlckNsaWNrKGtleS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVTaWduQ2xpY2soa2V5LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU3RyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2tleVZhbHVlfVxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9GbGV4PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/number-pad.tsx\n");

/***/ })

})