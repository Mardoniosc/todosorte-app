"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_usuario_usuario_module_ts"],{

/***/ 87502:
/*!********************************************************!*\
  !*** ./src/app/modules/usuario/api/usuario.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/base-resource.service */ 48280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class UsuarioService extends app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(injector) {
        super('/usuarios', injector);
        this.injector = injector;
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)); };
UsuarioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97122:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/usuario/containers/usuario-form/usuario-form.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioFormComponent": () => (/* binding */ UsuarioFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_shared_containers_base_resource_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/containers/base-resource-form */ 22320);
/* harmony import */ var _model_usuario_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/usuario.model */ 68532);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toastr */ 36545);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/usuario.service */ 87502);
/* harmony import */ var app_modules_perfil_api_perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/perfil/api/perfil.service */ 23627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-mask */ 80446);




















function UsuarioFormComponent_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perfil_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", perfil_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](perfil_r2.nome);
} }
class UsuarioFormComponent extends app_shared_containers_base_resource_form__WEBPACK_IMPORTED_MODULE_0__.BaseResourceFormComponent {
    constructor(usuarioService, injector, perfilService) {
        super(injector, new _model_usuario_model__WEBPACK_IMPORTED_MODULE_1__.Usuario(), usuarioService);
        this.usuarioService = usuarioService;
        this.injector = injector;
        this.perfilService = perfilService;
        this.status = 0;
        this.perfils = [];
    }
    ngOnInit() {
        super.ngOnInit();
        setTimeout(() => {
            this.carregaPerfils();
        }, 500);
    }
    buildResourceForm() {
        this.resourceForm = this.formBuilder.group({
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            cpf: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(11)]],
            login: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            dataNascimento: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            status: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            perfilId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            senha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6)]],
            senhaConfirmacao: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), this.matchValidator('senha')],
            ],
        });
    }
    carregaPerfils() {
        const filtro = {
            filtro: '',
            pagina: 0,
            direcaoOrdenacao: 'DESC',
            tamanho: 100,
            ordenarPor: 'id',
        };
        this.perfilService.getAll(filtro).subscribe((perfils) => {
            this.perfils = perfils.content;
            this.resourceForm.patchValue({
                perfilId: this.resource?.perfil?.id,
            });
        }, (err) => toastr__WEBPACK_IMPORTED_MODULE_2___default().error('Não foi possível carregar os perfils', err.error.error, {
            timeOut: 10000,
            progressBar: true,
            closeButton: true,
        }));
    }
    createPageTitle() {
        return 'Cadastro de Novo Usuário';
    }
    editionPageTitle() {
        const usuarioNome = this.resource.nome || '';
        return 'Editando usuário: ' + usuarioNome;
    }
    matchValidator(matchTo, reverse) {
        return (control) => {
            if (control.parent && reverse) {
                const c = (control.parent?.controls)[matchTo];
                if (c) {
                    c.updateValueAndValidity();
                }
                return null;
            }
            return !!control.parent &&
                !!control.parent.value &&
                control.value === (control.parent?.controls)[matchTo].value
                ? null
                : { matching: true };
        };
    }
}
UsuarioFormComponent.ɵfac = function UsuarioFormComponent_Factory(t) { return new (t || UsuarioFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_modules_perfil_api_perfil_service__WEBPACK_IMPORTED_MODULE_4__.PerfilService)); };
UsuarioFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UsuarioFormComponent, selectors: [["app-usuario-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 75, vars: 9, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "bg-card", "rounded-2xl", "shadow", "overflow-hidden"], [1, "m-4", 3, "formGroup"], [1, "w-full"], [1, "text-xl"], [1, "flex", "flex-auto", "flex-wrap", "my-5"], [1, "flex", "flex-col", "w-full", "sm:pl-8"], [1, "flex"], [1, "w-2/3", "pr-2"], ["matPrefix", ""], ["svgIcon", "heroicons_outline:user"], ["id", "nome", "matInput", "", "formControlName", "nome"], [1, "w-1/3", "pl-2"], ["svgIcon", "heroicons_outline:user-circle"], ["id", "cpf-titular", "matInput", "", "mask", "000.000.000-00", "formControlName", "cpf"], [1, "w-1/3", "pr-2"], ["matInput", "", "formControlName", "dataNascimento", 3, "matDatepicker"], ["matPrefix", "", 3, "for"], ["data_nascimento", ""], [1, "w-1/3", "px-2"], ["svgIcon", "heroicons_outline:lock-closed"], ["id", "senha", "matInput", "", "type", "password", "formControlName", "senha"], ["id", "senha-confirmacao", "matInput", "", "type", "password", "formControlName", "senhaConfirmacao"], [1, "w-1/2", "pr-2"], ["id", "login", "matInput", "", "type", "text", "formControlName", "login"], [1, "w-1/2", "pl-2"], ["svgIcon", "heroicons_outline:mail"], ["id", "email", "type", "text", "matInput", "", "formControlName", "email"], ["id", "perfilId", "formControlName", "perfilId"], [3, "value", 4, "ngFor", "ngForOf"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], [1, "w-full", "pl-2", "flex", "flex-col", "mt-1", "ml-5"], ["color", "primary", "formControlName", "status", 1, "mt-3", 3, "ngModel", "ngModelChange"], [1, "mt-11", "mb-10", "border-t"], [1, "flex", "items-center", "justify-end"], ["routerLink", "/usuario", "routerLinkActive", "router-link-active"], ["mat-stroked-button", "", "type", "button", 1, "fuse-mat-button-rounded", "mat-flat-button", "mat-button-base"], ["mat-flat-button", "", "type", "button", 1, "ml-4", "fuse-mat-button-rounded", "mat-flat-button", "mat-button-base", "mat-primary", 3, "disabled", "click"], [3, "value"]], template: function UsuarioFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "mat-form-field", 9)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 13)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "CPF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8)(23, "mat-form-field", 16)(24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Data Nascimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 17)(27, "mat-datepicker-toggle", 18)(28, "mat-datepicker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 20)(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-form-field", 16)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Confirma\u00E7\u00E3o de Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 8)(43, "mat-form-field", 24)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-form-field", 26)(50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 8)(56, "mat-form-field", 9)(57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, UsuarioFormComponent_mat_option_60_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 13)(63, "div", 32)(64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-slide-toggle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UsuarioFormComponent_Template_mat_slide_toggle_ngModelChange_66_listener($event) { return ctx.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 35)(70, "a", 36)(71, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UsuarioFormComponent_Template_button_click_73_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " Salvar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.resourceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.perfils);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:document-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.status ? "Ativado" : "Desativado", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.resourceForm.invalid);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, ngx_mask__WEBPACK_IMPORTED_MODULE_17__.MaskDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3VhcmlvLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 68233:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/usuario/containers/usuario-list/usuario-list.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioListComponent": () => (/* binding */ UsuarioListComponent)
/* harmony export */ });
/* harmony import */ var app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/containers/base-resource-list/base-resource-list.component */ 58);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/usuario.service */ 87502);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/not-found-data/not-found-data.component */ 66714);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);












