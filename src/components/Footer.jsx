import React from "react";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

import { pinpexelLogo } from "../assets";
import { socials } from "../constants";

const socialIcons = {
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  github: FaGithub,
};

const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-black-200 py-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-6">
        {/* ── Logo ── */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-3"
        >
          <img
            src={pinpexelLogo}
            alt="PinPexel Logo"
            className="w-12 h-12 object-contain rounded-full shadow-card"
          />
        </a>

        {/* ── Copyright ── */}
        <p className="text-secondary text-center text-[14px]">
          © 2026 PinPexel. All rights reserved.
        </p>

        {/* ── Social media icons ── */}
        <div className="flex items-center gap-4">
          {socials.map(({ id, name, link }) => {
            const Icon = socialIcons[id];
            return (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                title={name}
                className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-brand-bright/30 bg-tertiary text-brand-steel transition-all duration-300 hover:bg-brand-blue hover:border-brand-bright hover:text-white hover:shadow-lg hover:shadow-brand-bright/30"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;