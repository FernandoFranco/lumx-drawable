/**
 * Fernando Franco
 * Directive Scrollbar
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxScroll', lxScroll);

    lxScroll.$inject = ['$timeout'];

    function lxScroll($timeout) {
        return {
            link: _link,
            restrict: 'A'
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            $scope.$watch(_checkWidthChange, _onResize);
            $scope.$watch(_checkHeightChange, _onResize);

            _init();

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _init() {
                $timeout(function() {
                    $element.scrollbar();
                }, 1000);
            }

            function _checkWidthChange() {
                return $element.width();
            }

            function _checkHeightChange() {
                return $element.height();
            }

            function _onResize() {
                $element.scrollbar();
            }
        }
    }
})(angular);