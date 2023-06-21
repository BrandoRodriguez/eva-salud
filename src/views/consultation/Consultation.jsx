import styles from "./Consultation.module.css";
import { Layout } from "../../layouts/Layout";
import Button from "@UI/ButtonDecesos/Button";
import Work from "@components/icons/Work";
import AngleDown from "@components/icons/AngleDown";
import Ubication from "@components/icons/Ubication";
import KeyNumbers from "@components/icons/KeyNumbers";
import AngleLeft from "@components/icons/AngleLeft";
import AngleRight from "@components/icons/AngleRight";
import { useMediaQuery } from "react-responsive";
import Filter from "@UI/Filter/Filter";
import { Fragment } from "react";
import Blog from "@UI/Blog/Blog";
import Subscribe from "@UI/Subscribe/Subscribe";
import FilterSection from "@components/pages/consultation/FilterSection/FilterSection";
import Card1 from "@UI/Card1/Card1";

const Consultation = () => {

  // const { language } = useLanguage();
  // const content = HeaderSectionText[language];

  const consultas = [
    'Alergología', 'Dermatología', 'Angiología y Cirugía Vascular', 'Aparato digestivo', 'Cardiología',
    'Dietética y nutrición', 'Endocrinología y nutrición', 'Enfermería', 'Fertilidad y reproducción humana',
    'Fisioterapia y rehabilitación', 'Geriatría', 'Ginecología y Obstetricia', 'Hematología', 'Aparato digestivo', 'Cardiología',
    'Dietética y nutrición', 'Endocrinología y nutrición', 'Enfermería', 'Fertilidad y reproducción humana',
    'Fisioterapia y rehabilitación', 'Geriatría', 'Ginecología y Obstetricia', 'Hematología'
  ]

  const cards = [
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    },
    {
      title: 'Consulta de dermatología',
      subtitle: 'Incluido en Eva Salud',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur',
      price: '500'
    }
  ]

  const total_pages = 8
  const current_page = 6

  // const isDesktop = useMediaQuery({ minWidth: 1024 })
  const showFilter = useMediaQuery({ minWidth: 900 })

  return (
    <Layout>
      <main className="container">

        <Filter
          items={[
            <Fragment key={1}>
              <Work />
              Categoria
              <AngleDown />
            </Fragment>,

            <Fragment key={2}>
              <Ubication />
              Ubicación
              <AngleDown />
            </Fragment>,

            <Fragment key={3}>
              <KeyNumbers />
              Busca por servicio...
            </Fragment>
          ]}
        />

        <div className={styles.filter_head}>
          <div className={styles.left}>

            <h2>Filtros Avanzado</h2>
            <h3>Reset</h3>
            <h3>Visualizando 0-12 de 80 Consultas Médicas </h3>
          </div>

          <div className={styles.selects_container}>
            <div className={styles.select2}>

              <p>Cantidad:</p>
              <strong>12</strong>
              <AngleDown />

            </div>

            <div className={styles.select2}>

              <p>Ordenar por:</p>
              <strong>Centros incluidos primero</strong>
              <AngleDown />

            </div>

            <div className={styles.filter_head_buttons}>

            </div>
          </div>
        </div>

        <div className={styles.content}>

          {
            showFilter && (
              <div className={styles.filter}>

                <FilterSection
                  title={'Consultas Médicas'}
                  items={consultas}
                />

              </div>
            )
          }

          <div>
            <div className={styles.cards_container}>

              {

                cards.map((card, index) => {
                  return (
                    <Fragment key={index}>

                      <Card1>
                        <h1>hpoal mundo</h1>
                        {/* <div className={styles.img_container}>
                        <img src="" alt="" />
                      </div>

                      <div className={styles.card_content}>

                        <h4 className={styles.title}>{card.title}</h4>
                        <span>{card.subtitle}</span>
                        <p className={styles.description}>{card.description}</p>

                        <a href="" className={styles.read_more}>
                          Leer más <AngleDown stroke='var(--primary-500)' />
                        </a>

                        <div className={styles.price_section}>
                          <div>
                            <span>Desde</span>
                            <strong> 500€</strong>
                          </div>

                          <Button>Ver Centros</Button>
                        </div>

                      </div> */}
                      </Card1>
                    </Fragment>


                  )
                })
              }

            </div>

            <div className={styles.pagination}>
              <button className={styles.circle_button}>
                <AngleLeft />
              </button>

              <div className={styles.pages}>
                {
                  Array(total_pages).fill().map((_, i) => {

                    return (
                      <span key={i}>{i + 1}</span>
                    )
                  })
                }
              </div>

              <button className={styles.circle_button}>
                <AngleRight />
              </button>
            </div>
          </div>

        </div>

        <Blog />

        <Subscribe />

      </main>
    </Layout>
  );
};

export default Consultation;
