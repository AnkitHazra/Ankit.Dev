import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
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
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div
        className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6"
        data-aos="zoom-in"
      >
        {/* Neon Heading */}
        <h2
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-6xl font-extrabold mb-12 text-center 
          bg-gradient-to-r from-cyan-300 to-blue-500  
          bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent 
          drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] 
          transition-all duration-500 ease-in-out
          hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(59,130,246,1)]
          "
        >
          Get In Touch
        </h2>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative group" data-aos="fade-right" data-aos-delay="400">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 
              text-white transition focus:outline-none
              focus:border-blue-500 focus:bg-blue-500/5
              group-hover:border-cyan-400
              group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]
              "
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Email */}
          <div className="relative group" data-aos="fade-left" data-aos-delay="600">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 
              text-white transition focus:outline-none
              focus:border-blue-500 focus:bg-blue-500/5
              group-hover:border-cyan-400
              group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]
              "
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Message */}
          <div className="relative group" data-aos="fade-up" data-aos-delay="800">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 
              text-white transition focus:outline-none
              focus:border-blue-500 focus:bg-blue-500/5
              group-hover:border-cyan-400
              group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]
              "
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          {/* Neon Button */}
          <button
            type="submit"
            data-aos="zoom-in-up"
            data-aos-delay="1000"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-2xl font-medium 
            transition-all duration-300 relative overflow-hidden
            hover:scale-105 
            hover:shadow-[0_0_20px_rgba(59,130,246,0.8),0_0_40px_rgba(59,130,246,0.6)]
            hover:bg-cyan-100 hover:text-blue-700
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400 
            before:opacity-0 before:transition-opacity before:duration-500
            hover:before:opacity-20
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
