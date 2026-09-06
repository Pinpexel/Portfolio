/**
 * useConstants.js
 *
 * WHY A HOOK INSTEAD OF A PLAIN OBJECT?
 * ──────────────────────────────────────────────────────────────────────────────
 * The constants in this app (services, projects, testimonials, navLinks) contain
 * display text that needs to be translated. Plain JS objects are evaluated once
 * at import time — before i18next knows the active language — so they can never
 * be reactive to language changes.
 *
 * A React hook (useConstants) is called during every render, so it always reads
 * the current value of t() for the active language.  When the user toggles
 * between EN and AR, every component re-renders and receives fresh translations
 * automatically — zero extra wiring needed.
 * ──────────────────────────────────────────────────────────────────────────────
 */

import { useTranslation } from "react-i18next";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  ecommerce,
  laravel,
  agentArmy,
} from "../assets";

const useConstants = () => {
  const { t } = useTranslation();

  // ── Navigation ─────────────────────────────────────────────────────────────
  const navLinks = [
    { id: "",          title: t("nav_home") },
    { id: "about",     title: t("nav_services") },
    { id: "work",      title: t("nav_projects") },
    { id: "feedbacks", title: t("nav_clients") },
    { id: "contact",   title: t("nav_contact") },
  ];

  // ── Services ───────────────────────────────────────────────────────────────
  const services = [
    { title: t("svc_1"), icon: web },
    { title: t("svc_2"), icon: creator },
    { title: t("svc_3"), icon: mobile },
    { title: t("svc_4"), icon: backend },
  ];

  // ── Technologies (labels only, no translation needed) ─────────────────────
  const technologies = [
    { name: "HTML 5",       icon: html },
    { name: "CSS 3",        icon: css },
    { name: "JavaScript",   icon: javascript },
    { name: "TypeScript",   icon: typescript },
    { name: "React JS",     icon: reactjs },
    { name: "Redux Toolkit",icon: redux },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS",      icon: nodejs },
    { name: "MongoDB",      icon: mongodb },
    { name: "Three JS",     icon: threejs },
    { name: "git",          icon: git },
    { name: "figma",        icon: figma },
    { name: "docker",       icon: docker },
  ];

  // ── Experiences (kept for compatibility, empty for agency) ─────────────────
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js.",
        "Collaborating with cross-functional teams to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js.",
        "Collaborating with cross-functional teams to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js.",
        "Collaborating with cross-functional teams to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js.",
        "Collaborating with cross-functional teams to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback.",
      ],
    },
  ];

  // ── Testimonials ───────────────────────────────────────────────────────────
  const testimonials = [
    {
      testimonial: t("testimonial_1"),
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial: t("testimonial_2"),
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial: t("testimonial_3"),
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  // ── Projects (descriptions are English-only for now; add keys when ready) ──
  const projects = [
    {
      name: "PHP eCommerce Platform",
      description:
        "A fully functional eCommerce website built with pure PHP, MySQL, and Bootstrap. Includes a customer-facing store and a complete admin dashboard for managing products and users.",
      tags: [
        { name: "PHP",       color: "blue-text-gradient" },
        { name: "MySQL",     color: "green-text-gradient" },
        { name: "Bootstrap", color: "pink-text-gradient" },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Laravel Web Application",
      description:
        "A robust web application built with the Laravel framework, featuring a powerful dependency injection container, database ORM, and secure routing.",
      tags: [
        { name: "Laravel", color: "blue-text-gradient" },
        { name: "PHP",     color: "green-text-gradient" },
        { name: "Backend", color: "pink-text-gradient" },
      ],
      image: laravel,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ultimate Media & Ads Agent Army",
      description:
        "A complete automation system featuring a team of 9 AI agents managed directly via Telegram. It integrates Generative AI for creating cinematic images and videos, allows on-the-go control of Facebook and Instagram ad budgets, and automatically manages emails, calendars, and documents.",
      tags: [
        { name: "automation",  color: "blue-text-gradient" },
        { name: "ai-agents",   color: "green-text-gradient" },
        { name: "telegram-bot",color: "pink-text-gradient" },
      ],
      image: agentArmy,
      source_code_link: "https://github.com/",
    },
  ];

  return { navLinks, services, technologies, experiences, testimonials, projects };
};

export default useConstants;
