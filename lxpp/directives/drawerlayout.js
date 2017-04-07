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
                toolbarMenu: '=',
                toolbarTheme: '@',
                toolbarTitle: '@',
                toolbarBackButton: '=',

                configMenus: '=',
                navigatorMenus: '=',

                drawerUsers: '=',
                drawerBackground: '@'
            },
            templateUrl: 'drawerlayout.html'
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            $scope.$watch('configMenus', _onChangeConfigMenus);
            $rootScope.$on('drawer:active', _onDrawerActive);

            $scope.setActive = _setActive;
            $scope.stopPropagation = _stopPropagation;

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _onChangeConfigMenus(newConfigMenus) {
                if (newConfigMenus && newConfigMenus[0] && !newConfigMenus[0].items) {
                    $scope.configMenus = [{items: newConfigMenus}];
                }
            }

            function _onDrawerActive($event, active) {
                $scope.active = active;
            }

            function _setActive() {
                if ($scope.toolbarBackButton) {
                    return $rootScope.$broadcast('drawer:toolbar:back');
                }

                $rootScope.$broadcast('drawer:active', true);
            }

            function _stopPropagation($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        }
    }
})(angular);