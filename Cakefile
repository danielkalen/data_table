global.Promise = require 'bluebird'
Promise.config longStackTraces:process.env.DEBUG?
promiseBreak = require 'promise-break'
spawn = require('child_process').spawn
extend = require 'smart-extend'
fs = require 'fs-jetpack'
packageInstall = require 'package-install'
chalk = require 'chalk'
Path = require 'path'
process.env.SOURCE_MAPS ?= 1
buildModules = ['listr']
testModules = ['@danielkalen/polyfills', 'mocha', 'chai', 'chai-dom', 'chai-style', 'chai-almost', 'chai-asserttype', 'chai-events']
karmaModules = ['request', 'electron', 'karma@1.6.0', 'karma-chrome-launcher', 'karma-coverage', 'karma-electron', 'karma-firefox-launcher', 'karma-ie-launcher', 'karma-mocha', 'karma-opera-launcher', 'karma-safari-launcher', 'github:danielkalen/karma-sauce-launcher']
karmaModules = testModules.concat(karmaModules)
SRC = Path.resolve 'src'
DIST = Path.resolve 'dist'
DEST = Path.resolve 'build'
process.env.fontsDir = Path.resolve DIST,'fonts'

option '-d', '--debug', 'run in debug mode'
option '-m', '--maps', 'create source maps'
option '-D', '--dry', 'dry run'
option '-t', '--target [target]', 'target file'

task 'build', ()->
	Promise.resolve()
		.then ()-> invoke 'build:css'
		.then ()-> invoke 'build:js'


task 'build:css', (options)->
	options.target += '.sass' if options.target and not options.target.includes('.sass') and not options.target.includes('.scss')
	Promise.resolve()
		.then ()-> promiseBreak([options.target]) if options.target
		.then ()-> fs.listAsync "#{SRC}/sass"
		.filter (file)-> file.endsWith '.sass'
		.filter (file)-> file[0] isnt '_'

		.catch promiseBreak.end
		.map (file)->
			fileBase = Path.basename(file,'.sass')
			{src:"#{SRC}/sass/#{fileBase}.sass", dest:"#{DEST}/css/#{fileBase}.css", base:fileBase}

		.map (file)->
			title: "Compiling #{file.base}.sass"
			task: ()-> compileCSS(file, options)
	
		.then runTaskListSerial


task 'build:css', (options)->
	debug = if options.debug then '.debug' else ''
	Promise.resolve()
		.then ()-> {src:"src/sass/index.sass", dest:"build/css/dataTable#{debug}.css"}
		.tap ()-> console.log 'compiling css' unless global.silent
		.then (file)-> compileCSS(file, debug:options.debug, umd:'DataTable', target:'browser')


task 'build:js', (options)->
	console.log 'bundling lib'
	compileJS(require './.config/rollup.lib')




task 'watch', ()->
	invoke 'watch:css'
	invoke 'watch:js'


task 'watch:css', (options)->
	require('simplywatch')
		globs: ["#{SRC}/sass/*.sass", "#{SRC}/icons/*.svg"]
		concurrency: 1
		command: (file, params)-> invoke 'build:css'


task 'watch:js', (options)->
	require('rollup').watch(require './.config/rollup.lib')



task 'install', ()->
	Promise.resolve()
		.then ()-> invoke 'install:build'
		# .then ()-> invoke 'install:test'
		# .then ()-> invoke 'install:coverage'
		# .then ()-> invoke 'install:measure'

task 'install:build', ()-> packageInstall buildModules
task 'install:test', ()-> packageInstall testModules
task 'install:karma', ()-> packageInstall testModules.concat(karmaModules)
task 'install:coverage', ()-> packageInstall ['istanbul', 'badge-gen', 'coffee-coverage']
task 'install:measure', ()-> packageInstall ['gzipped', 'sugar']



















runTaskList = (tasks)->
	(new (require 'listr')(tasks, concurrent:true)).run()

runTaskListSerial = (tasks)->
	(new (require 'listr')(tasks, concurrent:false)).run()



compileJS = (configs)->
	rollup = require 'rollup'

	for config,i in configs
		console.log "bundling config ##{i+1} (#{config.input})"
		bundle = await rollup.rollup(config)

		for dest in config.output
			await bundle.write(dest)


compileCSS = (file, options)->
	return if options.dry
	Sass = Promise.promisifyAll require 'node-sass'
	Promise.resolve()
		.then ()-> Sass.renderAsync
			file: file.src
			importer: require('sass-module-importer')()
			functions:require('@danielkalen/sass-base')
			outputStyle: if options.debug then 'nested' else 'compressed'

		.then (result)-> fs.writeAsync file.dest, result.css
		.catch (err)-> console.error(err); throw err





