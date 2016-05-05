'use strict';

angular.module('myApp.addnews', ['ngRoute','ngResource'])



.controller('addnewsCtrl', function($scope,$resource,$location) {

        $scope.submit=function(){
            if($scope.post.title&&$scope.post.link){
                var News=$resource("http://adneom.herokuapp.com/api/posts/");
                News.save({title:$scope.post.title,link:$scope.post.link}).$promise.then(
                        function(){
                            $location.path("/");
                        });

            }
        };
});