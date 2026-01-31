"use client";

import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import { FaHeart, FaStar, FaShoppingBag } from "react-icons/fa";

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
          className={`${poppins.className} text-3xl font-bold text-gray-900 md:text-5xl`}
        >
          Trending
        </h1>

        <p
          className={`${inter.className} mt-3 text-gray-600 md:text-lg`}
        >
          Fresh drops crafted for modern developers.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-3xl bg-white/80 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 hover:scale-[1.02]"
          >

            {/* Wishlist */}
            <button className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-2 text-gray-600 backdrop-blur transition hover:scale-110 hover:text-pink-500">
              <FaHeart size={16} />
            </button>

            {/* Image */}
            <div className="relative h-[240px] w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 sm:h-[280px]">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain p-6 transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">

              {/* Title */}
              <h3
                className={`${poppins.className} text-base font-semibold text-gray-900 sm:text-lg`}
              >
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                      size={14}
                    />
                  ))}
                </div>

                <span
                  className={`${inter.className} text-gray-500`}
                >
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <p
                className={`${inter.className} text-lg font-semibold text-gray-900`}
              >
                {product.price}
              </p>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  className={`${inter.className} flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 py-2.5 text-sm text-white transition hover:scale-105 hover:bg-black`}
                >
                  <FaShoppingBag size={14} />
                  Add
                </button>

                <button
                  className={`${inter.className} flex-1 rounded-xl border border-gray-300 py-2.5 text-sm text-gray-800 transition hover:bg-white`}
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Glass Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10 opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>

    </section>
  );
}
