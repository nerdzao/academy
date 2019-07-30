(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-lg section-shaped pb-250\">\n      <div class=\"shape shape-style-1 shape-default\"></div>\n      <div class=\"container py-lg-md d-flex\">\n        <div class=\"col px-0\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <h1 class=\"display-3  text-white\">Tecnologia descomplicada para iniciantes\n              </h1>\n              <p class=\"lead  text-white\">Entenda mais sobre a área de tecnologia apenas frequentando a nossa academia</p>\n              <div class=\"row\">\n                <div class=\"col text-center\">\n                  <button class=\"btn btn-primary\">Acesse Agora</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n    <!-- 1st Hero Variation -->\n  </div>\n  <section class=\"section section-lg pt-lg-0 mt--200\">\n    <div class=\"container\">\n      <div class=\"row text-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row justify-content-md-center\">\n            <div class=\"col-lg-4 col-md-auto\">\n              <div class=\"card card-lift--hover shadow border-0 bg-dark\">\n                <div class=\"card-body py-5\">\n                    <img src=\"./assets/img/brand/nerdflix.png\" class=\"img-fluid\">\n                  <p class=\"description mt-3 text-white\">A Netflix do Nerdzão</p>\n                  <a class=\"btn btn-primary mt-4\" href=\"https://nerdflix-nerdzao-academy.github.io/\" target=\"_blank\"> Ver</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section pb-0 bg-dark\">\n      <div class=\"container\">\n        <div class=\"row row-grid align-items-center\">\n          <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\n            <div class=\"position-relative pl-md-5\">\n              <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\">\n            </div>\n          </div>\n          <div class=\"col-lg-6 order-lg-1\">\n            <div class=\"d-flex px-3\">\n              <div>\n                <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-dark\">\n                  <i class=\"fa fa-question text-dark\"></i>\n                </div>\n              </div>\n              <div class=\"pl-4\">\n                <h4 class=\"display-3 text-white\">O que você vai aprender?</h4>\n              </div>\n            </div>\n            <div class=\"card shadow shadow-lg--hover mt-5\" *ngFor=\"let item of data.learnPlanningData\">\n              <div class=\"card-body\">\n                <div class=\"d-flex px-3\">\n                  <div>\n                    <div class=\"icon icon-shape bg-primary rounded-circle text-white\">\n                      <i [class]=\"item.icon\"></i>\n                    </div>\n                  </div>\n                  <div class=\"pl-4\">\n                    <h5 class=\"title text-primary\">{{item.title}}</h5>\n                    <p>{{item.text}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </section>\n    \n  <section class=\"section section-lg  bg-dark\">\n    <div class=\"container pt-lg pb-100\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-12 mt-5 mt-lg-0\">\n          <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n            <ngb-panel id=\"static-1\" *ngFor=\"let item of data.contentData;let i = index\" #target>\n              <ng-template ngbPanelTitle>\n                <span> #{{i+1}} - {{item.title}} </span>\n              </ng-template>\n              <ng-template ngbPanelContent>\n                <ul class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item\" *ngFor=\"let content of item.content\">{{content}}</li>\n                </ul>\n              </ng-template>\n            </ngb-panel>\n\n\n          </ngb-accordion>\n        </div>\n\n      </div>\n\n    </div>\n  </section>\n\n\n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center mb-lg\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-3\">Time</h2>\n          <p class=\"lead text-muted\">Os mentores</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-lg-3 mb-5 mb-lg-0\" *ngFor=\"let member of data.teamData\">\n          <div class=\"px-4\">\n            <img [src]=\"member.img\" class=\"rounded-circle img-center img-fluid shadow shadow-lg--hover\"\n              style=\"width: 200px;\">\n            <div class=\"pt-4 text-center\">\n              <h5 class=\"title\">\n                <span class=\"d-block mb-1\">{{ member.name }}</span>\n              </h5>\n              <div class=\"mt-3\">\n                <a [href]=\"member.facebook\" target=\"_blank\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-facebook\"></i>\n                </a>\n                <a [href]=\"member.github\" target=\"_blank\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-github\"></i>\n                </a>\n                <a [href]=\"member.linkedin\" target=\"_blank\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                  <i class=\"fa fa-linkedin\"></i>\n                </a>\n                <a [href]=\"member.site\" target=\"_blank\" class=\"btn btn-primary btn-icon-only rounded-circle\">\n                    <i class=\"fa fa-globe\"></i>\n                  </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg bg-dark\">\n    <div class=\"container pt-lg pb-300\">\n      <div class=\"row text-center justify-content-center\">\n        <div class=\"col-lg-10\">\n          <h2 class=\"display-3 text-white\">Parceiros</h2>\n          <p class=\"lead text-white\">Quem ajuda a fazer acontecer</p>\n        </div>\n      </div>\n      <div class=\"row row-grid mt-5\">\n\n        <div class=\"col-lg-4\" *ngFor=\"let partner of data.partnersData\">\n            <a [href]=\"partner.link\" target=\"_blank\">\n            <img [src]=\"partner.img\" class=\"rounded-circle img-center img-fluid\"\n              style=\"width: 200px;\">\n            </a>\n        </div>\n\n      </div>\n    </div>\n    <!-- SVG separator -->\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </section>\n\n</main>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-content {\n  background-color: transparent !important;\n  color: white; }\n\n::ng-deep .dropdown-menu {\n  transform: none;\n  left: -40px;\n  display: block;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlbHJpbm8vcHJvamVjdHMvbmVyZHphby1hY2FkZW15L3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQXdDO0VBQ3hDLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnRhYi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51IHsgXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGxlZnQ6IC00MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/data/content */ "./src/helpers/data/content.ts");
/* harmony import */ var _helpers_data_team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/data/team */ "./src/helpers/data/team.ts");
/* harmony import */ var _helpers_data_learn_planning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/data/learn-planning */ "./src/helpers/data/learn-planning.ts");
/* harmony import */ var _helpers_data_partners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/data/partners */ "./src/helpers/data/partners.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = {
            contentData: _helpers_data_content__WEBPACK_IMPORTED_MODULE_1__["contentData"], learnPlanningData: _helpers_data_learn_planning__WEBPACK_IMPORTED_MODULE_3__["learnPlanningData"], partnersData: _helpers_data_partners__WEBPACK_IMPORTED_MODULE_4__["partnersData"], teamData: _helpers_data_team__WEBPACK_IMPORTED_MODULE_2__["teamData"]
        };
    }
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\"\n  [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\n\n  <div class=\"container\">\n    <div class=\"row row-grid align-items-center\"\n      [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/register' || getPath()==='/login'}\">\n      <div class=\"col-lg-6\">\n        <h3 class=\"text-primary font-weight-light mb-2\">nerdzao.academy@gmail.com</h3>\n        <h4 class=\"mb-0 font-weight-light\">Lorem ipsum text example.</h4>\n      </div>\n      <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n        <a target=\"_blank\" href=\"https://instagram.com/onerdzao\"\n          class=\"btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg\" ngbTooltip=\"Follow us instagram\">\n          <i class=\"fa fa-instagram\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://twitter.com/onerdzao\"\n          class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\">\n          <i class=\"fa fa-twitter\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://www.facebook.com/nerdzao/\"\n          class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\">\n          <i class=\"fa fa-facebook-square\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://www.linkedin.com/company/nerdz%C3%A3o/\"\n          class=\"btn btn-neutral btn-icon-only btn-linkedin btn-lg btn-round\" ngbTooltip=\"Star on Linkedin\">\n          <i class=\"fa fa-linkedin\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://github.com/nerdzao\"\n          class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://meetup.com/pt-BR/Nerdzao/\"\n          class=\"btn btn-neutral btn-icon-only btn-meetup btn-round btn-lg\" ngbTooltip=\"Star on \">\n          <i class=\"fa fa-meetup\"></i>\n        </a>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row align-items-center justify-content-md-between\">\n      <div class=\"col-md-6\">\n        <div class=\"copyright\">\n          &copy; {{test | date: 'yyyy'}}\n          <a href=\"https://github.com/nerdzao\" target=\"_blank\">Nerdzão</a>.\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ul class=\"nav nav-footer justify-content-end\">\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" target=\"_blank\">Sobre nós</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" target=\"_blank\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar-main\" class=\"navbar navbar-expand-lg navbar-transparent navbar-dark bg-dark\"\n  style=\"position: fixed;\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n      <img src=\"./assets/img/brand/nerdzao.png\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/home']\">\n              <img src=\"./assets/img/brand/nerdzao.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\n              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\"\n            title=\"Like us on Facebook\" target=\"_blank\" href=\"https://www.facebook.com/nerdzao/\">\n            <i class=\"fa fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\" title=\"Follow us on Instagram\" target=\"_blank\" href=\"https://instagram.com/onerdzao\">\n            <i class=\"fa fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" data-toggle=\"tooltip\"\n            title=\"Follow us on Twitter\" target=\"_blank\" href=\"https://twitter.com/onerdzao\">\n            <i class=\"fa fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" target=\"_blank\" href=\"https://github.com/nerdzao\" data-toggle=\"tooltip\" title=\"Star us on Github\">\n            <i class=\"fa fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" target=\"_blank\" href=\"https://meetup.com/nerdzao\" data-toggle=\"tooltip\" title=\"Star us on Meetup\">\n              <i class=\"fa fa-meetup\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">meetup</span>\n            </a>\n          </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router) {
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //   this.router.events.subscribe((event) => {
        //     this.isCollapsed = true;
        //     if (event instanceof NavigationStart) {
        //        if (event.url != this.lastPoppedUrl)
        //            this.yScrollStack.push(window.scrollY);
        //    } else if (event instanceof NavigationEnd) {
        //        if (event.url == this.lastPoppedUrl) {
        //            this.lastPoppedUrl = undefined;
        //            window.scrollTo(0, this.yScrollStack.pop());
        //        } else
        //            window.scrollTo(0, 0);
        //    }
        //  });
        //  this.location.subscribe((ev:PopStateEvent) => {
        //      this.lastPoppedUrl = ev.url;
        //  });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isOrderPage = function () {
        var titlee = this.location.path().split("/");
        return (titlee[1] !== 'order');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/helpers/data/content.ts":
/*!*************************************!*\
  !*** ./src/helpers/data/content.ts ***!
  \*************************************/
/*! exports provided: contentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentData", function() { return contentData; });
var contentData = [
    {
        title: 'Desenvolvimento Web',
        content: [
            'Introdução',
            'HTML',
            'CSS',
            'JavaScript',
        ]
    },
    {
        title: 'Fundamentos Projeto',
        content: [
            'Introdução',
            'Ciclo de vida do projeto',
            'GIT',
            'GitHub',
        ]
    },
    {
        title: 'Node.js',
        content: [
            'Introdução',
            'Instalação Node.js e NPM',
            'NodeBR',
        ]
    },
    {
        title: 'Angular',
        content: [
            'Introdução',
            'Instalação e Configuração',
            'Componente',
            'Assets',
            'SASS',
            'Service',
        ]
    },
    {
        title: 'Integrando com Firebase',
        content: [
            'Introdução',
            'Configuração e integração',
        ]
    },
    {
        title: 'Back-end',
        content: [
            'Introdução',
            'Instalação e Configuração',
            'Migrations',
            'Seeds',
            'Request',
            'Response',
            'Integrando',
        ]
    },
    {
        title: 'Docker',
        content: [
            'Introdução',
            'Instalação e Configuração',
            'Docker compose',
        ]
    },
    {
        title: 'React native',
        content: [
            'Introdução',
            'Instalação e Configuração',
            'PENDENTE',
            'PENDENTE',
            'PENDENTE',
            'PENDENTE',
        ]
    },
    {
        title: 'Publicação',
        content: [
            'Introdução',
            'Web no Github Pages',
            'API no Heorku',
            'Aplicativo na play store',
        ]
    },
];



/***/ }),

