import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-[1200px] z-40 glass-light rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300'
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="font-bold text-xl md:text-2xl text-black hover:text-[#FFE600] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Ankit<span className="text-black/40">.</span>Dev
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link, index) => (
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
            className='md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer z-40 glass-light rounded-xl border border-white/30 hover:border-[#FFE600]/50 transition-all duration-300'
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <span className={`block w-5 h-0.5 bg-black rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-black rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-black rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        className={`md:hidden fixed inset-0 top-0 bg-[#faf8f5]/98 backdrop-blur-3xl transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: -1 }}
        initial={false}
        animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
          {navLinks.map((link, index) => (
            <motion.a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className='text-3xl md:text-4xl font-semibold text-black/80 hover:text-[#FFE600] transition-all duration-300'
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              {link}
            </motion.a>
          ))}
          <motion.div 
            className="flex gap-6 mt-8 pt-8 border-t border-black/10 w-full max-w-xs justify-center"
            initial={{ opacity: 0 }}
            animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a href="https://github.com/AnkitHazra" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-[#FFE600] text-xl transition-all duration-300 hover:scale-110">GitHub</a>
            <a href="https://www.linkedin.com/in/hazraankit2005/" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-[#FFE600] text-xl transition-all duration-300 hover:scale-110">LinkedIn</a>
            <a href="https://twitter.com/hazraAnkit790" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-[#FFE600] text-xl transition-all duration-300 hover:scale-110">Twitter</a>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;