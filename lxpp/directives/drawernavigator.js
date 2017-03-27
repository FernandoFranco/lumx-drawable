/**
 * Fernando Franco
 * Directive DrawerNavigator
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxDrawerNavigator', lxDrawerNavigator);

    lxDrawerNavigator.$inject = [];

    function lxDrawerNavigator() {
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
            $scope.$watch('menus', _onChangeNavigatorMenu);

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _onChangeNavigatorMenu(newMenu, a, b, c) {
                if (newMenu instanceof Array) {
                    $scope.menus = {
                        '': newMenu
                    };
                }
            }
        }
    }
})(angular);