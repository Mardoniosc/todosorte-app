"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_perfil_perfil_module_ts"],{

/***/ 32150:
/*!********************************************************************************!*\
  !*** ./src/app/modules/perfil/containers/perfil-form/perfil-form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilFormComponent": () => (/* binding */ PerfilFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models_perfil_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/perfil.model */ 97134);
/* harmony import */ var app_shared_containers_base_resource_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/containers/base-resource-form */ 22320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_perfil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/perfil.service */ 23627);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _shared_components_form_field_error_form_field_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/form-field-error/form-field-error.component */ 5117);













class PerfilFormComponent extends app_shared_containers_base_resource_form__WEBPACK_IMPORTED_MODULE_1__.BaseResourceFormComponent {
    constructor(perfilService, injector) {
        super(injector, new _models_perfil_model__WEBPACK_IMPORTED_MODULE_0__.Perfil(), perfilService);
        this.perfilService = perfilService;
        this.injector = injector;
    }
    buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
        });
    }
    createPageTitle() {
        return 'Cadastro de Novo Perfil';
    }
    editionPageTitle() {
        const perfilNome = this.resource.nome || '';
        return 'Editando perfil: ' + perfilNome;
    }
}
PerfilFormComponent.ɵfac = function PerfilFormComponent_Factory(t) { return new (t || PerfilFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_perfil_service__WEBPACK_IMPORTED_MODULE_2__.PerfilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector)); };
PerfilFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PerfilFormComponent, selectors: [["app-perfil-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 6, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "bg-card", "rounded-2xl", "shadow", "overflow-hidden"], [1, "m-4", 3, "formGroup"], [1, "w-full"], [1, "text-xl"], [1, "grid", "sm:grid-cols-4", "gap-6", "w-full", "mt-8"], [1, "sm:col-span-4"], [1, "fuse-mat-no-subscript", "w-full"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["id", "nome_id", "matInput", "", "placeholder", "informa o nome da perfil", 3, "formControlName"], [3, "form-control"], [1, "mt-11", "mb-10", "border-t"], [1, "flex", "items-center", "justify-end"], ["routerLink", "/perfil", "routerLinkActive", "router-link-active"], ["mat-stroked-button", "", "type", "button", 1, "fuse-mat-button-rounded", "mat-flat-button", "mat-button-base"], ["mat-flat-button", "", "type", "button", 1, "ml-4", "fuse-mat-button-rounded", "mat-flat-button", "mat-button-base", "mat-primary", 3, "disabled", "click"]], template: function PerfilFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "mat-form-field", 8)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Nome Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "mat-icon", 9)(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-form-field-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13)(17, "a", 14)(18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PerfilFormComponent_Template_button_click_20_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.resourceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:view-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", "nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form-control", ctx.resourceForm.get("nome"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.resourceForm.invalid);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _shared_components_form_field_error_form_field_error_component__WEBPACK_IMPORTED_MODULE_3__.FormFieldErrorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 56145:
/*!********************************************************************************!*\
  !*** ./src/app/modules/perfil/containers/perfil-list/perfil-list.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilListComponent": () => (/* binding */ PerfilListComponent)
/* harmony export */ });
/* harmony import */ var app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/containers/base-resource-list/base-resource-list.component */ 58);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_perfil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/perfil.service */ 23627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/not-found-data/not-found-data.component */ 66714);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);












