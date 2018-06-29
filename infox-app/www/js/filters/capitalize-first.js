(function () {
    var app = angular.module('infox-app');

    app.filter('capitalize', function () {
        return function (text) {
            return (!!text) ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() : '';
        }
    });
})();