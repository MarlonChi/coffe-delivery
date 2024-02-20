import { AddressForm } from "../../components/AddressForm";
import { CheckoutPayments } from "../../components/CheckoutPayments";
import { OrderResume } from "../../components/OrderResume";

import * as S from "./styles";

export const Checkout = () => {
  return (
    <S.CheckoutContainer>
      <div>
        <AddressForm />
        <CheckoutPayments />
      </div>
      <div>
        <OrderResume />
      </div>
    </S.CheckoutContainer>
  );
};
