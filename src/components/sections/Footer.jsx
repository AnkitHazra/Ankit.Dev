import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#faf8f5] py-16 text-center relative border-t border-black/5">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4 text-black">Let's Connect</h3>
          <div className="w-16 h-1 bg-[#FFE600] mx-auto mb-6 rounded-full"></div>

          <div className="space-y-2 text-black/60">
            <p className="hover:text-black transition-colors duration-300">
              <span className="mr-2">✉️</span>
              <a
                href="mailto:hazraankit668@gmail.com"
                className="hover:text-[#FFE600] transition-colors duration-300"
              >
                hazraankit668@gmail.com
              </a>
            </p>
            <p className="hover:text-black transition-colors duration-300">
              <span className="mr-2">✉️</span>
              <a
                href="mailto:ankit.hazra2023@iem.edu.in"
                className="hover:text-[#FFE600] transition-colors duration-300"
              >
                ankit.hazra2023@iem.edu.in
              </a>
            </p>
            <p className="hover:text-black transition-colors duration-300">
              <span className="mr-2">📞</span>
              <a
                href="tel:+917908618931"
                className="hover:text-[#FFE600] transition-colors duration-300"
              >
                +91 7908618931
              </a>
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center space-x-8 mb-10"
        >
          {[
            {
              icon: FaGithub,
              link: "https://github.com/AnkitHazra",
              label: "GitHub",
            },
            {
              icon: FaLinkedin,
              link: "https://www.linkedin.com/in/hazraankit2005/",
              label: "LinkedIn",
            },
            {
              icon: FaTwitter,
              link: "https://x.com/hazraAnkit790",
              label: "Twitter",
            },
            {
              icon: IoLogoWhatsapp,
              link: "https://wa.me/917908618931",
              label: "WhatsApp",
            },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/30 text-3xl transition-all duration-300 hover:text-[#FFE600] hover:scale-125"
              whileHover={{ scale: 1.25, rotate: 6 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-black/5 mx-auto mb-6"></div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black/30 text-sm"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-black font-semibold hover:text-[#FFE600] transition-colors duration-300">
            Ankit Hazra
          </span>
          . All Rights Reserved.
        </motion.p>

        {/* Decorative Dots */}
        <motion.div
          className="mt-4 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="w-1.5 h-1.5 bg-[#FFE600] rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-black/10 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-black/10 rounded-full"></span>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
