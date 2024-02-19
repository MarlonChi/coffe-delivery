import styled from "styled-components";

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9.4rem 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 3.2rem;
  }
`;

export const BannerInformation = styled.div`
  max-width: 58.8rem;
  width: 100%;

  h1 {
    font-size: 4.8rem;
    line-height: 130%;
    font-weight: 900;
    filter: drop-shadow(0 0 0.3rem #574f4d);

    @media (max-width: 992px) {
      font-size: 3.2rem;
    }

    @media (max-width: 576px) {
      font-size: 2.4rem;
    }
  }

  p {
    margin-top: 1.6rem;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};

    @media (max-width: 576px) {
      font-size: 1.6rem;
    }
  }
`;

export const Benefits = styled.div`
  margin-top: 6.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  row-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    font-size: 1.6rem;
    line-height: 130%;
    @media (max-width: 576px) {
      font-size: 1.4rem;
    }
  }

  &:nth-child(1) {
    div {
      background: ${(props) => props.theme["yellow-dark"]};
    }
  }

  &:nth-child(2) {
    div {
      background: ${(props) => props.theme["base-text"]};
    }
  }

  &:nth-child(3) {
    div {
      background: ${(props) => props.theme.yellow};
    }
  }

  &:nth-child(4) {
    div {
      background: ${(props) => props.theme.purple};
    }
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.white};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  img {
    width: 100%;
  }
`;
