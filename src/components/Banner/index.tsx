import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import BannerImage from "../../assets/banner-coffee.svg";

import * as S from "./styles";

export const Banner = () => {
  return (
    <S.BannerContainer>
      <S.BannerInformation>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <S.Benefits>
          <S.Item>
            <S.Icon>
              <ShoppingCart size={16} weight="fill" />
            </S.Icon>
            <span>Compra simples e segura</span>
          </S.Item>
          <S.Item>
            <S.Icon>
              <Package size={16} weight="fill" />
            </S.Icon>
            <span>Embalagem mantém o café intacto</span>
          </S.Item>
          <S.Item>
            <S.Icon>
              <Timer size={16} weight="fill" />
            </S.Icon>
            <span>Entrega rápida e rastreada</span>
          </S.Item>
          <S.Item>
            <S.Icon>
              <Coffee size={16} weight="fill" />
            </S.Icon>
            <span>O café chega fresquinho até você</span>
          </S.Item>
        </S.Benefits>
      </S.BannerInformation>
      <S.Image>
        <img
          src={BannerImage}
          alt="Imagem de um copo de café em um fundo amarelo"
        />
      </S.Image>
    </S.BannerContainer>
  );
};
