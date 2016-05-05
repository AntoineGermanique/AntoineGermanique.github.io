'use strict';

angular.module('myApp.news', ['ngRoute','ngResource','newsAdenomServices'])



.controller('newsCtrl', function($scope,$resource,Vote) {
        var News=$resource("http://adneom.herokuapp.com/api/posts");
        $scope.isQuerySuccess=false;
        $scope.isQueryFalse=false;
        News.query().$promise.then(function(res){
            $scope.isQuerySuccess=true;
            $scope.newsCollection=res;
        },function(){
            $scope.isQueryError=true;
        });
        
        $scope.upVote=function(){
            this.news.upvotes++;
            queryPut(this.news._id,this.news.upvotes);
            
        };
        
        $scope.initRand=function(){
            this.news.randomValue=Math.random();;
        };
        
        
        
        $scope.randomColor=function(){
            var colorArray=["orange","green","blue","purple"];
            if (this.news.randomValue<0.25){
                return colorArray[0];
            }else if(0.25<=this.news.randomValue&&this.news.randomValue<0.5){
                return colorArray[1];
            }else if(0.5<=this.news.randomValue&&this.news.randomValue<0.75){
                return colorArray[2];
            }else if(0.75<=this.news.randomValue&&this.news.randomValue<=1){
                return colorArray[3];
            }
                    
        };
        var queryPut=function(newsId,valueVote){
            var post=Vote.get({newsId:newsId}).$promise.then(function(post){
                Vote.update({newsId:newsId,upvote:"upvote"},post).$promise.then(function(res){
                    var res;
                });
            });
        };
});