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







