DataTable::generateColumns = ()->
	@options.columns
		.map (column)->
			markup.headingCell
				# 'isSortable': column.sorting?
				# 'extraClasses': column.notes
				'slug': column.label.toLowerCase().replace /\W/g, '_'
				'icon': column.icon or ''
				'label': column.label
		.join('')





DataTable::generateBodyRows = (rows)->
	rowItems = ''

	genRow = (row, parentRow, isSub)=>		
		rowItems += markup.row
			# 'isSub': isSub
			'rowID': if isSub then parentRow.ID else row.ID
			'cells': do ()=>
				rowCells = ''
				
				for column,index in @options.columns
					cellValue = row[column.label] or ''

					rowCells += markup.rowCell
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
			@els.table.addClass('isExpandingTable')
		else
			genRow(mainRow)
	

	return rowItems






DataTable::generateInlineFields = (dataFields)->
	markup.fields 'fields': do ()->
		return '' unless typeof dataFields is 'object'
		
		output = for label,value of dataFields
			markup.fieldsItem {label,value}


		return output.join('')





DataTable::generateActions = ()->
	markup.actions 'actions': do ()=>
		return '' unless @options.actions
		
		output = for action in @options.actions
			markup.actionsItem(action)


		return output.join('')







DataTable::generateIpDetails = (ipAddress)->
	markup.ipDetails {ipAddress} # data attribute














