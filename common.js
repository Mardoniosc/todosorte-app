"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["common"],{

/***/ 23627:
/*!******************************************************!*\
  !*** ./src/app/modules/perfil/api/perfil.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilService": () => (/* binding */ PerfilService)
/* harmony export */ });
/* harmony import */ var app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/base-resource.service */ 48280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class PerfilService extends app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(injector) {
        super('/perfils', injector);
        this.injector = injector;
    }
}
PerfilService.ɵfac = function PerfilService_Factory(t) { return new (t || PerfilService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)); };
PerfilService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PerfilService, factory: PerfilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 23574:
/*!************************************************************!*\
  !*** ./src/app/modules/permissao/api/permissao.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissaoService": () => (/* binding */ PermissaoService)
/* harmony export */ });
/* harmony import */ var app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/base-resource.service */ 48280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class PermissaoService extends app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(injector) {
        super('/permissoes', injector);
        this.injector = injector;
    }
}
PermissaoService.ɵfac = function PermissaoService_Factory(t) { return new (t || PermissaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)); };
PermissaoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PermissaoService, factory: PermissaoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map