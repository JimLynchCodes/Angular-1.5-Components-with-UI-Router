(function() {

     angular.module('icpComp')
          .component('page2', {
               templateUrl: 'app/pages/page2/page2.html',
               controllerAs: 'vm',
               controller: Page2Controller
          });

     function Page2Controller($log) {
          var vm = this;
          vm.message = 'Hello from the page2 component!';
          $log.log("sup.");
     }

})();