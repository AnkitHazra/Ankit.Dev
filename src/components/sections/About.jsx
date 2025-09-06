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

                {/* Social Icons */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="flex justify-center gap-8 mb-15 mt-15"
                >
                    {[
                        { icon: <FaGithub />, link: "https://github.com/AnkitHazra" },
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hazraankit2005/" },
                        { icon: <SiLeetcode />, link: "https://leetcode.com/u/Ankit_Hazra/" },
                        { icon: <FaTwitter />, link: "https://x.com/hazraAnkit790" },
                        { icon: <FaInstagram />, link: "https://www.instagram.com/hazra_ankit1/" },
                        { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100093854046682" }
                    ].map((social, i) => (
                        <a key={i} href={social.link} target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 text-3xl transition-transform transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* About Card */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className={`rounded-xl p-6 bg-black/30 border ${neonStyles.languages.border} ${neonStyles.languages.shadow} transition-all`}
                >
                    <p className="text-gray-100 mb-6 text-2xl">
                        Passionate developer with expertise in building scalable web
                        applications and creating innovative solutions.
                    </p>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Languages */}
                        <div
                            data-aos="fade-right"
                            className={`rounded-xl p-6 border ${neonStyles.languages.border} ${neonStyles.languages.shadow} transition-all`}
                        >
                            <h3 className={`text-xl font-bold mb-4 ${neonStyles.languages.text}`}>Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((tech, key) => (
                                    <span key={key} className={`${neonStyles.languages.bg} ${neonStyles.languages.text} py-1 px-3 rounded-full text-sm transition`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Frameworks */}
                        <div
                            data-aos="fade-left"
                            className={`rounded-xl p-6 border ${neonStyles.frameworks.border} ${neonStyles.frameworks.shadow} transition-all`}
                        >
                            <h3 className={`text-xl font-bold mb-4 ${neonStyles.frameworks.text}`}>Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {framework.map((tech, key) => (
                                    <span key={key} className={`${neonStyles.frameworks.bg} ${neonStyles.frameworks.text} py-1 px-3 rounded-full text-sm transition`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Libraries */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="200"
                            className={`rounded-xl p-6 border ${neonStyles.libraries.border} ${neonStyles.libraries.shadow} transition-all`}
                        >
                            <h3 className={`text-xl font-bold mb-4 ${neonStyles.libraries.text}`}>Libraries</h3>
                            <div className="flex flex-wrap gap-2">
                                {library.map((tech, key) => (
                                    <span key={key} className={`${neonStyles.libraries.bg} ${neonStyles.libraries.text} py-1 px-3 rounded-full text-sm transition`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className={`rounded-xl p-6 border ${neonStyles.databases.border} ${neonStyles.databases.shadow} transition-all`}
                        >
                            <h3 className={`text-xl font-bold mb-4 ${neonStyles.databases.text}`}>Databases</h3>
                            <div className="flex flex-wrap gap-2">
                                {db.map((tech, key) => (
                                    <span key={key} className={`${neonStyles.databases.bg} ${neonStyles.databases.text} py-1 px-3 rounded-full text-sm transition`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Developer Tools */}
                        <div
                            data-aos="zoom-in-up"
                            data-aos-delay="300"
                            className={`rounded-xl p-6 border ${neonStyles.tools.border} ${neonStyles.tools.shadow} transition-all md:col-span-2`}
                        >
                            <h3 className={`text-xl font-bold mb-4 ${neonStyles.tools.text}`}>Developer Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {devTools.map((tech, key) => (
                                    <span key={key} className={`${neonStyles.tools.bg} ${neonStyles.tools.text} py-1 px-3 rounded-full text-sm transition`}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education & Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div
                        data-aos="flip-left"
                        className="p-6 rounded-xl border border-purple-500/20 bg-black/30 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-4 text-purple-400">🏫 Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li><strong>Institute Of Engineering & Management, Kolkata</strong><p>B.Tech in Electrical Engineering (2023-2027)</p></li>
                            <li>Relevant Coursework: Data Structures & Algorithm, Web Development, ...</li>
                            <li><strong>Techno India Group Public School, Bolpur</strong><p>Class XII , AISSCE (2021-2023)</p></li>
                            <li><strong>St. Teresa's School, Bolpur</strong><p>Class X , ICSE</p></li>
                        </ul>
                    </div>

                    <div
                        data-aos="flip-right"
                        className="p-6 rounded-xl border border-green-500/20 bg-black/30 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all"
                    >
                        <h3 className="text-xl font-bold mb-4 text-green-400">💼 Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Summer Intern at IIEST Shibpur (May-July 2025)</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Developed a real-time Sign Language to Speech conversion system</li>
                                    <li>Integrated speech synthesis for instant natural-sounding output, improving accessibility</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
