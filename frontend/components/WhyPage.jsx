"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Leaf,
  Sparkles,
  Truck,
  Award,
  Heart,
  Zap,
  RefreshCcw,
} from "lucide-react";

export default function WhyPage() {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Premium Quality",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Eco Friendly",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Built to Last",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Fast Delivery",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Trusted Brand",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Customer Favorite",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Modern Design",
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "Easy Returns",
    },
  ];

  // Duplicate only for smooth infinite loop
  const loopFeatures = [...features, ...features];

  return (
    <section className="w-full py-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
          >
            {loopFeatures.map((item, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0
                  bg-gray-50
                  border
                  border-gray-100
                  rounded-full
                  px-4
                  py-2
                  flex
                  items-center
                  gap-2
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>

                {/* Text */}
                <span className="text-sm font-medium whitespace-nowrap text-gray-800">
                  {item.title}
                </span>
              </div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
