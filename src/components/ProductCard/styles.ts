import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 0 2rem 2rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ProductImage = styled.div`
  position: relative;
  top: -20px;
`;

export const ProductTag = styled.div`
  display: flex;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 10rem;

    text-transform: uppercase;
    font-size: 1rem;
    line-height: 130%;
    font-weight: bold;
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ProductName = styled.h3`
  margin-top: 1.6rem;
  font-size: 2rem;
  line-height: 130%;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ProductDescription = styled.p`
  margin-top: 0.8rem;
  max-width: 216px;
  width: 100%;

  font-size: 1.4rem;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme["base-label"]};
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.2rem;
`;

export const Price = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-size: 2.4rem;
  line-height: 130%;
  font-weight: 900;
  color: ${(props) => props.theme["base-text"]};
`;

export const CartButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme["purple-dark"]};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s, color 0.2s;

  &:hover {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.purple};
  }
`;

export const QuantityInputContainer = styled.div`
  max-width: 7.2rem;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 4px;

  background: ${(props) => props.theme["base-button"]};
  padding: 0.8rem;
  border-radius: 6px;
`;

const ButtonBase = styled.button`
  color: ${(props) => props.theme.purple};
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }

  &:disabled {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const Decrease = styled(ButtonBase)``;

export const Increase = styled(ButtonBase)``;

export const Quantity = styled.input`
  all: unset;
  width: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
