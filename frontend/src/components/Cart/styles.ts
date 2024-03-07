import styled from 'styled-components';

export const CartContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CartItemRow = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

export const ProductImageThumbnail = styled.img`
  width: 50px; /* Ajuste o tamanho da miniatura conforme necessário */
  height: auto;
  margin-right: 10px;
  border-radius: 4px;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  svg {
    fill: #999;
    width: 20px;
    height: 20px;
  }

  &:hover {
    svg {
      fill: #f00;
    }
  }
`;

export const CheckoutButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
