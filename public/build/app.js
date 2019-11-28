(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/components/app.js":
/*!*************************************!*\
  !*** ./assets/js/components/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");


















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.handleRetrieveCountries = function () {
      axios__WEBPACK_IMPORTED_MODULE_19___default.a.get('/api/get-countries').then(function (res) {
        var retrievedCountries = res.data.data.map(function (data) {
          return data.country;
        });

        _this.setState({
          countries: retrievedCountries,
          selectedCountry: retrievedCountries[0]
        }, function () {
          // this.handleRetrieveLocationsBasedOnCountry()
          _this.state.countries.map(function (data) {
            console.log("Iterating countries", data);
          });
        });

        console.log('Retrieved countries: ', retrievedCountries);
      })["catch"](function (err) {
        console.log('Can not retrieve data from API: ', err);
      });
    };

    _this.handleRetrieveLocationsBasedOnCountry = function () {
      axios__WEBPACK_IMPORTED_MODULE_19___default.a.get('/api/get-locations', {
        params: {
          country: _this.state.selectedCountry
        }
      }).then(function (res) {
        var retrievedLocations = res.data.data.map(function (data) {
          return data.city;
        });

        _this.setState({
          locations: retrievedLocations
        }, function () {// this.handleRetrieveHotelNamesBasedOnLocation();
        });

        console.log('Retrieved locations: ', retrievedLocations);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    _this.handleRetrieveHotelNamesBasedOnLocation = function () {
      axios__WEBPACK_IMPORTED_MODULE_19___default.a.get('/api/hotel-name', {
        params: {
          city: _this.state.selectedLocation
        }
      }).then(function (res) {
        var retrievedHotelNames = res.data.data.map(function (data) {
          return data.resort_name;
        });

        _this.setState({
          hotelNames: retrievedHotelNames
        });

        console.log('Hotel names: ', retrievedHotelNames);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    _this.handleRetrieveHotelInfoBasedOnHotelName = function () {
      axios__WEBPACK_IMPORTED_MODULE_19___default.a.get('/api/hotel-info', {
        params: {
          resortName: _this.state.selectedResortName
        }
      }).then(function (res) {
        var hotelInfo = res.data.data.map(function (data) {
          return data;
        });
        var selectedHotelId = res.data.data.map(function (data) {
          return data.room_id;
        });

        _this.setState({
          isHotelInfoRetrieved: true,
          hotelInfo: hotelInfo,
          selectedRoomId: selectedHotelId[0]
        });

        console.log('Hotel info:', hotelInfo);
        console.log('Hotel info:', selectedHotelId[0]);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    _this.handleRetrieveAvailableBooking = function () {
      axios__WEBPACK_IMPORTED_MODULE_19___default.a.get('/api/get-availability', {
        params: {
          roomId: _this.state.selectedRoomId,
          dateFrom: _this.state.selectedDateFrom.toISOString().split('T')[0],
          dateTo: _this.state.selectedDateTo.toISOString().split('T')[0]
        }
      }).then(function (res) {
        var bookingInfo = res.data.data.map(function (data) {
          return data;
        });

        _this.setState({
          isRetrieved: true,
          bookingInfo: bookingInfo
        });

        console.log('Booking info: ', bookingInfo);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    _this.handleCountriesSelectChange = function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value), function () {
        _this.handleRetrieveLocationsBasedOnCountry();
      });
    };

    _this.handleLocationSelectChange = function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value), function () {
        _this.handleRetrieveHotelNamesBasedOnLocation();
      });
    };

    _this.handleResortNameSelectChange = function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value), function () {
        _this.handleRetrieveHotelInfoBasedOnHotelName();
      });
    };

    _this.handleStartDateOnChange = function (date) {
      _this.setState({
        selectedDateFrom: date
      }, function () {
        console.log('Start date: ', _this.state.selectedDateFrom.toISOString().split('T')[0]);
      });
    };

    _this.handleEndDateOnChange = function (date) {
      _this.setState({
        selectedDateTo: date
      }, function () {
        console.log('End date: ', _this.state.selectedDateTo.toISOString().split('T')[0]);
      });
    };

    _this.state = {
      isRetrieved: false,
      isHotelInfoRetrieved: false,
      selectedCountry: '',
      selectedLocation: '',
      selectedResortName: '',
      selectedRoomId: '',
      selectedDateFrom: new Date(),
      selectedDateTo: new Date(),
      countries: [],
      locations: [],
      hotelNames: [],
      hotelInfo: [],
      bookingInfo: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleRetrieveCountries(); // this.handleRetrieveLocationsBasedOnCountry();
      // this.handleRetrieveHotelNamesBasedOnLocation();
      // this.handleRetrieveHotelInfoBasedOnHotelName();
      // this.handleRetrieveAvailableBooking();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-md-12 border-primary mb-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("h1", {
        className: "display-2 text-center"
      }, "Travel Idea Booking")), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_29__["default"], {
        id: "demo-simple-select-label",
        className: "col-md-6"
      }, "Alegeti tara"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_26__["default"], {
        className: "col-sm-3",
        labelId: "demo-mutiple-name-label",
        id: "demo-mutiple-name",
        onChange: this.handleCountriesSelectChange,
        input: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_27__["default"], null)
      }, this.state.countries.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
          value: data,
          key: data
        }, data);
      }))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_29__["default"], {
        id: "demo-simple-select-label",
        className: "col-md-6"
      }, "Alegeti locatia"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_26__["default"], {
        className: "col-sm-3",
        labelId: "demo-mutiple-name-label",
        id: "demo-mutiple-name",
        onChange: this.handleLocationSelectChange,
        input: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_27__["default"], null)
      }, this.state.locations.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
          value: data,
          key: data
        }, data);
      }))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_29__["default"], {
        id: "demo-simple-select-label",
        className: "col-md-6"
      }, "Alegeti resortul"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_26__["default"], {
        className: "col-sm-3",
        labelId: "demo-mutiple-name-label",
        id: "demo-mutiple-name",
        onChange: this.handleResortNameSelectChange,
        input: react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_27__["default"], null)
      }, this.state.hotelNames.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_28__["default"], {
          value: data,
          key: data
        }, data);
      }))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("select", {
        className: "form-control",
        name: "selectedCountry",
        onChange: this.handleCountriesSelectChange
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("option", {
        value: "",
        selected: true,
        disabled: true,
        hidden: true
      }, "Alegeti tara"), this.state.countries.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("option", {
          value: data,
          key: data
        }, data);
      })))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("select", {
        className: "form-control",
        name: "selectedLocation",
        onChange: this.handleLocationSelectChange
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("option", {
        value: "",
        selected: true,
        disabled: true,
        hidden: true
      }, "Alegeti locatia"), this.state.locations.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("option", {
          value: data,
          key: data
        }, data);
      }))))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("select", {
        className: "form-control",
        name: "selectedResortName",
        onChange: this.handleResortNameSelectChange
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("option", {
        value: "",
        selected: true,
        disabled: true,
        hidden: true
      }, "Alegeti resortul TEST"), this.state.hotelNames.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("option", {
          value: data,
          key: data
        }, data);
      })))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-3"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_22___default.a, {
        selected: this.state.selectedDateFrom,
        onChange: this.handleStartDateOnChange
      })), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-3"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_22___default.a, {
        selected: this.state.selectedDateTo,
        onChange: this.handleEndDateOnChange
      }))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "col-sm-2"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("button", {
        className: "btn btn-primary",
        type: "submit",
        onClick: this.handleRetrieveAvailableBooking
      }, "Booking")), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "row"
      }, this.state.isHotelInfoRetrieved ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("table", {
        className: "table table-striped ml-sm-1 mr-sm-1"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", {
        className: "h4"
      }, "Tara"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", {
        className: "h4"
      }, "Locatie"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", {
        className: "h4"
      }, "Nume Resort"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", {
        className: "h4"
      }, "Descriere"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", {
        className: "h4"
      }, "Stele"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", {
        className: "h4"
      }, "Pagina contact"))), this.state.hotelInfo.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", {
          className: "h5"
        }, data.country), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", {
          className: "h5"
        }, data.city), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", {
          className: "h5"
        }, data.resort_name), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", {
          className: "h5"
        }, data.description), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", {
          className: "h5"
        }, data.stars), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", {
          className: "h5"
        }, data.url)));
      })) : ""), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "row"
      }, this.state.isRetrieved ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("table", {
        className: "table table-striped ml-sm-1 mr-sm-1"
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", null, "Camera"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", null, "Descriere"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", null, "Marime"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", null, "Mese incluse"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", null, "Extra"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("th", null, "Pret"))), this.state.bookingInfo.map(function (data) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", null, data.room_name), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", null, data.description), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", null, data.room_size), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", null, data.meals), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", null, data.extras), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("td", null, data.price)));
      })) : ""));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_17___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_18___default.a.render(react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(App, null), document.getElementById('booking-react'));

/***/ })

},[["./assets/js/components/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJoYW5kbGVSZXRyaWV2ZUNvdW50cmllcyIsIkF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInJldHJpZXZlZENvdW50cmllcyIsImRhdGEiLCJtYXAiLCJjb3VudHJ5Iiwic2V0U3RhdGUiLCJjb3VudHJpZXMiLCJzZWxlY3RlZENvdW50cnkiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJoYW5kbGVSZXRyaWV2ZUxvY2F0aW9uc0Jhc2VkT25Db3VudHJ5IiwicGFyYW1zIiwicmV0cmlldmVkTG9jYXRpb25zIiwiY2l0eSIsImxvY2F0aW9ucyIsImhhbmRsZVJldHJpZXZlSG90ZWxOYW1lc0Jhc2VkT25Mb2NhdGlvbiIsInNlbGVjdGVkTG9jYXRpb24iLCJyZXRyaWV2ZWRIb3RlbE5hbWVzIiwicmVzb3J0X25hbWUiLCJob3RlbE5hbWVzIiwiaGFuZGxlUmV0cmlldmVIb3RlbEluZm9CYXNlZE9uSG90ZWxOYW1lIiwicmVzb3J0TmFtZSIsInNlbGVjdGVkUmVzb3J0TmFtZSIsImhvdGVsSW5mbyIsInNlbGVjdGVkSG90ZWxJZCIsInJvb21faWQiLCJpc0hvdGVsSW5mb1JldHJpZXZlZCIsInNlbGVjdGVkUm9vbUlkIiwiaGFuZGxlUmV0cmlldmVBdmFpbGFibGVCb29raW5nIiwicm9vbUlkIiwiZGF0ZUZyb20iLCJzZWxlY3RlZERhdGVGcm9tIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImRhdGVUbyIsInNlbGVjdGVkRGF0ZVRvIiwiYm9va2luZ0luZm8iLCJpc1JldHJpZXZlZCIsImhhbmRsZUNvdW50cmllc1NlbGVjdENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlTG9jYXRpb25TZWxlY3RDaGFuZ2UiLCJoYW5kbGVSZXNvcnROYW1lU2VsZWN0Q2hhbmdlIiwiaGFuZGxlU3RhcnREYXRlT25DaGFuZ2UiLCJkYXRlIiwiaGFuZGxlRW5kRGF0ZU9uQ2hhbmdlIiwiRGF0ZSIsImRlc2NyaXB0aW9uIiwic3RhcnMiLCJ1cmwiLCJyb29tX25hbWUiLCJyb29tX3NpemUiLCJtZWFscyIsImV4dHJhcyIsInByaWNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsRzs7Ozs7QUFDRixlQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsNkVBQU1BLEtBQU47O0FBRGMsVUFtQmxCQyx1QkFuQmtCLEdBbUJRLFlBQU07QUFDNUJDLG1EQUFLLENBQUNDLEdBQU4sQ0FBVSxvQkFBVixFQUNFQyxJQURGLENBQ08sVUFBQUMsR0FBRyxFQUFHO0FBQ1QsWUFBSUMsa0JBQWtCLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixDQUFTQSxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUQsSUFBSTtBQUFBLGlCQUMzQ0EsSUFBSSxDQUFDRSxPQURzQztBQUFBLFNBQXRCLENBQXpCOztBQUdBLGNBQUtDLFFBQUwsQ0FBYztBQUNWQyxtQkFBUyxFQUFFTCxrQkFERDtBQUVWTSx5QkFBZSxFQUFFTixrQkFBa0IsQ0FBQyxDQUFEO0FBRnpCLFNBQWQsRUFHRyxZQUFLO0FBQ0o7QUFDQSxnQkFBS08sS0FBTCxDQUFXRixTQUFYLENBQXFCSCxHQUFyQixDQUF5QixVQUFBRCxJQUFJLEVBQUc7QUFDNUJPLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ1IsSUFBbkM7QUFDSCxXQUZEO0FBR0gsU0FSRDs7QUFTQU8sZUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNULGtCQUFyQztBQUNILE9BZkQsV0FlUyxVQUFBVSxHQUFHLEVBQUc7QUFDWEYsZUFBTyxDQUFDQyxHQUFSLENBQVksa0NBQVosRUFBZ0RDLEdBQWhEO0FBQ0gsT0FqQkQ7QUFrQkgsS0F0Q2lCOztBQUFBLFVBd0NsQkMscUNBeENrQixHQXdDc0IsWUFBTTtBQUMxQ2YsbURBQUssQ0FBQ0MsR0FBTixDQUFVLG9CQUFWLEVBQWdDO0FBQzVCZSxjQUFNLEVBQUU7QUFDSlQsaUJBQU8sRUFBRSxNQUFLSSxLQUFMLENBQVdEO0FBRGhCO0FBRG9CLE9BQWhDLEVBSUdSLElBSkgsQ0FJUSxVQUFBQyxHQUFHLEVBQUc7QUFDVixZQUFJYyxrQkFBa0IsR0FBR2QsR0FBRyxDQUFDRSxJQUFKLENBQVNBLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBRCxJQUFJO0FBQUEsaUJBQzNDQSxJQUFJLENBQUNhLElBRHNDO0FBQUEsU0FBdEIsQ0FBekI7O0FBR0EsY0FBS1YsUUFBTCxDQUFjO0FBQ1ZXLG1CQUFTLEVBQUVGO0FBREQsU0FBZCxFQUVHLFlBQU0sQ0FDTDtBQUNILFNBSkQ7O0FBS0FMLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDSSxrQkFBckM7QUFDSCxPQWRELFdBY1MsVUFBQUgsR0FBRyxFQUFJO0FBQ1pGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0gsT0FoQkQ7QUFpQkgsS0ExRGlCOztBQUFBLFVBNERsQk0sdUNBNURrQixHQTREd0IsWUFBTTtBQUM1Q3BCLG1EQUFLLENBQUNDLEdBQU4sQ0FBVSxpQkFBVixFQUE2QjtBQUN6QmUsY0FBTSxFQUFFO0FBQ0pFLGNBQUksRUFBRSxNQUFLUCxLQUFMLENBQVdVO0FBRGI7QUFEaUIsT0FBN0IsRUFJR25CLElBSkgsQ0FJUSxVQUFBQyxHQUFHLEVBQUk7QUFDWCxZQUFJbUIsbUJBQW1CLEdBQUduQixHQUFHLENBQUNFLElBQUosQ0FBU0EsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUFELElBQUk7QUFBQSxpQkFDNUNBLElBQUksQ0FBQ2tCLFdBRHVDO0FBQUEsU0FBdEIsQ0FBMUI7O0FBR0EsY0FBS2YsUUFBTCxDQUFjO0FBQ1ZnQixvQkFBVSxFQUFFRjtBQURGLFNBQWQ7O0FBR0FWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJTLG1CQUE3QjtBQUNILE9BWkQsV0FZUyxVQUFBUixHQUFHLEVBQUk7QUFDWkYsZUFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDSCxPQWREO0FBZUgsS0E1RWlCOztBQUFBLFVBOEVsQlcsdUNBOUVrQixHQThFd0IsWUFBTTtBQUM1Q3pCLG1EQUFLLENBQUNDLEdBQU4sQ0FBVSxpQkFBVixFQUE2QjtBQUN6QmUsY0FBTSxFQUFFO0FBQ0pVLG9CQUFVLEVBQUUsTUFBS2YsS0FBTCxDQUFXZ0I7QUFEbkI7QUFEaUIsT0FBN0IsRUFJR3pCLElBSkgsQ0FJUSxVQUFBQyxHQUFHLEVBQUk7QUFDWCxZQUFJeUIsU0FBUyxHQUFHekIsR0FBRyxDQUFDRSxJQUFKLENBQVNBLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBRCxJQUFJO0FBQUEsaUJBQ2xDQSxJQURrQztBQUFBLFNBQXRCLENBQWhCO0FBR0EsWUFBSXdCLGVBQWUsR0FBRzFCLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQSxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUQsSUFBSTtBQUFBLGlCQUN4Q0EsSUFBSSxDQUFDeUIsT0FEbUM7QUFBQSxTQUF0QixDQUF0Qjs7QUFHQSxjQUFLdEIsUUFBTCxDQUFjO0FBQ1Z1Qiw4QkFBb0IsRUFBRSxJQURaO0FBRVZILG1CQUFTLEVBQUVBLFNBRkQ7QUFHVkksd0JBQWMsRUFBRUgsZUFBZSxDQUFDLENBQUQ7QUFIckIsU0FBZDs7QUFLQWpCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJlLFNBQTNCO0FBQ0FoQixlQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCZ0IsZUFBZSxDQUFDLENBQUQsQ0FBMUM7QUFFSCxPQW5CRCxXQW1CUyxVQUFBZixHQUFHLEVBQUk7QUFDWkYsZUFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDSCxPQXJCRDtBQXNCSCxLQXJHaUI7O0FBQUEsVUF1R2xCbUIsOEJBdkdrQixHQXVHZSxZQUFNO0FBQ25DakMsbURBQUssQ0FBQ0MsR0FBTixDQUFVLHVCQUFWLEVBQW1DO0FBQy9CZSxjQUFNLEVBQUU7QUFDSmtCLGdCQUFNLEVBQUUsTUFBS3ZCLEtBQUwsQ0FBV3FCLGNBRGY7QUFFSkcsa0JBQVEsRUFBRSxNQUFLeEIsS0FBTCxDQUFXeUIsZ0JBQVgsQ0FBNEJDLFdBQTVCLEdBQTBDQyxLQUExQyxDQUFnRCxHQUFoRCxFQUFxRCxDQUFyRCxDQUZOO0FBR0pDLGdCQUFNLEVBQUUsTUFBSzVCLEtBQUwsQ0FBVzZCLGNBQVgsQ0FBMEJILFdBQTFCLEdBQXdDQyxLQUF4QyxDQUE4QyxHQUE5QyxFQUFtRCxDQUFuRDtBQUhKO0FBRHVCLE9BQW5DLEVBTUdwQyxJQU5ILENBTVEsVUFBQUMsR0FBRyxFQUFJO0FBQ1gsWUFBSXNDLFdBQVcsR0FBR3RDLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQSxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUQsSUFBSTtBQUFBLGlCQUNwQ0EsSUFEb0M7QUFBQSxTQUF0QixDQUFsQjs7QUFHQSxjQUFLRyxRQUFMLENBQWM7QUFDVmtDLHFCQUFXLEVBQUUsSUFESDtBQUVWRCxxQkFBVyxFQUFFQTtBQUZILFNBQWQ7O0FBSUE3QixlQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QjRCLFdBQTlCO0FBQ0gsT0FmRCxXQWVTLFVBQUEzQixHQUFHLEVBQUk7QUFDWkYsZUFBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDSCxPQWpCRDtBQWtCSCxLQTFIaUI7O0FBQUEsVUE0SGxCNkIsMkJBNUhrQixHQTRIWSxVQUFDQyxLQUFELEVBQVc7QUFDckMsWUFBS3BDLFFBQUwscUJBQ0tvQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFEbEIsRUFDeUJGLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUR0QyxHQUVHLFlBQU07QUFDTCxjQUFLaEMscUNBQUw7QUFDSCxPQUpEO0FBS0gsS0FsSWlCOztBQUFBLFVBb0lsQmlDLDBCQXBJa0IsR0FvSVcsVUFBQ0osS0FBRCxFQUFXO0FBQ3BDLFlBQUtwQyxRQUFMLHFCQUNLb0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBRGxCLEVBQ3lCRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FEdEMsR0FFRyxZQUFNO0FBQ0wsY0FBSzNCLHVDQUFMO0FBQ0gsT0FKRDtBQUtILEtBMUlpQjs7QUFBQSxVQTRJbEI2Qiw0QkE1SWtCLEdBNElhLFVBQUNMLEtBQUQsRUFBVztBQUN0QyxZQUFLcEMsUUFBTCxxQkFDS29DLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQURsQixFQUN5QkYsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBRHRDLEdBRUcsWUFBTTtBQUNMLGNBQUt0Qix1Q0FBTDtBQUNILE9BSkQ7QUFLSCxLQWxKaUI7O0FBQUEsVUFvSmxCeUIsdUJBcEprQixHQW9KUSxVQUFBQyxJQUFJLEVBQUk7QUFDOUIsWUFBSzNDLFFBQUwsQ0FBYztBQUNWNEIsd0JBQWdCLEVBQUVlO0FBRFIsT0FBZCxFQUVHLFlBQU07QUFDTHZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIsTUFBS0YsS0FBTCxDQUFXeUIsZ0JBQVgsQ0FBNEJDLFdBQTVCLEdBQTBDQyxLQUExQyxDQUFnRCxHQUFoRCxFQUFxRCxDQUFyRCxDQUE1QjtBQUNILE9BSkQ7QUFLSCxLQTFKaUI7O0FBQUEsVUE0SmxCYyxxQkE1SmtCLEdBNEpNLFVBQUFELElBQUksRUFBSTtBQUM1QixZQUFLM0MsUUFBTCxDQUFjO0FBQ1ZnQyxzQkFBYyxFQUFFVztBQUROLE9BQWQsRUFFRyxZQUFNO0FBQ0x2QyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtGLEtBQUwsQ0FBVzZCLGNBQVgsQ0FBMEJILFdBQTFCLEdBQXdDQyxLQUF4QyxDQUE4QyxHQUE5QyxFQUFtRCxDQUFuRCxDQUExQjtBQUNILE9BSkQ7QUFLSCxLQWxLaUI7O0FBRWQsVUFBSzNCLEtBQUwsR0FBYTtBQUNUK0IsaUJBQVcsRUFBRSxLQURKO0FBRVRYLDBCQUFvQixFQUFFLEtBRmI7QUFHVHJCLHFCQUFlLEVBQUUsRUFIUjtBQUlUVyxzQkFBZ0IsRUFBRSxFQUpUO0FBS1RNLHdCQUFrQixFQUFFLEVBTFg7QUFNVEssb0JBQWMsRUFBRSxFQU5QO0FBT1RJLHNCQUFnQixFQUFFLElBQUlpQixJQUFKLEVBUFQ7QUFRVGIsb0JBQWMsRUFBRSxJQUFJYSxJQUFKLEVBUlA7QUFTVDVDLGVBQVMsRUFBRSxFQVRGO0FBVVRVLGVBQVMsRUFBRSxFQVZGO0FBV1RLLGdCQUFVLEVBQUUsRUFYSDtBQVlUSSxlQUFTLEVBQUUsRUFaRjtBQWFUYSxpQkFBVyxFQUFFO0FBYkosS0FBYjtBQUZjO0FBaUJqQjs7Ozt3Q0FvSm9CO0FBQ2pCLFdBQUsxQyx1QkFBTCxHQURpQixDQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7NkJBRVE7QUFDTCxhQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCwrQkFESixDQURKLEVBTUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSw0REFBQyxxRUFBRDtBQUFZLFVBQUUsRUFBQywwQkFBZjtBQUEwQyxpQkFBUyxFQUFDO0FBQXBELHdCQURKLEVBRUksNERBQUMsaUVBQUQ7QUFDSSxpQkFBUyxFQUFDLFVBRGQ7QUFFSSxlQUFPLEVBQUMseUJBRlo7QUFHSSxVQUFFLEVBQUMsbUJBSFA7QUFJSSxnQkFBUSxFQUFFLEtBQUs0QywyQkFKbkI7QUFLSSxhQUFLLEVBQUUsNERBQUMsZ0VBQUQ7QUFMWCxTQU9RLEtBQUtoQyxLQUFMLENBQVdGLFNBQVgsQ0FBcUJILEdBQXJCLENBQXlCLFVBQUFELElBQUksRUFBSTtBQUM3QixlQUNJLDREQUFDLG1FQUFEO0FBQVUsZUFBSyxFQUFFQSxJQUFqQjtBQUNVLGFBQUcsRUFBRUE7QUFEZixXQUVLQSxJQUZMLENBREo7QUFNSCxPQVBELENBUFIsQ0FGSixDQU5KLEVBMkJJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksNERBQUMscUVBQUQ7QUFBWSxVQUFFLEVBQUMsMEJBQWY7QUFBMEMsaUJBQVMsRUFBQztBQUFwRCwyQkFESixFQUVJLDREQUFDLGlFQUFEO0FBQ0ksaUJBQVMsRUFBQyxVQURkO0FBRUksZUFBTyxFQUFDLHlCQUZaO0FBR0ksVUFBRSxFQUFDLG1CQUhQO0FBSUksZ0JBQVEsRUFBRSxLQUFLMkMsMEJBSm5CO0FBS0ksYUFBSyxFQUFFLDREQUFDLGdFQUFEO0FBTFgsU0FPUSxLQUFLckMsS0FBTCxDQUFXUSxTQUFYLENBQXFCYixHQUFyQixDQUF5QixVQUFBRCxJQUFJLEVBQUk7QUFDN0IsZUFDSSw0REFBQyxtRUFBRDtBQUFVLGVBQUssRUFBRUEsSUFBakI7QUFDVSxhQUFHLEVBQUVBO0FBRGYsV0FFS0EsSUFGTCxDQURKO0FBTUgsT0FQRCxDQVBSLENBRkosQ0EzQkosRUFnREk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSw0REFBQyxxRUFBRDtBQUFZLFVBQUUsRUFBQywwQkFBZjtBQUEwQyxpQkFBUyxFQUFDO0FBQXBELDRCQURKLEVBRUksNERBQUMsaUVBQUQ7QUFDSSxpQkFBUyxFQUFDLFVBRGQ7QUFFSSxlQUFPLEVBQUMseUJBRlo7QUFHSSxVQUFFLEVBQUMsbUJBSFA7QUFJSSxnQkFBUSxFQUFFLEtBQUs0Qyw0QkFKbkI7QUFLSSxhQUFLLEVBQUUsNERBQUMsZ0VBQUQ7QUFMWCxTQU9RLEtBQUt0QyxLQUFMLENBQVdhLFVBQVgsQ0FBc0JsQixHQUF0QixDQUEwQixVQUFBRCxJQUFJLEVBQUk7QUFDOUIsZUFDSSw0REFBQyxtRUFBRDtBQUFVLGVBQUssRUFBRUEsSUFBakI7QUFDVSxhQUFHLEVBQUVBO0FBRGYsV0FFS0EsSUFGTCxDQURKO0FBTUgsT0FQRCxDQVBSLENBRkosQ0FoREosRUFzRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLGNBQWxCO0FBQWlDLFlBQUksRUFBQyxpQkFBdEM7QUFDUSxnQkFBUSxFQUFFLEtBQUtzQztBQUR2QixTQUVJO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBaUIsZ0JBQVEsTUFBekI7QUFBMEIsZ0JBQVEsTUFBbEM7QUFBbUMsY0FBTTtBQUF6Qyx3QkFGSixFQUlRLEtBQUtoQyxLQUFMLENBQVdGLFNBQVgsQ0FBcUJILEdBQXJCLENBQXlCLFVBQUFELElBQUksRUFBSTtBQUM3QixlQUNJO0FBQVEsZUFBSyxFQUFFQSxJQUFmO0FBQ1EsYUFBRyxFQUFFQTtBQURiLFdBRUtBLElBRkwsQ0FESjtBQU1ILE9BUEQsQ0FKUixDQURKLENBREosQ0FESixFQW1CSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLGNBQWxCO0FBQWlDLFlBQUksRUFBQyxrQkFBdEM7QUFDUSxnQkFBUSxFQUFFLEtBQUsyQztBQUR2QixTQUVJO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBaUIsZ0JBQVEsTUFBekI7QUFBMEIsZ0JBQVEsTUFBbEM7QUFBbUMsY0FBTTtBQUF6QywyQkFGSixFQUlRLEtBQUtyQyxLQUFMLENBQVdRLFNBQVgsQ0FBcUJiLEdBQXJCLENBQXlCLFVBQUFELElBQUksRUFBSTtBQUM3QixlQUNJO0FBQVEsZUFBSyxFQUFFQSxJQUFmO0FBQ1EsYUFBRyxFQUFFQTtBQURiLFdBRUtBLElBRkwsQ0FESjtBQU1ILE9BUEQsQ0FKUixDQURKLENBREosQ0FuQkosQ0F0RUosRUE2R0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLGNBQWxCO0FBQWlDLFlBQUksRUFBQyxvQkFBdEM7QUFDUSxnQkFBUSxFQUFFLEtBQUs0QztBQUR2QixTQUVJO0FBQVEsYUFBSyxFQUFDLEVBQWQ7QUFBaUIsZ0JBQVEsTUFBekI7QUFBMEIsZ0JBQVEsTUFBbEM7QUFBbUMsY0FBTTtBQUF6QyxpQ0FGSixFQUtRLEtBQUt0QyxLQUFMLENBQVdhLFVBQVgsQ0FBc0JsQixHQUF0QixDQUEwQixVQUFBRCxJQUFJLEVBQUk7QUFDOUIsZUFDSTtBQUFRLGVBQUssRUFBRUEsSUFBZjtBQUNRLGFBQUcsRUFBRUE7QUFEYixXQUVLQSxJQUZMLENBREo7QUFNSCxPQVBELENBTFIsQ0FESixDQURKLENBREosRUFvQlE7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFUSw0REFBQyx3REFBRDtBQUNJLGdCQUFRLEVBQUUsS0FBS00sS0FBTCxDQUFXeUIsZ0JBRHpCO0FBRUksZ0JBQVEsRUFBRSxLQUFLYztBQUZuQixRQUZSLENBcEJSLEVBNEJRO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRVEsNERBQUMsd0RBQUQ7QUFDSSxnQkFBUSxFQUFFLEtBQUt2QyxLQUFMLENBQVc2QixjQUR6QjtBQUVJLGdCQUFRLEVBQUUsS0FBS1k7QUFGbkIsUUFGUixDQTVCUixDQTdHSixFQWtKUTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQVEsaUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsWUFBSSxFQUFDLFFBQXpDO0FBQ1EsZUFBTyxFQUFFLEtBQUtuQjtBQUR0QixtQkFESixDQWxKUixFQXdKSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVRLEtBQUt0QixLQUFMLENBQVdvQixvQkFBWCxHQUNJO0FBQU8saUJBQVMsRUFBQztBQUFqQixTQUNJLDJFQUNBLHdFQUNJO0FBQUksaUJBQVMsRUFBQztBQUFkLGdCQURKLEVBRUk7QUFBSSxpQkFBUyxFQUFDO0FBQWQsbUJBRkosRUFHSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCx1QkFISixFQUlJO0FBQUksaUJBQVMsRUFBQztBQUFkLHFCQUpKLEVBS0k7QUFBSSxpQkFBUyxFQUFDO0FBQWQsaUJBTEosRUFNSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCwwQkFOSixDQURBLENBREosRUFZUSxLQUFLcEIsS0FBTCxDQUFXaUIsU0FBWCxDQUFxQnRCLEdBQXJCLENBQXlCLFVBQUFELElBQUksRUFBSTtBQUM3QixlQUNJLDJFQUNBLHdFQUNJO0FBQUksbUJBQVMsRUFBQztBQUFkLFdBQW9CQSxJQUFJLENBQUNFLE9BQXpCLENBREosRUFFSTtBQUFJLG1CQUFTLEVBQUM7QUFBZCxXQUFvQkYsSUFBSSxDQUFDYSxJQUF6QixDQUZKLEVBR0k7QUFBSSxtQkFBUyxFQUFDO0FBQWQsV0FBb0JiLElBQUksQ0FBQ2tCLFdBQXpCLENBSEosRUFJSTtBQUFJLG1CQUFTLEVBQUM7QUFBZCxXQUFvQmxCLElBQUksQ0FBQ2lELFdBQXpCLENBSkosRUFLSTtBQUFJLG1CQUFTLEVBQUM7QUFBZCxXQUFvQmpELElBQUksQ0FBQ2tELEtBQXpCLENBTEosRUFNSTtBQUFJLG1CQUFTLEVBQUM7QUFBZCxXQUFvQmxELElBQUksQ0FBQ21ELEdBQXpCLENBTkosQ0FEQSxDQURKO0FBWUgsT0FiRCxDQVpSLENBREosR0E4QkksRUFoQ1osQ0F4SkosRUEyTEk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFUSxLQUFLN0MsS0FBTCxDQUFXK0IsV0FBWCxHQUNJO0FBQU8saUJBQVMsRUFBQztBQUFqQixTQUNJLDJFQUNBLHdFQUNJLGlGQURKLEVBRUksb0ZBRkosRUFHSSxpRkFISixFQUlJLHVGQUpKLEVBS0ksZ0ZBTEosRUFNSSwrRUFOSixDQURBLENBREosRUFZUSxLQUFLL0IsS0FBTCxDQUFXOEIsV0FBWCxDQUF1Qm5DLEdBQXZCLENBQTJCLFVBQUFELElBQUksRUFBSTtBQUMvQixlQUNRLDJFQUNBLHdFQUNJLHdFQUFLQSxJQUFJLENBQUNvRCxTQUFWLENBREosRUFFSSx3RUFBS3BELElBQUksQ0FBQ2lELFdBQVYsQ0FGSixFQUdJLHdFQUFLakQsSUFBSSxDQUFDcUQsU0FBVixDQUhKLEVBSUksd0VBQUtyRCxJQUFJLENBQUNzRCxLQUFWLENBSkosRUFLSSx3RUFBS3RELElBQUksQ0FBQ3VELE1BQVYsQ0FMSixFQU1JLHdFQUFLdkQsSUFBSSxDQUFDd0QsS0FBVixDQU5KLENBREEsQ0FEUjtBQVlILE9BYkQsQ0FaUixDQURKLEdBOEJJLEVBaENaLENBM0xKLENBREo7QUFpT0g7Ozs7RUFoWmFDLDZDQUFLLENBQUNDLFM7O0FBbVp4QkMsaURBQVEsQ0FBQ0MsTUFBVCxDQUFnQiw0REFBQyxHQUFELE9BQWhCLEVBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBekIsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xuaW1wb3J0IFwicmVhY3QtZGF0ZXBpY2tlci9kaXN0L3JlYWN0LWRhdGVwaWNrZXIuY3NzXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzUmV0cmlldmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzSG90ZWxJbmZvUmV0cmlldmVkOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnRyeTogJycsXG4gICAgICAgICAgICBzZWxlY3RlZExvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIHNlbGVjdGVkUmVzb3J0TmFtZTogJycsXG4gICAgICAgICAgICBzZWxlY3RlZFJvb21JZDogJycsXG4gICAgICAgICAgICBzZWxlY3RlZERhdGVGcm9tOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgc2VsZWN0ZWREYXRlVG86IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBjb3VudHJpZXM6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb25zOiBbXSxcbiAgICAgICAgICAgIGhvdGVsTmFtZXM6IFtdLFxuICAgICAgICAgICAgaG90ZWxJbmZvOiBbXSxcbiAgICAgICAgICAgIGJvb2tpbmdJbmZvOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUmV0cmlldmVDb3VudHJpZXMgPSAoKSA9PiB7XG4gICAgICAgIEF4aW9zLmdldCgnL2FwaS9nZXQtY291bnRyaWVzJ1xuICAgICAgICApLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgbGV0IHJldHJpZXZlZENvdW50cmllcyA9IHJlcy5kYXRhLmRhdGEubWFwKGRhdGEgPT5cbiAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjb3VudHJpZXM6IHJldHJpZXZlZENvdW50cmllcyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvdW50cnk6IHJldHJpZXZlZENvdW50cmllc1swXVxuICAgICAgICAgICAgfSwgKCkgPT57XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVSZXRyaWV2ZUxvY2F0aW9uc0Jhc2VkT25Db3VudHJ5KClcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50cmllcy5tYXAoZGF0YSA9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVyYXRpbmcgY291bnRyaWVzXCIsIGRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCBjb3VudHJpZXM6ICcsIHJldHJpZXZlZENvdW50cmllcylcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbiBub3QgcmV0cmlldmUgZGF0YSBmcm9tIEFQSTogJywgZXJyKVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBoYW5kbGVSZXRyaWV2ZUxvY2F0aW9uc0Jhc2VkT25Db3VudHJ5ID0gKCkgPT4ge1xuICAgICAgICBBeGlvcy5nZXQoJy9hcGkvZ2V0LWxvY2F0aW9ucycsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgbGV0IHJldHJpZXZlZExvY2F0aW9ucyA9IHJlcy5kYXRhLmRhdGEubWFwKGRhdGEgPT5cbiAgICAgICAgICAgICAgICBkYXRhLmNpdHlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnM6IHJldHJpZXZlZExvY2F0aW9uc1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaGFuZGxlUmV0cmlldmVIb3RlbE5hbWVzQmFzZWRPbkxvY2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQgbG9jYXRpb25zOiAnLCByZXRyaWV2ZWRMb2NhdGlvbnMpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGhhbmRsZVJldHJpZXZlSG90ZWxOYW1lc0Jhc2VkT25Mb2NhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgQXhpb3MuZ2V0KCcvYXBpL2hvdGVsLW5hbWUnLCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBjaXR5OiB0aGlzLnN0YXRlLnNlbGVjdGVkTG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgbGV0IHJldHJpZXZlZEhvdGVsTmFtZXMgPSByZXMuZGF0YS5kYXRhLm1hcChkYXRhID0+XG4gICAgICAgICAgICAgICAgZGF0YS5yZXNvcnRfbmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhvdGVsTmFtZXM6IHJldHJpZXZlZEhvdGVsTmFtZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hvdGVsIG5hbWVzOiAnLCByZXRyaWV2ZWRIb3RlbE5hbWVzKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBoYW5kbGVSZXRyaWV2ZUhvdGVsSW5mb0Jhc2VkT25Ib3RlbE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIEF4aW9zLmdldCgnL2FwaS9ob3RlbC1pbmZvJywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcmVzb3J0TmFtZTogdGhpcy5zdGF0ZS5zZWxlY3RlZFJlc29ydE5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgbGV0IGhvdGVsSW5mbyA9IHJlcy5kYXRhLmRhdGEubWFwKGRhdGEgPT5cbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkSG90ZWxJZCA9IHJlcy5kYXRhLmRhdGEubWFwKGRhdGEgPT5cbiAgICAgICAgICAgICAgICBkYXRhLnJvb21faWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzSG90ZWxJbmZvUmV0cmlldmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdGVsSW5mbzogaG90ZWxJbmZvLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm9vbUlkOiBzZWxlY3RlZEhvdGVsSWRbMF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hvdGVsIGluZm86JywgaG90ZWxJbmZvKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hvdGVsIGluZm86Jywgc2VsZWN0ZWRIb3RlbElkWzBdKVxuXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBoYW5kbGVSZXRyaWV2ZUF2YWlsYWJsZUJvb2tpbmcgPSAoKSA9PiB7XG4gICAgICAgIEF4aW9zLmdldCgnL2FwaS9nZXQtYXZhaWxhYmlsaXR5Jywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcm9vbUlkOiB0aGlzLnN0YXRlLnNlbGVjdGVkUm9vbUlkLFxuICAgICAgICAgICAgICAgIGRhdGVGcm9tOiB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZUZyb20udG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdLFxuICAgICAgICAgICAgICAgIGRhdGVUbzogdGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVUby50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgbGV0IGJvb2tpbmdJbmZvID0gcmVzLmRhdGEuZGF0YS5tYXAoZGF0YSA9PlxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc1JldHJpZXZlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBib29raW5nSW5mbzogYm9va2luZ0luZm9cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Jvb2tpbmcgaW5mbzogJywgYm9va2luZ0luZm8pXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGhhbmRsZUNvdW50cmllc1NlbGVjdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJldHJpZXZlTG9jYXRpb25zQmFzZWRPbkNvdW50cnkoKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgaGFuZGxlTG9jYXRpb25TZWxlY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXRyaWV2ZUhvdGVsTmFtZXNCYXNlZE9uTG9jYXRpb24oKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgaGFuZGxlUmVzb3J0TmFtZVNlbGVjdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJldHJpZXZlSG90ZWxJbmZvQmFzZWRPbkhvdGVsTmFtZSgpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBoYW5kbGVTdGFydERhdGVPbkNoYW5nZSA9IGRhdGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0ZUZyb206IGRhdGVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0IGRhdGU6ICcsIHRoaXMuc3RhdGUuc2VsZWN0ZWREYXRlRnJvbS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlRW5kRGF0ZU9uQ2hhbmdlID0gZGF0ZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWREYXRlVG86IGRhdGVcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VuZCBkYXRlOiAnLCB0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZVRvLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSlcbiAgICAgICAgfSlcbiAgICB9O1xuXG5cbiAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmV0cmlldmVDb3VudHJpZXMoKTtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVSZXRyaWV2ZUxvY2F0aW9uc0Jhc2VkT25Db3VudHJ5KCk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlUmV0cmlldmVIb3RlbE5hbWVzQmFzZWRPbkxvY2F0aW9uKCk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlUmV0cmlldmVIb3RlbEluZm9CYXNlZE9uSG90ZWxOYW1lKCk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlUmV0cmlldmVBdmFpbGFibGVCb29raW5nKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGJvcmRlci1wcmltYXJ5IG1iLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMiB0ZXh0LWNlbnRlclwiPlRyYXZlbCBJZGVhIEJvb2tpbmc8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiIGNsYXNzTmFtZT1cImNvbC1tZC02XCI+QWxlZ2V0aSB0YXJhPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc20tM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1tdXRpcGxlLW5hbWUtbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLW11dGlwbGUtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDb3VudHJpZXNTZWxlY3RDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0Lz59PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY291bnRyaWVzLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPkFsZWdldGkgbG9jYXRpYTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNtLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tbXV0aXBsZS1uYW1lLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1tdXRpcGxlLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9jYXRpb25TZWxlY3RDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0Lz59PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9jYXRpb25zLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPkFsZWdldGkgcmVzb3J0dWw8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zbS0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLW11dGlwbGUtbmFtZS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tbXV0aXBsZS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJlc29ydE5hbWVTZWxlY3RDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dD17PElucHV0Lz59PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG90ZWxOYW1lcy5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic2VsZWN0ZWRDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvdW50cmllc1NlbGVjdENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZCBkaXNhYmxlZCBoaWRkZW4+QWxlZ2V0aSB0YXJhPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY291bnRyaWVzLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkYXRhfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInNlbGVjdGVkTG9jYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9jYXRpb25TZWxlY3RDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPkFsZWdldGkgbG9jYXRpYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvY2F0aW9ucy5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic2VsZWN0ZWRSZXNvcnROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJlc29ydE5hbWVTZWxlY3RDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQgZGlzYWJsZWQgaGlkZGVuPkFsZWdldGkgcmVzb3J0dWwgVEVTVDwvb3B0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG90ZWxOYW1lcy5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkRGF0ZUZyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZERhdGVUb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmV0cmlldmVBdmFpbGFibGVCb29raW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29raW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0hvdGVsSW5mb1JldHJpZXZlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgbWwtc20tMSBtci1zbS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImg0XCI+VGFyYTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaDRcIj5Mb2NhdGllPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoNFwiPk51bWUgUmVzb3J0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoNFwiPkRlc2NyaWVyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaDRcIj5TdGVsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaDRcIj5QYWdpbmEgY29udGFjdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG90ZWxJbmZvLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImg1XCI+e2RhdGEuY291bnRyeX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImg1XCI+e2RhdGEuY2l0eX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImg1XCI+e2RhdGEucmVzb3J0X25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJoNVwiPntkYXRhLmRlc2NyaXB0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiaDVcIj57ZGF0YS5zdGFyc308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImg1XCI+e2RhdGEudXJsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNSZXRyaWV2ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIG1sLXNtLTEgbXItc20tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DYW1lcmE8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaWVyZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TWFyaW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5NZXNlIGluY2x1c2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4dHJhPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmV0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ib29raW5nSW5mby5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5yb29tX25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEuZGVzY3JpcHRpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RhdGEucm9vbV9zaXplfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLm1lYWxzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkYXRhLmV4dHJhc308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmctcmVhY3QnKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==