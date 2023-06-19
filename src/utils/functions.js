export function getVersion(){
	return import.meta.env.VITE_APP_VERSION
}

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

	if (domain.includes('evasalud.com')) {
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