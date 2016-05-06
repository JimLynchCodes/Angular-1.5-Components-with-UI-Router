(function() {

     angular.module('icpComp')
          .component('homePage', {
               templateUrl: 'app/pages/home/home.html',
               controllerAs: 'vm',
               controller: HomeController
          });

     function HomeController($log) {
          var vm = this;
          vm.message = 'Hello from home comopnent\'s controller!';
          $log.log("Started Home Component!");
     }

})();