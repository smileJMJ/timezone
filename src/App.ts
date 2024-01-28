import { setDateArr, setDateByTimezone } from './util';
import { TIMEZONE_TYPE, TIMEZONE, defaultConfig } from './const';



class Timezone {
  constructor() {
    const date = setDateArr('2024-01-28 16:04');
    console.log('UTC: ', setDateByTimezone(date, TIMEZONE[TIMEZONE_TYPE.UTC]));
    console.log('KST: ', setDateByTimezone(date, TIMEZONE[TIMEZONE_TYPE.KST]));
    console.log('EST: ', setDateByTimezone(date, TIMEZONE[TIMEZONE_TYPE.EST]));
  }
}

export default Timezone;