import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#faf8f5] overflow-hidden pt-20 sm:pt-24 md:pt-0 mt-10"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#FFE600]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-4 sm:px-6 max-w-4xl mx-auto w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 sm:mb-6 px-4 py-1.5 glass-light rounded-full text-xs font-medium text-black/60 border border-black/5"
        >
          🛡️ Available for opportunities
        </motion.div>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-3 sm:mb-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
            <ReactTyped
              strings={[
                "Hi, I'm Ankit Hazra",
                "Full Stack Developer",
                "AI/ML Enthusiast",
                "Problem Solver",
              ]}
              typeSpeed={60}
              backSpeed={30}
              backDelay={2000}
              loop={true}
              showCursor={true}
              cursorChar="▌"
              className="text-black"
            />
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-16 sm:w-20 h-1 bg-[#FFE600] mx-auto mb-6 sm:mb-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-black/70 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
        >
          Passionate software developer focused on building modern, scalable,
          and user-centric digital solutions. With a strong foundation in
          full-stack development, I enjoy transforming ideas into responsive,
          efficient, and maintainable applications. I'm also interested in
          machine learning and emerging technologies, constantly exploring new
          ways to solve complex problems and create meaningful digital
          experiences. My goal is simple: build technology that is fast,
          functional, intuitive, and impactful.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="btn-primary w-full sm:w-auto text-center justify-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-secondary w-full sm:w-auto text-center justify-center"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-black/20 text-[10px] sm:text-xs font-medium tracking-wider uppercase">
            Scroll to explore
          </span>
          <div className="w-4 h-6 sm:w-5 sm:h-8 border-2 border-black/20 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-1 h-1.5 sm:h-2 bg-[#FFE600] rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
