(function(angular) {
    'use strict';

    // Global service for global variables
    var GlobalFactory = [
        function() {
            var _this = this;
            _this._data = {
                user: window.user,
                authenticated: !! window.user,
                admin: window.user && window.user.role === 'Admin'
            };

            return _this._data;
        }
    ];

    angular.module('startupwichita.services').factory('Global', GlobalFactory);
})(window.angular);
