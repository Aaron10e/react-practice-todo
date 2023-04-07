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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": function() { return /* binding */ TodoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_generateID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/generateID */ \"(app-client)/./app/api/generateID.ts\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page.module.css */ \"(app-client)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_TodoStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/TodoStore */ \"(app-client)/./app/store/TodoStore.tsx\");\n/* harmony import */ var _CloseIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CloseIcon */ \"(app-client)/./app/components/CloseIcon.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TodoList = ()=>{\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [shaking, setShaking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { state , dispatch  } = (0,_store_TodoStore__WEBPACK_IMPORTED_MODULE_3__.useTodoStore)();\n    const handleAddGoal = (event)=>{\n        if (input.length < 1) {\n            setShaking(true);\n            setTimeout(()=>{\n                setShaking(false);\n            }, 500);\n            return;\n        }\n        if (event.type === \"click\" || event.keyCode === 13) {\n            const newTodo = {\n                description: input,\n                id: (0,_api_generateID__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n                isDone: false\n            };\n            dispatch({\n                type: \"ADD_TODO\",\n                payload: newTodo\n            });\n            setInput(\"\");\n        }\n    };\n    const handleUpdateTodo = (updatedTodo)=>{\n        dispatch({\n            type: \"UPDATE_TODO\",\n            payload: updatedTodo\n        });\n    };\n    const handleRemoveGoal = (id)=>{\n        dispatch({\n            type: \"DELETE_TODO\",\n            payload: id\n        });\n    };\n    const handleInputChange = (event)=>{\n        setInput(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"todo-next:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().code),\n                                style: {\n                                    maxWidth: \"20vw\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"welcome\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    \" to the to-do list app. with some simple HMTL + CSS + TS we can be begin to create interactive web pages.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"reminders:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            state.todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().itemButtons),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: [\n                                                        todo.description,\n                                                        \" \",\n                                                        todo.isDone ? \"✓\" : \"\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().itemButtons),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().cancel),\n                                                            onClick: ()=>handleRemoveGoal(todo.id),\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CloseIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                                lineNumber: 75,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 23\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            onClick: ()=>handleUpdateTodo({\n                                                                    ...todo,\n                                                                    isDone: !todo.isDone\n                                                                }),\n                                                            children: \"Toggle Status\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, todo.id, false, {\n                                    fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: shaking ? \"shake\" : \"\",\n                                value: input,\n                                onChange: handleInputChange,\n                                onKeyUp: handleAddGoal,\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                                onClick: handleAddGoal,\n                                children: \"Add to list\"\n                            }, void 0, false, {\n                                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/aarontenney/Development/React_Training/todo-next/src/app/components/TodoList.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"5wMIJyZtkGr/Cm/IOoJmvr0yyLY=\", false, function() {\n    return [\n        _store_TodoStore__WEBPACK_IMPORTED_MODULE_3__.useTodoStore\n    ];\n});\n_c = TodoList;\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0Q7QUFDSDtBQUVVO0FBQ2Q7QUFFN0IsTUFBTU0sV0FBZSxJQUFNOztJQUNoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxFQUFFVSxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHUiw4REFBWUE7SUFFeEMsTUFBTVMsZ0JBQWdCLENBQ3BCQyxRQUlHO1FBQ0gsSUFBSVAsTUFBTVEsTUFBTSxHQUFHLEdBQUc7WUFDcEJMLFdBQVcsSUFBSTtZQUNmTSxXQUFXLElBQU07Z0JBQ2ZOLFdBQVcsS0FBSztZQUNsQixHQUFHO1lBRUg7UUFDRixDQUFDO1FBQ0QsSUFBSUksTUFBTUcsSUFBSSxLQUFLLFdBQVdILE1BQU1JLE9BQU8sS0FBSyxJQUFJO1lBQ2xELE1BQU1DLFVBQVU7Z0JBQUVDLGFBQWFiO2dCQUFPYyxJQUFJbkIsMkRBQVVBO2dCQUFJb0IsUUFBUSxLQUFLO1lBQUM7WUFDdEVWLFNBQVM7Z0JBQUVLLE1BQU07Z0JBQVlNLFNBQVNKO1lBQVE7WUFDOUNYLFNBQVM7UUFDWCxDQUFDO0lBQ0g7SUFFQSxNQUFNZ0IsbUJBQW1CLENBQUNDLGNBQTBCO1FBQ2xEYixTQUFTO1lBQUVLLE1BQU07WUFBZU0sU0FBU0U7UUFBWTtJQUN2RDtJQUVBLE1BQU1DLG1CQUFtQixDQUFDTCxLQUFZO1FBQ3BDVCxTQUFTO1lBQUVLLE1BQU07WUFBZU0sU0FBU0Y7UUFBRztJQUM5QztJQUVBLE1BQU1NLG9CQUFvQixDQUFDYixRQUVyQjtRQUNKTixTQUFTTSxNQUFNYyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO1lBQUtDLFdBQVc3Qiw4REFBVztzQkFDMUIsNEVBQUMyQjtnQkFBSUUsV0FBVzdCLHFFQUFrQjs7a0NBQ2hDLDhEQUFDMkI7d0JBQUlFLFdBQVc3Qiw4REFBVzs7MENBQ3pCLDhEQUFDMkI7MENBQ0MsNEVBQUNJOzhDQUFLOzs7Ozs7Ozs7OzswQ0FFUiw4REFBQ0M7Ozs7OzBDQUNELDhEQUFDTDtnQ0FBSUUsV0FBVzdCLDhEQUFXO2dDQUFFa0MsT0FBTztvQ0FBRUMsVUFBVTtnQ0FBTzs7a0RBQ3JELDhEQUFDQztrREFBTzs7Ozs7O29DQUFnQjs7Ozs7Ozs7Ozs7OztrQ0FJNUIsOERBQUNUO3dCQUFJRSxXQUFXN0IsOERBQVc7OzBDQUN6Qiw4REFBQytCOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNDOzs7Ozs0QkFDQXhCLE1BQU02QixLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDaEIsOERBQUNaOzhDQUNDLDRFQUFDYTtrREFDQyw0RUFBQ2I7NENBQUlFLFdBQVc3QixxRUFBa0I7OzhEQUNoQyw4REFBQytCOzt3REFBTVEsS0FBS3RCLFdBQVc7d0RBQUM7d0RBQUVzQixLQUFLcEIsTUFBTSxHQUFHLE1BQU0sRUFBRTs7Ozs7Ozs4REFDaEQsOERBQUNRO29EQUFJRSxXQUFXN0IscUVBQWtCOztzRUFDaEMsOERBQUMyQjs0REFDQ0UsV0FBVzdCLGdFQUFhOzREQUN4QjJDLFNBQVMsSUFBTXBCLGlCQUFpQmdCLEtBQUtyQixFQUFFO3NFQUV6Qyw0RUFBQ2hCLGtEQUFTQTs7Ozs7Ozs7OztzRUFFViw4REFBQzBDOzREQUFPRCxTQUFTLElBQU10QixpQkFBaUI7b0VBQUUsR0FBR2tCLElBQUk7b0VBQUVwQixRQUFRLENBQUNvQixLQUFLcEIsTUFBTTtnRUFBQztzRUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBWDFFb0IsS0FBS3JCLEVBQUU7Ozs7OzBDQW1CbkIsOERBQUNkO2dDQUNDYyxJQUFJWixVQUFVLFVBQVUsRUFBRTtnQ0FDMUJvQixPQUFPdEI7Z0NBQ1B5QyxVQUFVckI7Z0NBQ1ZzQixTQUFTcEM7Z0NBQ1RJLE1BQUs7Ozs7OzswQ0FFUCw4REFBQ2E7Z0NBQUlFLFdBQVc3QixnRUFBYTtnQ0FBRTJDLFNBQVNqQzswQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRSxFQUFFO0dBNUZXUDs7UUFHaUJGLDBEQUFZQTs7O0tBSDdCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/NTdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdlbmVyYXRlSUQgZnJvbSAnLi4vYXBpL2dlbmVyYXRlSUQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wYWdlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgVG9kb0l0ZW0gfSBmcm9tICcuLi9tb2RlbHMvdG9kby1pdGVtJztcbmltcG9ydCB7IHVzZVRvZG9TdG9yZSB9IGZyb20gJy4uL3N0b3JlL1RvZG9TdG9yZSc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4vQ2xvc2VJY29uJztcblxuZXhwb3J0IGNvbnN0IFRvZG9MaXN0OiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaGFraW5nLCBzZXRTaGFraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZVRvZG9TdG9yZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZEdvYWwgPSAoXG4gICAgZXZlbnQ6XG4gICAgICB8IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PlxuICAgICAgfCBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICAgICB8IGFueVxuICApID0+IHtcbiAgICBpZiAoaW5wdXQubGVuZ3RoIDwgMSkge1xuICAgICAgc2V0U2hha2luZyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaGFraW5nKGZhbHNlKTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGNvbnN0IG5ld1RvZG8gPSB7IGRlc2NyaXB0aW9uOiBpbnB1dCwgaWQ6IGdlbmVyYXRlSUQoKSwgaXNEb25lOiBmYWxzZSB9O1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX1RPRE8nLCBwYXlsb2FkOiBuZXdUb2RvIH0pO1xuICAgICAgc2V0SW5wdXQoJycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGVUb2RvID0gKHVwZGF0ZWRUb2RvOiBUb2RvSXRlbSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQREFURV9UT0RPJywgcGF5bG9hZDogdXBkYXRlZFRvZG8gfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlR29hbCA9IChpZDogYW55KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX1RPRE8nLCBwYXlsb2FkOiBpZCB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDoge1xuICAgIHRhcmdldDogeyB2YWx1ZTogUmVhY3QuU2V0U3RhdGVBY3Rpb248c3RyaW5nPiB9O1xuICB9KSA9PiB7XG4gICAgc2V0SW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4+dG9kby1uZXh0Ojwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9IHN0eWxlPXt7IG1heFdpZHRoOiAnMjB2dycgfX0+XG4gICAgICAgICAgICAgIDxzdHJvbmc+d2VsY29tZTwvc3Ryb25nPiB0byB0aGUgdG8tZG8gbGlzdCBhcHAuIHdpdGggc29tZSBzaW1wbGVcbiAgICAgICAgICAgICAgSE1UTCArIENTUyArIFRTIHdlIGNhbiBiZSBiZWdpbiB0byBjcmVhdGUgaW50ZXJhY3RpdmUgd2ViIHBhZ2VzLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxzcGFuPnJlbWluZGVyczo8L3NwYW4+XG4gICAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICAgIHtzdGF0ZS50b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG9kby5kZXNjcmlwdGlvbn0ge3RvZG8uaXNEb25lID8gJ+KckycgOiAnJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUdvYWwodG9kby5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwZGF0ZVRvZG8oeyAuLi50b2RvLCBpc0RvbmU6ICF0b2RvLmlzRG9uZSB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2dnbGUgU3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD17c2hha2luZyA/ICdzaGFrZScgOiAnJ31cbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uS2V5VXA9e2hhbmRsZUFkZEdvYWx9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17aGFuZGxlQWRkR29hbH0+XG4gICAgICAgICAgICAgIEFkZCB0byBsaXN0XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2VuZXJhdGVJRCIsInN0eWxlcyIsInVzZVRvZG9TdG9yZSIsIkNsb3NlSWNvbiIsIlRvZG9MaXN0IiwiaW5wdXQiLCJzZXRJbnB1dCIsInNoYWtpbmciLCJzZXRTaGFraW5nIiwic3RhdGUiLCJkaXNwYXRjaCIsImhhbmRsZUFkZEdvYWwiLCJldmVudCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJ0eXBlIiwia2V5Q29kZSIsIm5ld1RvZG8iLCJkZXNjcmlwdGlvbiIsImlkIiwiaXNEb25lIiwicGF5bG9hZCIsImhhbmRsZVVwZGF0ZVRvZG8iLCJ1cGRhdGVkVG9kbyIsImhhbmRsZVJlbW92ZUdvYWwiLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImNhcmQiLCJzcGFuIiwiaHIiLCJjb2RlIiwic3R5bGUiLCJtYXhXaWR0aCIsInN0cm9uZyIsInRvZG9zIiwibWFwIiwidG9kbyIsImxpIiwiaXRlbUJ1dHRvbnMiLCJjYW5jZWwiLCJvbkNsaWNrIiwiYnV0dG9uIiwib25DaGFuZ2UiLCJvbktleVVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/TodoList.tsx\n"));

/***/ })

});