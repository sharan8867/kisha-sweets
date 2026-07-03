export function createWhatsAppMessage(
  cart: {
    name: string;
    price: number;
    quantity: number;
  }[],
  total: number
) {
  let message = "🍬 *Kisha Sweets Order*%0A%0A";

  cart.forEach((item) => {
    message += `• ${item.name} x ${item.quantity} = Rs.${item.price * item.quantity}%0A`;
  });

  message += "%0A------------------------%0A";
  message += `*Total:* Rs.${total}%0A%0A`;
  message += "Name:%0APhone:%0AAddress:%0A";

  return message;
}