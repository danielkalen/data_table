DataTable::attachBindings = ()->
	SimplyBind('loading').of(@state)
		.to('className.isVisible').of(@els.loadingMessage).transform (loading)-> if loading then 'is_visible' else ''
	
	SimplyBind('noResults').of(@state)
		.to('className.isVisible').of(@els.noResultsMessage).transform (noResults)-> if noResults then 'is_visible' else ''


	SimplyBind('allRows').of(@)
		.to (rows)=> # Calculate pageCount
			@pageCount = Math.ceil rows.length/@options.perPage
			@pageCount = 15 if @pageCount > 15
			@currentPage = 1

		.and.to('prop:innerHTML').of(@els.tableBody) # Render body rows
			.transform (rows)=> @generateBodyRows(rows)


		.and.to ()=>
			SimplyBind.setOption('updateEvenIfSame', true)
			@currentPage = 1
			SimplyBind.setOption('updateEvenIfSame', false)




	SimplyBind('pageCount').of(@)
		.to('prop:innerHTML.pages').of(@els.pagination) # Render pagination
			.transform (count)->
				paginationItems = ''
				for value in [1..count]
					paginationItems += markup.paginationItem({value}) unless value is 0

				return paginationItems

	
		.and.to('className.isVisible').of(@els.pagination)
			.transform (count)-> if count > 1 then 'is_visible' else ''




	SimplyBind('currentPage').of(@)
		.to (currentPage)=>
			$rows = @els.tableBody.children()
			$rowsToReveal = $rows.slice((currentPage-1) * @options.perPage) .slice(0, @options.perPage)
			$rowsToHide = $rows.not('.hidden')

			if $rowsToHide.length is $rows.length
				$rowsToHide = $rows.slice(@options.perPage)

			$rowsToHide.addClass 'hidden'
			$rowsToReveal.removeClass 'hidden'



	Promise.resolve()

