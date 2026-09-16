import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import validator from "validator"; // Import the VisitorCounter component

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  // Helper function to verify email existence using AbstractAPI
  const verifyEmailExists = async (email) => {
    const apiKey = import.meta.env.VITE_ABSTRACT_API_KEY;

    const response = await fetch(
      `https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(email)}`,
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Email Reputation API nests deliverability info under "email_deliverability"
    // and uses lowercase status values
    return data.email_deliverability?.status === "deliverable";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Fast local syntax check
    if (!validator.isEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setIsVerifying(true);

    try {
      // Step 2: Verify the email actually exists (API call)
      const emailIsDeliverable = await verifyEmailExists(formData.email);

      if (!emailIsDeliverable) {
        setEmailError(
          "This email address does not appear to be deliverable. Please check and try again.",
        );
        setIsVerifying(false);
        return;
      }

      // Step 3: Send the email via EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" });
      setEmailError("");
    } catch (error) {
      console.error("Submission error:", error);

      // Distinguish between API errors and EmailJS errors
      if (error.message.includes("API error")) {
        setEmailError("Unable to verify email right now. Please try again.");
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } finally {
      setIsVerifying(false);
    }
  };

  // Clear email error as user types a valid email
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email" && emailError && validator.isEmail(value)) {
      setEmailError("");
    }
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
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
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
                onChange={handleChange}
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
                className={`w-full bg-white/40 backdrop-blur-sm border rounded-xl px-4 py-3 
                text-black placeholder:text-black/30 transition-all duration-300
                focus:outline-none focus:ring-2
                group-hover:border-[#FFE600]/50
                ${
                  emailError
                    ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                    : "border-black/10 focus:border-[#FFE600] focus:ring-[#FFE600]/20"
                }`}
                placeholder="your@email.com"
                onChange={handleChange}
              />
              <label
                htmlFor="email"
                className="absolute -top-2.5 left-4 px-2 text-xs font-medium text-black/40 bg-[#faf8f5] transition-all duration-300 group-focus-within:text-[#FFE600]"
              >
                Email
              </label>

              {/* Email Error Message */}
              {emailError && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 ml-1 text-xs text-red-500 font-medium"
                >
                  {emailError}
                </motion.p>
              )}
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
                onChange={handleChange}
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
              disabled={isVerifying}
              className={`btn-primary w-full justify-center ${
                isVerifying ? "opacity-50 cursor-not-allowed" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={!isVerifying ? { scale: 1.02 } : {}}
              whileTap={!isVerifying ? { scale: 0.98 } : {}}
            >
              {isVerifying ? "Verifying..." : "Send Message"}
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
