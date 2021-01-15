(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\841576\Desktop\Downloads\angular-demo-master\angular-demo-master\src\main.ts */"zUnb");


/***/ }),

/***/ "1VHI":
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let HelloComponent = class HelloComponent {
};
HelloComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: `<h1>Hello {{name}}!</h1>`,
        styles: ["h1 { font-family: Lato; }"]
    })
], HelloComponent);



/***/ }),

/***/ "6gEK":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-list/customers-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Customers</h1>\n<div *ngFor=\"let customer of customers\" style=\"width: 300px;\">\n  <app-customer-details [customer]='customer'></app-customer-details>\n</div>\n<div style=\"margin-top:20px;\">\n  <button type=\"button\" class=\"button btn-danger\" (click)='deleteCustomers()'>Delete All</button>\n</div>");

/***/ }),

/***/ "6i1p":
/*!***********************************************************************!*\
  !*** ./src/app/customers/customers-list/customers-list.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */");

/***/ }),

/***/ "HsVU":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/create-customer/create-customer.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Create Customer</h3>\n<div [hidden]=\"submitted\" style=\"width: 300px;\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <table>\n        <tr>\n          <td>\n            <label for=\"name\">Name</label>\n          </td>\n          <td>\n            <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"customer.name\" name=\"name\">\n          </td></tr>\n          <tr><td>\n            <label for=\"age\">Age</label>\n          </td><td>\n            <input type=\"text\" class=\"form-control\" id=\"age\" required [(ngModel)]=\"customer.age\" name=\"age\">\n          </td></tr>\n          <td></td>\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button></table>\n          </div></form>\n</div>\n \n<div [hidden]=\"!submitted\">\n  <h4>You submitted successfully!</h4>\n  <button class=\"btn btn-success\" (click)=\"newCustomer()\">Add</button>\n</div>");

/***/ }),

/***/ "LBrU":
/*!********************************************!*\
  !*** ./src/environiments/environiments.ts ***!
  \********************************************/
/*! exports provided: environiment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environiment", function() { return environiment; });
const environiment = {
    firebase: {
        apiKey: "AIzaSyAOclQzxWig1ZBdgUipXlgmdV4paMr_jV4",
        authDomain: "pepper-90233.firebaseapp.com",
        projectId: "pepper-90233",
        storageBucket: "pepper-90233.appspot.com",
        messagingSenderId: "345794673518",
        appId: "1:345794673518:web:4fe30588db052748d79f7f"
    }
};


/***/ }),

/***/ "SJ6h":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-details/customer-details.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"customer\">\n  <div>\n    <label>First Name: </label> {{customer.name}}\n  </div>\n  <div>\n    <label>Age: </label> {{customer.age}}\n  </div>\n  <div>\n    <label>Active: </label> {{customer.active}}\n  </div>\n \n  <span class=\"button is-small btn-primary\" *ngIf='customer.active' (click)='updateActive(false)'>Inactive</span>\n \n  <span class=\"button is-small btn-primary\" *ngIf='!customer.active' (click)='updateActive(true)'>Active</span>\n &nbsp;\n  <span class=\"button is-small btn-danger\" (click)='deleteCustomer()'>Delete</span>\n \n  <hr/>\n</div>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Customer List';
        this.description = 'Find your customers and use it';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T7sC":
/*!***********************************************!*\
  !*** ./src/app/customers/customer.service.ts ***!
  \***********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");



let CustomerService = class CustomerService {
    constructor(db) {
        this.db = db;
        this.dbPath = '/customers';
        this.customersRef = null;
        this.customersRef = db.list(this.dbPath);
    }
    createCustomer(customer) {
        this.customersRef.push(customer);
    }
    updateCustomer(key, value) {
        return this.customersRef.update(key, value);
    }
    deleteCustomer(key) {
        return this.customersRef.remove(key);
    }
    getCustomersList() {
        return this.customersRef;
    }
    deleteAll() {
        return this.customersRef.remove();
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
CustomerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "UE6y":
/*!**************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-details.component.html */ "SJ6h");
/* harmony import */ var _customer_details_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-details.component.css */ "XMJE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer.service */ "T7sC");





