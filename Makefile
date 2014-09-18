build:
	browserify public/js/main.js > public/js/main_build.js
	#minify public/js/main_build.js public/js/main_build.min.js
	#minify public/css/style.css public/css/style.min.css
