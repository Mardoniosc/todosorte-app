"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_loterias_lotofacil_lotofacil_module_ts"],{

/***/ 73058:
/*!*********************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/api/lotofacil.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LotofacilService": () => (/* binding */ LotofacilService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class LotofacilService {
    constructor(http) {
        this.http = http;
        this.apipath = '/lotofacil';
    }
    naoSorteado() {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiJogos}${this.apipath}/nao-sorteado`);
    }
    baseNoUltimo() {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiJogos}${this.apipath}/base-ultimo`);
    }
    aleatorio() {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiJogos}${this.apipath}/base-ultimo`);
    }
    fechamento(filtro) {
        const parametros = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('total_numeros_fechamento', filtro.total_numeros_fechamento)
            .set('para_acertar', filtro.para_acertar)
            .set('acertando', filtro.acertando)
            .set('geracao_numeros', filtro.geracao_numeros)
            .set('numeros_fechamento', filtro.numeros_fechamento);
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiJogos}${this.apipath}/fechamento`, {
            params: parametros,
        });
    }
}
LotofacilService.ɵfac = function LotofacilService_Factory(t) { return new (t || LotofacilService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
LotofacilService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LotofacilService, factory: LotofacilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86402:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/components/base-ultimo/base-ultimo.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseUltimoComponent": () => (/* binding */ BaseUltimoComponent)
/* harmony export */ });
/* harmony import */ var app_shared_models_sessionstorage_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/models/sessionstorage.model */ 94187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_lotofacil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/lotofacil.service */ 73058);
/* harmony import */ var app_shared_services_jogos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/jogos.service */ 52874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/loteria/header-title/header-title.component */ 42291);
/* harmony import */ var _shared_components_loteria_cartela_cartela_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/loteria/cartela/cartela.component */ 43424);











function BaseUltimoComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BaseUltimoComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.baixarJogos()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Baixar Jogos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function BaseUltimoComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BaseUltimoComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.gerarJogo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Novo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function BaseUltimoComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-cartela", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cartela_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("numerosCartela", cartela_r7.cartela)("numerosSelecionados", cartela_r7.selecionados);
} }
class BaseUltimoComponent {
    constructor(service, jogosService) {
        this.service = service;
        this.jogosService = jogosService;
        this.numerosCartela = [];
        this.cartelas = [];
        this.mostrarNovo = true;
        this.concursoBase = 0;
    }
    ngOnInit() {
        this.gerarJogo();
    }
    gerarJogo() {
        this.cartelas = [];
        this.mostrarNovo = false;
        if (sessionStorage.getItem(app_shared_models_sessionstorage_model__WEBPACK_IMPORTED_MODULE_0__.ESessionLoteria.RESULTADO_ULTIMO + 'lotofacilBaseUltimo')) {
            let resultado = JSON.parse(sessionStorage.getItem(app_shared_models_sessionstorage_model__WEBPACK_IMPORTED_MODULE_0__.ESessionLoteria.RESULTADO_ULTIMO + 'lotofacilBaseUltimo'));
            this.mostrarNovo = true;
            this.concursoBase = resultado.concurso_base;
            resultado.jogos.forEach((jogo) => {
                this.gerarNumerosCartela(jogo);
            });
            return;
        }
        this.service.baseNoUltimo().subscribe({
            next: (response) => {
                sessionStorage.setItem(app_shared_models_sessionstorage_model__WEBPACK_IMPORTED_MODULE_0__.ESessionLoteria.RESULTADO_ULTIMO + 'lotofacilBaseUltimo', JSON.stringify(response));
                this.mostrarNovo = true;
                this.concursoBase = response.concurso_base;
                response.jogos.forEach((jogo) => {
                    this.gerarNumerosCartela(jogo);
                });
            },
            error: (erro) => {
                this.mostrarNovo = true;
            },
        });
    }
    gerarNumerosCartela(jogo) {
        this.numerosCartela = [];
        for (let i = 1; i < 26; i++) {
            let numeroCartela = {
                numero: i,
                selecionado: false,
            };
            numeroCartela.selecionado = jogo.includes(i);
            this.numerosCartela.push(numeroCartela);
        }
        this.cartelas.push({
            cartela: this.numerosCartela,
            selecionados: jogo,
        });
    }
    baixarJogos() {
        let requestJogos = {
            cartela: [],
        };
        this.cartelas.forEach((car) => {
            requestJogos.cartela.push(car.selecionados);
        });
        this.jogosService.getJogosTXT(requestJogos).subscribe({
            next: (response) => this.jogosService.download('lotofacil-base-ultimo.txt', response),
            error: (erro) => console.log(erro),
        });
    }
}
BaseUltimoComponent.ɵfac = function BaseUltimoComponent_Factory(t) { return new (t || BaseUltimoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_lotofacil_service__WEBPACK_IMPORTED_MODULE_1__.LotofacilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_jogos_service__WEBPACK_IMPORTED_MODULE_2__.JogosService)); };
BaseUltimoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BaseUltimoComponent, selectors: [["app-base-ultimo"]], decls: 15, vars: 5, consts: [[1, "flex", "flex-col", "w-full"], ["cdkScrollable", "", 1, "w-full", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "Base ultimo sorteio", "sub-titulo", "Gerar 6 jogos simples com base no resultado do ultimo sorteio!", "jogo", "lotofacil"], [1, "p-2", "w-full", "flex", "items-center", "justify-between", "flex-wrap"], ["mat-stroked-button", "", "routerLink", "../", 1, "mr-2", "my-2", "w-40"], [1, "inline-flex", "items-center"], [1, "mr-1.5", "icon-size-5", 3, "svgIcon"], [1, "my-2", "w-40", "border", "border-lotofacil-200", "p-2", "rounded-full", "text-center"], ["class", "my-2 w-40", "mat-stroked-button", "", 3, "click", 4, "ngIf"], [1, "flex", "flex-wrap"], [4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "my-2", "w-40", 3, "click"], [1, "ml-2"], [1, "p-4"], ["pulo", "5", 3, "numerosCartela", "numerosSelecionados"]], template: function BaseUltimoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-header-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, BaseUltimoComponent_button_11_Template, 5, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BaseUltimoComponent_button_12_Template, 5, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, BaseUltimoComponent_ng_container_14_Template, 3, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:arrow-sm-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Concurso: ", ctx.concursoBase, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mostrarNovo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mostrarNovo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.cartelas);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkScrollable, _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_3__.HeaderTitleComponent, _shared_components_loteria_cartela_cartela_component__WEBPACK_IMPORTED_MODULE_4__.CartelaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLXVsdGltby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2914:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/components/fechamento/fechamento.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FechamentoComponent": () => (/* binding */ FechamentoComponent)
/* harmony export */ });
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastr */ 36545);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_lotofacil_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/lotofacil.model */ 68998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_lotofacil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/lotofacil.service */ 73058);
/* harmony import */ var app_shared_services_jogos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/jogos.service */ 52874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_loteria_cartela_cartela_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/loteria/cartela/cartela.component */ 43424);












function FechamentoComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total: ", ctx_r0.totalDeJogos, "");
} }
function FechamentoComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FechamentoComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.baixarJogos()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Baixar Jogos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function FechamentoComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FechamentoComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.gerarFechamento()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Gerar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function FechamentoComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20)(2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FechamentoComponent_ng_container_16_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.paraFazerSelecionado = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "pf", item_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.paraFazerSelecionado)("value", item_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("for", "pf", item_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r11);
} }
function FechamentoComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20)(2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FechamentoComponent_ng_container_21_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.acertandoSelecionado = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.acertandoSelecionado)("id", item_r14)("value", item_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", item_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r14);
} }
function FechamentoComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 24);
} }
function FechamentoComponent_div_31_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-cartela", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cartela_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("numerosCartela", cartela_r18.cartela)("numerosSelecionados", cartela_r18.selecionados);
} }
function FechamentoComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Lista de Jogos gerados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FechamentoComponent_div_31_ng_container_5_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.cartelas);
} }
class FechamentoComponent {
    constructor(_lotofacilService, jogosService) {
        this._lotofacilService = _lotofacilService;
        this.jogosService = jogosService;
        this.numerosCartela = [];
        this.numerosSelecionados = [];
        this.totalDeJogos = 0;
        this.cartelas = [];
        this.mostrarNovo = true;
        this.paraFazer = [11, 12, 13, 14, 15];
        this.acertando = [14, 15];
        this.paraFazerSelecionado = 14;
        this.acertandoSelecionado = 15;
    }
    ngOnInit() {
        this.gerarNumerosCartela();
    }
    gerarNumerosCartela() {
        this.numerosCartela = [];
        for (let i = 1; i < 26; i++) {
            let numeroCartela = {
                numero: i,
                selecionado: false,
            };
            numeroCartela.selecionado = this.numerosSelecionados.includes(i);
            this.numerosCartela.push(numeroCartela);
        }
        this.cartela = {
            cartela: this.numerosCartela,
            selecionados: [],
        };
    }
    gerarNumerosCartelaFechamento(numerosSelecionados) {
        let cartela = {
            cartela: [],
            selecionados: [],
        };
        for (let i = 1; i < 26; i++) {
            let numeroCartela = {
                numero: i,
                selecionado: false,
            };
            numeroCartela.selecionado = numerosSelecionados.includes(i);
            cartela.cartela.push(numeroCartela);
        }
        return cartela;
    }
    gerarFechamento() {
        let total = this.numerosSelecionados.length;
        if (total < 16) {
            toastr__WEBPACK_IMPORTED_MODULE_0___default().info('Você deve selecionar no minimo 16 números para fechamento!');
            return;
        }
        let filtro = {
            para_acertar: this.paraFazerSelecionado,
            acertando: this.acertandoSelecionado,
            numeros_fechamento: this.numerosSelecionados.toString(),
            total_numeros_fechamento: total,
            geracao_numeros: _models_lotofacil_model__WEBPACK_IMPORTED_MODULE_1__.ETipoGeracao.ESCOLHER_NUMEROS,
        };
        this._lotofacilService.fechamento(filtro).subscribe({
            next: (resultado) => {
                this.totalDeJogos = resultado.Total;
                resultado.Jogos.forEach((jogo) => {
                    let novo = this.gerarNumerosCartelaFechamento(jogo);
                    this.cartelas.push(novo);
                });
            },
            error: (erro) => console.log(erro),
        });
    }
    selecionados(numeros) {
        this.numerosSelecionados = numeros;
    }
    baixarJogos() {
        let requestJogos = {
            cartela: [],
        };
        this.cartelas.forEach((car) => {
            let selecionados = [];
            car.cartela.forEach((n) => {
                if (n.selecionado)
                    selecionados.push(n.numero);
            });
            requestJogos.cartela.push(selecionados);
        });
        this.jogosService.getJogosTXT(requestJogos).subscribe({
            next: (response) => this.jogosService.download(`JOGOS_SE${this.acertandoSelecionado}_${this.paraFazerSelecionado}.txt`, response),
            error: (erro) => console.log(erro),
        });
    }
}
FechamentoComponent.ɵfac = function FechamentoComponent_Factory(t) { return new (t || FechamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_lotofacil_service__WEBPACK_IMPORTED_MODULE_2__.LotofacilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_services_jogos_service__WEBPACK_IMPORTED_MODULE_3__.JogosService)); };
FechamentoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FechamentoComponent, selectors: [["app-fechamento"]], decls: 32, vars: 10, consts: [[1, "flex", "flex-col", "w-full"], ["cdkScrollable", "", 1, "w-full", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], [1, "p-2", "w-full", "flex", "items-center", "justify-between", "flex-wrap"], ["mat-stroked-button", "", "routerLink", "../", 1, "mr-2", "my-2", "w-40"], [1, "inline-flex", "items-center"], [1, "mr-1.5", "icon-size-5", 3, "svgIcon"], ["class", "my-2 w-40 border border-lotofacil-200 p-2 rounded-full text-center", 4, "ngIf"], ["class", "my-2 w-40", "mat-stroked-button", "", 3, "click", 4, "ngIf"], [1, "flex", "flex-wrap"], [1, "p-4"], [1, "text-xl", "text-secondary", "my-2"], [1, "flex", "flex-row", "rounded-xl", "bg-gray-200", "p-2"], [4, "ngFor", "ngForOf"], [1, "text-xl", "text-secondary"], ["pulo", "5", 3, "numerosCartela", "selecionados"], ["class", "my-4 border-b", 4, "ngIf"], ["class", "flex flex-wrap", 4, "ngIf"], [1, "my-2", "w-40", "border", "border-lotofacil-200", "p-2", "rounded-full", "text-center"], ["mat-stroked-button", "", 1, "my-2", "w-40", 3, "click"], [1, "ml-2"], [1, "w-15"], ["type", "radio", "name", "para_fazer", 1, "peer", "hidden", 3, "ngModel", "id", "value", "ngModelChange"], [1, "block", "cursor-pointer", "select-none", "rounded-xl", "p-2", "text-center", "peer-checked:bg-blue-500", "peer-checked:font-bold", "peer-checked:text-white", 3, "for"], ["type", "radio", "name", "acertando", 1, "peer", "hidden", 3, "ngModel", "id", "value", "ngModelChange"], [1, "my-4", "border-b"], ["pulo", "5", 3, "numerosCartela", "numerosSelecionados"]], template: function FechamentoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "a", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FechamentoComponent_p_8_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, FechamentoComponent_button_9_Template, 5, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FechamentoComponent_button_10_Template, 5, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Para fazer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, FechamentoComponent_ng_container_16_Template, 5, 5, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9)(18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Acertando");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, FechamentoComponent_ng_container_21_Template, 5, 5, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9)(23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Selecione os numeros para fechamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "app-cartela", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selecionados", function FechamentoComponent_Template_app_cartela_selecionados_29_listener($event) { return ctx.selecionados($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, FechamentoComponent_div_30_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, FechamentoComponent_div_31_Template, 6, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "heroicons_solid:arrow-sm-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalDeJogos > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.totalDeJogos > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numerosSelecionados.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.paraFazer);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.acertando);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total Selecionado: ", ctx.numerosSelecionados.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("numerosCartela", ctx.cartela == null ? null : ctx.cartela.cartela);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cartelas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cartelas.length);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.CdkScrollable, _shared_components_loteria_cartela_cartela_component__WEBPACK_IMPORTED_MODULE_4__.CartelaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWNoYW1lbnRvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 61263:
/*!******************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/components/jogo/jogo.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JogoComponent": () => (/* binding */ JogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_services_jogos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/jogos.service */ 52874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/loteria/header-title/header-title.component */ 42291);
/* harmony import */ var _shared_components_loteria_cartela_cartela_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/loteria/cartela/cartela.component */ 43424);









function JogoComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JogoComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.baixarJogos()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Baixar Jogos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function JogoComponent_ng_container_18_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JogoComponent_ng_container_18_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const cartela_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.testarJogo(cartela_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Testar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function JogoComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-cartela", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, JogoComponent_ng_container_18_div_3_Template, 4, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cartela_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("numerosCartela", cartela_r4.cartela)("numerosSelecionados", cartela_r4.selecionados);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
} }
class JogoComponent {
    constructor(jogosService) {
        this.jogosService = jogosService;
        this.numerosCartela = [];
        this.numerosSelecionados = [];
        this.cartelas = [];
        this.mostrarNovo = true;
    }
    ngOnInit() {
        this.gerarNumerosAleatorios();
    }
    gerarNumerosCartela() {
        this.numerosCartela = [];
        for (let i = 1; i < 26; i++) {
            let numeroCartela = {
                numero: i,
                selecionado: false,
            };
            numeroCartela.selecionado = this.numerosSelecionados.includes(i);
            this.numerosCartela.push(numeroCartela);
        }
        this.cartelas.push({
            cartela: this.numerosCartela,
            selecionados: this.numerosSelecionados,
        });
    }
    gerarNumerosAleatorios() {
        // this.cartelas = [];
        let numbers = [];
        while (numbers.length < 15) {
            let random = Math.floor(Math.random() * 25) + 1;
            if (!numbers.includes(random)) {
                numbers.push(random);
            }
        }
        this.numerosSelecionados = numbers;
        this.gerarNumerosCartela();
    }
    testarJogo(cartela) {
        alert(`Não implementado ${JSON.stringify(cartela.selecionados)}`);
    }
    baixarJogos() {
        let requestJogos = {
            cartela: [],
        };
        this.cartelas.forEach((car) => {
            requestJogos.cartela.push(car.selecionados);
        });
        this.jogosService.getJogosTXT(requestJogos).subscribe({
            next: (response) => this.jogosService.download('lotofacil-base-ultimo.txt', response),
            error: (erro) => console.log(erro),
        });
    }
}
JogoComponent.ɵfac = function JogoComponent_Factory(t) { return new (t || JogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_services_jogos_service__WEBPACK_IMPORTED_MODULE_0__.JogosService)); };
JogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: JogoComponent, selectors: [["app-jogo"]], decls: 19, vars: 5, consts: [[1, "flex", "flex-col", "w-full"], ["cdkScrollable", "", 1, "w-full", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "Aleat\u00F3rio sem regras", "sub-titulo", "Gerar um jogos simples sem levar em considera\u00E7\u00E3o nenhum tipo de regra!", "jogo", "lotofacil"], [1, "p-2", "w-full", "flex", "items-center", "justify-between", "flex-wrap"], ["mat-stroked-button", "", "routerLink", "../", 1, "my-2", "w-40"], [1, "inline-flex", "items-center"], [1, "mr-1.5", "icon-size-5", 3, "svgIcon"], [1, "my-2", "w-40", "border", "border-lotofacil-200", "p-2", "rounded-full", "text-center"], ["class", "my-2 w-40", "mat-stroked-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "my-2", "w-40", 3, "click"], [1, "ml-2"], [1, "flex", "flex-wrap"], [4, "ngFor", "ngForOf"], [1, "p-4"], ["pulo", "5", 3, "numerosCartela", "numerosSelecionados"], ["class", "flex w-48 items-center justify-center", 4, "ngIf"], [1, "flex", "w-48", "items-center", "justify-center"], ["mat-stroked-button", "", 1, "hidden", "sm:inline-flex", "w-44", "mt-3", 3, "click"]], template: function JogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-header-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, JogoComponent_button_11_Template, 5, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JogoComponent_Template_button_click_12_listener() { return ctx.gerarNumerosAleatorios(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Novo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, JogoComponent_ng_container_18_Template, 4, 3, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_solid:arrow-sm-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total: ", ctx.cartelas.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mostrarNovo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cartelas);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.CdkScrollable, _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_1__.HeaderTitleComponent, _shared_components_loteria_cartela_cartela_component__WEBPACK_IMPORTED_MODULE_2__.CartelaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2dvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 88305:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/components/nao-sorteado/nao-sorteado.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NaoSorteadoComponent": () => (/* binding */ NaoSorteadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_lotofacil_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/lotofacil.service */ 73058);
/* harmony import */ var app_shared_services_jogos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/jogos.service */ 52874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/loteria/header-title/header-title.component */ 42291);
/* harmony import */ var _shared_components_loteria_cartela_cartela_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/loteria/cartela/cartela.component */ 43424);










function NaoSorteadoComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NaoSorteadoComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.baixarJogos()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Baixar Jogos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function NaoSorteadoComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NaoSorteadoComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.gerarJogo()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Novo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_outline:plus-circle");
} }
function NaoSorteadoComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-cartela", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cartela_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("numerosCartela", cartela_r7.cartela)("numerosSelecionados", cartela_r7.selecionados);
} }
class NaoSorteadoComponent {
    constructor(service, jogosService) {
        this.service = service;
        this.jogosService = jogosService;
        this.numerosCartela = [];
        this.numerosSelecionados = [];
        this.cartelas = [];
        this.mostrarNovo = true;
    }
    ngOnInit() {
        this.gerarJogo();
    }
    gerarJogo() {
        this.mostrarNovo = false;
        this.service.naoSorteado().subscribe({
            next: (response) => {
                this.mostrarNovo = true;
                this.numerosSelecionados = response.Jogo;
                this.gerarNumerosCartela();
            },
            error: (erro) => {
                this.mostrarNovo = true;
            },
        });
    }
    gerarNumerosCartela() {
        this.numerosCartela = [];
        for (let i = 1; i < 26; i++) {
            let numeroCartela = {
                numero: i,
                selecionado: false,
            };
            numeroCartela.selecionado = this.numerosSelecionados.includes(i);
            this.numerosCartela.push(numeroCartela);
        }
        this.cartelas.push({
            cartela: this.numerosCartela,
            selecionados: this.numerosSelecionados,
        });
    }
    testarJogo(cartela) {
        alert(`Não implementado ${JSON.stringify(cartela.selecionados)}`);
    }
    baixarJogos() {
        let requestJogos = {
            cartela: [],
        };
        this.cartelas.forEach((car) => {
            requestJogos.cartela.push(car.selecionados);
        });
        this.jogosService.getJogosTXT(requestJogos).subscribe({
            next: (response) => this.jogosService.download('lotofacil-base-ultimo.txt', response),
            error: (erro) => console.log(erro),
        });
    }
}
NaoSorteadoComponent.ɵfac = function NaoSorteadoComponent_Factory(t) { return new (t || NaoSorteadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_lotofacil_service__WEBPACK_IMPORTED_MODULE_0__.LotofacilService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_services_jogos_service__WEBPACK_IMPORTED_MODULE_1__.JogosService)); };
NaoSorteadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NaoSorteadoComponent, selectors: [["app-nao-sorteado"]], decls: 15, vars: 5, consts: [[1, "flex", "flex-col", "w-full"], ["cdkScrollable", "", 1, "w-full", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "N\u00E3o Sorteado", "sub-titulo", "Gerar um jogos simples aleat\u00F3rio validando se o mesmo nunca foi sorteado anteriormente!", "jogo", "lotofacil"], [1, "p-2", "w-full", "flex", "items-center", "justify-between", "flex-wrap"], ["mat-stroked-button", "", "routerLink", "../", 1, "mr-2", "my-2", "w-40"], [1, "inline-flex", "items-center"], [1, "mr-1.5", "icon-size-5", 3, "svgIcon"], [1, "my-2", "w-40", "border", "border-lotofacil-200", "p-2", "rounded-full", "text-center"], ["class", "my-2 w-40", "mat-stroked-button", "", 3, "click", 4, "ngIf"], [1, "flex", "flex-wrap"], [4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "my-2", "w-40", 3, "click"], [1, "ml-2"], [1, "p-4"], ["pulo", "5", 3, "numerosCartela", "numerosSelecionados"]], template: function NaoSorteadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-header-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "a", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, NaoSorteadoComponent_button_11_Template, 5, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, NaoSorteadoComponent_button_12_Template, 5, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, NaoSorteadoComponent_ng_container_14_Template, 3, 2, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("svgIcon", "heroicons_solid:arrow-sm-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Total: ", ctx.cartelas.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrarNovo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mostrarNovo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cartelas);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkScrollable, _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleComponent, _shared_components_loteria_cartela_cartela_component__WEBPACK_IMPORTED_MODULE_3__.CartelaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYW8tc29ydGVhZG8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 78597:
/*!********************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/containers/dicas/dicas.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DicasComponent": () => (/* binding */ DicasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/loteria/header-title/header-title.component */ 42291);



