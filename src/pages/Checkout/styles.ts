import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3.2rem;

  @media (max-width: 1140px) {
    grid-template-columns: 1fr;
  }
`;
