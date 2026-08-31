import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaCoffee,
  FaWallet,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Support() {
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/AnkitHazra", label: "GitHub" },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/hazraankit2005/",
      label: "LinkedIn",
    },
    {
      icon: SiLeetcode,
      link: "https://leetcode.com/u/Ankit_Hazra/",
      label: "LeetCode",
    },
    { icon: FaTwitter, link: "https://x.com/hazraAnkit790", label: "Twitter" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/hazra_ankit1/",
      label: "Instagram",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=100093854046682",
      label: "Facebook",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="support"
      className="min-h-screen flex items-center justify-center py-20 bg-[#faf8f5] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-[#FFE600]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-black/5 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-4 text-black text-center"
        >
          Support the Creator
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          className="h-1 bg-[#FFE600] mx-auto mb-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-black/60 text-center text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          If this platform saved your day, make my night. I promise to spend
          your contribution strictly on caffeine and looking cute while coding.
        </motion.p>

        {/* Main Support Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-light rounded-3xl p-8 md:p-10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
        >
          {/* Creator Info */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="inline-block p-3 bg-[#FFE600]/10 rounded-full mb-4 border border-[#FFE600]/20">
              <img
                src="ankit.png"
                alt="Ankit Hazra"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-1">Ankit Hazra</h3>
            <p className="text-black/50 text-sm">Creator & Developer</p>
            <div className="w-12 h-0.5 bg-[#FFE600] mx-auto my-3 rounded-full"></div>
            <p className="text-black/40 text-sm italic">
              Code, Collaborate, Create
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-black/40 text-sm text-center mb-4">
              Connect with me
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center glass-dark rounded-xl text-black/40 hover:text-[#FFE600] hover:border-[#FFE600]/30 transition-all duration-300 border border-black/5"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center my-6"
          >
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-black/10 to-transparent"></div>
            <span className="px-4 text-black/30 text-sm flex items-center gap-2">
              <FaHeart className="text-[#FFE600] text-xs" /> Support my work{" "}
              <FaHeart className="text-[#FFE600] text-xs" />
            </span>
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-black/10 to-transparent"></div>
          </motion.div>

          {/* Support Buttons */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
          >
            <motion.a
              variants={itemVariants}
              href="https://www.buymeachai.in/hazraankit"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaCoffee className="text-lg" /> Buy Me a Chai →
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="upi://pay?pa=hazraankit668@oksbi&pn=Ankit%20Hazra"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaWallet className="text-lg" /> Pay with UPI →
            </motion.a>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            variants={itemVariants}
            className="text-black/30 text-xs text-center mt-6"
          >
            Love what you see? Buy the dev a drink. It takes a lot of brain
            juice to keep things running this smoothly.
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-8"
        >
          <span className="w-2 h-2 bg-[#FFE600] rounded-full"></span>
          <span className="w-2 h-2 bg-black/10 rounded-full"></span>
          <span className="w-2 h-2 bg-black/10 rounded-full"></span>
          <span className="w-2 h-2 bg-black/10 rounded-full"></span>
          <span className="w-2 h-2 bg-[#FFE600] rounded-full"></span>
        </motion.div>
      </div>
    </section>
  );
}

export default Support;
