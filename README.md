# timezone

# Timezone이란?
- 지구의 각 나라/지역별 위도, 경도가 다르기 때문에 생기는 각 지역별 시간대
- 세계적으로 UTC를 공통적으로 사용하며, 각 지역별 Timezone으로는 KST, PST 등이 있음

<br/>

## (1) GMT (Greenwich Mean Time)
- 그리니지 평균시. 영국 그리니치 천문대의 위치를 기준으로 한 시간
- 1990년대 이전까지는 GMT가 국제 표준이었으나, 현재는 UTC가 표준으로 채택됨
- 태양을 기준으로 하기 때문에 지구의 공전 주기가 일정하지 않아 정확도가 떨어짐
- 주로 해양, 항공, 육상, 운송에 사용됨

<br/>

## (2) UTC (Coordinated Universal Time)
- 원자 시계를 기준으로 하여 정확도가 매우 높음
- 전 세계적으로 표준 시간으로 사용됨
(ex) UTC 기준으로 현재 시간이 오후 1시이면, 세계 어느 지역이든 오후 1시임

<br/>

## (3) EST (Eastern Standard Time)
- 미국 동부 표준 시
- GMT + 5

<br/>

## (4) KST (Korea Standard Time)
- 한국 표준 시
- GMT + 9

<br/>
<br/>

# 시간 종류

<br/>

## (1) 로컬 시간 (local)
- 사용자의 기기/브라우저에 설정된 시간
- 사용자의 환경에 따라 다르게 실행될 수 있음
- 사용자의 기기 설정에 의존하므로 정확성이 보장되지 않음

<br/>

## (2) 서버 시간 (server)
- 웹 서버가 위치한 서버에서 유지되는 시간
- 서버 측 언어/DB 기능을 통해 관리됨
- 일반적으로 UTC(협정 세계 시) 기준임
- 다양한 지역에서 접속하는 사용자들에게 동일한 시간 정보를 제공하기 위해 서버 시간을 사용하는 것이 일반적임

<br/>

|| NewYork<br/>[GMT-5] | India<br/>[GMT+5:30] |
|-----|-----|-----|
| Local Time | 10:00 AM (EST) | 08:30 PM (IST) |
| Server Time | 03:00 PM (UTC) | 03:00 PM (UTC) |

<br/>

## (3) 로케일(local) 시간
- 특정 지역의 언어와 문화에 맞춘 시간
- 로컬 시간 + 언어 & 문화
※ 언어: 시간의 표기 방법(오전 11시 38분, 11:38 AM)
※ 문화: 시간의 단위 

<br/>



<br/>
<br/>

# Date 객체
## new Date()

```
new Date()
```

|parameter | return value |
|-----|-----|
| `timestamp` | `Local Date` | 
| new Date(1706502641069) | Mon Jan 29 2024 13:30:41 GMT+0900 (한국 표준시) |
|`string - 시간대(timezone) 표기가 없을 때` | `Local Date` <br/> `- parameter에 시간대가 없으면 Local Date로 인지함` |
| new Date('Mon, 29 Jan 2024 04:33:07') | Mon Jan 29 2024 04:33:07 GMT+0900 (한국 표준시) | 
| new Date('2024-01-29 04:33:07') | Mon Jan 29 2024 04:33:07 GMT+0900 (한국 표준시) |
| `string - 시간대(timezone) 표기가 있을 때` | `Local Date` <br/> `- UTC 등 다른 타임존으로 입력해도, 출력은 Local Date로 함`<br/> `- Date.parse()가 인식할 수 있는 문자열` <br/> `- Date.parse() 등 날짜 파싱은 일관적이지 않고, 브라우저끼리 차이가 존재해서 사용하지 않는 것이 좋음` <br/> `- 문자열에 이슈가 있으면 NaN 반환! (ex. 2024-1-1 은 safari에서 Invalid Date 발생)` |
| new Date('Mon, 29 Jan 2024 04:33:07 GMT') // UTC | Mon Jan 29 2024 13:33:07 GMT+0900 (한국 표준시) // KST | 
| new Date('2024-01-29T04:30:41.069Z') // ISO string = UTC |  Mon Jan 29 2024 13:30:41 GMT+0900 (한국 표준시) // KST | 

<br/>
<br/>

```
new Date().method
```
| method | return value |
|-----|-----|
| [get/set 동일] <br/> - `getFullYear()` <br/> - `getMonth()` <br/> - `getDate()` <br/> - `getHours()` <br/> - `getMinutes()` 등 | `Local Date` |
|- `toDateString` <br/> - `toString()` <br/> - `toTimeString()`  | `Local Date` |
| [get/set 동일] <br/> - `getUTCFullYear()` <br/> - `getUTCMonth()` <br/> - `getUTCDate()` <br/> - `getUTCHours()` <br/> - `getUTCMinutes()` <br/> - `getTime()` 등 | `UTC` |
| - `toISOString()` <br/> - `toJSON()` <br/> - `toUTCString()` | `UTC` |
| `Date.UTC()` | `UTC (ms, timestamp로 반환)` |

<br/>
<br/>

# Intl 객체
- ECMA Script 국제화 API
- 각 나라의 언어와 표현에 맞게 날짜/시간 등을 표시할 수 있음

<br/>

## (1) 언어 구분 문자열 비교: Intl.getCollator()
- 두 문자열이 같은 언어인지, 같은 언어 & 다른 방언인지 비교
```
const isSameLang = Intl.Collator('ko-KR').compare('안녕', '안녕') === 0;
```

<br/>

## (2) 숫자 형식: Intl.NumberFormat()
- 숫자를 특정 언어와 문화에 맞는 형식으로 표시함 (ex) 4,567 = 사천 오백 육십 칠
```
const numberFormat = new Intl.NumberFormat('ko-KR');
console.log(numberFormat.format(123)); // 일백이십삼만
```

<br/>

## (3) 날짜 및 시간 형식: Intl.DateTimeFormat()
- 날짜 및 시간을 특정 언어와 문화에 맞는 형식으로 표시
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

```
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Intl.DateTimeFormat() 매개변수 없으면 디폴트 로케일, 시간대에 따라 다른 값 출력
console.log(new Intl.DateTimeFormat().format(date)); // 2012.12.20

// Intl.DateTimeFormat() - 'ko-KR' 한국어에서 날짜 표기는 연월일 순 표기됨
console.log(new Intl.DateTimeFormat('ko-KR').format(date)); // 2012.12.20

// Intl.DateTimeFormat() - 옵션 설정 및 formatToParts 사용
new Intl.DateTimeFormat('en-US', {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  weekday: "short",
  hour12: true, // AM, PM
  timeZone: 'ko-KR',
}).formatToParts(new Date())
```

※ `Intl.Locale.availableLocales`: 사용 가능한 로케일 목록 반환

<br/>
<br/>

# UTC Offset
- 특정 장소에서 협정 세계시(UTC)와 현지 태양시 간의 시간 및 분 차이


<br/>
<br/>

# DST (Daylight Saving Time)



<br/>
<br/>

