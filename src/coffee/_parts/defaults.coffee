defaults = 
	'perPage': 20
	'pageCountMax': 10
	'columns': []
	'searchField': []
	'baseClass': 'DataTable'
	'sortBy': ''
	'alignment': 'left'
	'actions': false
	'ipDataFetcher': (ipAddress)-> new Promise (resolve)-> $.get "http://ipinfo.io/#{ipAddress}", resolve, 'JSON'
