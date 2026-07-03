"use client";

import { useCart } from "@/context/CartContext";
import { createWhatsAppMessage } from "../lib/whatsapp";

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  isOpen,
  onClose,
}: CartDrawerProps) {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const phoneNumber = "94777563803"; // Replace with your WhatsApp number

    const message = createWhatsAppMessage(cart, totalPrice);

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );

    clearCart();
    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50"
      />

      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold text-[#4B2E2E]">
            Shopping Cart
          </h2>

          <button
            onClick={onClose}
            className="text-3xl text-gray-500 hover:text-red-500"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border p-4"
                >
                  <h3 className="font-bold text-[#4B2E2E]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-[#D4A373]">
                    Rs. {item.price}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="h-8 w-8 rounded-full bg-gray-200"
                    >
                      -
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="h-8 w-8 rounded-full bg-gray-200"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-6">
          <div className="mb-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>Rs. {totalPrice}</span>
          </div>

          <button
            onClick={handleWhatsApp}
            className="w-full rounded-full bg-green-600 py-4 font-semibold text-white hover:bg-green-700"
          >
            Checkout via WhatsApp
          </button>
        </div>

      </div>
    </>
  );
}