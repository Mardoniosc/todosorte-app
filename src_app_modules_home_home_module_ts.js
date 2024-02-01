"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_home_home_module_ts"],{

/***/ 89856:
/*!***********************************************************!*\
  !*** ./src/app/modules/home/containers/home.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class HomeComponent {
    get nomeSistema() {
        return environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nomeSistema;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 5, vars: 1, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-200", "min-h-200", "max-h-200", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"], [1, "text-2xl", "pt-4", "px-4"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Seja bem vindo ao ", ctx.nomeSistema, "");
    } }, encapsulation: 2 });


/***/ }),

/***/ 44882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _containers_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/home.component */ 89856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [
    {
        path: '',
        component: _containers_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
    },
];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_containers_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_home_home_module_ts.js.map