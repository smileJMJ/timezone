export const TIMEZONE_TYPE = {
    UTC: 'UTC',
    KST: 'KST',
    EST: 'EST'
};

export const TIMEZONE = {
    [TIMEZONE_TYPE.UTC]: 'UTC',
    [TIMEZONE_TYPE.KST]: 'Asia/Seoul',
    [TIMEZONE_TYPE.EST]: 'America/New_York'
};

export const DATE_INTL_TYPE = ['year', 'month', 'day', 'hour', 'minute', 'weekday'];
  
export const defaultConfig = {
    standardTimezone: TIMEZONE.UTC,
    timezoneArr: [
      {timezone: ''}
    ]
};
