markup =
	tableOuterwrap: ()-> "
		<div class='#{DataTable.defaults.baseClass}-outerwrap'></div>
	"

	table: ()-> "
		<div class='#{DataTable.defaults.baseClass}'>
			<div class='#{DataTable.defaults.baseClass}-heading'>
				<div class='#{DataTable.defaults.baseClass}-heading-row'>
					<div class='#{DataTable.defaults.baseClass}-heading-row-cell is_expand_button'></div>
				</div>
			</div>
			<div class='#{DataTable.defaults.baseClass}-body'></div>
		</div>
	"


	noResults: ()-> "
		<div class='#{DataTable.defaults.baseClass}-no_results {{isVisible}}'>
			<div class='#{DataTable.defaults.baseClass}-no_results-innerwrap'>
				<div class='#{DataTable.defaults.baseClass}-no_results-icon'></div>
				<div class='#{DataTable.defaults.baseClass}-no_results-text'>
					<div class='#{DataTable.defaults.baseClass}-no_results-text-title'>No {{searchTerm}}s to Display</div>
					<div class='#{DataTable.defaults.baseClass}-no_results-text-subtitle'>There are no matching {{searchTermSmall}}s for the search query you've typed.</div>
				</div>
			</div>
		</div>
	"


	pagination: ()-> "
		<div class='#{DataTable.defaults.baseClass}-pagination block-pagination'>
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



	headingCell: ({extraClasses='', slug, icon, label})-> "
		<div class='#{DataTable.defaults.baseClass}-heading-row-cell #{extraClasses} __#{slug}' data-slug='#{slug}' data-icon='#{icon}'>
			<div class='#{DataTable.defaults.baseClass}-heading-row-cell-text'>#{label}</div>
		</div>
	"


	row: ({rowID, cells, drilldown=''})-> "
		<div class='#{DataTable.defaults.baseClass}-body-row _tableRow {{drilldownOpen}}' data-row-id='#{rowID}'>
			<div class='#{DataTable.defaults.baseClass}-body-row-cell is_expand_button'>
				<div class='#{DataTable.defaults.baseClass}-body-row-cell-expand'></div>
			</div>
			
			#{cells}
			
			<div class='#{DataTable.defaults.baseClass}-body-row-drilldown _tableRowDrilldown'>
				#{drilldown}
			</div>
		</div>
	"
	

	rowCell: ({extraClasses='', label, slug, value})-> "
		<div class='#{DataTable.defaults.baseClass}-body-row-cell __#{slug} __#{extraClasses}' data-slug='#{slug}'>
			<div class='#{DataTable.defaults.baseClass}-body-row-cell-innerwrap' title='{{label}}'>#{value}</div>
		</div>
	"
	



	ipDetails: ({ipAddress})-> "
		<div class='#{DataTable.defaults.baseClass}-ip_details' data-ip='#{ipAddress}'>
			<div class='#{DataTable.defaults.baseClass}-ip_details-trigger'>
				<div class='#{DataTable.defaults.baseClass}-ip_details-content'>Loading IP Details</div>
			</div>
			<div class='#{DataTable.defaults.baseClass}-ip_details-country'></div>
		</div>
	"

	ipDetailsItem: ({label, value})-> "
		<div class='#{DataTable.defaults.baseClass}-ip_details-content-item'>
			<div class='#{DataTable.defaults.baseClass}-ip_details-content-item-label'>#{label}: </div>
			<div class='#{DataTable.defaults.baseClass}-ip_details-content-item-value'>#{value}</div>
		</div>
	"
	



	fields: ({fields})-> "
		<div class='#{DataTable.defaults.baseClass}-fields'>#{fields}</div>
	"

	fieldsItem: ({label,value})-> "
		<div class='#{DataTable.defaults.baseClass}-fields-item'>
			<div class='#{DataTable.defaults.baseClass}-fields-item-label'>#{label}: </div>
			<div class='#{DataTable.defaults.baseClass}-fields-item-value'>#{value}</div>
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