DataTable::generateColumns = ()->
	@options.columns
		.map (column)->
			markup.table_head_cell
				.replace '{{isSortable}}', if column.sorting then 'is_sortable' else ''
				.replace /\{\{slug\}\}/g, column.label.toLowerCase().replace /\W/g, '_'
				.replace '{{icon}}', column.icon or ''
				.replace '{{label}}', column.label
		.join('')





DataTable::generateBodyRows = (rows)->
	rowItems = ''

	genRow = (row, parentRow, isSub)=>		
		rowItems += markup.table_body_row
			.replace '{{isSub}}', if isSub then 'is_sub is_hidden' else ''
			.replace /\{\{itemID\}\}/g, if isSub then parentRow.ID else row.ID
			.replace '{{cells}}', ()=>
				rowCells = ''
				
				for column,index in @options.columns
					cellValue = row[column.label] or ''

					rowCells += markup.table_body_row_cell
						.replace /\{\{slug\}\}/g, column.label.toLowerCase().replace /\W/g, '_'
						.replace '{{value}}', ()=>
							switch column.type
								when 'fields' 		then @generateInlineFields(cellValue)
								when 'actions' 		then @generateActions()
								when 'ip-details' 	then @generateIpDetails(cellValue)
								else @options.formatters?[column.label]?(cellValue) or cellValue

				return rowCells




	for row in rows
		mainRow = row.main or row
		subRows = row.sub
		
		if subRows
			genRow(mainRow)
			genRow(subRow, mainRow, true) for subRow in subRows
			@els.table.addClass('is_expanding_table')
		else
			genRow(mainRow)
	

	return rowItems






DataTable::generateInlineFields = (dataFields)->
	markup.table_body_row_cell_fields.replace '{{fields}}', ()->
		return '' unless typeof dataFields is 'object'
		
		output = for key,value of dataFields
			markup.table_body_row_cell_fields_item
				.replace '{{label}}', key
				.replace '{{value}}', value


		return output.join('')





DataTable::generateActions = ()->
	markup.table_body_row_cell_actions.replace '{{actions}}', ()=>
		return '' unless @tableOptions.actions
		
		output = for action in @tableOptions.actions
			markup.table_body_row_cell_actions_item
				.replace '{{action}}', action.action
				.replace '{{label}}', action.label
				.replace '{{icon}}', action.icon
				.replace '{{color}}', action.color or 'grey'


		return output.join('')







DataTable::generateIpDetails = (ipAddress)->
	markup.table_body_row_cell_ip_details.replace '{{ipAddress}}', ipAddress # data attribute














