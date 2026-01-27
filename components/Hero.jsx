"use client";

import { Montserrat, Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const shirts = [
  { id: 1, src: "/assets/c1.png", rotate: -18, x: -120, y: 40, z: 1 },
  { id: 2, src: "/assets/c2.png", rotate: 4, x: 0, y: -20, z: 3 },
  { id: 3, src: "/assets/c3.png", rotate: 18, x: 120, y: 60, z: 2 },
];

export default function Hero() {
    const [active, setActive] = useState(1);
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 px-5 md:px-6">

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 space-y-6 text-center md:text-left"
        >

          {/* Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="mx-auto md:mx-0 inline-flex rounded-full bg-black/5 px-4 py-1 my-4 text-sm font-medium text-gray-700 backdrop-blur"
          >
             Premium Dev Apparel
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`${montserrat.className} text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl`}
          >
            Where{" "}
            <span className="text-indigo-600 bg-clip-text ">
              Code
            </span>{" "}
            Meets
            <br />
            Fashion
          </motion.h1>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`${inter.className} text-lg text-gray-600`}
          >
            Premium developer apparel for late nights, clean builds,
            and bold ideas. Designed for creators.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-3 md:justify-start"
          >
            <button className="rounded-xl bg-gray-900 px-6 py-3 text-white shadow-xl transition hover:scale-105 cursor-pointer w-40 ">
              Shop
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 text-gray-800 transition hover:bg-white w-40 cursor-pointer">
              More
            </button>
          </motion.div>
        </motion.div>

    {/* ================= MOBILE CUTOUT STACK ================= */}
<div className="relative flex h-[420px] w-full items-center justify-center md:hidden">

  {/* Soft Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/40 via-pink-200/40 to-white blur-3xl" />

  {shirts.map((shirt, i) => {

    const isActive = active === i;

    return (
      <motion.div
        key={shirt.id}

        /* Tap Handler */
        onClick={() => setActive(i)}

        /* Landing */
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 60,
          rotate: shirt.rotate,
        }}

        animate={{
          opacity: 1,

          /* Bring to front */
          scale: isActive ? 1.1 : 1,

          y: isActive ? shirt.y - 20 : shirt.y,

          rotate: isActive ? 0 : shirt.rotate,

          x: isActive ? 0 : shirt.x * 0.5,
        }}

        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}

        className="absolute cursor-pointer"

        style={{
          zIndex: isActive ? 50 : 10 + i,
        }}
      >
        <Image
          src={shirt.src}
          alt="404Wear T-shirt"
          width={260}
          height={340}
          priority={i === 1}
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>
    );
  })}
</div>


        {/* ================= DESKTOP ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="relative hidden h-[520px] w-full items-center justify-center md:flex"
        >

          {/* Guide */}
          <div className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-gray-300/60" />

          {shirts.map((shirt) => (
            <motion.div
              key={shirt.id}

              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.7,
                  y: 120,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: shirt.x,
                  y: shirt.y,
                  rotate: shirt.rotate,
                },
              }}

              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}

              whileHover={{
                scale: 1.15,
                rotate: 0,
                zIndex: 50,
                boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
              }}

              className="absolute cursor-pointer rounded-3xl bg-white/90 p-4 shadow-2xl backdrop-blur-xl"
              style={{ zIndex: shirt.z }}
            >
              <Image
                src={shirt.src}
                alt="Codewear"
                width={260}
                height={320}
                className="select-none object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
