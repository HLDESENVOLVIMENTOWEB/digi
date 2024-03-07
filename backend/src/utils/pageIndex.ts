export const pageIndex = (page: number, limit: number) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return { startIndex, endIndex }
}