import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-6xl font-extrabold mb-12 text-center 
            bg-gradient-to-r from-cyan-300 to-blue-500  
            bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent 
            drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
            transition-all duration-500 ease-in-out 
            hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(59,130,246,1)] 
            hover:from-blue-400 hover:to-cyan-400"
        >
          Featured Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Social Media Backend",
              desc: "A robust backend API for a social media platform built with Node.js, Express, and MongoDB. Supports authentication, posts, uploads, and more.",
              tech: ["Node.js", "Express.js", "MongoDB", "Postman", "JWT", "Bcrypt", "Cloudinary", "Multer"],
              link: "https://github.com/AnkitHazra/Social-media-backend",
            },
            {
              title: "Sign Language Detection to Audio Conversion",
              desc: "ML-powered real-time Sign Language to Speech system using Python, YOLOv8, and pyttsx3, supporting alphabets, digits, and phrases.",
              tech: ["Python", "OpenCV", "YOLO", "Pyttsx3"],
              link: "https://github.com/AnkitHazra/Sign-Language-Detection-To-Audio-Conversion",
            },
            {
              title: "Face Recognition Attendance System",
              desc: "Captures live video feed, detects & recognizes faces, and records attendance with timestamp.",
              tech: ["Python", "OpenCV", "Numpy"],
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
          ].map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 150} // staggered effect
              className="p-6 rounded-xl border border-blue-500/20 
                bg-black/30 backdrop-blur-sm 
                shadow-[0_0_15px_rgba(59,130,246,0.4)]
                hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] 
                hover:border-blue-500/40 hover:-translate-y-1
                transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-3 text-white 
                group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 
                      rounded-full text-sm 
                      transition-all duration-300
                      hover:bg-blue-500/20 hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-medium relative inline-block
                  hover:text-white hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]
                  transition-all duration-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <a
            data-aos="zoom-in"
            data-aos-delay="200"
            href="https://github.com/AnkitHazra?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-2xl font-semibold text-lg 
              bg-blue-500 text-white relative overflow-hidden 
              transition-all duration-300 
              hover:scale-105
              hover:shadow-[0_0_20px_rgba(59,130,246,0.8),0_0_40px_rgba(59,130,246,0.6)]
              hover:bg-cyan-100 hover:text-blue-700
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400 
              before:opacity-0 before:transition-opacity before:duration-500
              hover:before:opacity-20
            "
          >
            View More Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