function UsuarioListComponent_div_3_mat_header_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " C\u00F3digo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UsuarioListComponent_div_3_mat_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r17.id, " ");
} }
function UsuarioListComponent_div_3_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UsuarioListComponent_div_3_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r18.nome, " ");
} }
function UsuarioListComponent_div_3_mat_header_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UsuarioListComponent_div_3_mat_cell_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r19.email, " ");
} }
function UsuarioListComponent_div_3_mat_header_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " data Nascimento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UsuarioListComponent_div_3_mat_cell_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, row_r20.dataNascimento, "d/MM/Y"), " ");
} }
function UsuarioListComponent_div_3_mat_header_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "bg-blue-200 text-blue-800 dark:bg-blue-600 dark:text-blue-50": a0, "bg-rose-200 text-rose-800 dark:bg-rose-600 dark:text-rose-50": a1 }; };
function UsuarioListComponent_div_3_mat_cell_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell")(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](2, _c0, row_r21.status, !row_r21.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r21.status ? "Ativado" : "Desativado", " ");
} }
function UsuarioListComponent_div_3_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " A\u00E7\u00F5es ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UsuarioListComponent_div_3_mat_cell_19_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return [a0, "editar"]; };
function UsuarioListComponent_div_3_mat_cell_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, row_r22.id));
} }
function UsuarioListComponent_div_3_mat_cell_19_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsuarioListComponent_div_3_mat_cell_19_span_3_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const row_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.excluir(row_r22)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function UsuarioListComponent_div_3_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UsuarioListComponent_div_3_mat_cell_19_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UsuarioListComponent_div_3_mat_cell_19_span_2_Template, 2, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, UsuarioListComponent_div_3_mat_cell_19_span_3_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r14.validaPermissao("MANTER_USUARIO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.validaPermissao("MANTER_USUARIO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.validaPermissao("MANTER_USUARIO"));
} }
function UsuarioListComponent_div_3_mat_header_row_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-header-row");
} }
function UsuarioListComponent_div_3_mat_row_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-row");
} }
const _c2 = function () { return ["id", "nome", "email", "dataNascimento", "status", "acoes"]; };
function UsuarioListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "mat-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, UsuarioListComponent_div_3_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UsuarioListComponent_div_3_mat_cell_4_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, UsuarioListComponent_div_3_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, UsuarioListComponent_div_3_mat_cell_7_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, UsuarioListComponent_div_3_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, UsuarioListComponent_div_3_mat_cell_10_Template, 2, 1, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, UsuarioListComponent_div_3_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UsuarioListComponent_div_3_mat_cell_13_Template, 3, 4, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, UsuarioListComponent_div_3_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, UsuarioListComponent_div_3_mat_cell_16_Template, 3, 5, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, UsuarioListComponent_div_3_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, UsuarioListComponent_div_3_mat_cell_19_Template, 4, 3, "mat-cell", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, UsuarioListComponent_div_3_mat_header_row_20_Template, 1, 0, "mat-header-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UsuarioListComponent_div_3_mat_row_21_Template, 1, 0, "mat-row", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.resources);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2));
} }
function UsuarioListComponent_app_not_found_data_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-not-found-data", 25);
} }
function UsuarioListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "mat-paginator", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function UsuarioListComponent_div_5_Template_mat_paginator_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.paginacao($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r2.length)("pageSize", ctx_r2.pageSize)("pageSizeOptions", ctx_r2.pageSizeOptions);
} }
class UsuarioListComponent extends app_shared_containers_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_0__.BaseResourceListComponent {
    constructor(injector, usuarioService) {
        super(injector, usuarioService);
        this.injector = injector;
        this.usuarioService = usuarioService;
    }
}
UsuarioListComponent.ɵfac = function UsuarioListComponent_Factory(t) { return new (t || UsuarioListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
UsuarioListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UsuarioListComponent, selectors: [["app-usuario-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-hidden", "bg-card", "dark:bg-transparent"], ["cdkScrollable", "", 1, "flex", "flex-col", "flex-auto", "min-w-0", "overflow-y-auto"], ["page-title", "Usu\u00E1rios", "placeholder-text", "Buscar por nome", 3, "show-button", "pesquisar"], ["class", "flex flex-col flex-auto min-w-0 overflow-y-auto", "cdkScrollable", "", 4, "ngIf"], ["class", "h-full", "mensagem", "Nenhum registro de usu\u00E1rios encontrado!", 4, "ngIf"], ["class", "flex flex-0 flex-col", 4, "ngIf"], [3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "nome", 1, "cursor-pointer"], ["matColumnDef", "email", 1, "cursor-pointer"], ["matColumnDef", "dataNascimento", 1, "cursor-pointer"], ["matColumnDef", "status", 1, "cursor-pointer"], ["matColumnDef", "acoes"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "font-bold", "text-sm", "px-2.5", "py-0.5", "rounded-full", 3, "ngClass"], [4, "ngIf"], ["class", "mr-2 cursor-pointer", 3, "routerLink", 4, "ngIf"], ["class", "cursor-pointer", 3, "click", 4, "ngIf"], [1, "mr-2", "cursor-pointer", 3, "routerLink"], ["svgIcon", "heroicons_outline:pencil-alt", 1, "text-accent", "dark:text-accent-300"], [1, "cursor-pointer", 3, "click"], ["svgIcon", "heroicons_outline:trash", 1, "text-warn-600"], ["mensagem", "Nenhum registro de usu\u00E1rios encontrado!", 1, "h-full"], [1, "flex", "flex-0", "flex-col"], ["aria-label", "Select page", 1, "flex", "justify-end", "border-t", 3, "length", "pageSize", "pageSizeOptions", "page"]], template: function UsuarioListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pesquisar", function UsuarioListComponent_Template_app_page_header_pesquisar_2_listener($event) { return ctx.filtrarResource($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, UsuarioListComponent_div_3_Template, 22, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UsuarioListComponent_app_not_found_data_4_Template, 1, 0, "app-not-found-data", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, UsuarioListComponent_div_5_Template, 2, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("show-button", ctx.validaPermissao("MANTER_USUARIO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.length > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollable, _shared_components_not_found_data_not_found_data_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundDataComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3VhcmlvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 68532:
/*!********************************************************!*\
  !*** ./src/app/modules/usuario/model/usuario.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usuario": () => (/* binding */ Usuario),
/* harmony export */   "UsuarioResponse": () => (/* binding */ UsuarioResponse)
/* harmony export */ });
/* harmony import */ var app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/models/base-resource.model */ 18550);

class Usuario extends app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_0__.BaseResourceModel {
    constructor(id, nome, email, senha, cpf, login, dataNascimento, imagem, status, perfilId, perfil) {
        super();
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.login = login;
        this.dataNascimento = dataNascimento;
        this.imagem = imagem;
        this.status = status;
        this.perfilId = perfilId;
        this.perfil = perfil;
    }
}
class UsuarioResponse {
    constructor(content, totalElements, size, numberOfElements) {
        this.content = content;
        this.totalElements = totalElements;
        this.size = size;
        this.numberOfElements = numberOfElements;
    }
}


/***/ }),

/***/ 57240:
/*!***************************************************!*\
  !*** ./src/app/modules/usuario/usuario.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MY_DATE_FORMATS": () => (/* binding */ MY_DATE_FORMATS),
/* harmony export */   "UsuarioModule": () => (/* binding */ UsuarioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _containers_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/usuario-list/usuario-list.component */ 68233);
/* harmony import */ var _containers_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/usuario-form/usuario-form.component */ 97122);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 80446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);










const routes = [
    { path: '', component: _containers_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_0__.UsuarioListComponent },
    { path: 'novo', component: _containers_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_1__.UsuarioFormComponent },
    { path: ':id/editar', component: _containers_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_1__.UsuarioFormComponent },
];
const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class UsuarioModule {
}
UsuarioModule.ɵfac = function UsuarioModule_Factory(t) { return new (t || UsuarioModule)(); };
UsuarioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UsuarioModule });
UsuarioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UsuarioModule, { declarations: [_containers_usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_0__.UsuarioListComponent, _containers_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_1__.UsuarioFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule] }); })();


/***/ }),

/***/ 80446:
/*!*****************************************************!*\
  !*** ./node_modules/ngx-mask/fesm2020/ngx-mask.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_CONFIG": () => (/* binding */ INITIAL_CONFIG),
/* harmony export */   "MaskApplierService": () => (/* binding */ MaskApplierService),
/* harmony export */   "MaskDirective": () => (/* binding */ MaskDirective),
/* harmony export */   "MaskPipe": () => (/* binding */ MaskPipe),
/* harmony export */   "MaskService": () => (/* binding */ MaskService),
/* harmony export */   "NEW_CONFIG": () => (/* binding */ NEW_CONFIG),
/* harmony export */   "NgxMaskModule": () => (/* binding */ NgxMaskModule),
/* harmony export */   "_configFactory": () => (/* binding */ _configFactory),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "initialConfig": () => (/* binding */ initialConfig),
/* harmony export */   "timeMasks": () => (/* binding */ timeMasks),
/* harmony export */   "withoutValidation": () => (/* binding */ withoutValidation)
/* harmony export */ });
/* harmony import */ var _home_geia_Documentos_Loterias_Mardonio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);





