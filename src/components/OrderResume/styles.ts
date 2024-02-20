import styled from "styled-components";

export const OrderResumeContainer = styled.div``;

export const OrderResume = styled.div`
  border-radius: 6px 44px;
  padding: 4rem;
  background: ${(props) => props.theme["base-card"]};
`;

export const Divider = styled.div`
  border-top: 1px solid ${(props) => props.theme["base-button"]};
  margin: 2.4rem 0;
`;

export const OrderRow = styled.div`
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-size: 1.6rem;
  }

  strong {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const ConfirmButton = styled.button`
  margin-top: 2.4rem;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.yellow};
  padding: 12px 8px;

  font-family: "Roboto";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
