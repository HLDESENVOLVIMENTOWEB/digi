"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = void 0;
const products_1 = require("../models/products");
const pageIndex_1 = require("../utils/pageIndex");
const responses_1 = require("../utils/responses");
const STATUS_1 = require("../types/STATUS");
const getAllProducts = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const index = (0, pageIndex_1.pageIndex)(page, limit);
    const paginatedProducts = products_1.products.slice(index.startIndex, index.endIndex);
    res.status(STATUS_1.STATUS.OK).json((0, responses_1.ResponseAll)({
        data: paginatedProducts,
        index,
        limit,
        page,
        products: products_1.products
    }));
};
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products_1.products.find(p => p.id === parseInt(id));
    if (!product) {
        return res.status(STATUS_1.STATUS.NOT_FOUND).send({ message: 'Product not found' });
    }
    res.status(STATUS_1.STATUS.OK).json(product);
};
exports.getProductById = getProductById;
