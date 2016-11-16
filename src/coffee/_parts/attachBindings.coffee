DataTable::attachBindings = ()->
	## ==========================================================================
	## State
	## ========================================================================== 
	SimplyBind('loading').of(@state)
		.to('className.isVisible').of(@els.loadingMessage).transform (loading)-> if loading then 'is_visible' else ''
	
	SimplyBind('noResults').of(@state)
		.to('className.isVisible').of(@els.noResultsMessage).transform (noResults)-> if noResults then 'is_visible' else ''
	


	## ==========================================================================
	## Rows array rendering/processing
	## ========================================================================== 
	SimplyBind(@visibleRows, trackArrayChildren:false)
		.to (rows, prevRows)=>
			if prevRows?.length
				for row in prevRows
					row.visible = false
			
			for row in rows
				@processRow(row)
				row.visible = true
			
			@state.noResults = rows.length is 0
		
		.and.to (rows)=> if @hasBreakdownBar
			for row in rows
				if row.breakdownBarTotal > largestBreakdownTotal or not largestBreakdownTotal?
					largestBreakdownTotal = row.breakdownBarTotal

			@largestBreakdownTotal = largestBreakdownTotal or 0


	SimplyBind('allRows').of(@)
		.to (rows)=>
			@searchCriteria = ''
			@currentPage = 1

	SimplyBind('availableRows', {updateOnBind:false, updateEvenIfSame:true}).of(@)
		.to (rows)=> @calcPageCount(rows)


	## ==========================================================================
	## Pagination
	## ========================================================================== 
	SimplyBind('pageCount').of(@)
		.to('innerHTML.pages').of(@els.pagination) # Render pagination
			.transform (count)->
				paginationItems = ''
				for value in [1..count]
					paginationItems += markup.paginationItem({value}) unless value is 0

				return paginationItems

		.and.to('className.hasExtra').of(@els.pagination).transform ()=> if @pageCountReal > 5 then 'has_extra' else ''
		.and.to('className.isVisible').of(@els.pagination).transform (count)-> if count > 1 then 'is_visible' else ''
	

	SimplyBind('pageCountReal').of(@)
		.to('innerHTML').of(@els.paginationExtraSelect)
			.transform (count)=>
				options = '<option>...</option>'
				options += "<option>#{index}</option>" for index in [6..count]
				return options



	# ==== Extra Indicator/Pages =================================================================================
	SimplyBind('value', {'updateOnBind':false}).of(@els.paginationExtraSelect)
		.to('innerHTML').of(@els.paginationExtraText)
		.and.to('currentPage').of(@)
			.transform (newValue)-> if newValue is '...' then 1 else parseFloat(newValue)




	# ==== Current Page =================================================================================
	SimplyBind('currentPage', updateEvenIfSame:true).of(@)
		.to('value').of(@els.paginationExtraSelect)
			.transform (currentPage)=> if currentPage > @pageCountMax then currentPage else '...'
		
		# ==== Page visibility =================================================================================
		.and.to (currentPage)=>
			currentPage-- # Dec by 1 for array-index style
			slice =
				'start': currentPage*@options.perPage
				'end': (currentPage*@options.perPage)+@options.perPage
			
			rowsToReveal = @availableRows[slice.start ... slice.end]
			rowsToHide = @visibleRows.slice()

			row.visible = false for row in rowsToHide
			@visibleRows.length = 0
			@visibleRows.push.apply @visibleRows, rowsToReveal
			return
		
		
		# ==== Pagination highlight =================================================================================
		.and.to (currentPage)=>
			currentPage = 1 if currentPage is '...'
			currentPage = if currentPage > @pageCountMax then @pageCountMax else currentPage-1 # 0-based index so we subtract 1
			pageItems$ = @els.pagination.find('._paginationItem').slice(1,-1) # Slice out the first & last buttons (Next/Prev buttons)
			matchedPageEl$ = pageItems$.eq currentPage
			
			matchedPageEl$.addClass 'current'
			pageItems$.not(matchedPageEl$).removeClass 'current'	





	## ==========================================================================
	## Search Field
	## ========================================================================== 
	
	# ==== Search Field value/markup =================================================================================
	if @options.search?.length
		@searchParam = @options.search[0]

		SimplyBind('value').of(@els.searchField.children('select'))
			.to('searchParam').of(@)
				.pipe('attr:placeholder').of(@els.searchField.children('input'))
					.transform (option)-> "Search by #{option}"



	# ==== Table results filter & avaiable rows =================================================================================
	SimplyBind('value').of(@els.searchField.children('input')) # Search/Filter
		.to('searchCriteria', updateEvenIfSame:true).of(@).bothWays()
			.chainTo (searchCriteria)=>
				rowsToMakeAvailable = @allRows

				if searchCriteria and @columns[@searchParam]
					rowsToMakeAvailable = @allRows.filter (row)=> row[@searchParam]?.toString().toLowerCase().includes searchCriteria.toLowerCase()
				
				@availableRows = rowsToMakeAvailable
				@currentPage = 1


	SimplyBind('searchParam').of(@)
		.to('textContent.searchTerm').of(@els.noResultsMessage)
		.and.to('textContent.searchTermSmall').of(@els.noResultsMessage)
			.transform (searchTerm)-> searchTerm?.toLowerCase() or searchTerm



	Promise.resolve()

