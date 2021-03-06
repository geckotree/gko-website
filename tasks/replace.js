'use strict';
module.exports = {
	main: {
		options: {
			patterns: [ {
				match: 'loadFont',
				replacement: '<%= grunt.file.read( "assets/build/js/libs/loadFont.js" )%>',
				expression: false
			}, {
				match: 'icons',
				replacement: '<%= grunt.file.read( "assets/build/img/icons/icons.svg" )%>',
				expression: false
			}, {
				match: 'googleAnalytics',
				replacement: '<%= grunt.file.read( "assets/build/js/libs/googleAnalytics.js" )%>',
				expression: false
			} ]
		},
		files: [ {
			expand: true,
			flatten: true,
			src: [
				'index.html',
				'work.html',
				'adspy.html',
				'blog.html',
				'article.html',
				'planner.html'
			],
			dest: '.'
		} ]
	},
};
