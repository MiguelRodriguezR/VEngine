function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'VEngine';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
        }
      },
      directives: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.less']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/side-bar/side-bar.component */
    "./src/app/components/side-bar/side-bar.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _visualizations_sin_sin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./visualizations/sin/sin.component */
    "./src/app/visualizations/sin/sin.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _visualizations_maurer_rose_maurer_rose_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./visualizations/maurer-rose/maurer-rose.component */
    "./src/app/visualizations/maurer-rose/maurer-rose.component.ts");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _visualizations_collatz_conjecture_collatz_conjecture_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./visualizations/collatz-conjecture/collatz-conjecture.component */
    "./src/app/visualizations/collatz-conjecture/collatz-conjecture.component.ts");
    /* harmony import */


    var _visualizations_hilbert_curve_hilbert_curve_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./visualizations/hilbert-curve/hilbert-curve.component */
    "./src/app/visualizations/hilbert-curve/hilbert-curve.component.ts");
    /* harmony import */


    var _visualizations_perlin_noise3d_perlin_noise3d_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./visualizations/perlin-noise3d/perlin-noise3d.component */
    "./src/app/visualizations/perlin-noise3d/perlin-noise3d.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"], _visualizations_sin_sin_component__WEBPACK_IMPORTED_MODULE_7__["SinComponent"], _visualizations_maurer_rose_maurer_rose_component__WEBPACK_IMPORTED_MODULE_10__["MaurerRoseComponent"], _visualizations_collatz_conjecture_collatz_conjecture_component__WEBPACK_IMPORTED_MODULE_14__["CollatzConjectureComponent"], _visualizations_hilbert_curve_hilbert_curve_component__WEBPACK_IMPORTED_MODULE_15__["HilbertCurveComponent"], _visualizations_perlin_noise3d_perlin_noise3d_component__WEBPACK_IMPORTED_MODULE_16__["PerlinNoise3dComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"], _visualizations_sin_sin_component__WEBPACK_IMPORTED_MODULE_7__["SinComponent"], _visualizations_maurer_rose_maurer_rose_component__WEBPACK_IMPORTED_MODULE_10__["MaurerRoseComponent"], _visualizations_collatz_conjecture_collatz_conjecture_component__WEBPACK_IMPORTED_MODULE_14__["CollatzConjectureComponent"], _visualizations_hilbert_curve_hilbert_curve_component__WEBPACK_IMPORTED_MODULE_15__["HilbertCurveComponent"], _visualizations_perlin_noise3d_perlin_noise3d_component__WEBPACK_IMPORTED_MODULE_16__["PerlinNoise3dComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_visualizations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/visualizations.service */
    "./src/app/services/visualizations.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../side-bar/side-bar.component */
    "./src/app/components/side-bar/side-bar.component.ts");

    var _c0 = ["visualizationContainer"];

    function MainComponent_div_1_app_side_bar_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-side-bar", 10);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r4._vs.actual.name)("linkExp", ctx_r4._vs.actual.exp)("visualization", ctx_r4.actualRef);
      }
    }

    function MainComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_1_app_side_bar_1_Template, 1, 3, "app-side-bar", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.actualRef);
      }
    }

    function MainComponent_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var visual_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", visual_r5.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](visual_r5.name);
      }
    }

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(vs, resolver) {
        _classCallCheck(this, MainComponent);

        this.vs = vs;
        this.resolver = resolver;
        this.actualRef = null;
        this.loading = false;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.createVisualization();
        }
      }, {
        key: "createVisualization",
        value: function createVisualization() {
          var _this = this;

          // console.log(this.actualRef);
          if (this.actualRef) {
            var ref = this.actualRef;
            setTimeout(function () {
              ref.destroy();
              _this.loading = false;
            }, 50);
          }

          var factory = this.resolver.resolveComponentFactory(this.vs.actual.component);
          var componentRef = this.visualizationContainer.createComponent(factory);
          this.actualRef = componentRef; // console.log(this.vs);
        }
      }, {
        key: "changeActualRef",
        value: function changeActualRef(ref) {
          this.loading = true;
          this.vs.actual = this.vs.declared.find(function (v) {
            return v.name == ref;
          });
          this.createVisualization();
        }
      }, {
        key: "_vs",
        get: function get() {
          return this.vs;
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_visualizations_service__WEBPACK_IMPORTED_MODULE_1__["VisualizationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      viewQuery: function MainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.visualizationContainer = _t.first);
        }
      },
      decls: 8,
      vars: 2,
      consts: [[1, "main-wraper"], ["class", "side-bar", 4, "ngIf"], [1, "visualization-container"], [1, "c"], ["visualizationContainer", ""], [3, "change"], ["selector", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "side-bar"], [3, "title", "linkExp", "visualization", 4, "ngIf"], [3, "title", "linkExp", "visualization"], [3, "value"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_1_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainComponent_Template_select_change_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.changeActualRef(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainComponent_option_7_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._vs.declared);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"]],
      styles: [".main-wraper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.visualization-container[_ngcontent-%COMP%] {\n  width: calc(100% - 200px);\n  height: 100vh;\n  overflow: hidden;\n}\n.c-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\nselect[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 10px;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbWFpbi9DOi9wZXJzb25hbC9WaXN1YWxpemF0aW9uRW5naW5lL1ZFbmdpbmUvc3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQubGVzcyIsIi4uL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0ZGIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4td3JhcGVye1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udmlzdWFsaXphdGlvbi1jb250YWluZXJ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jLWJ0bntcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnNlbGVjdHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuIiwiLm1haW4td3JhcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi52aXN1YWxpemF0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYy1idG4ge1xuICB3aWR0aDogMTAwJTtcbn1cbnNlbGVjdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.less']
        }]
      }], function () {
        return [{
          type: _services_visualizations_service__WEBPACK_IMPORTED_MODULE_1__["VisualizationsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        visualizationContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['visualizationContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/side-bar/side-bar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/side-bar/side-bar.component.ts ***!
    \***********************************************************/

  /*! exports provided: SideBarComponent */

  /***/
  function srcAppComponentsSideBarSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBarComponent", function () {
      return SideBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../entities/reasignable */
    "./src/app/entities/reasignable.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

    function SideBarComponent_div_7_div_1_mat_form_field_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SideBarComponent_div_7_div_1_mat_form_field_1_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.fieldChange($event, field_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r9[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r9[1].value);
      }
    }

    function SideBarComponent_div_7_div_1_mat_form_field_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SideBarComponent_div_7_div_1_mat_form_field_2_Template_input_change_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.fieldChange($event, field_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r9[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r9[1].value);
      }
    }

    function SideBarComponent_div_7_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slider", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SideBarComponent_div_7_div_1_div_3_Template_mat_slider_input_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.fieldChange($event, field_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r9[0]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r9[1].value)("min", field_r9[1].min)("max", field_r9[1].max);
      }
    }

    function SideBarComponent_div_7_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-slide-toggle", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SideBarComponent_div_7_div_1_div_4_Template_mat_slide_toggle_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.fieldChange($event, field_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", field_r9[1].value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", field_r9[0], " ");
      }
    }

    function SideBarComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideBarComponent_div_7_div_1_mat_form_field_1_Template, 4, 2, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideBarComponent_div_7_div_1_mat_form_field_2_Template, 4, 2, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideBarComponent_div_7_div_1_div_3_Template, 4, 4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SideBarComponent_div_7_div_1_div_4_Template, 3, 2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var field_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", field_r9[1].message ? field_r9[1].message : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r9[1].type == "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r9[1].type == "color");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r9[1].type == "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", field_r9[1].type == "checkbox");
      }
    }

    function SideBarComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideBarComponent_div_7_div_1_Template, 5, 5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.params);
      }
    }

    var SideBarComponent =
    /*#__PURE__*/
    function () {
      function SideBarComponent() {
        _classCallCheck(this, SideBarComponent);

        this.params = [];
      }

      _createClass(SideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.params = Object.entries(this.visualization.instance).filter(function (e) {
            return e[1] instanceof _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"];
          }); // this.params[0][1].value = 20;
          // console.log(this.params);
          // console.log(this.visualization);
        }
      }, {
        key: "fieldChange",
        value: function fieldChange(e, field) {
          if (field[1].type == 'number') {
            field[1].value = Number(e.target.value);
          }

          if (field[1].type == 'color') {
            field[1].value = e.target.value;
          }

          if (field[1].type == 'slide') {
            field[1].value = e.value;
          }

          if (field[1].type == 'checkbox') {
            field[1].value = e.checked;
          }
        }
      }]);

      return SideBarComponent;
    }();

    SideBarComponent.ɵfac = function SideBarComponent_Factory(t) {
      return new (t || SideBarComponent)();
    };

    SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideBarComponent,
      selectors: [["app-side-bar"]],
      inputs: {
        visualization: "visualization",
        title: "title",
        linkExp: "linkExp"
      },
      decls: 8,
      vars: 3,
      consts: [[1, "main-container"], [1, "side-title"], ["mat-raised-button", "", "color", "primary", "target", "_blank", 1, "side-subtitle", "c-btn", 3, "href"], [1, "side-subtitle"], ["class", "fields", 4, "ngIf"], [1, "fields"], ["class", "field", 3, "matTooltip", 4, "ngFor", "ngForOf"], [1, "field", 3, "matTooltip"], [4, "ngIf"], ["class", "slider", 4, "ngIf"], ["matInput", "", 3, "value", "change"], ["matInput", "", "type", "color", 3, "value", "change"], [1, "slider"], [1, "label"], ["color", "primary", "thumbLabel", "", 3, "value", "min", "max", "input"], ["color", "primary", 1, "label", 3, "checked", "change"]],
      template: function SideBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "EXPLANATION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " CONSTANTS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SideBarComponent_div_7_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkExp, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.params.length > 0);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggle"]],
      styles: [".main-container[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100vh;\n  background-color: #F3F3F3;\n  padding: 10px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.side-title[_ngcontent-%COMP%], .side-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.side-title[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n}\n.slider[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  min-width: 149px !important;\n}\n.label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvc2lkZS1iYXIvQzovcGVyc29uYWwvVmlzdWFsaXphdGlvbkVuZ2luZS9WRW5naW5lL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQubGVzcyIsIi4uL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBOztFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0FDQUY7QURHQTtFQUNFLG1CQUFBO0FDREY7QURJQTtFQUNFLDJCQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNIRiIsImZpbGUiOiIuLi9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVye1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uc2lkZS10aXRsZSwgLnNpZGUtc3VidGl0bGV7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zaWRlLXRpdGxle1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4uc2xpZGVye1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgbWluLXdpZHRoOiAxNDlweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWx7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4iLCIubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLnNpZGUtdGl0bGUsXG4uc2lkZS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2lkZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG59XG4uc2xpZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYXQtc2xpZGVyLWhvcml6b250YWwge1xuICBtaW4td2lkdGg6IDE0OXB4ICFpbXBvcnRhbnQ7XG59XG4ubGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-bar',
          templateUrl: './side-bar.component.html',
          styleUrls: ['./side-bar.component.less']
        }]
      }], function () {
        return [];
      }, {
        visualization: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkExp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/entities/reasignable.ts":
  /*!*****************************************!*\
    !*** ./src/app/entities/reasignable.ts ***!
    \*****************************************/

  /*! exports provided: Reasignable */

  /***/
  function srcAppEntitiesReasignableTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Reasignable", function () {
      return Reasignable;
    });

    var Reasignable = function Reasignable(value, type) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Reasignable);

      this.value = null;
      this.type = null;
      this.min = null;
      this.max = null;
      this.message = null;
      this.value = value;
      this.type = type;
      this.min = options.min;
      this.max = options.max;
      this.message = options.message;
    };
    /***/

  },

  /***/
  "./src/app/services/visualizations.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/visualizations.service.ts ***!
    \****************************************************/

  /*! exports provided: VisualizationsService */

  /***/
  function srcAppServicesVisualizationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizationsService", function () {
      return VisualizationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _visualizations_sin_sin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../visualizations/sin/sin.component */
    "./src/app/visualizations/sin/sin.component.ts");
    /* harmony import */


    var _visualizations_maurer_rose_maurer_rose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../visualizations/maurer-rose/maurer-rose.component */
    "./src/app/visualizations/maurer-rose/maurer-rose.component.ts");
    /* harmony import */


    var _visualizations_collatz_conjecture_collatz_conjecture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../visualizations/collatz-conjecture/collatz-conjecture.component */
    "./src/app/visualizations/collatz-conjecture/collatz-conjecture.component.ts");
    /* harmony import */


    var _visualizations_hilbert_curve_hilbert_curve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../visualizations/hilbert-curve/hilbert-curve.component */
    "./src/app/visualizations/hilbert-curve/hilbert-curve.component.ts");
    /* harmony import */


    var _visualizations_perlin_noise3d_perlin_noise3d_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../visualizations/perlin-noise3d/perlin-noise3d.component */
    "./src/app/visualizations/perlin-noise3d/perlin-noise3d.component.ts");

    var VisualizationsService = function VisualizationsService() {
      _classCallCheck(this, VisualizationsService);

      this.declared = [{
        component: _visualizations_perlin_noise3d_perlin_noise3d_component__WEBPACK_IMPORTED_MODULE_5__["PerlinNoise3dComponent"],
        name: 'Perlin Noise 3d',
        exp: 'https://en.wikipedia.org/wiki/Perlin_noise'
      }, {
        component: _visualizations_hilbert_curve_hilbert_curve_component__WEBPACK_IMPORTED_MODULE_4__["HilbertCurveComponent"],
        name: 'Hilbert Curve',
        exp: 'https://en.wikipedia.org/wiki/Hilbert_curve'
      }, {
        component: _visualizations_collatz_conjecture_collatz_conjecture_component__WEBPACK_IMPORTED_MODULE_3__["CollatzConjectureComponent"],
        name: 'Collatz Conjecture',
        exp: 'https://en.wikipedia.org/wiki/Collatz_conjecture'
      }, {
        component: _visualizations_maurer_rose_maurer_rose_component__WEBPACK_IMPORTED_MODULE_2__["MaurerRoseComponent"],
        name: 'Maurer Rose',
        exp: 'https://en.wikipedia.org/wiki/Maurer_rose'
      }, {
        component: _visualizations_sin_sin_component__WEBPACK_IMPORTED_MODULE_1__["SinComponent"],
        name: 'Sine',
        exp: 'https://en.wikipedia.org/wiki/Sine'
      }];
      this.actual = this.declared[0];
    };

    VisualizationsService.ɵfac = function VisualizationsService_Factory(t) {
      return new (t || VisualizationsService)();
    };

    VisualizationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: VisualizationsService,
      factory: VisualizationsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/functions.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/functions.ts ***!
    \*************************************/

  /*! exports provided: initCanvas, clear, clear3D, drawPoint, beginShape, endShape, toDegrees, toRadians */

  /***/
  function srcAppSharedFunctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initCanvas", function () {
      return initCanvas;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clear", function () {
      return clear;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clear3D", function () {
      return clear3D;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "drawPoint", function () {
      return drawPoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "beginShape", function () {
      return beginShape;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "endShape", function () {
      return endShape;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toDegrees", function () {
      return toDegrees;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toRadians", function () {
      return toRadians;
    });

    function initCanvas(reference) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      reference.canvas = Array.from(document.querySelectorAll('canvas')).reverse()[0];
      reference.ctx = reference.canvas.getContext(options.dimention ? options.dimention : '2d');
      reference.ctx.canvas.width = window.innerWidth - 200;
      reference.ctx.canvas.height = window.innerHeight;
    }

    function clear(reference) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'white';
      reference.ctx.clearRect(-reference.canvas.width, -reference.canvas.height, reference.canvas.width * 2, reference.canvas.height * 2); // reference.ctx.rect(0, 0, reference.canvas.width, reference.canvas.height);
      // reference.ctx.fillStyle = color;
      // reference.ctx.fill();
    }

    function clear3D(reference) {
      reference.ctx.clearColor(255, 255, 255, 1);
      reference.ctx.clear(reference.ctx.COLOR_BUFFER_BIT);
    }

    function drawPoint(reference, x, y, color) {
      reference.ctx.fillStyle = color;
      reference.ctx.fillRect(x, y, 1, 1);
    }

    function beginShape(reference) {
      reference.ctx.beginPath();
      reference.ctx.moveTo(0, 0);
    }

    function endShape(reference) {
      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (close) {
        reference.ctx.closePath();
      }

      reference.ctx.stroke();
    }

    function toDegrees(angle) {
      return angle * (180 / Math.PI);
    }

    function toRadians(angle) {
      return angle * (Math.PI / 180);
    }
    /***/

  },

  /***/
  "./src/app/visualizations/collatz-conjecture/collatz-conjecture.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/visualizations/collatz-conjecture/collatz-conjecture.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CollatzConjectureComponent */

  /***/
  function srcAppVisualizationsCollatzConjectureCollatzConjectureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollatzConjectureComponent", function () {
      return CollatzConjectureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/functions */
    "./src/app/shared/functions.ts");
    /* harmony import */


    var _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../entities/reasignable */
    "./src/app/entities/reasignable.ts");

    var CollatzConjectureComponent =
    /*#__PURE__*/
    function () {
      function CollatzConjectureComponent() {
        _classCallCheck(this, CollatzConjectureComponent);

        this.frame = null;
        this.len = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](12, 'slide', {
          min: 0,
          max: 60
        });
        this.angle = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](6, 'slide', {
          min: 0,
          max: 360
        });
        this.lineWeight = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](1.5, 'slide', {
          min: 1,
          max: 10
        });
        this.routes = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](100, 'slide', {
          min: 50,
          max: 3000,
          message: 'WARNING: this option can considerably affect your device performance'
        });
        this.color = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"]('rgb(17,78,9)', 'color');
      }

      _createClass(CollatzConjectureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["initCanvas"])(this);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.frame = window.requestAnimationFrame(this.animate.bind(this));
        }
      }, {
        key: "drawCollatz",
        value: function drawCollatz(color, weight) {
          this.ctx.resetTransform();
          this.ctx.globalAlpha = 0.2;
          this.ctx.lineWidth = weight;

          for (var i = 1; i < this.routes.value; i++) {
            var sequence = [];
            var n = i;

            do {
              sequence.push(n);
              n = this.collatz(n);
            } while (n !== 1);

            sequence.push(1);
            sequence.reverse();
            this.ctx.resetTransform();
            this.ctx.translate(this.canvas.width / 2, this.canvas.height);

            for (var j = 1; j < sequence.length; j++) {
              var value = sequence[j];
              Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["beginShape"])(this);
              this.ctx.rotate(Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["toRadians"])(value % 2 === 0 ? this.angle.value : -this.angle.value));
              this.ctx.moveTo(0, 0);
              this.ctx.strokeStyle = color;
              this.ctx.lineTo(0, -this.len.value);
              this.ctx.translate(0, -this.len.value);
              Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["endShape"])(this);
            }
          }
        }
      }, {
        key: "collatz",
        value: function collatz(n) {
          return n % 2 === 0 ? n / 2 : (n * 3 + 1) / 2;
        }
      }, {
        key: "animate",
        value: function animate() {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["clear"])(this);
          this.drawCollatz(this.color.value, this.lineWeight.value);
          this.frame = window.requestAnimationFrame(this.animate.bind(this));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          window.cancelAnimationFrame(this.frame);
        }
      }]);

      return CollatzConjectureComponent;
    }();

    CollatzConjectureComponent.ɵfac = function CollatzConjectureComponent_Factory(t) {
      return new (t || CollatzConjectureComponent)();
    };

    CollatzConjectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollatzConjectureComponent,
      selectors: [["app-collatz-conjecture"]],
      decls: 1,
      vars: 0,
      consts: [["id", "canvas"]],
      template: function CollatzConjectureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsYXR6LWNvbmplY3R1cmUvY29sbGF0ei1jb25qZWN0dXJlLmNvbXBvbmVudC5sZXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollatzConjectureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-collatz-conjecture',
          templateUrl: './collatz-conjecture.component.html',
          styleUrls: ['./collatz-conjecture.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/visualizations/hilbert-curve/hilbert-curve.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/visualizations/hilbert-curve/hilbert-curve.component.ts ***!
    \*************************************************************************/

  /*! exports provided: HilbertCurveComponent */

  /***/
  function srcAppVisualizationsHilbertCurveHilbertCurveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HilbertCurveComponent", function () {
      return HilbertCurveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/functions */
    "./src/app/shared/functions.ts");
    /* harmony import */


    var _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../entities/reasignable */
    "./src/app/entities/reasignable.ts");

    var HilbertCurveComponent =
    /*#__PURE__*/
    function () {
      function HilbertCurveComponent() {
        _classCallCheck(this, HilbertCurveComponent);

        this.frame = null;
        this.order = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](6, 'number');
        this.velocity = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](1, 'slide', {
          min: 1,
          max: 10
        });
        this.lineWeight = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](4, 'slide', {
          min: 1,
          max: 10
        });
        this.color = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"]('#DDA15E', 'color');
        this.backgroundColor = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"]('#BC6C25', 'color');
        this.path = [];
        this.counter = 0;
        this.clearProps();
      }

      _createClass(HilbertCurveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["initCanvas"])(this);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.init();
          this.frame = window.requestAnimationFrame(this.animate.bind(this));
        }
      }, {
        key: "hilbert",
        value: function hilbert(i) {
          var points = [{
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 1
          }, {
            x: 1,
            y: 1
          }, {
            x: 1,
            y: 0
          }];
          /* tslint:disable:no-bitwise */

          var index = i & 3;
          var v = points[index];

          for (var j = 1; j < this.actualOrder; j++) {
            i = i >>> 2;
            index = i & 3;
            /* tslint:enable:no-bitwise */

            var len = Math.pow(2, j);

            if (index == 0) {
              var temp = v.x;
              v.x = v.y;
              v.y = temp;
            } else if (index == 1) {
              v.y += len;
            } else if (index == 2) {
              v.x += len;
              v.y += len;
            } else if (index == 3) {
              var _temp = len - 1 - v.x;

              v.x = len - 1 - v.y;
              v.y = _temp;
              v.x += len;
            }
          }

          return v;
        }
      }, {
        key: "clearProps",
        value: function clearProps() {
          this.path = [];
          this.N = Math.pow(2, this.order.value);
          this.total = this.N * this.N;
          this.actualOrder = this.order.value;
        }
      }, {
        key: "init",
        value: function init() {
          for (var i = 0; i < this.total; i++) {
            this.path[i] = this.hilbert(i);
            var lenX = this.canvas.width / this.N;
            var lenY = this.canvas.height / this.N; // const len = (this.canvas.width < this.canvas.height ? this.canvas.width : this.canvas.height ) / this.N

            this.path[i].x *= lenX;
            this.path[i].x += lenX / 2;
            this.path[i].y *= lenY;
            this.path[i].y += lenY / 2;
          }
        }
      }, {
        key: "drawHilbert",
        value: function drawHilbert(color, weight) {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["beginShape"])(this);
          this.ctx.strokeStyle = color;
          this.ctx.lineWidth = weight;
          this.ctx.moveTo(this.path[0].x, this.path[0].y);

          for (var i = 0; i < this.counter; i++) {
            if (this.path[i]) {
              this.ctx.lineTo(this.path[i].x, this.path[i].y);
            }
          }

          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["endShape"])(this, false);
          this.counter += this.velocity.value;

          if (this.counter == this.path.length || this.actualOrder != this.order.value) {
            this.counter = 0;
            this.clearProps();
            this.init();
          }
        }
      }, {
        key: "animate",
        value: function animate() {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["clear"])(this);
          this.canvas.style.backgroundColor = this.backgroundColor.value;
          this.drawHilbert(this.color.value, this.lineWeight.value);
          this.frame = window.requestAnimationFrame(this.animate.bind(this));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          window.cancelAnimationFrame(this.frame);
        }
      }]);

      return HilbertCurveComponent;
    }();

    HilbertCurveComponent.ɵfac = function HilbertCurveComponent_Factory(t) {
      return new (t || HilbertCurveComponent)();
    };

    HilbertCurveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HilbertCurveComponent,
      selectors: [["app-hilbert-curve"]],
      decls: 1,
      vars: 0,
      consts: [["id", "canvas"]],
      template: function HilbertCurveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaWxiZXJ0LWN1cnZlL2hpbGJlcnQtY3VydmUuY29tcG9uZW50Lmxlc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HilbertCurveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hilbert-curve',
          templateUrl: './hilbert-curve.component.html',
          styleUrls: ['./hilbert-curve.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/visualizations/maurer-rose/maurer-rose.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/visualizations/maurer-rose/maurer-rose.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MaurerRoseComponent */

  /***/
  function srcAppVisualizationsMaurerRoseMaurerRoseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaurerRoseComponent", function () {
      return MaurerRoseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/functions */
    "./src/app/shared/functions.ts");
    /* harmony import */


    var _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../entities/reasignable */
    "./src/app/entities/reasignable.ts");

    var MaurerRoseComponent =
    /*#__PURE__*/
    function () {
      function MaurerRoseComponent() {
        _classCallCheck(this, MaurerRoseComponent);

        this.n = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](2, 'number', {
          message: 'The rose has n petals if n is odd, and 2n petals if n is even.'
        });
        this.d = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](29, 'number', {
          message: 'factor d on degrees'
        });
        this.radius = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](250, 'slide', {
          min: 50,
          max: 600
        });
        this.trackWeight = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](3, 'number');
        this.maurerWeight = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](1, 'number');
        this.maurerColor = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"]('black', 'color');
        this.trackColor = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"]('#0000FF', 'color');
        this.showTrack = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_2__["Reasignable"](true, 'checkbox');
        this.frame = null;
      }

      _createClass(MaurerRoseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["initCanvas"])(this);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
          this.frame = window.requestAnimationFrame(this.animate.bind(this));
        }
      }, {
        key: "drawMaurer",
        value: function drawMaurer() {
          var track = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var color = arguments.length > 1 ? arguments[1] : undefined;
          var weight = arguments.length > 2 ? arguments[2] : undefined;
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["beginShape"])(this);
          this.ctx.strokeStyle = color;
          this.ctx.lineWidth = weight;

          for (var i = 0; i < 361; i++) {
            var k = track ? i : i * this.d.value;
            var r = this.radius.value * Math.sin(Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["toRadians"])(this.n.value * k));
            var x = r * Math.cos(Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["toRadians"])(k));
            var y = r * Math.sin(Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["toRadians"])(k));
            this.ctx.lineTo(x, y);
          }

          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["endShape"])(this);
        }
      }, {
        key: "animate",
        value: function animate() {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_1__["clear"])(this);
          this.drawMaurer(false, this.maurerColor.value, this.maurerWeight.value);

          if (this.showTrack.value) {
            this.drawMaurer(true, this.trackColor.value, this.trackWeight.value);
          }

          this.frame = window.requestAnimationFrame(this.animate.bind(this));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          window.cancelAnimationFrame(this.frame);
        }
      }]);

      return MaurerRoseComponent;
    }();

    MaurerRoseComponent.ɵfac = function MaurerRoseComponent_Factory(t) {
      return new (t || MaurerRoseComponent)();
    };

    MaurerRoseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MaurerRoseComponent,
      selectors: [["app-maurer-rose"]],
      decls: 1,
      vars: 0,
      consts: [["id", "canvas"]],
      template: function MaurerRoseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXVyZXItcm9zZS9tYXVyZXItcm9zZS5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaurerRoseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-maurer-rose',
          templateUrl: './maurer-rose.component.html',
          styleUrls: ['./maurer-rose.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/visualizations/perlin-noise3d/perlin-noise3d.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/visualizations/perlin-noise3d/perlin-noise3d.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PerlinNoise3dComponent */

  /***/
  function srcAppVisualizationsPerlinNoise3dPerlinNoise3dComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerlinNoise3dComponent", function () {
      return PerlinNoise3dComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../entities/reasignable */
    "./src/app/entities/reasignable.ts");
    /* harmony import */


    var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! p5 */
    "./node_modules/p5/lib/p5.min.js");
    /* harmony import */


    var p5__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);

    var component = null;

    var PerlinNoise3dComponent =
    /*#__PURE__*/
    function () {
      function PerlinNoise3dComponent() {
        var _this2 = this;

        _classCallCheck(this, PerlinNoise3dComponent);

        this.scale = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](30, 'slide', {
          min: 10,
          max: 100
        });
        this.width = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](1000, 'slide', {
          min: 500,
          max: 3000
        });
        this.height = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](800, 'slide', {
          min: 500,
          max: 3000
        });
        this.noiseY = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](100, 'slide', {
          min: 0,
          max: 500
        });
        this.noiseX = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](-100, 'slide', {
          min: -200,
          max: 500
        });
        this.terrainOpacity = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](30, 'slide', {
          min: 0,
          max: 400
        });
        this.xRotation = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](30, 'slide', {
          min: 10,
          max: 100
        });
        this.backgroundColor = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"]('#000000', 'color');
        this.noStroke = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](false, 'checkbox');

        this.onWindowResize = function (e) {
          _this2.p5.resizeCanvas(_this2.p5.windowWidth, _this2.p5.windowHeight);
        };

        this.createCanvas = function () {
          console.log('creating canvas');
          _this2.p5 = new p5__WEBPACK_IMPORTED_MODULE_2__(_this2.drawing);
          console.log(_this2.p5);
        };

        this.destroyCanvas = function () {
          console.log('destroying canvas');

          _this2.p5.noCanvas();

          _this2.p5.remove();
        };

        this.drawing = function (p) {
          var cols, rows;
          var lastCols = 0;
          var lastRows = 0;
          var scl = component.scale.value;
          var w = component.width.value;
          var h = component.height.value;
          var flying = 0;
          var terrain = [];

          var initAll = function initAll() {
            scl = component.scale.value;
            w = component.width.value;
            h = component.height.value;
            cols = w / scl;
            rows = h / scl;
            if (cols == lastCols && rows == lastRows) return;
            lastCols = cols;
            lastRows = rows;

            for (var x = 0; x < cols; x++) {
              terrain[x] = [];

              for (var y = 0; y < rows; y++) {
                terrain[x][y] = 0;
              }
            }
          };

          p.setup = function () {
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent('p5canvas');
            initAll();
          };

          p.draw = function () {
            initAll();
            flying -= 0.1;
            var yoff = flying;

            for (var y = 0; y < rows; y++) {
              var xoff = 0;

              for (var x = 0; x < cols; x++) {
                terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, component.noiseX.value, component.noiseY.value);
                xoff += 0.2;
              }

              yoff += 0.2;
            }

            p.background(component.backgroundColor.value);
            p.translate(0, 50);
            p.rotateX(p.PI / (0.1 * component.xRotation.value));
            p.fill(200, 200, 200, component.terrainOpacity.value);
            p.translate(-w / 2, -h / 2);

            for (var _y = 0; _y < rows - 1; _y++) {
              p.beginShape(p.TRIANGLE_STRIP);
              if (component.noStroke.value) p.noStroke();else {
                p.strokeWeight(1);
                p.stroke(0);
              }

              for (var _x = 0; _x < cols; _x++) {
                p.vertex(_x * scl, _y * scl, terrain[_x][_y]);
                p.vertex(_x * scl, (_y + 1) * scl, terrain[_x][_y + 1]);
              }

              p.endShape();
            }
          };
        };

        console.log('Analog-constructed');
        window.onresize = this.onWindowResize;
        component = this;
      }

      _createClass(PerlinNoise3dComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('analog-init');
          this.createCanvas();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyCanvas();
          console.log('analog-destroy');
        }
      }]);

      return PerlinNoise3dComponent;
    }();

    PerlinNoise3dComponent.ɵfac = function PerlinNoise3dComponent_Factory(t) {
      return new (t || PerlinNoise3dComponent)();
    };

    PerlinNoise3dComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerlinNoise3dComponent,
      selectors: [["app-perlin-noise3d"]],
      decls: 1,
      vars: 0,
      consts: [["id", "p5canvas"]],
      template: function PerlinNoise3dComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJsaW4tbm9pc2UzZC9wZXJsaW4tbm9pc2UzZC5jb21wb25lbnQubGVzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerlinNoise3dComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perlin-noise3d',
          templateUrl: './perlin-noise3d.component.html',
          styleUrls: ['./perlin-noise3d.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/visualizations/sin/sin.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/visualizations/sin/sin.component.ts ***!
    \*****************************************************/

  /*! exports provided: SinComponent */

  /***/
  function srcAppVisualizationsSinSinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SinComponent", function () {
      return SinComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../entities/reasignable */
    "./src/app/entities/reasignable.ts");
    /* harmony import */


    var _shared_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/functions */
    "./src/app/shared/functions.ts");

    var SinComponent =
    /*#__PURE__*/
    function () {
      function SinComponent() {
        _classCallCheck(this, SinComponent);

        this.gap = 0;
        this.velocity = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](1, 'slide', {
          min: 1,
          max: 30
        });
        this.frequency = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](100, 'slide', {
          min: 50,
          max: 300
        });
        this.amplitude = new _entities_reasignable__WEBPACK_IMPORTED_MODULE_1__["Reasignable"](100, 'slide', {
          min: 50,
          max: 300
        });
        this.frame = null;
      }

      _createClass(SinComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(document.querySelectorAll('canvas'));
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["initCanvas"])(this);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.frame = window.requestAnimationFrame(this.animate.bind(this));
        }
      }, {
        key: "clear",
        value: function clear(color) {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["clear"])(this, color);
        }
      }, {
        key: "drawPoint",
        value: function drawPoint(x, y, color) {
          Object(_shared_functions__WEBPACK_IMPORTED_MODULE_2__["drawPoint"])(this, x, y, color);
        }
      }, {
        key: "drawSen",
        value: function drawSen(color) {
          for (var x = 0; x < this.canvas.width; x++) {
            var y = Math.sin((x + this.gap) / this.frequency.value) * this.amplitude.value + Math.floor(this.canvas.height / 2);
            this.drawPoint(x, y, color);
          }
        }
      }, {
        key: "animate",
        value: function animate() {
          // console.log(this);
          this.clear('white');
          this.drawSen('white');
          this.gap += this.velocity.value;
          this.frame = window.requestAnimationFrame(this.animate.bind(this));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          window.cancelAnimationFrame(this.frame);
        }
      }]);

      return SinComponent;
    }();

    SinComponent.ɵfac = function SinComponent_Factory(t) {
      return new (t || SinComponent)();
    };

    SinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SinComponent,
      selectors: [["app-sin"]],
      decls: 1,
      vars: 0,
      consts: [["id", "canvas"]],
      template: function SinComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
        }
      },
      styles: ["canvas[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbi9DOi9wZXJzb25hbC9WaXN1YWxpemF0aW9uRW5naW5lL1ZFbmdpbmUvc3JjL2FwcC92aXN1YWxpemF0aW9ucy9zaW4vc2luLmNvbXBvbmVudC5sZXNzIiwic2luL3Npbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0YiLCJmaWxlIjoic2luL3Npbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuIiwiY2FudmFzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sin',
          templateUrl: './sin.component.html',
          styleUrls: ['./sin.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\personal\VisualizationEngine\VEngine\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map