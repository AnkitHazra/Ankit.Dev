import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      year: "2023 – 2027",
      title: "Bachelor Of Technology (B.Tech) in Electrical Engineering",
      institution: "INSTITUTE OF ENGINEERING AND MANAGEMENT (IEM), KOLKATA",
      description:
        "Pursuing a Bachelor of Technology in Electrical Engineering with a strong interest in technology, software development, and problem-solving. Alongside core engineering subjects, I have developed skills in programming, full-stack development, data structures, algorithms, and modern web technologies. My academic journey combines engineering fundamentals with practical development experience, enabling me to approach technical challenges with both analytical and creative thinking. I actively work on projects, strengthen my technical skills, and continuously explore emerging technologies to prepare myself for a career in the software and technology industry.",
    },
    {
      year: "2021 – 2023",
      title: "Secondary Education (CBSE)",
      institution: "Techno India Group Public School, Bolpur",
      description:
        "Strong foundation in academics, problem-solving, and technical learning.",
    },
    {
      year: "2009 – 2021",
      title: "Primary Education (ICSE)",
      institution: "St.Teresa’s School, Bolpur",
      description:
        "Built a strong academic foundation with curiosity, discipline, and creativity.",
    },
  ];

  // Framer motion variants for staggered timeline entries
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col items-center justify-center mb-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
            className="mb-4 text-[#FFE600]"
          >
            <GraduationCap size={48} strokeWidth={1.5} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-4 text-black text-center"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-[#FFE600] mx-auto rounded-full"
          />
        </div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-6 md:pl-10"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-12 last:mb-0 group"
            >
              {/* The vertical line with dots – positioned on the left */}
              <div className="absolute left-2.5 md:left-3.5 top-0 bottom-0 flex flex-col items-center">
                {/* Dot with pulse effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="w-4 h-4 rounded-full bg-[#FFE600] border-2 border-white shadow-lg shadow-[#FFE600]/50 z-10 relative"
                >
                  <div className="absolute inset-0 rounded-full bg-[#FFE600] animate-ping opacity-20" />
                </motion.div>

                {/* Line extending downward (animated) */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  className="w-0.5 flex-1 bg-linear-to-b from-[#FFE600]/80 via-[#FFE600]/40 to-transparent mt-1 group-last:hidden origin-top"
                />
              </div>

              {/* Card – Smooth Tween Animation with Elevated Shadow on Hover */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 15px 40px rgba(255, 230, 0, 0.35)",
                  transition: { type: "tween", ease: "easeOut", duration: 0.3 },
                }}
                className="ml-6 md:ml-10 p-5 md:p-7 rounded-2xl glass-light border border-[#FFE600]/50 bg-[#FFE600]/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,230,0,0.15)] relative overflow-hidden"
              >
                {/* Content Wrapper */}
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-mono font-bold text-black/70">
                      {item.year}
                    </span>
                    
                    {/* Default Yellow Institution Pill */}
                    <span className="text-sm font-semibold uppercase tracking-wider text-black border border-[#FFE600]/60 rounded-full px-4 py-1.5 bg-[#FFE600]/40 backdrop-blur-sm shadow-sm">
                      {item.institution}
                    </span>
                  </div>
                  
                  {/* Default Brown Title */}
                  <h3 className="text-2xl font-bold text-[#9A4B00] mb-3">
                    {item.title}
                  </h3>
                  
                  {/* Default Darker Text */}
                  <p className="text-black/80 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Default Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-[#FFE600]/0 via-[#FFE600]/5 to-[#FFE600]/20 opacity-100 pointer-events-none rounded-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;