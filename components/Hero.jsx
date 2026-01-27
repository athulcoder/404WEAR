"use client";

import { Montserrat, Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

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
            className="mx-auto md:mx-0 inline-flex rounded-full bg-black/5 px-4 py-1 text-sm font-medium text-gray-700 backdrop-blur"
          >
            ⚡ Premium Dev Apparel
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
            <button className="rounded-xl bg-gray-900 px-6 py-3 text-white shadow-xl transition hover:scale-105">
              Shop
            </button>

            <button className="rounded-xl border border-gray-300 px-6 py-3 text-gray-800 transition hover:bg-white">
              Lookbook
            </button>
          </motion.div>
        </motion.div>

      {/* ================= MOBILE SLIDER ================= */}
<div className="relative w-full overflow-hidden md:hidden">

  {/* Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/40 via-pink-200/40 to-indigo-200/40 blur-3xl" />

  <motion.div
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      repeat: Infinity,
      duration: 22,
      ease: "linear",
    }}
    style={{ willChange: "transform" }}
    className="relative flex w-[200%] gap-6 py-10"
  >
    {[...shirts, ...shirts].map((shirt, i) => (
      <div
        key={i}
        className="relative min-w-[230px] rounded-3xl bg-white/90 p-3 shadow-2xl backdrop-blur-xl"
      >
        <Image
          src={shirt.src}
          alt="T-shirt"
          width={230}
          height={290}
          className="object-contain"
        />

        {/* Light reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/25 to-transparent" />
      </div>
    ))}
  </motion.div>
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
