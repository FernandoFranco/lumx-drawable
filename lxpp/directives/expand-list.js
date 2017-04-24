/**
 * Fernando Franco
 * Directive Expand List
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxExpandList', lxExpandList);

    lxExpandList.$inject = [];

    function lxExpandList() {
        return {
            link: _link,
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {
                lxData: '=',
                lxSelected: '=?',

                lxIcon: '@',
                lxMenu: '=?',
                lxIconColor: '@'
            },
            templateUrl: 'expand-list.html'
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {

            $scope.toggleActive = _toggleActive;

            _init();

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _init() {
                $scope.lxSelected = $scope.lxSelected || null;
            }

            function _toggleActive($event, lxSelected, data) {
                $scope.lxSelected = data;
                return !lxSelected;
            }
        }
    }
})(angular);