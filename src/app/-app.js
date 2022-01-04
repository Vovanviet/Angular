angular.module("exampleApp".[])
    .controller("helloWorldCtrl",function($log,$scope){
        $scope.name='';
        $scope.logMe = function(){
            $log.log('Name Enterec::'+$scope.name);
        };
    });