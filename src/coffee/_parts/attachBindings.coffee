DataTable::attachBindings = ()->
	## ==========================================================================
	## State
	## ========================================================================== 
	SimplyBind('noResults').of(@state)
		.to('className.isVisible').of(@els.noResultsMessage).transform (noResults)=> if noResults and not @state.loading then 'is_visible' else ''
	
	SimplyBind('loading').of(@state)
		.to('className.isVisible').of(@els.loadingMessage).transform (loading)-> if loading then 'is_visible' else ''
		.and.to (loading)=>
			if loading
				@state.noResults = false
			else
				@state.noResults = !@visibleRows.length
	
	






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
			
			@state.noResults = !rows.length
		
		.and.to (rows)=> if @hasBreakdownBar
			for row in rows
				if row.breakdownBarTotal > largestBreakdownTotal or not largestBreakdownTotal?
					largestBreakdownTotal = row.breakdownBarTotal

			@largestBreakdownTotal = largestBreakdownTotal or 0


	SimplyBind('allRows').of(@)
		.transformSelf (allRows)=> if @options.sortBy then @sortRows(allRows) else allRows
		.to (rows)=>
			@searchCriteria = ''
			@currentPage = 1
			@state.noResults = !rows.length

	SimplyBind('availableRows', {updateOnBind:false, updateEvenIfSame:true}).of(@)
		.to (rows)=> @calcPageCount(rows)









	## ==========================================================================
	## Pagination
	## ========================================================================== 
	SimplyBind('pageCount').of(@)
		.to('innerHTML').of(@els.paginationItems) # Render pagination
			.transform (count)->
				paginationItems = ''
				for value in [1..count]
					paginationItems += markup.paginationItem({value}) unless value is 0

				return paginationItems

		.and.to('className.isVisible').of(@els.pagination).transform (count)-> if count > 1 then 'is_visible' else ''
	

	SimplyBind('pageCountReal').of(@)
		.to('innerHTML').of(@els.paginationExtraSelect)
			.transform (realCount)=>
				if realCount <= @options.pageCountMax then ''
				else
					options = '<option>...</option>'
					options += "<option>#{index}</option>" for index in [(@options.pageCountMax+1)..realCount]
					return options
		
		.and.to('className.hasExtra').of(@els.pagination).transform (realCount)=> if realCount > @options.pageCountMax then 'has_extra' else ''



	# ==== Extra Indicator/Pages =================================================================================
	SimplyBind('value', updateOnBind:false).of(@els.paginationExtraSelect)
		.to('innerHTML').of(@els.paginationExtraText)
		.and.to('currentPage').of(@)




	# ==== Current Page =================================================================================
	SimplyBind('currentPage', updateEvenIfSame:true).of(@)
		.transformSelf (currentPage)=>
			currentPage = if currentPage is '...' then 1 else parseFloat(currentPage)
			return if currentPage > @pageCountReal then @pageCountReal else currentPage
		
		.to('value').of(@els.paginationExtraSelect)
			.transform (currentPage)=> if currentPage > @options.pageCountMax then currentPage else '...'
		
		.and.to (currentPage)=>
			@setVisiblePage(currentPage)
			@setPageIndicator(currentPage)











	## ==========================================================================
	## Search Field
	## ========================================================================== 
	
	# ==== Search Field value/markup =================================================================================
	if @options.search.length
		@searchParam = @options.search[0]

		SimplyBind('search').of(@options)
			.to('innerHTML').of(@els.searchParam)
				.transform (options)-> options.map((option)->"<option>#{option}</option>").join('')

		SimplyBind('value').of(@els.searchParam)
			.to('searchParam').of(@)
				.pipe('attr:placeholder').of(@els.searchCriteria)
					.transform (option)-> "Search by #{option}"



	# ==== Table results filter & avaiable rows =================================================================================
	SimplyBind('value').of(@els.searchCriteria) # Search/Filter
		.to('searchCriteria', updateEvenIfSame:true).of(@).bothWays()
			.chainTo (searchCriteria)=>
				rowsToMakeAvailable = @allRows

				if searchCriteria and (@options.columns[@searchParam] or @allRows[0]?[@searchParam]?)
					rowsToMakeAvailable = @allRows.filter (row)=> row[@searchParam]?.toString().toLowerCase().includes searchCriteria.toLowerCase()
				
				@availableRows = rowsToMakeAvailable
				@currentPage = 1


	SimplyBind('searchParam').of(@)
		.transformSelf (searchParam)-> if searchParam then searchParam else 'Item'
		.to('textContent.searchTerm').of(@els.noResultsMessage)
		.and.to('textContent.searchTermSmall').of(@els.noResultsMessage)
			.transform (searchTerm)-> searchTerm?.toLowerCase() or searchTerm



	Promise.resolve()

