import express from 'express';

import { products } from "../models/products";
import { pageIndex } from '../utils/pageIndex';
import { ResponseAll } from '../utils/responses';
import { STATUS } from '../types/STATUS';

export const getAllProducts = (req: express.Request, res: express.Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 5;

  const index = pageIndex(page, limit)
  const paginatedProducts = products.slice(index.startIndex, index.endIndex);

  res.status(STATUS.OK).json(ResponseAll({
     data: paginatedProducts,
     index,
     limit,
     page,
     products
  }));
  };
  
export const getProductById = (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));
    
    if (!product) {
      return res.status(STATUS.NOT_FOUND).send({ message: 'Product not found' });
    }
  
    res.status(STATUS.OK).json(product);
};