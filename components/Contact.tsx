"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-black text-[#4B2E2E]">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B4F4F]">
            Have questions or want to place an order? Contact us anytime.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <Phone
              className="mx-auto mb-4 text-[#D4A373]"
              size={40}
            />

            <h3 className="text-2xl font-bold text-[#4B2E2E]">
              Phone
            </h3>

            <p className="mt-3 text-[#6B4F4F]">
              +94 77 756 3803
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <Mail
              className="mx-auto mb-4 text-[#D4A373]"
              size={40}
            />

            <h3 className="text-2xl font-bold text-[#4B2E2E]">
              Email
            </h3>

            <p className="mt-3 text-[#6B4F4F]">
              kishasweets@email.com
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <MapPin
              className="mx-auto mb-4 text-[#D4A373]"
              size={40}
            />

            <h3 className="text-2xl font-bold text-[#4B2E2E]">
              Address
            </h3>

            <p className="mt-3 text-[#6B4F4F]">
              Mutur, Trincomalee, Sri Lanka
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}