defaultOptions = 
	'perPage': 20
	'actions': false
	'ipDataFetcher': (ipAddress)-> new Promise (resolve)-> $.get "http://ipinfo.io/#{ipAddress}", resolve, 'JSON'
