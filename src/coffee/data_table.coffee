do ($=jQuery)->
	import '_parts/markup.coffee'
	import '_parts/defaults.coffee'
	import '_parts/helpers.coffee'

	DataTable = (@container, @options)->
		@tableOptions = $.extend {}, DataTable.defaults, @options.table or {}
		@data = []

		# Markup
		@els = {}
		@els.tableOuterwrap = $(markup.tableOuterwrap())
		@els.table = $(markup.table()).appendTo(@els.tableOuterwrap)
		@els.tableHeading = @els.table.children().first().children()
		@els.tableBody = @els.table.children().last()
		@els.noResultsMessage = $(markup.noResults()).appendTo(@els.tableOuterwrap)
		@els.pagination = $(markup.pagination()).appendTo(@els.tableOuterwrap)

		@els.tableHeading.append(@generateColumns())

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
	DataTable.defaults = defaults
	window.DataTable = DataTable