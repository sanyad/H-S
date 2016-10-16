'use strict';

angular.module('nordic').controller('NavController', function ($scope) {
    angular.element('.nav__button').on("click", function () {
        angular.element('.slide__nav').toggleClass('active');
    });
    angular.element(document).on("click", function(e) {
        if (angular.element(e.target).is(".slide__nav *") === false) {
            angular.element('.slide__nav, li').removeClass('active');
            angular.element('ul').removeClass('in');
            $scope.isActive = false;
        } else {
            return false;
        }
    });
    });



