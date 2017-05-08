(function (angular) {
    'use strict';
    var app = angular.module("myApp", []);
    
    app.controller('myCtrl',  ['$scope', function ($scope) {
       
        $scope.longlists = ["rahul", "shivam", "annu", "vedahi", "deepika", "shilpa", "rampur", "deepa", "deepanshu", "anupum", "pooja", "ramsingh", "versha", "mannu", "nishtha", "nishant", "shivi", "shiristi", "anamika", "dolly", "khusbhu", "anchal", "chanchl", "shweta", "priya"];
 
        var i;
        $scope.newlist = function newlist(linesletter) {
            $scope.longlists1 = [];
            for (i = 0; i < $scope.longlists.length; i++) {
                var result = $scope.longlists[i].indexOf(linesletter) > -1;                
                if (result) {
                    $scope.longlists1.push($scope.longlists[i]);
                }
            }
        };
    }]);

})(window.angular);