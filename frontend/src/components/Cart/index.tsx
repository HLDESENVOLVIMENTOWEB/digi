import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'; 
import { CartContainer, CartItemRow, ProductImageThumbnail, RemoveButton, CheckoutButton } from './styles'; 
import { useNavigate } from 'react-router-dom';
import { CartIcon, CartIndicator, CartValue } from '../Products/styles';

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc: any, item: any) => acc + parseFloat(item.product.price) * item.quantity, 0);

  const handleRemove = async (productId: number) => {
    removeItem(productId);
  };

  return (
    <>
    <CartIndicator onClick={() => navigate('/cart')}>
        <CartIcon>🛒</CartIcon>
        <CartValue>${total.toFixed(2)}</CartValue>
      </CartIndicator>
    <CartContainer>
      <h2>Carrinho de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item: any, index: any) => (
            <CartItemRow key={index}>
              <ProductImageThumbnail src={item.product.image} alt={item.product.name} />
              <div>
                {item.product.name} - {item.quantity} x ${item.product.price}
              </div>
              <RemoveButton onClick={() => handleRemove(item.product.id)}>
                <svg viewBox="0 0 24 24">
                  <path d="M3 6v18h18V6H3zm16 2h-4v14h2V8zm-4 0h-4v14h2V8zm-4 0H7v14h2V8zm4.5-5H20v2h-8V3h1.5z"/>
                </svg>
              </RemoveButton>
            </CartItemRow>
          ))}
        </ul>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
      <p>Total: ${total.toFixed(2)}</p>
      <CheckoutButton onClick={() => {navigate('/');}}>
        Voltar as Compare
      </CheckoutButton>
    </CartContainer>
    </>
  );
};

export default Cart;
