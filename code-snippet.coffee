template = require "./snippet"
jade = require "jade/runtime"

module = angular.module "code-snippet", []

module.directive "codeSnippet", ->
    restrict: 'E'
    scope: true
    compile: (elem, attrs) ->
        code = elem.html()
        elem.html template({}, jade.attrs, jade.escape, jade.rethrow, jade.merge)
        return (scope, elem, attrs) ->
            scope.code = code
            scope.exec = ->
                Function(scope.code)()