function PerfilListComponent_div_3_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " C\u00F3digo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PerfilListComponent_div_3_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r11.id, " ");
} }
function PerfilListComponent_div_3_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PerfilListComponent_div_3_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r12.nome, " ");
} }
function PerfilListComponent_div_3_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " A\u00E7\u00F5es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PerfilListComponent_div_3_mat_cell_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0, "editar"]; };
function PerfilListComponent_div_3_mat_cell_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, row_r13.id));
} }
function PerfilListComponent_div_3_mat_cell_10_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PerfilListComponent_div_3_mat_cell_10_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const row_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.excluir(row_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PerfilListComponent_div_3_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PerfilListComponent_div_3_mat_cell_10_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PerfilListComponent_div_3_mat_cell_10_span_2_Template, 2, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PerfilListComponent_div_3_mat_cell_10_span_3_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.validaPermissao("MANTER_PERFIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.validaPermissao("MANTER_PERFIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.validaPermissao("MANTER_PERFIL"));
} }
function PerfilListComponent_div_3_mat_header_row_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
} }
function PerfilListComponent_div_3_mat_row_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
} }
const _c1 = function () { return ["id", "nome", "acoes"]; };
function PerfilListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "mat-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PerfilListComponent_div_3_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PerfilListComponent_div_3_mat_cell_4_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PerfilListComponent_div_3_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PerfilListComponent_div_3_mat_cell_7_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, PerfilListComponent_div_3_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, PerfilListComponent_div_3_mat_cell_10_Template, 4, 3, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PerfilListComponent_div_3_mat_header_row_11_Template, 1, 0, "mat-header-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PerfilListComponent_div_3_mat_row_12_Template, 1, 0, "mat-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.resources);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
} }
function PerfilListComponent_app_not_found_data_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-not-found-data", 21);
} }
function PerfilListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22)(1, "mat-paginator", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function PerfilListComponent_div_5_Template_mat_paginator_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.paginacao($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r2.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", ctx_r2.pageSizeOptions);
} }
class PerfilListComponent extends app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.BaseResourceListComponent {
    constructor(injector, perfilService) {
        super(injector, perfilService);
        this.injector = injector;
        this.perfilService = perfilService;
    }
}
PerfilListComponent.ɵfac = function PerfilListComponent_Factory(t) { return new (t || PerfilListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_perfil_service__WEBPACK_IMPORTED_MODULE_1__.PerfilService)); };
PerfilListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PerfilListComponent, selectors: [["app-perfil-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden", "bg-card", "dark:bg-transparent"], ["cdkScrollable", "", 1, "flex", "flex-col", "flex-auto", "min-w-0", "overflow-y-auto"], ["page-title", "Perfils", "placeholder-text", "Buscar por nome", 3, "show-button", "pesquisar"], ["class", "flex flex-col flex-auto min-w-0 overflow-y-auto", "cdkScrollable", "", 4, "ngIf"], ["class", "h-full", "mensagem", "Nenhum registro de perfils encontrado!", 4, "ngIf"], ["class", "flex flex-0 flex-col", 4, "ngIf"], [3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "nome", 1, "cursor-pointer"], ["matColumnDef", "acoes"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["class", "mr-2 cursor-pointer", 3, "routerLink", 4, "ngIf"], ["class", "cursor-pointer", 3, "click", 4, "ngIf"], [1, "mr-2", "cursor-pointer", 3, "routerLink"], ["svgIcon", "heroicons_outline:pencil-alt", 1, "text-accent", "dark:text-accent-300"], [1, "cursor-pointer", 3, "click"], ["svgIcon", "heroicons_outline:trash", 1, "text-warn-600"], ["mensagem", "Nenhum registro de perfils encontrado!", 1, "h-full"], [1, "flex", "flex-0", "flex-col"], ["aria-label", "Select page", 1, "flex", "justify-end", "border-t", 3, "length", "pageSize", "pageSizeOptions", "page"]], template: function PerfilListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pesquisar", function PerfilListComponent_Template_app_page_header_pesquisar_2_listener($event) { return ctx.filtrarResource($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PerfilListComponent_div_3_Template, 13, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PerfilListComponent_app_not_found_data_4_Template, 1, 0, "app-not-found-data", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PerfilListComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show-button", ctx.validaPermissao("MANTER_PERFIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollable, _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundDataComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 97134:
/*!*******************************************************!*\
  !*** ./src/app/modules/perfil/models/perfil.model.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Perfil": () => (/* binding */ Perfil),
/* harmony export */   "PerfilResponse": () => (/* binding */ PerfilResponse)
/* harmony export */ });
/* harmony import */ var app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/models/base-resource.model */ 18550);

class Perfil extends app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_0__.BaseResourceModel {
    constructor(id, nome) {
        super();
        this.id = id;
        this.nome = nome;
    }
}
class PerfilResponse {
    constructor(content, totalElements, size, numberOfElements) {
        this.content = content;
        this.totalElements = totalElements;
        this.size = size;
        this.numberOfElements = numberOfElements;
    }
}


/***/ }),

/***/ 63458:
/*!*************************************************!*\
  !*** ./src/app/modules/perfil/perfil.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilModule": () => (/* binding */ PerfilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _containers_perfil_list_perfil_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/perfil-list/perfil-list.component */ 56145);
/* harmony import */ var _containers_perfil_form_perfil_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/perfil-form/perfil-form.component */ 32150);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    { path: '', component: _containers_perfil_list_perfil_list_component__WEBPACK_IMPORTED_MODULE_0__.PerfilListComponent },
    { path: 'novo', component: _containers_perfil_form_perfil_form_component__WEBPACK_IMPORTED_MODULE_1__.PerfilFormComponent },
    { path: ':id/editar', component: _containers_perfil_form_perfil_form_component__WEBPACK_IMPORTED_MODULE_1__.PerfilFormComponent },
];
class PerfilModule {
}
PerfilModule.ɵfac = function PerfilModule_Factory(t) { return new (t || PerfilModule)(); };
PerfilModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PerfilModule });
PerfilModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PerfilModule, { declarations: [_containers_perfil_list_perfil_list_component__WEBPACK_IMPORTED_MODULE_0__.PerfilListComponent, _containers_perfil_form_perfil_form_component__WEBPACK_IMPORTED_MODULE_1__.PerfilFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_perfil_perfil_module_ts.js.map