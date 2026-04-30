'use client';

import { jetbrains } from '@/fonts/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={'/products/123'}>
    <div className="group border-gray-200 border-[1px] p-2 rounded-lg">

      {/* Image Box */}
      <div
        className="
          relative
          bg-[#f3f0ec]
          rounded-2xl 
          p-6
          aspect-square
          overflow-hidden
        "
      >
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount */}
        {product.discount && (
          <span
            className="
              absolute bottom-3 right-3
              bg-red-100 text-red-600
              text-xs px-2 py-1 rounded-full
            "
          >
            {product.discount}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">

        {/* Title */}
        <h3 className={`${jetbrains.className} text-sm`}>
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">

          {renderStars(product.rating)}

          <span className="text-gray-500 text-xs">
            {product.rating}/5
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center gap-2 ">

          <span className="font-semibold text-gray-900">
            {product.price}
          </span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.oldPrice}
            </span>
          )}

        </div>

      </div>
    </div>
    </Link>
  );
}


/* Stars */

function renderStars(rating) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${
          i <= Math.round(rating)
            ? 'text-yellow-400'
            : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  return stars;
}
