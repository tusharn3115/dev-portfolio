'use client'
import Significo from "@/assets/images/project2.png";
import Rejouice from "@/assets/images/project3.png";
import ClinicCare from "@/assets/images/project1.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { motion } from "framer-motion";
import GrainImage from '@/assets/images/grain.jpg'

const portfolioProjects = [
  {
    company: "Significo Tech",
    year: "2024",
    title: "Significo - Healthcare Technology Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://significo-iota.vercel.app/",
    image: Significo,
  },
  {
    company: "REJOUICE Branding",
    year: "2024",
    title: "REJOUICE - Global Branding and Digital Design Agency",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://rejouice-peach.vercel.app/",
    image: Rejouice,
  },
  {
    company: "ClinicCare Health",
    year: "2024",
    title: "ClinicCare - Doctor's Appointment Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://clinic-care-three.vercel.app/",
    image: ClinicCare,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest text-center bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
            Real World Results
          </p>
        </div>
        <h2 className="text-3xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4">
          I develop interactive projects that deliver engaging, dynamic user
          experiences.
        </p>
        <div className="mt-10 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 "
            >
              <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url(${GrainImage.src})`}}></div>
              <div className="bg-gradient-to-r from-cyan-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-2" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li className="flex gap-2 text-sm text-white/50">
                    <CheckCircleIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>

              <motion.a href={project.link} target="_blank" className="relative z-20">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                >
                  <span>Visit Live Site</span>
                  <motion.div
                    whileHover={{ y: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowUp className="size-4" />
                  </motion.div>
                </motion.button>
              </motion.a>

              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
