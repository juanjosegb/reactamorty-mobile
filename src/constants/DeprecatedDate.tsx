export const DeprecatedDate = (currentDate: any): Date => {
    const today = new Date(currentDate);
    const todayAddingTwoHours = new Date(today);
    todayAddingTwoHours.setHours(todayAddingTwoHours.getHours() + 1);
    return todayAddingTwoHours;
};