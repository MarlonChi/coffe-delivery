import styled from "styled-components";

export const OrderConfirmContainer = styled.section`
  margin-top: 6rem;
  display: flex;
  flex-direction: row;
  row-gap: 3.2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
  }
`;

export const OrderConfirmInfos = styled.div`
  h2 {
    font-size: 3.2rem;
    line-height: 130%;
    font-weight: 900;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-family: "Roboto";
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const InfoBox = styled.div`
  padding: 2rem;
  margin-top: 4rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.purple};

  max-width: 526px;
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;

  @media (max-width: 920px) {
    padding: 4rem;
  }
`;

export const ResumeItem = styled.div`
  display: flex;
  gap: 1.2rem;

  div {
    max-width: 310px;
  }
`;

export const Icon = styled.div`
  border-radius: 1000px;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
  }
`;
