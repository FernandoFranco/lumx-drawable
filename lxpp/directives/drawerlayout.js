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
                configMenus: '=',
                drawerUsers: '=',
                toolbarTheme: '@',
                navigatorMenus: '=',
                drawerBackground: '@'
            },
            templateUrl: 'drawerlayout.html'
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            $scope.$watch('configMenus', _onChangeConfigMenus);
            $attrs.$observe('toolbarTheme', _onChangeToolbarTheme);
            $rootScope.$on('drawer:active', _onDrawerActive);

            $scope.setActive = _setActive;
            $scope.stopPropagation = _stopPropagation;

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _onChangeConfigMenus(newConfigMenus) {
                if (newConfigMenus[0] && !newConfigMenus[0].items) {
                    $scope.configMenus = [{items: newConfigMenus}];
                }
            }

            function _onChangeToolbarTheme(newTheme) {
                $scope.toolbarThemeObj = {
                    color: newTheme === 'dark' ? 'white' : 'black',
                    textColor: newTheme === 'dark' ? 'tc-white' : 'tc-black',
                };
            }

            function _onDrawerActive($event, active) {
                $scope.active = active;
            }

            function _setActive() {
                $rootScope.$broadcast('drawer:active', true);
            }

            function _stopPropagation($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        }
    }
})(angular);