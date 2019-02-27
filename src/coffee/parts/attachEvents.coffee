import $ from 'jquery'
import * as markup from './markup'
import {toggleActionsPopup, compareValues} from './helpers'

export attachEvents = ()->
	# ==== Pagination =================================================================================
	@els.pagination.on 'click', '._paginationItem', (event)=>
		$this = $(event.currentTarget)
		isBack = $this.hasClass('_back')
		isNext = $this.hasClass('_next')
		isExtra = $this.hasClass('_extraIndicator')

		if isBack
			@currentPage-- unless @currentPage is 1
		
		else if isNext
			@currentPage++ unless @currentPage is @pageCountReal
		
		# else if not isExtra and not isWrapper
		else if not isExtra
			pageNumber = parseFloat $this.children().html()
			@currentPage = pageNumber




	# ==== Sorting =================================================================================
	@els.tableHeading.on 'click', '._isSortable', (event)=>
		@sortBy = event.currentTarget.children[0].textContent



	# ==== Action button event listeners =================================================================================
	@els.tableBody.on 'click', '._actionButton', (event)=>
		button$ = $(event.currentTarget)
		if button$.hasClass('_isMulti')
			toggleActionsPopup button$.next().children()
		
		else
			itemRow$ = button$.closest('._tableRow')
			action = button$.data('action')
			itemID = itemRow$.data('row-id')
			itemIndex = itemRow$.data('index')
			dataItem = if itemID then @allRows.find (row)=> compareValues(row[@options.uniqueID], itemID)
			dataItem ?= itemID

			if button$.hasClass('_subActionButton')
				toggleActionsPopup button$.parent()

			@els.table.trigger "action.#{action}", dataItem






	# ==== Row expansion listeners =================================================================================
	@els.tableBody.on 'click', '._expandDrilldown', (event)=>
		button$ = $(event.currentTarget)
		itemRow = button$.parent().data('row')
		
		itemRow.drilldownOpen = !itemRow.drilldownOpen







	# ==== IP Details listeners =================================================================================
	@els.tableBody.on 'mouseover', '._ipDetails-trigger', (event)=>
		trigger$ = $(event.currentTarget)
		wrapper$ = trigger$.parent()
		content$ = trigger$.next()
		country$ = content$.next()
		ipAddress = wrapper$.data 'ip'
		isLoaded = trigger$.hasClass '_isReady'


		unless isLoaded			
			@options.ipDataFetcher(ipAddress).then (ipDetails)=>
				return unless ipDetails
				
				output = for label,value of ipDetails 
					markup.ipDetailsItem(@markupArgs {label,value})

				content$.html output.join('')
				wrapper$.addClass '_isReady'



	Promise.resolve()


