'use strict';

angular.module('myApp.addnews', ['ngRoute','ngResource'])



.controller('addnewsCtrl', function($scope,$resource,$location) {

        $scope.submit=function(){
            if($scope.post.title&&$scope.post.link){
                var News=$resource("https://agile-brook-75395.herokuapp.com/api/posts/");
                News.save({title:$scope.post.title,link:$scope.post.link}).$promise.then(
                        function(){
                            $location.path("/");
                        });

            }
        };
});