/***/ "./src/helpers/data/learn-planning.ts":
/*!********************************************!*\
  !*** ./src/helpers/data/learn-planning.ts ***!
  \********************************************/
/*! exports provided: learnPlanningData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learnPlanningData", function() { return learnPlanningData; });
var learnPlanningData = [
    {
        icon: "fa fa-tasks",
        title: "Planejamento de projeto",
        text: "O hábito de planejar é tão importante quanto executar",
    },
    {
        icon: "fa fa-history",
        title: "Versionamento em projeto",
        text: "Versionamento ajuda a ter histórico e planejamento de arquitetura do projeto",
    },
    {
        icon: "fa fa-code",
        title: "Front-end",
        text: "Camada do projeto que é exibida ao cliente",
    },
    {
        icon: "fa fa-server",
        title: "Back-end",
        text: "Camada do proejeto onde fica a regra de negócios e armazenamento de dados",
    },
    {
        icon: "fa fa-rocket",
        title: "Infraestrutrua",
        text: "Colocando seu projeto em produção",
    }
];



/***/ }),

/***/ "./src/helpers/data/partners.ts":
/*!**************************************!*\
  !*** ./src/helpers/data/partners.ts ***!
  \**************************************/
/*! exports provided: partnersData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partnersData", function() { return partnersData; });
var partnersData = [
    {
        img: 'https://i2.wp.com/nodebr.org/wp-content/uploads/2017/07/cropped-ico.png?fit=200%2C200&ssl=1',
        link: 'https://treinamento.nodebr.org/'
    },
    {
        img: 'https://treinamento.nodebr.org/_nuxt/img/6fb2855.png',
        link: 'https://www.facebook.com/thememecode/'
    }
];



/***/ }),

/***/ "./src/helpers/data/team.ts":
/*!**********************************!*\
  !*** ./src/helpers/data/team.ts ***!
  \**********************************/
/*! exports provided: teamData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamData", function() { return teamData; });
var teamData = [
    {
        facebook: 'https://www.facebook.com/matheus.tadeu.71',
        github: 'https://github.com/tadeumx1',
        linkedin: 'https://www.linkedin.com/in/matheus-tadeu/',
        img: './assets/img/team/tadeu.jpg',
        name: 'Matheus Tadeu',
        site: 'https://matheustadeu.com/'
    },
    {
        facebook: 'https://www.facebook.com/velrino.magalhaes',
        github: 'https://github.com/velrino',
        linkedin: 'https://www.linkedin.com/in/velrino/',
        img: './assets/img/team/velrino.jpg',
        name: 'Velrino',
        site: 'https://velrino.github.io/'
    }
];



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/velrino/projects/nerdzao-academy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map