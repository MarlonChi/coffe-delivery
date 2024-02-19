import { useState } from "react";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import * as S from "./styles";

interface Product {
  id: number;
  name: string;
  image: string;
  tags: string[];
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantityInCart, setQuantityInCart] = useState(0);

  const handleIncrement = () => {
    setQuantityInCart(quantityInCart + 1);
  };

  const handleDecrement = () => {
    if (quantityInCart > 0) {
      setQuantityInCart(quantityInCart - 1);
    }
  };

  return (
    <S.ProductCardContainer>
      <S.ProductImage>
        <img src={product.image} alt={product.name} />
      </S.ProductImage>
      <S.ProductTag>
        {product?.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </S.ProductTag>
      <S.ProductName>{product.name}</S.ProductName>
      <S.ProductDescription>{product.description}</S.ProductDescription>

      <S.ActionsContainer>
        <S.Price>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </S.Price>
        <S.QuantityInputContainer>
          <S.Decrease onClick={handleDecrement} disabled={quantityInCart === 0}>
            <Minus size={14} weight="bold" />
          </S.Decrease>
          <S.Quantity type="text" value={quantityInCart} readOnly />
          <S.Increase onClick={handleIncrement}>
            <Plus size={14} weight="bold" />
          </S.Increase>
        </S.QuantityInputContainer>
        <S.CartButton>
          <ShoppingCartSimple size={22} weight="fill" />
        </S.CartButton>
      </S.ActionsContainer>
    </S.ProductCardContainer>
  );
};
