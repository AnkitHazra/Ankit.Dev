import React from "react";
import { motion } from "framer-motion";

function MobileMenu({ menuOpen, setMenuOpen }) {
  const navLinks = ["Home", "About", "Projects", "Support", "Contact"];

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full bg-[#faf8f5]/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
      initial={false}
      animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
    >
      {/* Close Button */}
      <motion.button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl text-black/60 hover:text-[#FFE600] transition-all duration-300 focus:outline-none cursor-pointer glass-light rounded-full border border-white/30 hover:border-[#FFE600]/50"
        whileTap={{ scale: 0.9 }}
        aria-label="Close Menu"
      >
        <span className="leading-none">×</span>
      </motion.button>

      {/* Navigation Links */}
      <div className="flex flex-col items-center gap-1 sm:gap-2 px-4">
        {navLinks.map((link, index) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-black/70 hover:text-[#FFE600] transition-all duration-300 py-2 sm:py-3 px-4 sm:px-6 relative group`}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: menuOpen ? index * 0.08 : 0 }}
            whileHover={{ scale: 1.05 }}
          >
            {link}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FFE600] transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        className={`mt-4 sm:mt-6 w-16 h-px bg-black/10 transition-all duration-500 ${menuOpen ? "opacity-100" : "opacity-0"}`}
      />

      {/* Social Links - Only once */}
      <motion.div
        className="flex gap-6 sm:gap-8 mt-4 sm:mt-6"
        initial={{ opacity: 0 }}
        animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://github.com/AnkitHazra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/40 hover:text-[#FFE600] text-base sm:text-xl transition-all duration-300 hover:scale-125"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hazraankit2005/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/40 hover:text-[#FFE600] text-base sm:text-xl transition-all duration-300 hover:scale-125"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/hazraAnkit790"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/40 hover:text-[#FFE600] text-base sm:text-xl transition-all duration-300 hover:scale-125"
        >
          Twitter
        </a>
      </motion.div>

      {/* Decorative Dots */}
      <motion.div
        className={`absolute bottom-8 sm:bottom-12 flex gap-2 transition-all duration-700 ${menuOpen ? "opacity-100" : "opacity-0"}`}
      >
        <span className="w-1.5 h-1.5 bg-[#FFE600] rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-black/10 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-black/10 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-black/10 rounded-full"></span>
        <span className="w-1.5 h-1.5 bg-[#FFE600] rounded-full"></span>
      </motion.div>
    </motion.div>
  );
}

export default MobileMenu;
