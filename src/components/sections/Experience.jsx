import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      year: 'May – July 2025',
      title: 'Research Intern',
      institution: 'Indian Institute of Engineering Science and Technology (IIEST), Shibpur',
      description: 'Developed a real-time Sign Language Detection and Audio Conversion system using Python and YOLOv8 (Ultralytics) for gesture detection and classification. Integrated pyttsx3 for text-to-speech conversion, enabling recognized sign language gestures to be translated into audible output. Worked on computer vision, real-time inference, model integration, and system implementation as part of a collaborative internship project at IIEST, Shibpur.',
      projects: ['Sign Language Detection and Audio Conversion System'],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col items-center justify-center mb-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="mb-4 text-[#FFE600]"
          >
            <Briefcase size={48} strokeWidth={1.5} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-4 text-black text-center"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            className="h-1 bg-[#FFE600] mx-auto rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 md:pl-10">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* The vertical line with dots – positioned on the left */}
              <div className="absolute left-2.5 md:left-3.5 top-0 bottom-0 flex flex-col items-center">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-[#FFE600] border-2 border-white shadow-lg shadow-[#FFE600]/30 z-10" />
                {/* Line extending downward (except for last item) */}
                <div className="w-0.5 flex-1 bg-linear-to-b from-[#FFE600]/60 to-[#FFE600]/20 mt-1 last:hidden" />
              </div>

              {/* Card – Smooth Tween Animation with Elevated Shadow on Hover */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0px 15px 40px rgba(255, 230, 0, 0.35)",
                  transition: { type: "tween", ease: "easeOut", duration: 0.3 }
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
                  <p className="text-black/80 leading-relaxed mb-5 font-medium">
                    {item.description}
                  </p>
                  
                  {/* Projects list */}
                  <div className="mt-3 space-y-2">
                    {item.projects.map((project, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-black/90 font-medium">
                        <span className="text-[#D4AF37] font-bold text-lg mt-0.5">
                          ▸
                        </span>
                        <span>
                          {project}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Default Inner Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-[#FFE600]/0 via-[#FFE600]/5 to-[#FFE600]/20 opacity-100 pointer-events-none rounded-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;