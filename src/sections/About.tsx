"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import BookImg from "@/assets/images/book.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import NextJS from "@/assets/icons/nextjs.svg";
import Typescript from "@/assets/icons/typescript.svg";
import Map from "@/assets/images/map.png";
import Memoji from "@/assets/images/memoji-smile.png";
import AboutCardHeader from "@/components/AboutCardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
    style: {},
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
    style: {},
  },
  {
    title: "CSS",
    iconType: CssIcon,
    style: {},
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
    style: {},
  },
  {
    title: "React",
    iconType: ReactIcon,
    style: {},
  },
  {
    title: "NextJS",
    iconType: NextJS,
    style: {},
  },
  {
    title: "Typescript",
    iconType: Typescript,
    style: {},
  },
];

const Hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "10%",
    top: "25%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "55%",
    top: "55%",
  },
  {
    title: "Anime",
    emoji: "🎌",
    left: "-5%",
    top: "50%",
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "5%",
    top: "75%",
  },
  {
    title: "Fitness",
    emoji: "💪",
    left: "45%",
    top: "85%",
  },
  {
    title: "Guitar",
    emoji: "🎸",
    left: "50%",
    top: "30%",
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="✨ Dive into my world to discover who I am, what I do, and the inspiration behind my work and passion. 🌟"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* my reads */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <AboutCardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-48 mx-auto mt-2 md:mt-0">
                <Image src={BookImg} alt="Books" />
              </div>
            </Card>

            {/* toolbox */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <AboutCardHeader
                title="My Toolbox"
                description="Discover the technologies and tools I use to create exceptional
                digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left"
                style={{ animationDuration: "30s" }}
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right"
                style={{ animationDuration: "15s" }}
              />
            </Card>
          </div>

          {/* hobbies */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <AboutCardHeader
                title="Beyond the Code"
                description="Dive into my interests and hobbies that extend beyond the world
                of coding."
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constrainRef}>
                {Hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex cursor-pointer items-center gap-2 px-6 bg-gradient-to-r from-cyan-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      backgroundColor: "#81E6D9", // Example hover color
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <motion.span
                      transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "linear",
                      }}
                    >
                      {hobby.emoji}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* map/ location */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={Map}
                alt="Map"
                className="h-full w-full object-cover object-left-top md:object-center"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after-outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 -z-20 animate-ping"
                  style={{ animationDuration: "2s" }}
                ></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 -z-10"></div>
                <Image src={Memoji} alt="Memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
