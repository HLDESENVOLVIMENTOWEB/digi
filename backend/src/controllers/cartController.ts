import express from 'express';
import { STATUS } from '../types/STATUS';


const cart: any[] = [];

export const addToCart = (req: express.Request, res: express.Response) => {
  const product = req.body;
  cart.push(product);
  res.status(STATUS.CREATE).send({ message: 'Product added to cart', cart });
};

export const getCart = (req: express.Request, res: express.Response) => {
  res.status(STATUS.OK).send(cart);
};
