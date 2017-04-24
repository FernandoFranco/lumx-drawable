/**
 * Fernando Franco
 * Directive Expand Item
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxExpandItem', lxExpandItem);

    lxExpandItem.$inject = ['$timeout'];

    function lxExpandItem($timeout) {
        return {
            link: _link,
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {
                lxIcon: '@',
                lxMenu: '=?',
                lxLabel: '@',
                lxActive: '=?',
                lxMenuItem: '=?',
                lxIconColor: '@',
                lxToggleActive: '&?'
            },
            templateUrl: 'expand-item.html'
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            var content = $element.find('.lx-el__content');

            $scope.preventStop = _preventStop;
            $scope.menuHandler = _menuHandler;
            $scope.toggleActive = _toggleActive;

            $scope.$watch(_checkMaxHeight, _changeMaxHeight);
            $scope.$watch('lxActive', _onChangeActive);

            _init();

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _init() {
                $scope.active = !!$scope.lxActive;
            }

            function _preventStop($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }

            function _menuHandler($event, menu) {
                menu.handler($event, menu, $scope.lxMenuItem);
            }

            function _toggleActive($event, lxSelected) {
                $scope.active = $scope.lxToggleActive({
                    $event: $event,
                    selected: lxSelected
                });
            }

            function _checkMaxHeight() {
                return content[0].scrollHeight;
            }

            function _changeMaxHeight(newHeight) {
                content.css({
                    maxHeight: newHeight
                });
            }

            function _onChangeActive(newActive) {
                $scope.active = newActive;
            }
        }
    }
})(angular);