let CustomerDetailsComponent = class CustomerDetailsComponent {
    constructor(customerService) {
        this.customerService = customerService;
    }
    ngOnInit() {
    }
    updateActive(isActive) {
        this.customerService
            .updateCustomer(this.customer.key, { active: isActive })
            .catch(err => console.log(err));
    }
    deleteCustomer() {
        this.customerService
            .deleteCustomer(this.customer.key)
            .catch(err => console.log(err));
    }
};
CustomerDetailsComponent.ctorParameters = () => [
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
];
CustomerDetailsComponent.propDecorators = {
    customer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CustomerDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-details',
        template: _raw_loader_customer_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_details_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerDetailsComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div style=\"color: blue;\">\n    <h1>{{title}}</h1>\n    <h3>{{description}}</h3>\n  </div>\n \n  <nav>\n    <a routerLink=\"customers\" class=\"btn btn-primary active\" role=\"button\" routerLinkActive=\"active\">Customers</a>&nbsp;&nbsp;\n    <a routerLink=\"add\" class=\"btn btn-primary active\" role=\"button\" routerLinkActive=\"active\">Add</a>\n  </nav>\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "XMJE":
/*!***************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello.component */ "1VHI");
/* harmony import */ var _customers_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customer.service */ "T7sC");
/* harmony import */ var _customers_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customers/customer-details/customer-details.component */ "UE6y");
/* harmony import */ var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers-list/customers-list.component */ "oe4g");
/* harmony import */ var _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers/create-customer/create-customer.component */ "y11v");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _environiments_environiments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environiments/environiments */ "LBrU");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environiments_environiments__WEBPACK_IMPORTED_MODULE_12__["environiment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"],
            _customers_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailsComponent"],
            _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomersListComponent"],
            _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_9__["CreateCustomerComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        providers: [_customers_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"]]
    })
], AppModule);



/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "iqV6":
/*!*************************************************************************!*\
  !*** ./src/app/customers/create-customer/create-customer.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "oe4g":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customers-list/customers-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customers_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customers-list.component.html */ "6gEK");
/* harmony import */ var _customers_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers-list.component.css */ "6i1p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer.service */ "T7sC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let CustomersListComponent = class CustomersListComponent {
    constructor(customerService) {
        this.customerService = customerService;
    }
    ngOnInit() {
        this.getCustomersList();
    }
    getCustomersList() {
        this.customerService.getCustomersList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(customers => {
            this.customers = customers;
        });
    }
    deleteCustomers() {
        this.customerService.deleteAll().catch(err => console.log(err));
    }
};
CustomersListComponent.ctorParameters = () => [
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"] }
];
CustomersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customers-list',
        template: _raw_loader_customers_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customers_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomersListComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers/create-customer/create-customer.component */ "y11v");
/* harmony import */ var _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers/customers-list/customers-list.component */ "oe4g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    { path: '', redirectTo: 'customers', pathMatch: 'full' },
    { path: 'customers', component: _customers_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomersListComponent"] },
    { path: 'add', component: _customers_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_1__["CreateCustomerComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xpL3":
/*!***************************************!*\
  !*** ./src/app/customers/customer.ts ***!
  \***************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
    constructor() {
        this.active = true;
    }
}


/***/ }),

/***/ "y11v":
/*!************************************************************************!*\
  !*** ./src/app/customers/create-customer/create-customer.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_customer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-customer.component.html */ "HsVU");
/* harmony import */ var _create_customer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-customer.component.css */ "iqV6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer */ "xpL3");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer.service */ "T7sC");






let CreateCustomerComponent = class CreateCustomerComponent {
    constructor(customerService) {
        this.customerService = customerService;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
        this.submitted = false;
    }
    ngOnInit() {
    }
    newCustomer() {
        this.submitted = false;
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
    }
    save() {
        this.customerService.createCustomer(this.customer);
        this.customer = new _customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
    }
    onSubmit() {
        this.submitted = true;
        this.save();
    }
};
CreateCustomerComponent.ctorParameters = () => [
    { type: _customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] }
];
CreateCustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-customer',
        template: _raw_loader_create_customer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_customer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateCustomerComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
}).catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map