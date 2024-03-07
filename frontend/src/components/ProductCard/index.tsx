import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext'; 
import { Product } from '../../types/Product';
import { ProductCard, ProductImage, ProductInfo, ProductName, ProductPrice, BuyButton, ButtonContainer, BuyButton2 } from '../Products/styles'; 

interface ProductCardProps {
  product: Product;
}

const ProductCardComponet: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuy = () => {
    addToCart(product, 1); 
    navigate('/cart'); 
  };

  const handleAddBuy = () => {
    addToCart(product, 1); 
  };

  return (
    <ProductCard key={product.id}>
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <p>{product.detail}</p>
          {product.info && <p>Info: {product.info}</p>} 
          {product.offer && <p>Oferta: {product.offer}</p>} 
          <ProductPrice>${product.price}</ProductPrice>  
        
        <ButtonContainer>
          <BuyButton onClick={handleBuy}>Comprar</BuyButton>
          <BuyButton2 onClick={handleAddBuy}>Adicionar ao carrinho</BuyButton2>
        </ButtonContainer>
      </ProductInfo>
    </ProductCard>
  );
};

export default ProductCardComponet;
