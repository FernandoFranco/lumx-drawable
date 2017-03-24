/**
 * Fernando Franco
 * Angular Module
 */
(function (angular) {
    'use strict';
    angular.module('lxpp', ['lumx']);

    angular.module('lxpp').run(lxppRun);

    lxppRun.$inject = [];

    function lxppRun() {
        
    }
})(angular);
/**
 * Fernando Franco
 * Directive Drawerlayout
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxDrawerLayout', lxDrawerLayout);

    lxDrawerLayout.$inject = ['$rootScope'];

    function lxDrawerLayout($rootScope) {
        return {
            link: _link,
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {
                drawerType: '@',
                toolbarBgc: '@',
                toolbarTheme: '@',
                navigatorMenu: '='
            },
            template:'<div class="drawerlayout" ng-class="{\'drawer-active\': active}"><div id="lxpp-toolbar"><div class="toolbar z4" ng-class="toolbarBgc"><div class="toolbar__left"><lx-button class="toogle-button mr" lx-size="l" lx-color="{{toolbarThemeObj.color}}" lx-type="icon" ng-click="active = !active;"><i class="mdi mdi-menu"></i></lx-button></div><span class="ml toolbar__label fs-title {{toolbarThemeObj.textColor}}">Lorem Ipsum</span></div></div><div id="lxpp-navigator" ng-click="active = (drawerType === \'temporary\') ? !active : active;"><div><div id="navigator-toolbar" class="toolbar bgc-white"><span class="toolbar__label fs-title tc-white"></span><div class="toolbar__right"><lx-button class="toogle-button" lx-size="l" lx-color="grey" lx-type="icon" ng-click="active = !active;"><i class="mdi mdi-chevron-left"></i></lx-button></div></div>{{navigatorMenu}}<ul class="list mt mb" ng-repeat="(header, menu) in navigatorMenu"><li class="list-subheader list-subheader--is-pushed" ng-bind="header"></li><li ng-repeat="item in menu" class="list-row list-row--has-separator list-row--is-clickable" lx-ripple="black"><div class="list-row__primary"><lx-icon lx-id="send" lx-size="s" lx-color="grey" lx-type="flat"></lx-icon></div><div class="list-row__content"><span ng-bind="item.label"></span></div><div class="list-row__secondary"><lx-icon lx-id="information" lx-size="xs" lx-color="grey" lx-type="flat"></lx-icon></div></li></ul></div></div><div id="lxpp-content" ng-transclude></div></div>'
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            $attrs.$observe('toolbarTheme', _onChangeToolbarTheme);
            $attrs.$observe('navigatorMenu', _onChangeNavigatorMenu);
            $scope.$watch($scope.navigatorMenu, _onChangeNavigatorMenu);

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _onChangeToolbarTheme(newTheme) {
                $scope.toolbarThemeObj = {
                    color: newTheme === 'dark' ? 'white' : 'black',
                    textColor: newTheme === 'dark' ? 'tc-white' : 'tc-black',
                };
            }

            function _onChangeNavigatorMenu(newMenu, a, b, c) {
                if (newMenu instanceof Array) {
                    $scope.navigatorMenu = {
                        '': newMenu
                    };
                }
            }
        }
    }
})(angular);
//# sourceMappingURL=lxpp.js.map
