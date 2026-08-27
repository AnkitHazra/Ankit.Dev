import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function About() {
  const languages = ["C", "C++", "Java", "Python", "TailwindCSS", "HTML/CSS", "JavaScript"];
  const framework = ["React", "Node.js", "Express.js", "Tailwind CSS"];
  const library = ["Pandas", "NumPy", "Matplotlib", "OpenCV", "YOLO Ultralytics"];
  const db = ["MongoDB", "MySQL"];
  const devTools = ["Git", "GitHub", "Google Colab", "VS Code", "PyCharm", "IntelliJ"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-4 text-black text-center"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          className="h-1 bg-[#FFE600] mx-auto mb-8 rounded-full"
        />

        {/* Social Links */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12 mt-10"
        >
          {[
            { icon: <FaGithub />, link: "https://github.com/AnkitHazra" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hazraankit2005/" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/Ankit_Hazra/" },
            { icon: <FaTwitter />, link: "https://x.com/hazraAnkit790" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/hazra_ankit1/" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100093854046682" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/40 hover:text-[#FFE600] text-2xl md:text-3xl transition-all duration-300 hover:scale-125"
              whileHover={{ scale: 1.25, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Introduction Card */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`rounded-2xl p-6 md:p-8 glass-light mb-8 border border-white/20`}
        >
          <p className="text-black/80 mb-6 text-lg md:text-xl leading-relaxed">
            I'm <strong className="text-black">Ankit Hazra</strong>, a full-stack and AI developer from
            <strong className="text-black"> IEM Kolkata</strong>, passionate about solving complex problems and
            building applications that deliver real impact. My expertise includes React, modern JavaScript,
            backend development using Node.js & Express, and AI/ML experimentation with Python.
            <br /><br />
            My goal is to build clean, maintainable, scalable technology — from machine-learning tools to
            production-ready web applications.
          </p>

          <p className="text-black/60 mb-6 text-base md:text-lg leading-relaxed">
            I work across the full development cycle: ideation, prototyping, UI design, API engineering,
            database structuring, deployment, cloud integration, and performance optimization.
            I love experimenting with emerging technologies, robotics, automation, and real-world software
            engineering.
          </p>

          {/* Hard Skill Blocks */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Languages", items: languages },
              { title: "Frameworks", items: framework },
              { title: "AI / Data Libraries", items: library },
              { title: "Databases", items: db },
              { title: "Developer Tools", items: devTools, full: true }
            ].map((section, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className={`rounded-xl p-5 glass-dark border border-black/5 ${section.full ? 'md:col-span-2' : ''}`}
                whileHover={{ y: -2, transition: { duration: 0.3 } }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-black/40 mb-3">
                  {section.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((tech, key) => (
                    <span 
                      key={key} 
                      className="bg-white/40 backdrop-blur-sm text-black/70 text-xs py-1.5 px-3 rounded-full border border-black/5 hover:border-[#FFE600] hover:bg-[#FFE600]/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education & Experience */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className={`rounded-2xl p-6 glass-light border border-white/20`}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <h3 className="text-lg font-bold mb-4 text-black flex items-center gap-2">
              <span className="w-6 h-6 bg-[#FFE600] rounded-full inline-block"></span>
              Education
            </h3>
            <ul className="space-y-3 text-black/70">
              <li>
                <strong className="text-black">Institute Of Engineering & Management, Kolkata</strong>
                <p className="text-sm">B.Tech in Electrical Engineering (2023-2027)</p>
              </li>
              <li className="text-sm">Learning Data Structures & Algorithms, Web Technologies & Machine Learning.</li>
              <li>
                <strong className="text-black">Techno India Group Public School, Bolpur</strong>
                <p className="text-sm">(2021-23)</p>
              </li>
              <li>
                <strong className="text-black">St. Teresa's School, Bolpur</strong>
                <p className="text-sm">(ICSE)</p>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className={`rounded-2xl p-6 glass-light border border-white/20`}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <h3 className="text-lg font-bold mb-4 text-black flex items-center gap-2">
              <span className="w-6 h-6 bg-[#FFE600] rounded-full inline-block"></span>
              Experience
            </h3>
            <p className="text-black/70 leading-relaxed">
              Completed a research internship at <strong className="text-black">IIEST Shibpur</strong> where I developed an
              AI-powered sign-language recognition system with real-time speech synthesis,
              improving accessibility and bridging communication barriers.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs bg-[#FFE600]/10 text-black/70 px-3 py-1 rounded-full border border-[#FFE600]/20">AI/ML</span>
              <span className="text-xs bg-[#FFE600]/10 text-black/70 px-3 py-1 rounded-full border border-[#FFE600]/20">Research</span>
              <span className="text-xs bg-[#FFE600]/10 text-black/70 px-3 py-1 rounded-full border border-[#FFE600]/20">Accessibility</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;