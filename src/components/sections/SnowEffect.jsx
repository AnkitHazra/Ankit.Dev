import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const SnowEffect = () => {
  const [snowEnabled, setSnowEnabled] = useState(false);

  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const animationRef = useRef(null);
  const flakesRef = useRef([]);

  // ================================
  // CREATE SNOWFLAKES
  // ================================
  const createFlakes = (width, height) => {
    const isMobile = width < 768;

    const count = isMobile ? 45 : 85;

    return Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,

      radius: Math.random() * 2.2 + 0.8,

      speedY: Math.random() * 0.7 + 0.4,
      speedX: Math.random() * 0.5 - 0.25,

      wind: Math.random() * 0.02 + 0.005,

      opacity: Math.random() * 0.45 + 0.35,

      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: Math.random() * 0.02 - 0.01,
    }));
  };

  // ================================
  // CANVAS SETUP
  // ================================
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      flakesRef.current = createFlakes(window.innerWidth, window.innerHeight);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // ================================
  // SNOW ANIMATION
  // ================================
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!snowEnabled) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      return;
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      flakesRef.current.forEach((flake) => {
        // Wind movement
        flake.x += flake.speedX + Math.sin(flake.y * flake.wind) * 0.35;

        // Falling movement
        flake.y += flake.speedY;

        // Rotation
        flake.rotation += flake.rotationSpeed;

        // Reset bottom
        if (flake.y > window.innerHeight + 10) {
          flake.y = -10;
          flake.x = Math.random() * window.innerWidth;
        }

        // Reset sides
        if (flake.x > window.innerWidth + 10) {
          flake.x = -10;
        }

        if (flake.x < -10) {
          flake.x = window.innerWidth + 10;
        }

        // Draw
        ctx.save();

        ctx.translate(flake.x, flake.y);
        ctx.rotate(flake.rotation);

        ctx.globalAlpha = flake.opacity;

        // Yellow glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#FFE600";

        ctx.fillStyle = "#FFE600";

        ctx.beginPath();

        ctx.arc(0, 0, flake.radius, 0, Math.PI * 2);

        ctx.fill();

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [snowEnabled]);

  // ================================
  // WIND AUDIO
  // ================================
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (snowEnabled) {
      audio.volume = 0.18;

      audio.play().catch(() => {
        // Browser autoplay protection
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [snowEnabled]);

  // ================================
  // UI
  // ================================
  const snowUI = (
    <>
      {/* Wind Sound */}
      <audio ref={audioRef} loop preload="auto">
        <source src="ambient.mp3" type="audio/mpeg" />
      </audio>

      {/* Snow Canvas */}
      <canvas
        ref={canvasRef}
        className={`
          fixed
          inset-0
          pointer-events-none

          w-screen
          h-screen

          transition-opacity
          duration-700

          ${snowEnabled ? "opacity-100" : "opacity-0"}
        `}
        style={{
          zIndex: 2147483646,
        }}
      />

      {/* ================================
          SNOW BUTTON
          ================================ */}
      <motion.button
        type="button"
        onClick={() => setSnowEnabled((prev) => !prev)}
        aria-label={snowEnabled ? "Turn snow off" : "Turn snow on"}
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        transition={{
          duration: 0.2,
        }}
        style={{
          position: "fixed",
          zIndex: 2147483647,
          right: "16px",
          bottom: "16px",
        }}
        className="
          flex
          items-center
          justify-between
          gap-2

          w-47.5
          h-13.5

          sm:w-55
          sm:h-15.5

          px-3
          sm:px-3.5

          rounded-full

          bg-black

          text-white

          border
          border-white/10

          shadow-[0_10px_30px_rgba(0,0,0,0.18)]

          hover:shadow-[0_14px_35px_rgba(0,0,0,0.22)]

          select-none
          touch-manipulation
        "
      >
        {/* Snow Icon */}
        <motion.span
          animate={{
            rotate: snowEnabled ? 360 : 0,
            scale: snowEnabled ? 1 : 0.95,
          }}
          transition={{
            rotate: {
              duration: 0.8,
              ease: "easeInOut",
            },
            scale: {
              duration: 0.2,
            },
          }}
          className={`
            flex
            items-center
            justify-center

            shrink-0

            w-8
            h-8

            sm:w-9
            sm:h-9

            rounded-full

            text-[14px]
            sm:text-[16px]

            transition-all
            duration-300

            ${
              snowEnabled
                ? `
                  bg-[#FFE600]
                  text-black
                  shadow-[0_0_16px_rgba(255,230,0,0.25)]
                `
                : `
                  bg-white/10
                  text-white/80
                `
            }
          `}
        >
          ❄
        </motion.span>

        {/* Text */}
        <span
          className="
            flex-1

            text-center

            text-[13px]
            sm:text-[14px]

            font-semibold

            whitespace-nowrap
          "
        >
          Snow {snowEnabled ? "ON" : "OFF"}
        </span>

        {/* Toggle */}
        <span
          className={`
            relative

            flex
            items-center

            shrink-0

            w-10.5
            h-6

            sm:w-11.5
            sm:h-6.5

            p-0.75

            rounded-full

            transition-all
            duration-300

            ${
              snowEnabled
                ? `
                  bg-[#FFE600]
                  shadow-[0_0_14px_rgba(255,230,0,0.18)]
                `
                : "bg-white/20"
            }
          `}
        >
          <motion.span
            animate={{
              x: snowEnabled ? 18 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="
              block

              w-4.5
              h-4.5

              sm:w-5
              sm:h-5

              rounded-full

              bg-white

              shadow-[0_2px_6px_rgba(0,0,0,0.25)]
            "
          />
        </span>
      </motion.button>
    </>
  );

  return createPortal(snowUI, document.body);
};

export default SnowEffect;
