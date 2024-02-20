import { NavLink } from "react-router-dom";

import { OrderItem } from "../OrderItem";

import * as S from "./styles";

export const OrderResume = () => {
  const valueTemp = 29.7;
  return (
    <S.OrderResumeContainer>
      <h3>Cafés selecionados</h3>
      <S.OrderResume>
        <OrderItem />
        <S.Divider />

        <S.OrderRow>
          Total de itens
          <span>
            {valueTemp.toLocaleString("pt-BR", {
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
              {valueTemp.toLocaleString("pt-BR", {
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
