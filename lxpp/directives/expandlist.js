/**
 * Fernando Franco
 * Directive Expand List
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxExpandList', lxExpandList);

    lxExpandList.$inject = ['$timeout'];

    function lxExpandList($timeout) {
        return {
            link: _link,
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {
                lxId: '@',
                lxMenu: '=',
                lxLabel: '@',
                lxActive: '=',
                lxMenuItem: '='
            },
            templateUrl: 'expandlist.html'
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            var content = $element.find('.lx-el__content');

            $scope.isActive = !!$scope.lxActive;
            $scope.preventStop = _preventStop;
            $scope.menuHandler = _menuHandler;

            $scope.$watch(_checkMaxHeight, _changeMaxHeight);

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _preventStop($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }

            function _menuHandler($event, menu) {
                menu.handler($event, menu, $scope.lxMenuItem);
            }

            function _checkMaxHeight() {
                return content[0].scrollHeight;
            }

            function _changeMaxHeight(newHeight) {
                content.css({
                    maxHeight: newHeight
                });
            }
        }
    }
})(angular);