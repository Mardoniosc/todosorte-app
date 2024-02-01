"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_auth_sign-in_sign-in_module_ts"],{

/***/ 98754:
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/sign-in/sign-in.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignInComponent": () => (/* binding */ AuthSignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/auth/auth.service */ 88951);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);














const _c0 = ["signInNgForm"];
function AuthSignInComponent_fuse_alert_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fuse-alert", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appearance", "outline")("showIcon", false)("type", ctx_r0.alert.type)("@shake", ctx_r0.alert.type === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.alert.message, " ");
} }
function AuthSignInComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u00C9 necess\u00E1rio um nome de usu\u00E1rio para entrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignInComponent_mat_icon_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 38);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:eye");
} }
function AuthSignInComponent_mat_icon_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 38);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:eye-off");
} }
function AuthSignInComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Entrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AuthSignInComponent_mat_progress_spinner_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-spinner", 39);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 24)("mode", "indeterminate");
} }
class AuthSignInComponent {
    constructor(_activatedRoute, _authService, _formBuilder, _router) {
        this._activatedRoute = _activatedRoute;
        this._authService = _authService;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.alert = {
            type: 'success',
            message: '',
        };
        this.showAlert = false;
    }
    ngOnInit() {
        this.signInForm = this._formBuilder.group({
            login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    get nomeSistema() {
        return environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.nomeSistema;
    }
    signIn() {
        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }
        // Disable the form
        this.signInForm.disable();
        // Hide the alert
        this.showAlert = false;
        // Sign in
        this._authService.signIn(this.signInForm.value).subscribe({
            next: () => {
                // Set the redirect url.
                // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                // to the correct page after a successful sign in. This way, that url can be set via
                // routing file and we don't have to touch here.
                const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
                // Navigate to the redirect url
                this._router.navigateByUrl(redirectURL);
            },
            error: (response) => {
                // Re-enable the form
                this.signInForm.enable();
                // Reset the form
                this.signInNgForm.resetForm();
                // Set the alert
                this.alert = {
                    type: 'error',
                    message: 'Usuário ou senha errados',
                };
                // Show the alert
                this.showAlert = true;
            }
        });
    }
    get currentYear() {
        return new Date().getFullYear();
    }
}
AuthSignInComponent.ɵfac = function AuthSignInComponent_Factory(t) { return new (t || AuthSignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AuthSignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuthSignInComponent, selectors: [["auth-sign-in"]], viewQuery: function AuthSignInComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.signInNgForm = _t.first);
    } }, decls: 58, vars: 14, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-center", "md:items-start", "sm:justify-center", "md:justify-start", "flex-auto", "min-w-0"], [1, "md:flex", "md:items-center", "md:justify-end", "w-full", "sm:w-auto", "md:h-full", "md:w-1/2", "py-8", "px-4", "sm:p-12", "md:p-16", "sm:rounded-2xl", "md:rounded-none", "sm:shadow", "md:shadow-none", "sm:bg-card"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "max-w-80", "sm:w-80", "mx-auto", "sm:mx-0"], [1, "w-24"], ["src", "assets/images/loteria/logo.svg"], [1, "mt-8", "leading-3", "text-xl"], [1, "text-5xl", "font-extrabold", "tracking-tight", "leading-tight"], ["class", "mt-8 -mb-4", 3, "appearance", "showIcon", "type", 4, "ngIf"], [1, "mt-8", 3, "formGroup"], ["signInNgForm", "ngForm"], [1, "w-full"], ["id", "login", "matInput", "", 3, "formControlName"], [4, "ngIf"], ["id", "password", "matInput", "", "type", "password", 3, "formControlName"], ["passwordField", ""], ["mat-icon-button", "", "type", "button", "matSuffix", "", 3, "click"], ["class", "icon-size-5", 3, "svgIcon", 4, "ngIf"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "w-full", "mt-6", 3, "color", "disabled", "click"], [3, "diameter", "mode", 4, "ngIf"], [1, "mt-8", "flex-auto", "border-t"], [1, "flex", "flex-col", "items-left", "mt-8", "text-xs"], [1, "relative", "hidden", "md:flex", "flex-auto", "items-center", "justify-center", "w-1/2", "h-full", "p-16", "lg:px-28", "overflow-hidden", "bg-gray-800", "dark:border-l"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "z-10", "relative", "w-full", "max-w-2xl"], [1, "leading-none", "text-gray-100"], [1, "text-8xl", "font-bold"], [1, "text-xl"], [1, "my-8", "flex-auto", "border-t", "border-gray-600", "max-w-80"], [1, "flex", "flex-col"], [1, "max-w-100"], [1, "mt-8", "-mb-4", 3, "appearance", "showIcon", "type"], [1, "icon-size-5", 3, "svgIcon"], [3, "diameter", "mode"]], template: function AuthSignInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Bem Vindo ao");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AuthSignInComponent_fuse_alert_9_Template, 2, 5, "fuse-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 8, 9)(12, "mat-form-field", 10)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AuthSignInComponent_mat_error_16_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 10)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthSignInComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r3.type === "password" ? _r3.type = "text" : _r3.type = "password"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, AuthSignInComponent_mat_icon_23_Template, 1, 1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, AuthSignInComponent_mat_icon_24_Template, 1, 1, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Senha \u00E9 obrigat\u00F3ria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AuthSignInComponent_Template_button_click_27_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, AuthSignInComponent_span_28_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AuthSignInComponent_mat_progress_spinner_29_Template, 1, 2, "mat-progress-spinner", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 20)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Mardonio S Costa Desenvolvedor Sr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Coordenadoria de Tecnologia da Informa\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "svg", 22)(40, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "circle", 24)(42, "circle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "svg", 26)(44, "defs")(45, "pattern", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "rect", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "rect", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 30)(49, "div", 31)(50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Sistema de apoio a jogos de loteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 35)(56, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Desenvolvimento Idependente!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.nomeSistema, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signInForm.get("login").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", "senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.type === "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.type === "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", "primary")("disabled", ctx.signInForm.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.signInForm.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.signInForm.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A9 2012-", ctx.currentYear, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.nomeSistema);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_0__.fuseAnimations } });


