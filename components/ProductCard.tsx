"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      <div className="relative h-64 w-full bg-[#F8EFE6]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">

        <span className="rounded-full bg-[#FFF4E5] px-3 py-1 text-sm font-medium text-[#A67C52]">
          {product.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-[#4B2E2E]">
          {product.name}
        </h3>

        <p className="mt-3 text-[#6B4F4F] line-clamp-3">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h4 className="text-2xl font-bold text-[#D4A373]">
              Rs. {product.price}
            </h4>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 rounded-full bg-[#D4A373] px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#BC8A5F]"
          >
            <ShoppingCart size={18} />
            Add
          </button>

        </div>

      </div>

    </div>
  );
}