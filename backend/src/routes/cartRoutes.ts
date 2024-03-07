import express from 'express';
import { addToCart, getCart } from '../controllers/cartController';

const router = express.Router();

router.post('/cart/add', addToCart);

router.get('/cart', getCart);

export default router;
