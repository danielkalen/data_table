do ($=jQuery)->
	import '_parts/markup.coffee'
	import '_parts/defaults.coffee'
	import '_parts/helpers.coffee'

	DataTable = (@container, @options)->
		@tableOptions = $.extend {}, DataTable.defaultOptions, @options.table or {}
		@data = []

		# Markup
		@els = {}
		@els.tableOuterwrap = $(markup.table {columns:@generateColumns(), pagination:markup.pagination()})

		@els.table = @els.tableOuterwrap.children().first()
		@els.tableHead = @els.table.children().first().children()
		@els.tableBody = @els.table.children().last()
		@els.pagination = @els.tableOuterwrap.children().last()


		@els.tableOuterwrap.appendTo @container
		@els.table.data 'DataTable', @

		



		# Events & Bindings
		@attachEvents().then ()=>
			@attachBindings().then ()=>
				@fetchData()

		return @



	DataTable::fetchData = ()->
		@options.data().then (response)=> @data = response



	import '_parts/generators.coffee'
	import '_parts/attachEvents.coffee'
	import '_parts/attachBindings.coffee'
	import '_parts/userActionMethods.coffee'

	DataTable.version = import '../../.version.coffee'
	DataTable.helpers = helpers
	DataTable.markup = markup
	DataTable.defaultOptions = defaultOptions
	window.DataTable = DataTable