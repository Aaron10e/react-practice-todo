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

/***/ "(app-client)/./app/components/TodoList.tsx":
/*!*************************************!*\
  !*** ./app/components/TodoList.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_generateID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/generateID */ \"(app-client)/./app/api/generateID.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page.module.css */ \"(app-client)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [shaking, setShaking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAddGoal = (event)=>{\n        if (input.length < 1) {\n            setShaking(true);\n            setTimeout(()=>{\n                setShaking(false);\n            }, 500);\n            return;\n        }\n        if (event.type === \"click\" || event.keyCode === 13) {\n            const newGoal = {\n                value: input,\n                id: (0,_api_generateID__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n            };\n            setGoals([\n                ...goals,\n                newGoal\n            ]);\n            setInput(\"\");\n        }\n    };\n    const handleRemoveGoal = (id)=>{\n        setGoals((currentGoals)=>{\n            return currentGoals.filter((goal)=>goal.id !== id);\n        });\n    };\n    const handleInputChange = (event)=>{\n        setInput(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"todo-next:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().code),\n                                style: {\n                                    maxWidth: \"20vw\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"welcome\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" to the to-do list app. with some simple HMTL + CSS + TS we can be begin to create interactive web pages.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"reminders:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            goals.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            todo.value,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().cancel),\n                                                onClick: ()=>handleRemoveGoal(todo.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    alt: \"remove todo item\",\n                                                    width: 12,\n                                                    height: 12,\n                                                    src: \"/close.svg\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, todo.id, false, {\n                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: shaking ? \"shake\" : \"\",\n                                value: input,\n                                onChange: handleInputChange,\n                                onKeyUp: handleAddGoal,\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                                onClick: handleAddGoal,\n                                children: \"Add to list\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"jDfQt8/5jOSxQX5i7Fcxc5r+cRQ=\");\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Q7QUFDWjtBQUNTO0FBR2pDLE1BQU1LLFdBQWUsSUFBTTs7SUFDaEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFhLEVBQUU7SUFDakQsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU1XLGdCQUFnQixDQUNwQkMsUUFJRztRQUNILElBQUlMLE1BQU1NLE1BQU0sR0FBRyxHQUFHO1lBQ3BCSCxXQUFXLElBQUk7WUFDZkksV0FBVyxJQUFNO2dCQUNmSixXQUFXLEtBQUs7WUFDbEIsR0FBRztZQUVIO1FBQ0YsQ0FBQztRQUNELElBQUlFLE1BQU1HLElBQUksS0FBSyxXQUFXSCxNQUFNSSxPQUFPLEtBQUssSUFBSTtZQUNsRCxNQUFNQyxVQUFVO2dCQUFFQyxPQUFPWDtnQkFBT1ksSUFBSWxCLDJEQUFVQTtZQUFHO1lBQ2pESyxTQUFTO21CQUFJRDtnQkFBT1k7YUFBUTtZQUM1QlQsU0FBUztRQUNYLENBQUM7SUFDSDtJQUVBLE1BQU1ZLG1CQUFtQixDQUFDRCxLQUFZO1FBQ3BDYixTQUFTLENBQUNlLGVBQWlCO1lBQ3pCLE9BQU9BLGFBQWFDLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLSixFQUFFLEtBQUtBO1FBQ25EO0lBQ0Y7SUFFQSxNQUFNSyxvQkFBb0IsQ0FBQ1osUUFFckI7UUFDSkosU0FBU0ksTUFBTWEsTUFBTSxDQUFDUCxLQUFLO0lBQzdCO0lBRUEscUJBQ0UsOERBQUNRO2tCQUNDLDRFQUFDQztZQUFLQyxXQUFXekIsOERBQVc7c0JBQzFCLDRFQUFDdUI7Z0JBQUlFLFdBQVd6QixxRUFBa0I7O2tDQUNoQyw4REFBQ3VCO3dCQUFJRSxXQUFXekIsOERBQVc7OzBDQUN6Qiw4REFBQ3VCOzBDQUNDLDRFQUFDSzs4Q0FBSzs7Ozs7Ozs7Ozs7MENBRVIsOERBQUNDOzs7OzswQ0FDRCw4REFBQ047Z0NBQUlFLFdBQVd6Qiw4REFBVztnQ0FBRStCLE9BQU87b0NBQUVDLFVBQVU7Z0NBQU87O2tEQUNyRCw4REFBQ0M7a0RBQU87Ozs7OztvQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7a0NBSTVCLDhEQUFDVjt3QkFBSUUsV0FBV3pCLDhEQUFXOzswQ0FDekIsOERBQUM0QjswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQzs7Ozs7NEJBQ0EzQixNQUFNZ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ2I7OENBQ0MsNEVBQUNjOzs0Q0FDRUYsS0FBS3BCLEtBQUs7MERBQ1gsOERBQUNRO2dEQUNDRSxXQUFXekIsZ0VBQWE7Z0RBQ3hCdUMsU0FBUyxJQUFNdEIsaUJBQWlCa0IsS0FBS25CLEVBQUU7MERBRXZDLDRFQUFDakIsbURBQUtBO29EQUNKeUMsS0FBSTtvREFDSkMsT0FBTztvREFDUEMsUUFBUTtvREFDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBWEZSLEtBQUtuQixFQUFFOzs7OzswQ0FpQm5CLDhEQUFDWjtnQ0FDQ1ksSUFBSVYsVUFBVSxVQUFVLEVBQUU7Z0NBQzFCUyxPQUFPWDtnQ0FDUHdDLFVBQVV2QjtnQ0FDVndCLFNBQVNyQztnQ0FDVEksTUFBSzs7Ozs7OzBDQUVQLDhEQUFDVztnQ0FBSUUsV0FBV3pCLGdFQUFhO2dDQUFFdUMsU0FBUy9COzBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5FLEVBQUU7R0F4RldQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD81N2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2VuZXJhdGVJRCBmcm9tICcuLi9hcGkvZ2VuZXJhdGVJRCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2UubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBUb2RvSXRlbSB9IGZyb20gJy4uL21vZGVscy90b2RvLWl0ZW0nO1xuXG5leHBvcnQgY29uc3QgVG9kb0xpc3Q6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlPFRvZG9JdGVtW10+KFtdKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaGFraW5nLCBzZXRTaGFraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVBZGRHb2FsID0gKFxuICAgIGV2ZW50OlxuICAgICAgfCBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD5cbiAgICAgIHwgUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICAgICAgfCBhbnlcbiAgKSA9PiB7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCA8IDEpIHtcbiAgICAgIHNldFNoYWtpbmcodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U2hha2luZyhmYWxzZSk7XG4gICAgICB9LCA1MDApO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snIHx8IGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBjb25zdCBuZXdHb2FsID0geyB2YWx1ZTogaW5wdXQsIGlkOiBnZW5lcmF0ZUlEKCkgfTtcbiAgICAgIHNldEdvYWxzKFsuLi5nb2FscywgbmV3R29hbF0pO1xuICAgICAgc2V0SW5wdXQoJycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVHb2FsID0gKGlkOiBhbnkpID0+IHtcbiAgICBzZXRHb2FscygoY3VycmVudEdvYWxzKSA9PiB7XG4gICAgICByZXR1cm4gY3VycmVudEdvYWxzLmZpbHRlcigoZ29hbCkgPT4gZ29hbC5pZCAhPT0gaWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiB7XG4gICAgdGFyZ2V0OiB7IHZhbHVlOiBSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+IH07XG4gIH0pID0+IHtcbiAgICBzZXRJbnB1dChldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3Bhbj50b2RvLW5leHQ6PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0gc3R5bGU9e3sgbWF4V2lkdGg6ICcyMHZ3JyB9fT5cbiAgICAgICAgICAgICAgPHN0cm9uZz53ZWxjb21lPC9zdHJvbmc+IHRvIHRoZSB0by1kbyBsaXN0IGFwcC4gd2l0aCBzb21lIHNpbXBsZVxuICAgICAgICAgICAgICBITVRMICsgQ1NTICsgVFMgd2UgY2FuIGJlIGJlZ2luIHRvIGNyZWF0ZSBpbnRlcmFjdGl2ZSB3ZWIgcGFnZXMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPHNwYW4+cmVtaW5kZXJzOjwvc3Bhbj5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAge2dvYWxzLm1hcCgodG9kbywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIHt0b2RvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYW5jZWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUdvYWwodG9kby5pZCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJlbW92ZSB0b2RvIGl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9jbG9zZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD17c2hha2luZyA/ICdzaGFrZScgOiAnJ31cbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uS2V5VXA9e2hhbmRsZUFkZEdvYWx9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQWRkR29hbH0+XG4gICAgICAgICAgICAgIEFkZCB0byBsaXN0XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2VuZXJhdGVJRCIsIkltYWdlIiwic3R5bGVzIiwiVG9kb0xpc3QiLCJnb2FscyIsInNldEdvYWxzIiwiaW5wdXQiLCJzZXRJbnB1dCIsInNoYWtpbmciLCJzZXRTaGFraW5nIiwiaGFuZGxlQWRkR29hbCIsImV2ZW50IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInR5cGUiLCJrZXlDb2RlIiwibmV3R29hbCIsInZhbHVlIiwiaWQiLCJoYW5kbGVSZW1vdmVHb2FsIiwiY3VycmVudEdvYWxzIiwiZmlsdGVyIiwiZ29hbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiY2FyZCIsInNwYW4iLCJociIsImNvZGUiLCJzdHlsZSIsIm1heFdpZHRoIiwic3Ryb25nIiwibWFwIiwidG9kbyIsImluZGV4IiwibGkiLCJjYW5jZWwiLCJvbkNsaWNrIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJvbkNoYW5nZSIsIm9uS2V5VXAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/TodoList.tsx\n"));

/***/ })

});