require "shelljs/global"
fs = require "fs"

module.exports = (grunt) ->
    grunt.initConfig(
    
        watch:
            default:
                files: ["*.coffee","*.jade"]
                tasks: ["build"]

        browserify:
            "code-snippet.js": ["code-snippet.coffee"]
            options:
                transform: ['coffeeify']

    )
    
    grunt.loadNpmTasks task for task in [
        'grunt-contrib-watch'
        'grunt-contrib-coffee'
        'grunt-browserify'
    ]

    grunt.registerTask 'buildSnippet', -> 
        fs.writeFileSync 'snippet.js',
            "module.exports = " + (exec 'jade -c <snippet.jade').output

    grunt.registerTask 'build', ['buildSnippet','browserify']
    grunt.registerTask 'default', ['build','watch']
