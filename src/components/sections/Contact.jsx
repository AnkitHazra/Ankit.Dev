import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-[#faf8f5]"
    >
      <div className="w-full max-w-md px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-4 text-black text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          className="h-1 bg-[#FFE600] mx-auto mb-12 rounded-full"
        />

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-light rounded-2xl p-6 md:p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/40 backdrop-blur-sm border border-black/10 rounded-xl px-4 py-3 
                text-black placeholder:text-black/30 transition-all duration-300
                focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20
                group-hover:border-[#FFE600]/50"
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <label
                htmlFor="name"
                className="absolute -top-2.5 left-4 px-2 text-xs font-medium text-black/40 bg-[#faf8f5] transition-all duration-300 group-focus-within:text-[#FFE600]"
              >
                Name
              </label>
            </motion.div>

            {/* Email */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/40 backdrop-blur-sm border border-black/10 rounded-xl px-4 py-3 
                text-black placeholder:text-black/30 transition-all duration-300
                focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20
                group-hover:border-[#FFE600]/50"
                placeholder="your@email.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label
                htmlFor="email"
                className="absolute -top-2.5 left-4 px-2 text-xs font-medium text-black/40 bg-[#faf8f5] transition-all duration-300 group-focus-within:text-[#FFE600]"
              >
                Email
              </label>
            </motion.div>

            {/* Message */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/40 backdrop-blur-sm border border-black/10 rounded-xl px-4 py-3 
                text-black placeholder:text-black/30 transition-all duration-300 resize-none
                focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20
                group-hover:border-[#FFE600]/50"
                placeholder="Your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <label
                htmlFor="message"
                className="absolute -top-2.5 left-4 px-2 text-xs font-medium text-black/40 bg-[#faf8f5] transition-all duration-300 group-focus-within:text-[#FFE600]"
              >
                Message
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="btn-primary w-full justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>

            {/* Alternative Contact */}
            <motion.div
              className="text-center pt-4 border-t border-black/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-black/40">
                Or reach me directly at{" "}
                <a
                  href="mailto:hazraankit668@gmail.com"
                  className="text-black hover:text-[#FFE600] font-medium transition-colors duration-300"
                >
                  hazraankit668@gmail.com
                </a>
                <span className="mx-1">|</span>
                <a
                  href="mailto:Ankit.Hazra2023@iem.edu.in"
                  className="text-black hover:text-[#FFE600] font-medium transition-colors duration-300"
                >
                  Ankit.Hazra2023@iem.edu.in
                </a>
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
