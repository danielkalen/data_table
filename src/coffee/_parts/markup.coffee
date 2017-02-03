markup =
	tableOuterwrap: ({ID, baseClass, minWidth, hasMobile, cellsHavePadding})-> "
		<div id='#{baseClass}-#{ID}' class='#{baseClass}-outerwrap {{loading}} {{noResults}} {{hasError}}
			#{if minWidth then '_hasMinWidth' else ''}
			#{if hasMobile then '{{mobileVersion}}' else ''}
			#{if cellsHavePadding then '_cellsHavePadding' else ''}
		'></div>
	"

	table: ({baseClass, alignment})-> "
		<div class='#{baseClass} alignment---#{alignment} sortDirection---{{sortDirection}}'>
			<div class='#{baseClass}-heading'>
				<div class='#{baseClass}-heading-row'></div>
			</div>
			<div class='#{baseClass}-body'></div>
		</div>
	"


	loading: ({baseClass})-> "
		<div class='#{baseClass}-loading {{isVisible}}'>
			<div class='#{baseClass}-loading-innerwrap'>
				<div class='#{baseClass}-loading-icon'></div>
				<div class='#{baseClass}-loading-text'>Loading</div>
			</div>
		</div>
	"


	noResults: ({baseClass, itemSingleLabel='Item', itemPluralLabel=itemSingleLabel+'s'})-> "
		<div class='#{baseClass}-noResults {{isVisible}}'>
			<div class='#{baseClass}-noResults-innerwrap'>
				<div class='#{baseClass}-noResults-icon'></div>
				<div class='#{baseClass}-noResults-text'>
					<div class='#{baseClass}-noResults-text-title'>No #{itemSingleLabel}s to Display</div>
					<div class='#{baseClass}-noResults-text-subtitle'>There are no matching #{itemPluralLabel} for the search query you've typed.</div>
				</div>
			</div>
		</div>
	"


	error: ({baseClass})-> "
		<div class='#{baseClass}-error {{isVisible}}'>
			<div class='#{baseClass}-error-innerwrap'>
				<div class='#{baseClass}-error-icon'></div>
				<div class='#{baseClass}-error-text'>
					<div class='#{baseClass}-error-text-title'>A Fatal Error has Occured</div>
					<div class='#{baseClass}-error-text-subtitle'>Report the following to the admin:<br />\"{{errorMessage}}\"</div>
				</div>
			</div>
		</div>
	"


	pageStatus: ({baseClass, showPageStatus})-> "
		<div class='#{baseClass}-pageStatus #{if showPageStatus then 'is_visible' else ''}'>
			Showing {{rowRange}} of {{totalRows}}
		</div>
	"


	pagination: ({baseClass})-> "
		<div class='#{baseClass}-pagination {{hasExtra}} {{isVisible}}'>
			<div class='#{baseClass}-pagination-item _paginationItem _back'>
				<div class='#{baseClass}-pagination-item-text'></div>
			</div>

			<div class='#{baseClass}-pagination-itemswrap _paginationItems'></div>

			<div class='#{baseClass}-pagination-item _paginationItem _extraIndicator'>
				<div class='#{baseClass}-pagination-item-text'></div>
				<select class='#{baseClass}-pagination-item-select'></select>
			</div>
			<div class='#{baseClass}-pagination-item _paginationItem _next'>
				<div class='#{baseClass}-pagination-item-text'></div>
			</div>
		</div>
	"


	paginationItem: ({baseClass, value})-> "
		<div class='#{baseClass}-pagination-item _paginationItem'>
			<div class='#{baseClass}-pagination-item-text'>#{value}</div>
		</div>
	"



	headingCell: ({baseClass, extraClasses='', slug, icon='', label, style=''})-> "
		<div class='#{baseClass}-heading-row-cell #{extraClasses} __#{slug}' data-slug='#{slug}' data-icon='#{icon}' #{style}>
			<div class='#{baseClass}-heading-row-cell-text'>#{label}</div>
		</div>
	"


	row: ({baseClass, rowID, cells, drilldown=''})-> "
		<div class='#{baseClass}-body-row _tableRow {{drilldownState}}' data-row-id='#{rowID}'>
			<div class='#{baseClass}-body-row-expandDrilldown _expandDrilldown'>
				<div class='#{baseClass}-body-row-expandDrilldown-icon'></div>
			</div>
			
			#{cells}
			
			<div class='#{baseClass}-body-row-drilldown _tableRowDrilldown'>
				#{drilldown}
			</div>
		</div>
	"
	

	rowCell: ({baseClass, extraClasses='', label, column, slug, value, style=''})-> "
		<div class='#{baseClass}-body-row-cell __#{slug} #{extraClasses}' data-slug='#{slug}' data-column='#{column}' #{style}>
			<div class='#{baseClass}-body-row-cell-innerwrap' title='#{label}'>#{value}</div>
		</div>
	"





	searchField: ({baseClass, search})-> "
		<div class='#{baseClass}-search #{if search?.length then 'is_visible' else ''}'>
			<select class='#{baseClass}-search-select'></select>
			<input class='#{baseClass}-search-input' />
			<div class='#{baseClass}-search-selectTrigger'></div>
		</div>
	"
	



	ipDetails: ({baseClass, ipAddress, extra=''})-> "
		<div class='#{baseClass}-ipDetails _ipDetails' data-ip='#{ipAddress}'>
			<div class='#{baseClass}-ipDetails-trigger _ipDetails-trigger'></div>
			<div class='#{baseClass}-ipDetails-content'>Loading IP Details</div>
		</div>
		#{extra}
	"

	ipDetailsItem: ({baseClass, label, value})-> "
		<div class='#{baseClass}-ipDetails-content-item'>
			<div class='#{baseClass}-ipDetails-content-item-label'>#{label}: </div>
			<div class='#{baseClass}-ipDetails-content-item-value'>#{value}</div>
		</div>
	"
	



	fields: ({baseClass, fields})-> "
		<div class='#{baseClass}-fieldGroup'>#{fields}</div>
	"

	fieldsItem: ({baseClass, label,value})-> "
		<div class='#{baseClass}-fieldGroup-item'>
			<div class='#{baseClass}-fieldGroup-item-label'>#{label}: </div>
			<div class='#{baseClass}-fieldGroup-item-value'>#{value}</div>
		</div>
	"
	



	button: ({baseClass, action, icon='', isMulti})-> "
		<div class='#{baseClass}-button _actionButton #{if isMulti then '_isMulti' else ''}' data-action='#{action}'>
			<div class='#{baseClass}-button-icon'>#{icon}</div>
		</div>
	"
	



	actions: ({baseClass, actions})-> "
		<div class='#{baseClass}-actions'>
			<div class='#{baseClass}-actions-popup'>#{actions}</div>
		</div>
	"

	actionsOverlay: ()-> "
		<div class='#{DataTable.defaults.baseClass}-actions-overlay'></div>
	"

	actionsItem: ({baseClass, action, icon, label, customIconStyle=''})-> "
		<div class='#{baseClass}-actions-popup-item _actionButton _subActionButton' data-action='#{action}' style='#{customIconStyle}'>
			<div class='#{baseClass}-actions-popup-item-icon'>#{icon}</div>
			<div class='#{baseClass}-actions-popup-item-text'>#{label}</div>
		</div>
	"

