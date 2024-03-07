import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '../types/Product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
}

const defaultValue: CartContextType = {
  cartItems: [],
  addToCart: () => Object,
  removeItem: async () => Promise.resolve(),
};

export const CartContext = createContext<CartContextType>(defaultValue)

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (productToAdd: Product, quantity = 1) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(item => item.product.id === productToAdd.id);
  
      if (existingCartItem) {
        return prevCartItems.map(item =>
          item.product.id !== productToAdd.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCartItems, { product: productToAdd, quantity }];
      }
    });
  };
  
  const removeItem = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
