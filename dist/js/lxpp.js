/**
 * Fernando Franco
 * Angular Module
 */
(function (angular) {
    'use strict';
    angular.module('lxpp', ['lumx']);

    angular.module('lxpp').run(lxppRun);

    lxppRun.$inject = [];

    function lxppRun() {
        
    }
})(angular);
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
            template:'<div class="drawerlayout" ng-class="{\'drawer-active\': active}"><div id="lxpp-toolbar"><div class="toolbar bgc-blue-500 z4"><div class="toolbar__left mr+"><lx-button id="drawer-button" lx-size="l" lx-color="white" lx-type="icon" ng-click="active = !active;"><i class="mdi mdi-menu"></i></lx-button></div><span class="toolbar__label fs-title tc-white">Lorem Ipsum</span></div></div><div id="lxpp-navigator"><div><div id="navigator-toolbar" class="toolbar bgc-white"><span class="toolbar__label fs-title tc-white"></span><div class="toolbar__right"><lx-button lx-size="l" lx-color="grey" lx-type="icon" ng-click="active = !active;"><i class="mdi mdi-chevron-left"></i></lx-button></div></div></div></div><div id="lxpp-content" ng-transclude></div></div>'
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
//# sourceMappingURL=lxpp.js.map
