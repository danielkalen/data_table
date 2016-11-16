markup =
	tableOuterwrap: ()-> "
		<div class='#{DataTable.defaults.baseClass}-outerwrap'></div>
	"

	table: ({alignment})-> "
		<div class='#{DataTable.defaults.baseClass} alignment---#{alignment}'>
			<div class='#{DataTable.defaults.baseClass}-heading'>
				<div class='#{DataTable.defaults.baseClass}-heading-row'>
					<div class='#{DataTable.defaults.baseClass}-heading-row-cell _expandButton'></div>
				</div>
			</div>
			<div class='#{DataTable.defaults.baseClass}-body'></div>
		</div>
	"


	loading: ()-> "
		<div class='#{DataTable.defaults.baseClass}-loading {{isVisible}}'>
			<div class='#{DataTable.defaults.baseClass}-loading-innerwrap'>
				<div class='#{DataTable.defaults.baseClass}-loading-icon'></div>
				<div class='#{DataTable.defaults.baseClass}-loading-text'>Loading</div>
			</div>
		</div>
	"


	noResults: ()-> "
		<div class='#{DataTable.defaults.baseClass}-noResults {{isVisible}}'>
			<div class='#{DataTable.defaults.baseClass}-noResults-innerwrap'>
				<div class='#{DataTable.defaults.baseClass}-noResults-icon'></div>
				<div class='#{DataTable.defaults.baseClass}-noResults-text'>
					<div class='#{DataTable.defaults.baseClass}-noResults-text-title'>No {{searchTerm}}s to Display</div>
					<div class='#{DataTable.defaults.baseClass}-noResults-text-subtitle'>There are no matching {{searchTermSmall}}s for the search query you've typed.</div>
				</div>
			</div>
		</div>
	"


	pagination: ()-> "
		<div class='#{DataTable.defaults.baseClass}-pagination block-pagination {{hasExtra}} {{isVisible}}'>
			<div class='#{DataTable.defaults.baseClass}-pagination-item back'>
				<div class='#{DataTable.defaults.baseClass}-pagination-item-text'></div>
			</div>
			{{pages}}
			<div class='#{DataTable.defaults.baseClass}-pagination-item extraIndicator'>
				<div class='#{DataTable.defaults.baseClass}-pagination-item-text'></div>
				<select class='#{DataTable.defaults.baseClass}-pagination-item-select'></select>
			</div>
			<div class='#{DataTable.defaults.baseClass}-pagination-item next'>
				<div class='#{DataTable.defaults.baseClass}-pagination-item-text'></div>
			</div>
		</div>
	"


	paginationItem: ({value})-> "
		<div class='#{DataTable.defaults.baseClass}-pagination-item _paginationItem'>
			<div class='#{DataTable.defaults.baseClass}-pagination-item-text'>#{value}</div>
		</div>
	"



	headingCell: ({extraClasses='', slug, icon='', label, style=''})-> "
		<div class='#{DataTable.defaults.baseClass}-heading-row-cell #{extraClasses} __#{slug}' data-slug='#{slug}' data-icon='#{icon}' #{style}>
			<div class='#{DataTable.defaults.baseClass}-heading-row-cell-text'>#{label}</div>
		</div>
	"


	row: ({rowID, cells, drilldown=''})-> "
		<div class='#{DataTable.defaults.baseClass}-body-row _tableRow {{drilldownOpen}}' data-row-id='#{rowID}'>
			<div class='#{DataTable.defaults.baseClass}-body-row-cell _expandButton'>
				<div class='#{DataTable.defaults.baseClass}-body-row-cell-expand'></div>
			</div>
			
			#{cells}
			
			<div class='#{DataTable.defaults.baseClass}-body-row-drilldown _tableRowDrilldown'>
				#{drilldown}
			</div>
		</div>
	"
	

	rowCell: ({extraClasses='', label, slug, value, style=''})-> "
		<div class='#{DataTable.defaults.baseClass}-body-row-cell __#{slug} #{extraClasses}' data-slug='#{slug}' #{style}>
			<div class='#{DataTable.defaults.baseClass}-body-row-cell-innerwrap' title='#{label}'>#{value}</div>
		</div>
	"





	searchField: ({search})-> "
		<div class='#{DataTable.defaults.baseClass}-search #{if search?.length then 'is_visible' else ''}'>
			<select class='#{DataTable.defaults.baseClass}-search-select'></select>
			<input class='#{DataTable.defaults.baseClass}-search-input' />
			<div class='#{DataTable.defaults.baseClass}-search-selectTrigger'></div>
		</div>
	"
	



	ipDetails: ({ipAddress})-> "
		<div class='#{DataTable.defaults.baseClass}-ipDetails _ipDetails' data-ip='#{ipAddress}'>
			<div class='#{DataTable.defaults.baseClass}-ipDetails-trigger _ipDetails-trigger'></div>
			<div class='#{DataTable.defaults.baseClass}-ipDetails-content'>Loading IP Details</div>
			<div class='#{DataTable.defaults.baseClass}-ipDetails-country _ipDetails-country'></div>
		</div>
	"

	ipDetailsItem: ({label, value})-> "
		<div class='#{DataTable.defaults.baseClass}-ipDetails-content-item'>
			<div class='#{DataTable.defaults.baseClass}-ipDetails-content-item-label'>#{label}: </div>
			<div class='#{DataTable.defaults.baseClass}-ipDetails-content-item-value'>#{value}</div>
		</div>
	"
	



	fields: ({fields})-> "
		<div class='#{DataTable.defaults.baseClass}-fieldGroup'>#{fields}</div>
	"

	fieldsItem: ({label,value})-> "
		<div class='#{DataTable.defaults.baseClass}-fieldGroup-item'>
			<div class='#{DataTable.defaults.baseClass}-fieldGroup-item-label'>#{label}: </div>
			<div class='#{DataTable.defaults.baseClass}-fieldGroup-item-value'>#{value}</div>
		</div>
	"
	



	button: ({action, icon='', isMulti})-> "
		<div class='#{DataTable.defaults.baseClass}-button _actionButton #{if isMulti then '_isMulti' else ''}' data-action='#{action}'>
			<div class='#{DataTable.defaults.baseClass}-button-icon'>#{icon}</div>
		</div>
	"
	



	actions: ({actions})-> "
		<div class='#{DataTable.defaults.baseClass}-actions'>
			<div class='#{DataTable.defaults.baseClass}-actions-popup'>#{actions}</div>
		</div>
	"

	actionsOverlay: ()-> "
		<div class='#{DataTable.defaults.baseClass}-actions-overlay'></div>
	"

	actionsItem: ({action, icon, label})-> "
		<div class='#{DataTable.defaults.baseClass}-actions-popup-item _actionButton' data-action='#{action}'>
			<div class='#{DataTable.defaults.baseClass}-actions-popup-item-icon'>#{icon}</div>
			<div class='#{DataTable.defaults.baseClass}-actions-popup-item-text'>#{label}</div>
		</div>
	"

