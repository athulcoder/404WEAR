'use client';

import ProductCard from './ProductCard';

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
]
export default function ProductsGrid() {
  return (
    <section className="bg-[#fafafa] py-10 px-3 sm:px-6">

      <div
        className="
          mx-auto max-w-7xl
          grid gap-6
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex items-center justify-between max-w-7xl mx-auto text-sm">

        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          ← Previous
        </button>

        <div className="flex gap-2 text-gray-600">
          <span className="px-3 py-1 rounded bg-gray-100">1</span>
          <span>2</span>
          <span>3</span>
          <span>…</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>

        <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
          Next →
        </button>

      </div>

    </section>
  );
}
