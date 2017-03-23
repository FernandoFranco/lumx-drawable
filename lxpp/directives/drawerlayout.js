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
                type: '@'
            },
            templateUrl: './drawerlayout.html'
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attr, $ctrl, $transclude) {
            $scope.$watch($scope.type, _onChangeType);

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _onChangeType(newType, oldType) {
                
            }
        }
    }
})(angular);