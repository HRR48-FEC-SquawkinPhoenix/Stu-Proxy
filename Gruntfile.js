module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['Services/Add-To-Cart/Dist/bundle.js', 'Services/ImageCarousel/public/bundle.js', 'Services/Reviews/public/bundle.js', 'Services/Seller/client/dist/bundle.js'],
        dest: 'bundles/built.js',
      },
    },
    // uglify: {
    //   options: {
    //     mangle: false
    //   },
    //   my_target: {
    //     files: {
    //       'bundles/built.min.js': ['bundles/built.js']
    //     }
    //   }
    // },
    // cssmin: {
    //   options: {
    //     mergeIntoShorthands: false,
    //     roundingPrecision: -1
    //   },
    //   target: {
    //     files: {
    //       'bundles/compiled.css': ['public/proxy.css', 'Services/ImageCarousel/public/style.css', 'Services/Reviews/public/style.css', 'Services/Seller/client/dist/style.css']
    //     }
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat']);
}
