import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import useConstants from "../constants/useConstants";

const ServiceCard = ({ index, title, icon }) => {
  const { t } = useTranslation();

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[320px] flex justify-evenly items-center flex-col gap-6"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>

          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center rounded-xl border-2 border-brand-bright/60 bg-brand-blue/10 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-brand-blue hover:border-brand-bright hover:shadow-lg hover:shadow-brand-bright/30"
          >
            {t("contact_us_link")}
          </a>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { t, i18n } = useTranslation();
  const { services } = useConstants();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("services_sub")}</p>
        <h2 className={styles.sectionHeadText}>{t("services_head")}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t("services_body")}
      </motion.p>

      <div
        key={i18n.language}
        className="mt-20 flex flex-wrap gap-10"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
