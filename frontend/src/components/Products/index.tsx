import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../services/apiService'; 
import { StoreContainer, FilterInput, CartIndicator, CartIcon, CartValue } from './styles';
import { useNavigate } from 'react-router-dom';
import ProductCardComponent from '../ProductCard';
import { Product } from '../../types/Product';

const Products = () => {
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const initFetch = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        // Trate o erro conforme necessário
      }
    };

    initFetch();
  }, []);

  const cartTotal = 299.98; 

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <FilterInput
        type="text"
        placeholder="Filtrar por nome..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <CartIndicator onClick={() => navigate('/cart')}>
        <CartIcon>🛒</CartIcon>
        <CartValue>${cartTotal.toFixed(2)}</CartValue>
      </CartIndicator>
      <StoreContainer>
        {filteredProducts.map((product, index) => (
          <ProductCardComponent product={product} key={index} />
        ))}
      </StoreContainer>
    </>
  );
};

export default Products;
