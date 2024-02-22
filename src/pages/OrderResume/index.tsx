import { useContext } from "react";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { UserContext } from "../../contexts/UserContext";

import DeliveryImage from "../../assets/order-confirm.svg";

import * as S from "./styles";

export const OrderConfirm = () => {
  const { addressData, paymentMethod } = useContext(UserContext);

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
              Entrega em{" "}
              <b>
                Rua {addressData?.address}, {addressData?.number}
              </b>
              , <br /> {addressData?.district} - {addressData?.city},{" "}
              {addressData?.state}
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
              {paymentMethod === "credit" && <b>Cartão de Crédito</b>}
              {paymentMethod === "debit" && <b>Cartão de Débito</b>}
              {paymentMethod === "money" && <b>Dinheiro</b>}
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
