(function () {
    var app = angular.module('infox-app');

    app.filter("newline", function($filter) {
        return function(data) {
            if (!data) return data;
            return data.replace(/\n\r?/g, '<br />');
        };
    });
})();