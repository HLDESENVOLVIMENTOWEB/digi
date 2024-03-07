interface ResponseAll {
    limit: number, 
    page: number, 
    products: any, 
    index: any, 
    data: any
}

export const ResponseAll = ({limit, page, products, index, data}: ResponseAll) => {
    const result = {
        previousPage: page > 1 ? page - 1 : null,
        nextPage: index.endIndex < products.length ? page + 1 : null,
        totalProducts: products.length,
        totalPages: Math.ceil(products.length / limit),
        data: data
    };

    return result;
}