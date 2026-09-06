import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          to_name:    "PinPexel",
          from_email: form.email,
          to_email:   "contact@pinpexel.com",
          message:    form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert(t("contact_success"));
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(t("contact_error"));
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t("contact_sub")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact_head")}</h3>

        {/* ── Direct contact (lightweight subtitle, original layout untouched) ── */}
        <div className="mt-6 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8 text-[15px]">
          <a
            href="mailto:pinpexel@gmail.com"
            className="flex items-center gap-1 text-secondary transition-colors duration-300 hover:text-white"
          >
            <FaEnvelope className="shrink-0 text-brand-bright" />
            <span className="font-medium">pinpexel@gmail.com</span>
          </a>

          <div className="flex items-center gap-1">
            <a
              href="https://wa.me/962781144733"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-secondary transition-colors duration-300 hover:text-white"
            >
              <FaWhatsapp className="shrink-0 text-[16px] text-green-400" />
              <span dir="ltr" className="font-medium">0781144733</span>
            </a>
            <span className="text-brand-steel/40">|</span>
            <a
              href="https://wa.me/962789625727"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-secondary transition-colors duration-300 hover:text-white"
            >
              <FaWhatsapp className="shrink-0 text-[16px] text-green-400" />
              <span dir="ltr" className="font-medium">0789625727</span>
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact_name_label")}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact_name_ph")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact_email_label")}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact_email_ph")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact_msg_label")}
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact_msg_ph")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-brand-blue py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-brand-bright transition-colors duration-200"
          >
            {loading ? t("contact_sending") : t("contact_send")}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
