import styles from "./Detail.module.css";
import {
  Booking,
  Check,
  StartYellow,
  CheckReserve,
  Twitter,
  FacebookColor,
  Reddit,
  WhatsappColor,
} from "../../components";
import { Layout } from "../../layouts/Layout";
import PanelSection from "./PanelSection/PanelSection";

const Detail = () => {
  return (
    <div className={`${styles.detail} container`}>
      <PanelSection />

      {/* <div className={styles.content}>
        <div className={styles.div}>
          <div className={styles.head}>
            <div className={styles.headTitle}>
              <h2 className={styles.title}>
                Cirugía láser de miopía, astigmatismo e hipermetropía
              </h2>
              <div className={styles.button}>
                <Booking />
                <b className={styles.reservar}>Reservar</b>
              </div>
            </div>
            <div className={styles.div1}>
              <div className={styles.divcolLg7}>
                <div className={styles.desde}>Desde</div>
                <b className={styles.b}>500€</b>
              </div>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
              <div className={styles.span}>
                <Check />
                <div className={styles.pagarEnCentro}>Pagar en centro</div>
              </div>
            </div>
            <div className={styles.headChild} />
          </div>
          <div className={styles.thumb}>
            <img className={styles.image27Icon} alt="" src="/1.png" />
          </div>
          <div className={styles.content1}>
            <div className={styles.head}>
              <div className={styles.servicioMdicoProfesional}>
                Servicio Médico Profesional De Cirugía láser de miopía,
                astigmatismo e hipermetropía
              </div>
              <div className={styles.laCirugaRefractiva}>
                La cirugía refractiva se utiliza para corregir los defectos
                refractivos del ojo. En condiciones normales, la imagen penetra
                en el ojo a través de la córnea y del cristalino hasta
                proyectarse en la retina mediante un proceso conocido como
                refracción. Desde la retina, la imagen se transmite al cerebro a
                través del nervio óptico.
              </div>
              <div className={styles.aPortfolioDemonstratingContainer}>
                <ul className={styles.aPortfolioDemonstratingWell}>
                  <li className={styles.aPortfolioDemonstrating}>
                    A portfolio demonstrating well thought through and polished
                    end to end customer journeys
                  </li>
                  <li className={styles.aPortfolioDemonstrating}>
                    5+ years of industry experience in interactive design and /
                    or visual design
                  </li>
                  <li className={styles.aPortfolioDemonstrating}>
                    Excellent interpersonal skills 
                  </li>
                  <li className={styles.aPortfolioDemonstrating}>
                    Aware of trends in mobile, communications, and collaboration
                  </li>
                  <li className={styles.aPortfolioDemonstrating}>
                    Ability to create highly polished design prototypes,
                    mockups, and other communication artifacts
                  </li>
                  <li className={styles.aPortfolioDemonstrating}>
                    The ability to scope and estimate efforts accurately and
                    prioritize tasks and goals independently
                  </li>
                  <li className={styles.aPortfolioDemonstrating}>
                    History of impacting shipping products with your work
                  </li>
                  <li className={styles.aPortfolioDemonstrating}>
                    A Bachelor’s Degree in Design (or related field) or
                    equivalent professional experience
                  </li>
                  <li>
                    Proficiency in a variety of design tools such as Figma,
                    Photoshop, Illustrator, and Sketch
                  </li>
                </ul>
              </div>
              <div className={styles.divptAccordionBlock}>
                <div className={styles.divptAccordionBox}>
                  <div className={styles.divptAdTitle}>
                    <div className={styles.quIncluyeEn}>
                      ¿Qué incluye en este producto?
                    </div>
                  </div>
                  <div className={styles.divptAccordionDetails}>
                    <div className={styles.puedesAcudirA}>
                      Puedes acudir a una consulta de dermatología si ves alguna
                      anomalía en la piel, el cuero cabelludo, los labios, las
                      uñas o las membranas mucosas. En la primera consulta el
                      dermatólogo te hará un diagnóstico y te indicará cual es
                      el tratamiento más adecuado para tu caso. Las patologías
                      más frecuentes son dermatitis, psoriasis, alopecia,
                      detección de verrugas, enfermedades infecciosas o un
                      melanoma. También puedes acudir al dermatólogo para tratar
                      un problema de estética o para eliminar algún tatuaje.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.divelementorContainer}>
                <div className={styles.jpg}>
                  <div className={styles.div8} />
                </div>
                <div className={styles.jpg1}>
                  <div className={styles.div8} />
                </div>
              </div>
            </div>          
          </div>
        </div>
        <div className={styles.div13}>
          <div className={styles.company}>
            <div className={styles.div14}>
              <div className={styles.avatar}>
                <div className={styles.avatar1}>
                  <div className={styles.avatarChild} />
                  <img
                    className={styles.logoIcon}
                    alt=""
                    src="/images/detail/logoEva.png"
                  />
                </div>
                <div className={styles.policlnicaEvaSaludParent}>
                  <b className={styles.policlnicaEvaSalud}>
                    Policlínica Eva Salud
                  </b>
                  <div className={styles.locations}>
                    <div className={styles.calleTllez30}>
                      Calle Téllez 30, Madrid
                    </div>
                    <img
                      className={styles.fiRsMarker1Icon}
                      alt=""
                      src="/firsmarker-1.svg"
                    />
                  </div>
                  <div className={styles.autoLayoutHorizontal}>
                    <div className={styles.iconlyboldstarParent}>
                      <StartYellow />
                      <StartYellow />
                      <StartYellow />
                      <StartYellow />
                      <StartYellow />
                    </div>
                    <div className={styles.div15}>{`4.9 `}</div>
                  </div>
                </div>
              </div>
              <div className={styles.divChild} />
              <div className={styles.map}>
                <img
                  className={styles.mapChild}
                  alt=""
                  src="/images/detail/map.png"
                />
              </div>
              <div className={styles.address}>
                <ul className={styles.aPortfolioDemonstratingWell}>
                  <li className={styles.aPortfolioDemonstrating}>
                    205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                  </li>
                  <li className={styles.aPortfolioDemonstrating}>
                    Telefono: (123) 456-7890
                  </li>
                  <li>Email: contact@EvaSalud.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Detail;
