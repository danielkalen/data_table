markup =

	table: "
		<div class='data_table-outerwrap'>
			<table class='data_table chart horizontal'>
				<thead class='data_table-head'>
					<tr class='data_table-head-row'>
						<th class='data_table-head-row-cell is_expand_button'></th>
						{{columns}}
					</tr>
				</thead>

				<tbody class='data_table-body'></tbody>
			</table>
			{{pagination}}
		</div>
	"


	table_head_cell: "
		<th class='data_table-head-row-cell {{isSortable}} {{slug}}' data-slug='{{slug}}' data-icon='{{icon}}'>
			<div class='data_table-head-row-cell-text'>{{label}}</div>
		</th>
	"


	table_body_row: "
		<tr class='data_table-body-row {{isSub}}' data-id='{{itemID}}'>
			<td class='data_table-body-row-cell is_expand_button'>
				<div class='data_table-body-row-cell-expand'></div>
			</td>

			{{cells}}
		</tr>
	"
	

	table_body_row_cell: "
		<td class='data_table-body-row-cell cell_{{slug}}' data-slug='{{slug}}'>
			<div class='data_table-body-row-cell-innerwrap'>{{value}}</div>
		</td>
	"
	



	table_body_row_cell_ip_details: "
		<div class='data_table-ip_details' data-ip={{ipAddress}}>
			<div class='data_table-ip_details-trigger'>
				<div class='data_table-ip_details-content'>Loading IP Details</div>
			</div>
			<div class='data_table-ip_details-country'></div>
		</div>
	"

	table_body_row_cell_ip_details_item: "
		<div class='data_table-ip_details-content-item'>
			<div class='data_table-ip_details-content-item-label'>{{label}}: </div>
			<div class='data_table-ip_details-content-item-value'>{{value}}</div>
		</div>
	"
	



	table_body_row_cell_fields: "
		<div class='data_table-fields'>{{fields}}</div>
	"

	table_body_row_cell_fields_item: "
		<div class='data_table-fields-item'>
			<div class='data_table-fields-item-label'>{{label}}: </div>
			<div class='data_table-fields-item-value'>{{value}}</div>
		</div>
	"
	



	table_body_row_cell_actions: "
		<div class='data_table-actions'>{{actions}}</div>
	"

	table_body_row_cell_actions_item: "
		<div class='data_table-actions-button color_{{color}}' data-action='{{action}}' data-icon='{{icon}}'>
			<div class='data_table-actions-button-text'>{{label}}</div>
		</div>
	"




	pagination: "
		<div class='data_table-pagination block-pagination'>
			<div class='data_table-pagination-item back'>
				<div class='data_table-pagination-item-text'></div>
			</div>
			{{pages}}
			<div class='data_table-pagination-item next'>
				<div class='data_table-pagination-item-text'></div>
			</div>
		</div>
	"


	pagination_item: "
		<div class='data_table-pagination-item'>
			<div class='data_table-pagination-item-text'>{{value}}</div>
		</div>
	"