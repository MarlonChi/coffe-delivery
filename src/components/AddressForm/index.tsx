import { MapPinLine } from "phosphor-react";

import * as S from "./styles";

export const AddressForm = () => {
  return (
    <S.AddressFormContainer>
      <h3>Complete seu pedido</h3>
      <S.AddressForm>
        <S.CardHeader>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </S.CardHeader>
        <S.InputGroup>
          <input name="cep" type="text" placeholder="CEP" required />
          <input
            name="address"
            type="text"
            placeholder="Rua"
            required
            style={{ width: "100%" }}
          />
          <S.InputRow>
            <input name="number" type="text" placeholder="Número" required />
            <input
              name="complement"
              type="text"
              placeholder="Complemento"
              style={{ width: "100%" }}
            />
          </S.InputRow>
          <S.InputRow>
            <input name="district" type="text" placeholder="Bairro" required />
            <input
              name="city"
              type="text"
              placeholder="Cidade"
              required
              style={{ width: "100%" }}
            />
            <input
              name="state"
              type="text"
              placeholder="UF"
              required
              style={{ width: "6rem" }}
            />
          </S.InputRow>
        </S.InputGroup>
      </S.AddressForm>
    </S.AddressFormContainer>
  );
};
