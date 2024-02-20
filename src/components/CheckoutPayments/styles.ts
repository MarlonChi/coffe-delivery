import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutPaymentsContainer = styled.div`
  margin-top: 1.2rem;
  padding: 4rem;
  border-radius: 0.6rem;
  background: ${(props) => props.theme["base-card"]};
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 0.8rem;

  h3 {
    font-family: "Roboto";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const PaymentType = styled(RadioGroup.Root)`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PaymentTypeButton = styled(RadioGroup.Item)`
  padding: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  font-family: "Roboto";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};

  cursor: pointer;

  &:hover {
    outline: 1px solid ${(props) => props.theme.purple};
  }

  &[data-state="checked"] {
    border: 1px solid ${(props) => props.theme.purple};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`;
