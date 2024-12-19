"use client";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import GrainImg from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:negitushar923@gmail.com";
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-cyan-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImg.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="text-2xl md:text-3xl heading font-semibold">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to turn your vision into reality? Let&apos;s connect and
                explore how I can help you achieve your goals! 🚀
              </p>
            </div>
            <div>
              <motion.button
                onClick={handleEmailClick}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 10 }}
                className="text-white gap-2 bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl w-max border border-gray-900"
              >
                <motion.span
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  ✉️
                </motion.span>
                <span className="font-semibold">Contact Me</span>
                <ArrowUp className="size-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