const config = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('ngx-mask config');
const NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('new ngx-mask config');
const INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('initial ngx-mask config');
const initialConfig = {
  suffix: '',
  prefix: '',
  thousandSeparator: ' ',
  decimalMarker: ['.', ','],
  clearIfNotMatch: false,
  showTemplate: false,
  showMaskTyped: false,
  placeHolderCharacter: '_',
  dropSpecialCharacters: true,
  hiddenInput: undefined,
  shownMaskExpression: '',
  separatorLimit: '',
  allowNegativeNumbers: false,
  validation: true,
  // eslint-disable-next-line @typescript-eslint/quotes
  specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
  leadZeroDateTime: false,
  triggerOnMaskChange: false,
  maskFilled: new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(),
  patterns: {
    '0': {
      pattern: new RegExp('\\d')
    },
    '9': {
      pattern: new RegExp('\\d'),
      optional: true
    },
    X: {
      pattern: new RegExp('\\d'),
      symbol: '*'
    },
    A: {
      pattern: new RegExp('[a-zA-Z0-9]')
    },
    S: {
      pattern: new RegExp('[a-zA-Z]')
    },
    U: {
      pattern: new RegExp('[A-Z]')
    },
    L: {
      pattern: new RegExp('[a-z]')
    },
    d: {
      pattern: new RegExp('\\d')
    },
    m: {
      pattern: new RegExp('\\d')
    },
    M: {
      pattern: new RegExp('\\d')
    },
    H: {
      pattern: new RegExp('\\d')
    },
    h: {
      pattern: new RegExp('\\d')
    },
    s: {
      pattern: new RegExp('\\d')
    }
  }
};
const timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
const withoutValidation = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'];
class MaskApplierService {
  constructor(_config) {
    this._config = _config;
    this.maskExpression = '';
    this.actualValue = '';
    this.shownMaskExpression = '';
    this._formatWithSeparators = (str, thousandSeparatorChar, decimalChars, precision) => {
      let x = [];
      let decimalChar = '';
      if (Array.isArray(decimalChars)) {
        const regExp = new RegExp(decimalChars.map(v => '[\\^$.|?*+()'.indexOf(v) >= 0 ? `\\${v}` : v).join('|'));
        x = str.split(regExp);
        decimalChar = str.match(regExp)?.[0] ?? '';
      } else {
        x = str.split(decimalChars);
        decimalChar = decimalChars;
      }
      const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : '';
      let res = x[0] ?? '';
      const separatorLimit = this.separatorLimit.replace(/\s/g, '');
      if (separatorLimit && +separatorLimit) {
        if (res[0] === '-') {
          res = `-${res.slice(1, res.length).slice(0, separatorLimit.length)}`;
        } else {
          res = res.slice(0, separatorLimit.length);
        }
      }
      const rgx = /(\d+)(\d{3})/;
      while (thousandSeparatorChar && rgx.test(res)) {
        res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
      }
      if (precision === undefined) {
        return res + decimals;
      } else if (precision === 0) {
        return res;
      }
      return res + decimals.substring(0, precision + 1);
    };
    this.percentage = str => {
      return Number(str) >= 0 && Number(str) <= 100;
    };
    this.getPrecision = maskExpression => {
      const x = maskExpression.split('.');
      if (x.length > 1) {
        return Number(x[x.length - 1]);
      }
      return Infinity;
    };
    this.checkAndRemoveSuffix = inputValue => {
      for (let i = this.suffix?.length - 1; i >= 0; i--) {
        const substr = this.suffix.substring(i, this.suffix?.length);
        if (inputValue.includes(substr) && i !== this.suffix?.length - 1 && (i - 1 < 0 || !inputValue.includes(this.suffix.substring(i - 1, this.suffix?.length)))) {
          return inputValue.replace(substr, '');
        }
      }
      return inputValue;
    };
    this.checkInputPrecision = (inputValue, precision, decimalMarker) => {
      if (precision < Infinity) {
        // TODO need think about decimalMarker
        if (Array.isArray(decimalMarker)) {
          const marker = decimalMarker.find(dm => dm !== this.thousandSeparator);
          // eslint-disable-next-line no-param-reassign
          decimalMarker = marker ? marker : decimalMarker[0];
        }
        const precisionRegEx = new RegExp(this._charToRegExpExpression(decimalMarker) + `\\d{${precision}}.*$`);
        const precisionMatch = inputValue.match(precisionRegEx) ?? [];
        const precisionMatchLength = precisionMatch[0]?.length ?? 0;
        if (precisionMatchLength - 1 > precision) {
          const diff = precisionMatchLength - 1 - precision;
          // eslint-disable-next-line no-param-reassign
          inputValue = inputValue.substring(0, inputValue.length - diff);
        }
        if (precision === 0 && this._compareOrIncludes(inputValue[inputValue.length - 1], decimalMarker, this.thousandSeparator)) {
          // eslint-disable-next-line no-param-reassign
          inputValue = inputValue.substring(0, inputValue.length - 1);
        }
      }
      return inputValue;
    };
    this._shift = new Set();
    this.clearIfNotMatch = this._config.clearIfNotMatch;
    this.dropSpecialCharacters = this._config.dropSpecialCharacters;
    this.maskSpecialCharacters = this._config.specialCharacters;
    this.maskAvailablePatterns = this._config.patterns;
    this.prefix = this._config.prefix;
    this.suffix = this._config.suffix;
    this.thousandSeparator = this._config.thousandSeparator;
    this.decimalMarker = this._config.decimalMarker;
    this.hiddenInput = this._config.hiddenInput;
    this.showMaskTyped = this._config.showMaskTyped;
    this.placeHolderCharacter = this._config.placeHolderCharacter;
    this.validation = this._config.validation;
    this.separatorLimit = this._config.separatorLimit;
    this.allowNegativeNumbers = this._config.allowNegativeNumbers;
    this.leadZeroDateTime = this._config.leadZeroDateTime;
  }
  applyMaskWithPattern(inputValue, maskAndPattern) {
    const [mask, customPattern] = maskAndPattern;
    this.customPattern = customPattern;
    return this.applyMask(inputValue, mask);
  }
  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    if (!maskExpression || typeof inputValue !== 'string') {
      return '';
    }
    let cursor = 0;
    let result = '';
    let multi = false;
    let backspaceShift = false;
    let shift = 1;
    let stepBack = false;
    if (inputValue.slice(0, this.prefix.length) === this.prefix) {
      // eslint-disable-next-line no-param-reassign
      inputValue = inputValue.slice(this.prefix.length, inputValue.length);
    }
    if (!!this.suffix && inputValue?.length > 0) {
      // eslint-disable-next-line no-param-reassign
      inputValue = this.checkAndRemoveSuffix(inputValue);
    }
    const inputArray = inputValue.toString().split('');
    if (maskExpression === 'IP') {
      const valuesIP = inputValue.split('.');
      this.ipError = this._validIP(valuesIP);
      // eslint-disable-next-line no-param-reassign
      maskExpression = '099.099.099.099';
    }
    const arr = [];
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i]?.match('\\d')) {
        arr.push(inputValue[i] ?? '');
      }
    }
    if (maskExpression === 'CPF_CNPJ') {
      this.cpfCnpjError = arr.length !== 11 && arr.length !== 14;
      if (arr.length > 11) {
        // eslint-disable-next-line no-param-reassign
        maskExpression = '00.000.000/0000-00';
      } else {
        // eslint-disable-next-line no-param-reassign
        maskExpression = '000.000.000-00';
      }
    }
    if (maskExpression.startsWith('percent')) {
      if (inputValue.match('[a-z]|[A-Z]') ||
      // eslint-disable-next-line no-useless-escape
      inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._stripToDecimal(inputValue);
        const precision = this.getPrecision(maskExpression);
        // eslint-disable-next-line no-param-reassign
        inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      }
      if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
        const base = inputValue.substring(0, inputValue.indexOf('.') - 1);
        // eslint-disable-next-line no-param-reassign
        inputValue = `${base}${inputValue.substring(inputValue.indexOf('.'), inputValue.length)}`;
      }
      if (this.percentage(inputValue)) {
        result = inputValue;
      } else {
        result = inputValue.substring(0, inputValue.length - 1);
      }
    } else if (maskExpression.startsWith('separator')) {
      if (inputValue.match('[wа-яА-Я]') || inputValue.match('[ЁёА-я]') || inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\]:";<>.?/]/) || inputValue.match('[^A-Za-z0-9,]')) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._stripToDecimal(inputValue);
      }
      // eslint-disable-next-line no-param-reassign
      inputValue = inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.thousandSeparator && !this._compareOrIncludes(inputValue[1], this.decimalMarker, this.thousandSeparator) && !backspaced ? inputValue.slice(0, inputValue.length - 1) : inputValue;
      if (backspaced) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._compareOrIncludes(inputValue[inputValue.length - 1], this.decimalMarker, this.thousandSeparator) ? inputValue.slice(0, inputValue.length - 1) : inputValue;
      }
      // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
      //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK
      const thousandSeparatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);
      let invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(thousandSeparatorCharEscaped, '');
      //.replace(decimalMarkerEscaped, '');
      if (Array.isArray(this.decimalMarker)) {
        for (const marker of this.decimalMarker) {
          invalidChars = invalidChars.replace(this._charToRegExpExpression(marker), '');
        }
      } else {
        invalidChars = invalidChars.replace(this._charToRegExpExpression(this.decimalMarker), '');
      }
      const invalidCharRegexp = new RegExp('[' + invalidChars + ']');
      if (inputValue.match(invalidCharRegexp) || inputValue.length === 1 && this._compareOrIncludes(inputValue, this.decimalMarker, this.thousandSeparator)) {
        // eslint-disable-next-line no-param-reassign
        inputValue = inputValue.substring(0, inputValue.length - 1);
      }
      const precision = this.getPrecision(maskExpression);
      // eslint-disable-next-line no-param-reassign
      inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      const strForSep = inputValue.replace(new RegExp(thousandSeparatorCharEscaped, 'g'), '');
      result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
      const commaShift = result.indexOf(',') - inputValue.indexOf(',');
      const shiftStep = result.length - inputValue.length;
      if (shiftStep > 0 && result[position] !== ',') {
        backspaceShift = true;
        let _shift = 0;
        do {
          this._shift.add(position + _shift);
          _shift++;
        } while (_shift < shiftStep);
      } else if (commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3) || !(result.indexOf('.') >= position && position > 3) && shiftStep <= 0) {
        this._shift.clear();
        backspaceShift = true;
        shift = shiftStep;
        // eslint-disable-next-line no-param-reassign
        position += shiftStep;
        this._shift.add(position);
      } else {
        this._shift.clear();
      }
    } else {
      for (
      // eslint-disable-next-line
      let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i] ?? '') {
        if (cursor === maskExpression.length) {
          break;
        }
        if (this._checkSymbolMask(inputSymbol, maskExpression[cursor] ?? '') && maskExpression[cursor + 1] === '?') {
          result += inputSymbol;
          cursor += 2;
        } else if (maskExpression[cursor + 1] === '*' && multi && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2] ?? '')) {
          result += inputSymbol;
          cursor += 3;
          multi = false;
        } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor] ?? '') && maskExpression[cursor + 1] === '*') {
          result += inputSymbol;
          multi = true;
        } else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2] ?? '')) {
          result += inputSymbol;
          cursor += 3;
        } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor] ?? '')) {
          if (maskExpression[cursor] === 'H') {
            if (Number(inputSymbol) > 2) {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          if (maskExpression[cursor] === 'h') {
            if (result === '2' && Number(inputSymbol) > 3) {
              cursor += 1;
              i--;
              continue;
            }
          }
          if (maskExpression[cursor] === 'm') {
            if (Number(inputSymbol) > 5) {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          if (maskExpression[cursor] === 's') {
            if (Number(inputSymbol) > 5) {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          const daysCount = 31;
          if (maskExpression[cursor] === 'd') {
            if (Number(inputSymbol) > 3 && this.leadZeroDateTime || Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          if (maskExpression[cursor] === 'M') {
            const monthsCount = 12;
            // mask without day
            const withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/');
            // day<10 && month<12 for input
            const day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') && (inputValue[cursor - 2] === '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/' || inputValue[cursor] === '/' || inputValue[cursor - 3] === '/' && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/' || inputValue[cursor - 1] === '/');
            // 10<day<31 && month<12 for input
            const day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] === '/' && (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/');
            // day<10 && month<12 for paste whole data
            const day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && !inputValue.slice(cursor - 2, cursor).includes('/') && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount;
            // 10<day<31 && month<12 for paste whole data
            const day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] !== '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;
            if (Number(inputSymbol) > 1 && this.leadZeroDateTime || withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          result += inputSymbol;
          cursor++;
        } else if (inputSymbol === ' ' && maskExpression[cursor] === ' ') {
          result += inputSymbol;
          cursor++;
        } else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor] ?? '') !== -1) {
          result += maskExpression[cursor];
          cursor++;
          this._shiftStep(maskExpression, cursor, inputArray.length);
          i--;
        } else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 && this.maskAvailablePatterns[maskExpression[cursor] ?? ''] && this.maskAvailablePatterns[maskExpression[cursor] ?? '']?.optional) {
          if (!!inputArray[cursor] && maskExpression !== '099.099.099.099' && maskExpression !== '000.000.000-00' && maskExpression !== '00.000.000/0000-00' && !maskExpression.match(/^9+\.0+$/)) {
            result += inputArray[cursor];
          }
          cursor++;
          i--;
        } else if (this.maskExpression[cursor + 1] === '*' && this._findSpecialChar(this.maskExpression[cursor + 2] ?? '') && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.maskExpression[cursor + 1] === '?' && this._findSpecialChar(this.maskExpression[cursor + 2] ?? '') && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
          stepBack = true;
        }
      }
    }
    if (result.length + 1 === maskExpression.length && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1] ?? '') !== -1) {
      result += maskExpression[maskExpression.length - 1];
    }
    let newPosition = position + 1;
    while (this._shift.has(newPosition)) {
      shift++;
      newPosition++;
    }
    let actualShift = justPasted && !maskExpression.startsWith('separator') ? cursor : this._shift.has(position) ? shift : 0;
    if (stepBack) {
      actualShift--;
    }
    cb(actualShift, backspaceShift);
    if (shift < 0) {
      this._shift.clear();
    }
    let onlySpecial = false;
    if (backspaced) {
      onlySpecial = inputArray.every(char => this.maskSpecialCharacters.includes(char));
    }
    let res = `${this.prefix}${onlySpecial ? '' : result}${this.suffix}`;
    if (result.length === 0) {
      res = `${this.prefix}${result}`;
    }
    return res;
  }
  _findSpecialChar(inputSymbol) {
    return this.maskSpecialCharacters.find(val => val === inputSymbol);
  }
  _checkSymbolMask(inputSymbol, maskSymbol) {
    this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
    return (this.maskAvailablePatterns[maskSymbol]?.pattern && this.maskAvailablePatterns[maskSymbol]?.pattern.test(inputSymbol)) ?? false;
  }
  _stripToDecimal(str) {
    return str.split('').filter((i, idx) => {
      const isDecimalMarker = typeof this.decimalMarker === 'string' ? i === this.decimalMarker :
      // TODO (inepipenko) use utility type
      this.decimalMarker.includes(i);
      return i.match('^-?\\d') || i === this.thousandSeparator || isDecimalMarker || i === '-' && idx === 0 && this.allowNegativeNumbers;
    }).join('');
  }
  _charToRegExpExpression(char) {
    // if (Array.isArray(char)) {
    // 	return char.map((v) => ('[\\^$.|?*+()'.indexOf(v) >= 0 ? `\\${v}` : v)).join('|');
    // }
    if (char) {
      const charsToEscape = '[\\^$.|?*+()';
      return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? `\\${char}` : char;
    }
    return char;
  }
  _shiftStep(maskExpression, cursor, inputLength) {
    const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputLength : cursor;
    this._shift.add(shiftStep + this.prefix.length || 0);
  }
  _compareOrIncludes(value, comparedValue, excludedValue) {
    return Array.isArray(comparedValue) ? comparedValue.filter(v => v !== excludedValue).includes(value) : value === comparedValue;
  }
  _validIP(valuesIP) {
    return !(valuesIP.length === 4 && !valuesIP.some((value, index) => {
      if (valuesIP.length !== index + 1) {
        return value === '' || Number(value) > 255;
      }
      return value === '' || Number(value.substring(0, 3)) > 255;
    }));
  }
}
MaskApplierService.ɵfac = function MaskApplierService_Factory(t) {
  return new (t || MaskApplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](config));
};
MaskApplierService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MaskApplierService,
  factory: MaskApplierService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaskApplierService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [config]
      }]
    }];
  }, null);
})();
class MaskService extends MaskApplierService {
  constructor(document, _config, _elementRef, _renderer) {
    super(_config);
    this.document = document;
    this._config = _config;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.maskExpression = '';
    this.isNumberValue = false;
    this.placeHolderCharacter = '_';
    this.maskIsShown = '';
    this.selStart = null;
    this.selEnd = null;
    /**
     * Whether we are currently in writeValue function, in this case when applying the mask we don't want to trigger onChange function,
     * since writeValue should be a one way only process of writing the DOM value based on the Angular model value.
     */
    this.writingValue = false;
    this.maskChanged = false;
    this.triggerOnMaskChange = false;
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
    this.onChange = _ => {};
  }
  // eslint-disable-next-line complexity
  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    if (!maskExpression) {
      return inputValue !== this.actualValue ? this.actualValue : inputValue;
    }
    this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
    if (this.maskExpression === 'IP' && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || '#');
    }
    if (this.maskExpression === 'CPF_CNPJ' && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || '#');
    }
    if (!inputValue && this.showMaskTyped) {
      this.formControlResult(this.prefix);
      return this.prefix + this.maskIsShown;
    }
    const getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] ?? '' : '';
    let newInputValue = '';
    if (this.hiddenInput !== undefined && !this.writingValue) {
      let actualResult = this.actualValue.split('');
      // eslint-disable  @typescript-eslint/no-unused-expressions
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      inputValue !== '' && actualResult.length ? typeof this.selStart === 'number' && typeof this.selEnd === 'number' ? inputValue.length > actualResult.length ? actualResult.splice(this.selStart, 0, getSymbol) : inputValue.length < actualResult.length ? actualResult.length - inputValue.length === 1 ? actualResult.splice(this.selStart - 1, 1) : actualResult.splice(this.selStart, this.selEnd - this.selStart) : null : null : actualResult = [];
      if (this.showMaskTyped) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this.removeMask(inputValue);
      }
      // eslint-enable  @typescript-eslint/no-unused-expressions
      newInputValue = this.actualValue.length && actualResult.length <= inputValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
    }
    if (this.showMaskTyped) {
      // eslint-disable-next-line no-param-reassign
      inputValue = this.removeMask(inputValue);
    }
    newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
    const result = super.applyMask(newInputValue, maskExpression, position, justPasted, backspaced, cb);
    this.actualValue = this.getActualValue(result);
    // handle some separator implications:
    // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot
    if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
      this.decimalMarker = ',';
    }
    // b) remove decimal marker from list of special characters to mask
    if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
      this.maskSpecialCharacters = this.maskSpecialCharacters.filter(item => !this._compareOrIncludes(item, this.decimalMarker, this.thousandSeparator) //item !== this.decimalMarker, // !
      );
    }

    this.formControlResult(result);
    if (!this.showMaskTyped) {
      if (this.hiddenInput) {
        return result && result.length ? this.hideInput(result, this.maskExpression) : result;
      }
      return result;
    }
    const resLen = result.length;
    const prefNmask = this.prefix + this.maskIsShown;
    if (this.maskExpression.includes('H')) {
      const countSkipedSymbol = this._numberSkipedSymbols(result);
      return result + prefNmask.slice(resLen + countSkipedSymbol);
    } else if (this.maskExpression === 'IP' || this.maskExpression === 'CPF_CNPJ') {
      return result + prefNmask;
    }
    return result + prefNmask.slice(resLen);
  }
  // get the number of characters that were shifted
  _numberSkipedSymbols(value) {
    const regex = /(^|\D)(\d\D)/g;
    let match = regex.exec(value);
    let countSkipedSymbol = 0;
    while (match != null) {
      countSkipedSymbol += 1;
      match = regex.exec(value);
    }
    return countSkipedSymbol;
  }
  applyValueChanges(position, justPasted, backspaced,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    const formElement = this._elementRef.nativeElement;
    formElement.value = this.applyMask(formElement.value, this.maskExpression, position, justPasted, backspaced, cb);
    if (formElement === this._getActiveElement()) {
      return;
    }
    this.clearIfNotMatchFn();
  }
  hideInput(inputValue, maskExpression) {
    return inputValue.split('').map((curr, index) => {
      if (this.maskAvailablePatterns && this.maskAvailablePatterns[maskExpression[index] ?? ''] && this.maskAvailablePatterns[maskExpression[index] ?? '']?.symbol) {
        return this.maskAvailablePatterns[maskExpression[index] ?? '']?.symbol;
      }
      return curr;
    }).join('');
  }
  // this function is not necessary, it checks result against maskExpression
  getActualValue(res) {
    const compare = res.split('').filter((symbol, i) => {
      const maskChar = this.maskExpression[i] ?? '';
      return this._checkSymbolMask(symbol, maskChar) || this.maskSpecialCharacters.includes(maskChar) && symbol === maskChar;
    });
    if (compare.join('') === res) {
      return compare.join('');
    }
    return res;
  }
  shiftTypedSymbols(inputValue) {
    let symbolToReplace = '';
    const newInputValue = inputValue && inputValue.split('').map((currSymbol, index) => {
      if (this.maskSpecialCharacters.includes(inputValue[index + 1] ?? '') && inputValue[index + 1] !== this.maskExpression[index + 1]) {
        symbolToReplace = currSymbol;
        return inputValue[index + 1];
      }
      if (symbolToReplace.length) {
        const replaceSymbol = symbolToReplace;
        symbolToReplace = '';
        return replaceSymbol;
      }
      return currSymbol;
    }) || [];
    return newInputValue.join('');
  }
  /**
   * Convert number value to string
   * 3.1415 -> '3.1415'
   * 1e-7 -> '0.0000001'
   */
  numberToString(value) {
    if (!value && value !== 0) {
      return String(value);
    }
    return Number(value).toLocaleString('fullwide', {
      useGrouping: false,
      maximumFractionDigits: 20
    });
  }
  showMaskInInput(inputVal) {
    if (this.showMaskTyped && !!this.shownMaskExpression) {
      if (this.maskExpression.length !== this.shownMaskExpression.length) {
        throw new Error('Mask expression must match mask placeholder length');
      } else {
        return this.shownMaskExpression;
      }
    } else if (this.showMaskTyped) {
      if (inputVal) {
        if (this.maskExpression === 'IP') {
          return this._checkForIp(inputVal);
        }
        if (this.maskExpression === 'CPF_CNPJ') {
          return this._checkForCpfCnpj(inputVal);
        }
      }
      return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
    }
    return '';
  }
  clearIfNotMatchFn() {
    const formElement = this._elementRef.nativeElement;
    if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== formElement.value.replace(/_/g, '').length) {
      this.formElementProperty = ['value', ''];
      this.applyMask(formElement.value, this.maskExpression);
    }
  }
  set formElementProperty([name, value]) {
    Promise.resolve().then(() => this._renderer.setProperty(this._elementRef.nativeElement, name, value));
  }
  checkSpecialCharAmount(mask) {
    const chars = mask.split('').filter(item => this._findSpecialChar(item));
    return chars.length;
  }
  removeMask(inputValue) {
    return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.maskSpecialCharacters.concat('_').concat(this.placeHolderCharacter));
  }
  _checkForIp(inputVal) {
    if (inputVal === '#') {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    const arr = [];
    for (let i = 0; i < inputVal.length; i++) {
      const value = inputVal[i] ?? '';
      if (!value) {
        continue;
      }
      if (value.match('\\d')) {
        arr.push(value);
      }
    }
    if (arr.length <= 3) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    if (arr.length > 3 && arr.length <= 6) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    if (arr.length > 6 && arr.length <= 9) {
      return this.placeHolderCharacter;
    }
    if (arr.length > 9 && arr.length <= 12) {
      return '';
    }
    return '';
  }
  _checkForCpfCnpj(inputVal) {
    const cpf = `${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    const cnpj = `${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    if (inputVal === '#') {
      return cpf;
    }
    const arr = [];
    for (let i = 0; i < inputVal.length; i++) {
      const value = inputVal[i] ?? '';
      if (!value) {
        continue;
      }
      if (value.match('\\d')) {
        arr.push(value);
      }
    }
    if (arr.length <= 3) {
      return cpf.slice(arr.length, cpf.length);
    }
    if (arr.length > 3 && arr.length <= 6) {
      return cpf.slice(arr.length + 1, cpf.length);
    }
    if (arr.length > 6 && arr.length <= 9) {
      return cpf.slice(arr.length + 2, cpf.length);
    }
    if (arr.length > 9 && arr.length < 11) {
      return cpf.slice(arr.length + 3, cpf.length);
    }
    if (arr.length === 11) {
      return '';
    }
    if (arr.length === 12) {
      if (inputVal.length === 17) {
        return cnpj.slice(16, cnpj.length);
      }
      return cnpj.slice(15, cnpj.length);
    }
    if (arr.length > 12 && arr.length <= 14) {
      return cnpj.slice(arr.length + 4, cnpj.length);
    }
    return '';
  }
  /**
   * Recursively determine the current active element by navigating the Shadow DOM until the Active Element is found.
   */
  _getActiveElement(document = this.document) {
    const shadowRootEl = document?.activeElement?.shadowRoot;
    if (!shadowRootEl?.activeElement) {
      return document.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  /**
   * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
   * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
   * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
   * model value too. Therefore, we don't trigger onChange in this scenario.
   * @param inputValue the current form input value
   */
  formControlResult(inputValue) {
    if (this.writingValue || !this.triggerOnMaskChange && this.maskChanged) {
      this.maskChanged = false;
      return;
    }
    if (Array.isArray(this.dropSpecialCharacters)) {
      this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters)));
    } else if (this.dropSpecialCharacters) {
      this.onChange(this._toNumber(this._checkSymbols(inputValue)));
    } else {
      this.onChange(this._removeSuffix(inputValue));
    }
  }
  _toNumber(value) {
    if (!this.isNumberValue || value === '') {
      return value;
    }
    const num = Number(value);
    return Number.isNaN(num) ? value : num;
  }
  _removeMask(value, specialCharactersForRemove) {
    return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
  }
  _removePrefix(value) {
    if (!this.prefix) {
      return value;
    }
    return value ? value.replace(this.prefix, '') : value;
  }
  _removeSuffix(value) {
    if (!this.suffix) {
      return value;
    }
    return value ? value.replace(this.suffix, '') : value;
  }
  _retrieveSeparatorValue(result) {
    return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
  }
  _regExpForRemove(specialCharactersForRemove) {
    return new RegExp(specialCharactersForRemove.map(item => `\\${item}`).join('|'), 'gi');
  }
  _replaceDecimalMarkerToDot(value) {
    const markers = Array.isArray(this.decimalMarker) ? this.decimalMarker : [this.decimalMarker];
    return value.replace(this._regExpForRemove(markers), '.');
  }
  _checkSymbols(result) {
    if (result === '') {
      return result;
    }
    const separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);
    const separatorValue = this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(result));
    if (!this.isNumberValue) {
      return separatorValue;
    }
    if (separatorPrecision) {
      if (result === this.decimalMarker) {
        return null;
      }
      return this._checkPrecision(this.maskExpression, separatorValue);
    } else {
      return Number(separatorValue);
    }
  }
  // TODO should think about helpers or separting decimal precision to own property
  _retrieveSeparatorPrecision(maskExpretion) {
    const matcher = maskExpretion.match(new RegExp(`^separator\\.([^d]*)`));
    return matcher ? Number(matcher[1]) : null;
  }
  _checkPrecision(separatorExpression, separatorValue) {
    if (separatorExpression.indexOf('2') > 0) {
      return Number(separatorValue).toFixed(2);
    }
    return Number(separatorValue);
  }
}
MaskService.ɵfac = function MaskService_Factory(t) {
  return new (t || MaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](config), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};
