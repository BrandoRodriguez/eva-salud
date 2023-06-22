import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { getLanguage } from "@utils/functions";

export const LanguageProvider = ({ children, initialLanguage }) => {

	const [language, setLanguage] = useState(initialLanguage);
	const [url, setUrl] = useState('')
	const [domainIndex, setDomainIndex] = useState()
	const [domain, setDomain] = useState('')
	const [company, setCompany] = useState('')

	useEffect(() => {

		const { language: lang, url, domainIndex, domain } = getLanguage(language)

		setLanguage(lang)
		setUrl(url)
		setDomainIndex(domainIndex)
		setDomain(domain)
		setCompany(domain.replace('.com', ''))

	}, []);

	const changeLanguage = (lang) => setLanguage(lang);

	return (
		<LanguageContext.Provider value={{ language, changeLanguage, url, domainIndex, domain, company }}>
			{children}
		</LanguageContext.Provider>
	);
};