template = require "./snippet"
jade = require "jade/runtime"

module = angular.module "code-snippet", ['ui.codemirror']

module.directive "codeSnippet", ->
    restrict: 'E'
    scope:
        code: '=ngModel'
    compile: (elem, attrs) ->
        code = elem.html()
        elem.html template({}, jade.attrs, jade.escape, jade.rethrow, jade.merge)
        return {
            pre: (scope, elem, attrs) ->
                scope.code = code
                scope.options = {lineNumbers: true}
                scope.exec = ->
                    Function(scope.code)()
        }



