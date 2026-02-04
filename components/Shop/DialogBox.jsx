'use client';

import { useState } from 'react';

const ranges = [
  '₹299 – ₹999',
  '₹1000 – ₹1599',
  '₹1600 – ₹5999',
  '₹10000+',
];

export default function PriceFilterDialog({
  open,
  onClose,
  onApply,
}) {
  const [selected, setSelected] = useState([]);

  const toggle = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay (Mobile Only) */}
      <div
        onClick={onClose}
        className="
          fixed inset-0 z-40
          bg-black/30

          md:hidden
        "
      />

      {/* Dialog (Mobile / Tablet Only) */}
      <div
        className="
          fixed z-50
          left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2

          w-[92%] max-w-sm
          bg-white

          rounded-2xl
          shadow-2xl
          border border-gray-200

          p-5
          font-mono

          md:hidden
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">

          <h3 className="text-base font-semibold text-gray-900">
            Price Range
          </h3>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>

        </div>

        {/* Options */}
        <div className="space-y-3">

          {ranges.map((item) => (
            <label
              key={item}
              className="
                flex items-center gap-3
                cursor-pointer

                px-2 py-1.5
                rounded-lg

                hover:bg-gray-50
                transition
              "
            >
              <Checkbox
                checked={selected.includes(item)}
                onClick={() => toggle(item)}
              />

              <span className="text-sm text-gray-700">
                {item}
              </span>

            </label>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-5 flex gap-3">

          <button
            onClick={() => setSelected([])}
            className="
              flex-1 py-2
              border rounded-lg

              text-sm
              hover:bg-gray-50
            "
          >
            Reset
          </button>

          <button
            onClick={() => {
              onApply(selected);
              onClose();
            }}
            className="
              flex-1 py-2

              bg-cyan-500
              hover:bg-cyan-600

              text-white
              rounded-lg

              text-sm font-medium
            "
          >
            Apply
          </button>

        </div>
      </div>
    </>
  );
}


/* Custom Checkbox */

function Checkbox({ checked, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        w-5 h-5 rounded-md
        border-2

        flex items-center justify-center
        transition

        ${
          checked
            ? 'bg-cyan-500 border-cyan-500'
            : 'border-gray-300'
        }
      `}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
}
