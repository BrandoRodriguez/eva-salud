import styles from "../consultation/Consultation.module.css";
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
import { CardsText, FilterSectionsText } from "@mocks/Pages/Centers";
import brand1 from '@assets/brands/brand1.png'
import Professional from "@components/icons/Professional";
import Card1 from "@UI/Card1/Card1";

const Centers = () => {

  // const { language } = useLanguage();
  // const content = HeaderSectionText[language];

  const FilterSections = FilterSectionsText['es']
  const cards = CardsText['es']

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
                {
                  FilterSections.map((section, index) => {
                    return (
                      <FilterSection
                        key={index}
                        title={section.title}
                        items={section.items}
                      />
                    )
                  })
                }


              </div>
            )
          }
          <div>
            <div className={styles.cards_container}>

              {

                cards.map((card, index) => {
                  return (
                    <Card1 key={index}>

                    </Card1>
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

export default Centers;
