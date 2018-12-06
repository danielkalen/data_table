global.Promise = require 'bluebird'
Promise.config longStackTraces:process.env.DEBUG?
promiseBreak = require 'promise-break'
spawn = require('child_process').spawn
extend = require 'smart-extend'
fs = require 'fs-jetpack'
chalk = require 'chalk'
Path = require 'path'
process.env.SOURCE_MAPS ?= 1
buildModules = ['listr','google-closure-compiler-js','uglify-js@3.0.24']
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
	debug = if options.debug then '.debug' else ''
	Promise.resolve()
		.then ()-> {src:"src/coffee/index.coffee", dest:"build/js/dataTable#{debug}.js"}
		.tap ()-> console.log 'compiling js' unless global.silent
		.then (file)-> compileJS(file, debug:options.debug, umd:'DataTable', target:'browser')




task 'watch', ()->
	invoke 'watch:css'
	invoke 'watch:js'


task 'watch:css', (options)->
	require('simplywatch')
		globs: ["#{SRC}/sass/*.sass", "#{SRC}/icons/*.svg"]
		concurrency: 1
		command: (file, params)-> invoke 'build:css'


task 'watch:js', (options)->
	require('simplywatch')
		globs: "#{SRC}/coffee/*.coffee"
		command: (file, params)-> invoke 'build:js'




task 'install', ()->
	Promise.resolve()
		.then ()-> invoke 'install:build'
		# .then ()-> invoke 'install:coverage'
		# .then ()-> invoke 'install:bench'


task 'install:build', ()->
	Promise.resolve()
		.then ()-> buildModules.filter (module)-> not moduleInstalled(module)
		.tap (missingModules)-> promiseBreak() if missingModules.length is 0
		.tap (missingModules)-> installModules(missingModules)
		.catch promiseBreak.end


task 'install:test', ()->
	Promise.resolve()
		.then ()-> testModules.filter (module)-> not moduleInstalled(module)
		.tap (missingModules)-> promiseBreak() if missingModules.length is 0
		.tap (missingModules)-> installModules(missingModules)
		.catch promiseBreak.end


task 'install:karma', ()->
	Promise.resolve()
		.then ()-> karmaModules.filter (module)-> not moduleInstalled(module)
		.tap (missingModules)-> promiseBreak() if missingModules.length is 0
		.tap (missingModules)-> installModules(missingModules)
		.catch promiseBreak.end




















runTaskList = (tasks)->
	(new (require 'listr')(tasks, concurrent:true)).run()

runTaskListSerial = (tasks)->
	(new (require 'listr')(tasks, concurrent:false)).run()



compileJS = (file, options)->
	Promise.resolve()
		.then ()-> require('simplyimport')(extend {file:file.src}, options)
		.then (result)-> fs.writeAsync(file.dest, result)
		.catch (err)->
			console.error(err)
			throw err


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



installModules = (targetModules)-> new Promise (resolve, reject)->
	targetModules = targetModules
		.filter (module)-> if typeof module is 'string' then true else module[1]()
		.map (module)-> if typeof module is 'string' then module else module[0]
	
	return resolve() if not targetModules.length
	console.log "#{chalk.yellow('Installing')} #{chalk.dim targetModules.join ', '}"
	
	install = spawn('npm', ['install', '--no-save', '--no-purne', targetModules...], {stdio:'inherit'})
	install.on 'error', reject
	install.on 'close', resolve


moduleInstalled = (targetModule)->
	targetModule = targetModule[0] if typeof targetModule is 'object'
	if (split=targetModule.split('@')) and split[0].length
		targetModule = split[0]
		targetVersion = split[1]
	
	pkgFile = Path.resolve('node_modules',targetModule,'package.json')
	exists = fs.exists(pkgFile)
	
	if exists and targetVersion?
		currentVersion = fs.read(pkgFile, 'json').version
		exists = require('semver').gte(currentVersion, targetVersion)

	return exists


