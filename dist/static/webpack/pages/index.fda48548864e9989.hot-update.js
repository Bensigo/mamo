/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!../node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./shared/components/layout/layout.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!../node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./shared/components/layout/layout.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* layout */\\n.layout_layout__bGeF7 {\\n  display: flex;\\n  width: 100%;\\n  min-height: 100vh;\\n}\\n\\n/* side bar */\\n.layout_trigger__TYCwH {\\n  z-index: 2;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 4em;\\n  background: #5252FF;\\n}\\n\\n.layout_nav__JoojI {\\n  position: fixed;\\n  top: 0;\\n  left: -15em;\\n  overflow: hidden;\\n  transition: all 0.3s ease-in;\\n  width: 15em;\\n  height: 100%;\\n  background: #474FF6;\\n  color: #FFFFFF;\\n}\\n.layout_nav__JoojI ul {\\n  position: absolute;\\n  top: 4em;\\n  left: 0;\\n  margin: 0;\\n  padding: 0;\\n  width: 15em;\\n}\\n.layout_nav__JoojI ul li {\\n  width: 100%;\\n}\\n.layout_nav__JoojI ul li a span {\\n  margin-right: 10px;\\n}\\n\\n.layout_trigger__TYCwH > i {\\n  display: inline-block;\\n  margin: 1.5em 0 0 1.5em;\\n  color: #5252FF;\\n}\\n\\n.layout_nav__JoojI:hover,\\n.layout_nav__JoojI:focus,\\n.layout_trigger__TYCwH:focus + .layout_nav__JoojI,\\n.layout_trigger__TYCwH:hover + .layout_nav__JoojI {\\n  left: 0;\\n}\\n\\n/*  sidebar content */\\n.layout_content__NAlix {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex: 1 1;\\n}\\n\\n@media screen and (max-width: 700px) {\\n  .layout_sidebar__eDzGT {\\n    width: 100%;\\n    height: auto;\\n    position: relative;\\n  }\\n  .layout_sidebar__eDzGT a {\\n    float: left;\\n  }\\n  div.layout_content__NAlix {\\n    margin-left: 0;\\n  }\\n}\\n@media screen and (max-width: 400px) {\\n  .layout_sidebar__eDzGT a {\\n    text-align: center;\\n    float: none;\\n  }\\n}\\n/**\\n start\\n*/\\n.layout_navlink__vBcwh {\\n  position: relative;\\n  display: inline-block;\\n  width: 100%;\\n  height: 4em;\\n}\\n.layout_navlink__vBcwh em {\\n  position: absolute;\\n  top: 50%;\\n  left: 4em;\\n  transform: translateY(-50%);\\n}\\n\\n.layout_navlink__vBcwh:hover {\\n  background: #5252Fd;\\n}\\n\\n.layout_active__6wHp1 {\\n  background: red;\\n}\\n\\n.layout_navlink__vBcwh > i {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  display: inline-block;\\n  width: 4em;\\n  height: 4em;\\n}\\n\\n.layout_navlink__vBcwh > i::before {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n/* Mobile First */\\n@media (min-width: 42em) {\\n  .layout_content__NAlix {\\n    margin-left: 4em;\\n  }\\n  /* Sidebar */\\n  .layout_trigger__TYCwH {\\n    width: 4em;\\n  }\\n  .layout_nav__JoojI {\\n    width: 4em;\\n    left: 0;\\n  }\\n  .layout_nav__JoojI:hover,\\n.layout_nav__JoojI:focus,\\n.layout_trigger__TYCwH:hover + .layout_nav__JoojI,\\n.layout_trigger__TYCwH:focus + .layout_nav__JoojI {\\n    width: 15em;\\n  }\\n}\\n@media (min-width: 68em) {\\n  .layout_content__NAlix {\\n    margin-left: 15em;\\n  }\\n  /* Sidebar */\\n  .layout_trigger__TYCwH {\\n    display: none;\\n  }\\n  .layout_nav__JoojI {\\n    width: 15em;\\n  }\\n  .layout_nav__JoojI ul {\\n    top: 1.3em;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://shared/components/layout/layout.module.scss\"],\"names\":[],\"mappings\":\"AAAA,WAAA;AACA;EACE,aAAA;EACA,WAAA;EACA,iBAAA;AACF;;AAEA,aAAA;AACA;EACE,UAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;AACF;;AAEA;EACE,eAAA;EACA,MAAA;EACA,WAAA;EACA,gBAAA;EACA,4BAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;AACF;AAAE;EACE,kBAAA;EACA,QAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;AAEJ;AADI;EACE,WAAA;AAGN;AAFM;EACE,kBAAA;AAIR;;AAGA;EACE,qBAAA;EACA,uBAAA;EACA,cAAA;AAAF;;AAIA;;;;EAIE,OAAA;AADF;;AAKA,qBAAA;AACE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AAFJ;;AAKE;EACE;IACE,WAAA;IACA,YAAA;IACA,kBAAA;EAFJ;EAIE;IAAY,WAAA;EADd;EAEE;IAAa,cAAA;EACf;AACF;AACE;EACE;IACE,kBAAA;IACA,WAAA;EACJ;AACF;AAEA;;CAAA;AAKA;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,WAAA;AAFF;AAIE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;AAFJ;;AAMA;EACE,mBAAA;AAHF;;AAMA;EACE,eAAA;AAHF;;AAMA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,qBAAA;EACA,UAAA;EACA,WAAA;AAHF;;AAMA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AAHF;;AAMA,iBAAA;AACA;EACE;IACG,gBAAA;EAHH;EAMA,YAAA;EACA;IACG,UAAA;EAJH;EAOA;IACG,UAAA;IACA,OAAA;EALH;EAQA;;;;IAIG,WAAA;EANH;AACF;AASA;EACE;IACG,iBAAA;EAPH;EAUA,YAAA;EACA;IACG,aAAA;EARH;EAWA;IACG,WAAA;EATH;EAYA;IACG,UAAA;EAVH;AACF\",\"sourcesContent\":[\"/* layout */\\n.layout {\\n  display: flex;\\n  width: 100%;\\n  min-height: 100vh;\\n}\\n\\n/* side bar */\\n.trigger {\\n  z-index: 2;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 4em;\\n  background: #5252FF;\\n}\\n\\n.nav {\\n  position: fixed;\\n  top: 0;\\n  left: -15em;\\n  overflow: hidden;\\n  transition: all .3s ease-in;\\n  width: 15em;\\n  height: 100%;\\n  background: #474FF6;\\n  color: #FFFFFF;\\n  ul {\\n    position: absolute;\\n    top: 4em;\\n    left: 0;\\n    margin: 0;\\n    padding: 0;\\n    width: 15em;\\n    li {\\n      width: 100%;\\n      a span{\\n        margin-right: 10px;\\n      }\\n    }\\n    \\n  }\\n}\\n\\n.trigger > i {\\n  display: inline-block;\\n  margin: 1.5em 0 0 1.5em;\\n  color: #5252FF;\\n}\\n\\n\\n.nav:hover,\\n.nav:focus,\\n.trigger:focus + .nav,\\n.trigger:hover + .nav {\\n  left: 0;\\n}\\n  \\n\\n/*  sidebar content */\\n  .content {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex: 1;\\n  }\\n\\n  @media screen and (max-width: 700px) {\\n    .sidebar {\\n      width: 100%;\\n      height: auto;\\n      position: relative;\\n    }\\n    .sidebar a {float: left;}\\n    div.content {margin-left: 0;}\\n  }\\n  \\n  @media screen and (max-width: 400px) {\\n    .sidebar a {\\n      text-align: center;\\n      float: none;\\n    }\\n  }\\n\\n/**\\n start\\n*/\\n\\n\\n.navlink {\\n  position: relative;\\n  display: inline-block;\\n  width: 100%;\\n  height: 4em;\\n\\n  em {\\n    position: absolute;\\n    top: 50%;\\n    left: 4em;\\n    transform: translateY(-50%);\\n  }\\n}\\n\\n.navlink:hover {\\n  background: #5252Fd;\\n}\\n\\n.active {\\n  background: red;\\n}\\n\\n.navlink > i {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  display: inline-block;\\n  width: 4em;\\n  height: 4em;\\n}\\n\\n.navlink > i::before {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n/* Mobile First */\\n@media (min-width: 42em) {\\n  .content {\\n     margin-left: 4em;\\n  }\\n  \\n  /* Sidebar */\\n  .trigger {\\n     width: 4em;\\n  }\\n  \\n  .nav {\\n     width: 4em;\\n     left: 0;\\n  }\\n  \\n  .nav:hover,\\n  .nav:focus,\\n  .trigger:hover + .nav,\\n  .trigger:focus + .nav {\\n     width: 15em;\\n  }\\n}\\n\\n@media (min-width: 68em) {\\n  .content {\\n     margin-left: 15em;\\n  }\\n  \\n  /* Sidebar */\\n  .trigger {\\n     display: none\\n  }\\n  \\n  .nav {\\n     width: 15em;\\n  }\\n  \\n  .nav ul {\\n     top: 1.3em;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"layout\": \"layout_layout__bGeF7\",\n\t\"trigger\": \"layout_trigger__TYCwH\",\n\t\"nav\": \"layout_nav__JoojI\",\n\t\"content\": \"layout_content__NAlix\",\n\t\"sidebar\": \"layout_sidebar__eDzGT\",\n\t\"navlink\": \"layout_navlink__vBcwh\",\n\t\"active\": \"layout_active__6wHp1\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbNF0hLi9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNktBQXdGO0FBQ2xJO0FBQ0E7QUFDQSwrRUFBK0Usa0JBQWtCLGdCQUFnQixzQkFBc0IsR0FBRyw0Q0FBNEMsZUFBZSxvQkFBb0IsV0FBVyxZQUFZLGdCQUFnQixnQkFBZ0Isd0JBQXdCLEdBQUcsd0JBQXdCLG9CQUFvQixXQUFXLGdCQUFnQixxQkFBcUIsaUNBQWlDLGdCQUFnQixpQkFBaUIsd0JBQXdCLG1CQUFtQixHQUFHLHlCQUF5Qix1QkFBdUIsYUFBYSxZQUFZLGNBQWMsZUFBZSxnQkFBZ0IsR0FBRyw0QkFBNEIsZ0JBQWdCLEdBQUcsbUNBQW1DLHVCQUF1QixHQUFHLGdDQUFnQywwQkFBMEIsNEJBQTRCLG1CQUFtQixHQUFHLGlLQUFpSyxZQUFZLEdBQUcsb0RBQW9ELGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMsR0FBRywwQ0FBMEMs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QUEwQix1QkFBdUIsYUFBYSxjQUFjLHFDQUFxQyxHQUFHLGtEQUFrRCxjQUFjLHdCQUF3QixLQUFLLG1DQUFtQyxrQkFBa0IsS0FBSyxjQUFjLGtCQUFrQixlQUFlLEtBQUssdUZBQXVGLG1CQUFtQixLQUFLLEdBQUcsOEJBQThCLGNBQWMseUJBQXlCLEtBQUssbUNBQW1DLHlCQUF5QixjQUFjLG1CQUFtQixLQUFLLGlCQUFpQixrQkFBa0IsS0FBSyxHQUFHLHFCQUFxQjtBQUN4ME07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0Lm1vZHVsZS5zY3NzP2VjYTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGxheW91dCAqL1xcbi5sYXlvdXRfbGF5b3V0X19iR2VGNyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogc2lkZSBiYXIgKi9cXG4ubGF5b3V0X3RyaWdnZXJfX1RZQ3dIIHtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGJhY2tncm91bmQ6ICM1MjUyRkY7XFxufVxcblxcbi5sYXlvdXRfbmF2X19Kb29qSSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtMTVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xcbiAgd2lkdGg6IDE1ZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjNDc0RkY2O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcbi5sYXlvdXRfbmF2X19Kb29qSSB1bCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDRlbTtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDE1ZW07XFxufVxcbi5sYXlvdXRfbmF2X19Kb29qSSB1bCBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxheW91dF9uYXZfX0pvb2pJIHVsIGxpIGEgc3BhbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5sYXlvdXRfdHJpZ2dlcl9fVFlDd0ggPiBpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMS41ZW0gMCAwIDEuNWVtO1xcbiAgY29sb3I6ICM1MjUyRkY7XFxufVxcblxcbi5sYXlvdXRfbmF2X19Kb29qSTpob3ZlcixcXG4ubGF5b3V0X25hdl9fSm9vakk6Zm9jdXMsXFxuLmxheW91dF90cmlnZ2VyX19UWUN3SDpmb2N1cyArIC5sYXlvdXRfbmF2X19Kb29qSSxcXG4ubGF5b3V0X3RyaWdnZXJfX1RZQ3dIOmhvdmVyICsgLmxheW91dF9uYXZfX0pvb2pJIHtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi8qICBzaWRlYmFyIGNvbnRlbnQgKi9cXG4ubGF5b3V0X2NvbnRlbnRfX05BbGl4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAxIDE7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAubGF5b3V0X3NpZGViYXJfX2VEekdUIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgLmxheW91dF9zaWRlYmFyX19lRHpHVCBhIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuICBkaXYubGF5b3V0X2NvbnRlbnRfX05BbGl4IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAubGF5b3V0X3NpZGViYXJfX2VEekdUIGEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgfVxcbn1cXG4vKipcXG4gc3RhcnRcXG4qL1xcbi5sYXlvdXRfbmF2bGlua19fdkJjd2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRlbTtcXG59XFxuLmxheW91dF9uYXZsaW5rX192QmN3aCBlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDRlbTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLmxheW91dF9uYXZsaW5rX192QmN3aDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNTI1MkZkO1xcbn1cXG5cXG4ubGF5b3V0X2FjdGl2ZV9fNndIcDEge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ubGF5b3V0X25hdmxpbmtfX3ZCY3doID4gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDRlbTtcXG4gIGhlaWdodDogNGVtO1xcbn1cXG5cXG4ubGF5b3V0X25hdmxpbmtfX3ZCY3doID4gaTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi8qIE1vYmlsZSBGaXJzdCAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA0MmVtKSB7XFxuICAubGF5b3V0X2NvbnRlbnRfX05BbGl4IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDRlbTtcXG4gIH1cXG4gIC8qIFNpZGViYXIgKi9cXG4gIC5sYXlvdXRfdHJpZ2dlcl9fVFlDd0gge1xcbiAgICB3aWR0aDogNGVtO1xcbiAgfVxcbiAgLmxheW91dF9uYXZfX0pvb2pJIHtcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG4gIC5sYXlvdXRfbmF2X19Kb29qSTpob3ZlcixcXG4ubGF5b3V0X25hdl9fSm9vakk6Zm9jdXMsXFxuLmxheW91dF90cmlnZ2VyX19UWUN3SDpob3ZlciArIC5sYXlvdXRfbmF2X19Kb29qSSxcXG4ubGF5b3V0X3RyaWdnZXJfX1RZQ3dIOmZvY3VzICsgLmxheW91dF9uYXZfX0pvb2pJIHtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2OGVtKSB7XFxuICAubGF5b3V0X2NvbnRlbnRfX05BbGl4IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1ZW07XFxuICB9XFxuICAvKiBTaWRlYmFyICovXFxuICAubGF5b3V0X3RyaWdnZXJfX1RZQ3dIIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5sYXlvdXRfbmF2X19Kb29qSSB7XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgfVxcbiAgLmxheW91dF9uYXZfX0pvb2pJIHVsIHtcXG4gICAgdG9wOiAxLjNlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBLGFBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDRSxXQUFBO0FBR047QUFGTTtFQUNFLGtCQUFBO0FBSVI7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUlBOzs7O0VBSUUsT0FBQTtBQURGOztBQUtBLHFCQUFBO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGSjs7QUFLRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUZKO0VBSUU7SUFBWSxXQUFBO0VBRGQ7RUFFRTtJQUFhLGNBQUE7RUFDZjtBQUNGO0FBQ0U7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQUNKO0FBQ0Y7QUFFQTs7Q0FBQTtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRkY7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUZKOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFIRjs7QUFNQSxpQkFBQTtBQUNBO0VBQ0U7SUFDRyxnQkFBQTtFQUhIO0VBTUEsWUFBQTtFQUNBO0lBQ0csVUFBQTtFQUpIO0VBT0E7SUFDRyxVQUFBO0lBQ0EsT0FBQTtFQUxIO0VBUUE7Ozs7SUFJRyxXQUFBO0VBTkg7QUFDRjtBQVNBO0VBQ0U7SUFDRyxpQkFBQTtFQVBIO0VBVUEsWUFBQTtFQUNBO0lBQ0csYUFBQTtFQVJIO0VBV0E7SUFDRyxXQUFBO0VBVEg7RUFZQTtJQUNHLFVBQUE7RUFWSDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGxheW91dCAqL1xcbi5sYXlvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIHNpZGUgYmFyICovXFxuLnRyaWdnZXIge1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNGVtO1xcbiAgYmFja2dyb3VuZDogIzUyNTJGRjtcXG59XFxuXFxuLm5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtMTVlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XFxuICB3aWR0aDogMTVlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICM0NzRGRjY7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIHVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDRlbTtcXG4gICAgbGVmdDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgbGkge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGEgc3BhbntcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgXFxuICB9XFxufVxcblxcbi50cmlnZ2VyID4gaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDEuNWVtIDAgMCAxLjVlbTtcXG4gIGNvbG9yOiAjNTI1MkZGO1xcbn1cXG5cXG5cXG4ubmF2OmhvdmVyLFxcbi5uYXY6Zm9jdXMsXFxuLnRyaWdnZXI6Zm9jdXMgKyAubmF2LFxcbi50cmlnZ2VyOmhvdmVyICsgLm5hdiB7XFxuICBsZWZ0OiAwO1xcbn1cXG4gIFxcblxcbi8qICBzaWRlYmFyIGNvbnRlbnQgKi9cXG4gIC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAuc2lkZWJhciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcbiAgICAuc2lkZWJhciBhIHtmbG9hdDogbGVmdDt9XFxuICAgIGRpdi5jb250ZW50IHttYXJnaW4tbGVmdDogMDt9XFxuICB9XFxuICBcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5zaWRlYmFyIGEge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmbG9hdDogbm9uZTtcXG4gICAgfVxcbiAgfVxcblxcbi8qKlxcbiBzdGFydFxcbiovXFxuXFxuXFxuLm5hdmxpbmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRlbTtcXG5cXG4gIGVtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNGVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB9XFxufVxcblxcbi5uYXZsaW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICM1MjUyRmQ7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4ubmF2bGluayA+IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDRlbTtcXG59XFxuXFxuLm5hdmxpbmsgPiBpOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLyogTW9iaWxlIEZpcnN0ICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDQyZW0pIHtcXG4gIC5jb250ZW50IHtcXG4gICAgIG1hcmdpbi1sZWZ0OiA0ZW07XFxuICB9XFxuICBcXG4gIC8qIFNpZGViYXIgKi9cXG4gIC50cmlnZ2VyIHtcXG4gICAgIHdpZHRoOiA0ZW07XFxuICB9XFxuICBcXG4gIC5uYXYge1xcbiAgICAgd2lkdGg6IDRlbTtcXG4gICAgIGxlZnQ6IDA7XFxuICB9XFxuICBcXG4gIC5uYXY6aG92ZXIsXFxuICAubmF2OmZvY3VzLFxcbiAgLnRyaWdnZXI6aG92ZXIgKyAubmF2LFxcbiAgLnRyaWdnZXI6Zm9jdXMgKyAubmF2IHtcXG4gICAgIHdpZHRoOiAxNWVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjhlbSkge1xcbiAgLmNvbnRlbnQge1xcbiAgICAgbWFyZ2luLWxlZnQ6IDE1ZW07XFxuICB9XFxuICBcXG4gIC8qIFNpZGViYXIgKi9cXG4gIC50cmlnZ2VyIHtcXG4gICAgIGRpc3BsYXk6IG5vbmVcXG4gIH1cXG4gIFxcbiAgLm5hdiB7XFxuICAgICB3aWR0aDogMTVlbTtcXG4gIH1cXG4gIFxcbiAgLm5hdiB1bCB7XFxuICAgICB0b3A6IDEuM2VtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJsYXlvdXRcIjogXCJsYXlvdXRfbGF5b3V0X19iR2VGN1wiLFxuXHRcInRyaWdnZXJcIjogXCJsYXlvdXRfdHJpZ2dlcl9fVFlDd0hcIixcblx0XCJuYXZcIjogXCJsYXlvdXRfbmF2X19Kb29qSVwiLFxuXHRcImNvbnRlbnRcIjogXCJsYXlvdXRfY29udGVudF9fTkFsaXhcIixcblx0XCJzaWRlYmFyXCI6IFwibGF5b3V0X3NpZGViYXJfX2VEekdUXCIsXG5cdFwibmF2bGlua1wiOiBcImxheW91dF9uYXZsaW5rX192QmN3aFwiLFxuXHRcImFjdGl2ZVwiOiBcImxheW91dF9hY3RpdmVfXzZ3SHAxXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!../node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./shared/components/layout/layout.module.scss\n"));

/***/ })

});