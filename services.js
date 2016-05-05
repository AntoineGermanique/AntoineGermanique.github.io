'use strict';

var newsAdenomServices = angular.module('newsAdenomServices', ['ngResource']);

newsAdenomServices.factory('Vote', ['$resource',
  function($resource){

    return $resource("http://adneom.herokuapp.com/api/posts/:newsId/:upvote",null,{
        update:{method:'PUT'}
    });
  }]);

