module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            src: ["dist", '.tmp'],
            server: '.tmp'
        },

        // Parses html and finds expected cssmin and ngmin
        useminPrepare: {
            html: ['*.html']
        },

        concat: {},
        copy: {
            html_files : {
                expand: true,
                src: ['*.html'],
                dest: 'dist/'
            },
            images : {
                expand: true,
                src: ['images/final/**'],
                dest: 'dist/'
            },
            fonts : {
                expand: true,
                src: ['fonts/**'],
                dest: 'dist/'
            }
        },

        // Replace references to scripts, css or images. Used together with rev, we point change references to assets with hash in name
        usemin: {
            html: ['dist/*.html'],
            css: ['dist/{,*/}*.css']
        },

        // Add a hash in assets filenames so browser will not used cached versions if file is modified
        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            assets: {
                files: {
                    src: [
                        'dist/css/*.css',
                        'dist/js/*.js'
                    ]
                }
            }
        },


        // Uglify files so they are harder to parse
        uglify: {
            options: {
                report: 'min',
                mangle: {except: ['angular', 'ui.router', 'ngAnimate', 'CarisApp']},
                beautify: {
                  width: 80,
                  beautify: false
                }
            }

        },

        html2js: {
            options: {
                base: '../client/'
            },
            main: {
              src: ['views/**/*.html'],
              dest: 'js/views.js'
            }
        },

        ngAnnotate: {}


    });

    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    //Html 2 js
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('emptyFile', 'Creates an empty file', function() {
        grunt.file.write('js/views.js', 'angular.module("templates-main", []);');
    });


    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'clean',
        'html2js',
        'useminPrepare',
        'copy',
        'concat',
        'uglify',
        'cssmin',
        'rev',
        'usemin',
        'emptyFile'
    ]);


};

