/**
 * Fernando Franco
 * Directive DrawerNavigator
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxDrawerNavigator', lxDrawerNavigator);

    lxDrawerNavigator.$inject = ['$rootScope'];

    function lxDrawerNavigator($rootScope) {
        return {
            link: _link,
            replace: true,
            restrict: 'E',
            scope: {
                menus: '='
            },
            templateUrl: 'drawernavigator.html'
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            var tempActive = false;
            var orinalMenu = [];

            $scope.navigateHandler = _navigateHandler;

            $scope.$watch('menus', _onChangeMenus);
            $rootScope.$on('drawernavigator:' + $attrs.id + ':temp', _onTempMenu);
            $rootScope.$on('drawernavigator:' + $attrs.id + ':original', _onOriginalMenu);

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _onChangeMenus(newMenus) {
                if (!tempActive) {
                    orinalMenu = newMenus;
                }
            }

            function _onTempMenu($event, tempMenu) {
                tempActive = true;
                $scope.menus = tempMenu;
            }

            function _onOriginalMenu() {
                tempActive = false;
                $scope.menus = orinalMenu;
            }

            function _navigateHandler(menuItem) {
                if (menuItem.handler) {
                    if (menuItem.handler()) {
                        $rootScope.$broadcast('drawer:active', false);
                    }
                }
            }
        }
    }
})(angular);