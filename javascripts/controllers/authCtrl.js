"use strict";

app.controller("authCtrl", function($scope, $rootScope, AuthService) {
    $scope.authenticate = () => {
        AuthService.authenticateGoogle().then((result) => {
            console.log(result)
            $rootScope.Uid = result.user.uid;
            $scope.$apply(()=> {
            $location.url("/search");
        });
        }).catch((err) => {
            console.log("error in Auth", err);
        });
    };
});