MaskService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MaskService,
  factory: MaskService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaskService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [config]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, null);
})();
class MaskDirective {
  constructor(document, _maskService, _config) {
    this.document = document;
    this._maskService = _maskService;
    this._config = _config;
    // eslint-disable-next-line @angular-eslint/no-input-rename
    this.maskExpression = '';
    this.specialCharacters = [];
    this.patterns = {};
    this.prefix = '';
    this.suffix = '';
    this.thousandSeparator = ' ';
    this.decimalMarker = '.';
    this.dropSpecialCharacters = null;
    this.hiddenInput = null;
    this.showMaskTyped = null;
    this.placeHolderCharacter = null;
    this.shownMaskExpression = null;
    this.showTemplate = null;
    this.clearIfNotMatch = null;
    this.validation = null;
    this.separatorLimit = null;
    this.allowNegativeNumbers = null;
    this.leadZeroDateTime = null;
    this.triggerOnMaskChange = null;
    this.maskFilled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._maskValue = '';
    this._position = null;
    this._maskExpressionArray = [];
    this._justPasted = false;
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
    this.onChange = _ => {};
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.onTouch = () => {};
  }
  ngOnChanges(changes) {
    const {
      maskExpression,
      specialCharacters,
      patterns,
      prefix,
      suffix,
      thousandSeparator,
      decimalMarker,
      dropSpecialCharacters,
      hiddenInput,
      showMaskTyped,
      placeHolderCharacter,
      shownMaskExpression,
      showTemplate,
      clearIfNotMatch,
      validation,
      separatorLimit,
      allowNegativeNumbers,
      leadZeroDateTime,
      triggerOnMaskChange
    } = changes;
    if (maskExpression) {
      if (maskExpression.currentValue !== maskExpression.previousValue && !maskExpression.firstChange) {
        this._maskService.maskChanged = true;
      }
      if (maskExpression.currentValue && maskExpression.currentValue.split('||').length > 1) {
        this._maskExpressionArray = maskExpression.currentValue.split('||').sort((a, b) => {
          return a.length - b.length;
        });
        this._setMask();
      } else {
        this._maskExpressionArray = [];
        this._maskValue = maskExpression.currentValue || '';
        this._maskService.maskExpression = this._maskValue;
      }
    }
    if (specialCharacters) {
      if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
        return;
      } else {
        this._maskService.maskSpecialCharacters = specialCharacters.currentValue || [];
      }
    }
    // Only overwrite the mask available patterns if a pattern has actually been passed in
    if (patterns && patterns.currentValue) {
      this._maskService.maskAvailablePatterns = patterns.currentValue;
    }
    if (prefix) {
      this._maskService.prefix = prefix.currentValue;
    }
    if (suffix) {
      this._maskService.suffix = suffix.currentValue;
    }
    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator.currentValue;
    }
    if (decimalMarker) {
      this._maskService.decimalMarker = decimalMarker.currentValue;
    }
    if (dropSpecialCharacters) {
      this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
    }
    if (hiddenInput) {
      this._maskService.hiddenInput = hiddenInput.currentValue;
    }
    if (showMaskTyped) {
      this._maskService.showMaskTyped = showMaskTyped.currentValue;
    }
    if (placeHolderCharacter) {
      this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
    }
    if (shownMaskExpression) {
      this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
    }
    if (showTemplate) {
      this._maskService.showTemplate = showTemplate.currentValue;
    }
    if (clearIfNotMatch) {
      this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
    }
    if (validation) {
      this._maskService.validation = validation.currentValue;
    }
    if (separatorLimit) {
      this._maskService.separatorLimit = separatorLimit.currentValue;
    }
    if (allowNegativeNumbers) {
      this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;
      if (this._maskService.allowNegativeNumbers) {
        this._maskService.maskSpecialCharacters = this._maskService.maskSpecialCharacters.filter(c => c !== '-');
      }
    }
    if (leadZeroDateTime) {
      this._maskService.leadZeroDateTime = leadZeroDateTime.currentValue;
    }
    if (triggerOnMaskChange) {
      this._maskService.triggerOnMaskChange = triggerOnMaskChange.currentValue;
    }
    this._applyMask();
  }
  // eslint-disable-next-line complexity
  validate({
    value
  }) {
    if (!this._maskService.validation || !this._maskValue) {
      return null;
    }
    if (this._maskService.ipError) {
      return this._createValidationError(value);
    }
    if (this._maskService.cpfCnpjError) {
      return this._createValidationError(value);
    }
    if (this._maskValue.startsWith('separator')) {
      return null;
    }
    if (withoutValidation.includes(this._maskValue)) {
      return null;
    }
    if (this._maskService.clearIfNotMatch) {
      return null;
    }
    if (timeMasks.includes(this._maskValue)) {
      return this._validateTime(value);
    }
    if (value && value.toString().length >= 1) {
      let counterOfOpt = 0;
      for (const key in this._maskService.maskAvailablePatterns) {
        if (this._maskService.maskAvailablePatterns[key]?.optional) {
          if (this._maskValue.indexOf(key) !== this._maskValue.lastIndexOf(key)) {
            const opt = this._maskValue.split('').filter(i => i === key).join('');
            counterOfOpt += opt.length;
          } else if (this._maskValue.indexOf(key) !== -1) {
            counterOfOpt++;
          }
          if (this._maskValue.indexOf(key) !== -1 && value.toString().length >= this._maskValue.indexOf(key)) {
            return null;
          }
          if (counterOfOpt === this._maskValue.length) {
            return null;
          }
        }
      }
      if (this._maskValue.indexOf('{') === 1 && value.toString().length === this._maskValue.length + Number((this._maskValue.split('{')[1] ?? '').split('}')[0]) - 4) {
        return null;
      }
      if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
        return null;
      } else if (this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*') || this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?') || this._maskValue.indexOf('{') === 1) {
        return this._createValidationError(value);
      }
      if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
        const length = this._maskService.dropSpecialCharacters ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt : this._maskValue.length - counterOfOpt;
        if (value.toString().length < length) {
          return this._createValidationError(value);
        }
      }
    }
    if (value) {
      this.maskFilled.emit();
      return null;
    }
    return null;
  }
  onPaste() {
    this._justPasted = true;
  }
  onModelChange(value) {
    // on form reset we need to update the actualValue
    if ((value === '' || value === null || value === undefined) && this._maskService.actualValue) {
      this._maskService.actualValue = this._maskService.getActualValue('');
    }
  }
  onInput(e) {
    const el = e.target;
    this._inputValue = el.value;
    this._setMask();
    if (!this._maskValue) {
      this.onChange(el.value);
      return;
    }
    const position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
    let caretShift = 0;
    let backspaceShift = false;
    this._maskService.applyValueChanges(position, this._justPasted, this._code === 'Backspace' || this._code === 'Delete', (shift, _backspaceShift) => {
      this._justPasted = false;
      caretShift = shift;
      backspaceShift = _backspaceShift;
    });
    // only set the selection if the element is active
    if (this._getActiveElement() !== el) {
      return;
    }
    this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
    let positionToApply = this._position ? this._inputValue.length + position + caretShift : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);
    if (positionToApply > this._getActualInputLength()) {
      positionToApply = this._getActualInputLength();
    }
    if (positionToApply < 0) {
      positionToApply = 0;
    }
    el.setSelectionRange(positionToApply, positionToApply);
    this._position = null;
  }
  onBlur() {
    if (this._maskValue) {
      this._maskService.clearIfNotMatchFn();
    }
    this.onTouch();
  }
  onClick(e) {
    if (!this._maskValue) {
      return;
    }
    const el = e.target;
    const posStart = 0;
    const posEnd = 0;
    if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length &&
    // eslint-disable-next-line
    e.keyCode !== 38) {
      if (this._maskService.showMaskTyped) {
        // We are showing the mask in the input
        this._maskService.maskIsShown = this._maskService.showMaskInInput();
        if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
          // the input ONLY contains the mask, so position the cursor at the start
          el.focus();
          el.setSelectionRange(posStart, posEnd);
        } else {
          // the input contains some characters already
          if (el.selectionStart > this._maskService.actualValue.length) {
            // if the user clicked beyond our value's length, position the cursor at the end of our value
            el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
          }
        }
      }
    }
    const nextValue = el && (!el.value || el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value);
    /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */
    if (el && el.value !== nextValue) {
      el.value = nextValue;
    }
    /** fix of cursor position with prefix when mouse click occur */
    if (el && (el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
      el.selectionStart = this._maskService.prefix.length;
      return;
    }
    /** select only inserted text */
    if (el && el.selectionEnd > this._getActualInputLength()) {
      el.selectionEnd = this._getActualInputLength();
    }
  }
  // eslint-disable-next-line complexity
  onKeyDown(e) {
    if (!this._maskValue) {
      return;
    }
    this._code = e.code ? e.code : e.key;
    const el = e.target;
    this._inputValue = el.value;
    this._setMask();
    if (e.keyCode === 38) {
      e.preventDefault();
    }
    if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
      if (e.keyCode === 8 && el.value.length === 0) {
        el.selectionStart = el.selectionEnd;
      }
      if (e.keyCode === 8 && el.selectionStart !== 0) {
        // If specialChars is false, (shouldn't ever happen) then set to the defaults
        this.specialCharacters = this.specialCharacters?.length ? this.specialCharacters : this._config.specialCharacters;
        if (this.prefix.length > 1 && el.selectionStart <= this.prefix.length) {
          el.setSelectionRange(this.prefix.length, el.selectionEnd);
        } else {
          if (this._inputValue.length !== el.selectionStart && el.selectionStart !== 1) {
            while (this.specialCharacters.includes((this._inputValue[el.selectionStart - 1] ?? '').toString()) && (this.prefix.length >= 1 && el.selectionStart > this.prefix.length || this.prefix.length === 0)) {
              el.setSelectionRange(el.selectionStart - 1, el.selectionEnd);
            }
          }
        }
      }
      this.checkSelectionOnDeletion(el);
      if (this._maskService.prefix.length && el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
        e.preventDefault();
      }
      const cursorStart = el.selectionStart;
      if (e.keyCode === 8 && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
        this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;
        this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
      }
    }
    if (!!this.suffix && this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
      el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
    } else if (e.keyCode === 65 && e.ctrlKey || e.keyCode === 65 && e.metaKey // Cmd + A (Mac)
    ) {
      el.setSelectionRange(0, this._getActualInputLength());
      e.preventDefault();
    }
    this._maskService.selStart = el.selectionStart;
    this._maskService.selEnd = el.selectionEnd;
  }
  /** It writes the value in the input */
  writeValue(inputValue) {
    var _this = this;
    return (0,_home_geia_Documentos_Loterias_Mardonio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof inputValue === 'object' && inputValue !== null && 'value' in inputValue) {
        if ('disable' in inputValue) {
          _this.setDisabledState(Boolean(inputValue.disable));
        }
        // eslint-disable-next-line no-param-reassign
        inputValue = inputValue.value;
      }
      if (typeof inputValue === 'number' || _this._maskValue.startsWith('separator')) {
        // eslint-disable-next-line no-param-reassign
        inputValue = _this._maskService.numberToString(inputValue);
        if (!Array.isArray(_this.decimalMarker)) {
          // eslint-disable-next-line no-param-reassign
          inputValue = _this.decimalMarker !== '.' ? inputValue.replace('.', _this.decimalMarker) : inputValue;
        }
        _this._maskService.isNumberValue = true;
      }
      if (typeof inputValue !== 'string') {
        // eslint-disable-next-line no-param-reassign
        inputValue = '';
      }
      _this._inputValue = inputValue;
      _this._setMask();
      if (inputValue && _this._maskService.maskExpression || _this._maskService.maskExpression && (_this._maskService.prefix || _this._maskService.showMaskTyped)) {
        // Let the service we know we are writing value so that triggering onChange function won't happen during applyMask
        _this._maskService.writingValue = true;
        _this._maskService.formElementProperty = ['value', _this._maskService.applyMask(inputValue, _this._maskService.maskExpression)];
        // Let the service know we've finished writing value
        _this._maskService.writingValue = false;
      } else {
        _this._maskService.formElementProperty = ['value', inputValue];
      }
      _this._inputValue = inputValue;
    })();
  }
  registerOnChange(fn) {
    this._maskService.onChange = this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  _getActiveElement(document = this.document) {
    const shadowRootEl = document?.activeElement?.shadowRoot;
    if (!shadowRootEl?.activeElement) {
      return document.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  checkSelectionOnDeletion(el) {
    el.selectionStart = Math.min(Math.max(this.prefix.length, el.selectionStart), this._inputValue.length - this.suffix.length);
    el.selectionEnd = Math.min(Math.max(this.prefix.length, el.selectionEnd), this._inputValue.length - this.suffix.length);
  }
  /** It disables the input element */
  setDisabledState(isDisabled) {
    this._maskService.formElementProperty = ['disabled', isDisabled];
  }
  _repeatPatternSymbols(maskExp) {
    return maskExp.match(/{[0-9]+}/) && maskExp.split('').reduce((accum, currVal, index) => {
      this._start = currVal === '{' ? index : this._start;
      if (currVal !== '}') {
        return this._maskService._findSpecialChar(currVal) ? accum + currVal : accum;
      }
      this._end = index;
      const repeatNumber = Number(maskExp.slice(this._start + 1, this._end));
      const replaceWith = new Array(repeatNumber + 1).join(maskExp[this._start - 1]);
      return accum + replaceWith;
    }, '') || maskExp;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _applyMask() {
    this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
    this._maskService.formElementProperty = ['value', this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
  }
  _validateTime(value) {
    const rowMaskLen = this._maskValue.split('').filter(s => s !== ':').length;
    if (!value) {
      return null; // Don't validate empty values to allow for optional form control
    }

    if (+(value[value.length - 1] ?? -1) === 0 && value.length < rowMaskLen || value.length <= rowMaskLen - 2) {
      return this._createValidationError(value);
    }
    return null;
  }
  _getActualInputLength() {
    return this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length;
  }
  _createValidationError(actualValue) {
    return {
      mask: {
        requiredMask: this._maskValue,
        actualValue
      }
    };
  }
  _setMask() {
    if (this._maskExpressionArray.length > 0) {
      this._maskExpressionArray.some(mask => {
        const test = this._maskService.removeMask(this._inputValue)?.length <= this._maskService.removeMask(mask)?.length;
        if (this._inputValue && test) {
          this._maskValue = mask;
          this.maskExpression = mask;
          this._maskService.maskExpression = mask;
          return test;
        } else {
          const expression = this._maskExpressionArray[this._maskExpressionArray.length - 1] ?? '';
          this._maskValue = this.maskExpression = this._maskService.maskExpression = expression;
        }
      });
    }
  }
}
MaskDirective.ɵfac = function MaskDirective_Factory(t) {
  return new (t || MaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MaskService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](config));
};
MaskDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MaskDirective,
  selectors: [["input", "mask", ""], ["textarea", "mask", ""]],
  hostBindings: function MaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("paste", function MaskDirective_paste_HostBindingHandler() {
        return ctx.onPaste();
      })("ngModelChange", function MaskDirective_ngModelChange_HostBindingHandler($event) {
        return ctx.onModelChange($event);
      })("input", function MaskDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("blur", function MaskDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function MaskDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown", function MaskDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    maskExpression: ["mask", "maskExpression"],
    specialCharacters: "specialCharacters",
    patterns: "patterns",
    prefix: "prefix",
    suffix: "suffix",
    thousandSeparator: "thousandSeparator",
    decimalMarker: "decimalMarker",
    dropSpecialCharacters: "dropSpecialCharacters",
    hiddenInput: "hiddenInput",
    showMaskTyped: "showMaskTyped",
    placeHolderCharacter: "placeHolderCharacter",
    shownMaskExpression: "shownMaskExpression",
    showTemplate: "showTemplate",
    clearIfNotMatch: "clearIfNotMatch",
    validation: "validation",
    separatorLimit: "separatorLimit",
    allowNegativeNumbers: "allowNegativeNumbers",
    leadZeroDateTime: "leadZeroDateTime",
    triggerOnMaskChange: "triggerOnMaskChange"
  },
  outputs: {
    maskFilled: "maskFilled"
  },
  exportAs: ["mask", "ngxMask"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MaskDirective),
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MaskDirective),
    multi: true
  }, MaskService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaskDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'input[mask], textarea[mask]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MaskDirective),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MaskDirective),
        multi: true
      }, MaskService],
      exportAs: 'mask,ngxMask'
    }]
  }], function () {
    return [{
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
      }]
    }, {
      type: MaskService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [config]
      }]
    }];
  }, {
    maskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mask']
    }],
    specialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    patterns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    thousandSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    decimalMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dropSpecialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hiddenInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showMaskTyped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeHolderCharacter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shownMaskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    clearIfNotMatch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    validation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    separatorLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    allowNegativeNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    leadZeroDateTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    triggerOnMaskChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maskFilled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['paste']
    }],
    onModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['ngModelChange', ['$event']]
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['input', ['$event']]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['blur']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class MaskPipe {
  constructor(_maskService) {
    this._maskService = _maskService;
  }
  transform(value, mask, thousandSeparator = null) {
    if (!value && typeof value !== 'number') {
      return '';
    }
    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator;
    }
    if (typeof mask === 'string') {
      return this._maskService.applyMask(`${value}`, mask);
    }
    return this._maskService.applyMaskWithPattern(`${value}`, mask);
  }
}
MaskPipe.ɵfac = function MaskPipe_Factory(t) {
  return new (t || MaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MaskApplierService, 16));
};
MaskPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "mask",
  type: MaskPipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaskPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'mask',
      pure: true
    }]
  }], function () {
    return [{
      type: MaskApplierService
    }];
  }, null);
})();

