DataTable::attachEvents = ()->
	# ==== Table head sorting listeners =================================================================================
	@els.tableHeading.on 'click', '._isSortable', (event)=> @sortBy event.currentTarget.dataset.slug





	# ==== Pagination =================================================================================
	@els.pagination.on 'click', '._paginationItem', (event)=>
		$this = $(event.currentTarget)
		isBack = $this.hasClass('back')
		isNext = $this.hasClass('next')
		isExtra = $this.hasClass('extra_indicator')

		if isBack
			@currentPage-- unless @currentPage is 1
		
		else if isNext
			@currentPage++ unless @currentPage is @pageCountReal
		
		# else if not isExtra and not isWrapper
		else if not isExtra
			pageNumber = parseFloat $this.children().html()
			@currentPage = pageNumber



	# ==== Action button event listeners =================================================================================
	@els.tableBody.on 'click', '._actionButton', (event)=>
		button$ = $(event.currentTarget)
		if button$.hasClass('_isMulti')
			subActions$ = button$.next()
			subActions$.toggleClass('is_visible')
		
		else
			itemRow$ = button$.closest('._tableRow')
			action = button$.data('action')
			itemID = itemRow$.data('row-id')
			itemIndex = itemRow$.data('index')
			dataItem = if itemID then @allRows.find (row)=> helpers.compareValues(row[@options.uniqueID], itemID)
			dataItem ?= itemID

			@els.table.trigger "action.#{action}", dataItem






	# ==== Row expansion listeners =================================================================================
	@els.tableBody.on 'click', '._expandButton', (event)=>
		button$ = $(event.currentTarget)
		row$ = button$.closest('tr')
		rowID = row$.data 'row-id'

		row$.siblings('.is_sub')
			.filter ()-> @dataset.rowId is rowID
			.toggleClass 'is_hidden'

		row$.toggleClass 'expanded'







	# ==== IP Details listeners =================================================================================
	@els.tableBody.on 'mouseover', '._ipDetails-trigger', (event)=>
		trigger$ = $(event.currentTarget)
		wrapper$ = trigger$.parent()
		content$ = trigger$.next()
		country$ = content$.next()
		ipAddress = wrapper$.data 'address'
		isLoaded = trigger$.hasClass '_isReady'


		unless isLoaded			
			@options.ipDataFetcher(ipAddress).then (ipDetails)->
				return unless ipDetails
				
				output = for label,value of ipDetails 
					markup.ipDetailsItem({label,value})

				content$.html output.join('')
				wrapper$.addClass '_isReady'



	Promise.resolve()


