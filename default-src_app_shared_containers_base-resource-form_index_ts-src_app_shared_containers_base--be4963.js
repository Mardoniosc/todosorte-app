"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["default-src_app_shared_containers_base-resource-form_index_ts-src_app_shared_containers_base--be4963"],{

/***/ 40932:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/containers/base-resource-form/BaseResourceFormComponent.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseResourceFormComponent": () => (/* binding */ BaseResourceFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr */ 36545);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_models_eventos_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/models/eventos.enum */ 88983);
/* harmony import */ var app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/base-resource.service */ 48280);







class BaseResourceFormComponent {
    constructor(injecto, resource, resourceService) {
        this.injecto = injecto;
        this.resource = resource;
        this.resourceService = resourceService;
        this.carregamentoDeDados = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.route = this.injecto.get(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
        this.router = this.injecto.get(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
        this.formBuilder = this.injecto.get(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
    }
    ngOnInit() {
        this.setCurrentAction();
        this.buildResourceForm();
        this.loadResource();
    }
    ngAfterContentChecked() {
        this.setPageTitle();
    }
    submitForm() {
        if (this.resourceForm.invalid) {
            return;
        }
        const resource = this.resourceForm.value;
        if (this.currentAction === 'novo') {
            this.resourceService.insert(resource).subscribe(() => {
                toastr__WEBPACK_IMPORTED_MODULE_0___default().success('Dado cadastrado com sucesso!', 'Sucesso', {
                    timeOut: 10000,
                    progressBar: true,
                    closeButton: true,
                });
                const baseComponentPath = this.route.snapshot.parent.url[0].path;
                this.router.navigate([baseComponentPath]);
            }, (error) => {
                toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível carregar os dados', error.error.error, {
                    timeOut: 10000,
                    progressBar: true,
                    closeButton: true,
                });
            });
            return;
        }
        resource.id = this.resource.id;
        this.resourceService.update(resource).subscribe(() => {
            toastr__WEBPACK_IMPORTED_MODULE_0___default().success('Dado atualizado com sucesso!', 'Sucesso', {
                timeOut: 10000,
                progressBar: true,
                closeButton: true,
            });
            const baseComponentPath = this.route.snapshot.parent.url[0].path;
            this.router.navigate([baseComponentPath]);
        }, (error) => {
            toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível atualizar o dado', error.error.error, {
                timeOut: 10000,
                progressBar: true,
                closeButton: true,
            });
        });
    }
    // PRIVATE METHODS
    setCurrentAction() {
        if (this.route.snapshot.url[this.route.snapshot.url.length - 1]?.path === 'novo') {
            this.currentAction = 'novo';
        }
        else {
            this.currentAction = 'editar';
        }
    }
    loadResource() {
        if (this.currentAction === 'editar') {
            const idResource = Number(this.route.snapshot.url[this.route.snapshot.url.length - 2]?.path);
            this.resourceService.getById(idResource).subscribe((resource) => {
                this.resource = resource;
                this.resourceForm.patchValue(this.resource);
                this.carregamentoDeDados.emit(app_shared_models_eventos_enum__WEBPACK_IMPORTED_MODULE_1__.EEventosLocais.CARREGAMENTO_DADOS_API);
            }, (error) => {
                toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível carregar os dados', error.error.error, {
                    timeOut: 10000,
                    progressBar: true,
                    closeButton: true,
                });
            });
        }
    }
    setPageTitle() {
        if (this.currentAction === 'novo') {
            this.pageTitle = this.createPageTitle();
        }
        else {
            this.pageTitle = this.editionPageTitle();
        }
    }
    createPageTitle() {
        return 'Novo';
    }
    editionPageTitle() {
        return 'Edição';
    }
}
BaseResourceFormComponent.ɵfac = function BaseResourceFormComponent_Factory(t) { return new (t || BaseResourceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('resource'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_2__.BaseResourceService)); };
BaseResourceFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BaseResourceFormComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function BaseResourceFormComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 22320:
/*!***************************************************************!*\
  !*** ./src/app/shared/containers/base-resource-form/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseResourceFormComponent": () => (/* reexport safe */ _BaseResourceFormComponent__WEBPACK_IMPORTED_MODULE_0__.BaseResourceFormComponent)
/* harmony export */ });
/* harmony import */ var _BaseResourceFormComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseResourceFormComponent */ 40932);



/***/ }),

/***/ 58:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/containers/base-resource-list/base-resource-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseResourceListComponent": () => (/* binding */ BaseResourceListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var app_shared_services_rules_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/rules.service */ 36421);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastr */ 36545);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/base-resource.service */ 48280);







