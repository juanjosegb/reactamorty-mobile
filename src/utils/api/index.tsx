
const calculatePageSize = (response: any) => {
    const numTotal = response.data.info.count;
    const pageSize = response.data.results.length;
    return Math.ceil(numTotal / pageSize);
};

export const getNumberOfPages = (response: any) => {
    return (!response.data.info) ? 0 : calculatePageSize(response)
};
