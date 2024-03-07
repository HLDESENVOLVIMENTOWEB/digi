import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext'; 
import { Product } from '../../types/Product';
import { ProductCard, ProductImage, ProductInfo, ProductName, ProductPrice, BuyButton } from '../Products/styles'; 

interface ProductCardProps {
  product: Product;
}

const ProductCardComponet: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuy = () => {
    console.log(product)
    addToCart(product, 1); 
    navigate('/cart'); 
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
        <BuyButton onClick={handleBuy}>Comprar</BuyButton>
      </ProductInfo>
    </ProductCard>
  );
};

export default ProductCardComponet;
