import styles from "./Footer.module.css";
import {
  Logo,
  Youtube,
  Facebook,
  Whatsapp,
  Figma,
  Dribble,
  Apple,
  PlayStore,
  ArrowRight,
  Email,
  Mail,
  Address,
  Fax,
  Tel,
  Shape,
} from "../../ui";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { FooterText } from "@mocks/General";

export const Footer = () => {
  const { language } = useLanguage();
  const content = FooterText[language];

  const services_styles = [
    styles.wellness,
    styles.surgery,
    styles.consultation,
    styles.dental,
    styles.include,
    styles.test,
    styles.therapy,
  ];

  return (
    <footer className={styles.footer}>
      <Shape />
      <div className={`${styles.content} container`}>
        <div className={styles.detail}>
          <div className={styles.introduction}>
            <div>
              <Logo />
            </div>
            <p>{content.description}</p>
            <label>{content.social_title}</label>
            <span className={styles.socials}>
              <Facebook />
              <Youtube />
              <Whatsapp />
              <Figma />
              <Dribble />
            </span>
          </div>
          <div className={styles.category}>
            {content.services.map((service, index) => {
              return (
                <span key={index} className={services_styles[index]}>
                  <p>{service}</p>
                  <ArrowRight />
                </span>
              );
            })}
          </div>
          <div className={styles.app}>
            <p>{content.app_section.title}</p>
            <label>{content.app_section.description}</label>
            <div className={styles.group}>
              <div>
                <Apple />
              </div>
              <div>
                <PlayStore />
              </div>
            </div>
          </div>
          <img src="./images/footer/app.png" alt="" />
        </div>
        <div className={styles.newsletter}>
          <span className={styles.newsletterText}>
            <h4>{content.newsletter.title}</h4>
            <label>{content.newsletter.description}</label>
          </span>
          <form action="" className={styles.newsletterForm}>
            <Email />
            <input
              type="text"
              className={styles.newsletterInput}
              placeholder={content.newsletter.input_placeholder}
              required
            />
            <button type="button" className={styles.newsletterButton}>
              {content.newsletter.button_text}
            </button>
          </form>
        </div>
        <nav className={styles.menu}>
          {content.menu.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </nav>
        <div className={styles.bottombar}>
          <div>
            <span>
              <Tel />
              310-437-2766
            </span>
            <span>
              <Mail />
              @evasalud.com
            </span>
            <span>
              <Address />
              706 Campfire Ave. Meriden, CT 06450
            </span>
            <span>
              <Fax />
              +1-212-9876543
            </span>
          </div>
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
