import { TIMEZONE_TYPE } from "../const";

export type DateType = (number | string)[];
export type timezoneType = typeof TIMEZONE_TYPE[keyof typeof TIMEZONE_TYPE];