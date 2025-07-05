import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 md:px-20 py-16">
      <div className="max-w-6xl mb-24 w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <Image
            src="/kavita.jpg"
            alt="Kavita Panwar - Teacher"
            width={400}
            height={400}
            className="object-cover h-72 w-72 md:h-96 md:w-96 rounded-xl shadow-2xl border-4 border-blue-500"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Teacher
          </h2>
          <h3 className="text-blue-500 font-semibold text-lg md:text-xl mb-4">
            Kavita Panwar
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
            I am a passionate teacher dedicated to helping students up to 8th
            grade excel in their studies. My goal is to make learning fun,
            engaging, and accessible for every child. With years of experience,
            I strive to inspire curiosity and confidence in my students,
            ensuring they build a strong academic foundation. You can reach me
            at{" "}
            <strong className="text-blue-600">panwarkavita117@gmail.com</strong>{" "}
            or call me at{" "}
            <strong className="text-blue-600">+91 97166 21325</strong>.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4 text-gray-600">
            {/* Add your social links here... */}
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Right: Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Full stack developer
          </h2>
          <h3 className="text-blue-500 font-semibold text-lg md:text-xl mb-4">
            Sagar Bisht
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
            I am a passionate full-stack developer obsessed with building
            high-performance web apps. I love solving problems, designing UIs,
            and pushing limits with technologies like React, Next.js, and
            MongoDB. You can reach me at{" "}
            <strong className="text-blue-600">sagarbishtz589@gmail.com</strong>{" "}
            or call me at{" "}
            <strong className="text-blue-600">+91 82873 25773</strong>.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4 text-gray-600">
            {/* Add your social links here... */}
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/sagar.png"
            alt="Sagar Bisht - Full stack developer"
            width={400}
            height={400}
            className="object-cover h-72 w-72 md:h-96 md:w-96 rounded-xl shadow-2xl border-4 border-blue-500"
            priority
          />
        </div>
      </div>
    </section>
  );
}
