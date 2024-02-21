import { Product } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  INCREMENT_PRODUCT_QUANTITY = "INCREMENT_PRODUCT_QUANTITY",
  DECREMENT_PRODUCT_QUANTITY = "DECREMENT_PRODUCT_QUANTITY",
}

export const addProductToCartAction = (product: Product) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product },
  };
};

export const incrementProductQuantityAction = (product: Product) => {
  return {
    type: ActionTypes.INCREMENT_PRODUCT_QUANTITY,
    payload: { product },
  };
};

export const decrementProductQuantityAction = (productId: number) => {
  return {
    type: ActionTypes.DECREMENT_PRODUCT_QUANTITY,
    payload: { productId },
  };
};
