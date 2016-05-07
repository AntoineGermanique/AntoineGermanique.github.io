'use strict';

var newsAdenomServices = angular.module('newsAdenomServices', ['ngResource']);

newsAdenomServices.factory('Vote', ['$resource',
  function($resource){

    return $resource("https://agile-brook-75395.herokuapp.com/api/posts/:newsId/:upvote",null,{
        update:{method:'PUT'}
    });
  }]);

