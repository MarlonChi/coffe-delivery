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
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.product.id
      );

      return produce(state, (draft) => {
        if (existingProductIndex !== -1) {
          draft.products[existingProductIndex].quantity =
            (draft.products[existingProductIndex].quantity ?? 0) + 1;
        } else {
          draft.products.push({ ...action.payload.product, quantity: 1 });
        }
      });
    }

    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return produce(state, (draft) => {
        const productToRemove = draft.products.findIndex(
          (product) => product.id === action.payload.productId
        );
        if (productToRemove !== -1) {
          draft.products.splice(productToRemove, 1);
        }
      });

    case ActionTypes.INCREMENT_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        const newProduct = action.payload.product;
        const productIndex = draft.products.findIndex(
          (product) => product.id === newProduct.id
        );
        if (productIndex !== -1) {
          draft.products[productIndex].quantity =
            (draft.products[productIndex].quantity ?? 0) + 1;
        } else {
          draft.products.push({
            ...newProduct,
            quantity: 1,
          });
        }
      });

    case ActionTypes.DECREMENT_PRODUCT_QUANTITY:
      return produce(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (product) => product.id === action.payload.productId
        );
        if (productIndex !== -1) {
          draft.products[productIndex].quantity = Math.max(
            0,
            (draft.products[productIndex].quantity ?? 0) - 1
          );
          if (draft.products[productIndex].quantity === 0) {
            draft.products.splice(productIndex, 1);
          }
        }
      });

    default:
      return state;
  }
};
