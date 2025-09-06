import React, { useEffect } from 'react';
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // smooth timing
      easing: "ease-in-out", // natural easing
      once: false, // only animate once
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* 🔥 Content block zooms on load */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1600"
        className="text-center z-10 px-6"
      >
        {/* Heading */}
        <h1
          data-aos="fade-down"
          data-aos-delay="300"
          className="text-5xl md:text-7xl font-extrabold mb-6 
          bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 
          bg-[length:200%_200%] animate-gradient bg-clip-text 
          text-transparent leading-tight"
        >
          <ReactTyped
            strings={["Hi, I'm Ankit Hazra"]}
            typeSpeed={90}
            backSpeed={50}
            loop={2}
            showCursor={true}
          />
        </h1>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I’m a passionate developer with expertise in full-stack web solutions.
          I focus on building responsive, efficient, and maintainable applications.
          My aim is to create digital experiences that combine speed, functionality,
          and simplicity while ensuring users enjoy seamless interactions.
        </p>

        {/* Neon Buttons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#projects"
            data-aos="flip-left"
            data-aos-delay="900"
            className="relative px-8 py-3 rounded-xl font-semibold text-xl 
            text-blue-500 border-2 border-blue-500 
            shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6] 
            transition transform hover:-translate-y-1 
            hover:bg-cyan-100 hover:text-blue-800 
            hover:shadow-[0_0_20px_#3b82f6,0_0_40px_#3b82f6,0_0_60px_#3b82f6] 
            animate-pulse-neon"
          >
            View Projects
          </a>

          <a
            href="#contact"
            data-aos="flip-right"
            data-aos-delay="1100"
            className="relative px-8 py-3 rounded-xl font-semibold text-xl 
            text-blue-500 border-2 border-blue-500 
            shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6] 
            transition transform hover:-translate-y-1  
            hover:bg-cyan-100 hover:text-blue-800 
            hover:shadow-[0_0_20px_#3b82f6,0_0_40px_#3b82f6,0_0_60px_#3b82f6] 
            animate-pulse-neon"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
