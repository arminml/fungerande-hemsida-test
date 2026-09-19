"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export type CartItem = {
  id: string;
  slug: string;
  colorId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (slug: string, colorId: string, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function lineId(slug: string, colorId: string) {
  return `${slug}:${colorId}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const addItem = useCallback((slug: string, colorId: string, quantity = 1) => {
    setItems((current) => {
      const id = lineId(slug, colorId);
      const existing = current.find((item) => item.id === id);
      if (existing) {
        return current.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
        );
      }
      return [...current, { id, slug, colorId, quantity }];
    });
    setCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((current) =>
      quantity < 1
        ? current.filter((item) => item.id !== id)
        : current.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const product = products.find((entry) => entry.slug === item.slug);
        if (!product) return acc;
        return {
          count: acc.count + item.quantity,
          subtotal: acc.subtotal + product.price * item.quantity,
        };
      },
      { count: 0, subtotal: 0 },
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      cartOpen,
      setCartOpen,
      searchOpen,
      setSearchOpen,
    }),
    [items, count, subtotal, addItem, updateQuantity, removeItem, cartOpen, searchOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}

export function getCartProduct(item: CartItem): Product | undefined {
  return products.find((product) => product.slug === item.slug);
}
