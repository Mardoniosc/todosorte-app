"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_perfil-permissao_perfil-permissao_module_ts-src_app_shared_services_base-reso-070056"],{

/***/ 66202:
/*!**************************************************************************!*\
  !*** ./src/app/modules/perfil-permissao/api/perfil-permissao.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPermissaoService": () => (/* binding */ PerfilPermissaoService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class PerfilPermissaoService {
    constructor(http) {
        this.http = http;
        this.apiPath = '/perfilpermissao';
    }
    getAll() {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}`);
    }
    getById(perfilPermissao) {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}/${perfilPermissao.perfilId}/${perfilPermissao.permissaoId}`);
    }
    insert(perfilPermissao) {
        return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}`, perfilPermissao);
    }
    update(perfilPermissao) {
        return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}/${perfilPermissao.perfilId}/${perfilPermissao.permissaoId}`, perfilPermissao);
    }
    delete(perfilPermissao) {
        return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}${this.apiPath}/${perfilPermissao.perfilId}/${perfilPermissao.permissaoId}`);
    }
}
PerfilPermissaoService.ɵfac = function PerfilPermissaoService_Factory(t) { return new (t || PerfilPermissaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PerfilPermissaoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PerfilPermissaoService, factory: PerfilPermissaoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 17527:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/perfil-permissao/containers/configuracoes/configuracoes.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiguracoesComponent": () => (/* binding */ ConfiguracoesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/media-watcher */ 14739);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _perfil_permissao_list_perfil_permissao_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../perfil-permissao-list/perfil-permissao-list.component */ 6101);
/* harmony import */ var _perfil_permissao_vinculacao_perfil_permissao_vinculacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perfil-permissao-vinculacao/perfil-permissao-vinculacao.component */ 1288);










const _c0 = ["drawer"];
const _c1 = function (a0, a1) { return { "hover:bg-gray-100 dark:hover:bg-hover": a0, "bg-primary-50 dark:bg-hover": a1 }; };
const _c2 = function (a0, a1) { return { "text-hint": a0, "text-primary dark:text-primary-500": a1 }; };
const _c3 = function (a0) { return { "text-primary dark:text-primary-500": a0 }; };
function ConfiguracoesComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfiguracoesComponent_ng_container_11_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const panel_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.goToPanel(panel_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21)(4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c1, !ctx_r1.selectedPanel || ctx_r1.selectedPanel !== panel_r4.id, ctx_r1.selectedPanel && ctx_r1.selectedPanel === panel_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c2, !ctx_r1.selectedPanel || ctx_r1.selectedPanel !== panel_r4.id, ctx_r1.selectedPanel && ctx_r1.selectedPanel === panel_r4.id))("svgIcon", panel_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c3, ctx_r1.selectedPanel && ctx_r1.selectedPanel === panel_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", panel_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", panel_r4.description, " ");
} }
function ConfiguracoesComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-perfil-permissao-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function ConfiguracoesComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-perfil-permissao-vinculacao");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
class ConfiguracoesComponent {
    constructor(_changeDetectorRef, _fuseMediaWatcherService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._fuseMediaWatcherService = _fuseMediaWatcherService;
        this.drawerMode = 'side';
        this.drawerOpened = true;
        this.panels = [];
        this.selectedPanel = 'perfils';
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.panels = [
            {
                id: 'perfils',
                icon: 'heroicons_outline:adjustments',
                title: 'Lista de perfils com permissões',
                description: 'Detalhes de cada perfil com suas permissões',
            },
            {
                id: 'vinculacao',
                icon: 'heroicons_outline:user-group',
                title: 'Vínculação',
                description: 'Víncular permissões a perfils!',
            },
        ];
        this._fuseMediaWatcherService.onMediaChange$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
            if (matchingAliases.includes('lg')) {
                this.drawerMode = 'side';
                this.drawerOpened = true;
            }
            else {
                this.drawerMode = 'over';
                this.drawerOpened = false;
            }
            this._changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
    goToPanel(panel) {
        this.selectedPanel = panel;
        if (this.drawerMode === 'over') {
            this.drawer.close();
        }
    }
    getPanelInfo(id) {
        return this.panels.find((panel) => panel.id === id);
    }
    trackByFn(index, item) {
        return item.id || index;
    }
}
ConfiguracoesComponent.ɵfac = function ConfiguracoesComponent_Factory(t) { return new (t || ConfiguracoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_fuse_services_media_watcher__WEBPACK_IMPORTED_MODULE_0__.FuseMediaWatcherService)); };
ConfiguracoesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfiguracoesComponent, selectors: [["app-configuracoes"]], viewQuery: function ConfiguracoesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, decls: 23, vars: 11, consts: [[1, "flex", "flex-col", "w-full", "min-w-0", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "flex-auto", "sm:h-full", "dark:bg-accent-800"], [1, "sm:w-96", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], ["drawer", ""], [1, "flex", "items-center", "justify-between", "m-8", "mr-6", "sm:my-10"], [1, "text-4xl", "font-extrabold", "tracking-tight", "leading-none"], [1, "lg:hidden"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex", "flex-col", "divide-y", "border-t", "border-b"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "flex-col"], [1, "flex-auto", "px-6", "pt-9", "pb-12", "md:p-8", "md:pb-12", "lg:p-12"], [1, "flex", "items-center"], ["mat-icon-button", "", 1, "lg:hidden", "-ml-2", 3, "click"], [1, "ml-2", "lg:ml-0", "text-3xl", "font-bold", "tracking-tight", "leading-none"], [1, "mt-8"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "flex", "px-8", "py-5", "cursor-pointer", 3, "ngClass", "click"], [3, "ngClass", "svgIcon"], [1, "ml-3"], [1, "font-medium", "leading-6", 3, "ngClass"], [1, "mt-0.5", "text-secondary"]], template: function ConfiguracoesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-drawer-container", 1)(2, "mat-drawer", 2, 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Configura\u00E7\u00F5es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfiguracoesComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ConfiguracoesComponent_ng_container_11_Template, 8, 14, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-drawer-content", 11)(13, "div", 12)(14, "div", 13)(15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfiguracoesComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ConfiguracoesComponent_ng_container_21_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ConfiguracoesComponent_ng_container_22_Template, 2, 0, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:x");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.panels)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getPanelInfo(ctx.selectedPanel).title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.selectedPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "perfils");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "vinculacao");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContent, _perfil_permissao_list_perfil_permissao_list_component__WEBPACK_IMPORTED_MODULE_1__.PerfilPermissaoListComponent, _perfil_permissao_vinculacao_perfil_permissao_vinculacao_component__WEBPACK_IMPORTED_MODULE_2__.PerfilPermissaoVinculacaoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmFjb2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6101:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/perfil-permissao/containers/perfil-permissao-list/perfil-permissao-list.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPermissaoListComponent": () => (/* binding */ PerfilPermissaoListComponent)
/* harmony export */ });
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr */ 36545);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_modules_perfil_api_perfil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/perfil/api/perfil.service */ 23627);
/* harmony import */ var app_modules_permissao_api_permissao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/permissao/api/permissao.service */ 23574);
/* harmony import */ var _api_perfil_permissao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/perfil-permissao.service */ 66202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 17591);








function PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_7_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r9.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-slide-toggle", 11, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_7_div_1_Template_mat_slide_toggle_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const permissao_filho_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.atualizaPerfilPermissao(perfil_r1, permissao_filho_r7)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const permissao_filho_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", permissao_filho_r7.descricao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r8.permissaoAtivada(perfil_r1, permissao_filho_r7))("color", "primary");
} }
function PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_7_div_1_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const permissao_filho_r7 = ctx.$implicit;
    const permissao_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", permissao_filho_r7.permissaoPai && permissao_filho_r7.permissaoPai.descricao === permissao_r3.descricao);
} }
function PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r5.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-slide-toggle", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_Template_mat_slide_toggle_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const permissao_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.atualizaPerfilPermissao(perfil_r1, permissao_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const permissao_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", permissao_r3.descricao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r4.permissaoAtivada(perfil_r1, permissao_r3))("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.permissoes);
} }
function PerfilPermissaoListComponent_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PerfilPermissaoListComponent_ng_container_1_ng_container_7_ng_container_1_Template, 8, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const permissao_r3 = ctx.$implicit;
    const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !permissao_r3.permissaoPai && ctx_r2.mostrarPermissao(perfil_r1, permissao_r3));
} }
function PerfilPermissaoListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-accordion", 2)(2, "mat-expansion-panel", 3)(3, "mat-expansion-panel-header", 4)(4, "mat-panel-title", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PerfilPermissaoListComponent_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const perfil_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collapsedHeight", "56px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", perfil_r1.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.permissoes);
} }
class PerfilPermissaoListComponent {
    constructor(perfilService, permissaoService, perfilPermissaoService) {
        this.perfilService = perfilService;
        this.permissaoService = permissaoService;
        this.perfilPermissaoService = perfilPermissaoService;
        this.perfils = [];
        this.permissoes = [];
        this.perfilPermissao = [];
        this.filtro = {
            filtro: '',
            pagina: 0,
            direcaoOrdenacao: 'ASC',
            tamanho: 100,
            ordenarPor: 'id',
        };
    }
    ngOnInit() {
        this.carregaInformacoesPerfilPermissao();
    }
    carregaInformacoesPerfilPermissao() {
        this.perfilService.getAll(this.filtro).subscribe((perfils) => {
            this.perfils = perfils.content;
        }, (error) => toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível carregar os perfils', error.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
        this.permissaoService.getAll(this.filtro).subscribe((permissoes) => {
            this.permissoes = permissoes.content;
        }, (error) => toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível carregar os permissões', error.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
        this.carregaDadosPerfilPermissao();
    }
    atualizaPerfilPermissao(perfil, permissao) {
        let perfilPermissaoRequest = {
            ...this.perfilPermissao.find((pp) => pp.perfilId === perfil.id && pp.permissaoId === permissao.id),
        };
        perfilPermissaoRequest.status = !perfilPermissaoRequest.status;
        this.perfilPermissaoService.update(perfilPermissaoRequest).subscribe(() => {
            const index = this.perfilPermissao.findIndex((pp) => pp.perfilId === perfil.id && pp.permissaoId === permissao.id);
            this.perfilPermissao[index].status = perfilPermissaoRequest.status;
            toastr__WEBPACK_IMPORTED_MODULE_0___default().success('Permissao atualizada com sucesso!', '', {
                timeOut: 10000,
                progressBar: true,
                closeButton: true,
            });
        }, (error) => {
            toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível atualizar perfil e permissao selecionado', error.error.error, {
                timeOut: 10000,
                progressBar: true,
                closeButton: true,
            });
        });
    }
    mostrarPermissao(perfil, permissao) {
        return !!this.perfilPermissao.find((pp) => pp.perfilId === perfil.id && pp.permissaoId === permissao.id);
    }
    permissaoAtivada(perfil, permissao) {
        if (this.perfilPermissao.length < 1)
            return false;
        const perfilPermissao = this.perfilPermissao.find((pp) => pp.perfilId === perfil.id && pp.permissaoId === permissao.id);
        if (!perfilPermissao)
            return false;
        return perfilPermissao.status;
    }
    carregaDadosPerfilPermissao() {
        this.perfilPermissaoService.getAll().subscribe((perfilPermissoes) => {
            this.perfilPermissao = perfilPermissoes;
        }, (error) => toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível carregar perfils e permissões', error.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
    }
}
PerfilPermissaoListComponent.ɵfac = function PerfilPermissaoListComponent_Factory(t) { return new (t || PerfilPermissaoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_perfil_api_perfil_service__WEBPACK_IMPORTED_MODULE_1__.PerfilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_permissao_api_permissao_service__WEBPACK_IMPORTED_MODULE_2__.PermissaoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_perfil_permissao_service__WEBPACK_IMPORTED_MODULE_3__.PerfilPermissaoService)); };
PerfilPermissaoListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PerfilPermissaoListComponent, selectors: [["app-perfil-permissao-list"]], decls: 2, vars: 1, consts: [[1, "w-full", "max-w-3xl"], [4, "ngFor", "ngForOf"], [1, "max-w-4xl", "mt-8"], [1, "bg-accent-200", "dark:bg-accent-700", "mt-2"], [3, "collapsedHeight"], [1, "font-medium", "leading-tight"], [1, "grid", "grid-cols-1", "gap-2", "w-full", "mt-3"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "mt-3", "border-dashed", "border-primary", "hover:border-b-2"], [1, "flex-auto", "cursor-pointer", 3, "click"], [1, "leading-6", "font-medium"], [1, "ml-2", 3, "checked", "color", "click"], ["communication", ""], ["class", "flex items-center justify-between ml-6 border-dashed border-primary hover:border-b-2", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "ml-6", "border-dashed", "border-primary", "hover:border-b-2"], ["securityToggle", ""]], template: function PerfilPermissaoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PerfilPermissaoListComponent_ng_container_1_Template, 8, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.perfils);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__.MatSlideToggle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwtcGVybWlzc2FvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1288:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/perfil-permissao/containers/perfil-permissao-vinculacao/perfil-permissao-vinculacao.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPermissaoVinculacaoComponent": () => (/* binding */ PerfilPermissaoVinculacaoComponent)
/* harmony export */ });
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr */ 36545);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_modules_perfil_api_perfil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/perfil/api/perfil.service */ 23627);
/* harmony import */ var app_modules_permissao_api_permissao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/modules/permissao/api/permissao.service */ 23574);
/* harmony import */ var _api_perfil_permissao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/perfil-permissao.service */ 66202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);









function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const permissao_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.adicionarPermissao(perfil_r1, permissao_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const permissao_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.removerPermissao(perfil_r1, permissao_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:trash");
} }
function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_div_1_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_div_1_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const permissao_filho_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.adicionarPermissao(perfil_r1, permissao_filho_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const permissao_filho_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.removerPermissao(perfil_r1, permissao_filho_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:trash");
} }
function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_div_1_button_5_Template, 2, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_div_1_button_6_Template, 2, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const permissao_filho_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", permissao_filho_r16.descricao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r17.temPermissao(perfil_r1, permissao_filho_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r17.temPermissao(perfil_r1, permissao_filho_r16));
} }
function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_div_1_Template, 7, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const permissao_filho_r16 = ctx.$implicit;
    const permissao_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", permissao_filho_r16.permissaoPai && permissao_filho_r16.permissaoPai.descricao === permissao_r3.descricao);
} }
function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8)(2, "div", 9)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_button_6_Template, 2, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_button_7_Template, 2, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_ng_container_8_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const permissao_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const perfil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", permissao_r3.descricao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.temPermissao(perfil_r1, permissao_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.temPermissao(perfil_r1, permissao_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.permissoes);
} }
function PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_ng_container_1_Template, 9, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const permissao_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !permissao_r3.permissaoPai);
} }
function PerfilPermissaoVinculacaoComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-accordion", 2)(2, "mat-expansion-panel", 3)(3, "mat-expansion-panel-header", 4)(4, "mat-panel-title", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PerfilPermissaoVinculacaoComponent_ng_container_1_ng_container_7_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const perfil_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collapsedHeight", "56px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", perfil_r1.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.permissoes);
} }
class PerfilPermissaoVinculacaoComponent {
    constructor(perfilService, permissaoService, perfilPermissaoService) {
        this.perfilService = perfilService;
        this.permissaoService = permissaoService;
        this.perfilPermissaoService = perfilPermissaoService;
        this.perfils = [];
        this.permissoes = [];
        this.perfilPermissao = [];
        this.filtro = {
            filtro: '',
            pagina: 0,
            direcaoOrdenacao: 'ASC',
            tamanho: 100,
            ordenarPor: 'id',
        };
    }
    ngOnInit() {
        this.carregaInformacoesPerfilPermissao();
    }
    carregaInformacoesPerfilPermissao() {
        this.perfilService.getAll(this.filtro).subscribe((perfils) => {
            this.perfils = perfils.content;
        }, (error) => toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível carregar os perfils', error.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
        this.permissaoService.getAll(this.filtro).subscribe((permissoes) => {
            this.permissoes = permissoes.content;
        }, (error) => toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível carregar os permissões', error.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
        this.perfilPermissaoService.getAll().subscribe((perfilPermissoes) => {
            this.perfilPermissao = perfilPermissoes;
        }, (error) => toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível carregar perfils e permissões', error.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
    }
    temPermissao(perfil, permissao) {
        return !!this.perfilPermissao.find((pp) => pp.perfilId === perfil.id && pp.permissaoId === permissao.id);
    }
    adicionarPermissao(perfil, permissao) {
        this.perfilPermissaoService
            .insert({
            perfilId: perfil.id,
            permissaoId: permissao.id,
            status: true,
        })
            .subscribe(() => {
            toastr__WEBPACK_IMPORTED_MODULE_0___default().success(`Permissão ${permissao.descricao} vínculada ao perfil ${perfil.nome} com sucesso!`, '', {
                timeOut: 10000,
                progressBar: true,
                closeButton: true,
            });
            this.perfilPermissao.push({
                perfilId: perfil.id,
                permissaoId: permissao.id,
                status: true,
            });
        }, (error) => toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Erro ao víncular nova permissão', error.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
    }
    removerPermissao(perfil, permissao) {
        this.perfilPermissaoService
            .delete({
            perfilId: perfil.id,
            permissaoId: permissao.id,
            status: true,
        })
            .subscribe(() => {
            toastr__WEBPACK_IMPORTED_MODULE_0___default().success(`Permissão ${permissao.descricao} removida do perfil ${perfil.nome} com sucesso!`, '', {
                timeOut: 10000,
                progressBar: true,
                closeButton: true,
            });
            const index = this.perfilPermissao.findIndex((pp) => pp.perfilId === perfil.id && pp.permissaoId === permissao.id);
            this.perfilPermissao.splice(index, 1);
        }, (error) => toastr__WEBPACK_IMPORTED_MODULE_0___default().error('Não foi possível remover vínculo', error.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
    }
}
PerfilPermissaoVinculacaoComponent.ɵfac = function PerfilPermissaoVinculacaoComponent_Factory(t) { return new (t || PerfilPermissaoVinculacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_perfil_api_perfil_service__WEBPACK_IMPORTED_MODULE_1__.PerfilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_modules_permissao_api_permissao_service__WEBPACK_IMPORTED_MODULE_2__.PermissaoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_perfil_permissao_service__WEBPACK_IMPORTED_MODULE_3__.PerfilPermissaoService)); };
PerfilPermissaoVinculacaoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PerfilPermissaoVinculacaoComponent, selectors: [["app-perfil-permissao-vinculacao"]], decls: 2, vars: 1, consts: [[1, "w-full", "max-w-3xl"], [4, "ngFor", "ngForOf"], [1, "max-w-4xl", "mt-8", "bg-accent-400"], [1, "bg-accent-200", "dark:bg-accent-700", "mt-2"], [3, "collapsedHeight"], [1, "font-medium", "leading-tight"], [1, "grid", "grid-cols-1", "gap-2", "w-full", "mt-3"], [4, "ngIf"], [1, "flex", "items-center", "justify-between", "mt-3", "border-dashed", "border-primary", "hover:border-b-2"], [1, "flex-auto"], [1, "leading-6", "font-medium"], [1, "order-1", "sm:order-2", "sm:ml-3", "cursor-pointer"], ["mat-icon-button", "", "class", "hover:bg-green-100 hover:dark:bg-green", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "hover:bg-red-100 hover:dark:bg-red", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "hover:bg-green-100", "hover:dark:bg-green", 3, "click"], [1, "text-hint", "text-green-700", "dark:text-on-green", 3, "svgIcon"], ["mat-icon-button", "", 1, "hover:bg-red-100", "hover:dark:bg-red", 3, "click"], [1, "text-hint", "text-red-700", "dark:text-on-red", 3, "svgIcon"], ["class", "flex items-center justify-between ml-6 border-dashed border-primary hover:border-b-2", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "ml-6", "border-dashed", "border-primary", "hover:border-b-2"]], template: function PerfilPermissaoVinculacaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PerfilPermissaoVinculacaoComponent_ng_container_1_Template, 8, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.perfils);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwtcGVybWlzc2FvLXZpbmN1bGFjYW8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 48850:
/*!*********************************************************************!*\
  !*** ./src/app/modules/perfil-permissao/perfil-permissao.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPermissaoModule": () => (/* binding */ PerfilPermissaoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _containers_perfil_permissao_list_perfil_permissao_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/perfil-permissao-list/perfil-permissao-list.component */ 6101);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _containers_configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/configuracoes/configuracoes.component */ 17527);
/* harmony import */ var _containers_perfil_permissao_vinculacao_perfil_permissao_vinculacao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/perfil-permissao-vinculacao/perfil-permissao-vinculacao.component */ 1288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [{ path: '', component: _containers_configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_2__.ConfiguracoesComponent }];
class PerfilPermissaoModule {
}
PerfilPermissaoModule.ɵfac = function PerfilPermissaoModule_Factory(t) { return new (t || PerfilPermissaoModule)(); };
PerfilPermissaoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PerfilPermissaoModule });
PerfilPermissaoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PerfilPermissaoModule, { declarations: [_containers_perfil_permissao_list_perfil_permissao_list_component__WEBPACK_IMPORTED_MODULE_0__.PerfilPermissaoListComponent,
        _containers_configuracoes_configuracoes_component__WEBPACK_IMPORTED_MODULE_2__.ConfiguracoesComponent,
        _containers_perfil_permissao_vinculacao_perfil_permissao_vinculacao_component__WEBPACK_IMPORTED_MODULE_3__.PerfilPermissaoVinculacaoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


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


/***/ })

}]);
//# sourceMappingURL=src_app_modules_perfil-permissao_perfil-permissao_module_ts-src_app_shared_services_base-reso-070056.js.map