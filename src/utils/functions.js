export function getLanguage(language = 'es') {

	let domain = window.location.hostname;
	let url, domainIndex;

	switch (language) {

		case 'es':
			url = '/spanish/get_spanish_document'
			domainIndex = 1
			break;

		case 'en':
			url = '/euskera/get_euskera_document'
			domainIndex = 2
			break;

	}

	if (domain.includes('segurodedecesos.com')) {
		url = '/spanish/get_spanish_document'
		domainIndex = 1
		language = 'es'
	}
	else if (domain.includes('heriotzaasegurua.com')) {
		url = '/euskera/get_euskera_document'
		domainIndex = 2
		language = 'en'
	}
	
	domain = domain.replace('www.', '')

	return { language, url, domainIndex, domain }
}