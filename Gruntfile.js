module.exports = function( grunt ) {
	/*
	 * Time taken for grunt tasks
	 */
	require( 'time-grunt' )( grunt );

	/*
	 * Load all Grunt tasks
	 */
	require( 'load-grunt-tasks' )( grunt );
	grunt.loadNpmTasks( 'assemble' );

	/*
	 * Define variables for tasks
	 */
	var vars = {
		pkg: grunt.file.readJSON( 'package.json' ),
		assetsFolder: 'assets',
		assetsBuildFolder: 'assets/build',
		siteFolder: 'src'
	};

	/*
	 * Set location to load grunt tasks form
	 */
	vars.config = {
		src: 'tasks/*.js'
	};

	var configs = require( 'load-grunt-configs' )( grunt, vars );

	grunt.initConfig( configs );

	/*
	 * Define tasks
	 */
	grunt.registerTask( 'dev', [
		'css:dev',
		'js:dev',
		'assemble',
		'images:dev',
		'todo',
		'browserSync',
		'watch'
	] );

	grunt.registerTask( 'build', [
		'css:build',
		'js:build',
		'icons',
		'critical',
		'images',
		'todo'
	] );


	grunt.registerTask( 'css:dev', [
		'sass:all',
		'autoprefixer',
		'stripmq',
		'pixrem'
	] );

	grunt.registerTask( 'css:build', [
		'css:dev',
		'css_mqpacker',
		'cssmin'
	] );

	grunt.registerTask( 'js:dev', [
		'modernizr',
		'concat',
		'jshint',
		'uglify:inline'
	] );

	grunt.registerTask( 'js:build', [
		'js:dev',
		'uglify'
	] );

	grunt.registerTask( 'images:dev', [
		'copy:images',
		'clean:icons',
		'svgstore',
		'replace'
	] );
};
