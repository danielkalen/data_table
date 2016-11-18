DataTable::processRow = (row)-> if row.processed then row else
	row.el = $ @generateRow(row)
	row.drilldownEls = row.el.children('._tableRowDrilldown').children()
	row.breakdownBarEl = if @hasBreakdownBar then row.el.children('.is_breakdown_bar').children().children()
	row.visible = false
	row.drilldownOpen = false

	row.el.data 'row', row

	SimplyBind('visible', updateEvenIfSame:true).of(row)
		.to (isVisible, prevValue)=>
			if not isVisible 
				row.el.detach()
			else
				row.el.appendTo @els.tableBody

				if @hasBreakdownBar and not row.updatedBreakdownWidth and isVisible isnt prevValue
					row.breakdownBarWidth = helpers.getBreakdownBarWidth(row, @largestBreakdownTotal)


	SimplyBind('drilldownOpen').of(row)
		.to('className.drilldownOpen').of(row.el)
			.transform (drilldownOpen)-> if drilldownOpen then 'drilldown_is_open' else ''
				

	if @hasBreakdownBar and row.breakdownBarEl.length
		SimplyBind('largestBreakdownTotal').of(@)
			.to('updatedBreakdownWidth').of(row)
				.transform ()-> if row.visible then true else false
			.and.to('breakdownBarWidth').of(row)
				.transform ()=> helpers.getBreakdownBarWidth(row, @largestBreakdownTotal)

				.chainTo('width').of(row.breakdownBarEl[0].style)
					.transform (width)-> width+'%'

				.and.to ()=>
					for drilldownEl,index in row.drilldownEls
						width = helpers.getBreakdownBarWidth(row.drilldown[index], row.drilldown.largestBreakdownTotal)
						$(drilldownEl).children('.is_breakdown_bar').children().children()[0]?.style.width = width+'%'
					return
					
			.conditionAll ()-> row.visible

	row.processed = true
	return row





DataTable::unprocessRow = (row)-> if row.processed
	SimplyBind.unBindAll(row, true)
	
	if @hasBreakdownBar and row.breakdownBarEl[0]
		SimplyBind.unBindAll(row.breakdownBarEl[0].style)

	row.el.remove()
	delete row.el
	delete row.drilldownEls
	delete row.visible
	delete row.breakdownBarEl
	delete row.processed






DataTable::generateRow = (row)->
	output = @generateRowMarkup(row)
	
	if row.drilldown
		@els.table.addClass('isExpandingTable')

		if @hasBreakdownBar
			row.drilldown.largestBreakdownTotal = Math.max.apply null, row.drilldown.map (subRow)-> subRow.breakdownBarTotal

	return output






DataTable::generateRowMarkup = (row, parentRow)->
	isSub = !!parentRow
	
	markup.row
		'rowID': if isSub then parentRow[@options.uniqueID] else row[@options.uniqueID]
		'drilldown': if isSub then '' else if row.drilldown then do ()=>
			drilldownMarkups = ''
			drilldownMarkups += @generateRowMarkup(drilldownRow, row) for drilldownRow in row.drilldown
			return drilldownMarkups
		
		'cells': do ()=>
			rowCells = ''
			
			for columnName,column of @options.columns
				cellValue = row[columnName]

				if @options.percentage[columnName]
					cellValue = @calcPercentageString(cellValue, columnName, row)


				rowCells += markup.rowCell
					'label': if typeof cellValue is 'string' then cellValue else ''
					'slug': column.slug
					'extraClasses': helpers.genCellClassname(column)
					'style': helpers.genCellStyle(column)
					'value': do ()=> switch
						when column.type is 'fields' 		then @generateInlineFields(cellValue)
						when column.type is 'ipDetails' 	then @generateIpDetails(cellValue)
						when column.type is 'breakdownBar' 	then @generateBreakdownBar(cellValue, row)
						when column.type is 'button' 		then @generateButton((column.action or cellValue), (column.buttonIcon or column.icon))
						when column.type is 'actions' 		then @generateActions(column)
						when column.isLink 					then "<a href='#{cellValue}' target='_blank'>#{cellValue}</a>"
						else (if column.formatter then column.formatter(cellValue, row) else cellValue)
					
			return rowCells







DataTable::generateHeadingColumns = ()->
	@options.columns = helpers.normalizeColumns(@options.columns)
	@hasBreakdownBar = true if column.type is 'breakdownBar' for label,column of @options.columns

	Object.keys(@options.columns)
		.map (label)=>
			column = @options.columns[label]
			markup.headingCell
				'slug': column.slug
				'icon': column.icon
				'label': column.label
				'style': helpers.genHeaderCellStyle(column)
				'extraClasses': helpers.genCellClassname(column)
		.join('')













