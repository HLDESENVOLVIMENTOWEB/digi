"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageIndex = void 0;
const pageIndex = (page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return { startIndex, endIndex };
};
exports.pageIndex = pageIndex;
