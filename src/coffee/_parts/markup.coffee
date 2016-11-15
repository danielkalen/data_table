markup =
	tableOuterwrap: ()-> "
		<div class='#{DataTable.defaults.baseClass}-outerwrap'></div>
	"

	table: ({alignment})-> "
		<div class='#{DataTable.defaults.baseClass} alignment---#{alignment}'>
			<div class='#{DataTable.defaults.baseClass}-heading'>
				<div class='#{DataTable.defaults.baseClass}-heading-row'>
					<div class='#{DataTable.defaults.baseClass}-heading-row-cell __expandButton'></div>
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
		<div class='#{DataTable.defaults.baseClass}-pagination block-pagination {{isVisible}}'>
			<div class='#{DataTable.defaults.baseClass}-pagination-item back'>
				<div class='#{DataTable.defaults.baseClass}-pagination-item-text'></div>
			</div>
			{{pages}}
			<div class='#{DataTable.defaults.baseClass}-pagination-item next'>
				<div class='#{DataTable.defaults.baseClass}-pagination-item-text'></div>
			</div>
		</div>
	"


	paginationItem: ({value})-> "
		<div class='#{DataTable.defaults.baseClass}-pagination-item'>
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
			<div class='#{DataTable.defaults.baseClass}-body-row-cell __expandButton'>
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
			<div class='#{DataTable.defaults.baseClass}-body-row-cell-innerwrap' title='{{label}}'>#{value}</div>
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
	



	actions: ({actions})-> "
		<div class='#{DataTable.defaults.baseClass}-actions'>#{actions}</div>
	"

	actionsItem: ({action, icon, label, color='grey'})-> "
		<div class='#{DataTable.defaults.baseClass}-actions-button color_#{color}' data-action='#{action}' data-icon='#{icon}'>
			<div class='#{DataTable.defaults.baseClass}-actions-button-text'>#{label}</div>
		</div>
	"