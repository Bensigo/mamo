"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./screens/dashboard/index.tsx":
/*!*************************************!*\
  !*** ./screens/dashboard/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FilterCard\": function() { return /* binding */ FilterCard; },\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"../node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"../node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _components_card_card_componet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card/card.componet */ \"./screens/dashboard/components/card/card.componet.tsx\");\n/* harmony import */ var _components_nav_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/nav-bar.component */ \"./screens/dashboard/components/nav/nav-bar.component.tsx\");\n/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/table/table.component */ \"./screens/dashboard/components/table/table.component.tsx\");\n/* harmony import */ var _utils_mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/mock-data */ \"./screens/dashboard/utils/mock-data.ts\");\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), term = ref1[0], setTerm = ref1[1];\n    var handleSearch = function(e) {\n        console.log({\n            e: e\n        });\n        var text = e.target.value;\n        filterByCustomer(text);\n        setTerm(text);\n    };\n    var filterByStatus = function(status) {\n        console.log({\n            status: status\n        });\n        return data.filter(function(item) {\n            return status.includes(item.status);\n        });\n    };\n    var filterByCustomer = function(text) {\n        if (text.length === 0) {\n            setData(_utils_mock_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n        }\n        if (text.length > 2) {\n            var currentData = data.filter(function(item) {\n                return item.customer.includes(text);\n            });\n            setData(currentData);\n        }\n    };\n    var filterByAmount = function(from, to) {\n        return _utils_mock_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"].filter(function(item) {\n            return item.amount <= to && item.amount >= from;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setData(_utils_mock_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card_componet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleSearch,\n                    placeholder: \"Search for payments\"\n                }, void 0, false, {\n                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FilterCard, {\n                    filterByAmount: filterByAmount,\n                    filterByCustomer: filterByCustomer,\n                    filterByStatus: filterByStatus\n                }, void 0, false, {\n                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                    data: data\n                }, void 0, false, {\n                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n            lineNumber: 50,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n};\n_s(Dashboard, \"Yf9O8sK3sA2egPcwuqrOEDOAPOs=\");\n_c = Dashboard;\nfunction FilterCard(param) {\n    var filterByAmount = param.filterByAmount, filterByCustomer = param.filterByCustomer, filterByStatus = param.filterByStatus;\n    var _this = this;\n    _s1();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, watch = ref.watch, errors = ref.formState.errors;\n    var onSubmit = function(data) {\n        console.log({\n            data: data\n        });\n        if (data.status.length) {\n            filterByStatus(data.status);\n        }\n        if (data.name) {\n            filterByCustomer(data.name);\n        }\n        if (data.min || data.max) {\n            filterByAmount(data.min, data.max);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Filter\"\n            }, void 0, false, {\n                fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit(onSubmit),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n                            placeholder: \"Filter by customer\"\n                        }, register(\"name\")), void 0, false, {\n                            fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                    children: \"Status\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, this),\n                                Object.keys(_utils_mock_data__WEBPACK_IMPORTED_MODULE_5__.Status).map(function(stat, i) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n                                                type: \"checkbox\",\n                                                value: stat\n                                            }, register(\"status\")), void 0, false, {\n                                                fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 29\n                                            }, _this),\n                                            stat\n                                        ]\n                                    }, i, true, {\n                                        fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 30\n                                    }, _this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n                                    type: \"number\",\n                                    defaultValue: 0,\n                                    placeholder: \"from\"\n                                }, register(\"min\")), void 0, false, {\n                                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n                                    type: \"number\",\n                                    defaultValue: 0,\n                                    placeholder: \"to\"\n                                }, register(\"max\")), void 0, false, {\n                                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Apply\"\n                        }, void 0, false, {\n                            fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, this);\n}\n_s1(FilterCard, \"77WzwRY2adCYNFA0cLnNubMUW6o=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c1 = FilterCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Dashboard\");\n$RefreshReg$(_c1, \"FilterCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUMsTUFBTSxDQUFDOzs7O2dDQUFJO3NDQUNoRSw4REFBQ1ksVUFBUTs7OENBQ0wsOERBQUNDLFFBQU07OENBQUMsUUFBTTs7Ozs7d0NBQVM7Z0NBQ3RCQyxNQUFNLENBQUNDLElBQUksQ0FBQzdDLG9EQUFNLENBQUMsQ0FBQzhDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUM7eURBRTVCLDhEQUFDQyxPQUFLOzswREFDUCw4REFBQ3ZCLE9BQUs7Z0RBQUV3QixJQUFJLEVBQUUsVUFBVTtnREFBRXRDLEtBQUssRUFBRW1DLElBQUk7K0NBQU1qQixRQUFRLENBQUMsUUFBUSxDQUFDOzs7O3FEQUFJOzRDQUM5RGlCLElBQUk7O3VDQUZPQyxDQUFDOzs7OzZDQUdUO2lDQUFDLENBQ1Y7Ozs7OztnQ0FDTTtzQ0FDWCw4REFBQ04sVUFBUTs7OENBQ0wsOERBQUNoQixPQUFLO29DQUFFd0IsSUFBSSxFQUFFLFFBQVE7b0NBQUVDLFlBQVksRUFBRSxDQUFDO29DQUFFdkIsV0FBVyxFQUFDLE1BQU07bUNBQUtFLFFBQVEsQ0FBQyxLQUFLLENBQUM7Ozs7d0NBQUs7OENBQ3BGLDhEQUFDSixPQUFLO29DQUFFd0IsSUFBSSxFQUFFLFFBQVE7b0NBQUVDLFlBQVksRUFBRSxDQUFDO29DQUFFdkIsV0FBVyxFQUFDLElBQUk7bUNBQUtFLFFBQVEsQ0FBQyxLQUFLLENBQUM7Ozs7d0NBQUc7Ozs7OztnQ0FDekU7c0NBQ1gsOERBQUNzQixRQUFNOzRCQUFDRixJQUFJLEVBQUMsUUFBUTtzQ0FBQyxPQUFLOzs7OztnQ0FBUzs7Ozs7O3dCQUNqQzs7Ozs7b0JBQ0w7Ozs7OztZQUNKLENBQ1Q7QUFDTCxDQUFDO0lBekNlckIsVUFBVTs7UUFDMkNsQyxvREFBTzs7O0FBRDVEa0MsTUFBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zY3JlZW5zL2Rhc2hib2FyZC9pbmRleC50c3g/MTBlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuaW1wb3J0IENhcmQgZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25ldCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL25hdi9uYXYtYmFyLmNvbXBvbmVudCdcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudCdcbmltcG9ydCBtb2NrRGF0YSwgeyBTdGF0dXMgfSBmcm9tICcuL3V0aWxzL21vY2stZGF0YSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3Rlcm0sIHNldFRlcm0gXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coeyBlIH0pXG4gICAgICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgICAgICBmaWx0ZXJCeUN1c3RvbWVyKHRleHQpXG4gICAgICAgIHNldFRlcm0odGV4dClcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJCeVN0YXR1cyA9IChzdGF0dXM6IFN0YXR1c1tdKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgc3RhdHVzIH0pXG4gICAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cy5pbmNsdWRlcyhpdGVtLnN0YXR1cylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJCeUN1c3RvbWVyID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgc2V0RGF0YShtb2NrRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0uY3VzdG9tZXIuaW5jbHVkZXModGV4dCkpKVxuICAgICAgICAgICAgc2V0RGF0YShjdXJyZW50RGF0YSlcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJCeUFtb3VudCA9IChmcm9tLCB0bykgPT4ge1xuICAgICAgICByZXR1cm4gbW9ja0RhdGEuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgIHJldHVybiAgaXRlbS5hbW91bnQgPD0gdG8gJiYgaXRlbS5hbW91bnQgPj0gZnJvbVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldERhdGEobW9ja0RhdGEpXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5hdkJhcj5cbiAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwYXltZW50c1wiIC8+XG4gICAgICAgICAgICA8RmlsdGVyQ2FyZCBmaWx0ZXJCeUFtb3VudD17ZmlsdGVyQnlBbW91bnR9IGZpbHRlckJ5Q3VzdG9tZXI9e2ZpbHRlckJ5Q3VzdG9tZXJ9IGZpbHRlckJ5U3RhdHVzPXtmaWx0ZXJCeVN0YXR1c30gLz5cbiAgICAgICAgICAgIDxUYWJsZSAgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgIDwvQ2FyZD5cbiAgICAgICA8L05hdkJhcj5cbiAgICApXG59XG5cbnR5cGUgRmlsdGVyRm9ybSA9IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHN0YXR1cz86IFN0YXR1c1tdO1xuICAgIG1pbj86IG51bWJlcjsgXG4gICAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRmlsdGVyQ2FyZCh7IGZpbHRlckJ5QW1vdW50LCBmaWx0ZXJCeUN1c3RvbWVyLCBmaWx0ZXJCeVN0YXR1cyB9KSB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtPEZpbHRlckZvcm0+KCk7XG4gICAgXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh7IGRhdGEgfSlcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzLmxlbmd0aCl7XG4gICAgICAgICAgICBmaWx0ZXJCeVN0YXR1cyhkYXRhLnN0YXR1cylcbiAgICAgICAgfVxuICAgICAgICBpZihkYXRhLm5hbWUpe1xuICAgICAgICAgICAgZmlsdGVyQnlDdXN0b21lcihkYXRhLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgaWYoZGF0YS5taW4gfHwgZGF0YS5tYXgpe1xuICAgICAgICAgICAgZmlsdGVyQnlBbW91bnQoZGF0YS5taW4sIGRhdGEubWF4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5GaWx0ZXI8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0nRmlsdGVyIGJ5IGN1c3RvbWVyJyB7Li4ucmVnaXN0ZXIoJ25hbWUnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5TdGF0dXM8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhTdGF0dXMpLm1hcCgoc3RhdCwgaSkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxsYWJlbCAga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9eydjaGVja2JveCd9IHZhbHVlPXtzdGF0fSB7Li4ucmVnaXN0ZXIoJ3N0YXR1cycpfSAvPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4pXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9eydudW1iZXInfSBkZWZhdWx0VmFsdWU9ezB9IHBsYWNlaG9sZGVyPSdmcm9tJyB7Li4ucmVnaXN0ZXIoJ21pbicpfSAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT17J251bWJlcid9IGRlZmF1bHRWYWx1ZT17MH0gcGxhY2Vob2xkZXI9J3RvJyB7Li4ucmVnaXN0ZXIoJ21heCcpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5BcHBseTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiQ2FyZCIsIk5hdkJhciIsIlRhYmxlIiwibW9ja0RhdGEiLCJTdGF0dXMiLCJEYXNoYm9hcmQiLCJkYXRhIiwic2V0RGF0YSIsInRlcm0iLCJzZXRUZXJtIiwiaGFuZGxlU2VhcmNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJCeUN1c3RvbWVyIiwiZmlsdGVyQnlTdGF0dXMiLCJzdGF0dXMiLCJmaWx0ZXIiLCJpdGVtIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJjdXJyZW50RGF0YSIsImN1c3RvbWVyIiwiZmlsdGVyQnlBbW91bnQiLCJmcm9tIiwidG8iLCJhbW91bnQiLCJpbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJGaWx0ZXJDYXJkIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ3YXRjaCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm9uU3VibWl0IiwibmFtZSIsIm1pbiIsIm1heCIsImRpdiIsImgxIiwiZm9ybSIsImZpZWxkc2V0IiwibGVnZW5kIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInN0YXQiLCJpIiwibGFiZWwiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./screens/dashboard/index.tsx\n"));

/***/ })

});