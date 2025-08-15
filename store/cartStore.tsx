import { Bounce, toast } from "react-toastify";
import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  shippingPrice: number;

  getCartCount: () => number;
  getSubtotal: () => number;
  getGrandTotal: () => number;

  addToCart: (product: CartItem) => void;
  setShippingPrice: (price: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set, get) => {
  // Load initial cart from localStorage
  const savedCart =
    typeof window !== "undefined" ? localStorage.getItem("cartItems") : null;
  const initialCart = savedCart ? JSON.parse(savedCart) : [];

  return {
    cartItems: initialCart,
    shippingPrice: 0,

    getCartCount: () =>
      get().cartItems.reduce((acc, item) => acc + item.quantity, 0),

    getSubtotal: () =>
      get().cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ),

    getGrandTotal: () => get().getSubtotal() + get().shippingPrice,

    addToCart: (product) => {
      set((state) => {
        const existing = state.cartItems.find((item) => item.id === product.id);

        let newCartItems;
        if (existing) {
          newCartItems = state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          toast.success(`تم إضافة ${product.name} إلى السلة`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });

          newCartItems = [...state.cartItems, { ...product }];
        }

        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        }

        return { cartItems: newCartItems };
      });
    },

    setShippingPrice: (price) => {
      set({ shippingPrice: price });
    },

    incrementQuantity: (id) => {
      set((state) => {
        const newCartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        }

        return { cartItems: newCartItems };
      });
    },

    decrementQuantity: (id) => {
      set((state) => {
        const newCartItems = state.cartItems.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        }

        return { cartItems: newCartItems };
      });
    },

    removeFromCart: (id) => {
      const item = get().cartItems.find((i) => i.id === id);

      set((state) => {
        const newCartItems = state.cartItems.filter((item) => item.id !== id);

        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        }

        if (item) {
          toast.success(`تم إزالة ${item.name} من السلة`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
        }

        return { cartItems: newCartItems };
      });
    },
    clearCart: () => {
      set(() => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("cartItems");
        }
        return { cartItems: [] };
      });

      toast.success(`تم إفراغ السلة`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    },
  };
});

export default useCartStore;
