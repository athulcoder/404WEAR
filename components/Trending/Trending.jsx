"use client";

import { firecode, jetbrains, sourcecode } from "@/fonts/fonts";
import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import SingleProductCard from "../Products/SingleProductCard";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

// Demo products
const products = [
  {
    id: 1,
    name: "404 Debug Tee",
    price: "₹999",
    rating: 4.7,
    reviews: 124,
    img: "/assets/c1.png",
  },
  {
    id: 2,
    name: "Syntax Black",
    price: "₹1099",
    rating: 4.8,
    reviews: 98,
    img: "/assets/c2.png",
  },
  {
    id: 3,
    name: "No Bug Tee",
    price: "₹899",
    rating: 4.5,
    reviews: 210,
    img: "/assets/c3.png",
  },
  {
    id: 4,
    name: "Code Mode",
    price: "₹1199",
    rating: 4.9,
    reviews: 76,
    img: "/assets/c1.png",
  },
  {
    id: 5,
    name: "Dev Drip",
    price: "₹999",
    rating: 4.6,
    reviews: 143,
    img: "/assets/c2.png",
  },
  {
    id: 6,
    name: "Late Night Build",
    price: "₹1299",
    rating: 4.8,
    reviews: 65,
    img: "/assets/c3.png",
  },
];

export default function Trending() {

  


  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 px-4 py-16 md:px-16">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="mb-14 text-center">
        <h1
          className={`${firecode.className} text-3xl font-bold text-gray-900 md:text-5xl`}
        >
        <span className="text-cyan-600">function</span>  Trending()
        </h1>

        <p

          className={`${sourcecode.className} mt-3 text-green-700 md:text-lg `}
        >
          //  trend drops crafted for modern developers.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 max-sm:flex max-sm:flex-col items-center  gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center ">
        {products.map((product) => (
          <SingleProductCard product={product} key={product.id}/>
        ))}
      </div>

      

    </section>
  );
}
