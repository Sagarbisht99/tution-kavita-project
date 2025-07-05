import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "💬",
    title: "Interactive Live Classes",
    desc: "Engage in real-time learning with expert tutors, ask questions, and participate in discussions for a dynamic learning experience.",
  },
  {
    icon: "⭐",
    title: "Expert Tutors",
    desc: "Learn from highly qualified, experienced educators who specialize in personalized teaching methods.",
  },
  {
    icon: "🏆",
    title: "Top Platform",
    desc: "A leading platform that connects students with expert tutors for personalized education anytime, anywhere.",
  },
];

const WhyChooseAcademy = () => (
  <section className="w-full flex justify-center py-12 sm:py-16 px-4 sm:px-6">
    <div className="bg-[#f8fafc] rounded-3xl shadow flex flex-col md:flex-row max-w-5xl w-full overflow-hidden gap-8 md:gap-0 mx-auto">
      {/* Left: Text */}
      <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center gap-4 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl text-black font-bold mb-2">
          Why Choose <span className="text-blue-700">Academy?</span>
        </h2>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Academy is an online learning platform that connects students with
          expert tutors for 1-on-1 tuition and live e-learning classes, making
          education flexible and accessible.
        </p>
        <ul className="flex flex-col gap-4 mb-6">
  {features.map((f) => (
    <li
      key={f.title}
      className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left"
    >
      <span className="text-2xl  md:mt-1">{f.icon}</span>
      <div>
        <div className="font-semibold text-gray-800">{f.title}</div>
        <div className="text-gray-500 text-sm">{f.desc}</div>
      </div>
    </li>
  ))}
</ul>

        <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center md:justify-start">
          <button className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition text-sm w-full sm:w-auto">
            Join for free
          </button>
          <button className="flex items-center justify-center text-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition text-sm w-full sm:w-auto">
            ▶️ Watch More
          </button>
        </div>
      </div>
      {/* Right: Image/Video */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-xs md:max-w-sm aspect-video rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
          {/* Replace with your own image or video */}
          <Image
            src="/video.jpg"
            alt="Why Choose Academy"
            width={320}
            height={200}
            className="object-cover w-full h-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/80 rounded-full p-3 shadow text-2xl">
              ▶️
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseAcademy;
