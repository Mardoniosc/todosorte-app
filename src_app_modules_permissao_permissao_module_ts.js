"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_permissao_permissao_module_ts"],{

/***/ 28198:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/permissao/containers/permissao-form/permissao-form.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissaoFormComponent": () => (/* binding */ PermissaoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_containers_base_resource_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/containers/base-resource-form */ 22320);
/* harmony import */ var _permissao_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../permissao.mode */ 24016);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastr */ 36545);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_permissao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/permissao.service */ 23574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _shared_components_form_field_error_form_field_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/form-field-error/form-field-error.component */ 5117);

















function PermissaoFormComponent_ng_container_20_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.descricao);
} }
function PermissaoFormComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PermissaoFormComponent_ng_container_20_mat_option_1_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r1.permissaoPai);
} }
class PermissaoFormComponent extends app_shared_containers_base_resource_form__WEBPACK_IMPORTED_MODULE_0__.BaseResourceFormComponent {
    constructor(permissaoService, injector) {
        super(injector, new _permissao_mode__WEBPACK_IMPORTED_MODULE_1__.Permissao(), permissaoService);
        this.permissaoService = permissaoService;
        this.injector = injector;
        this.permissoes = [];
    }
    ngOnInit() {
        super.ngOnInit();
        this.carregaPermissoes();
    }
    buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            descricao: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
            permissaoPai: [],
        });
    }
    carregaPermissoes() {
        const filtro = {
            filtro: '',
            pagina: 0,
            direcaoOrdenacao: 'DESC',
            tamanho: 100,
            ordenarPor: 'id',
        };
        this.permissaoService.getAll(filtro).subscribe((permissoes) => {
            this.permissoes = permissoes.content;
            this.resourceForm.patchValue({
                permissaoPai: this.resource?.permissaoPai?.id,
            });
        }, (err) => toastr__WEBPACK_IMPORTED_MODULE_2___default().error('Não foi possível carregar as permissões', err.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
    }
    createPageTitle() {
        return 'Cadastro de Novo Permissao';
    }
    editionPageTitle() {
        const permissaoNome = this.resource.descricao || '';
        return 'Editando permissão: ' + permissaoNome;
    }
}
PermissaoFormComponent.ɵfac = function PermissaoFormComponent_Factory(t) { return new (t || PermissaoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_permissao_service__WEBPACK_IMPORTED_MODULE_3__.PermissaoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector)); };
PermissaoFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PermissaoFormComponent, selectors: [["app-permissao-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 8, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "bg-card", "rounded-2xl", "shadow", "overflow-hidden"], [1, "m-4", 3, "formGroup"], [1, "w-full"], [1, "text-xl"], [1, "grid", "sm:grid-cols-4", "gap-6", "w-full", "mt-8"], [1, "sm:col-span-4"], [1, "fuse-mat-no-subscript", "w-full"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["id", "descricao_id", "matInput", "", "placeholder", "informa o descricao da perfil", 1, "uppercase", 3, "formControlName"], [3, "form-control"], ["id", "permissaoPai", "formControlName", "permissaoPai"], [4, "ngFor", "ngForOf"], [1, "mt-11", "mb-10", "border-t"], [1, "flex", "items-center", "justify-end"], ["routerLink", "/permissao", "routerLinkActive", "router-link-active"], ["mat-stroked-button", "", "type", "button", 1, "fuse-mat-button-rounded", "mat-flat-button", "mat-button-base"], ["mat-flat-button", "", "type", "button", 1, "ml-4", "fuse-mat-button-rounded", "mat-flat-button", "mat-button-base", "mat-primary", 3, "disabled", "click"], [3, "value", 4, "ngIf"], [3, "value"]], template: function PermissaoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "mat-form-field", 8)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "mat-icon", 9)(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-form-field-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 7)(16, "mat-form-field", 8)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Permiss\u00E3o Pai");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PermissaoFormComponent_ng_container_20_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 15)(24, "a", 16)(25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PermissaoFormComponent_Template_button_click_27_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.resourceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:view-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", "descricao");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form-control", ctx.resourceForm.get("descricao"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.permissoes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:document-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.resourceForm.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _shared_components_form_field_error_form_field_error_component__WEBPACK_IMPORTED_MODULE_4__.FormFieldErrorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXNzYW8tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 12628:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/permissao/containers/permissao-list/permissao-list.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissaoListComponent": () => (/* binding */ PermissaoListComponent)
/* harmony export */ });
/* harmony import */ var app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/containers/base-resource-list/base-resource-list.component */ 58);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_permissao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/permissao.service */ 23574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/not-found-data/not-found-data.component */ 66714);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);












