export const checkCanAddToHistory = (history: string[], action: any) => {
    return history.findIndex((x: any) => x.id === action.payload.id) === -1 && history.length < 10;
};