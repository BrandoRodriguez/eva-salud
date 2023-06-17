import { EvaSalud } from "@UI/index";

export function getLogo(language) {

	switch (language) {

		case 'es':
			return <EvaSalud />
			// return <h1>hola</h1>

		case 'en':
			return <EvaSalud />
			// return <h1></h1>

		default:
			break;
	}

}