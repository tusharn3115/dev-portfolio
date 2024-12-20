"use client";
import memojiImg from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImg from "@/assets/images/grain.jpg";
import Stars from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import Sparkle from "@/assets/icons/sparkle.svg";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div id="home" className="py-32 md:py-40 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 mask-gradient">
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{
            backgroundImage: `url(${grainImg.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>
        <div className="size-[1620px] hero-ring"></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <Sparkle className="size-8 text-sky-500/70" />
        </HeroOrbit>
        <HeroOrbit
          size={450}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="6s"
        >
          <Sparkle className="size-5 text-sky-500/70" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-sky-500/50" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <Sparkle className="size-10 text-sky-500/70" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <Stars className="size-12 text-sky-400" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <Stars className="size-8 text-sky-400" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-3 rounded-full bg-sky-500/50" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <Sparkle className="size-14 text-sky-500/70" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-sky-500/50" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-65}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <Stars className="size-28 text-sky-400" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImg} className="size-[200px]" alt="img" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-600 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-larger rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-[55rem] mx-auto">
          <h1 className="heading text-4xl md:text-5xl font-semibold text-center mt-8 tracking-wide">
            Elevating Digital Interactions with Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            💻 I specialize in turning designs into fully functional,
            high-performance web applications. 🌟 Let&apos;s talk about your
            next project! 🚀
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-10">
          {/* Button 1: Explore My Work */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            className="inline-flex items-center gap-2 border cursor-pointer border-white/15 px-6 h-12 rounded-xl z-10"
            onClick={() => {
              const projectSection = document.getElementById("project");
              if (projectSection) {
                projectSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="font-semibold text-white">Explore my work</span>
            <motion.div
              whileHover={{ y: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowDown className="size-4" />
            </motion.div>
          </motion.button>

          {/* Button 2: Let's Connect */}
          <Link
            href="https://x.com/tushxr05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
              className="inline-flex items-center gap-2 border cursor-pointer border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-10"
            >
              <motion.span
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                👌
              </motion.span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};
