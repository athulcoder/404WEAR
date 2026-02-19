"use client";
import React, { useState } from "react";

const SizeChart = () => {
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState("in"); // "cm" or "in"

  if (!open) {
    return (
      <span
        className="justify-self-end items-end bg-cyan-700 text-white px-3 rounded-lg py-1 text-sm cursor-pointer hover:bg-cyan-800"
        onClick={() => setOpen(true)}
      >
        Size chart
      </span>
    );
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-labelledby="size-guide-title"
        aria-describedby="size-guide-desc"
        className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl max-h-[85vh]
                   -translate-x-1/2 -translate-y-1/2 overflow-y-auto
                   rounded-lg border bg-white text-black p-6 shadow-xl
                   animate-in fade-in zoom-in-95"
      >
        {/* Header */}
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2
            id="size-guide-title"
            className="text-lg font-semibold tracking-tight font-mono"
          >
            Size Guide
          </h2>
          <p
            id="size-guide-desc"
            className="text-sm text-gray-600"
          >
            Size chart and fit reference for this product.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 mt-6">
          {/* Unit Toggle */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-gray-500">Units:</span>

            <button
              onClick={() => setUnit("cm")}
              className={`px-2 py-0.5 rounded ${
                unit === "cm"
                  ? "bg-gray-100 text-black font-bold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              cm
            </button>

            <span className="text-gray-400">|</span>

            <button
              onClick={() => setUnit("in")}
              className={`px-2 py-0.5 rounded ${
                unit === "in"
                  ? "bg-gray-100 text-black font-bold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              in
            </button>
          </div>

          {/* Table */}
          <div className="space-y-2">
            <p className="font-mono text-sm">
              Unisex T-Shirt (Regular Fit)
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-medium">Size</th>
                    <th className="text-left py-2 pr-4 font-medium">
                      Width (A)
                    </th>
                    <th className="text-left py-2 font-medium">
                      Length (B)
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-600">
                  {[
                    ["S", "19.7", "27.6"],
                    ["M", "20.9", "28.3"],
                    ["L", "22", "29.1"],
                    ["XL", "23.2", "29.9"],
                    ["XXL", "24.4", "30.7"],
                    ["3XL", "25.6", "31.5"],
                  ].map(([size, width, length]) => (
                    <tr key={size} className="border-b border-gray-100 last:border-0">
                      <td className="py-2 pr-4">{size}</td>
                      <td className="py-2 pr-4">
                        {width} {unit}
                      </td>
                      <td className="py-2">
                        {length} {unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Measurements tolerance is ±5%.
            </p>
          </div>

          {/* Notes */}
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              Our Classic T-shirts are designed for a Regular / Unisex fit.
              If you prefer a looser look, choose one size larger.
            </p>
            <p>
              Since products are made-to-order, we cannot accept returns
              for incorrect size selection. Compare with a shirt you own.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100
                     focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          ✕
        </button>
      </div>
    </>
  );
};

export default SizeChart;
