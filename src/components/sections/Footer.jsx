import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <footer className="bg-gradient-to-b from-gray-900 via-black to-black py-12 text-center relative">
            {/* Contact Info */}
            <div
                className="mb-10"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                    Feel free to reach out
                </h3>
                <p className="text-gray-300">
                    📧 <a href="mailto:hazraankit668@gmail.com" className="hover:text-cyan-400 transition">hazraankit668@gmail.com</a>
                </p>
                <p className="text-gray-300">
                    📧 <a href="mailto:ankit.hazra2023@iem.edu.in" className="hover:text-cyan-400 transition">ankit.hazra2023@iem.edu.in</a>
                </p>
                <p className="text-gray-300">
                    📞 <a href="tel:+917908618931" className="hover:text-cyan-400 transition">+91 7908618931</a>
                </p>
            </div>

            {/* Social Links */}
            <div
                className="flex justify-center space-x-8 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <a
                    href="https://github.com/AnkitHazra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-3xl transition transform hover:scale-125 
          hover:text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/in/ankithazra2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-3xl transition transform hover:scale-125 
          hover:text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://x.com/hazraAnkit790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-3xl transition transform hover:scale-125 
          hover:text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                >
                    <FaTwitter />
                </a>
            </div>

            {/* Footer Text */}
            <p
                className="text-gray-400 text-sm"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                © {new Date().getFullYear()}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                    Ankit Hazra
                </span>
                . All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
