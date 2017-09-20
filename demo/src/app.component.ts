const angular = require('angular');

export class MainController {

  fields = [
      {
        key: 'main-color',
        type: 'color-picker',
        templateOptions: {
          label: 'Qual cor principal?',
        }
      },

    ];

  model = {};

  /*@ngInject*/
  constructor() {

  }

  // $onInit() {
  //   this.$http.get('/api/things').then(response => {
  //     this.awesomeThings = response.data;
  //   });
  //}
  // addThing() {
  //   if (this.newThing) {
  //     this.$http.post('/api/things', { name: this.newThing });
  //     this.newThing = '';
  //   }
  // }
  //
  // deleteThing(thing) {
  //   this.$http.delete('/api/things/' + thing._id);
  // }
}
