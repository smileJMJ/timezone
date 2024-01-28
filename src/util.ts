import { TIMEZONE, DATE_INTL_TYPE } from "./const";
import type { DateType, timezoneType } from "./type";



// timezone에 맞게 시간 변경하기
// new Intl.DateTimeFormat('en-US', option).format(new Date(Date.UTC()))


export const setDateArr = (dateStr: string) => {
    if(Array.isArray(dateStr) && dateStr?.length >= DATE_INTL_TYPE.length - 1) {
        return dateStr;
    }

    const date = new Date(dateStr);
    return [
        date?.getFullYear(),
        date?.getMonth(),
        date?.getDate(),
        date?.getHours(),
        date?.getMinutes()
    ];
};

export const setDateByTimezone = (date: DateType, timezone: timezoneType) => {
    if(!Array.isArray(date) || date?.length < DATE_INTL_TYPE.length - 1) {
        return [];
    }

    const dateParams = date?.length >= DATE_INTL_TYPE.length ? date?.slice(0, DATE_INTL_TYPE.length - 1) : date;
    const dateFormatArr = new Intl.DateTimeFormat('en-US', {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        weekday: "short", // long, short, narrow
        hour12: false,
        timeZone: timezone,
    }).formatToParts(new Date(...dateParams));

    return DATE_INTL_TYPE?.reduce((acc, current) => {
        let type = null;
        const filterData = dateFormatArr?.filter(v => {
            const isSame = v?.type === current;
            if(isSame) {
                type = v?.type;
            }
            return isSame;   
        });
        
        if(filterData?.length > 0) {
            const value = filterData[0]?.value;

            acc?.push(type === 'weekday' ? value : parseInt(type === 'month' ? value - 1 : value, 10));
        }
        return acc;
    }, []);
};