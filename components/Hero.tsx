"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#FFF8F0] pt-32 pb-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 uppercase tracking-[4px] text-[#A67C52]">
            Premium Homemade Sweets
          </p>

          <h1 className="text-4xl font-black leading-tight text-[#4B2E2E] sm:text-5xl lg:text-7xl">
            Taste the
            <br />
            Sweetness of
            <br />
            Tradition.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#6B4F4F] lg:mx-0">
            Freshly handcrafted sweets made with love, premium ingredients,
            and authentic traditional recipes for every celebration.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

            <button className="flex items-center gap-2 rounded-full bg-[#D4A373] px-8 py-4 font-semibold text-white hover:scale-105 transition">
              Shop Now
              <ArrowRight size={20} />
            </button>

            <button className="rounded-full border-2 border-[#D4A373] px-8 py-4 font-semibold text-[#4B2E2E] hover:bg-[#D4A373] hover:text-white transition">
              View Products
            </button>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#F7E7CE] shadow-2xl sm:h-96 sm:w-96">

            <div className="text-center">
              <div className="text-7xl">🍬</div>

              <p className="mt-4 text-xl font-bold text-[#4B2E2E]">
                Homemade Happiness
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}