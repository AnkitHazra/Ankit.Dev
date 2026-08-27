import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = ['Home', 'About', 'Projects', 'Support', 'Contact'];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-[1200px] z-50 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300'
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
            {/* Logo */}
            <motion.a 
              href="#home" 
              className="font-bold text-base sm:text-xl md:text-2xl text-black hover:text-[#FFE600] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Ankit<span className="text-black/40">.</span>Dev
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <motion.a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-black/60 text-sm lg:text-base font-medium hover:text-[#FFE600] relative group transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFE600] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button 
              className='md:hidden w-8 h-8 sm:w-10 sm:h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer z-50 rounded-xl border border-white/30 hover:border-[#FFE600]/50 transition-all duration-300'
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              <span className={`block w-4 sm:w-5 h-0.5 bg-black rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-4 sm:w-5 h-0.5 bg-black rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-4 sm:w-5 h-0.5 bg-black rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(250, 248, 245, 0.92)',
              backdropFilter: 'blur(60px) saturate(200%)',
              WebkitBackdropFilter: 'blur(60px) saturate(200%)',
            }}
          >
            {/* Close Button */}
            <motion.button 
              onClick={() => setMenuOpen(false)} 
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl sm:text-3xl text-black/60 hover:text-[#FFE600] transition-all duration-300 focus:outline-none cursor-pointer rounded-full border border-white/30 hover:border-[#FFE600]/50"
              whileTap={{ scale: 0.9 }}
              aria-label="Close Menu"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              <span className="leading-none">×</span>
            </motion.button>

            {/* Navigation Links */}
            <div className="flex flex-col items-center gap-2 px-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-3xl sm:text-4xl font-semibold text-black/70 hover:text-[#FFE600] transition-all duration-300 py-2 px-4 relative group"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FFE600] transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <motion.div 
              className="w-16 h-px bg-black/10 my-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3 }}
            />

            {/* Social Links */}
            <motion.div 
              className="flex gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
              className="absolute bottom-8 sm:bottom-12 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-1.5 h-1.5 bg-[#FFE600] rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-black/10 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-black/10 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-black/10 rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-[#FFE600] rounded-full"></span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;