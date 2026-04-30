'use client';

import Pagination from './Pagination';
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
    <section className="bg-[#fbfbfb] py-10 px-3 sm:px-6 rounded-2xl min-md:shadow">

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

      <Pagination/>

    </section>
  );
}
