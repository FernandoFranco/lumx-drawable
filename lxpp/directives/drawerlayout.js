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
            templateUrl: 'drawerlayout.html'
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