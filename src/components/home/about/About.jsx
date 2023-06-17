import styles from "./About.module.css";
import { AboutCard } from "../../../components";

const about = [
  {
    title: "Si tienes un problema médico",
    description: "Te asistimos de inmediato",
    image: "/images/about/1.png",
  },
  {
    title: "Si te sientes bien",
    description: "Te haremos sentir mejor",
    image: "/images/about/1.png",
  },
  {
    title: "Si tu familia está creciendo",
    description: "Te ayudamos a protegerlos",
    image: "/images/about/1.png",
  },
];

export const About = () => {
  return (
    <div className={`${styles.cardlist} container`}>
      {about.map((item, index) => (
        <AboutCard key={index} {...item} />
      ))}
    </div>
  );
};
