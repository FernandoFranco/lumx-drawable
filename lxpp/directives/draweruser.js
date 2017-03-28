/**
 * Fernando Franco
 * Directive Userlayout
 */
(function (angular) {
    'use strict';
    angular.module('lxpp').directive('lxDrawerUser', lxDrawerUser);

    lxDrawerUser.$inject = ['$rootScope'];

    function lxDrawerUser($rootScope) {
        return {
            link: _link,
            replace: true,
            restrict: 'E',
            scope: {
                users: '=',
                minDrawer: '=',
                background: '@'
            },
            templateUrl: 'draweruser.html'
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////

        function _link($scope, $element, $attrs, $ctrl, $transclude) {
            var menuDown = 'menu-down';
            var menuUp = 'menu-up';
            var showUsers = false;

            $scope.user = null;
            $scope.menuIcon = menuDown;

            $scope.hideDrawer = _hideDrawer;
            $scope.toggleUsers = _toggleUsers;

            $scope.$watch('users', _onChangeUsers);

            ////////////////////////////////////////////////////////////////////////////////////////////////

            function _onChangeUsers(newUsers) {
                if (!newUsers) {
                    $scope.user = null;
                    return;
                }
                
                if (!(newUsers instanceof Array)) {
                    $scope.users = [newUsers];
                }

                $scope.users.forEach(function(user) {
                    if (user.active) {
                        $scope.user = user;
                    }
                });

                if (!$scope.user) {
                    $scope.user = $scope.users[0] || null;
                }
            }

            function _toggleUsers() {
                if (showUsers) {
                    showUsers = false;
                    $scope.menuIcon = menuDown;
                    return $rootScope.$broadcast('drawernavigator:original');
                }

                var tempMenu = [];
                $scope.users.forEach(function(user) {
                    if (user !== $scope.user) {
                        tempMenu.push({
                            label: user.name,
                            avatar: user.image,
                            handler: function _changeUser() {
                                showUsers = false;
                                $scope.user = user;
                                $scope.menuIcon = menuDown;
                                $rootScope.$broadcast('drawernavigator:original');
                                $rootScope.$broadcast('draweruser:changeuser', user);
                            }
                        });
                    }
                });

                showUsers = true;
                $scope.menuIcon = menuUp;
                $rootScope.$broadcast('drawernavigator:temp', [{items: tempMenu}]);
            }

            function _hideDrawer($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $rootScope.$broadcast('drawer:active', false);
            }
        }
    }
})(angular);