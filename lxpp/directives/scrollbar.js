/**
 * Fernando Franco
 * Directive Scrollbar
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxScroll', lxScroll);

    lxScroll.$inject = [];

    function lxScroll() {
        return {
            link: _link,
            restrict: 'A'
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            $element.scrollbar();
        }
    }
})(angular);