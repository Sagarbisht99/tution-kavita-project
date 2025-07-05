"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedTooltipPreview } from "./Animinatedtoolkit";
import Link from "next/link";

const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-10 pb-0 w-full bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* Floating Icons */}
  
      

      {/* Avatars or animated element */}
      <AnimatedTooltipPreview />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-black leading-tight max-w-4xl mx-auto"
      >
        Find the Best <span className="text-blue-700">Tutors</span> &amp; Study
        Online with <span className="text-blue-700">Academy!</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-500 text-xs sm:text-base md:text-lg font-medium text-center max-w-2xl mt-6 mb-6 mx-auto"
      >
        Unlock your full potential with personalized learning from top expert
        tutors. Whether you prefer engaging live classes or dedicated 1-on-1
        tuition, Academy connects you with the best educators to help you
        succeed!
      </motion.p>

      {/* CTA Button */}
      <Link href="/contact">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-4 px-6 py-3 bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-full shadow hover:bg-blue-800 transition"
        >
          Join Academy Now
        </motion.button>
      </Link>

      {/* Hero Image with Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 w-full flex justify-center mt-2 mb-[-60px]"
      >
        <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-200 blur-2xl opacity-30 -z-10" />
        <Image
          src="/hero-image.png"
          alt="Happy students"
          width={700}
          height={500}
          className="rounded-xl object-cover w-full max-w-md md:max-w-lg"
        />
      </motion.div>

      {/* Metrics Section */}
      <div className="w-full flex justify-center mt-0">
        <div className="bg-black rounded-3xl flex flex-wrap justify-center gap-4 w-full max-w-4xl px-4 py-6 md:py-8 md:px-8 shadow-lg z-20">
          {[
            {
              label: "#1",
              desc: "Global Teaching E-Platform",
              color: "bg-blue-600",
              emoji: "🌐",
            },
            {
              label: "12K+",
              desc: "Students All Over The World in 2025!",
              color: "bg-white",
              emoji: "👨‍🎓",
            },
            {
              label: "3K+",
              desc: "Professional Tutor",
              color: "bg-white",
              emoji: "👩‍🏫",
            },
            {
              label: "15+",
              desc: "Affiliation With Educational Institute",
              color: "bg-white",
              emoji: "🏫",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              className={`${
                item.color
              } rounded-2xl p-6 flex flex-col items-center min-w-[120px] flex-1 max-w-[180px] ${
                item.color === "bg-white" ? "text-black" : "text-white"
              }`}
            >
              <span className="text-2xl font-bold flex items-center gap-1">
                <span>{item.emoji}</span> {item.label}
              </span>
              <span className="text-xs mt-2 text-center opacity-80">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
