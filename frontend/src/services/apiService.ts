import axios from 'axios';
import { Product } from '../types/Product';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.data; 
  } catch (error) {
    console.error('Houve um erro ao buscar os produtos:', error);
    throw error;
  }
};
