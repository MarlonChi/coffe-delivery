import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Product {
  id: number;
  name: string;
  image: string;
  tags: string[];
  description: string;
  price: number;
  quantity?: number;
}

interface CartState {
  products: Product[];
}

export const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return produce(state, (draft) => {
        draft.products.push(action.payload.product);
      });

    default:
      return state;
  }
};
