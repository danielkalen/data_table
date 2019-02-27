import extend from 'smart-extend'
import EventEmitter from 'event-lite'
import {version} from '../../package.json'
import defaults from './parts/defaults'
import $ from 'jquery'
import * as markup from './parts/markup'
import * as helpers from './parts/helpers'
currentID = 0

class DataTable extends EventEmitter
	constructor: (@container, options={})->
		super()
		@options = extend.clone.deepOnly('columns')(DataTable.defaults, options)
		@state = 'loading':false, 'noResults':false, 'error':false
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
		@els.tableOuterwrap = $(markup.tableOuterwrap extend({@ID}, @options))
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



	fetchData: ()->
		@state.loading = true
		Promise.resolve()
			.then ()=> @options.data.call(@)
			.then (data)=>
				@state.loading = @state.error = false
				return data
			.catch (err)=>
				@state.error = err

	setData: (data)->
		@allRows = data if Array.isArray(data)

	appendData: (data)->
		@allRows.push(data...)

	loadData: ()->
		@unprocessRow(row) for row in @allRows if @allRows.length
		@fetchData().then (data)=> @setData(data)

	refresh: ()->
		@availableRows = @availableRows
		@currentPage = @currentPage

	markupArgs: (argsObject={})->
		argsObject.baseClass = @options.baseClass
		return argsObject


import * as generalMethods from './parts/methods'
import * as eventMethods from './parts/attachEvents'
import * as bindingMethods from './parts/attachBindings'
import * as userActionMethods from './parts/userActionMethods'
extend DataTable::, generalMethods, eventMethods, bindingMethods, userActionMethods


DataTable.version = version
DataTable.helpers = helpers
DataTable.markup = markup
DataTable.defaults = defaults

export default DataTable




