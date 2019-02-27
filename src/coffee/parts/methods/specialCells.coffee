import * as markup from '../markup'

# export generateBreakdownBar = (breakdown, rowObj, columnEntity)->
# 	breakdownKeys = @legend or Object.keys(breakdown)
# 	rowObj.breakdownBarTotal = total = @getBreakdownTotal(breakdown, breakdownKeys)
	
# 	return 'N/A' unless total
	
# 	markup.breakdownBar @markupArgs
# 		'total': total
# 		'totalFormatted': if columnEntity.valueFormat then columnEntity.valueFormat(total) else total
# 		'bars': do ()->
# 			bars = ''
# 			for key in breakdownKeys
# 				value = breakdown[key]
# 				bars += markup.block_table_body_row_cell_breakdown_bar.replace '{{width}}', (value/total)*100
# 			return bars

# 		'hoverBox': do ()->
# 			markup.block_table_body_row_cell_breakdown_hoverbox
# 				.replace '{{rows}}', ()->
# 					rows = ''
					
# 					breakdownKeys.forEach (key, index)->
# 						rows += markup.block_table_body_row_cell_breakdown_hoverbox_row
# 							.replace '{{color}}', customColors(index)
# 							.replace '{{key}}', key
# 							.replace '{{value}}', if columnEntity.valueFormat then columnEntity.valueFormat(breakdown[key]) else breakdown[key]

# 					return rows





export generateInlineFields = (dataFields)->
	markup.fields @markupArgs 'fields': do ()=>
		return '' unless typeof dataFields is 'object'
		
		output = for label,value of dataFields
			markup.fieldsItem @markupArgs {label,value}


		return output.join('')






export generateButton = (action, icon, isMulti)->
	markup.button(@markupArgs {action, icon, isMulti})





export generateActions = (column)->
	column.actions ?= 'multiActions'
	buttonMarkup = @generateButton(column.actions, (column.buttonIcon or column.icon), true)
	actionsMarkup = markup.actions @markupArgs 'actions': do ()=>
		return '' unless @options.actions
		
		output = for action in @options.actions
			markup.actionsItem(@markupArgs action)

		return output.join('')

	return buttonMarkup+actionsMarkup






export generateIpDetails = (ipAddress, row, column)->
	markup.ipDetails @markupArgs {ipAddress, extra:column.extraMarkup?(ipAddress, row)} # data attribute





















