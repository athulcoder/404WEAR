"use client"
import { useState } from "react";


export default function ColorPicker({colors}) {
  const [selected, setSelected] = useState("black");

  return (
    <div className="flex flex-wrap gap-3 ">
      {colors.map((color) => (
        <button
          key={color.value}
          type="button"
          aria-label={color.name}
          onClick={() => setSelected(color.value)}
          className="flex flex-col items-center gap-1 focus:outline-none"
        >
          <span
            className={`
              relative w-8 h-8 rounded-full cursor-pointer
              ${color.class}
              ${selected === color.value ? "ring-2 ring-offset-2 ring-primary" : ""}
            `}
          />
          <span className="text-[11px] font-mono leading-none text-muted-foreground">
            {color.name}
          </span>
        </button>
      ))}
    </div>
  );
}
