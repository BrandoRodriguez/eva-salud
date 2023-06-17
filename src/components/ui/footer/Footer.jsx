import styles from "./Footer.module.css";
import { Logo, Youtube, Facebook, Whatsapp, Figma, Dribble, Phone, Apple, PlayStore, ArrowRight, Email, Mail, Address, Fax, Tel } from "../../ui";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.detail}>
          <div className={styles.introduction}>
            <Logo />
            <p>Protejamos lo más importante para alcanzar el bienestar en nuestras vidas: tu salud y la de los tuyos.</p>
            <label>Síganos en nuestras redes:</label>
            <span className={styles.socials}>
              <Facebook />
              <Youtube />
              <Whatsapp />
              <Figma />
              <Dribble />
            </span>
          </div>
          <div className={styles.category}>
            <span className={styles.wellness}>
              <p >Bienestar y Estética</p>
              <ArrowRight />
            </span>
            <span className={styles.surgery}>
              <p >Cirugías</p>
              <ArrowRight />
            </span>
            <span className={styles.consultation}>
              <p>Consultas médicas</p>
              <ArrowRight />
            </span>
            <span className={styles.dental}>
              <p>Dental</p>
              <ArrowRight />
            </span>
            <span className={styles.include}>
              <p >Incluido en Eva Salud</p>
              <ArrowRight />
            </span>
            <span className={styles.test}>
              <p>Pruebas médicas</p>
              <ArrowRight />
            </span>
            <span className={styles.therapy}>
              <p >Tratamientos y terapias</p>
              <ArrowRight />
            </span>
          </div>
          <div className={styles.app}>
            <p>Descargar aplicación</p>
            <label>Descarga nuestras Apps y obtén
              15% de descuento.</label>
            <Apple />
            <PlayStore />
          </div>
        </div>
        <div className={styles.newsletter}>
          <span className={styles.newsletterText}>
            <h4>Suscríbete a nuestra newsletter</h4>
            <label>Sé el primero en enterarte de descuentos, ofertas y eventos semanales en tu buzón.</label>
          </span>
          <form action="" className={styles.newsletterForm}>
            <Email />
            <input type="text" className={styles.newsletterInput} placeholder="Introduce tu correo electrónico" required />
            <button type="button" className={styles.newsletterButton}>Suscríbete</button>
          </form>
        </div>
        <nav className={styles.menu}>
          <p>Sobre nosotros</p>
          <p>Especialidades</p>
          <p>Blog</p>
          <p>Prensa</p>
          <p>Preguntas frecuentes</p>
          <p>Trabaja con nosotros</p>
          <p>Contáctanos</p>
          <p>Política de privacidad</p>
          <p>Términos y Condiciones</p>
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
          <p>©Evasalud.com 2023. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
