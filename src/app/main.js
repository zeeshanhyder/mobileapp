angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main.html',
    controller: function ($mdSidenav) {
      this.toggleMainSideNav = function () {
        $mdSidenav('main-sidenav').toggle();
      };
    }
  });
