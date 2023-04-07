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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_generateID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/generateID */ \"(app-client)/./app/api/generateID.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page.module.css */ \"(app-client)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_TodoStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/TodoStore */ \"(app-client)/./app/store/TodoStore.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [shaking, setShaking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { state , dispatch  } = (0,_store_TodoStore__WEBPACK_IMPORTED_MODULE_4__.useTodoStore)();\n    const handleAddGoal = (event)=>{\n        if (input.length < 1) {\n            setShaking(true);\n            setTimeout(()=>{\n                setShaking(false);\n            }, 500);\n            return;\n        }\n        if (event.type === \"click\" || event.keyCode === 13) {\n            const newGoal = {\n                description: input,\n                id: (0,_api_generateID__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                isDone: false\n            };\n            setGoals([\n                ...goals,\n                newGoal\n            ]);\n            setInput(\"\");\n        }\n    };\n    const handleRemoveGoal = (id)=>{\n        setGoals((currentGoals)=>{\n            return currentGoals.filter((goal)=>goal.id !== id);\n        });\n    };\n    const handleInputChange = (event)=>{\n        setInput(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"todo-next:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().code),\n                                style: {\n                                    maxWidth: \"20vw\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"welcome\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" to the to-do list app. with some simple HMTL + CSS + TS we can be begin to create interactive web pages.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"reminders:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            goals.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            todo.description,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().cancel),\n                                                onClick: ()=>handleRemoveGoal(todo.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    alt: \"remove todo item\",\n                                                    width: 12,\n                                                    height: 12,\n                                                    src: \"/close.svg\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, todo.id, false, {\n                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: shaking ? \"shake\" : \"\",\n                                value: input,\n                                onChange: handleInputChange,\n                                onKeyUp: handleAddGoal,\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                onClick: handleAddGoal,\n                                children: \"Add to list\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"1cwWae4fTA9p5hSyCWSD0xsIJ9c=\", false, function() {\n    return [\n        _store_TodoStore__WEBPACK_IMPORTED_MODULE_4__.useTodoStore\n    ];\n});\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNEO0FBQ1o7QUFDUztBQUVVO0FBRTNDLE1BQU1NLFdBQWUsSUFBTTs7SUFDaEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFhLEVBQUU7SUFDakQsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sRUFBRVksTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR1QsOERBQVlBO0lBRXhDLE1BQU1VLGdCQUFnQixDQUNwQkMsUUFJRztRQUNILElBQUlQLE1BQU1RLE1BQU0sR0FBRyxHQUFHO1lBQ3BCTCxXQUFXLElBQUk7WUFDZk0sV0FBVyxJQUFNO2dCQUNmTixXQUFXLEtBQUs7WUFDbEIsR0FBRztZQUVIO1FBQ0YsQ0FBQztRQUNELElBQUlJLE1BQU1HLElBQUksS0FBSyxXQUFXSCxNQUFNSSxPQUFPLEtBQUssSUFBSTtZQUNsRCxNQUFNQyxVQUFVO2dCQUFFQyxhQUFhYjtnQkFBT2MsSUFBSXJCLDJEQUFVQTtnQkFBSXNCLFFBQVEsS0FBSztZQUFDO1lBQ3RFaEIsU0FBUzttQkFBSUQ7Z0JBQU9jO2FBQVE7WUFDNUJYLFNBQVM7UUFDWCxDQUFDO0lBQ0g7SUFFQSxNQUFNZSxtQkFBbUIsQ0FBQ0YsS0FBWTtRQUNwQ2YsU0FBUyxDQUFDa0IsZUFBaUI7WUFDekIsT0FBT0EsYUFBYUMsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtMLEVBQUUsS0FBS0E7UUFDbkQ7SUFDRjtJQUVBLE1BQU1NLG9CQUFvQixDQUFDYixRQUVyQjtRQUNKTixTQUFTTSxNQUFNYyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO1lBQUtDLFdBQVc5Qiw4REFBVztzQkFDMUIsNEVBQUM0QjtnQkFBSUUsV0FBVzlCLHFFQUFrQjs7a0NBQ2hDLDhEQUFDNEI7d0JBQUlFLFdBQVc5Qiw4REFBVzs7MENBQ3pCLDhEQUFDNEI7MENBQ0MsNEVBQUNJOzhDQUFLOzs7Ozs7Ozs7OzswQ0FFUiw4REFBQ0M7Ozs7OzBDQUNELDhEQUFDTDtnQ0FBSUUsV0FBVzlCLDhEQUFXO2dDQUFFbUMsT0FBTztvQ0FBRUMsVUFBVTtnQ0FBTzs7a0RBQ3JELDhEQUFDQztrREFBTzs7Ozs7O29DQUFnQjs7Ozs7Ozs7Ozs7OztrQ0FJNUIsOERBQUNUO3dCQUFJRSxXQUFXOUIsOERBQVc7OzBDQUN6Qiw4REFBQ2dDOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNDOzs7Ozs0QkFDQTlCLE1BQU1tQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2hCLDhEQUFDWjs4Q0FDQyw0RUFBQ2E7OzRDQUNFRixLQUFLckIsV0FBVzswREFDakIsOERBQUNVO2dEQUNDRSxXQUFXOUIsZ0VBQWE7Z0RBQ3hCMkMsU0FBUyxJQUFNdEIsaUJBQWlCa0IsS0FBS3BCLEVBQUU7MERBRXZDLDRFQUFDcEIsbURBQUtBO29EQUNKNkMsS0FBSTtvREFDSkMsT0FBTztvREFDUEMsUUFBUTtvREFDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBWEZSLEtBQUtwQixFQUFFOzs7OzswQ0FpQm5CLDhEQUFDZDtnQ0FDQ2MsSUFBSVosVUFBVSxVQUFVLEVBQUU7Z0NBQzFCb0IsT0FBT3RCO2dDQUNQMkMsVUFBVXZCO2dDQUNWd0IsU0FBU3RDO2dDQUNUSSxNQUFLOzs7Ozs7MENBRVAsOERBQUNhO2dDQUFJRSxXQUFXOUIsZ0VBQWE7Z0NBQUUyQyxTQUFTaEM7MENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkUsRUFBRTtHQXpGV1Q7O1FBSWlCRCwwREFBWUE7OztLQUo3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzU3YjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZW5lcmF0ZUlEIGZyb20gJy4uL2FwaS9nZW5lcmF0ZUlEJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IFRvZG9JdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8taXRlbSc7XG5pbXBvcnQgeyB1c2VUb2RvU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9Ub2RvU3RvcmUnO1xuXG5leHBvcnQgY29uc3QgVG9kb0xpc3Q6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlPFRvZG9JdGVtW10+KFtdKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaGFraW5nLCBzZXRTaGFraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZVRvZG9TdG9yZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZEdvYWwgPSAoXG4gICAgZXZlbnQ6XG4gICAgICB8IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PlxuICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB8IGFueVxuICApID0+IHtcbiAgICBpZiAoaW5wdXQubGVuZ3RoIDwgMSkge1xuICAgICAgc2V0U2hha2luZyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaGFraW5nKGZhbHNlKTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGNvbnN0IG5ld0dvYWwgPSB7IGRlc2NyaXB0aW9uOiBpbnB1dCwgaWQ6IGdlbmVyYXRlSUQoKSwgaXNEb25lOiBmYWxzZSB9O1xuICAgICAgc2V0R29hbHMoWy4uLmdvYWxzLCBuZXdHb2FsXSk7XG4gICAgICBzZXRJbnB1dCgnJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUdvYWwgPSAoaWQ6IGFueSkgPT4ge1xuICAgIHNldEdvYWxzKChjdXJyZW50R29hbHMpID0+IHtcbiAgICAgIHJldHVybiBjdXJyZW50R29hbHMuZmlsdGVyKChnb2FsKSA9PiBnb2FsLmlkICE9PSBpZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IHtcbiAgICB0YXJnZXQ6IHsgdmFsdWU6IFJlYWN0LlNldFN0YXRlQWN0aW9uPHN0cmluZz4gfTtcbiAgfSkgPT4ge1xuICAgIHNldElucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+ICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuPnRvZG8tbmV4dDo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfSBzdHlsZT17eyBtYXhXaWR0aDogJzIwdncnIH19PlxuICAgICAgICAgICAgICA8c3Ryb25nPndlbGNvbWU8L3N0cm9uZz4gdG8gdGhlIHRvLWRvIGxpc3QgYXBwLiB3aXRoIHNvbWUgc2ltcGxlXG4gICAgICAgICAgICAgIEhNVEwgKyBDU1MgKyBUUyB3ZSBjYW4gYmUgYmVnaW4gdG8gY3JlYXRlIGludGVyYWN0aXZlIHdlYiBwYWdlcy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8c3Bhbj5yZW1pbmRlcnM6PC9zcGFuPlxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICB7Z29hbHMubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAge3RvZG8uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlR29hbCh0b2RvLmlkKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwicmVtb3ZlIHRvZG8gaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nsb3NlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPXtzaGFraW5nID8gJ3NoYWtlJyA6ICcnfVxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgb25LZXlVcD17aGFuZGxlQWRkR29hbH1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVBZGRHb2FsfT5cbiAgICAgICAgICAgICAgQWRkIHRvIGxpc3RcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJnZW5lcmF0ZUlEIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VUb2RvU3RvcmUiLCJUb2RvTGlzdCIsImdvYWxzIiwic2V0R29hbHMiLCJpbnB1dCIsInNldElucHV0Iiwic2hha2luZyIsInNldFNoYWtpbmciLCJzdGF0ZSIsImRpc3BhdGNoIiwiaGFuZGxlQWRkR29hbCIsImV2ZW50IiwibGVuZ3RoIiwic2V0VGltZW91dCIsInR5cGUiLCJrZXlDb2RlIiwibmV3R29hbCIsImRlc2NyaXB0aW9uIiwiaWQiLCJpc0RvbmUiLCJoYW5kbGVSZW1vdmVHb2FsIiwiY3VycmVudEdvYWxzIiwiZmlsdGVyIiwiZ29hbCIsImhhbmRsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiY2FyZCIsInNwYW4iLCJociIsImNvZGUiLCJzdHlsZSIsIm1heFdpZHRoIiwic3Ryb25nIiwibWFwIiwidG9kbyIsImluZGV4IiwibGkiLCJjYW5jZWwiLCJvbkNsaWNrIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJvbkNoYW5nZSIsIm9uS2V5VXAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/TodoList.tsx\n"));

/***/ })

});