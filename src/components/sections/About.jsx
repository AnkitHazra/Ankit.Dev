import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const neonStyles = {
    languages: { border: "border-blue-500/20", shadow: "shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]", text: "text-blue-400", bg: "bg-blue-500/10 hover:bg-blue-500/20" },
    frameworks: { border: "border-cyan-500/20", shadow: "shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]", text: "text-cyan-400", bg: "bg-cyan-500/10 hover:bg-cyan-500/20" },
    libraries: { border: "border-purple-500/20", shadow: "shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]", text: "text-purple-400", bg: "bg-purple-500/10 hover:bg-purple-500/20" },
    databases: { border: "border-green-500/20", shadow: "shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)]", text: "text-green-400", bg: "bg-green-500/10 hover:bg-green-500/20" },
    tools: { border: "border-pink-500/20", shadow: "shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.8)]", text: "text-pink-400", bg: "bg-pink-500/10 hover:bg-pink-500/20" }
  };

  const languages = ["C", "C++", "Java", "Python", "TailwindCSS", "HTML/CSS", "Javascript"];
  const framework = ["React", "Node.js", "Express.js", "Tailwind CSS"];
  const library = ["Pandas", "NumPy", "Matplotlib", "OpenCV", "YOLO Ultralytics"];
  const db = ["MongoDB", "MySQL"];
  const devTools = ["Git", "Github", "Google Colab", "VS Code", "PyCharm", "IntelliJ"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">

        {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-600 bg-clip-text text-transparent text-center drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] hover:scale-105 transform-content duration-300 "
        >
          About Me
        </h2>

        {/* Social Links */}
        <div data-aos="zoom-in" data-aos-delay="200" className="flex justify-center gap-8 mb-15 mt-15">
          {[
            { icon: <FaGithub />, link: "https://github.com/AnkitHazra" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hazraankit2005/" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/Ankit_Hazra/" },
            { icon: <FaTwitter />, link: "https://x.com/hazraAnkit790" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/hazra_ankit1/" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100093854046682" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 text-3xl transition-transform transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Introduction */}
        <div data-aos="fade-up" data-aos-delay="400" className="rounded-xl p-6 bg-black/30 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <p className="text-gray-100 mb-6 text-2xl leading-relaxed">
            I’m <strong className="text-cyan-400">Ankit Hazra</strong>, a full-stack and AI developer from
            <strong className="text-blue-400"> IEM Kolkata</strong>, passionate about solving complex problems and
            building applications that deliver real impact. My expertise includes React, modern JavaScript,
            backend development using Node.js & Express, and AI/ML experimentation with Python.
            <br /><br />
            My goal is to build clean, maintainable, scalable technology — from machine-learning tools to
            production-ready web applications.
          </p>

          {/* Skills */}
          <p className="text-gray-200 mb-6 text-lg">
            I work across the full development cycle: ideation, prototyping, UI design, API engineering,
            database structuring, deployment, cloud integration, and performance optimization.
            I love experimenting with emerging technologies, robotics, automation, and real-world software
            engineering.  
          </p>

          {/* Hard Skill Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Languages */}
            <div className={`rounded-xl p-6 border ${neonStyles.languages.border} ${neonStyles.languages.shadow}`}>
              <h3 className={`text-xl font-bold mb-4 ${neonStyles.languages.text}`}>Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((tech, key) => (
                  <span key={key} className={`${neonStyles.languages.bg} ${neonStyles.languages.text} py-1 px-3 rounded-full text-sm`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className={`rounded-xl p-6 border ${neonStyles.frameworks.border} ${neonStyles.frameworks.shadow}`}>
              <h3 className={`text-xl font-bold mb-4 ${neonStyles.frameworks.text}`}>Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {framework.map((tech, key) => (
                  <span key={key} className={`${neonStyles.frameworks.bg} ${neonStyles.frameworks.text} py-1 px-3 rounded-full text-sm`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Libraries */}
            <div className={`rounded-xl p-6 border ${neonStyles.libraries.border} ${neonStyles.libraries.shadow}`}>
              <h3 className={`text-xl font-bold mb-4 ${neonStyles.libraries.text}`}>AI / Data Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {library.map((tech, key) => (
                  <span key={key} className={`${neonStyles.libraries.bg} ${neonStyles.libraries.text} py-1 px-3 rounded-full text-sm`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className={`rounded-xl p-6 border ${neonStyles.databases.border} ${neonStyles.databases.shadow}`}>
              <h3 className={`text-xl font-bold mb-4 ${neonStyles.databases.text}`}>Databases</h3>
              <div className="flex flex-wrap gap-2">
                {db.map((tech, key) => (
                  <span key={key} className={`${neonStyles.databases.bg} ${neonStyles.databases.text} py-1 px-3 rounded-full text-sm`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Dev Tools */}
            <div className={`rounded-xl p-6 border ${neonStyles.tools.border} ${neonStyles.tools.shadow} md:col-span-2`}>
              <h3 className={`text-xl font-bold mb-4 ${neonStyles.tools.text}`}>Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {devTools.map((tech, key) => (
                  <span key={key} className={`${neonStyles.tools.bg} ${neonStyles.tools.text} py-1 px-3 rounded-full text-sm`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          
          {/* Education */}
          <div data-aos="flip-left" className="p-6 rounded-xl border border-purple-500/20 bg-black/30 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Institute Of Engineering & Management, Kolkata</strong>
                <p>B.Tech in Electrical Engineering (2023-2027)</p>
              </li>
              <li>Learning Data Structures & Algorithms, Web Technologies & Machine Learning.</li>
              <li>
                <strong>Techno India Group Public School, Bolpur (2021-23)</strong>
              </li>
              <li>
                <strong>St. Teresa's School, Bolpur (ICSE)</strong>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div data-aos="flip-right" className="p-6 rounded-xl border border-green-500/20 bg-black/30 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
            <h3 className="text-xl font-bold mb-4 text-green-400">Work Experience</h3>
            <p className="text-gray-300 leading-relaxed">
              Completed a research internship at <strong>IIEST Shibpur</strong> where I developed an
              AI-powered sign-language recognition system with real-time speech synthesis,
              improving accessibility and bridging communication barriers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
