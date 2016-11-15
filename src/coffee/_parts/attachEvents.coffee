DataTable::attachEvents = ()->
	# ==== Table head sorting listeners =================================================================================
	@els.tableHeading.on 'click', 'th.is_sortable', (event)=> @sortBy event.currentTarget.dataset.slug




	# ==== Action button event listeners =================================================================================
	@els.tableBody.on 'click', '.data_table-actions-button', (event)=>
		$button = $(event.currentTarget)
		$itemRow = $button.closest('tr')
		action = $button.data('action')
		itemID = $itemRow.data('id')
		itemIndex = $itemRow.index()

		@els.table.trigger "action.#{action}", {itemID, 'data':@allRows[itemIndex]}






	# ==== Row expansion listeners =================================================================================
	@els.tableBody.on 'click', '.data_table-body-row-cell-expand', (event)=>
		$button = $(event.currentTarget)
		$row = $button.closest('tr')
		rowID = $row.data 'row-id'

		$row.siblings('.is_sub')
			.filter ()-> @dataset.rowId is rowID
			.toggleClass 'is_hidden'

		$row.toggleClass 'expanded'







	# ==== Pagination listeners =================================================================================
	SimplyBind('currentPage').of(@) # Active element
		.to ()=>
			matchedPageEl$ = @els.pagination.children().slice(1,-1).eq @currentPage-1 # 0-based index so we subtract 1
			matchedPageEl$.addClass('current').siblings().removeClass('current')
		

	@els.pagination.on 'click', '.data_table-pagination-item', (event)=> # Setting currentPage on click
		$this = $(event.currentTarget)
		isBack = $this.hasClass('back')
		isNext = $this.hasClass('next')

		if isBack
			@currentPage-- unless @currentPage is 1
		
		else if isNext
			@currentPage++ unless @currentPage is @pageCount
		
		else
			pageNumber = parseFloat $this.children().html()
			@currentPage = pageNumber







	# ==== IP Details listeners =================================================================================
	@els.tableBody.on 'mouseover', '._ipDetails-trigger', (event)=>
		$trigger = $(event.currentTarget)
		$content = $trigger.children()
		$country = $trigger.next()
		ipAddress = $trigger.parent().data 'ip'
		isLoaded = $trigger.data 'isLoaded'


		unless isLoaded
			$trigger.data 'isLoaded', !isLoaded
			
			@options.ipDataFetcher(ipAddress).then (ipDetails)->
				return unless ipDetails
				
				output = for label,value of ipDetails 
					markup.ipDetailsItem({label,value})

				$content.html output.join('')
				$trigger.parent().addClass 'ready'



	Promise.resolve()
