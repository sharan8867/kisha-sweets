"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="bg-[#FFF8F0] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[6px] text-[#A67C52]">
            Our Collection
          </p>

          <h2 className="mt-4 text-5xl font-black text-[#4B2E2E]">
            Featured Sweets
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6B4F4F]">
            Freshly handcrafted sweets prepared with love using premium
            ingredients and traditional recipes.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: product.id * 0.08,
              }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}