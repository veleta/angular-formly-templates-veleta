'use strict';

export function colorPickerConfig(formlyConfigProvider){
  'ngInject';

  formlyConfigProvider.setType({
    name: 'color-picker',
    template: require('./color-picker.pug'),
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    controller: /* @ngInject */ function($scope) {
      $scope.opts = $scope.to.options
      $scope.colorPickerOptions = {
  	    required: true,
  	    disabled: false,
  			alpha: false,
  			swatchOnly: true,
  			swatchBootstrap: true,
  			name: 'Escolha a Cor'
  	  };
    }
  });

}
