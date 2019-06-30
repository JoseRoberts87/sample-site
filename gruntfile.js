module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["dist", '.tmp'],
        copy: {
            main: {
                expand: true,
                cwd: 'public/',
                src: ['**', '!**/*.js', '!**/*.css'],
                dest: 'dist/'
            }
        },

        filerev: {
            files: {
                src: ['dist/*.{js,css}']
            }
        },

        useminPrepare: {
            html: 'public/index.html',
            options: {
                dest: 'dist'
            }
        },

        usemin: {
            html: ['dist/index.html']
        },

        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },
        zip: {
            './dist.zip': ['dist/**']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-zip');


    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default',
        ['clean',
        'copy',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin',
        'zip']);
};