function PermissaoListComponent_div_3_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " C\u00F3digo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PermissaoListComponent_div_3_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r13.id, " ");
} }
function PermissaoListComponent_div_3_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Descri\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PermissaoListComponent_div_3_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, row_r14.descricao), " ");
} }
function PermissaoListComponent_div_3_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Permiss\u00E3o Pai ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PermissaoListComponent_div_3_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r15.permissaoPai ? row_r15.permissaoPai.descricao : "-", " ");
} }
function PermissaoListComponent_div_3_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " A\u00E7\u00F5es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PermissaoListComponent_div_3_mat_cell_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0, "editar"]; };
function PermissaoListComponent_div_3_mat_cell_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, row_r16.id));
} }
function PermissaoListComponent_div_3_mat_cell_13_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissaoListComponent_div_3_mat_cell_13_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const row_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.excluir(row_r16)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PermissaoListComponent_div_3_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PermissaoListComponent_div_3_mat_cell_13_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PermissaoListComponent_div_3_mat_cell_13_span_2_Template, 2, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PermissaoListComponent_div_3_mat_cell_13_span_3_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r10.validaPermissao("MANTER_PERMISSAO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.validaPermissao("MANTER_PERMISSAO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.validaPermissao("MANTER_PERMISSAO"));
} }
function PermissaoListComponent_div_3_mat_header_row_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
} }
function PermissaoListComponent_div_3_mat_row_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
} }
const _c1 = function () { return ["id", "descricao", "permissaoPai", "acoes"]; };
function PermissaoListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "mat-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PermissaoListComponent_div_3_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PermissaoListComponent_div_3_mat_cell_4_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, PermissaoListComponent_div_3_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PermissaoListComponent_div_3_mat_cell_7_Template, 3, 3, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, PermissaoListComponent_div_3_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, PermissaoListComponent_div_3_mat_cell_10_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PermissaoListComponent_div_3_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, PermissaoListComponent_div_3_mat_cell_13_Template, 4, 3, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PermissaoListComponent_div_3_mat_header_row_14_Template, 1, 0, "mat-header-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, PermissaoListComponent_div_3_mat_row_15_Template, 1, 0, "mat-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.resources);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
} }
function PermissaoListComponent_app_not_found_data_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-not-found-data", 22);
} }
function PermissaoListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "mat-paginator", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function PermissaoListComponent_div_5_Template_mat_paginator_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.paginacao($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r2.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", ctx_r2.pageSizeOptions);
} }
class PermissaoListComponent extends app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.BaseResourceListComponent {
    constructor(injector, permissaoService) {
        super(injector, permissaoService);
        this.injector = injector;
        this.permissaoService = permissaoService;
    }
}
PermissaoListComponent.ɵfac = function PermissaoListComponent_Factory(t) { return new (t || PermissaoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_permissao_service__WEBPACK_IMPORTED_MODULE_1__.PermissaoService)); };
PermissaoListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PermissaoListComponent, selectors: [["app-permissao-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden", "bg-card", "dark:bg-transparent"], ["cdkScrollable", "", 1, "flex", "flex-col", "flex-auto", "min-w-0", "overflow-y-auto"], ["page-title", "Permiss\u00F5es", "placeholder-text", "Buscar por descricao", 3, "show-button", "pesquisar"], ["class", "flex flex-col flex-auto min-w-0 overflow-y-auto", "cdkScrollable", "", 4, "ngIf"], ["class", "h-full", "mensagem", "Nenhum registro de perfils encontrado!", 4, "ngIf"], ["class", "flex flex-0 flex-col", 4, "ngIf"], [3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "descricao", 1, "cursor-pointer"], ["matColumnDef", "permissaoPai", 1, "cursor-pointer"], ["matColumnDef", "acoes"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["class", "mr-2 cursor-pointer", 3, "routerLink", 4, "ngIf"], ["class", "cursor-pointer", 3, "click", 4, "ngIf"], [1, "mr-2", "cursor-pointer", 3, "routerLink"], ["svgIcon", "heroicons_outline:pencil-alt", 1, "text-accent", "dark:text-accent-300"], [1, "cursor-pointer", 3, "click"], ["svgIcon", "heroicons_outline:trash", 1, "text-warn-600"], ["mensagem", "Nenhum registro de perfils encontrado!", 1, "h-full"], [1, "flex", "flex-0", "flex-col"], ["aria-label", "Select page", 1, "flex", "justify-end", "border-t", 3, "length", "pageSize", "pageSizeOptions", "page"]], template: function PermissaoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pesquisar", function PermissaoListComponent_Template_app_page_header_pesquisar_2_listener($event) { return ctx.filtrarResource($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PermissaoListComponent_div_3_Template, 16, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PermissaoListComponent_app_not_found_data_4_Template, 1, 0, "app-not-found-data", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PermissaoListComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show-button", ctx.validaPermissao("MANTER_PERMISSAO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollable, _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundDataComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJtaXNzYW8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24016:
/*!*****************************************************!*\
  !*** ./src/app/modules/permissao/permissao.mode.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Permissao": () => (/* binding */ Permissao),
/* harmony export */   "PermissaoResponse": () => (/* binding */ PermissaoResponse)
/* harmony export */ });
/* harmony import */ var app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/models/base-resource.model */ 18550);

