"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    title: "More details",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>100% combed cotton</li>
        <li>180 g/m² fabric weight</li>
        <li>Regular / unisex fit</li>
        <li>Soft & lightweight for all-day comfort</li>
        <li>Tubular construction (no side seams)</li>
        <li>Reinforced neckline</li>
        <li>Double stitching for durability</li>
        <li>Suitable for frequent everyday washing</li>
      </ul>
    ),
  },
  {
    title: "Size & Fit",
    content:
      "Regular unisex fit. For a relaxed look, we recommend choosing one size larger than your usual size.",
  },
  {
    title: "Care Instructions",
    content:
      "Machine wash cold. Do not bleach. Tumble dry low or hang dry. Iron inside out if required.",
  },
  {
    title: "Shipping & Returns",
    content:
      "Orders are shipped within 3–5 business days. Easy returns available within 7 days of delivery.",
  },
];

export default function ProductDetailsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full rounded-2xl bg-white border border-gray-200 divide-y divide-gray-200">
      {sections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={section.title} className="px-6">
            {/* Header */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between py-5 text-left"
            >
              <span className="text-base font-semibold text-gray-900">
                {section.title}
              </span>

              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 pb-5"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-sm text-gray-600 leading-relaxed">
                {section.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
