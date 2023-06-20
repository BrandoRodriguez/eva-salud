import { CardBanner, CardBannerInformative } from "../../../components";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { BannerInformativeText, BannerText } from "@mocks/Pages/Home";

export const Banner = () => {
  const { language } = useLanguage();
  const content = BannerText[language];

  return (
    <div className="container">
      <CardBanner
        image="./images/products/Dental.webp"
        title={content.title}
        description={content.subtitle}
        button_text={content.button_text}
      />
    </div>
  );
};

export const BannerInformative = () => {

  const {language} = useLanguage()
  const content = BannerInformativeText[language]

  return (
    <div className="container">
      <CardBannerInformative
        title={content.title}
        description={content.description}
        button_text={content.button_text}
      />
    </div>
  );
};
