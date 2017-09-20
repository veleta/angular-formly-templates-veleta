const angular = require('angular');

const formly = require('angular-formly');
const formlyBootstrapTemplates = require('angular-formly-templates-bootstrap');
const uiBootstrap = require('angular-ui-bootstrap');

const colorPicker = require('angularjs-color-picker');
const tinycolor = require('tinycolor2');

const ngModuleName = 'angular-formly-templates-veleta'

import {colorPickerConfig} from './color-picker/color-picker.config';
//import ageInputsDirective from './age-inputs/age-inputs.directive';

import './index.scss';

export default angular.module(ngModuleName, [
  formly,
  formlyBootstrapTemplates,
  uiBootstrap,
  'color.picker'
])
.config(colorPickerConfig)
//.directive('ageInputs', ageInputsDirective)
.name;
