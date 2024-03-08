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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/number-input/dist/chunk-2JJX6TVY.mjs\");\n/* harmony import */ var _ToDoItemEntryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoItemEntryForm */ \"(app-pages-browser)/./app/Apps/ToDoItemEntryForm.tsx\");\n/* harmony import */ var _ToDoListDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToDoListDisplay */ \"(app-pages-browser)/./app/Apps/ToDoListDisplay.tsx\");\n// illustrates forms, lists, etc.\n// THE WHOLE POINT OF THIS IS THE ATTRIBUTE 'key' ON LINE\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { ToDoListDisplay } from \"./ToDoListDisplayBad\";\nfunction ToDoApp() {\n    _s();\n    const [todoList, setTodolist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [minPriority, setMinPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(todoList);\n    }, [\n        todoList\n    ]);\n    function handleAdd(newItem) {\n        if (newItem.title === \"\") {\n            return;\n        } // ignore blank button presses\n        setTodolist(todoList.concat(newItem));\n    }\n    function handleDelete(targetKey) {\n        const newList = todoList.filter((item)=>item.key != targetKey);\n        setTodolist(newList);\n    }\n    function handleSortTodos() {\n        let newList;\n        newList = todoList.sort((a, b)=>parseInt(a.priority) - parseInt(b.priority));\n        // console.log(newList);\n        setTodolist(newList);\n    }\n    function handleDeleteLowPriorityTodos(event) {\n        const minPriority = event.target.value;\n        // console.log(todoList);\n        // console.log(typeof todoList[0]);\n        // console.log(minPriority);\n        // console.log(typeof minPriority);\n        let newList = todoList.filter((item)=>parseInt(item.priority) <= parseInt(minPriority));\n        newList = todoList;\n        setTodolist(newList);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                children: \"TODO List\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToDoItemEntryForm__WEBPACK_IMPORTED_MODULE_2__.ToDoItemEntryForm, {\n                onAdd: handleAdd\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToDoListDisplay__WEBPACK_IMPORTED_MODULE_3__.ToDoListDisplay, {\n                items: todoList,\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: handleSortTodos,\n                children: \"Sort Todo Items\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInput, {\n                name: \"minimumPriority\",\n                value: minPriority,\n                placeholder: \"type priority here\",\n                onChange: (event)=>console.log(event),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInputField, {\n                        onChange: (event)=>setMinPriority(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInputStepper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberIncrementStepper, {}, void 0, false, {\n                                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberDecrementStepper, {}, void 0, false, {\n                                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: handleDeleteLowPriorityTodos,\n                children: \"Delete Low Priority Todos\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(ToDoApp, \"nL2lQiDRm+GvoZeTJmHuI2/vHiU=\");\n_c = ToDoApp;\nvar _c;\n$RefreshReg$(_c, \"ToDoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BcHBzL1RvRG9BcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMseURBQXlEOzs7QUFFMUI7QUFDYTtBQWVsQjtBQUc4QjtBQUNKO0FBQ3BELDBEQUEwRDtBQUUzQyxTQUFTYTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFhLEVBQUU7SUFDdkQsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUmdCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDZCxHQUFHO1FBQUNBO0tBQVM7SUFFYixTQUFTTSxVQUFVQyxPQUFpQjtRQUNsQyxJQUFJQSxRQUFRQyxLQUFLLEtBQUssSUFBSTtZQUN4QjtRQUNGLEVBQUUsOEJBQThCO1FBQ2hDUCxZQUFZRCxTQUFTUyxNQUFNLENBQUNGO0lBQzlCO0lBRUEsU0FBU0csYUFBYUMsU0FBaUI7UUFDckMsTUFBTUMsVUFBVVosU0FBU2EsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEdBQUcsSUFBSUo7UUFDdERWLFlBQVlXO0lBQ2Q7SUFFQSxTQUFTSTtRQUNQLElBQUlKO1FBQ0pBLFVBQVVaLFNBQVNpQixJQUFJLENBQ3JCLENBQUNDLEdBQUdDLElBQU1DLFNBQVNGLEVBQUVHLFFBQVEsSUFBSUQsU0FBU0QsRUFBRUUsUUFBUTtRQUV0RCx3QkFBd0I7UUFDeEJwQixZQUFZVztJQUNkO0lBRUEsU0FBU1UsNkJBQTZCQyxLQUFVO1FBQzlDLE1BQU1yQixjQUFjcUIsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDLHlCQUF5QjtRQUN6QixtQ0FBbUM7UUFDbkMsNEJBQTRCO1FBQzVCLG1DQUFtQztRQUNuQyxJQUFJYixVQUFVWixTQUFTYSxNQUFNLENBQzNCLENBQUNDLE9BQVNNLFNBQVNOLEtBQUtPLFFBQVEsS0FBS0QsU0FBU2xCO1FBRWhEVSxVQUFVWjtRQUNWQyxZQUFZVztJQUNkO0lBRUEscUJBQ0UsOERBQUN0QixvREFBTUE7OzBCQUNMLDhEQUFDRCxxREFBT0E7MEJBQUM7Ozs7OzswQkFDVCw4REFBQ1EsaUVBQWlCQTtnQkFBQzZCLE9BQU9wQjs7Ozs7OzBCQUMxQiw4REFBQ1IsNkRBQWVBO2dCQUFDNkIsT0FBTzNCO2dCQUFVNEIsVUFBVWxCOzs7Ozs7MEJBQzVDLDhEQUFDbkIsb0RBQU1BO2dCQUFDc0MsU0FBU2I7MEJBQWlCOzs7Ozs7MEJBQ2xDLDhEQUFDeEIseURBQVdBO2dCQUNWc0MsTUFBSztnQkFDTEwsT0FBT3ZCO2dCQUNQNkIsYUFBWTtnQkFDWkMsVUFBVSxDQUFDVCxRQUFVbkIsUUFBUUMsR0FBRyxDQUFDa0I7O2tDQUVqQyw4REFBQzlCLDhEQUFnQkE7d0JBQ2Z1QyxVQUFVLENBQUNULFFBQVVwQixlQUFlb0IsTUFBTUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7a0NBRXhELDhEQUFDL0IsZ0VBQWtCQTs7MENBQ2pCLDhEQUFDQyxvRUFBc0JBOzs7OzswQ0FDdkIsOERBQUNDLG9FQUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUczQiw4REFBQ0wsb0RBQU1BO2dCQUFDc0MsU0FBU1A7MEJBQThCOzs7Ozs7Ozs7Ozs7QUFLckQ7R0FuRXdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0FwcHMvVG9Eb0FwcC50c3g/NTQxMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbGx1c3RyYXRlcyBmb3JtcywgbGlzdHMsIGV0Yy5cbi8vIFRIRSBXSE9MRSBQT0lOVCBPRiBUSElTIElTIFRIRSBBVFRSSUJVVEUgJ2tleScgT04gTElORVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEhlYWRpbmcsXG4gIFRhYmxlLFxuICBUaCxcbiAgVGJvZHksXG4gIFRyLFxuICBUZCxcbiAgVlN0YWNrLFxuICBCdXR0b24sXG4gIE51bWJlcklucHV0LFxuICBOdW1iZXJJbnB1dEZpZWxkLFxuICBOdW1iZXJJbnB1dFN0ZXBwZXIsXG4gIE51bWJlckluY3JlbWVudFN0ZXBwZXIsXG4gIE51bWJlckRlY3JlbWVudFN0ZXBwZXIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCB7IFRvRG9JdGVtIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IFRvRG9JdGVtRW50cnlGb3JtIH0gZnJvbSBcIi4vVG9Eb0l0ZW1FbnRyeUZvcm1cIjtcbmltcG9ydCB7IFRvRG9MaXN0RGlzcGxheSB9IGZyb20gXCIuL1RvRG9MaXN0RGlzcGxheVwiO1xuLy8gaW1wb3J0IHsgVG9Eb0xpc3REaXNwbGF5IH0gZnJvbSBcIi4vVG9Eb0xpc3REaXNwbGF5QmFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvRG9BcHAoKSB7XG4gIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb2xpc3RdID0gdXNlU3RhdGU8VG9Eb0l0ZW1bXT4oW10pO1xuICBjb25zdCBbbWluUHJpb3JpdHksIHNldE1pblByaW9yaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2codG9kb0xpc3QpO1xuICB9LCBbdG9kb0xpc3RdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVBZGQobmV3SXRlbTogVG9Eb0l0ZW0pIHtcbiAgICBpZiAobmV3SXRlbS50aXRsZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gaWdub3JlIGJsYW5rIGJ1dHRvbiBwcmVzc2VzXG4gICAgc2V0VG9kb2xpc3QodG9kb0xpc3QuY29uY2F0KG5ld0l0ZW0pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZSh0YXJnZXRLZXk6IG51bWJlcikge1xuICAgIGNvbnN0IG5ld0xpc3QgPSB0b2RvTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ua2V5ICE9IHRhcmdldEtleSk7XG4gICAgc2V0VG9kb2xpc3QobmV3TGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTb3J0VG9kb3MoKSB7XG4gICAgbGV0IG5ld0xpc3Q7XG4gICAgbmV3TGlzdCA9IHRvZG9MaXN0LnNvcnQoXG4gICAgICAoYSwgYikgPT4gcGFyc2VJbnQoYS5wcmlvcml0eSkgLSBwYXJzZUludChiLnByaW9yaXR5KVxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2cobmV3TGlzdCk7XG4gICAgc2V0VG9kb2xpc3QobmV3TGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGVMb3dQcmlvcml0eVRvZG9zKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBtaW5Qcmlvcml0eSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvTGlzdCk7XG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIHRvZG9MaXN0WzBdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtaW5Qcmlvcml0eSk7XG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIG1pblByaW9yaXR5KTtcbiAgICBsZXQgbmV3TGlzdCA9IHRvZG9MaXN0LmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBwYXJzZUludChpdGVtLnByaW9yaXR5KSA8PSBwYXJzZUludChtaW5Qcmlvcml0eSlcbiAgICApO1xuICAgIG5ld0xpc3QgPSB0b2RvTGlzdDtcbiAgICBzZXRUb2RvbGlzdChuZXdMaXN0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFZTdGFjaz5cbiAgICAgIDxIZWFkaW5nPlRPRE8gTGlzdDwvSGVhZGluZz5cbiAgICAgIDxUb0RvSXRlbUVudHJ5Rm9ybSBvbkFkZD17aGFuZGxlQWRkfSAvPlxuICAgICAgPFRvRG9MaXN0RGlzcGxheSBpdGVtcz17dG9kb0xpc3R9IG9uRGVsZXRlPXtoYW5kbGVEZWxldGV9IC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNvcnRUb2Rvc30+U29ydCBUb2RvIEl0ZW1zPC9CdXR0b24+XG4gICAgICA8TnVtYmVySW5wdXRcbiAgICAgICAgbmFtZT1cIm1pbmltdW1Qcmlvcml0eVwiXG4gICAgICAgIHZhbHVlPXttaW5Qcmlvcml0eX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ0eXBlIHByaW9yaXR5IGhlcmVcIlxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBjb25zb2xlLmxvZyhldmVudCl9XG4gICAgICA+XG4gICAgICAgIDxOdW1iZXJJbnB1dEZpZWxkXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TWluUHJpb3JpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPE51bWJlcklucHV0U3RlcHBlcj5cbiAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxuICAgICAgICAgIDxOdW1iZXJEZWNyZW1lbnRTdGVwcGVyIC8+XG4gICAgICAgIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxuICAgICAgPC9OdW1iZXJJbnB1dD5cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlTG93UHJpb3JpdHlUb2Rvc30+XG4gICAgICAgIERlbGV0ZSBMb3cgUHJpb3JpdHkgVG9kb3NcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvVlN0YWNrPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkaW5nIiwiVlN0YWNrIiwiQnV0dG9uIiwiTnVtYmVySW5wdXQiLCJOdW1iZXJJbnB1dEZpZWxkIiwiTnVtYmVySW5wdXRTdGVwcGVyIiwiTnVtYmVySW5jcmVtZW50U3RlcHBlciIsIk51bWJlckRlY3JlbWVudFN0ZXBwZXIiLCJUb0RvSXRlbUVudHJ5Rm9ybSIsIlRvRG9MaXN0RGlzcGxheSIsIlRvRG9BcHAiLCJ0b2RvTGlzdCIsInNldFRvZG9saXN0IiwibWluUHJpb3JpdHkiLCJzZXRNaW5Qcmlvcml0eSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVBZGQiLCJuZXdJdGVtIiwidGl0bGUiLCJjb25jYXQiLCJoYW5kbGVEZWxldGUiLCJ0YXJnZXRLZXkiLCJuZXdMaXN0IiwiZmlsdGVyIiwiaXRlbSIsImtleSIsImhhbmRsZVNvcnRUb2RvcyIsInNvcnQiLCJhIiwiYiIsInBhcnNlSW50IiwicHJpb3JpdHkiLCJoYW5kbGVEZWxldGVMb3dQcmlvcml0eVRvZG9zIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQWRkIiwiaXRlbXMiLCJvbkRlbGV0ZSIsIm9uQ2xpY2siLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Apps/ToDoApp.tsx\n"));

/***/ })

});