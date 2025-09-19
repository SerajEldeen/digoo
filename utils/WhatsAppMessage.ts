import useCartStore from "@/store/cartStore";

export default function getWhatsAppLink() {
  const cartItems = useCartStore.getState().cartItems;
  const shippingPrice = useCartStore.getState().shippingPrice;

  if (!cartItems || cartItems.length === 0 || !shippingPrice) return null;
  let message = "السلام عليكم,عايزة تأكيد على طلبى:\n\n";

  cartItems.forEach((e, i) => {
    message += `${i + 1}. ${e.name}\n- السعر:${e.price}\n الكميه:${
      e.quantity
    }\n`;
  });
  const totalProducts = cartItems.reduce(
    (sum, e) => sum + e.price * e.quantity,
    0
  );
  const totalShipping = totalProducts + shippingPrice;
  message += `\n🚚 الشحن: ${shippingPrice} جنيه\n`;
  message += `📦 الإجمالى: ${totalShipping} جنيه\n\n`;

  const phoneNo = "";
  return `https://wa.me/${phoneNo}?text=${encodeURIComponent(message)}`;
}
