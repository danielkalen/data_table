helpers = {}


helpers.normalizeColumns = (columns)->
	if not Array.isArray(columns)
		output = columns
	else
		output = {}
		if typeof columns[0] is 'string'
			output[label] = {label} for label in columns
		
		else columns[0]?.label
			output[column.label] = column for column in columns


	for label,column of output
		column.label ?= label
		column.slug ?= column.label.toLowerCase().replace /\W/g, '_'
		column.type ?= 'text'

	return output 




helpers.genHeaderCellClassname = (column)->
	classString = ''
	
	if column.sortable
		classString += ' _isSortable'
	
	if column.noLabel
		classString += ' _noLabel'
	
	if column.isLink
		classString += ' _isLink'
	
	if column.color
		classString += ' _hasColor'
	
	if column.type is 'button'
		classString += ' _isButton'
	
	if column.type is 'breakdownBar'
		classString += ' _isBreakdownBar'
	
	if column.type is 'ipDetails'
		classString += ' _isIpDetails'
	
	if column.type is 'fields'
		classString += ' _isFields'

	return classString







