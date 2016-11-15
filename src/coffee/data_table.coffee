do ($=jQuery)->
	import '_parts/data_table-markup.coffee'
	import '_parts/data_table-helpers.coffee'

	defaultTableOptions = 
		'checkbox': true
		'perPage': 20
		'actions': false
		'ipDataFetcher': (ipAddress)-> new Promise (resolve)-> $.get "http://ipinfo.io/#{ipAddress}", resolve, 'JSON'


	DataTable = (@container, @options)->
		@tableOptions = $.extend {}, defaultTableOptions, @options.table or {}
		@data = []

		# Markup
		@els = {}
		@els.tableOuterwrap = $(markup.table
			.replace '{{hasCheckbox}}', if @tableOptions.checkbox then 'has_checkbox' else ''
			.replace '{{columns}}', @generateColumns()
			.replace '{{pagination}}', markup.pagination
		)

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



	import '_parts/data_table-generators.coffee'
	import '_parts/data_table-attachEvents.coffee'
	import '_parts/data_table-attachBindings.coffee'
	import '_parts/data_table-userActionMethods.coffee'


	window.DataTable = DataTable