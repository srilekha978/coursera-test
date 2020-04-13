(function () {
    "use strict";
    angular.module("LunchCheck", [])
        .controller("LunchCheckController", lunchController);

    /** inject required services */
    lunchController.$inject = ["$scope"];

    /** Logic here */
    function lunchController($scope) {
        $scope.lunchItems = "";
        /** check meal items */
        $scope.checkMeal = function () {
            if (!$scope.lunchItems) {
                $scope.message = "Please enter data first"
            } else {
                /** split the items */
                var items = $scope.lunchItems.split(",");
                if (items.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too Much!";
                }
            }
        }
    };
}())
