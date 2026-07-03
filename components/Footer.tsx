import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4B2E2E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Kisha Sweets
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Homemade sweets crafted with love using premium ingredients.
              Bringing sweetness to every celebration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#D4A373]">
                  Home
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-[#D4A373]">
                  Products
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#D4A373]">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#D4A373]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+94 77 756 3803</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>kishasweets@email.com</span>
              </div>

            </div>

            <div className="mt-8 flex gap-4">

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Kisha Sweets. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}