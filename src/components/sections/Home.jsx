import React from 'react';
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#faf8f5] overflow-hidden"
    >
      {/* Glassmorphism Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#FFE600]/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE600]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-6 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1.5 glass-light rounded-full text-xs font-medium text-black/60 border border-black/5"
        >
          👋 Available for opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-black leading-tight"
        >
          <ReactTyped
            strings={["Hi, I'm Ankit Hazra"]}
            typeSpeed={90}
            backSpeed={50}
            loop={2}
            showCursor={true}
            cursorChar="|"
            className="text-black"
          />
        </motion.h1>

        {/* Highlight Divider */}
        <motion.div 
          className="w-20 h-1 bg-[#FFE600] mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-black/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I'm a passionate developer with expertise in full-stack web solutions.
          I focus on building responsive, efficient, and maintainable applications.
          My aim is to create digital experiences that combine speed, functionality,
          and simplicity while ensuring users enjoy seamless interactions.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-black/20 text-xs font-medium tracking-wider uppercase">
            Scroll to explore
          </span>
          <div className="w-5 h-8 border-2 border-black/20 rounded-full flex justify-center pt-1.5">
            <motion.div 
              className="w-1 h-2 bg-[#FFE600] rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;