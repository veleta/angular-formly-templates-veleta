'use strict';

import colors from './colors'
const _ = require('lodash');

export function colorSelectorConfig(formlyConfigProvider){
  'ngInject';

  formlyConfigProvider.setType({
    name: 'color-selector',
    template: require('./color-selector.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function($scope) {
      $scope.opts = $scope.to.options;
      const opts = $scope.options;
      $scope.myOptions = colors.map(function(color){
        return {
          color:color,
          isSelected: false
        }
      });

      $scope.setThis = function(option){
        _.set($scope.model, opts.key, option.color);
        $scope.myOptions.forEach(function(option){ option.isSelected = false });
        option.isSelected = true;
      }
    }
  });

}
