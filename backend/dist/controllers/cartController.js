"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCart = exports.addToCart = void 0;
const STATUS_1 = require("../types/STATUS");
const cart = [];
const addToCart = (req, res) => {
    const product = req.body;
    cart.push(product);
    res.status(STATUS_1.STATUS.CREATE).send({ message: 'Product added to cart', cart });
};
exports.addToCart = addToCart;
const getCart = (req, res) => {
    res.status(STATUS_1.STATUS.OK).send(cart);
};
exports.getCart = getCart;
