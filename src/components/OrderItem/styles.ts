import styled from "styled-components";

export const OrderItemContainer = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 6.4rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Inputs = styled.div`
  margin-top: 0.8rem;

  display: flex;
  gap: 0.8rem;
`;

export const RemoveButton = styled.button`
  border-radius: 6px;
  padding: 0.8rem;
  border: none;
  background: ${(props) => props.theme["base-button"]};

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 4px;

  cursor: pointer;

  svg {
    color: #8047f8;
  }

  &:hover {
    transition: background 0.4s;
    background: ${(props) => props.theme["base-hover"]};
  }
`;

export const Price = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
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
