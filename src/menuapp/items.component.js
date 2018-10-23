(function () {
  'use strict';

  angular.module('data')
  .component('itemsList', {
    templateUrl: 'src/menuapp/templates/itemslist.template.html',
    bindings: {
      items: '<'
    }
  });
})();