"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

type NavbarProps = {
  onCartClick?: () => void;
};

export default function Navbar({ onCartClick }: NavbarProps) {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-[#EADBC8] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-[#4B2E2E]">
            Kisha Sweets
          </h1>

          <p className="text-xs uppercase tracking-[3px] text-[#A67C52]">
            Premium Homemade Sweets
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="font-medium text-[#4B2E2E] hover:text-[#D4A373]">
            Home
          </a>

          <a href="#products" className="font-medium text-[#4B2E2E] hover:text-[#D4A373]">
            Products
          </a>

          <a href="#about" className="font-medium text-[#4B2E2E] hover:text-[#D4A373]">
            About
          </a>

          <a href="#contact" className="font-medium text-[#4B2E2E] hover:text-[#D4A373]">
            Contact
          </a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">

          <button
            onClick={onCartClick}
            className="relative rounded-full bg-[#D4A373] p-3 text-white transition hover:scale-105"
          >
            <ShoppingCart size={22} />

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full border border-[#D4A373] p-3 text-[#4B2E2E] md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col p-5">

            <a
              href="#"
              onClick={closeMenu}
              className="py-3 font-medium text-[#4B2E2E]"
            >
              Home
            </a>

            <a
              href="#products"
              onClick={closeMenu}
              className="py-3 font-medium text-[#4B2E2E]"
            >
              Products
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="py-3 font-medium text-[#4B2E2E]"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-3 font-medium text-[#4B2E2E]"
            >
              Contact
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}