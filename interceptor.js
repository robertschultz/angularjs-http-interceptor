angular.module('interceptor', [])

.config(function ($httpProvider) {
  $httpProvider.responseInterceptors.push('myHttpInterceptor');
  var preIntercept = function (data, headersGetter) {
      console.log('Do something when the request starts.');
      return data;
  };
  $httpProvider.defaults.transformRequest.push(preIntercept);
})

.factory('myHttpInterceptor', function ($q, $window) {
  return function (promise) {
    return promise.then(function (response) {
        console.log('Do something on success of call.');
        return response;

    }, function (response) {
        console.log('Do something on error of call.');
        return $q.reject(response);
    });
  };
})
