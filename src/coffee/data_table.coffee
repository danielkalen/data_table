do ($=jQuery)->
	import * as extend from 'extend'
	import * as escHTML from 'escape-html'
	import '_parts/markup.coffee'
	import '_parts/defaults.coffee'
	import '_parts/helpers.coffee'

	DataTable = (@container, options={})->
		@options = extend {}, DataTable.defaults, options
		@state = 'loading':true, 'noResults':false, 'error':false
		@ID = ++currentID
		@tableID = "\##{@options.baseClass}-#{@ID}"
		@visibleRows = []
		@availableRows = []
		@allRows = []
		@largestBreakdownTotal = 0
		@searchCriteria = ''
		@searchParam = ''
		@sortBy = if @options.sortBy then @options.sortBy else ''
		@sortDirection = -1
		@currentPage = 1


		# ==== Markup =================================================================================
		@els = {}
		@els.tableOuterwrap = $(markup.tableOuterwrap $.extend({@ID}, @options))
		@els.table = $(markup.table(@options)).appendTo(@els.tableOuterwrap)
		@els.tableHeading = @els.table.children().first().children()
		@els.tableBody = @els.table.children().last()
		@els.noResultsMessage = $(markup.noResults(@options)).appendTo(@els.tableOuterwrap)
		@els.loadingMessage = $(markup.loading(@options)).appendTo(@els.tableOuterwrap)
		@els.errorMessage = $(markup.error(@options)).appendTo(@els.tableOuterwrap)
		@els.pageStatus = $(markup.pageStatus(@options)).appendTo(@els.tableOuterwrap)
		@els.pagination = $(markup.pagination(@options)).appendTo(@els.tableOuterwrap)
		@els.paginationItems = @els.pagination.children('._paginationItems')
		@els.paginationExtra = @els.pagination.children('._extraIndicator')
		@els.paginationExtraSelect = @els.paginationExtra.children('select')
		@els.paginationExtraText = @els.paginationExtraSelect.prev()
		@els.searchField = $(markup.searchField(@options)).insertBefore(@els.table)
		@els.searchParam = @els.searchField.children('select')
		@els.searchCriteria = @els.searchField.children('input')
		@els.globalStyles = $('<style />').prependTo(@els.tableOuterwrap)

		@els.tableHeading.append(@generateHeadingColumns())

		@els.tableOuterwrap.appendTo @container
		@els.table.data 'DataTable', @
		@els.table[0].style.minWidth = "#{@options.minWidth}px" if @options.minWidth


		# ==== Events & Bindings =================================================================================
		Promise.bind(@)
			.then(@attachEvents)
			.then(@attachBindings)
			.then ()-> if @options.loadOnInit then @loadData()

		return @



	DataTable::fetchData = ()->
		@state.loading = true
		@options.data()
			.then (data)=>
				@state.loading = false
				Promise.resolve(data)
			.catch (err)=> @state.error = err

	DataTable::setData = (data)->
		@allRows = data if Array.isArray(data)
	
	DataTable::loadData = ()->
		@unprocessRow(row) for row in @allRows if @allRows.length
		@fetchData().then (data)=> @setData(data)


	DataTable::markupArgs = (argsObject={})->
		argsObject.baseClass = @options.baseClass
		return argsObject




	import '_parts/methods'
	import '_parts/attachEvents.coffee'
	import '_parts/attachBindings.coffee'
	import '_parts/userActionMethods.coffee'

	currentID = 0
	DataTable.version = import '../../.version.coffee'
	DataTable.helpers = helpers
	DataTable.markup = markup
	DataTable.defaults = defaults
	window.DataTable = DataTable