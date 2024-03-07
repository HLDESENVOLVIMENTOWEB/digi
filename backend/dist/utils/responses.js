"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseAll = void 0;
const ResponseAll = ({ limit, page, products, index, data }) => {
    const result = {
        previousPage: page > 1 ? page - 1 : null,
        nextPage: index.endIndex < products.length ? page + 1 : null,
        totalProducts: products.length,
        totalPages: Math.ceil(products.length / limit),
        data: data
    };
    return result;
};
exports.ResponseAll = ResponseAll;
