import { useLanguage } from "@context/LanguageContext/useLanguage";
import { CardBanner } from "../../../components";
import { BannerText } from "@mocks/Pages/Home";

export const Banner = () => {

  const {language} = useLanguage()
  const content = BannerText[language]

  return (
    <div className="container">
      <CardBanner
        image="./images/products/Dental.webp"
        title={content.title}
        description= {content.subtitle}
        button_text = {content.button_text}
      />
    </div>
  );
};
