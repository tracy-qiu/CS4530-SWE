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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/number-input/dist/chunk-2JJX6TVY.mjs\");\n/* harmony import */ var _ToDoItemEntryForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoItemEntryForm */ \"(app-pages-browser)/./app/Apps/ToDoItemEntryForm.tsx\");\n/* harmony import */ var _ToDoListDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToDoListDisplay */ \"(app-pages-browser)/./app/Apps/ToDoListDisplay.tsx\");\n// illustrates forms, lists, etc.\n// THE WHOLE POINT OF THIS IS THE ATTRIBUTE 'key' ON LINE\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { ToDoListDisplay } from \"./ToDoListDisplayBad\";\nfunction ToDoApp() {\n    _s();\n    const [todoList, setTodolist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [minPriority, setMinPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(todoList);\n    }, [\n        todoList\n    ]);\n    function handleAdd(newItem) {\n        if (newItem.title === \"\") {\n            return;\n        } // ignore blank button presses\n        setTodolist(todoList.concat(newItem));\n    }\n    function handleDelete(targetKey) {\n        const newList = todoList.filter((item)=>item.key != targetKey);\n        setTodolist(newList);\n    }\n    function handleSortTodos() {\n        let newList = [\n            ...todoList\n        ];\n        newList = newList.sort((a, b)=>parseInt(a.priority) - parseInt(b.priority));\n        // console.log(newList);\n        setTodolist(newList);\n    }\n    function handleDeleteLowPriorityTodos(event) {\n        const minPriority = event.target.value;\n        // console.log(todoList);\n        // console.log(typeof todoList[0]);\n        // console.log(minPriority);\n        // console.log(typeof minPriority);\n        let newList = todoList.filter((item)=>parseInt(item.priority) <= parseInt(minPriority));\n        newList = todoList;\n        setTodolist(newList);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                children: \"TODO List\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToDoItemEntryForm__WEBPACK_IMPORTED_MODULE_2__.ToDoItemEntryForm, {\n                onAdd: handleAdd\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToDoListDisplay__WEBPACK_IMPORTED_MODULE_3__.ToDoListDisplay, {\n                items: todoList,\n                onDelete: handleDelete\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: handleSortTodos,\n                children: \"Sort Todo Items\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInput, {\n                name: \"minimumPriority\",\n                value: minPriority,\n                placeholder: \"type priority here\",\n                onChange: (event)=>console.log(event),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInputField, {\n                        onChange: (event)=>setMinPriority(event.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberInputStepper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberIncrementStepper, {}, void 0, false, {\n                                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.NumberDecrementStepper, {}, void 0, false, {\n                                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                onClick: handleDeleteLowPriorityTodos,\n                children: \"Delete Low Priority Todos\"\n            }, void 0, false, {\n                fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tracyqiu/2023/fall/CS4530-SWE/in-class-activities/module07-react-activity/app/Apps/ToDoApp.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(ToDoApp, \"nL2lQiDRm+GvoZeTJmHuI2/vHiU=\");\n_c = ToDoApp;\nvar _c;\n$RefreshReg$(_c, \"ToDoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9BcHBzL1RvRG9BcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMseURBQXlEOzs7QUFFMUI7QUFDYTtBQWVsQjtBQUc4QjtBQUNKO0FBQ3BELDBEQUEwRDtBQUUzQyxTQUFTYTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFhLEVBQUU7SUFDdkQsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUmdCLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDZCxHQUFHO1FBQUNBO0tBQVM7SUFFYixTQUFTTSxVQUFVQyxPQUFpQjtRQUNsQyxJQUFJQSxRQUFRQyxLQUFLLEtBQUssSUFBSTtZQUN4QjtRQUNGLEVBQUUsOEJBQThCO1FBQ2hDUCxZQUFZRCxTQUFTUyxNQUFNLENBQUNGO0lBQzlCO0lBRUEsU0FBU0csYUFBYUMsU0FBaUI7UUFDckMsTUFBTUMsVUFBVVosU0FBU2EsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEdBQUcsSUFBSUo7UUFDdERWLFlBQVlXO0lBQ2Q7SUFFQSxTQUFTSTtRQUNQLElBQUlKLFVBQVU7ZUFBSVo7U0FBUztRQUMzQlksVUFBVUEsUUFBUUssSUFBSSxDQUNwQixDQUFDQyxHQUFHQyxJQUFNQyxTQUFTRixFQUFFRyxRQUFRLElBQUlELFNBQVNELEVBQUVFLFFBQVE7UUFFdEQsd0JBQXdCO1FBQ3hCcEIsWUFBWVc7SUFDZDtJQUVBLFNBQVNVLDZCQUE2QkMsS0FBVTtRQUM5QyxNQUFNckIsY0FBY3FCLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Qyx5QkFBeUI7UUFDekIsbUNBQW1DO1FBQ25DLDRCQUE0QjtRQUM1QixtQ0FBbUM7UUFDbkMsSUFBSWIsVUFBVVosU0FBU2EsTUFBTSxDQUMzQixDQUFDQyxPQUFTTSxTQUFTTixLQUFLTyxRQUFRLEtBQUtELFNBQVNsQjtRQUVoRFUsVUFBVVo7UUFDVkMsWUFBWVc7SUFDZDtJQUVBLHFCQUNFLDhEQUFDdEIsb0RBQU1BOzswQkFDTCw4REFBQ0QscURBQU9BOzBCQUFDOzs7Ozs7MEJBQ1QsOERBQUNRLGlFQUFpQkE7Z0JBQUM2QixPQUFPcEI7Ozs7OzswQkFDMUIsOERBQUNSLDZEQUFlQTtnQkFBQzZCLE9BQU8zQjtnQkFBVTRCLFVBQVVsQjs7Ozs7OzBCQUM1Qyw4REFBQ25CLG9EQUFNQTtnQkFBQ3NDLFNBQVNiOzBCQUFpQjs7Ozs7OzBCQUNsQyw4REFBQ3hCLHlEQUFXQTtnQkFDVnNDLE1BQUs7Z0JBQ0xMLE9BQU92QjtnQkFDUDZCLGFBQVk7Z0JBQ1pDLFVBQVUsQ0FBQ1QsUUFBVW5CLFFBQVFDLEdBQUcsQ0FBQ2tCOztrQ0FFakMsOERBQUM5Qiw4REFBZ0JBO3dCQUNmdUMsVUFBVSxDQUFDVCxRQUFVcEIsZUFBZW9CLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2tDQUV4RCw4REFBQy9CLGdFQUFrQkE7OzBDQUNqQiw4REFBQ0Msb0VBQXNCQTs7Ozs7MENBQ3ZCLDhEQUFDQyxvRUFBc0JBOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHM0IsOERBQUNMLG9EQUFNQTtnQkFBQ3NDLFNBQVNQOzBCQUE4Qjs7Ozs7Ozs7Ozs7O0FBS3JEO0dBbkV3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9BcHBzL1RvRG9BcHAudHN4PzU0MTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaWxsdXN0cmF0ZXMgZm9ybXMsIGxpc3RzLCBldGMuXG4vLyBUSEUgV0hPTEUgUE9JTlQgT0YgVEhJUyBJUyBUSEUgQVRUUklCVVRFICdrZXknIE9OIExJTkVcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBUYWJsZSxcbiAgVGgsXG4gIFRib2R5LFxuICBUcixcbiAgVGQsXG4gIFZTdGFjayxcbiAgQnV0dG9uLFxuICBOdW1iZXJJbnB1dCxcbiAgTnVtYmVySW5wdXRGaWVsZCxcbiAgTnVtYmVySW5wdXRTdGVwcGVyLFxuICBOdW1iZXJJbmNyZW1lbnRTdGVwcGVyLFxuICBOdW1iZXJEZWNyZW1lbnRTdGVwcGVyLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQgeyBUb0RvSXRlbSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBUb0RvSXRlbUVudHJ5Rm9ybSB9IGZyb20gXCIuL1RvRG9JdGVtRW50cnlGb3JtXCI7XG5pbXBvcnQgeyBUb0RvTGlzdERpc3BsYXkgfSBmcm9tIFwiLi9Ub0RvTGlzdERpc3BsYXlcIjtcbi8vIGltcG9ydCB7IFRvRG9MaXN0RGlzcGxheSB9IGZyb20gXCIuL1RvRG9MaXN0RGlzcGxheUJhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvQXBwKCkge1xuICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9saXN0XSA9IHVzZVN0YXRlPFRvRG9JdGVtW10+KFtdKTtcbiAgY29uc3QgW21pblByaW9yaXR5LCBzZXRNaW5Qcmlvcml0eV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0KTtcbiAgfSwgW3RvZG9MaXN0XSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQWRkKG5ld0l0ZW06IFRvRG9JdGVtKSB7XG4gICAgaWYgKG5ld0l0ZW0udGl0bGUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGlnbm9yZSBibGFuayBidXR0b24gcHJlc3Nlc1xuICAgIHNldFRvZG9saXN0KHRvZG9MaXN0LmNvbmNhdChuZXdJdGVtKSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGUodGFyZ2V0S2V5OiBudW1iZXIpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gdG9kb0xpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSAhPSB0YXJnZXRLZXkpO1xuICAgIHNldFRvZG9saXN0KG5ld0xpc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU29ydFRvZG9zKCkge1xuICAgIGxldCBuZXdMaXN0ID0gWy4uLnRvZG9MaXN0XTtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdC5zb3J0KFxuICAgICAgKGEsIGIpID0+IHBhcnNlSW50KGEucHJpb3JpdHkpIC0gcGFyc2VJbnQoYi5wcmlvcml0eSlcbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKG5ld0xpc3QpO1xuICAgIHNldFRvZG9saXN0KG5ld0xpc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlTG93UHJpb3JpdHlUb2RvcyhldmVudDogYW55KSB7XG4gICAgY29uc3QgbWluUHJpb3JpdHkgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2codG9kb0xpc3QpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB0b2RvTGlzdFswXSk7XG4gICAgLy8gY29uc29sZS5sb2cobWluUHJpb3JpdHkpO1xuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBtaW5Qcmlvcml0eSk7XG4gICAgbGV0IG5ld0xpc3QgPSB0b2RvTGlzdC5maWx0ZXIoXG4gICAgICAoaXRlbSkgPT4gcGFyc2VJbnQoaXRlbS5wcmlvcml0eSkgPD0gcGFyc2VJbnQobWluUHJpb3JpdHkpXG4gICAgKTtcbiAgICBuZXdMaXN0ID0gdG9kb0xpc3Q7XG4gICAgc2V0VG9kb2xpc3QobmV3TGlzdCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxWU3RhY2s+XG4gICAgICA8SGVhZGluZz5UT0RPIExpc3Q8L0hlYWRpbmc+XG4gICAgICA8VG9Eb0l0ZW1FbnRyeUZvcm0gb25BZGQ9e2hhbmRsZUFkZH0gLz5cbiAgICAgIDxUb0RvTGlzdERpc3BsYXkgaXRlbXM9e3RvZG9MaXN0fSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTb3J0VG9kb3N9PlNvcnQgVG9kbyBJdGVtczwvQnV0dG9uPlxuICAgICAgPE51bWJlcklucHV0XG4gICAgICAgIG5hbWU9XCJtaW5pbXVtUHJpb3JpdHlcIlxuICAgICAgICB2YWx1ZT17bWluUHJpb3JpdHl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSBwcmlvcml0eSBoZXJlXCJcbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gY29uc29sZS5sb2coZXZlbnQpfVxuICAgICAgPlxuICAgICAgICA8TnVtYmVySW5wdXRGaWVsZFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE1pblByaW9yaXR5KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxOdW1iZXJJbnB1dFN0ZXBwZXI+XG4gICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cbiAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxuICAgICAgICA8L051bWJlcklucHV0U3RlcHBlcj5cbiAgICAgIDwvTnVtYmVySW5wdXQ+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUxvd1ByaW9yaXR5VG9kb3N9PlxuICAgICAgICBEZWxldGUgTG93IFByaW9yaXR5IFRvZG9zXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1ZTdGFjaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGluZyIsIlZTdGFjayIsIkJ1dHRvbiIsIk51bWJlcklucHV0IiwiTnVtYmVySW5wdXRGaWVsZCIsIk51bWJlcklucHV0U3RlcHBlciIsIk51bWJlckluY3JlbWVudFN0ZXBwZXIiLCJOdW1iZXJEZWNyZW1lbnRTdGVwcGVyIiwiVG9Eb0l0ZW1FbnRyeUZvcm0iLCJUb0RvTGlzdERpc3BsYXkiLCJUb0RvQXBwIiwidG9kb0xpc3QiLCJzZXRUb2RvbGlzdCIsIm1pblByaW9yaXR5Iiwic2V0TWluUHJpb3JpdHkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQWRkIiwibmV3SXRlbSIsInRpdGxlIiwiY29uY2F0IiwiaGFuZGxlRGVsZXRlIiwidGFyZ2V0S2V5IiwibmV3TGlzdCIsImZpbHRlciIsIml0ZW0iLCJrZXkiLCJoYW5kbGVTb3J0VG9kb3MiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUludCIsInByaW9yaXR5IiwiaGFuZGxlRGVsZXRlTG93UHJpb3JpdHlUb2RvcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvbkFkZCIsIml0ZW1zIiwib25EZWxldGUiLCJvbkNsaWNrIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Apps/ToDoApp.tsx\n"));

/***/ })

});