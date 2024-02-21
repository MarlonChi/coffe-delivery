import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { CartContext } from "../../contexts/CartContext";

import LogoImg from "../../assets/logo.svg";

import * as S from "./styles";

export const Header = () => {
  const { products } = useContext(CartContext);

  const totalQuantity = products.reduce((acc, item) => {
    return acc + (item.quantity || 0);
  }, 0);

  return (
    <S.HeaderContainer>
      <NavLink to="/">
        <img src={LogoImg} />
      </NavLink>
      <nav>
        <NavLink to="/checkout">
          <MapPin size={22} weight="fill" />
          Erechim, RS
        </NavLink>
        <NavLink to="/checkout">
          <S.Cart>
            <ShoppingCart size={22} weight="fill" />
            {totalQuantity > 0 && <S.Badge>{totalQuantity}</S.Badge>}
          </S.Cart>
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
};
