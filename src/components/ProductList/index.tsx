import { ProductCard } from "../ProductCard";

import * as S from "./styles";

import { data } from "../../data/data";

export const ProductList = () => {
  return (
    <S.ProductListContainer>
      <h2>Nossos cafés</h2>

      <S.ProductList>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductList>
    </S.ProductListContainer>
  );
};
