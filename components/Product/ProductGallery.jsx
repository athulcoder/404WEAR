"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Share2 } from "lucide-react"



export default function ProductGallery({ images }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  // Guard clause if no images provided
  if (!images || images.length === 0) return <div className="bg-gray-100 h-96 rounded-3xl animate-pulse" />

  const activeImage = images[activeImgIndex]

  return (
    <div className="flex flex-col-reverse md:flex-row gap-6">
      
      {/* Dynamic Thumbnails */}
      <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible hide-scrollbar">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setActiveImgIndex(idx)}
            className={`relative w-20 h-20 rounded-xl bg-gray-50 border-2 transition-all duration-300 overflow-hidden flex-shrink-0 ${
              activeImgIndex === idx 
                ? "border-cyan-600 ring-2 ring-cyan-600/20" 
                : "border-transparent hover:border-gray-200"
            }`}
          >
            <Image 
              src={img.url} 
              alt={img.altText} 
              fill 
              className="object-contain p-2" 
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Main Stage */}
      <div className="flex-1 bg-gray-50 rounded-3xl relative aspect-[4/3] md:aspect-auto md:h-[600px] flex items-center justify-center group overflow-hidden">
         {/* Actions */}
        <div className="absolute top-6 right-6 z-10 flex flex-col gap-3">
            <button className="p-3 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                <Heart size={20} />
            </button>
            <button className="p-3 bg-white rounded-full shadow-sm text-gray-400 hover:text-cyan-600 hover:bg-cyan-50 transition">
                <Share2 size={20} />
            </button>
        </div>
        
        <Image 
          src={activeImage.url} 
          alt={activeImage.altText}
          width={800}
          height={800}
          priority={true}
          className="object-contain w-full h-full p-8 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  )
}