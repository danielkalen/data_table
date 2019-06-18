import * as markup from '../markup'
import extend from 'smart-extend'
import {normalizeColumns, genHeaderCellStyle, genCellClassname} from '../helpers'

export generateHeadingColumns = ()->
	@options.columns = normalizeColumns(@options.columns)
	@hasBreakdownBar = true if column.type is 'breakdownBar' for label,column of @options.columns

	Object.keys(@options.columns)
		.map (label)=>
			column = @options.columns[label]
			@els.globalStyles[0].innerHTML += "{{#{column.slug}}}\n"

			markup.headingCell @markupArgs
				'slug': column.slug
				'icon': column.icon
				'label': column.label
				'style': genHeaderCellStyle(column)
				'extraClasses': genCellClassname(column)
		.join('')





export updateColumns = (updatedColumns)->
	updatedColumns = normalizeColumns(updatedColumns)
	extend.deep(@options.columns, updatedColumns)
	@currentPage = @currentPage









