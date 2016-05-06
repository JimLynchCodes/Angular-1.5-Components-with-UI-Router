(function() {

   angular.module('icpComp')
      .component('page1', {
         templateUrl: 'app/pages/page1/page1.html',
         controllerAs: 'vm',
         controller: Page1Controller
      });

   function Page1Controller($log) {
      var vm = this;
      vm.message = 'Hello from the page 1 component!';
      $log.log("hello y'all. I'm page 1!");
   }

})();