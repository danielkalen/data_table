DataTable::attachBindings = ()->
	SimplyBind.settings.trackArrayChildren = false
	## ==========================================================================
	## State
	## ========================================================================== 
	SimplyBind('noResults').of(@state)
		.to('className.isVisible').of(@els.noResultsMessage).transform (noResults)=> if noResults and not @state.loading then 'is_visible' else ''
		.and.to('className.noResults').of(@els.tableOuterwrap).transform (noResults)=> if noResults and not @state.loading then '_noResults' else ''
	
	SimplyBind('loading').of(@state)
		.to('className.isVisible').of(@els.loadingMessage).transform (loading)-> if loading then 'is_visible' else ''
		.and.to('className.loading').of(@els.tableOuterwrap).transform (loading)=> if loading then '_loading' else ''
		.and.to (loading)=>
			if loading
				@state.noResults = false
			else
				@state.noResults = !@visibleRows.length

	SimplyBind('error').of(@state)
		.to('textContent.errorMessage').of(@els.errorMessage)
		.and.to('className.isVisible').of(@els.errorMessage).transform (hasError)-> if hasError then 'is_visible' else ''
		.and.to('className.hasError').of(@els.tableOuterwrap).transform (hasError)-> if hasError then '_error' else ''
	

	if @options.hasMobile
		@windowWidth = window.innerWidth
		
		SimplyBind('event:resize').of(window)
			.to ()=> @windowWidth = window.innerWidth

		SimplyBind('windowWidth').of(@)
			.to('className.mobileVersion').of(@els.tableOuterwrap)
				.transform (windowWidth)=> if windowWidth <= @options.mobileWidth then '_mobileVersion' else ''





	## ==========================================================================
	## Column visibility
	## ========================================================================== 
	for l,column of @options.columns then do (column)=>
		SimplyBind('hidden').of(column)
			.to("innerHTML.#{column.slug}").of(@els.globalStyles)
				.transform (isHidden)=> if isHidden then "#{@tableID} .__#{column.slug} {display:none}" else ''




	## ==========================================================================
	## Rows array rendering/processing
	## ========================================================================== 
	SimplyBind('array:visibleRows').of(@)
		.to (rows, prevRows)=>
			if prevRows?.length
				for row in prevRows
					row.visible = false
			
			try
				for row in rows
					@processRow(row)
					row.visible = true
			catch err
				@state.error = err
			
			@state.noResults = !rows.length
		
		.and.to (rows)=>
			return if not @hasBreakdownBar
			for row in rows
				if row.breakdownBarTotal > largestBreakdownTotal or not largestBreakdownTotal?
					largestBreakdownTotal = row.breakdownBarTotal

			@largestBreakdownTotal = largestBreakdownTotal or 0

		.and.to('textContent.rowRange').of(@els.pageStatus)
			.transform (rows)=> "#{@availableRows.indexOf(rows[0])+1}-#{@availableRows.indexOf(rows.slice(-1)[0])+1}"


	SimplyBind('allRows').of(@).to (rows)=>
		@searchCriteria = ''
		@currentPage = 1
		@state.noResults = !rows.length
		if @sortBy is @options.sortBy
			@sortBy = ''
			@sortBy = @options.sortBy
		else
			@sortBy = ''



	SimplyBind('availableRows', {updateOnBind:false, updateEvenIfSame:true}).of(@)
		.to (rows)=> @calcPageCount(rows)
		.and.to('textContent.totalRows').of(@els.pageStatus).transform (rows)-> rows.length









	## ==========================================================================
	## Pagination
	## ========================================================================== 
	SimplyBind('pageCount').of(@)
		.to('innerHTML').of(@els.paginationItems) # Render pagination
			.transform (count)=>
				paginationItems = ''
				for value in [1..count]
					paginationItems += markup.paginationItem(@markupArgs {value}) unless value is 0

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
				targetColumn = @options.columns[@searchParam]

				if searchCriteria and (targetColumn or @allRows[0]?[@searchParam]?)
					rowsToMakeAvailable = @allRows.filter (row)=>
						rowValue = if targetColumn?.rawValueFormatter then targetColumn.rawValueFormatter(row[@searchParam]) else row[@searchParam]
						return rowValue?.toString().toLowerCase().includes searchCriteria.toLowerCase()
				
				@availableRows = rowsToMakeAvailable
				@currentPage = 1












	## ==========================================================================
	## Sorting
	## ========================================================================== 
	SimplyBind('sortBy', {updateEvenIfSame:true, updateOnBind:false}, true).of(@)
		.to (currentSort, prevSort)=> if currentSort or prevSort
			if currentSort is prevSort and prevSort
				@sortDirection *= -1
			else
				@sortDirection = -1

			targetColumn = if currentSort then currentSort else null
			@availableRows = @sortRows(@availableRows, targetColumn)
			@currentPage = 1

	
	if @els.tableHeading.children('._isSortable').length
		SimplyBind('sortBy', updateOnBind:true).of(@)
			.to('multi:className.currentSort').of(@els.tableHeading.children('._isSortable'))
				.transform (current, prev, el)-> if current is el.children[0].textContent then '_currentSort' else ''




	SimplyBind('sortDirection').of(@)
		.to('className.sortDirection').of(@els.table)
			.transform (sortDirection)-> if sortDirection is -1 then 'desc' else 'asc'





	Promise.resolve()