/**
 * @internal
 */
function _configFactory(initConfig, configValue) {
  return configValue instanceof Function ? {
    ...initConfig,
    ...configValue()
  } : {
    ...initConfig,
    ...configValue
  };
}
class NgxMaskModule {
  static forRoot(configValue) {
    return {
      ngModule: NgxMaskModule,
      providers: [{
        provide: NEW_CONFIG,
        useValue: configValue
      }, {
        provide: INITIAL_CONFIG,
        useValue: initialConfig
      }, {
        provide: config,
        useFactory: _configFactory,
        deps: [INITIAL_CONFIG, NEW_CONFIG]
      }, MaskApplierService]
    };
  }
  static forChild() {
    return {
      ngModule: NgxMaskModule
    };
  }
}
NgxMaskModule.ɵfac = function NgxMaskModule_Factory(t) {
  return new (t || NgxMaskModule)();
};
NgxMaskModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NgxMaskModule
});
NgxMaskModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaskModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      exports: [MaskDirective, MaskPipe],
      declarations: [MaskDirective, MaskPipe]
    }]
  }], null, null);
})();
const commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
(function () {
  if (!commonjsGlobal.KeyboardEvent) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    commonjsGlobal.KeyboardEvent = function (_eventType, _init) {};
  }
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 71670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_usuario_usuario_module_ts.js.map