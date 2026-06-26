import { jetbrains, sourcecode } from "@/fonts/fonts";
import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import {
  FaHeart,
  FaStar,
  FaShoppingBag,
  FaCode,
  FaTerminal,
} from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoLogoReact } from "react-icons/io5";
import Link from "next/link";

const SingleProductCard = ({ product }) => {
  return (

    <div
      key={product.id}
      className="group relative overflow-hidden rounded-xl 
      bg-[#f9fafb]/90 backdrop-blur-xl
      border border-gray-200/70
      max-sm:w-[350px]
      
      shadow-md transition-all duration-300
        "
    >
      {/* VS Code Light Header */}
      <div
        className="flex items-center gap-2 
        bg-[#f1f3f5]/90 backdrop-blur
        px-6 py-3 text-xs text-gray-600 
        border-b border-gray-200/60"
      >
        <FaCode className="text-blue-600" />
        <span className={`ml-1 tracking-wide ${sourcecode.className }`} >
          {product.name}.js
        </span>
      </div>

      {/* Sidebar Icons */}
      <div
        className="absolute left-0 top-0 flex h-full w-11 
        flex-col items-center gap-6 
        bg-[#f4f6f8]/90 backdrop-blur
        border-r border-gray-200/60
        pt-14 text-gray-500"
      >
        <FaTerminal className="cursor-pointer transition hover:text-cyan-600" />
        <FaHeart className="cursor-pointer transition hover:text-pink-500" />
        <FaShoppingBag className="cursor-pointer transition hover:text-emerald-500" />
      </div>

      {/* Image */}
      <div
        className="relative ml-11 h-[280px] 
        bg-[#fafbfc] overflow-hidden"
      >
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain p-6 
          transition-transform duration-500
          group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div
        className="ml-11 space-y-3.5 p-5 
        text-gray-700"
      >
        {/* Title */}
        <h3
          className={`${jetbrains.className} 
          text-xl font-semibold text-black`}
        >
          {product.name}
          {/* <span className="text-cyan-600">const</span> product = "{product.name}"; */}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                size={17}
                className={
                  i < Math.round(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span
            className={`${sourcecode.className} text-gray-500`}
          >
            // {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex gap-2 items-end">
          <p
          className={`${sourcecode.className} 
          text-emerald-600 text-2xl font-medium`}
        >
          {product.price};
        </p>
        <p className="text-gray-500 line-through">  {product.mrp}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-3 flex-4">


             {/* Add */}
          <button
            className={`${sourcecode.className}
            rounded-xl 
            border border-gray-300/70
            bg-white/60 backdrop-blur
            py-4 text-xs text-gray-700
            flex justify-center items-center
            transition-all
            flex-1
            hover:bg-gray-100`}
          >
            <FiShoppingCart size={20}/>
          </button>
          {/* Buy */}

          <Link href={'/products/123'}
            className={`${sourcecode.className}
            rounded-xl 
            bg-gray-900
            flex gap-2 justify-center items-center
            py-4 text-xs text-white
            flex-3
            shadow-sm transition-all
            hover:brightness-110 hover:shadow-md`}
          >
          View details <IoLogoReact className="text-cyan-500"/>
          </Link>

         

        </div>
      </div>

      {/* Soft Glow */}
      <div
        className="pointer-events-none absolute inset-0 
        opacity-0 transition duration-300
        group-hover:opacity-100
        bg-gradient-to-br 
        from-blue-500/5 via-transparent to-purple-500/5"
      />
    </div>
  );
};

export default SingleProductCard;
