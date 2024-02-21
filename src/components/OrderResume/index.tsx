import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { OrderItem } from "../OrderItem";
import { CartContext } from "../../contexts/CartContext";

import * as S from "./styles";

export const OrderResume = () => {
  const { products } = useContext(CartContext);

  const totalItems = products.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);

  const totalCart = totalItems + 8;

  return (
    <S.OrderResumeContainer>
      <h3>Cafés selecionados</h3>
      <S.OrderResume>
        {products.map((product) => (
          <>
            <OrderItem product={product} />
            <S.Divider />
          </>
        ))}

        <S.OrderRow>
          Total de itens
          <span>
            {totalItems.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </S.OrderRow>
        <S.OrderRow>
          Entrega <span>R$ 8,00</span>
        </S.OrderRow>
        <S.OrderRow>
          <strong>Total</strong>
          <strong>
            <span>
              {totalCart.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </strong>
        </S.OrderRow>

        <NavLink to="/order-resume">
          <S.ConfirmButton>Confirmar Pedido</S.ConfirmButton>
        </NavLink>
      </S.OrderResume>
    </S.OrderResumeContainer>
  );
};
