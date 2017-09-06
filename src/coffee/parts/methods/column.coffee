DataTable::generateHeadingColumns = ()->
	@options.columns = helpers.normalizeColumns(@options.columns)
	@hasBreakdownBar = true if column.type is 'breakdownBar' for label,column of @options.columns

	Object.keys(@options.columns)
		.map (label)=>
			column = @options.columns[label]
			@els.globalStyles[0].innerHTML += "{{#{column.slug}}}\n"

			markup.headingCell @markupArgs
				'slug': column.slug
				'icon': column.icon
				'label': column.label
				'style': helpers.genHeaderCellStyle(column)
				'extraClasses': helpers.genCellClassname(column)
		.join('')





DataTable::updateColumns = (updatedColumns)->
	updatedColumns = helpers.normalizeColumns(updatedColumns)
	extend.deep(@options.columns, updatedColumns)
	@currentPage = @currentPage