class DicasComponent {
    constructor() { }
    ngOnInit() {
    }
}
DicasComponent.ɵfac = function DicasComponent_Factory(t) { return new (t || DicasComponent)(); };
DicasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DicasComponent, selectors: [["app-dicas"]], decls: 2, vars: 0, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "Dicas", "jogo", "lotofacil"]], template: function DicasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable, _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_0__.HeaderTitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWNhcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 73794:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/containers/ferramentas/ferramentas.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FerramentasComponent": () => (/* binding */ FerramentasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/loteria/header-title/header-title.component */ 42291);



class FerramentasComponent {
    constructor() { }
    ngOnInit() {
    }
}
FerramentasComponent.ɵfac = function FerramentasComponent_Factory(t) { return new (t || FerramentasComponent)(); };
FerramentasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FerramentasComponent, selectors: [["app-ferramentas"]], decls: 2, vars: 0, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "Ferramentas", "jogo", "lotofacil"]], template: function FerramentasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable, _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_0__.HeaderTitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZXJyYW1lbnRhcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 30380:
/*!************************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/containers/gerador/gerador.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeradorComponent": () => (/* binding */ GeradorComponent)
/* harmony export */ });
/* harmony import */ var _tiposJogos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiposJogos */ 35893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/loteria/header-title/header-title.component */ 42291);








function GeradorComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 14)(15, "span", 15)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Gerar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("py-0.5 px-3 rounded-full text-sm font-semibold text-white bg-", item_r1.cor, "-100");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r1.tipo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:badge-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.descricao);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r1.rota);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "heroicons_solid:arrow-sm-right");
} }
class GeradorComponent {
    constructor() {
        this.cardsJogos = [];
    }
    ngOnInit() {
        this.cardsJogos = _tiposJogos__WEBPACK_IMPORTED_MODULE_0__.TiposJogos;
    }
}
GeradorComponent.ɵfac = function GeradorComponent_Factory(t) { return new (t || GeradorComponent)(); };
GeradorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GeradorComponent, selectors: [["app-gerador"]], decls: 5, vars: 1, consts: [[1, "flex", "flex-col", "w-full"], ["cdkScrollable", "", 1, "w-full", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "Gerador", "jogo", "lotofacil"], [1, "grid", "grid-cols-1", "sm:grid-cols-3", "lg:grid-cols-4", "gap-8", "mt-8", "sm:mt-10", "p-3"], [4, "ngFor", "ngForOf"], [1, "flex", "flex-col", "shadow", "rounded-2xl", "overflow-hidden", "bg-card"], [1, "flex", "flex-col", "p-6", "justify-between", "h-full"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center"], [1, "icon-size-5", "text-green-600", 3, "svgIcon"], [1, "mt-4", "text-lg", "font-medium"], [1, "mt-0.5", "text-secondary"], [1, "flex", "flex-col", "w-full", "mt-auto"], [1, "w-full", "h-1", "my-6", "border-t-2"], ["mat-stroked-button", "", 3, "routerLink"], [1, "inline-flex", "items-center"], [1, "ml-1.5", "icon-size-5", 3, "svgIcon"]], template: function GeradorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, GeradorComponent_ng_container_4_Template, 19, 9, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cardsJogos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkScrollable, _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_1__.HeaderTitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZXJhZG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 35893:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/containers/gerador/tiposJogos.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TiposJogos": () => (/* binding */ TiposJogos)
/* harmony export */ });
const TiposJogos = [
    {
        tipo: 'Aleatório sem regras',
        titulo: 'Jogo Simples',
        descricao: 'Gerar um jogos simples sem levar em consideração nenhum tipo de regra!',
        rota: 'aleatorio',
        cor: 'lotofacil',
    },
    {
        tipo: 'Nunca Sorteado',
        titulo: 'Com base nos ultimos sorteios',
        descricao: 'Gerar um jogos simples aleatório validando se o mesmo nunca foi sorteado anteriormente!',
        rota: 'nao-sorteado',
        cor: 'lotofacil',
    },
    {
        tipo: 'Base ultimo sorteio',
        titulo: 'Jogo feito de acordo com numeros do ultimo sorteio',
        descricao: 'Gerar 6 jogos simples com base no resultado do ultimo sorteio!',
        rota: 'base-ultimo',
        cor: 'lotofacil',
    },
    {
        tipo: 'Fechamentos',
        titulo: 'Fechamentos para diminuir o numero de jogos!',
        descricao: 'Gerar vários jogos com base no numeros selecionados, fazendo um fechamento para garantir um numero mínimo de acerto com base nas bolas sorteadas!',
        rota: 'fechamento',
        cor: 'lotofacil',
    },
];


/***/ }),

/***/ 49653:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/containers/resultado/resultado.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultadoComponent": () => (/* binding */ ResultadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _shared_components_loteria_header_loteria_header_loteria_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/components/loteria/header-loteria/header-loteria.component */ 23075);
/* harmony import */ var _shared_components_loteria_tabela_resultado_tabela_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/loteria/tabela-resultado/tabela-resultado.component */ 2384);








function ResultadoComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const resultado_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", resultado_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](resultado_r1);
} }
class ResultadoComponent {
    constructor() {
        this.concurso = 'latest';
        this.resultados = [];
        this.resultado = {};
    }
    ngOnInit() { }
    buscarOutroResultado(concurso) {
        this.concurso = concurso;
    }
    gerarListaConcursos(resultado) {
        this.resultado = resultado;
        if (this.resultados.length > 0)
            return;
        let lista = [];
        for (let i = resultado.concurso; i >= 1; i--) {
            lista.push(i);
        }
        this.resultados = lista;
    }
}
ResultadoComponent.ɵfac = function ResultadoComponent_Factory(t) { return new (t || ResultadoComponent)(); };
ResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResultadoComponent, selectors: [["app-resultado"]], decls: 20, vars: 10, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "Lotof\u00E1cil", "jogo", "lotofacil", 3, "concurso", "ultimo"], [1, "flex", "flex-auto", "flex-col", "p-6", "z-10"], [1, "flex", "w-full"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "w-full"], [1, "w-full", "sm:w-44"], [3, "value", "selectionChange"], [3, "value"], [4, "ngFor", "ngForOf"], [3, "resultado"]], template: function ResultadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-header-loteria", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ultimo", function ResultadoComponent_Template_app_header_loteria_ultimo_1_listener($event) { return ctx.gerarListaConcursos($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function ResultadoComponent_Template_mat_select_selectionChange_6_listener($event) { return ctx.buscarOutroResultado($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00DAltimo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ResultadoComponent_ng_container_9_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Estimativa pr\u00F3ximo pr\u00EAmio: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Acumulou: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-tabela-resultado", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("concurso", ctx.concurso);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.resultados);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 7, ctx.resultado.valorEstimadoProximoConcurso, "R$ "));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.resultado.acumulou ? "Sim" : "N\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("resultado", ctx.resultado);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__.CdkScrollable, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _shared_components_loteria_header_loteria_header_loteria_component__WEBPACK_IMPORTED_MODULE_0__.HeaderLoteriaComponent, _shared_components_loteria_tabela_resultado_tabela_resultado_component__WEBPACK_IMPORTED_MODULE_1__.TabelaResultadoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRhZG8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 78904:
/*!************************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/containers/tabelas/tabelas.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabelasComponent": () => (/* binding */ TabelasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_shared_services_resultado_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/resultado.service */ 23741);
/* harmony import */ var _state_lotofacil_resultados_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/lotofacil-resultados.state */ 20933);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/loteria/header-title/header-title.component */ 42291);





class TabelasComponent {
    constructor(_resultadoService, _resultadosState) {
        this._resultadoService = _resultadoService;
        this._resultadosState = _resultadosState;
        this.resultados = [];
    }
    ngOnInit() {
        this._carregaResultados();
    }
    _carregaResultados() {
        console.log(this._resultadosState.resultados);
        if (this._resultadosState.resultados.length > 0) {
            this.resultados = this._resultadosState.resultados;
            return;
        }
        this._resultadoService.getTodosResultados('lotofacil').subscribe({
            next: (resultados) => {
                this.resultados = resultados;
                this._resultadosState.resultados = resultados;
            },
        });
    }
}
TabelasComponent.ɵfac = function TabelasComponent_Factory(t) { return new (t || TabelasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_services_resultado_service__WEBPACK_IMPORTED_MODULE_0__.ResultadoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_state_lotofacil_resultados_state__WEBPACK_IMPORTED_MODULE_1__.LotofacilResultadosState)); };
TabelasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TabelasComponent, selectors: [["app-tabelas"]], decls: 2, vars: 0, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "Tabelas", "jogo", "lotofacil"]], template: function TabelasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.CdkScrollable, _shared_components_loteria_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_2__.HeaderTitleComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJlbGFzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 44546:
/*!****************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/lotofacil.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LotofacilModule": () => (/* binding */ LotofacilModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _components_base_ultimo_base_ultimo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/base-ultimo/base-ultimo.component */ 86402);
/* harmony import */ var _components_fechamento_fechamento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fechamento/fechamento.component */ 2914);
/* harmony import */ var _components_jogo_jogo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/jogo/jogo.component */ 61263);
/* harmony import */ var _components_nao_sorteado_nao_sorteado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nao-sorteado/nao-sorteado.component */ 88305);
/* harmony import */ var _containers_dicas_dicas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/dicas/dicas.component */ 78597);
/* harmony import */ var _containers_ferramentas_ferramentas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/ferramentas/ferramentas.component */ 73794);
/* harmony import */ var _containers_gerador_gerador_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/gerador/gerador.component */ 30380);
/* harmony import */ var _containers_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/resultado/resultado.component */ 49653);
/* harmony import */ var _containers_tabelas_tabelas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/tabelas/tabelas.component */ 78904);
/* harmony import */ var _state_lotofacil_resultados_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/lotofacil-resultados.state */ 20933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);















