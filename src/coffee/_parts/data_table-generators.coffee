DataTable::generateColumns = ()->
	@options.columns
		.map (column)->
			markup.table_head_cell
				'isSortable': column.sorting?
				'slug': column.label.toLowerCase().replace /\W/g, '_'
				'icon': column.icon or ''
				'label': column.label
		.join('')





DataTable::generateBodyRows = (rows)->
	rowItems = ''

	genRow = (row, parentRow, isSub)=>		
		rowItems += markup.table_body_row
			'isSub': isSub
			'itemID': if isSub then parentRow.ID else row.ID
			'cells': do ()=>
				rowCells = ''
				
				for column,index in @options.columns
					cellValue = row[column.label] or ''

					rowCells += markup.table_body_row_cell
						'slug': column.label.toLowerCase().replace /\W/g, '_'
						'value': do ()=>
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
	markup.table_body_row_cell_fields 'fields': do ()->
		return '' unless typeof dataFields is 'object'
		
		output = for label,value of dataFields
			markup.table_body_row_cell_fields_item {label,value}


		return output.join('')





DataTable::generateActions = ()->
	markup.table_body_row_cell_actions 'actions': do ()=>
		return '' unless @tableOptions.actions
		
		output = for action in @tableOptions.actions
			markup.table_body_row_cell_actions_item(action)


		return output.join('')







DataTable::generateIpDetails = (ipAddress)->
	markup.table_body_row_cell_ip_details {ipAddress} # data attribute














