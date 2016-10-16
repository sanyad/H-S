(function() {
  'use strict';

  angular
    .module('nordic')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
