export function getVersion(){
	return import.meta.env.VITE_APP_VERSION
}

export function getLanguage(language = 'es') {

	let domain = window.location.hostname;
	let url, domainIndex;

	console.log('lenguage inicial', language)

	switch (language) {

		case 'es':
			url = '/spanish/get_spanish_document'
			domainIndex = 1
			domain= 'evasalud.com'
			break;

		case 'en':
			url = '/english/get_english_document'
			domainIndex = 2
			domain= 'evahealth.com'
			break;

		case 'hi':
			url = '/hindi/get_hindi_document'
			domainIndex = 3
			domain= 'evasvaasth.com'
			break;

		case 'pt':
			url = '/portugues/get_portugues_document'
			domainIndex = 4
			domain= 'evasaude.com'
			break;

		case 'ar':
			url = '/arabe/get_arabe_document'
			domainIndex = 5
			domain= 'sehahawae.com'
			break;

	}

	if (window.location.hostname.includes('evasalud.com')) {
		url = '/spanish/get_spanish_document'
		domainIndex = 1
		language = 'es'
		console.log('cambiando a español')
	}
	else if (window.location.hostname.includes('evacard.com')) {
		url = '/euskera/get_euskera_document'
		domainIndex = 2
		language = 'en'
	}
	else if (window.location.hostname.includes('evasvaasth.com')) {
		url = '/hindi/get_euskera_document'
		domainIndex = 3
		language = 'hi'
		console.log('cambiando a hindiiiiiiiiii')
	}
	else if (window.location.hostname.includes('evasaude.com')) {
		url = '/portugues/portugues_document'
		domainIndex = 4
		language = 'pt'
	}
	else if (window.location.hostname.includes('sehahawae.com')) {
		url = '/arabe/arabe_document'
		domainIndex = 5
		language = 'ar'
		console.log('cambiando a arabe')
	}

	console.log('lenguage final', language)

	domain = domain.replace('www.', '')

	return { language, url, domainIndex, domain }
}

export const processBoldText = (text) => {
	let elements = [];
	let startComment, endComment;

	while (text.length > 0) {
		startComment = text.indexOf('/*');
		endComment = text.indexOf('*/');

		if (startComment !== -1) {
			let beforeComment = text.slice(0, startComment).trim();
			let insideComment = text.slice(startComment + 2, endComment).trim();

			if (beforeComment) {
				elements.push({ type: 'text', content: beforeComment });
			}
			if (insideComment) {
				elements.push({ type: 'span', content: insideComment });
			}

			text = text.slice(endComment + 2);
		} else {
			if (text.trim()) {
				elements.push({ type: 'text', content: text.trim() });
			}
			break;
		}
	}

	return elements;
};