class BaseResourceListComponent {
    constructor(injecto, resourceService) {
        this.injecto = injecto;
        this.resourceService = resourceService;
        this.resources = [];
        // MatPaginator Inputs
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this._fuseConfirmationService = this.injecto.get(_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_0__.FuseConfirmationService);
        this._matPaginatorIntl = this.injecto.get(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorIntl);
        this._ruleService = this.injecto.get(app_shared_services_rules_service__WEBPACK_IMPORTED_MODULE_1__.RulesService);
    }
    ngOnInit() {
        this.carregaInformacoesResource();
        this._matPaginatorIntl.itemsPerPageLabel = 'Itens por página';
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput
                .split(',')
                .map((str) => +str);
        }
    }
    carregaInformacoesResource() {
        const filtro = {
            filtro: '',
            pagina: 0,
            direcaoOrdenacao: 'DESC',
            tamanho: 10,
            ordenarPor: 'id',
        };
        this.resourceService.getAll(filtro).subscribe((data) => {
            this.resources = data['content'];
            this.length = data['totalElements'];
            this.pageSize = data['size'];
        });
    }
    excluir(resource) {
        const dialogRef = this._fuseConfirmationService.open({
            title: `Deseja realmente excluir o item: ${resource.id}?`,
            message: '',
            icon: {
                show: true,
                name: 'heroicons_outline:exclamation',
                color: 'warn',
            },
            actions: {
                confirm: {
                    show: true,
                    label: 'Confirmar',
                    color: 'warn',
                },
                cancel: {
                    show: true,
                    label: 'Cancelar',
                },
            },
            dismissible: false,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'confirmed') {
                this.resourceService.delete(resource.id).subscribe((res) => {
                    toastr__WEBPACK_IMPORTED_MODULE_2___default().success(`Item excluído com sucesso!`, '', {
                        timeOut: 10000,
                        progressBar: true,
                        closeButton: true,
                    });
                    this.carregaInformacoesResource();
                }, (error) => {
                    toastr__WEBPACK_IMPORTED_MODULE_2___default().error('Não foi possível excluir o perfil', error.error.error, {
                        timeOut: 10000,
                        progressBar: true,
                        closeButton: true,
                    });
                });
            }
        });
    }
    paginacao(event) {
        this.pageSize = event['pageSize'];
        const filtro = {
            filtro: '',
            pagina: event['pageIndex'],
            direcaoOrdenacao: 'DESC',
            tamanho: this.pageSize,
            ordenarPor: 'id',
        };
        this.resourceService.getAll(filtro).subscribe((data) => {
            this.resources = data['content'];
            this.length = data['totalElements'];
            this.pageSize = data['size'];
        });
    }
    filtrarResource(termo) {
        const filtro = {
            filtro: termo,
            pagina: 0,
            direcaoOrdenacao: 'DESC',
            tamanho: 10,
            ordenarPor: 'id',
        };
        this.resourceService.getAll(filtro).subscribe((data) => {
            this.resources = data['content'];
            this.length = data['totalElements'];
            this.pageSize = data['size'];
        });
    }
    validaPermissao(rule) {
        return this._ruleService.temPermissao(rule);
    }
}
BaseResourceListComponent.ɵfac = function BaseResourceListComponent_Factory(t) { return new (t || BaseResourceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_3__.BaseResourceService)); };
BaseResourceListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BaseResourceListComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function BaseResourceListComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 18550:
/*!******************************************************!*\
  !*** ./src/app/shared/models/base-resource.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseResourceModel": () => (/* binding */ BaseResourceModel)
/* harmony export */ });
class BaseResourceModel {
}


/***/ }),

/***/ 88983:
/*!***********************************************!*\
  !*** ./src/app/shared/models/eventos.enum.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EEventosLocais": () => (/* binding */ EEventosLocais)
/* harmony export */ });
var EEventosLocais;
(function (EEventosLocais) {
    EEventosLocais["CARREGAMENTO_DADOS_API"] = "carregamento-dados-api";
})(EEventosLocais || (EEventosLocais = {}));


/***/ }),

/***/ 48280:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/base-resource.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseResourceService": () => (/* binding */ BaseResourceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class BaseResourceService {
    constructor(apiPath, injector) {
        this.apiPath = apiPath;
        this.injector = injector;
        this.http = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    }
    getAll(filter) {
        const parametros = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('filtro', filter.filtro)
            .set('page', filter.pagina)
            .set('linesPerPage', filter.tamanho)
            .set('orderBy', filter.ordenarPor)
            .set('direction', filter.direcaoOrdenacao);
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}/page`, {
            params: parametros,
        });
    }
    getById(id) {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}/${id}`);
    }
    insert(resource) {
        return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}`, resource);
    }
    update(resource) {
        return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}/${resource.id}`, resource);
    }
    delete(id) {
        return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}/${id}`);
    }
}
BaseResourceService.ɵfac = function BaseResourceService_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinvalidFactory"](); };
BaseResourceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BaseResourceService, factory: BaseResourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 36421:
/*!**************************************************!*\
  !*** ./src/app/shared/services/rules.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesService": () => (/* binding */ RulesService)
/* harmony export */ });
/* harmony import */ var app_core_auth_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/auth.utils */ 10705);
/* harmony import */ var _models_sessionstorage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/sessionstorage.model */ 94187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class RulesService {
    constructor() { }
    temPermissao(rule) {
        const token = sessionStorage.getItem(_models_sessionstorage_model__WEBPACK_IMPORTED_MODULE_1__.ESessionStorage.TOKEN);
        if (!token) {
            return false;
        }
        const { ROLES } = app_core_auth_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.decodeToken(token);
        if (Object(ROLES).find((permissao) => permissao == rule)) {
            return true;
        }
        return false;
    }
}
RulesService.ɵfac = function RulesService_Factory(t) { return new (t || RulesService)(); };
RulesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RulesService, factory: RulesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_containers_base-resource-form_index_ts-src_app_shared_containers_base--be4963.js.map