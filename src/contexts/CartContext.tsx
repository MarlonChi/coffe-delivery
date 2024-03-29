import { ReactNode, createContext, useReducer } from "react";

import { Product, cartReducer } from "../reducers/cart/reducer";
import {
  addProductToCartAction,
  decrementProductQuantityAction,
  incrementProductQuantityAction,
  removeProductFromCartAction,
} from "../reducers/cart/actions";

interface CartContextType {
  products: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: number) => void;
  incrementProductQuantity: (product: Product) => void;
  decrementProductQuantity: (productId: number) => void;
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

  const removeProductFromCart = (productId: number) => {
    dispatch(removeProductFromCartAction(productId));
  };

  const incrementProductQuantity = (product: Product) => {
    dispatch(incrementProductQuantityAction(product));
  };

  const decrementProductQuantity = (productId: number) => {
    dispatch(decrementProductQuantityAction(productId));
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        removeProductFromCart,
        incrementProductQuantity,
        decrementProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
