'use strict';
angular.module('nordic').factory('worksService', function($http, requestService) {


    return {
        getList: function() {
            return $http.get('app/portfolio/works.json');
}

};
});
