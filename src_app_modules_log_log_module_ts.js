"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_log_log_module_ts"],{

/***/ 97225:
/*!***************************************************!*\
  !*** ./src/app/modules/log/api/acesso.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcessoService": () => (/* binding */ AcessoService)
/* harmony export */ });
/* harmony import */ var app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/base-resource.service */ 48280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class AcessoService extends app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(injector) {
        super('/historicoacesso', injector);
        this.injector = injector;
    }
}
AcessoService.ɵfac = function AcessoService_Factory(t) { return new (t || AcessoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)); };
AcessoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AcessoService, factory: AcessoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85410:
/*!******************************************************!*\
  !*** ./src/app/modules/log/api/historico.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoricoService": () => (/* binding */ HistoricoService)
/* harmony export */ });
/* harmony import */ var app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/base-resource.service */ 48280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class HistoricoService extends app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(injector) {
        super('/historicoslog', injector);
        this.injector = injector;
    }
}
HistoricoService.ɵfac = function HistoricoService_Factory(t) { return new (t || HistoricoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)); };
HistoricoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HistoricoService, factory: HistoricoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63670:
/*!*******************************************************************!*\
  !*** ./src/app/modules/log/containers/acesso/acesso.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcessoComponent": () => (/* binding */ AcessoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/containers/base-resource-list/base-resource-list.component */ 58);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_acesso_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/acesso.service */ 97225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/not-found-data/not-found-data.component */ 66714);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);










function AcessoComponent_div_3_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " C\u00F3digo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AcessoComponent_div_3_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r13.id, " ");
} }
function AcessoComponent_div_3_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data Acesso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AcessoComponent_div_3_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, row_r14.dataAcesso, "d/MM/Y"), " ");
} }
function AcessoComponent_div_3_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Usu\u00E1rio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AcessoComponent_div_3_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r15.usuarioNome, " ");
} }
function AcessoComponent_div_3_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " IP Origem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AcessoComponent_div_3_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r16.loginIp ? row_r16.loginIp : "0.0.0.0", " ");
} }
function AcessoComponent_div_3_mat_header_row_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
} }
function AcessoComponent_div_3_mat_row_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return ["id", "dataAcesso", "usuarioNome", "loginIp"]; };
function AcessoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "mat-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AcessoComponent_div_3_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AcessoComponent_div_3_mat_cell_4_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AcessoComponent_div_3_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AcessoComponent_div_3_mat_cell_7_Template, 3, 4, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AcessoComponent_div_3_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AcessoComponent_div_3_mat_cell_10_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AcessoComponent_div_3_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AcessoComponent_div_3_mat_cell_13_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AcessoComponent_div_3_mat_header_row_14_Template, 1, 0, "mat-header-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AcessoComponent_div_3_mat_row_15_Template, 1, 0, "mat-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.resources);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
} }
function AcessoComponent_app_not_found_data_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-not-found-data", 15);
} }
function AcessoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "mat-paginator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function AcessoComponent_div_5_Template_mat_paginator_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.paginacao($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r2.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", ctx_r2.pageSizeOptions);
} }
class AcessoComponent extends app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.BaseResourceListComponent {
    constructor(injector, acessoService) {
        super(injector, acessoService);
        this.injector = injector;
        this.acessoService = acessoService;
    }
}
AcessoComponent.ɵfac = function AcessoComponent_Factory(t) { return new (t || AcessoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_acesso_service__WEBPACK_IMPORTED_MODULE_1__.AcessoService)); };
AcessoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AcessoComponent, selectors: [["app-acesso"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 5, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden", "bg-card", "dark:bg-transparent"], ["cdkScrollable", "", 1, "flex", "flex-col", "flex-auto", "min-w-0", "overflow-y-auto"], ["page-title", "Logs Acesso", "placeholder-text", "Buscar por nome", 3, "show-button", "show-search", "pesquisar"], ["class", "flex flex-col flex-auto min-w-0 overflow-y-auto", "cdkScrollable", "", 4, "ngIf"], ["class", "h-full", "mensagem", "Nenhum registro de perfils encontrado!", 4, "ngIf"], ["class", "flex flex-0 flex-col", 4, "ngIf"], [3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "dataAcesso", 1, "cursor-pointer"], ["matColumnDef", "usuarioNome", 1, "cursor-pointer"], ["matColumnDef", "loginIp", 1, "cursor-pointer"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mensagem", "Nenhum registro de perfils encontrado!", 1, "h-full"], [1, "flex", "flex-0", "flex-col"], ["aria-label", "Select page", 1, "flex", "justify-end", "border-t", 3, "length", "pageSize", "pageSizeOptions", "page"]], template: function AcessoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pesquisar", function AcessoComponent_Template_app_page_header_pesquisar_2_listener($event) { return ctx.filtrarResource($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AcessoComponent_div_3_Template, 16, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AcessoComponent_app_not_found_data_4_Template, 1, 0, "app-not-found-data", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AcessoComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show-button", false)("show-search", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.CdkScrollable, _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundDataComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2Vzc28uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 89729:
/*!*************************************************************************!*\
  !*** ./src/app/modules/log/containers/historico/historico.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoricoComponent": () => (/* binding */ HistoricoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/containers/base-resource-list/base-resource-list.component */ 58);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_historico_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/historico.service */ 85410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/not-found-data/not-found-data.component */ 66714);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);










