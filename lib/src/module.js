"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require('angular');
var formly = require('angular-formly');
var formlyBootstrapTemplates = require('angular-formly-templates-bootstrap');
var uiBootstrap = require('angular-ui-bootstrap');
var colorPicker = require('angularjs-color-picker');
var tinycolor = require('tinycolor2');
var ngModuleName = 'angular-formly-templates-veleta';
var color_picker_config_1 = require("./color-picker/color-picker.config");
require("./index.scss");
exports.default = angular.module(ngModuleName, [
    formly,
    formlyBootstrapTemplates,
    uiBootstrap,
    'color.picker'
])
    .config(color_picker_config_1.colorPickerConfig)
    .name;
//# sourceMappingURL=module.js.map