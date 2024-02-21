import { useContext } from "react";
import { Minus, Plus, Trash } from "phosphor-react";

import { Product } from "../../reducers/cart/reducer";
import { CartContext } from "../../contexts/CartContext";

import * as S from "./styles";

interface OrderItemProps {
  product: Product;
}

export const OrderItem = ({ product }: OrderItemProps) => {
  const { addProductToCart, decrementProductQuantity, removeProductFromCart } =
    useContext(CartContext);

  const handleIncrement = (product: Product) => {
    addProductToCart(product);
  };

  const handleDecrement = (productId: number) => {
    decrementProductQuantity(productId);
  };

  const handleRemoveItem = (productId: number) => {
    removeProductFromCart(productId);
  };

  const productPrice = product.price * (product.quantity || 1);

  return (
    <S.OrderItemContainer>
      <img src={product.image} alt={product.name} />
      <S.Actions>
        {product.name}
        <S.Inputs>
          <S.QuantityInputContainer>
            <S.Decrease onClick={() => handleDecrement(product.id)}>
              <Minus size={14} weight="bold" />
            </S.Decrease>
            <S.Quantity type="text" value={product.quantity} readOnly />
            <S.Increase onClick={() => handleIncrement(product)}>
              <Plus size={14} weight="bold" />
            </S.Increase>
          </S.QuantityInputContainer>
          <S.RemoveButton onClick={() => handleRemoveItem(product.id)}>
            <Trash size={16} />
            Remover
          </S.RemoveButton>
        </S.Inputs>
      </S.Actions>
      <S.Price>
        {productPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </S.Price>
    </S.OrderItemContainer>
  );
};
