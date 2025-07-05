import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Lina Xiang",
    company: "Google",
    avatar: "/avatar1.jpg",
    text: "Academy played a huge role in my journey to Google! The expert tutors helped me master problem-solving and coding, making my dream job a reality.",
    bg: "bg-blue-100",
  },
  {
    name: "Bobby Rock",
    company: "Meta",
    avatar: "/avatar2.jpg",
    text: "From struggling in math to getting into MIT and later joining Facebook, Academy shaped my academic journey. Highly recommend it!",
    bg: "bg-green-100",
  },
];

const SuccessStories = () => (
  <section className="w-full flex justify-center py-12 sm:py-16 px-4 sm:px-6">
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 mx-auto">
      {/* Left: Student Image with background */}
      <div className="flex-1 flex justify-center items-center relative mb-8 md:mb-0 w-full">
        <div className="absolute -z-10 left-0 top-0 w-64 h-80 bg-green-50 rounded-3xl" />
        {/* Abstract shapes */}
        <div className="absolute left-8 top-8 text-yellow-300 text-5xl opacity-40 select-none">★</div>
        <div className="absolute left-24 top-32 text-blue-200 text-4xl opacity-30 select-none">●</div>
        <Image
          src="/test.png"
          alt="Successful student"
          width={320}
          height={320}
          className="rounded-2xl z-10 object-cover w-full max-w-xs md:max-w-[320px]"
        />
      </div>
      {/* Right: Testimonials */}
      <div className="flex-1 flex flex-col gap-6 text-center md:text-left w-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
          <span className="text-blue-700">Success</span> Stories from Our Students
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-2">
          Hear from our students who have transformed their learning journey with Academy!
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {testimonials.map((t, i) => (
            <div key={i} className={`flex-1 rounded-2xl p-5 ${t.bg} shadow flex flex-col gap-2 w-full max-w-md mx-auto`}>
              <div className="flex items-center gap-3 mb-2">
                <Image src={t.avatar} alt={t.name} width={36} height={36} className="rounded-full w-9 h-9" />
                <div>
                  <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.company}</div>
                </div>
              </div>
              <div className="text-gray-700 text-sm">{t.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SuccessStories; 