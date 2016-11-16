helpers = {}


helpers.normalizeColumns = (columns)->
	if not Array.isArray(columns)
		output = columns
	else
		output = {}
		if typeof columns[0] is 'string'
			output[label] = {label} for label in columns
		
		else if columns[0]?.label
			output[column.label] = column for column in columns


	for label,column of output
		column.label ?= label
		column.slug ?= column.label.toLowerCase().replace /\W/g, '_'
		column.type ?= 'text'

	return output 



helpers.genHeaderCellStyle = (column)->
	styleString = ''

	if column.width
		styleString += "max-width: #{column.width};"

	return if styleString then "style='#{styleString}'" else ''



helpers.genCellStyle = (column)->
	styleString = ''

	if column.width
		styleString += "max-width: #{column.width};"

	if column.color
		color = @colorMapping(column.color, column.colorType)
		styleString += "style: #{column.style};"

	return if styleString then "style='#{styleString}'" else ''




helpers.genCellClassname = (column)->
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







helpers.colorMapping = (value, colorType='name')-> switch colorType
	when 'browser' then switch
		when value.includes 'Firefox' then @colorMapping('orange')
		when value.includes 'Chrome' then @colorMapping('green')
		when value.includes 'Safari' then @colorMapping('blue')
		when value.includes 'Mobile Safari' then @colorMapping('blue')
		when value.includes 'IE' then @colorMapping('lightblue')
		when value.includes 'Edge' then @colorMapping('lightblue')
		when value.includes 'Opera' then @colorMapping('red')
		when value.includes 'Android' then @colorMapping('lightgreen')
		else 'unknown'
	
	
	when 'platform' then switch value
		when 'Mac OS X' then @colorMapping('black')
		when 'Windows' then @colorMapping('lightblue')
		when 'Windows Phone' then @colorMapping('purple')
		when 'Linux' then @colorMapping('darkyellow')
		when 'iOS' then @colorMapping('black')
		when 'Android' then @colorMapping("lightgreen")
		else 'unknown'
	
	when 'satisfaction' then switch value
		when 'Excellent' then @colorMapping('green')
		when 'Normal' then @colorMapping('yellow')
		when 'Poor' then @colorMapping('red')
		else 'unknown'

	
	when 'name' then switch value
		when 'orange' then '#ee6f0e'
		when 'green' then '#00ad09'
		when 'blue' then '#4788f3'
		when 'yellow' then '#eab71e'
		when 'red' then '#cc4820'
		when 'black' then '#181818'
		when 'purple' then '#a020ba'
		when 'lightblue' then '#0cb3ee'
		when 'lightgreen' then '#78c257'
		when 'darkyellow' then '#e8ac01'

	else value














