"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Award, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-[#A67C52]">
            About Us
          </p>

          <h2 className="mt-4 text-5xl font-black text-[#4B2E2E]">
            Homemade With Love
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#6B4F4F]">
            At Kisha Sweets, every sweet is handcrafted with care using
            premium ingredients and traditional recipes. Our mission is
            to bring authentic homemade taste to every celebration.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <HeartHandshake className="text-[#D4A373]" size={28} />
              <div>
                <h3 className="font-bold text-[#4B2E2E]">
                  Made With Love
                </h3>
                <p className="text-[#6B4F4F]">
                  Every product is freshly prepared with care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Award className="text-[#D4A373]" size={28} />
              <div>
                <h3 className="font-bold text-[#4B2E2E]">
                  Premium Quality
                </h3>
                <p className="text-[#6B4F4F]">
                  We use only high-quality ingredients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="text-[#D4A373]" size={28} />
              <div>
                <h3 className="font-bold text-[#4B2E2E]">
                  Fresh Every Day
                </h3>
                <p className="text-[#6B4F4F]">
                  Every order is freshly prepared for the best taste.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex h-[500px] items-center justify-center rounded-[40px] bg-[#F7E7CE] shadow-2xl">
            <div className="text-center">
              <div className="text-8xl">🍬</div>

              <h3 className="mt-6 text-3xl font-bold text-[#4B2E2E]">
                Since 2025
              </h3>

              <p className="mt-3 text-[#6B4F4F]">
                Homemade Sweet Experience
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}