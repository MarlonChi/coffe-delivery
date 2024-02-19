import styled from "styled-components";

export const ProductListContainer = styled.section`
  margin-top: 3.2rem;

  h2 {
    font-size: 3.2rem;
    line-height: 130%;
    font-weight: 900;
    margin-bottom: 5.4rem;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3.2rem;
  row-gap: 4rem;
`;
