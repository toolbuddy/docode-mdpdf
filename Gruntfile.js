module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        latex: {
            options: {
                haltOnError: 'true',
                outputFormat: 'pdf'
            },
            pdf_target: {
                options: {
                    outputDirectory: 'dest'
                },
                src: ['src/*.tex']
            }
        },
        markdownpdf: {
            options: {},
            files: {
                src: "src/*.md",
                dest: "dest"
            }
        }
    });

    grunt.loadNpmTasks('grunt-markdown-pdf');
    grunt.loadNpmTasks('grunt-latex');

    // enroll task(s).
    grunt.registerTask('mpdf', ['markdownpdf']);
    grunt.registerTask('lpdf', ['latex:pdf_target']);
};