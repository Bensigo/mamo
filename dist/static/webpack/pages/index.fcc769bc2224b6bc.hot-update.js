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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FilterCard\": function() { return /* binding */ FilterCard; },\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card_card_componet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card/card.componet */ \"./screens/dashboard/components/card/card.componet.tsx\");\n/* harmony import */ var _components_nav_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/nav-bar.component */ \"./screens/dashboard/components/nav/nav-bar.component.tsx\");\n/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/table/table.component */ \"./screens/dashboard/components/table/table.component.tsx\");\n/* harmony import */ var _utils_mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/mock-data */ \"./screens/dashboard/utils/mock-data.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), term = ref1[0], setTerm = ref1[1];\n    var handleSearch = function(e) {\n        console.log({\n            e: e\n        });\n        var text = e.target.value;\n        filterByCustomer(text);\n        setTerm(text);\n    };\n    var filterByStatus = function(status) {\n        return data.filter(function(item) {\n            status.includes(item.status);\n        });\n    };\n    var filterByCustomer = function(text) {\n        if (text.length === 0) {\n            setData(_utils_mock_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n        }\n        if (text.length > 2) {\n            var currentData = data.filter(function(item) {\n                return item.customer.includes(text);\n            });\n            setData(currentData);\n        }\n    };\n    var filterByAmount = function(from, to) {\n        return _utils_mock_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"].filter(function(item) {\n            return item.amount <= to && item.amount >= from;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setData(_utils_mock_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_card_componet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleSearch,\n                    placeholder: \"Search for payments\"\n                }, void 0, false, {\n                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.Table, {\n                    data: data\n                }, void 0, false, {\n                    fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n            lineNumber: 49,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n};\n_s(Dashboard, \"Yf9O8sK3sA2egPcwuqrOEDOAPOs=\");\n_c = Dashboard;\nfunction FilterCard() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/cryptoplug/programming/mamopay/src/screens/dashboard/index.tsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_c1 = FilterCard;\nvar _c, _c1;\n$RefreshReg$(_c, \"Dashboard\");\n$RefreshReg$(_c1, \"FilterCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JlZW5zL2Rhc2hib2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFrRDtBQUdBO0FBQ0s7QUFDRztBQUNOO0FBR3JDLFNBQVNPLFNBQVMsR0FBRzs7SUFDaEMsSUFBd0JMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JNLElBQUksR0FBYU4sR0FBWSxHQUF6QixFQUFFTyxPQUFPLEdBQUlQLEdBQVksR0FBaEI7SUFDcEIsSUFBeUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBOUJRLElBQUksR0FBY1IsSUFBWSxHQUExQixFQUFFUyxPQUFPLEdBQUtULElBQVksR0FBakI7SUFFcEIsSUFBTVUsWUFBWSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUM7WUFBRUYsQ0FBQyxFQUFEQSxDQUFDO1NBQUUsQ0FBQztRQUNsQixJQUFNRyxJQUFJLEdBQUdILENBQUMsQ0FBQ0ksTUFBTSxDQUFDQyxLQUFLO1FBQzNCQyxnQkFBZ0IsQ0FBQ0gsSUFBSSxDQUFDO1FBQ3RCTCxPQUFPLENBQUNLLElBQUksQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBTUksY0FBYyxHQUFHLFNBQUNDLE1BQWdCLEVBQUs7UUFDekMsT0FBT2IsSUFBSSxDQUFDYyxNQUFNLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1lBQ3pCRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDRixNQUFNLENBQUM7UUFDaEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQU1GLGdCQUFnQixHQUFHLFNBQUNILElBQVksRUFBSztRQUN2QyxJQUFJQSxJQUFJLENBQUNTLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDbEJoQixPQUFPLENBQUNILHdEQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsSUFBSVUsSUFBSSxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLElBQU1DLFdBQVcsR0FBR2xCLElBQUksQ0FBQ2MsTUFBTSxDQUFDLFNBQUNDLElBQUk7dUJBQU1BLElBQUksQ0FBQ0ksUUFBUSxDQUFDSCxRQUFRLENBQUNSLElBQUksQ0FBQzthQUFDLENBQUM7WUFDekVQLE9BQU8sQ0FBQ2lCLFdBQVcsQ0FBQztRQUV4QixDQUFDO0lBQ0wsQ0FBQztJQUVELElBQU1FLGNBQWMsR0FBRyxTQUFDQyxJQUFJLEVBQUVDLEVBQUUsRUFBSztRQUNqQyxPQUFPeEIsK0RBQWUsQ0FBQyxTQUFDaUIsSUFBSSxFQUFLO1lBQzlCLE9BQVFBLElBQUksQ0FBQ1EsTUFBTSxJQUFJRCxFQUFFLElBQUlQLElBQUksQ0FBQ1EsTUFBTSxJQUFJRixJQUFJO1FBQ25ELENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRDVCLGdEQUFTLENBQUMsV0FBTTtRQUNaUSxPQUFPLENBQUNILHdEQUFRLENBQUM7SUFDckIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLHFCQUNJLDhEQUFDRix5RUFBTTtrQkFDTiw0RUFBQ0Qsc0VBQUk7OzhCQUNGLDhEQUFDNkIsT0FBSztvQkFBQ0MsUUFBUSxFQUFFckIsWUFBWTtvQkFBRXNCLFdBQVcsRUFBQyxxQkFBcUI7Ozs7O3dCQUFHOzhCQUNuRSw4REFBQzdCLG9FQUFLO29CQUFFRyxJQUFJLEVBQUVBLElBQUk7Ozs7O3dCQUFJOzs7Ozs7Z0JBQ2xCOzs7OztZQUNBLENBQ1g7QUFDTCxDQUFDO0dBN0N1QkQsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBZ0QxQixTQUFTNEIsVUFBVSxHQUFHO0lBRXpCLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQSxLQUFHOzs7O2dCQUVFOzs7OztZQUNKLENBQ1Q7QUFDTCxDQUFDO0FBVGVELE1BQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2NyZWVucy9kYXNoYm9hcmQvaW5kZXgudHN4PzEwZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZXQnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXYvbmF2LWJhci5jb21wb25lbnQnXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQnXG5pbXBvcnQgbW9ja0RhdGEsIHsgU3RhdHVzIH0gZnJvbSAnLi91dGlscy9tb2NrLWRhdGEnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFt0ZXJtLCBzZXRUZXJtIF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgZSB9KVxuICAgICAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgZmlsdGVyQnlDdXN0b21lcih0ZXh0KVxuICAgICAgICBzZXRUZXJtKHRleHQpXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyQnlTdGF0dXMgPSAoc3RhdHVzOiBTdGF0dXNbXSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHN0YXR1cy5pbmNsdWRlcyhpdGVtLnN0YXR1cylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJCeUN1c3RvbWVyID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgc2V0RGF0YShtb2NrRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gKGl0ZW0uY3VzdG9tZXIuaW5jbHVkZXModGV4dCkpKVxuICAgICAgICAgICAgc2V0RGF0YShjdXJyZW50RGF0YSlcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJCeUFtb3VudCA9IChmcm9tLCB0bykgPT4ge1xuICAgICAgICByZXR1cm4gbW9ja0RhdGEuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgIHJldHVybiAgaXRlbS5hbW91bnQgPD0gdG8gJiYgaXRlbS5hbW91bnQgPj0gZnJvbVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldERhdGEobW9ja0RhdGEpXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE5hdkJhcj5cbiAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2h9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwYXltZW50c1wiIC8+XG4gICAgICAgICAgICA8VGFibGUgIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICA8L0NhcmQ+XG4gICAgICAgPC9OYXZCYXI+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBGaWx0ZXJDYXJkKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiTmF2QmFyIiwiVGFibGUiLCJtb2NrRGF0YSIsIkRhc2hib2FyZCIsImRhdGEiLCJzZXREYXRhIiwidGVybSIsInNldFRlcm0iLCJoYW5kbGVTZWFyY2giLCJlIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbHRlckJ5Q3VzdG9tZXIiLCJmaWx0ZXJCeVN0YXR1cyIsInN0YXR1cyIsImZpbHRlciIsIml0ZW0iLCJpbmNsdWRlcyIsImxlbmd0aCIsImN1cnJlbnREYXRhIiwiY3VzdG9tZXIiLCJmaWx0ZXJCeUFtb3VudCIsImZyb20iLCJ0byIsImFtb3VudCIsImlucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsIkZpbHRlckNhcmQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./screens/dashboard/index.tsx\n"));

/***/ })

});