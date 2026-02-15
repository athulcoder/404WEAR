"use client"

import { useState } from "react"
import { Star, ShoppingCart, Zap, MessageSquare, ShieldCheck, ThumbsUp } from "lucide-react"



export default function ProductInfo({ product }) {
  // Initialize state with first available option or null
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "")
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "")

  const handleAddToCart = () => {
    console.log("Adding to cart:", { 
      id: product.id, 
      color: selectedColor, 
      size: selectedSize 
    })
    // Add Context/Redux logic here
  }

  return (
    <>
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
            {product.tags.map(tag => (
                <span key={tag} className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {tag}
                </span>
            ))}
            <span className="text-[#6a9955] text-xs font-medium font-mono">
                // ID: #{product.sku}
            </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-jetbrains text-gray-900">
          {product.name}
        </h1>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex text-yellow-400">
             {/* Dynamic Stars */}
            {[...Array(5)].map((_, i) => (
                <Star 
                    key={i} 
                    size={18} 
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                    className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                />
            ))}
          </div>
          <a href="#reviews" className="text-gray-400 text-sm border-l border-gray-200 pl-4 hover:text-cyan-600">
            {product.reviewCount} Reviews
          </a>
        </div>
      </div>

      {/* Price Area */}
      <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
        <span className="text-[#6a9955] text-sm font-mono block mb-2">// Current Market Value</span>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice > product.price && (
                 <span className="text-lg text-gray-400 line-through decoration-2">${product.originalPrice}</span>
            )}
          </div>
          
          <button className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:bg-white hover:shadow-sm px-4 py-2 rounded-lg border border-transparent hover:border-gray-200 transition">
            <MessageSquare size={16} />
            Make an Offer
          </button>
        </div>
      </div>

      {/* Dynamic Selectors */}
      <div className="space-y-6">
        
        {/* Colors */}
        {product.colors.length > 0 && (
            <div>
            <span className="text-[#6a9955] text-sm font-mono block mb-3">// Select Color_Variant</span>
            <div className="flex gap-4">
                {product.colors.map((color) => (
                <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    selectedColor === color.name 
                        ? 'ring-2 ring-offset-2 ring-cyan-600' 
                        : 'hover:ring-2 hover:ring-gray-200'
                    }`}
                >
                    <div 
                        className="w-10 h-10 rounded-full shadow-inner" 
                        style={{ backgroundColor: color.hexCode }} // Use inline style for dynamic hex
                    />
                </button>
                ))}
            </div>
            </div>
        )}

        {/* Sizes */}
        {product.sizes.length > 0 && (
            <div>
                <div className="flex justify-between mb-3">
                    <span className="text-[#6a9955] text-sm font-mono">// Select Size_Index</span>
                    <button className="text-xs text-cyan-600 underline underline-offset-2">Size Chart</button>
                </div>
                <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-14 h-14 rounded-full font-bold flex items-center justify-center border-2 transition-all ${
                        selectedSize === size
                            ? "border-cyan-600 bg-cyan-600 text-white shadow-lg shadow-cyan-200"
                            : "border-gray-200 text-gray-500 hover:border-gray-400"
                        }`}
                    >
                        {size}
                    </button>
                    ))}
                </div>
            </div>
        )}
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-4 mt-4">
          <button 
            onClick={handleAddToCart}
            className="col-span-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-cyan-600 text-cyan-600 font-bold hover:bg-cyan-50 transition active:scale-95"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
          <button className="col-span-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-cyan-600 text-white font-bold shadow-lg shadow-cyan-200 hover:bg-cyan-700 transition active:scale-95">
            <Zap size={20} fill="currentColor" />
            Buy Now
          </button>
      </div>

      {/* Static Trust Badges */}
      <div className="grid grid-cols-3 gap-2 text-center text-xs text-gray-500 mt-4 pt-6 border-t border-gray-100">
          <div className="flex flex-col items-center gap-2">
              <div className="p-2 bg-gray-50 rounded-full"><ShieldCheck size={18} /></div>
              <span>Secure Payment</span>
          </div>
          <div className="flex flex-col items-center gap-2">
              <div className="p-2 bg-gray-50 rounded-full"><ThumbsUp size={18} /></div>
              <span>Quality Assured</span>
          </div>
          <div className="flex flex-col items-center gap-2">
              <div className="p-2 bg-gray-50 rounded-full"><MessageSquare size={18} /></div>
              <span>24/7 Support</span>
          </div>
      </div>
    </>
  )
}