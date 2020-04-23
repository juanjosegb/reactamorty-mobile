import {DeprecatedDate} from "@Constants/DeprecatedDate";

export const checkDateIsDeprecated = (currentDate: Date) => {
    return new Date() > DeprecatedDate(currentDate)
};