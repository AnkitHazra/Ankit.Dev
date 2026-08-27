import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      title: "Hirevity - AI Powered Job Portal",
      desc: "AI-powered job portal using the MERN stack with dashboards for candidates and recruiters and ATS resume analysis with scoring, keyword matching, and AI recommendations",
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
    },
    {
      title: "Mentivra - JEE NEET Preparation Platform",
      desc: "AI-powered and SEO optimized competitive exam preparation platform using the MERN stack with structured question and answers with AI suggestions and insights.",
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
    },
    {
      title: "Social Media Backend",
      desc: "A robust backend API for a social media platform built with Node.js, Express, and MongoDB. Supports authentication, posts, uploads, and more.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Cloudinary"],
      link: "https://github.com/AnkitHazra/Social-media-backend",
    },
    {
      title: "Sign Language Detection to Audio",
      desc: "ML-powered real-time Sign Language to Speech system using Python, YOLOv8, and pyttsx3, supporting alphabets, digits, and phrases.",
      tech: ["Python", "OpenCV", "YOLO", "Pyttsx3"],
      link: "https://github.com/AnkitHazra/Sign-Language-Detection-To-Audio-Conversion",
    },
    {
      title: "Face Recognition Attendance System",
      desc: "Captures live video feed, detects & recognizes faces, and records attendance with timestamp.",
      tech: ["Python", "OpenCV", "NumPy"],
      link: "https://github.com/AnkitHazra/Face-Recognition-Attendance-System",
    },
    {
      title: "Real-Time Location Tracker",
      desc: "Tracks & displays real-time user locations on an interactive map with Socket.io.",
      tech: ["Socket.IO", "Express.js", "Node.js", "Leaflet.js"],
      link: "https://realtimetracker.ankithazra.online/",
    },
    {
      title: "Chess Game",
      desc: "Realtime multiplayer chess game with spectators support, deployed on Render.",
      tech: ["Socket.IO", "Express.js", "Node.js", "Chess.js"],
      link: "https://chess.ankithazra.online/",
    },
    {
      title: "Crop-Clinic Landing Page",
      desc: "Frontend of an AI Plant Disease Detection platform with modern responsive UI.",
      tech: ["React", "TailwindCSS", "Vite"],
      link: "https://cropclinic.ankithazra.online/",
    },
    {
      title: "AI Traffic Cop",
      desc: "An intelligent, automated traffic monitoring system integrating three AI models—Speed Monitoring, Helmet Detection, and Red-Light Violation.",
      tech: ["Python", "OpenCV", "YOLOv8", "HTML/CSS"],
      link: "https://github.com/AnkitHazra/AI-TRAFFIC-COP",
    },
    {
      title: "Weather App",
      desc: "Experience realtime weather forecast in a minimal interface.",
      tech: ["HTML5", "CSS", "JavaScript"],
      link: "https://weather.ankithazra.online/",
    },
    {
      title: "QR Code Generator",
      desc: "A simple application to share and download QR code generated from link.",
      tech: ["Python", "HTML/CSS", "Flask"],
      link: "https://qr-generator-1-twey.onrender.com/",
    },
    {
      title: "BMI Calculator",
      desc: "Calculate health metrics instantly with minimalistic web interface.",
      tech: ["HTML5", "CSS", "JavaScript"],
      link: "https://bmi.ankithazra.online/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-4 text-black text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          className="h-1 bg-[#FFE600] mx-auto mb-12 rounded-full"
        />

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass-light rounded-2xl p-6 border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_40px_rgba(255,230,0,0.08)] hover:border-[#FFE600]/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-[#FFE600] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-black/60 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((tech, key) => (
                    <span
                      key={key}
                      className="bg-white/40 backdrop-blur-sm text-black/60 py-1 px-2.5 rounded-full text-[10px] font-medium border border-black/5 transition-all duration-300 group-hover:bg-[#FFE600]/10 group-hover:border-[#FFE600]/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-white/40 backdrop-blur-sm text-black/40 py-1 px-2.5 rounded-full text-[10px] font-medium border border-black/5">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-black/60 hover:text-[#FFE600] transition-all duration-300 group-hover:gap-3"
              >
                <span>View Project</span>
                <span className="text-lg">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/AnkitHazra?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            View More Projects <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;
