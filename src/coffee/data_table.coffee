do ($=jQuery)->
	import 'node_modules/bluebird/js/browser/bluebird.js'
	import '_parts/markup.coffee'
	import '_parts/defaults.coffee'
	import '_parts/helpers.coffee'

	DataTable = (@container, options={})->
		@options = $.extend {}, DataTable.defaults, options
		@state = 'loading':true, 'noResults':false
		@visibleRows = []
		@availableRows = []
		@allRows = []
		@largestBreakdownTotal = 0
		@searchCriteria = ''
		@searchParam = 'Item'
		@currentPage = 1


		# ==== Markup =================================================================================
		@els = {}
		@els.tableOuterwrap = $(markup.tableOuterwrap())
		@els.table = $(markup.table(@options)).appendTo(@els.tableOuterwrap)
		@els.tableHeading = @els.table.children().first().children()
		@els.tableBody = @els.table.children().last()
		@els.noResultsMessage = $(markup.noResults()).appendTo(@els.tableOuterwrap)
		@els.loadingMessage = $(markup.loading()).appendTo(@els.tableOuterwrap)
		@els.pagination = $(markup.pagination()).appendTo(@els.tableOuterwrap)
		@els.paginationExtra = @els.pagination.children('.extraIndicator')
		@els.paginationExtraSelect = @els.paginationExtra.children('select')
		@els.paginationExtraText = @els.paginationExtraSelect.prev()
		@els.searchField = $(markup.searchField(@options)).insertBefore(@els.table)

		@els.tableHeading.append(@generateHeadingColumns())

		@els.tableOuterwrap.appendTo @container
		@els.table.data 'DataTable', @



		# ==== Events & Bindings =================================================================================
		Promise.bind(@)
			.then(@attachEvents)
			.then(@attachBindings)
			.then(@loadData)

		return @



	DataTable::fetchData = ()->
		@state.loading = true
		@options.data().then (data)=>
			@state.loading = false
			@state.noResults = !data?.length
			Promise.resolve(data)

	DataTable::setData = (data)->
		@allRows = data if Array.isArray(data)
	
	DataTable::loadData = ()->
		@unprocessRow(row) for row in @allRows if @allRows.length
		@fetchData().then (data)=> @setData(data)





	import '_parts/methods-general.coffee'
	import '_parts/methods-row.coffee'
	import '_parts/methods-specialCells.coffee'
	import '_parts/attachEvents.coffee'
	import '_parts/attachBindings.coffee'
	import '_parts/userActionMethods.coffee'

	DataTable.version = import '../../.version.coffee'
	DataTable.helpers = helpers
	DataTable.markup = markup
	DataTable.defaults = defaults
	window.DataTable = DataTable