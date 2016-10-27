angular
  .module('app')
  .component('main', {
    template: '<div id="main" layout="column" flex="auto">\
      <md-toolbar class="md-hue-2">\
       <div class="md-toolbar-tools">\
           <md-button ng-click="$ctrl.toggleMainSideNav()" class="md-icon-button" aria-label="nav_menu" >\
             <md-icon>menu</md-icon>\
           </md-button>\
           <h2>\
             <span>WittyParrot</span>\
           </h2>\
           <span flex></span>\
           <md-button class="md-icon-button" aria-label="Favorite">\
             <md-icon>notifications</md-icon>\
           </md-button>\
           <md-button class="md-icon-button" aria-label="More">\
             <md-icon>more_vert</md-icon>\
           </md-button>\
          </div>\
      </md-toolbar>\
      <md-toolbar class="md-hue-2">\
       <div class="md-toolbar-tools">\
         <md-autocomplete\
          flex="auto"\
          ng-disabled="ctrl.isDisabled"\
          md-no-cache="ctrl.noCache"\
          md-selected-item="ctrl.selectedItem"\
          md-search-text-change="ctrl.searchTextChange(ctrl.searchText)"\
          md-search-text="ctrl.searchText"\
          md-selected-item-change="ctrl.selectedItemChange(item)"\
          md-items="item in ctrl.querySearch(ctrl.searchText)"\
          md-item-text="item.display"\
          md-min-length="0"\
          placeholder="Search Folders">\
        <md-item-template>\
          <span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.display}}</span>\
        </md-item-template>\
        <md-not-found>\
          No states matching "{{ctrl.searchText}}" were found.\
          <a ng-click="ctrl.newState(ctrl.searchText)">Create a new one!</a>\
        </md-not-found>\
      </md-autocomplete>\
        </div>\
      </md-toolbar>\
      <md-sidenav\
      class="md-sidenav-left"\
          md-component-id="main-sidenav"\
          md-whiteframe="4"\
          layout="column"\
      >\
        <md-content flex="auto" layout="column">\
          <md-content class="nav-profile" flex="30">\
          </md-content>\
          <md-list flex="auto">\
            <md-list-item class="secondary-button-padding" ng-click="$ctrl.openStuff()" layout="row" layout-align="start center">\
                <md-icon>home</md-icon>\
                <p>Home</p>\
            </md-list-item>\
            <md-list-item class="secondary-button-padding" ng-click="$ctrl.openStuff()" layout="row" layout-align="start center">\
                <md-icon>folder</md-icon>\
                <p>Folders</p>\
            </md-list-item>\
            <md-list-item class="secondary-button-padding" ng-click="$ctrl.openStuff()" layout="row" layout-align="start center">\
                <md-icon>widgets</md-icon>\
                <p>Collections</p>\
            </md-list-item>\
            <md-list-item  class="secondary-button-padding" ng-click="$ctrl.openStuff()" layout="row" layout-align="start center">\
                <md-icon>label</md-icon>\
                <p>Tags</p>\
            </md-list-item>\
            <md-divider></md-divider>\
            <md-list-item  class="secondary-button-padding" ng-click="$ctrl.openStuff()" layout="row" layout-align="start center">\
                <md-icon>settings</md-icon>\
                <p>Settings</p>\
            </md-list-item>\
            <md-list-item  class="secondary-button-padding" ng-click="$ctrl.openStuff()" layout="row" layout-align="start center">\
                <md-icon>help</md-icon>\
                <p>Help</p>\
            </md-list-item>\
            <md-list-item  class="secondary-button-padding" ng-click="$ctrl.openStuff()" layout="row" layout-align="start center">\
                <md-icon>info</md-icon>\
                <p>About</p>\
            </md-list-item>\
          </md-list>\
        </md-content>\
      </md-sidenav>\
      <md-content>\
        <md-list flex="auto">\
          <md-list-item class="secondary-button-padding" ng-click="$ctrl.toggleArrow()" layout="row" layout-align="start center">\
              <md-icon>folder</md-icon>\
              <p>Folder 1</p>\
          </md-list-item>\
          <md-list-item class="secondary-button-padding" ng-click="$ctrl.toggleArrow()" layout="row" layout-align="start center">\
              <md-icon>folder</md-icon>\
              <p>Folder 2</p>\
          </md-list-item>\
          <md-list-item class="secondary-button-padding" ng-click="$ctrl.toggleArrow()" layout="row" layout-align="start center">\
              <md-icon>folder</md-icon>\
              <p>Folder 3</p>\
          </md-list-item>\
          <md-list-item class="secondary-button-padding" ng-click="$ctrl.toggleArrow()" layout="row" layout-align="start center">\
              <md-icon>folder</md-icon>\
              <p>Folder 4</p>\
          </md-list-item>\
          <md-list-item class="secondary-button-padding" ng-click="$ctrl.toggleArrow()" layout="row" layout-align="start center">\
              <md-icon>insert_drive_file</md-icon>\
              <p>Wit 2</p>\
          </md-list-item>\
      </md-content>\
    </div>'
    ,
    controller: function ($mdSidenav) {
      this.toggleMainSideNav = function () {
        $mdSidenav('main-sidenav').toggle();
      };
    }
  });
