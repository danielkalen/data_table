DataTable::calcPageCount = (rows)->
	@pageCountReal = Math.ceil rows.length/@options.perPage
	@pageCount = if @pageCountReal > 5 then 5 else @pageCountReal





DataTable::calcPercentageString = (columnValue, columnName, row)->
	formula = @options.percentage[columnName]
	columnA = formula[0]
	columnB = formula[2]
	mathOperator = formula[1]

	percentageValue = switch mathOperator
		when '*' then row[columnA] * row[columnB]
		when '/' then row[columnA] / row[columnB]
		when '+' then row[columnA] + row[columnB]
		when '-' then row[columnA] - row[columnB]

	percentageValue = 0 if percentageValue is Infinity
	percent = convertToPercent(percentageValue)
	return "#{columnValue} (#{percent})"






DataTable::sortRows = (rows)-> switch
	when @options.sortBy is '+' then rows
	when @options.sortBy is '-' then rows?.slice().reverse()
	when @columns[@options.sortBy]
		rows.slice().sort (a,b)=> switch
			when a[@options.sortBy] > b[@options.sortBy] then -1
			when a[@options.sortBy] < b[@options.sortBy] then 1
			else 0

	else rows
	


