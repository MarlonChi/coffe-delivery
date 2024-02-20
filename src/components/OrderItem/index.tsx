import { Minus, Plus, Trash } from "phosphor-react";

import { data } from "../../data/data";

import * as S from "./styles";

export const OrderItem = () => {
  const handleIncrement = () => {
    console.log("increment");
  };

  const handleDecrement = () => {
    console.log("decrement");
  };

  const handleRemoveItem = () => {
    console.log("remove");
  };

  const productPrice = data[0].price * 1;

  return (
    <S.OrderItemContainer>
      <img src={data[0].image} alt={data[0].name} />
      <S.Actions>
        {data[0].name}
        <S.Inputs>
          <S.QuantityInputContainer>
            <S.Decrease onClick={handleDecrement}>
              <Minus size={14} weight="bold" />
            </S.Decrease>
            <S.Quantity type="text" value="1" readOnly />
            <S.Increase onClick={handleIncrement}>
              <Plus size={14} weight="bold" />
            </S.Increase>
          </S.QuantityInputContainer>
          <S.RemoveButton onClick={handleRemoveItem}>
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
