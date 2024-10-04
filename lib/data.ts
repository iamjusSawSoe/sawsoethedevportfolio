import moviesmisImg from "@/public/moviesmis_app.png";
import ssbImg from "@/public/ssb_app.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "Edinburgh, Scotland(UK)",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Developer",
    location: "Yangon, Myanmar",
    description:
      "I worked as a frontend developer for 1 and half years in Consumer Good Myanmar Company. I learnt deeply understood about Angular and React Framework.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Associate Developer",
    location: "Yangon, Myanmar",
    description:
      "I also work as Associate developer for 6 months in Partner Associates Int’l Co., Ltd. In this company, I upskilled to fullstack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Frontend Developer",
    location: "Yangon, Myanmar",
    description:
      "I'm now a Frontend Developer working in Citizen Pays. My stack includes React, Next.js, Angular, TypeScript, Tailwind, Node.js and Express.js and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Moviesmis",
    description:
      "MoviesMis is an app for browsing movies and TV series, showing titles, ratings, and release dates. It features a responsive design with light and dark modes.",
    tags: ["React", "Next.js", "TMDB", "Tailwind", "Redux", "Framer Motion"],
    imageUrl: moviesmisImg,
    link: "https://moviesmis.vercel.app/",
  },
  {
    title: "SSB Portal ",
    description:
      "The SSB Myanmar portal is a public-facing platform for social security services. I developed an internal system for its department use across Myanmar, which is not accessible to the public.",
    tags: ["Angular", "TypeScript", "Rxjs", "DevExtreme UI"],
    imageUrl: ssbImg,
    link: "https://ssb.gov.mm/portal/home",
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "Tailwind",
  "JQuery",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Redux",
  "Rxjs",
  "Jest",
  "Node.js",
  "MongoDB",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub Action",
  "Docker",
  "Framer Motion",
  "Bootstrap",
  "Material UI",
  "Ant Design UI",
] as const;
