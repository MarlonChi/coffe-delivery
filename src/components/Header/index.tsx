import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import LogoImg from "../../assets/logo.svg";

import * as S from "./styles";

export const Header = () => {
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
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
};
