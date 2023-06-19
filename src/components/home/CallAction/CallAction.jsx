import styles from "./CallAction.module.css";
import decesos_callaction from "@assets/imgs/decesos_callaction.webp";
// import CallCardForm from 'components/UI/CallCardForm/CallCardForm';
import { useState } from "react";
import { useLanguage } from "@context/LanguageContext/useLanguage";
import { CallActionText } from "@mocks/Pages/Home";
import { Text18, Text20 } from "@UI/Tags/Texts";
import { Title45 } from "@UI/Tags/Titles";
import Button from "@UI/ButtonDecesos/Button";
import Componente1 from "@UI/Componente1/Componente1";

const CallAction = () => {
  const { language } = useLanguage();
  const content = CallActionText[language];

  return (
    <section className={`${styles.call_action} container`} id="callaction">
      <div className={styles.content}>
        <Title45>{content.title}</Title45>
        <div className={styles.margin}>
          <Text20>{content.description}</Text20>
        </div>
        {/* <div className={styles.date}>
					<Text18>{content.schedule[0]}</Text18>
					<Text18>{content.schedule[1]}</Text18>
				</div> */}

        <Componente1>
          <Button>{content.buttons[0].text}</Button>
        </Componente1>
      </div>

      <div className={styles.images_container}>
        <img src={decesos_callaction} alt={""} />
      </div>

      {/* {
				isOpenModalCall && <CallCardForm setOpenModal={setIsOpenModalCall} setModalType={() => { }} />
			} */}
    </section>
  );
};

export default CallAction;
