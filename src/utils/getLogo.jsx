import { EvaSalud } from "@UI/index";
import EvaHealthColor from "@components/Logos/EvaHealthColor";
import EvaHealthWhite from "@components/Logos/EvaHealthWhite";
import EvaHindiColor from "@components/Logos/EvaHindiColor";
import EvaHindiWhite from "@components/Logos/EvaHindiWhite";

export function getLogo(language, type= 'white') {

	if (language === 'es'){

		if (type === 'white'){
			return <EvaSalud fill={"#fff"} />
		} else if (type === 'color'){
			return <EvaSalud type={'color'}/>
		}
	}

	if (language === 'en'){

		if (type === 'white'){
			return <EvaHealthWhite />
		} else if (type === 'color'){
			return <EvaHealthColor />
		}
	}

	if (language === 'hi'){

		if (type === 'white'){
			return <EvaHindiWhite />
		} else if (type === 'color'){
			return <EvaHindiColor/>
		}
	}

}