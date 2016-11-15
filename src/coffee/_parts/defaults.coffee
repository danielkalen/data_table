defaults = 
	'perPage': 20
	'pageCountMax': 10
	'columns': []
	'searchField': []
	'baseClass': 'data_table'
	'sortBy': ''
	'actions': false
	'ipDataFetcher': (ipAddress)-> new Promise (resolve)-> $.get "http://ipinfo.io/#{ipAddress}", resolve, 'JSON'
