DataTable::calcPageCount = (rows)->
	@pageCountReal = Math.ceil rows.length/@options.perPage
	@pageCount = if @pageCountReal > @options.pageCountMax then @options.pageCountMax else @pageCountReal





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
	


DataTable::setVisiblePage = (targetPage)->
	targetPage-- # Dec by 1 for array-index style
	slice =
		'start': targetPage*@options.perPage
		'end': (targetPage*@options.perPage)+@options.perPage
	
	rowsToReveal = @availableRows[slice.start ... slice.end]
	rowsToHide = @visibleRows.slice()

	row.visible = false for row in rowsToHide
	@visibleRows.length = 0
	@visibleRows.push.apply @visibleRows, rowsToReveal




DataTable::setPageIndicator = (targetPage)->
	targetPage = 1 if targetPage is '...'
	targetPage = if targetPage > @options.pageCountMax then @options.pageCountMax else targetPage-1 # 0-based index so we subtract 1
	pageItems$ = @els.pagination.find('._paginationItem').slice(1,-1)
	matchedPageEl$ = pageItems$.eq targetPage
	
	matchedPageEl$.addClass 'current'
	pageItems$.not(matchedPageEl$).removeClass 'current'	











