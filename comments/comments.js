'use strict';

angular.module('myApp.comments', ['ngRoute','ngResource'])



.controller('commentsCtrl', function($scope,$resource,$routeParams) {
        $scope.newsId=$routeParams.newsId;
        var Comments=$resource("http://adneom.herokuapp.com/api/posts/:newsId");
        Comments.get({newsId: $scope.newsId},function(news){
            $scope.news=news;
            $scope.commentsCollection=news.comments;
        });
        $scope.clickComments=function(news){
            
        };
        $scope.submit=function(){
            if($scope.comment.author&&$scope.comment.body){
                var Comments2=$resource("http://adneom.herokuapp.com/api/posts/:newsId/comments",{newsId:$scope.newsId},{upvote:{method:'PUT'}});
                Comments2.save({body:$scope.comment.body,author:$scope.comment.author}).$promise.then(function(res){
                    $scope.commentsCollection.push(res);
                });
            }
        };
});