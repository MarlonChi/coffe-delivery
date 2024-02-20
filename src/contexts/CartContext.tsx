import { ReactNode, createContext, useReducer } from "react";

import { Product, cartReducer } from "../reducers/cart/reducer";
import { addProductToCartAction } from "../reducers/cart/actions";

interface CartContextType {
  products: Product[];
  addProductToCart: (product: Product) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderType {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderType) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
  });

  const { products } = cartState;

  const addProductToCart = (product: Product) => {
    dispatch(addProductToCartAction(product));
  };

  return (
    <CartContext.Provider value={{ products, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};
