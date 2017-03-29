/**
 * Fernando Franco
 * Directive DrawerToolbar
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxToolbar', lxToolbar);

    lxToolbar.$inject = [];

    function lxToolbar() {
        return {
            link: _link,
            replace: true,
            restrict: 'E',
            scope: {
                bgc: '@',
                title: '@',
                theme: '@',
                menus: '=',
                toggleHandler: '&'
            },
            templateUrl: 'drawertoolbar.html'
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            $attrs.$observe('theme', _onChangeTheme);
            $scope.$watch('menus', _onChangeMenus);

            $scope.overflow = [];
            $scope.actions = [];

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _onChangeTheme(newTheme) {
                $scope.themeObj = {
                    color: newTheme === 'dark' ? 'white' : 'black',
                    textColor: newTheme === 'dark' ? 'tc-white' : 'tc-black',
                };
            }

            function _onChangeMenus(newMenus) {
                $scope.actions = [];
                $scope.overflow = [];

                if (!(newMenus instanceof Array)) {
                    newMenus = [newMenus];
                }

                for (var i = 0; i < newMenus.length; i++) {
                    var menu = newMenus[i];

                    if (menu.showAsAction.indexOf('never') >= 0) {
                        $scope.overflow.push(menu);
                        continue;
                    }

                    $scope.actions.push(menu);
                }

                console.log('Actions', $scope.actions);
                console.log('Overflow', $scope.overflow);
            }
        }
    }
})(angular);