const routes = [
    { path: '', redirectTo: 'resultado', pathMatch: 'full' },
    { path: 'resultado', component: _containers_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_8__.ResultadoComponent },
    {
        path: 'gerador',
        children: [
            { path: '', component: _containers_gerador_gerador_component__WEBPACK_IMPORTED_MODULE_7__.GeradorComponent },
            { path: 'aleatorio', component: _components_jogo_jogo_component__WEBPACK_IMPORTED_MODULE_3__.JogoComponent },
            { path: 'nao-sorteado', component: _components_nao_sorteado_nao_sorteado_component__WEBPACK_IMPORTED_MODULE_4__.NaoSorteadoComponent },
            { path: 'fechamento', component: _components_fechamento_fechamento_component__WEBPACK_IMPORTED_MODULE_2__.FechamentoComponent },
            { path: 'base-ultimo', component: _components_base_ultimo_base_ultimo_component__WEBPACK_IMPORTED_MODULE_1__.BaseUltimoComponent },
        ],
    },
    { path: 'tabelas', component: _containers_tabelas_tabelas_component__WEBPACK_IMPORTED_MODULE_9__.TabelasComponent },
    { path: 'dicas', component: _containers_dicas_dicas_component__WEBPACK_IMPORTED_MODULE_5__.DicasComponent },
    { path: 'ferramentas', component: _containers_ferramentas_ferramentas_component__WEBPACK_IMPORTED_MODULE_6__.FerramentasComponent },
];
class LotofacilModule {
}
LotofacilModule.ɵfac = function LotofacilModule_Factory(t) { return new (t || LotofacilModule)(); };
LotofacilModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: LotofacilModule });
LotofacilModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_state_lotofacil_resultados_state__WEBPACK_IMPORTED_MODULE_10__.LotofacilResultadosState], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](LotofacilModule, { declarations: [_containers_dicas_dicas_component__WEBPACK_IMPORTED_MODULE_5__.DicasComponent,
        _containers_ferramentas_ferramentas_component__WEBPACK_IMPORTED_MODULE_6__.FerramentasComponent,
        _containers_tabelas_tabelas_component__WEBPACK_IMPORTED_MODULE_9__.TabelasComponent,
        _containers_gerador_gerador_component__WEBPACK_IMPORTED_MODULE_7__.GeradorComponent,
        _containers_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_8__.ResultadoComponent,
        _components_jogo_jogo_component__WEBPACK_IMPORTED_MODULE_3__.JogoComponent,
        _components_nao_sorteado_nao_sorteado_component__WEBPACK_IMPORTED_MODULE_4__.NaoSorteadoComponent,
        _components_fechamento_fechamento_component__WEBPACK_IMPORTED_MODULE_2__.FechamentoComponent,
        _components_base_ultimo_base_ultimo_component__WEBPACK_IMPORTED_MODULE_1__.BaseUltimoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 68998:
/*!**********************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/models/lotofacil.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ETipoGeracao": () => (/* binding */ ETipoGeracao)
/* harmony export */ });
var ETipoGeracao;
(function (ETipoGeracao) {
    ETipoGeracao["ALEATORIO"] = "ALEATORIO";
    ETipoGeracao["ESCOLHER_NUMEROS"] = "ESCOLHER_NUMEROS";
})(ETipoGeracao || (ETipoGeracao = {}));


/***/ }),

/***/ 20933:
/*!********************************************************************************!*\
  !*** ./src/app/modules/loterias/lotofacil/state/lotofacil-resultados.state.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LotofacilResultadosState": () => (/* binding */ LotofacilResultadosState)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LotofacilResultadosState {
    constructor() {
        this._lotofacilResultados$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    }
    get resultados$() {
        return this._lotofacilResultados$.asObservable();
    }
    set resultados(resultados) {
        this._lotofacilResultados$.next(resultados);
    }
    get resultados() {
        return this._lotofacilResultados$.value;
    }
}
LotofacilResultadosState.ɵfac = function LotofacilResultadosState_Factory(t) { return new (t || LotofacilResultadosState)(); };
LotofacilResultadosState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LotofacilResultadosState, factory: LotofacilResultadosState.ɵfac });


/***/ }),

/***/ 52874:
/*!**************************************************!*\
  !*** ./src/app/shared/services/jogos.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JogosService": () => (/* binding */ JogosService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class JogosService {
    constructor(http) {
        this.http = http;
    }
    getJogosTXT(jogos) {
        return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiAutenticacao}/jogos/gerar-arquivo`, jogos, {
            responseType: 'text',
        });
    }
    download(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
JogosService.ɵfac = function JogosService_Factory(t) { return new (t || JogosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
JogosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JogosService, factory: JogosService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_loterias_lotofacil_lotofacil_module_ts.js.map