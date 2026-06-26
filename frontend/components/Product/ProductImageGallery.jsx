"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdShare } from "react-icons/io";

const ProductImageGallery = ({ images, productName }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="w-full flex flex-col items-center gap-4 ">

      {/* Main Image */}
      <div className="relative w-full h-[390px] rounded-xl overflow-hidden
                      border border-gray-100 bg-[#ebf5f7]
                      flex items-center justify-center">

        {/* Share Button */}
        <button
          className="absolute top-3 right-3 z-10
                     bg-black/80 hover:bg-black
                     p-3 rounded-full transition"
        >
          <IoMdShare className="text-lg text-white" />
        </button>

        <Image
          src={activeImage}
          alt={productName}
          width={240}
          height={300}
          priority
          className="object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Thumbnails */}
      <div className="w-full flex gap-3 min-md:justify-center px-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`w-[90px] h-[90px] rounded-lg overflow-hidden
                        border transition
                        ${
                          activeImage === img
                            ? "border-cyan-500 ring-2 ring-cyan-200"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
          >
            <Image
              src={img}
              alt={`${productName} ${index + 1}`}
              width={80}
              height={80}
              className="object-contain scale-110"
            />
          </button>
        ))}
      </div>

    </div>
  );
};

export default ProductImageGallery;
