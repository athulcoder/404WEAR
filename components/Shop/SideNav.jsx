'use client';

import React from 'react';

const FilterSidebar = () => {
  return (
    <aside
      className="
        bg-white
        rounded-2xl
        border border-gray-200
        shadow-sm

        p-5

        font-mono text-sm text-gray-700

        h-fit
        sticky top-18

        flex flex-col
      "
    >
      {/* Header */}
      <h2 className="font-semibold text-base text-gray-900 mb-4">
        Filters
      </h2>

      {/* Content */}
      <div className="flex-1 space-y-4">

        {/* Category */}
        <Section title="Category">
          <Check label="T-shirts" />
          <Check label="Hoodies" />
        </Section>

        {/* Type */}
        <Section title="Type">
          <Check label="Regular" />
          <Check label="Oversized" />
          <Check label="Slim Fit" />
        </Section>

        {/* Sleeve */}
        <Section title="Sleeve">
          <Check label="Half Sleeve" />
          <Check label="Full Sleeve" />
        </Section>

        {/* Price */}
        <Section title="Price">
          <input
            type="range"
            className="w-full accent-cyan-500"
          />

          <div className="flex justify-between text-xs mt-1 text-gray-500">
            <span>$50</span>
            <span>$200</span>
          </div>
        </Section>

        {/* Discount */}
        <Section title="Discount">
          <Check label="10%+" />
          <Check label="25%+" />
          <Check label="50%+" />
        </Section>

        {/* Colors */}
        <Section title="Colors">
          <div className="grid grid-cols-6 gap-2">
            {colors.map((c, i) => (
              <div
                key={i}
                className={`
                  w-5 h-5 rounded-full border cursor-pointer
                  hover:ring-2 hover:ring-cyan-500
                  ${c}
                `}
              />
            ))}
          </div>
        </Section>

        {/* Size */}
        <Section title="Size">
          <div className="flex flex-wrap gap-2">
            {['S','M','L','XL','XXL'].map(size => (
              <Size key={size}>{size}</Size>
            ))}
          </div>
        </Section>

      </div>

      {/* Apply Button */}
      <button
        className="
          w-full mt-2 py-2.5

          bg-cyan-500
          hover:bg-cyan-600

          text-white
          rounded-full

          text-sm font-medium
          transition
        "
      >
        Apply Filter
      </button>
    </aside>
  );
};

export default FilterSidebar;


/* Components */

const Section = ({ title, children }) => (
  <div>
    <h3 className="font-medium mb-1.5 text-gray-900">
      {title}
    </h3>

    <div className="space-y-1">
      {children}
    </div>
  </div>
);

const Check = ({ label }) => (
  <label className="flex items-center gap-2 cursor-pointer group">
    <input
      type="checkbox"
      className="accent-cyan-500"
    />

    <span className="text-sm group-hover:text-gray-900">
      {label}
    </span>
  </label>
);

const Size = ({ children }) => (
  <button
    className="
      px-3 py-1.5
      rounded-full

      bg-gray-100
      hover:bg-cyan-50
      hover:text-cyan-600

      text-xs
      transition
    "
  >
    {children}
  </button>
);


/* Data */

const colors = [
  'bg-black',
  'bg-white',
  'bg-gray-400',
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-400',
  'bg-pink-500',
  'bg-purple-500',
  'bg-orange-400',
  'bg-cyan-500',
  'bg-teal-500',
];
