module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
         dir : {
            src : 'stylesheets',
            dist : 'dist'
        },
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            dist: {
                files: [
                    'test/**/*.scss',
                    './<%= dir.src %>/**/*.scss'
                ],
                tasks: ['mochaTest']
            }
        },
        mochaTest: {
            test: {
                src: ['test/**/*.js']
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json', 'lib/bem-constructor.rb', 'dist/_bem-constructor.scss'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Bump version %VERSION%',
                commitFiles: ['package.json', 'bower.json', 'lib/bem-constructor.rb', 'dist/_bem-constructor.scss'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                prereleaseName: 'pre',
                // Override default regExp to make it find in the version in lib/cubic-bezier.rb
                regExp: new RegExp('([\'|\"]?[version][\'|\"]?[ ]*[:|=][ ]*[\'|\"]?)(\\d+\\.\\d+\\.\\d+(-\\.\\d+)?(-\\d+)?)[\\d||A-a|.|-]*([\'|\"]?)', 'i')
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-bump');

    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('dev', ['mochaTest', 'watch']);

    var versionBump = grunt.option('versionBump') || 'minor';
    grunt.registerTask('release', ['build', 'bump-only:' + versionBump, 'bump-commit']);
}

