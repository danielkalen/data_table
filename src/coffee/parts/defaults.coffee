defaults = 
	'perPage': 20
	'pageCountMax': 10
	'minWidth': 0
	'mobileWidth': 736
	'cellsHavePadding': false
	'hasMobile': true
	'loadOnInit': true
	'columns': []
	'search': []
	'percentage': {}
	'baseClass': 'DataTable'
	'showPageStatus': true
	'sortBy': ''
	'alignment': 'left'
	'actions': false
	'ipDataFetcher': (ipAddress)-> new Promise (resolve)-> $.get "http://ipinfo.io/#{ipAddress}", resolve, 'JSON'
