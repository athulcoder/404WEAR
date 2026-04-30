"use client";

import { Inter, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import TextSide from "./TextSide";
import Card from "./Card";



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

      <div className="mx-auto flex max-lg:flex-col w-full max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">

       
      <TextSide/>

      <Card/>
      </div>
    </section>
  );
}
