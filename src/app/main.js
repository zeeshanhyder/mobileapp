angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main.html',
    controller: function () {
      this.hello = 'Hello Bro!';
    }
  });
