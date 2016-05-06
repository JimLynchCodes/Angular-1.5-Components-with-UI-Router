(function() {
  'use strict';

  angular
    .module('icpComp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
