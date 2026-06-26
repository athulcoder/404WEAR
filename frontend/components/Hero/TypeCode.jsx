"use client";

import { useEffect, useState } from "react";

export default function TypingCode() {
  // Tokenized + Colored Code
  const tokens = [
    { text: "const", className: "text-blue-400" },
    { text: " ", className: "" },
    { text: "developerStyle", className: "text-cyan-400" },
    { text: " = ", className: "text-white" },
    { text: "{\n", className: "text-white" },

    { text: "  comfort", className: "text-purple-400" },
    { text: ': "maximum",\n', className: "text-white" },
    { text: "  quality", className: "text-purple-400" },
    { text: ': "premium",\n', className: "text-white" },
    { text: "  vibes", className: "text-purple-400" },
    { text: ': "hacker aesthetic",\n', className: "text-white" },
    { text: "  shipping", className: "text-purple-400" },
    { text: ': "fast"\n', className: "text-white" },

    { text: "};", className: "text-white" },
  ];

  const [typed, setTyped] = useState([]);
  const [tokenIndex, setTokenIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (tokenIndex >= tokens.length) return;

    const current = tokens[tokenIndex].text;

    const timer = setTimeout(() => {
      setTyped((prev) => {
        const copy = [...prev];

        if (!copy[tokenIndex]) {
          copy[tokenIndex] = "";
        }

        copy[tokenIndex] += current[charIndex];

        return copy;
      });

      if (charIndex + 1 < current.length) {
        setCharIndex((c) => c + 1);
      } else {
        setTokenIndex((t) => t + 1);
        setCharIndex(0);
      }
    }, 35); // typing speed

    return () => clearTimeout(timer);
  }, [tokenIndex, charIndex]);

  return (
    <pre className="bg-[#1e1e1e] p-4 rounded-lg overflow-x-auto">
      <code className="font-['Source_Code_Pro'] text-sm leading-relaxed whitespace-pre">

        {typed.map((text, i) => (
          <span
            key={i}
            className={tokens[i].className}
          >
            {text}
          </span>
        ))}

        {/* Cursor */}
        <span className="inline-block w-[2px] h-4 bg-green-400 animate-blink ml-1" />

      </code>

      <style jsx>{`
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </pre>
  );
}