/***/ }),

/***/ 88966:
/*!********************************************************!*\
  !*** ./src/app/modules/auth/sign-in/sign-in.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignInModule": () => (/* binding */ AuthSignInModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _fuse_components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/card */ 25553);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/modules/auth/sign-in/sign-in.component */ 98754);
/* harmony import */ var app_modules_auth_sign_in_sign_in_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/auth/sign-in/sign-in.routing */ 44512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);














class AuthSignInModule {
}
AuthSignInModule.ɵfac = function AuthSignInModule_Factory(t) { return new (t || AuthSignInModule)(); };
AuthSignInModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AuthSignInModule });
AuthSignInModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(app_modules_auth_sign_in_sign_in_routing__WEBPACK_IMPORTED_MODULE_4__.authSignInRoutes),
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _fuse_components_card__WEBPACK_IMPORTED_MODULE_0__.FuseCardModule,
        _fuse_components_alert__WEBPACK_IMPORTED_MODULE_1__.FuseAlertModule,
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthSignInModule, { declarations: [app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.AuthSignInComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _fuse_components_card__WEBPACK_IMPORTED_MODULE_0__.FuseCardModule,
        _fuse_components_alert__WEBPACK_IMPORTED_MODULE_1__.FuseAlertModule,
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 44512:
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/sign-in/sign-in.routing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authSignInRoutes": () => (/* binding */ authSignInRoutes)
/* harmony export */ });
/* harmony import */ var app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/auth/sign-in/sign-in.component */ 98754);

const authSignInRoutes = [
    {
        path: '',
        component: app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.AuthSignInComponent
    }
];


/***/ })

}]);
//# sourceMappingURL=src_app_modules_auth_sign-in_sign-in_module_ts.js.map