function HistoricoComponent_div_3_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " C\u00F3digo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HistoricoComponent_div_3_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r17.id, " ");
} }
function HistoricoComponent_div_3_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data Acesso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HistoricoComponent_div_3_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, row_r18.dataAcesso, "d/MM/Y"), " ");
} }
function HistoricoComponent_div_3_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Usu\u00E1rio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HistoricoComponent_div_3_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r19.usuarioNome, " ");
} }
function HistoricoComponent_div_3_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " IP Origem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HistoricoComponent_div_3_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r20.loginIp ? row_r20.loginIp : "0.0.0.0", " ");
} }
function HistoricoComponent_div_3_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Opera\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HistoricoComponent_div_3_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r21.operacao, " ");
} }
function HistoricoComponent_div_3_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Tabela ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function HistoricoComponent_div_3_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r22.tabela, " ");
} }
function HistoricoComponent_div_3_mat_header_row_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
} }
function HistoricoComponent_div_3_mat_row_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
} }
const _c0 = function () { return ["id", "dataAcesso", "usuarioNome", "loginIp", "operacao", "tabela"]; };
function HistoricoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "mat-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HistoricoComponent_div_3_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HistoricoComponent_div_3_mat_cell_4_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HistoricoComponent_div_3_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HistoricoComponent_div_3_mat_cell_7_Template, 3, 4, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, HistoricoComponent_div_3_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, HistoricoComponent_div_3_mat_cell_10_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, HistoricoComponent_div_3_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HistoricoComponent_div_3_mat_cell_13_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, HistoricoComponent_div_3_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, HistoricoComponent_div_3_mat_cell_16_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, HistoricoComponent_div_3_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, HistoricoComponent_div_3_mat_cell_19_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, HistoricoComponent_div_3_mat_header_row_20_Template, 1, 0, "mat-header-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, HistoricoComponent_div_3_mat_row_21_Template, 1, 0, "mat-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.resources);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
} }
function HistoricoComponent_app_not_found_data_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-not-found-data", 17);
} }
function HistoricoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "mat-paginator", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function HistoricoComponent_div_5_Template_mat_paginator_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.paginacao($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r2.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", ctx_r2.pageSizeOptions);
} }
class HistoricoComponent extends app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.BaseResourceListComponent {
    constructor(injector, historicoService) {
        super(injector, historicoService);
        this.injector = injector;
        this.historicoService = historicoService;
    }
}
HistoricoComponent.ɵfac = function HistoricoComponent_Factory(t) { return new (t || HistoricoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_historico_service__WEBPACK_IMPORTED_MODULE_1__.HistoricoService)); };
HistoricoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HistoricoComponent, selectors: [["app-historico"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 5, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden", "bg-card", "dark:bg-transparent"], ["cdkScrollable", "", 1, "flex", "flex-col", "flex-auto", "min-w-0", "overflow-y-auto"], ["page-title", "Hit\u00F3rico Usu\u00E1rio", "placeholder-text", "Buscar por nome", 3, "show-button", "show-search", "pesquisar"], ["class", "flex flex-col flex-auto min-w-0 overflow-y-auto", "cdkScrollable", "", 4, "ngIf"], ["class", "h-full", "mensagem", "Nenhum registro de perfils encontrado!", 4, "ngIf"], ["class", "flex flex-0 flex-col", 4, "ngIf"], [3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "dataAcesso", 1, "cursor-pointer"], ["matColumnDef", "usuarioNome", 1, "cursor-pointer"], ["matColumnDef", "loginIp", 1, "cursor-pointer"], ["matColumnDef", "operacao", 1, "cursor-pointer"], ["matColumnDef", "tabela", 1, "cursor-pointer"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mensagem", "Nenhum registro de perfils encontrado!", 1, "h-full"], [1, "flex", "flex-0", "flex-col"], ["aria-label", "Select page", 1, "flex", "justify-end", "border-t", 3, "length", "pageSize", "pageSizeOptions", "page"]], template: function HistoricoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pesquisar", function HistoricoComponent_Template_app_page_header_pesquisar_2_listener($event) { return ctx.filtrarResource($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HistoricoComponent_div_3_Template, 22, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HistoricoComponent_app_not_found_data_4_Template, 1, 0, "app-not-found-data", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HistoricoComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show-button", false)("show-search", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.CdkScrollable, _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundDataComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpY28uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 11710:
/*!*******************************************!*\
  !*** ./src/app/modules/log/log.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogModule": () => (/* binding */ LogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _containers_acesso_acesso_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/acesso/acesso.component */ 63670);
/* harmony import */ var _containers_historico_historico_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/historico/historico.component */ 89729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    { path: 'acesso', component: _containers_acesso_acesso_component__WEBPACK_IMPORTED_MODULE_1__.AcessoComponent },
    { path: 'historico', component: _containers_historico_historico_component__WEBPACK_IMPORTED_MODULE_2__.HistoricoComponent },
];
class LogModule {
}
LogModule.ɵfac = function LogModule_Factory(t) { return new (t || LogModule)(); };
LogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LogModule });
LogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LogModule, { declarations: [_containers_acesso_acesso_component__WEBPACK_IMPORTED_MODULE_1__.AcessoComponent, _containers_historico_historico_component__WEBPACK_IMPORTED_MODULE_2__.HistoricoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


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
//# sourceMappingURL=src_app_modules_log_log_module_ts.js.map