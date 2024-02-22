import { useContext } from "react";
import { MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";

import { UserContext } from "../../contexts/UserContext";

import * as S from "./styles";

export const AddressForm = () => {
  const { register, handleSubmit } = useForm();
  const { handleSetAddressData } = useContext(UserContext);

  function handleCreateAddressData(data: any) {
    handleSetAddressData(data);
  }

  return (
    <S.AddressFormContainer>
      <h3>Complete seu pedido</h3>
      <S.AddressForm onSubmit={handleSubmit(handleCreateAddressData)}>
        <S.CardHeader>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </S.CardHeader>
        <S.InputGroup>
          <input type="text" placeholder="CEP" required {...register("cep")} />
          <input
            type="text"
            placeholder="Rua"
            required
            style={{ width: "100%" }}
            {...register("address")}
          />
          <S.InputRow>
            <input
              type="text"
              placeholder="Número"
              required
              {...register("number")}
            />
            <input
              type="text"
              placeholder="Complemento"
              style={{ width: "100%" }}
              {...register("complement")}
            />
          </S.InputRow>
          <S.InputRow>
            <input
              type="text"
              placeholder="Bairro"
              required
              {...register("district")}
            />
            <input
              type="text"
              placeholder="Cidade"
              required
              style={{ width: "100%" }}
              {...register("city")}
            />
            <input
              type="text"
              placeholder="UF"
              required
              style={{ width: "6rem" }}
              {...register("state")}
            />
          </S.InputRow>
        </S.InputGroup>
        <S.AddAddress type="submit">Salvar endereço</S.AddAddress>
      </S.AddressForm>
    </S.AddressFormContainer>
  );
};
