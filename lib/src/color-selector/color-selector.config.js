'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("./colors");
var _ = require('lodash');
function colorSelectorConfig(formlyConfigProvider) {
    'ngInject';
    formlyConfigProvider.setType({
        name: 'color-selector',
        template: require('./color-selector.pug'),
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            $scope.opts = $scope.to.options;
            var opts = $scope.options;
            $scope.myOptions = colors_1.default.map(function (color) {
                return {
                    color: color,
                    isSelected: false
                };
            });
            $scope.setThis = function (option) {
                _.set($scope.model, opts.key, option.color);
                $scope.myOptions.forEach(function (option) { option.isSelected = false; });
                option.isSelected = true;
            };
        }
    });
}
exports.colorSelectorConfig = colorSelectorConfig;
//# sourceMappingURL=color-selector.config.js.map