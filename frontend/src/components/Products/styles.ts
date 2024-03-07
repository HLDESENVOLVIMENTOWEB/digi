import styled from 'styled-components';

export const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); // Cria um layout de grade flexível
  gap: 30px; // Espaço entre os itens
  padding: 20px;
  background-color: #f8f9fa;
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  color: #333;
  margin: 0 0 5px;
`;

export const ProductPrice = styled.p`
  color: #007bff;
  font-size: 20px;
  font-weight: bold;
  margin-top: auto;
`;


export const FilterInput = styled.input`
  font-size: 16px;
  padding: 10px;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box; // Garante que o padding não aumente o tamanho do input
  max-width: 400px; // Limita a largura do input para melhor estética
  display: block; // Faz o input ocupar sua própria linha
  margin-left: auto;
  margin-right: auto;
`;

export const CartIndicator = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const CartIcon = styled.span` // Simples ícone de carrinho usando SVG ou FontAwesome
  margin-right: 10px;
`;

export const CartValue = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const BuyButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: darkblue;
  }
`;
