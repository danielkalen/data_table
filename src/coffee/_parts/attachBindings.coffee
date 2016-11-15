DataTable::attachBindings = ()->
	SimplyBind.setOption 'updateOnBind', true


	SimplyBind('data').of(@)
		.to (rows)=> # Calculate pageCount
			@pageCount = Math.ceil rows.length/@tableOptions.perPage
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




	SimplyBind('currentPage').of(@)
		.to (currentPage)=>
			$rows = @els.tableBody.children()
			$rowsToReveal = $rows.slice((currentPage-1) * @tableOptions.perPage) .slice(0, @tableOptions.perPage)
			$rowsToHide = $rows.not('.hidden')

			if $rowsToHide.length is $rows.length
				$rowsToHide = $rows.slice(@tableOptions.perPage)

			$rowsToHide.addClass 'hidden'
			$rowsToReveal.removeClass 'hidden'



	SimplyBind.setOption 'updateOnBind', false
	Promise.resolve()

