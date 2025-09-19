"use client";
import BackArrow from "@/components/BackArrow";
import Image from "next/image";
import useCartStore from "@/store/cartStore";
import getWhatsAppLink from "@/utils/WhatsAppMessage";
import { toast } from "react-toastify";
import shippingOptions from "@/app/data/shippingOptions.json";

function Page() {
  const cartItems = useCartStore((state) => state.cartItems);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const setShippingPrice = useCartStore((state) => state.setShippingPrice);
  const getGrandTotal = useCartStore((state) => state.getGrandTotal());
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleSendOrder = () => {
    const link = getWhatsAppLink();
    if (!link) {
      toast.error(" لا يوجد منتجات فى العربة او لم يتم تحديد الشحن");
      return;
    }
    window.open(link, "_blank");
    clearCart();
  };
  return (
    <section className="px-7 py-12 ">
      <BackArrow />
      {cartItems.length === 0 ? (
        <h1 className="text-center mb-8">لا يوجد منتجات في السلة</h1>
      ) : (
        <h1 className="text-center mb-8">
          منتجاتى [{cartItems.length} منتجات]
        </h1>
      )}
      <main className="w-full max-w-5xl mx-auto">
        {/* Headers */}
        <div className="hidden md:grid grid-cols-4 text-gray-700 font-semibold border-b border-gray-400 pb-2 text-center">
          <div>المنتج</div>
          <div>السعر</div>
          <div>الكمية</div>
          <div>الإجمالي</div>
        </div>

        {cartItems.map((e) => (
          <div key={e.id}>
            {/*  Product row  */}
            <div className="grid grid-cols-1 md:grid-cols-4 items-center py-5 border-b border-gray-400 text-center gap-4 md:gap-0">
              {/* Product: Image + Name */}
              <div className="flex flex-col  md:flex-row items-center justify-center gap-3 text-center md:text-left">
                <Image src={e.image} alt={e.name} width={50} height={50} />
                <p className="text-sm text-[#8B5E3C]">{e.name}</p>
              </div>

              {/* Price */}
              <div className="text-gray-400 md:text-center">{e.price} EGP</div>

              {/* Quantity */}
              <div className="flex items-center justify-center gap-2 border-2 rounded max-w-[120px] mx-auto px-2">
                <button
                  type="button"
                  className="border-l-2 px-3 font-bold text-xl"
                  onClick={() => incrementQuantity(e.id)}
                >
                  +
                </button>
                <span className="px-4 min-w-[24px] text-center">
                  {e.quantity}
                </span>
                <button
                  type="button"
                  className="border-r-2 px-3 font-bold text-xl"
                  onClick={() => decrementQuantity(e.id)}
                >
                  -
                </button>
              </div>

              {/* Total + Remove button */}
              <div className="flex items-center justify-center gap-3 md:justify-center">
                <span>{e.price * e.quantity} EGP</span>
                <div className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 flex items-center gap-1 hover:bg-gray-300 cursor-pointer transition">
                  <button
                    type="button"
                    className="text-[#8B5E3C] hover:text-[#A0522D] text-lg font-bold leading-none cursor-pointer"
                    aria-label="Remove"
                    onClick={() => removeFromCart(e.id)}
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Total and shipping section */}
        <div className="w-full md:w-[45%] bg-gray-200 py-5 px-5  rounded ml-auto">
          <div className="flex justify-between pb-3">
            <h5>الاجمالى الفرعى</h5>
            <span>{getSubtotal()}</span>
          </div>

          <div className="flex justify-between items-center pb-3">
            <label htmlFor="shipping">الشحن</label>
            <select
              id="shipping"
              className="border border-gray-400 px-3 py-1 rounded"
              defaultValue=""
              required
              onChange={(e) => {
                const price = parseInt(e.target.value);
                setShippingPrice(price);
              }}
            >
              <option value="" disabled hidden>
                اختار المكانٍ
              </option>
              {shippingOptions.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between pb-3">
            <h5>الاجمالى الكلى</h5>
            <span>{getGrandTotal}</span>
          </div>
        </div>

        {/* WhatsApp order button */}
        <div className="pt-5 flex justify-center">
          <button
            onClick={handleSendOrder}
            className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-2 px-5 rounded shadow-md hover:bg-green-600"
          >
            اتمام الطلب عبر الواتس اب
            <Image
              src="/images/whatsApp.png"
              alt="WhatsApp"
              height={40}
              width={40}
            />
          </button>
        </div>
      </main>
    </section>
  );
}

export default Page;
