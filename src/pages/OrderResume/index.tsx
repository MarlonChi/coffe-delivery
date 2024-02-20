import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import DeliveryImage from "../../assets/order-confirm.svg";

import * as S from "./styles";

export const OrderConfirm = () => {
  return (
    <S.OrderConfirmContainer>
      <S.OrderConfirmInfos>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <S.InfoBox>
          <S.ResumeItem>
            <S.Icon style={{ background: "#8047f8" }}>
              <MapPin size={16} weight="fill" />
            </S.Icon>
            <div>
              Entrega em <b>Rua João Daniel Martinelli, 102</b>
              , <br /> Farrapos - Porto Alegre, RS
            </div>
          </S.ResumeItem>
          <S.ResumeItem>
            <S.Icon style={{ background: "#DBAC2C" }}>
              <Timer size={16} weight="fill" />
            </S.Icon>
            <div>
              Previsão de entrega <br /> <b>20 min - 30 min</b>
            </div>
          </S.ResumeItem>
          <S.ResumeItem>
            <S.Icon style={{ background: "#C47F17" }}>
              <CurrencyDollar size={16} />
            </S.Icon>
            <div>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </div>
          </S.ResumeItem>
        </S.InfoBox>
      </S.OrderConfirmInfos>
      <S.ImageContainer>
        <img
          src={DeliveryImage}
          alt="Homem em uma moto indo a caminho da entrega"
        />
      </S.ImageContainer>
    </S.OrderConfirmContainer>
  );
};
