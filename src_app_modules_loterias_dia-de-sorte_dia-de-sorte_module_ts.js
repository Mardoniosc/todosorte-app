"use strict";
(self["webpackChunkstandart"] = self["webpackChunkstandart"] || []).push([["src_app_modules_loterias_dia-de-sorte_dia-de-sorte_module_ts"],{

/***/ 66209:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/loterias/dia-de-sorte/containers/resultado/resultado.component.ts ***!
  \*******************************************************************************************/
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
ResultadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResultadoComponent, selectors: [["app-resultado"]], decls: 20, vars: 10, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "flex-col", "min-w-0", "overflow-y-auto"], ["titulo", "Dia de Sorte", "jogo", "diadesorte", 3, "concurso", "ultimo"], [1, "flex", "flex-auto", "flex-col", "p-6", "z-10"], [1, "flex", "w-full"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "w-full"], [1, "w-full", "sm:w-44"], [3, "value", "selectionChange"], [3, "value"], [4, "ngFor", "ngForOf"], [3, "resultado"]], template: function ResultadoComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ 9143:
/*!**********************************************************************!*\
  !*** ./src/app/modules/loterias/dia-de-sorte/dia-de-sorte.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiaDeSorteModule": () => (/* binding */ DiaDeSorteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 44466);
/* harmony import */ var _containers_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/resultado/resultado.component */ 66209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: '', redirectTo: 'resultado', pathMatch: 'full' },
    { path: 'resultado', component: _containers_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_1__.ResultadoComponent },
];
class DiaDeSorteModule {
}
DiaDeSorteModule.ɵfac = function DiaDeSorteModule_Factory(t) { return new (t || DiaDeSorteModule)(); };
DiaDeSorteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DiaDeSorteModule });
DiaDeSorteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DiaDeSorteModule, { declarations: [_containers_resultado_resultado_component__WEBPACK_IMPORTED_MODULE_1__.ResultadoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_loterias_dia-de-sorte_dia-de-sorte_module_ts.js.map