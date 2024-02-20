import { Product } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
}

export const addProductToCartAction = (product: Product) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: { product },
  };
};
