"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Apps/ToDoApp.tsx":
/*!******************************!*\
  !*** ./app/Apps/ToDoApp.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/number-input/dist/chunk-2JJX6TVY.mjs\");\n/* harmony import */ var _ToDoItemEntryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoItemEntryForm */ \"(app-pages-browser)/./app/Apps/ToDoItemEntryForm.tsx\");\n/* harmony import */ var _ToDoListDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToDoListDisplay */ \"(app-pages-browser)/./app/Apps/ToDoListDisplay.tsx\");\n// illustrates forms, lists, etc.\n// THE WHOLE POINT OF THIS IS THE ATTRIBUTE 'key' ON LINE\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { ToDoListDisplay } from \"./ToDoListDisplayBad\";\nfunction ToDoApp() {\n    _s();\n    const [todoList, setTodolist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [minPriority, setMinPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(todoList);\n    }, [\n        todoList\n    ]);\n    function handleAdd(newItem) {\n        if (newItem.title === \"\") {\n            return;\n        } // ignore blank button presses\n        setTodolist(todoList.concat(newItem));\n    }\n    function handleDelete(targetKey) {\n        const newList = todoList.filter((item)=>item.key != targetKey);\n        setTodolist(newList);\n    }\n    function handleSortTodos() {\n        let newList = [\n            ...todoList\n        ];\n        newList = newList.sort((a, b)=>parseInt(a.priority) - parseInt(b.priority));\n        setTodolist(newList);\n    }\n    function handleDeleteLowPriorityTodos(event) {\n        const minPriority = event.target.value;\n        // console.log(todoList);\n        // console.log(typeof todoList[0]);\n        // console.log(minPriority);\n        // console.log(typeof minPriority);\n        let newList = [\n            ...todoList\n        ];\n        newList = newList.filter((item)=>parseInt(item.priority) <= parseInt(minPriority));\n        newList = todoList;\n        setTodolist(newList);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                children: \"TODO List\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToDoItemEntryForm__WEBPACK_IMPORTED_MODULE_2__.ToDoItemEntryForm, {\n                onAdd: handleAdd\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToDoListDisplay__WEBPACK_IMPORTED_MODULE_3__.ToDoListDisplay, {\n                items: todoList,\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: handleSortTodos,\n                children: \"Sort Todo Items\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInput, {\n                name: \"minimumPriority\",\n                value: minPriority,\n                placeholder: \"type priority here\",\n                onChange: (event)=>console.log(event),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInputField, {\n                        onChange: (event)=>setMinPriority(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInputStepper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberIncrementStepper, {}, void 0, false, {\n                                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberDecrementStepper, {}, void 0, false, {\n                                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: handleDeleteLowPriorityTodos,\n                children: \"Delete Low Priority Todos\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(ToDoApp, \"nL2lQiDRm+GvoZeTJmHuI2/vHiU=\");\n_c = ToDoApp;\nvar _c;\n$RefreshReg$(_c, \"ToDoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BcHBzL1RvRG9BcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMseURBQXlEOzs7QUFFMUI7QUFDYTtBQWVsQjtBQUc4QjtBQUNKO0FBQ3BELDBEQUEwRDtBQUUzQyxTQUFTYTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFhLEVBQUU7SUFDdkQsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUmdCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDZCxHQUFHO1FBQUNBO0tBQVM7SUFFYixTQUFTTSxVQUFVQyxPQUFpQjtRQUNsQyxJQUFJQSxRQUFRQyxLQUFLLEtBQUssSUFBSTtZQUN4QjtRQUNGLEVBQUUsOEJBQThCO1FBQ2hDUCxZQUFZRCxTQUFTUyxNQUFNLENBQUNGO0lBQzlCO0lBRUEsU0FBU0csYUFBYUMsU0FBaUI7UUFDckMsTUFBTUMsVUFBVVosU0FBU2EsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEdBQUcsSUFBSUo7UUFDdERWLFlBQVlXO0lBQ2Q7SUFFQSxTQUFTSTtRQUNQLElBQUlKLFVBQVU7ZUFBSVo7U0FBUztRQUMzQlksVUFBVUEsUUFBUUssSUFBSSxDQUNwQixDQUFDQyxHQUFHQyxJQUFNQyxTQUFTRixFQUFFRyxRQUFRLElBQUlELFNBQVNELEVBQUVFLFFBQVE7UUFFdERwQixZQUFZVztJQUNkO0lBRUEsU0FBU1UsNkJBQTZCQyxLQUFVO1FBQzlDLE1BQU1yQixjQUFjcUIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDLHlCQUF5QjtRQUN6QixtQ0FBbUM7UUFDbkMsNEJBQTRCO1FBQzVCLG1DQUFtQztRQUNuQyxJQUFJYixVQUFVO2VBQUlaO1NBQVM7UUFDM0JZLFVBQVVBLFFBQVFDLE1BQU0sQ0FDdEIsQ0FBQ0MsT0FBU00sU0FBU04sS0FBS08sUUFBUSxLQUFLRCxTQUFTbEI7UUFFaERVLFVBQVVaO1FBQ1ZDLFlBQVlXO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ3RCLG9EQUFNQTs7MEJBQ0wsOERBQUNELHFEQUFPQTswQkFBQzs7Ozs7OzBCQUNULDhEQUFDUSxpRUFBaUJBO2dCQUFDNkIsT0FBT3BCOzs7Ozs7MEJBQzFCLDhEQUFDUiw2REFBZUE7Z0JBQUM2QixPQUFPM0I7Z0JBQVU0QixVQUFVbEI7Ozs7OzswQkFDNUMsOERBQUNuQixvREFBTUE7Z0JBQUNzQyxTQUFTYjswQkFBaUI7Ozs7OzswQkFDbEMsOERBQUN4Qix5REFBV0E7Z0JBQ1ZzQyxNQUFLO2dCQUNMTCxPQUFPdkI7Z0JBQ1A2QixhQUFZO2dCQUNaQyxVQUFVLENBQUNULFFBQVVuQixRQUFRQyxHQUFHLENBQUNrQjs7a0NBRWpDLDhEQUFDOUIsOERBQWdCQTt3QkFDZnVDLFVBQVUsQ0FBQ1QsUUFBVXBCLGVBQWVvQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7Ozs7OztrQ0FFeEQsOERBQUMvQixnRUFBa0JBOzswQ0FDakIsOERBQUNDLG9FQUFzQkE7Ozs7OzBDQUN2Qiw4REFBQ0Msb0VBQXNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDTCxvREFBTUE7Z0JBQUNzQyxTQUFTUDswQkFBOEI7Ozs7Ozs7Ozs7OztBQUtyRDtHQW5Fd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQXBwcy9Ub0RvQXBwLnRzeD81NDEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGlsbHVzdHJhdGVzIGZvcm1zLCBsaXN0cywgZXRjLlxuLy8gVEhFIFdIT0xFIFBPSU5UIE9GIFRISVMgSVMgVEhFIEFUVFJJQlVURSAna2V5JyBPTiBMSU5FXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgSGVhZGluZyxcbiAgVGFibGUsXG4gIFRoLFxuICBUYm9keSxcbiAgVHIsXG4gIFRkLFxuICBWU3RhY2ssXG4gIEJ1dHRvbixcbiAgTnVtYmVySW5wdXQsXG4gIE51bWJlcklucHV0RmllbGQsXG4gIE51bWJlcklucHV0U3RlcHBlcixcbiAgTnVtYmVySW5jcmVtZW50U3RlcHBlcixcbiAgTnVtYmVyRGVjcmVtZW50U3RlcHBlcixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgVG9Eb0l0ZW0gfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgVG9Eb0l0ZW1FbnRyeUZvcm0gfSBmcm9tIFwiLi9Ub0RvSXRlbUVudHJ5Rm9ybVwiO1xuaW1wb3J0IHsgVG9Eb0xpc3REaXNwbGF5IH0gZnJvbSBcIi4vVG9Eb0xpc3REaXNwbGF5XCI7XG4vLyBpbXBvcnQgeyBUb0RvTGlzdERpc3BsYXkgfSBmcm9tIFwiLi9Ub0RvTGlzdERpc3BsYXlCYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Eb0FwcCgpIHtcbiAgY29uc3QgW3RvZG9MaXN0LCBzZXRUb2RvbGlzdF0gPSB1c2VTdGF0ZTxUb0RvSXRlbVtdPihbXSk7XG4gIGNvbnN0IFttaW5Qcmlvcml0eSwgc2V0TWluUHJpb3JpdHldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b2RvTGlzdCk7XG4gIH0sIFt0b2RvTGlzdF0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZChuZXdJdGVtOiBUb0RvSXRlbSkge1xuICAgIGlmIChuZXdJdGVtLnRpdGxlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBpZ25vcmUgYmxhbmsgYnV0dG9uIHByZXNzZXNcbiAgICBzZXRUb2RvbGlzdCh0b2RvTGlzdC5jb25jYXQobmV3SXRlbSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKHRhcmdldEtleTogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IHRvZG9MaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgIT0gdGFyZ2V0S2V5KTtcbiAgICBzZXRUb2RvbGlzdChuZXdMaXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNvcnRUb2RvcygpIHtcbiAgICBsZXQgbmV3TGlzdCA9IFsuLi50b2RvTGlzdF07XG4gICAgbmV3TGlzdCA9IG5ld0xpc3Quc29ydChcbiAgICAgIChhLCBiKSA9PiBwYXJzZUludChhLnByaW9yaXR5KSAtIHBhcnNlSW50KGIucHJpb3JpdHkpXG4gICAgKTtcbiAgICBzZXRUb2RvbGlzdChuZXdMaXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUxvd1ByaW9yaXR5VG9kb3MoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IG1pblByaW9yaXR5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKHRvZG9MaXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgdG9kb0xpc3RbMF0pO1xuICAgIC8vIGNvbnNvbGUubG9nKG1pblByaW9yaXR5KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgbWluUHJpb3JpdHkpO1xuICAgIGxldCBuZXdMaXN0ID0gWy4uLnRvZG9MaXN0XTtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdC5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT4gcGFyc2VJbnQoaXRlbS5wcmlvcml0eSkgPD0gcGFyc2VJbnQobWluUHJpb3JpdHkpXG4gICAgKTtcbiAgICBuZXdMaXN0ID0gdG9kb0xpc3Q7XG4gICAgc2V0VG9kb2xpc3QobmV3TGlzdCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxWU3RhY2s+XG4gICAgICA8SGVhZGluZz5UT0RPIExpc3Q8L0hlYWRpbmc+XG4gICAgICA8VG9Eb0l0ZW1FbnRyeUZvcm0gb25BZGQ9e2hhbmRsZUFkZH0gLz5cbiAgICAgIDxUb0RvTGlzdERpc3BsYXkgaXRlbXM9e3RvZG9MaXN0fSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTb3J0VG9kb3N9PlNvcnQgVG9kbyBJdGVtczwvQnV0dG9uPlxuICAgICAgPE51bWJlcklucHV0XG4gICAgICAgIG5hbWU9XCJtaW5pbXVtUHJpb3JpdHlcIlxuICAgICAgICB2YWx1ZT17bWluUHJpb3JpdHl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSBwcmlvcml0eSBoZXJlXCJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgPlxuICAgICAgICA8TnVtYmVySW5wdXRGaWVsZFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE1pblByaW9yaXR5KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxOdW1iZXJJbnB1dFN0ZXBwZXI+XG4gICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cbiAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxuICAgICAgICA8L051bWJlcklucHV0U3RlcHBlcj5cbiAgICAgIDwvTnVtYmVySW5wdXQ+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUxvd1ByaW9yaXR5VG9kb3N9PlxuICAgICAgICBEZWxldGUgTG93IFByaW9yaXR5IFRvZG9zXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1ZTdGFjaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGluZyIsIlZTdGFjayIsIkJ1dHRvbiIsIk51bWJlcklucHV0IiwiTnVtYmVySW5wdXRGaWVsZCIsIk51bWJlcklucHV0U3RlcHBlciIsIk51bWJlckluY3JlbWVudFN0ZXBwZXIiLCJOdW1iZXJEZWNyZW1lbnRTdGVwcGVyIiwiVG9Eb0l0ZW1FbnRyeUZvcm0iLCJUb0RvTGlzdERpc3BsYXkiLCJUb0RvQXBwIiwidG9kb0xpc3QiLCJzZXRUb2RvbGlzdCIsIm1pblByaW9yaXR5Iiwic2V0TWluUHJpb3JpdHkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQWRkIiwibmV3SXRlbSIsInRpdGxlIiwiY29uY2F0IiwiaGFuZGxlRGVsZXRlIiwidGFyZ2V0S2V5IiwibmV3TGlzdCIsImZpbHRlciIsIml0ZW0iLCJrZXkiLCJoYW5kbGVTb3J0VG9kb3MiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUludCIsInByaW9yaXR5IiwiaGFuZGxlRGVsZXRlTG93UHJpb3JpdHlUb2RvcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkFkZCIsIml0ZW1zIiwib25EZWxldGUiLCJvbkNsaWNrIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Apps/ToDoApp.tsx\n"));

/***/ })

});