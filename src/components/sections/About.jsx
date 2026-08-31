import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaCode,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaTools,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiGooglecolab,
  SiPycharm,
  SiIntellijidea,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

function About() {
  const skillSections = [
    {
      title: "Languages",
      icon: <FaCode />,
      items: [
        { name: "C", icon: <FaCode /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Frontend & Backend",
      icon: <FaReact />,
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "AI / Data",
      icon: <FaPython />,
      items: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: <FaCode /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "YOLO Ultralytics", icon: <FaPython /> },
      ],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
    },
    {
      title: "Developer Tools",
      icon: <FaTools />,
      full: true,
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Google Colab", icon: <SiGooglecolab /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "PyCharm", icon: <SiPycharm /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/AnkitHazra",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/hazraankit2005/",
      label: "LinkedIn",
    },
    {
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/Ankit_Hazra/",
      label: "LeetCode",
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/hazraAnkit790",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/hazra_ankit1/",
      label: "Instagram",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/profile.php?id=100093854046682",
      label: "Facebook",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-[#faf8f5]"
    >
      {/* Background decoration */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#FFE600]/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#FFE600]/10 blur-3xl"
        />

        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
      </div> */}

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#FFE600]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              Get to know me
            </span>

            <span className="w-8 h-[2px] bg-[#FFE600]" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-black">
            About <span className="text-[#FFE600]">Me</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="h-1 bg-black mx-auto mt-5 rounded-full"
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              variants={itemVariants}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                group relative
                w-11 h-11 md:w-12 md:h-12
                flex items-center justify-center
                rounded-xl
                bg-white
                border border-black/10
                text-black/50
                shadow-sm
                transition-all duration-300
                hover:text-black
                hover:border-[#FFE600]
                hover:shadow-[0_8px_25px_rgba(255,230,0,0.25)]
              "
            >
              <span className="relative z-10 text-lg md:text-xl transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </span>

              {/* Yellow hover fill */}
              <span
                className="
                  absolute inset-0 rounded-xl
                  bg-[#FFE600]
                  scale-0
                  group-hover:scale-100
                  transition-transform duration-300
                  origin-center
                  -z-0
                "
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -4,
            transition: { duration: 0.3 },
          }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            p-6 md:p-10
            bg-gradient-to-br
            from-[#fffdf0]
            via-[#fffbea]
            to-[#fff6b8]/60
            border border-[#FFE600]/30
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >
          {/* Card accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFE600] to-transparent" />

          {/* Decorative corner */}
          <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#FFE600]/15 blur-2xl" />

          <div className="relative z-10">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-[#FFE600] shadow-lg">
                  <FaCode />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                    Developer Profile
                  </p>

                  <h3 className="text-xl font-bold text-black">
                    Building with purpose.
                  </h3>
                </div>
              </div>

              <p className="text-black/80 text-base md:text-lg leading-relaxed">
                I'm{" "}
                <strong className="text-black font-bold">Ankit Hazra</strong>, a
                full-stack and AI developer from{" "}
                <strong className="text-black font-bold">IEM Kolkata</strong>,
                passionate about solving complex problems and building
                applications that deliver real impact. My expertise includes
                React, modern JavaScript, backend development using Node.js &
                Express, and AI/ML experimentation with Python.
              </p>

              <p className="text-black/60 mt-5 text-sm md:text-base leading-relaxed">
                I work across the full development cycle — from ideation and
                prototyping to UI design, API engineering, database structuring,
                deployment, cloud integration, and performance optimization. I
                enjoy experimenting with emerging technologies, robotics,
                automation, and real-world software engineering.
              </p>
            </motion.div>

            {/* Divider */}
            <div className="relative h-px bg-black/10 mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "25%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 top-0 h-px bg-[#FFE600]"
              />
            </div>

            {/* Skills Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-1">
                Technical Stack
              </p>

              <h3 className="text-2xl font-black text-black">
                Skills & Technologies
              </h3>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {skillSections.map((section, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.25 },
                  }}
                  className={`
                    group relative
                    overflow-hidden
                    rounded-2xl
                    p-5
                    bg-white/75
                    backdrop-blur-md
                    border border-black/10
                    shadow-sm
                    hover:border-[#FFE600]/70
                    hover:shadow-[0_12px_35px_rgba(255,230,0,0.16)]
                    transition-all duration-300
                    ${section.full ? "md:col-span-2" : ""}
                  `}
                >
                  {/* Hover accent */}
                  <div
                    className="
                      absolute top-0 left-0
                      w-0 h-[3px]
                      bg-[#FFE600]
                      group-hover:w-full
                      transition-all duration-500
                    "
                  />

                  {/* Section heading */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="
                        w-10 h-10
                        rounded-xl
                        flex items-center justify-center
                        bg-[#FFE600]/20
                        text-black
                        border border-[#FFE600]/30
                        group-hover:bg-[#FFE600]
                        group-hover:scale-110
                        transition-all duration-300
                      "
                    >
                      {section.icon}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-black">
                        {section.title}
                      </h4>

                      <p className="text-[10px] uppercase tracking-wider text-black/35">
                        {section.items.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Technology pills */}
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((tech, key) => (
                      <motion.span
                        key={key}
                        whileHover={{
                          scale: 1.06,
                          y: -2,
                        }}
                        className="
                          group/tech
                          inline-flex
                          items-center
                          gap-2
                          text-xs
                          font-medium
                          text-black/65
                          py-2
                          px-3
                          rounded-lg
                          bg-[#fafafa]
                          border border-black/8
                          cursor-default
                          hover:text-black
                          hover:bg-[#FFE600]/15
                          hover:border-[#FFE600]
                          transition-all duration-200
                        "
                      >
                        <span className="text-black/40 group-hover/tech:text-black transition-colors duration-200">
                          {tech.icon}
                        </span>

                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="w-16 h-[2px] bg-[#FFE600]" />
            <span className="w-2 h-2 rounded-full bg-black" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