class Permissao extends app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_0__.BaseResourceModel {
    constructor(id, descricao, permissaoPai) {
        super();
        this.id = id;
        this.descricao = descricao;
        this.permissaoPai = permissaoPai;
    }
}
class PermissaoResponse {
    constructor(content, totalElements, size, numberOfElements) {
        this.content = content;
        this.totalElements = totalElements;
        this.size = size;
        this.numberOfElements = numberOfElements;
    }
}


/***/ }),

/***/ 65530:
/*!*******************************************************!*\
  !*** ./src/app/modules/permissao/permissao.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissaoModule": () => (/* binding */ PermissaoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _containers_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/permissao-form/permissao-form.component */ 28198);
/* harmony import */ var _containers_permissao_list_permissao_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/permissao-list/permissao-list.component */ 12628);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);







const routes = [
    { path: '', component: _containers_permissao_list_permissao_list_component__WEBPACK_IMPORTED_MODULE_1__.PermissaoListComponent },
    { path: 'novo', component: _containers_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_0__.PermissaoFormComponent },
    { path: ':id/editar', component: _containers_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_0__.PermissaoFormComponent },
];
class PermissaoModule {
}
PermissaoModule.ɵfac = function PermissaoModule_Factory(t) { return new (t || PermissaoModule)(); };
PermissaoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PermissaoModule });
PermissaoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PermissaoModule, { declarations: [_containers_permissao_form_permissao_form_component__WEBPACK_IMPORTED_MODULE_0__.PermissaoFormComponent, _containers_permissao_list_permissao_list_component__WEBPACK_IMPORTED_MODULE_1__.PermissaoListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_permissao_permissao_module_ts.js.map