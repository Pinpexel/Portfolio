import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { pinpexelLogo, menu, close } from "../assets";
import useConstants from "../constants/useConstants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { navLinks } = useConstants();

  // ── Scroll handler ────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Language toggle ───────────────────────────────────────────────────────
  const toggleLanguage = () => {
    const next = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(next);
    // Apply RTL / LTR to the entire document
    document.documentElement.dir  = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };

  const isArabic = i18n.language === "ar";

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* ── Brand ── */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={pinpexelLogo}
            alt="PinPexel logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            PinPexel&nbsp;
            <span className="sm:block hidden">| Tech Agency</span>
          </p>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Language toggle button */}
          <li>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200 font-bold text-[16px] tracking-wider"
              title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
            >
              {isArabic ? "EN" : "AR"}
            </button>
          </li>
        </ul>

        {/* ── Mobile menu ── */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          {/* Language toggle (mobile) */}
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-md border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200 font-bold text-[13px]"
          >
            {isArabic ? "EN" : "AR"}
          </button>

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
