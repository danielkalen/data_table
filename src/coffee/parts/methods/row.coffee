import SimplyBind from '@danielkalen/simplybind'
import * as markup from '../markup'
import {getBreakdownBarWidth, genCellClassname, genCellStyle} from '../helpers'
import $ from 'jquery'

export processRow = (row)-> if row.processed then row else
	@generateRow(row)

	SimplyBind('visible', updateEvenIfSame:true).of(row)
		.to (isVisible, prevValue)=>
			if not isVisible 
				row.el.detach()
			else
				row.el.appendTo @els.tableBody

				if @hasBreakdownBar and not row.updatedBreakdownWidth and isVisible isnt prevValue
					row.breakdownBarWidth = getBreakdownBarWidth(row, @largestBreakdownTotal)
				

	if @hasBreakdownBar and row.breakdownBarEl?.length
		SimplyBind('largestBreakdownTotal').of(@)
			.to('updatedBreakdownWidth').of(row)
				.transform ()-> if row.visible then true else false
			.and.to('breakdownBarWidth').of(row)
				.transform ()=> getBreakdownBarWidth(row, @largestBreakdownTotal)

				.chainTo('width').of(row.breakdownBarEl[0].style)
					.transform (width)-> width+'%'

				.and.to ()=>
					for drilldownEl,index in row.drilldownEls
						width = getBreakdownBarWidth(row.drilldown[index], row.drilldown.largestBreakdownTotal)
						$(drilldownEl).children('.is_breakdown_bar').children().children()[0]?.style.width = width+'%'
					return
				.condition ()-> row.drilldown
					
			.conditionAll ()-> row.visible

	row.processed = true
	return row





export unprocessRow = (row)-> if row.processed
	SimplyBind.unBindAll(row, true)
	
	if @hasBreakdownBar and row.breakdownBarEl[0]
		SimplyBind.unBindAll(row.breakdownBarEl[0].style)

	row.el.remove()
	delete row.el
	delete row.drilldownEls
	delete row.visible
	delete row.breakdownBarEl
	delete row.processed



export reRenderRow = (row)->
	@generateRow(row)



export generateRow = (row)->
	prevRowEl = row.el
	newRowEl = row.el = $(@generateRowMarkup(row)).data('row', row)
	prevRowEl.replaceWith(newRowEl) if prevRowEl
	
	row.expandButton = row.el.children().first() if row.drilldown
	row.drilldownEls = row.el.children('._tableRowDrilldown').children() if row.drilldown
	row.breakdownBarEl = row.el.children('.isBreakdownBar').children().children() if @hasBreakdownBar
	row.visible = false unless prevRowEl
	
	if row.drilldown
		if @hasBreakdownBar
			row.drilldown.largestBreakdownTotal = Math.max row.drilldown.map((subRow)-> subRow.breakdownBarTotal)...

		SimplyBind('drilldownOpen').of(row)
			.to('className.drilldownState').of(row.el)
				.transform (drilldownOpen)-> if drilldownOpen then 'hasDrilldown drilldownIsOpen' else 'hasDrilldown'

		SimplyBind('visible').of(row)
			.once.to ()->
				SimplyBind ()->
					if not row.drilldownOpen then setTimeout ()->
						rowHeight = row.el.height()
						buttonHeight = row.expandButton.height()
						row.expandButton[0].style.top = "#{rowHeight/2 - buttonHeight/2}px"

				.updateOn('event:resize', throttle:300).of(window)
			.condition (visible)-> visible

	return row





export generateRowMarkup = (row, parentRow)->
	isSub = !!parentRow
	
	markup.row @markupArgs
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


				rowCells += markup.rowCell @markupArgs
					'label': if typeof cellValue is 'string' then cellValue else ''
					'column': columnName
					'slug': column.slug
					'extraClasses': genCellClassname(column)
					'style': genCellStyle(column)
					'value': do ()=> switch
						when column.type is 'fields' 		then @generateInlineFields(cellValue, row, column)
						when column.type is 'ipDetails' 	then @generateIpDetails(cellValue, row, column)
						when column.type is 'breakdownBar' 	then @generateBreakdownBar(cellValue, row, column)
						when column.type is 'button' 		then @generateButton((column.action or cellValue), (column.buttonIcon or column.icon))
						when column.type is 'actions' 		then @generateActions(column, row, column)
						when column.isLink 					then "<a href='#{cellValue}' target='_blank'>#{cellValue}</a>"
						else (if column.formatter then column.formatter(cellValue, row, column) else cellValue)
					
			return rowCells





















