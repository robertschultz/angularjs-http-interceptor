Introduction
-----

AngularJS $http interceptor library which allows you to globally hook into any $http call. Great for things like creating spinners, logging, etc.

Usage
----
Plug this into your app, and wire up the preIntercept function like in the script to do anything to transform the request before it fires. Then use the promise callbacks to intercept the response as needed.
