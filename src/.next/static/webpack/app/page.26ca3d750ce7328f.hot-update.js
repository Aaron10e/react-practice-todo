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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_generateID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/generateID */ \"(app-client)/./app/api/generateID.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page.module.css */ \"(app-client)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_TodoStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/TodoStore */ \"(app-client)/./app/store/TodoStore.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [goals, setGoals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [shaking, setShaking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { state , dispatch  } = (0,_store_TodoStore__WEBPACK_IMPORTED_MODULE_4__.useTodoStore)();\n    const handleAddGoal = (event)=>{\n        if (input.length < 1) {\n            setShaking(true);\n            setTimeout(()=>{\n                setShaking(false);\n            }, 500);\n            return;\n        }\n        if (event.type === \"click\" || event.keyCode === 13) {\n            const newTodo = {\n                description: input,\n                id: (0,_api_generateID__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                isDone: false\n            };\n            dispatch({\n                type: \"ADD_TODO\",\n                payload: newTodo\n            });\n            //setGoals([...goals, newGoal]);\n            setInput(\"\");\n        }\n    };\n    const handleUpdateTodo = (updatedTodo)=>{\n        dispatch({\n            type: \"UPDATE_TODO\",\n            payload: updatedTodo\n        });\n    };\n    const handleRemoveGoal = (id)=>{\n        // setGoals((currentGoals) => {\n        //   return currentGoals.filter((goal) => goal.id !== id);\n        // });\n        dispatch({\n            type: \"DELETE_TODO\",\n            payload: id\n        });\n    };\n    const handleInputChange = (event)=>{\n        setInput(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"todo-next:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().code),\n                                style: {\n                                    maxWidth: \"20vw\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"welcome\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" to the to-do list app. with some simple HMTL + CSS + TS we can be begin to create interactive web pages.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"reminders:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined),\n                            state.todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            todo.description,\n                                            \" \",\n                                            todo.isDone ? \"✓\" : \"✗\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().cancel),\n                                                onClick: ()=>handleRemoveGoal(todo.id),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    alt: \"remove todo item\",\n                                                    width: 12,\n                                                    height: 12,\n                                                    src: \"/close.svg\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, todo.id, false, {\n                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: shaking ? \"shake\" : \"\",\n                                value: input,\n                                onChange: handleInputChange,\n                                onKeyUp: handleAddGoal,\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                onClick: handleAddGoal,\n                                children: \"Add to list\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"1cwWae4fTA9p5hSyCWSD0xsIJ9c=\", false, function() {\n    return [\n        _store_TodoStore__WEBPACK_IMPORTED_MODULE_4__.useTodoStore\n    ];\n});\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNEO0FBQ1o7QUFDUztBQUVVO0FBRTNDLE1BQU1NLFdBQWUsSUFBTTs7SUFDaEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFhLEVBQUU7SUFDakQsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sRUFBRVksTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR1QsOERBQVlBO0lBRXhDLE1BQU1VLGdCQUFnQixDQUNwQkMsUUFJRztRQUNILElBQUlQLE1BQU1RLE1BQU0sR0FBRyxHQUFHO1lBQ3BCTCxXQUFXLElBQUk7WUFDZk0sV0FBVyxJQUFNO2dCQUNmTixXQUFXLEtBQUs7WUFDbEIsR0FBRztZQUVIO1FBQ0YsQ0FBQztRQUNELElBQUlJLE1BQU1HLElBQUksS0FBSyxXQUFXSCxNQUFNSSxPQUFPLEtBQUssSUFBSTtZQUNsRCxNQUFNQyxVQUFVO2dCQUFFQyxhQUFhYjtnQkFBT2MsSUFBSXJCLDJEQUFVQTtnQkFBSXNCLFFBQVEsS0FBSztZQUFDO1lBQ3RFVixTQUFTO2dCQUFFSyxNQUFNO2dCQUFZTSxTQUFTSjtZQUFRO1lBQzlDLGdDQUFnQztZQUNoQ1gsU0FBUztRQUNYLENBQUM7SUFDSDtJQUVBLE1BQU1nQixtQkFBbUIsQ0FBQ0MsY0FBMEI7UUFDbERiLFNBQVM7WUFBRUssTUFBTTtZQUFlTSxTQUFTRTtRQUFZO0lBQ3ZEO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNMLEtBQVk7UUFDcEMsK0JBQStCO1FBQy9CLDBEQUEwRDtRQUMxRCxNQUFNO1FBQ05ULFNBQVM7WUFBRUssTUFBTTtZQUFlTSxTQUFTRjtRQUFHO0lBQzlDO0lBRUEsTUFBTU0sb0JBQW9CLENBQUNiLFFBRXJCO1FBQ0pOLFNBQVNNLE1BQU1jLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBS0MsV0FBVzlCLDhEQUFXO3NCQUMxQiw0RUFBQzRCO2dCQUFJRSxXQUFXOUIscUVBQWtCOztrQ0FDaEMsOERBQUM0Qjt3QkFBSUUsV0FBVzlCLDhEQUFXOzswQ0FDekIsOERBQUM0QjswQ0FDQyw0RUFBQ0k7OENBQUs7Ozs7Ozs7Ozs7OzBDQUVSLDhEQUFDQzs7Ozs7MENBQ0QsOERBQUNMO2dDQUFJRSxXQUFXOUIsOERBQVc7Z0NBQUVtQyxPQUFPO29DQUFFQyxVQUFVO2dDQUFPOztrREFDckQsOERBQUNDO2tEQUFPOzs7Ozs7b0NBQWdCOzs7Ozs7Ozs7Ozs7O2tDQUk1Qiw4REFBQ1Q7d0JBQUlFLFdBQVc5Qiw4REFBVzs7MENBQ3pCLDhEQUFDZ0M7MENBQUs7Ozs7OzswQ0FDTiw4REFBQ0M7Ozs7OzRCQUNBeEIsTUFBTTZCLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN0Qiw4REFBQ2I7OENBQ0MsNEVBQUNjOzs0Q0FDRUYsS0FBS3RCLFdBQVc7NENBQUM7NENBQUVzQixLQUFLcEIsTUFBTSxHQUFHLE1BQU0sR0FBRzswREFDM0MsOERBQUNRO2dEQUNDRSxXQUFXOUIsZ0VBQWE7Z0RBQ3hCNEMsU0FBUyxJQUFNcEIsaUJBQWlCZ0IsS0FBS3JCLEVBQUU7MERBRXZDLDRFQUFDcEIsbURBQUtBO29EQUNKOEMsS0FBSTtvREFDSkMsT0FBTztvREFDUEMsUUFBUTtvREFDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBWEZSLEtBQUtyQixFQUFFOzs7OzswQ0FpQm5CLDhEQUFDZDtnQ0FDQ2MsSUFBSVosVUFBVSxVQUFVLEVBQUU7Z0NBQzFCb0IsT0FBT3RCO2dDQUNQNEMsVUFBVXhCO2dDQUNWeUIsU0FBU3ZDO2dDQUNUSSxNQUFLOzs7Ozs7MENBRVAsOERBQUNhO2dDQUFJRSxXQUFXOUIsZ0VBQWE7Z0NBQUU0QyxTQUFTakM7MENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkUsRUFBRTtHQS9GV1Q7O1FBSWlCRCwwREFBWUE7OztLQUo3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzU3YjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZW5lcmF0ZUlEIGZyb20gJy4uL2FwaS9nZW5lcmF0ZUlEJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IFRvZG9JdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8taXRlbSc7XG5pbXBvcnQgeyB1c2VUb2RvU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9Ub2RvU3RvcmUnO1xuXG5leHBvcnQgY29uc3QgVG9kb0xpc3Q6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbZ29hbHMsIHNldEdvYWxzXSA9IHVzZVN0YXRlPFRvZG9JdGVtW10+KFtdKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaGFraW5nLCBzZXRTaGFraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZVRvZG9TdG9yZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZEdvYWwgPSAoXG4gICAgZXZlbnQ6XG4gICAgICB8IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PlxuICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB8IGFueVxuICApID0+IHtcbiAgICBpZiAoaW5wdXQubGVuZ3RoIDwgMSkge1xuICAgICAgc2V0U2hha2luZyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaGFraW5nKGZhbHNlKTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSB7IGRlc2NyaXB0aW9uOiBpbnB1dCwgaWQ6IGdlbmVyYXRlSUQoKSwgaXNEb25lOiBmYWxzZSB9O1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1RPRE8nLCBwYXlsb2FkOiBuZXdUb2RvIH0pO1xuICAgICAgLy9zZXRHb2FscyhbLi4uZ29hbHMsIG5ld0dvYWxdKTtcbiAgICAgIHNldElucHV0KCcnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlVG9kbyA9ICh1cGRhdGVkVG9kbzogVG9kb0l0ZW0pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfVE9ETycsIHBheWxvYWQ6IHVwZGF0ZWRUb2RvIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUdvYWwgPSAoaWQ6IGFueSkgPT4ge1xuICAgIC8vIHNldEdvYWxzKChjdXJyZW50R29hbHMpID0+IHtcbiAgICAvLyAgIHJldHVybiBjdXJyZW50R29hbHMuZmlsdGVyKChnb2FsKSA9PiBnb2FsLmlkICE9PSBpZCk7XG4gICAgLy8gfSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX1RPRE8nLCBwYXlsb2FkOiBpZCB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDoge1xuICAgIHRhcmdldDogeyB2YWx1ZTogUmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPiB9O1xuICB9KSA9PiB7XG4gICAgc2V0SW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4+dG9kby1uZXh0Ojwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9IHN0eWxlPXt7IG1heFdpZHRoOiAnMjB2dycgfX0+XG4gICAgICAgICAgICAgIDxzdHJvbmc+d2VsY29tZTwvc3Ryb25nPiB0byB0aGUgdG8tZG8gbGlzdCBhcHAuIHdpdGggc29tZSBzaW1wbGVcbiAgICAgICAgICAgICAgSE1UTCArIENTUyArIFRTIHdlIGNhbiBiZSBiZWdpbiB0byBjcmVhdGUgaW50ZXJhY3RpdmUgd2ViIHBhZ2VzLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxzcGFuPnJlbWluZGVyczo8L3NwYW4+XG4gICAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICAgIHtzdGF0ZS50b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICB7dG9kby5kZXNjcmlwdGlvbn0ge3RvZG8uaXNEb25lID8gJ+KckycgOiAn4pyXJ31cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVHb2FsKHRvZG8uaWQpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJyZW1vdmUgdG9kbyBpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTJ9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvY2xvc2Uuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9e3NoYWtpbmcgPyAnc2hha2UnIDogJyd9XG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICBvbktleVVwPXtoYW5kbGVBZGRHb2FsfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUFkZEdvYWx9PlxuICAgICAgICAgICAgICBBZGQgdG8gbGlzdFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImdlbmVyYXRlSUQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVRvZG9TdG9yZSIsIlRvZG9MaXN0IiwiZ29hbHMiLCJzZXRHb2FscyIsImlucHV0Iiwic2V0SW5wdXQiLCJzaGFraW5nIiwic2V0U2hha2luZyIsInN0YXRlIiwiZGlzcGF0Y2giLCJoYW5kbGVBZGRHb2FsIiwiZXZlbnQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwidHlwZSIsImtleUNvZGUiLCJuZXdUb2RvIiwiZGVzY3JpcHRpb24iLCJpZCIsImlzRG9uZSIsInBheWxvYWQiLCJoYW5kbGVVcGRhdGVUb2RvIiwidXBkYXRlZFRvZG8iLCJoYW5kbGVSZW1vdmVHb2FsIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJjYXJkIiwic3BhbiIsImhyIiwiY29kZSIsInN0eWxlIiwibWF4V2lkdGgiLCJzdHJvbmciLCJ0b2RvcyIsIm1hcCIsInRvZG8iLCJpbmRleCIsImxpIiwiY2FuY2VsIiwib25DbGljayIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwib25DaGFuZ2UiLCJvbktleVVwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/TodoList.tsx\n"));

/***/ })

});