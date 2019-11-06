module.exports = (grunt) => {
  grunt.initConfig({
    source: 'src',
    build: 'build',
    static: '<%= build %>/static',
    assets: '<%= source %>/assets',
    components: 'node_modules',
    cssmin: {
      bundle: {
        options: {
          sourceMap: true,
        },
        files: {
          '<%= static %>/css/bundle.min.css': [
            '<%= components %>/normalize.css/normalize.css',
            '<%= components %>/aos/dist/aos.css',
            '<%= components %>/flexboxgrid/dist/flexboxgrid.css',
            '<%= components %>/owl.carousel/dist/assets/owl.carousel.css',
          ],
        },
      },
    },
    sass: {
      main: {
        options: {
          style: 'compressed',
        },
        files: {
          '<%= static %>/css/main.min.css': '<%= assets %>/css/main.scss',
        },
      },
    },
    pug: {
      main: {
        options: {
          pretty: true
        },
        files: {
          '<%= build %>/index.html': '<%= source %>/index.pug'
        }
      }
    },
    uglify: {
      options: {
        sourceMap: true,
      },
      bundle: {
        files: {
          '<%= static %>/js/bundle.min.js': [
            '<%= components %>/jquery/dist/jquery.js',
            '<%= components %>/owl.carousel/dist/owl.carousel.js',
            '<%= components %>/aos/dist/aos.js',
          ],
        },
      },
      main: {
        files: {
          '<%= static %>/js/main.min.js': ['<%= assets %>/js/main.js'],
        },
      },
    },
    imagemin: {
      main: {
        files: [{
          expand: true,
          cwd: '<%= assets %>/images',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: '<%= static %>/images',
        }],
      },
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= assets %>/css/**/*.scss'],
        tasks: ['sass'],
      },
      uglify: {
        files: ['<%= assets %>/js/**/*.js'],
        tasks: ['uglify:main'],
      },
      pug: {
        files: ['<%= source %>/**/*.pug'],
        tasks: ['pug'],
      },
      imagemin: {
        files: ['<%= assets %>/images/**/*'],
        tasks: ['imagemin'],
      },
    },
  });

  // Install Grunt packages
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask(
    'default',
    ['cssmin', 'sass', 'pug', 'uglify', 'imagemin', 'watch'],
  );
};
