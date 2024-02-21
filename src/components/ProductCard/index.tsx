import { useContext } from "react";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

import { CartContext } from "../../contexts/CartContext";

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
  const {
    products,
    addProductToCart,
    incrementProductQuantity,
    decrementProductQuantity,
  } = useContext(CartContext);

  const handleAddToCart = (product: Product) => {
    addProductToCart(product);
  };

  const handleIncrement = (product: Product) => {
    incrementProductQuantity(product);
  };

  const handleDecrement = (productId: number) => {
    decrementProductQuantity(productId);
  };

  const quantityInCart =
    products.find((item) => item.id === product.id)?.quantity || 0;

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
          <S.Decrease
            onClick={() => handleDecrement(product.id)}
            disabled={quantityInCart === 0}
          >
            <Minus size={14} weight="bold" />
          </S.Decrease>
          <S.Quantity type="text" value={quantityInCart} readOnly />
          <S.Increase onClick={() => handleIncrement(product)}>
            <Plus size={14} weight="bold" />
          </S.Increase>
        </S.QuantityInputContainer>
        <S.CartButton onClick={() => handleAddToCart(product)}>
          <ShoppingCartSimple size={22} weight="fill" />
        </S.CartButton>
      </S.ActionsContainer>
    </S.ProductCardContainer>
  );
};
