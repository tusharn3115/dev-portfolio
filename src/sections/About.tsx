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
import TechIcon from "@/components/TechIcon";
import Map from "@/assets/images/map.png";
import Memoji from "@/assets/images/memoji-smile.png";
import AboutCardHeader from "@/components/AboutCardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "NextJS",
    iconType: NextJS,
  },
  {
    title: "Typescript",
    iconType: Typescript,
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
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <AboutCardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-48 mx-auto mt-2 md:mt-0">
                <Image src={BookImg} alt="Books" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <AboutCardHeader
                title="My Toolbox"
                description="Discover the technologies and tools I use to create exceptional
                digital experiences."
              />
              <ToolboxItems items={toolboxItems} />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <AboutCardHeader
                title="Beyond the Code"
                description="Dive into my interests and hobbies that extend beyond the world
                of coding."
                className="px-6 py-6"
              />

              <div className="relative flex-1">
                {Hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-cyan-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={Map}
                alt="Map"
                className="h-full w-full object-cover object-left-top md:object-center"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-cyan-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after-outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={Memoji} alt="Memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
