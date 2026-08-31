import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaServer,
  FaSignLanguage,
  FaUserCheck,
  FaMapMarkerAlt,
  FaChessKnight,
  FaLeaf,
  FaTrafficLight,
  FaCloudSun,
  FaQrcode,
  FaCalculator,
} from "react-icons/fa";

function Project() {
  const projects = [
    {
      title: "Hirevity - AI Powered Job Portal",
      desc: "AI-powered job portal using the MERN stack with dashboards for candidates and recruiters and ATS resume analysis with scoring, keyword matching, and AI recommendations.",
      tech: [
        "React.js",
        "Framer-Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Gemini API",
      ],
      link: "https://job.ankithazra.online/",
      icon: FaBriefcase,
    },
    {
      title: "Mentivra - JEE NEET Preparation Platform",
      desc: "AI-powered and SEO optimized competitive exam preparation platform using the MERN stack with structured questions, answers, AI suggestions, and insights.",
      tech: [
        "React.js",
        "Framer-Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Gemini API",
      ],
      link: "https://www.mentivra.site/",
      icon: FaGraduationCap,
    },
    {
      title: "Social Media Backend",
      desc: "A robust backend API for a social media platform built with Node.js, Express, and MongoDB. Supports authentication, posts, uploads, and more.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Cloudinary"],
      link: "https://github.com/AnkitHazra/Social-media-backend",
      icon: FaServer,
    },
    {
      title: "Sign Language Detection to Audio",
      desc: "ML-powered real-time Sign Language to Speech system using Python, YOLOv8, and pyttsx3, supporting alphabets, digits, and phrases.",
      tech: ["Python", "OpenCV", "YOLO", "Pyttsx3"],
      link: "https://github.com/AnkitHazra/Sign-Language-Detection-To-Audio-Conversion",
      icon: FaSignLanguage,
    },
    {
      title: "Face Recognition Attendance System",
      desc: "Captures live video feed, detects and recognizes faces, and records attendance automatically with timestamps.",
      tech: ["Python", "OpenCV", "NumPy"],
      link: "https://github.com/AnkitHazra/Face-Recognition-Attendance-System",
      icon: FaUserCheck,
    },
    {
      title: "Real-Time Location Tracker",
      desc: "Tracks and displays real-time user locations on an interactive map using Socket.IO and Leaflet.js.",
      tech: ["Socket.IO", "Express.js", "Node.js", "Leaflet.js"],
      link: "https://realtimetracker.ankithazra.online/",
      icon: FaMapMarkerAlt,
    },
    {
      title: "Chess Game",
      desc: "Realtime multiplayer chess game with spectators support, deployed on Render for seamless online gameplay.",
      tech: ["Socket.IO", "Express.js", "Node.js", "Chess.js"],
      link: "https://chess.ankithazra.online/",
      icon: FaChessKnight,
    },
    {
      title: "Crop-Clinic Landing Page",
      desc: "Frontend of an AI Plant Disease Detection platform featuring a modern, responsive, and interactive user interface.",
      tech: ["React", "TailwindCSS", "Vite"],
      link: "https://cropclinic.ankithazra.online/",
      icon: FaLeaf,
    },
    {
      title: "AI Traffic Cop",
      desc: "An intelligent automated traffic monitoring system integrating AI models for speed monitoring, helmet detection, and red-light violations.",
      tech: ["Python", "OpenCV", "YOLOv8", "HTML/CSS"],
      link: "https://github.com/AnkitHazra/AI-TRAFFIC-COP",
      icon: FaTrafficLight,
    },
    {
      title: "Weather App",
      desc: "Experience realtime weather forecasts through a clean and minimal interface designed for quick access to weather information.",
      tech: ["HTML5", "CSS", "JavaScript"],
      link: "https://weather.ankithazra.online/",
      icon: FaCloudSun,
    },
    {
      title: "QR Code Generator",
      desc: "A simple application to generate, share, and download QR codes directly from a provided link.",
      tech: ["Python", "HTML/CSS", "Flask"],
      link: "https://qr-generator-1-twey.onrender.com/",
      icon: FaQrcode,
    },
    {
      title: "BMI Calculator",
      desc: "Calculate BMI instantly through a minimalistic and responsive web interface.",
      tech: ["HTML5", "CSS", "JavaScript"],
      link: "https://bmi.ankithazra.online/",
      icon: FaCalculator,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
            Featured Projects
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="h-1 bg-[#FFE600] mx-auto mt-5 rounded-full"
          />
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {projects.map((project, idx) => {
            const Icon = project.icon;

            return (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="
                  group
                  relative
                  block
                  h-full
                  rounded-[20px]
                  overflow-hidden
                  border
                  border-[#F3F4F6]
                  bg-gradient-to-br
                  from-white
                  via-[#fffefb]
                  to-[#fffbea]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#FFE600]
                "
              >
                {/* Very Subtle Yellow Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -top-20
                    -right-20
                    w-40
                    h-40
                    rounded-full
                    bg-[#FFE600]/[0.06]
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#FFE600]/[0.10]
                  "
                />

                {/* Animated Yellow Top Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-[3px]
                    bg-[#FFE600]
                    origin-left
                    z-10
                  "
                />

                <div className="relative z-[1] p-6 min-h-[330px] flex flex-col">
                  {/* Icon + Project Number */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-[#FFE600]/15
                        border
                        border-[#FFE600]/30
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        group-hover:bg-[#FFE600]
                      "
                    >
                      <Icon className="text-black text-[17px]" />
                    </motion.div>

                    <span className="text-[10px] font-semibold tracking-[0.15em] text-black/25">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[18px] leading-[1.35] font-bold text-black mb-3 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-[14px] font-normal text-[#6B7280] leading-[1.6] line-clamp-2 mb-5">
                      {project.desc}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, key) => (
                        <span
                          key={key}
                          className="
                            bg-[#F3F4F6]
                            text-black/65
                            py-1.5
                            px-2.5
                            rounded-full
                            text-[10px]
                            uppercase
                            tracking-wide
                            font-medium
                            border
                            border-transparent
                            transition-all
                            duration-300
                            group-hover:bg-black
                            group-hover:text-white
                          "
                        >
                          {tech}
                        </span>
                      ))}

                      {project.tech.length > 4 && (
                        <span
                          className="
                            bg-[#F3F4F6]
                            text-black/45
                            py-1.5
                            px-2.5
                            rounded-full
                            text-[10px]
                            uppercase
                            tracking-wide
                            font-medium
                            transition-all
                            duration-300
                            group-hover:bg-black
                            group-hover:text-white
                          "
                        >
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Link */}
                  <div className="flex items-center justify-between mt-7 pt-5 border-t border-black/5">
                    <span className="text-[13px] font-semibold text-black/60 transition-colors duration-300 group-hover:text-black">
                      View Project
                    </span>

                    <motion.span
                      whileHover={{ x: 4 }}
                      className="
                        flex
                        items-center
                        justify-center
                        w-8
                        h-8
                        rounded-full
                        bg-black
                        text-white
                        text-sm
                        transition-all
                        duration-300
                        group-hover:bg-[#FFE600]
                        group-hover:text-black
                      "
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
        >
          <motion.a
            href="https://github.com/AnkitHazra?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              inline-flex
              items-center
              gap-3
              bg-black
              text-white
              rounded-full
              px-7
              py-3.5
              text-sm
              font-semibold
              shadow-lg
              shadow-black/10
              transition-all
              duration-300
              hover:shadow-xl
              hover:shadow-black/15
            "
          >
            View More Projects
            <motion.span whileHover={{ x: 4 }} className="text-lg leading-none">
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
