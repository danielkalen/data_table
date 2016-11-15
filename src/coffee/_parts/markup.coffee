markup =
	table: ({columns, pagination})-> "
		<div class='#{DataTable.defaults.baseClass}-outerwrap'>
			<table class='#{DataTable.defaults.baseClass} chart horizontal'>
				<thead class='#{DataTable.defaults.baseClass}-head'>
					<tr class='#{DataTable.defaults.baseClass}-head-row'>
						<th class='#{DataTable.defaults.baseClass}-head-row-cell is_expand_button'></th>
						#{columns}
					</tr>
				</thead>

				<tbody class='#{DataTable.defaults.baseClass}-body'></tbody>
			</table>
			#{pagination}
		</div>
	"


	table_head_cell: ({isSortable, slug, icon, label})-> "
		<th class='#{DataTable.defaults.baseClass}-head-row-cell #{if isSortable then 'isSortable' else ''} #{slug}' data-slug='#{slug}' data-icon='#{icon}'>
			<div class='#{DataTable.defaults.baseClass}-head-row-cell-text'>#{label}</div>
		</th>
	"


	table_body_row: ({isSub, itemID, cells})-> "
		<tr class='#{DataTable.defaults.baseClass}-body-row #{if isSub then 'isSub' else ''}' data-id='#{itemID}'>
			<td class='#{DataTable.defaults.baseClass}-body-row-cell is_expand_button'>
				<div class='#{DataTable.defaults.baseClass}-body-row-cell-expand'></div>
			</td>

			#{cells}
		</tr>
	"
	

	table_body_row_cell: ({slug, value})-> "
		<td class='#{DataTable.defaults.baseClass}-body-row-cell cell_#{slug}' data-slug='#{slug}'>
			<div class='#{DataTable.defaults.baseClass}-body-row-cell-innerwrap'>#{value}</div>
		</td>
	"
	



	table_body_row_cell_ip_details: ({ipAddress})-> "
		<div class='#{DataTable.defaults.baseClass}-ip_details' data-ip='#{ipAddress}'>
			<div class='#{DataTable.defaults.baseClass}-ip_details-trigger'>
				<div class='#{DataTable.defaults.baseClass}-ip_details-content'>Loading IP Details</div>
			</div>
			<div class='#{DataTable.defaults.baseClass}-ip_details-country'></div>
		</div>
	"

	table_body_row_cell_ip_details_item: ({label, value})-> "
		<div class='#{DataTable.defaults.baseClass}-ip_details-content-item'>
			<div class='#{DataTable.defaults.baseClass}-ip_details-content-item-label'>#{label}: </div>
			<div class='#{DataTable.defaults.baseClass}-ip_details-content-item-value'>#{value}</div>
		</div>
	"
	



	table_body_row_cell_fields: ({fields})-> "
		<div class='#{DataTable.defaults.baseClass}-fields'>#{fields}</div>
	"

	table_body_row_cell_fields_item: ({label,value})-> "
		<div class='#{DataTable.defaults.baseClass}-fields-item'>
			<div class='#{DataTable.defaults.baseClass}-fields-item-label'>#{label}: </div>
			<div class='#{DataTable.defaults.baseClass}-fields-item-value'>#{value}</div>
		</div>
	"
	



	table_body_row_cell_actions: ({actions})-> "
		<div class='#{DataTable.defaults.baseClass}-actions'>#{actions}</div>
	"

	table_body_row_cell_actions_item: ({action, icon, label, color='grey'})-> "
		<div class='#{DataTable.defaults.baseClass}-actions-button color_#{color}' data-action='#{action}' data-icon='#{icon}'>
			<div class='#{DataTable.defaults.baseClass}-actions-button-text'>#{label}</div>
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


	pagination_item: ({value})-> "
		<div class='#{DataTable.defaults.baseClass}-pagination-item'>
			<div class='#{DataTable.defaults.baseClass}-pagination-item-text'>#{value}</div>
		</div>
	"