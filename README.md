# 목표

- 내 위치(한국)에서의 현재 시간은?
- 미국/일본 등 다른 국가의 현재 시간은?
- UTC 기준 각 타임존 별 시간 차이는?
- 현재 한국 시간(KST)으로 00:00일 때, 미국 뉴욕의 시간은?

<br/>
<br/>

# Timezone이란?

- 지구의 각 나라/지역별 위도, 경도가 다르기 때문에 생기는 각 지역별 시간대
- 동일한 offset을 가지는 지역 단위
- 세계적으로 UTC를 공통적으로 사용하며, 각 지역별 Timezone으로는 KST, PST 등이 있음

![timezone](/readme/timezone.png)

<br/>

## (1) GMT (Greenwich Mean Time)

- 그리니지 평균시. 영국 그리니치 천문대의 위치를 기준으로 한 시간
- 태양을 기준으로 하기 때문에 지구의 공전 주기가 일정하지 않아 정확도가 떨어짐
- 1990년대 이전까지는 GMT가 국제 표준이었으나, 현재는 UTC가 표준으로 채택됨
- 주로 해양, 항공, 육상, 운송에 사용됨

<br/>

![alt text](/readme/GMT.jpeg)

<br/>

(참고) 위도(latitude)와 경도(longitude)
![alt text](/readme/longitude.png)

<br/>
<br/>

## (2) UTC (Coordinated Universal Time)

- UTC는 GMT 기반이나 윤초보정을 한 것  
  1 초의 길이는 원자시계로 정하고, 지구의 자전이 느려지는 등의 효과로 인해 평균태양시에서의 시간이 UTC 시간보다 뒤쳐질 경우에는 1초(윤초, Leap second)를 UTC 시간에 더해서 (윤초가 UTC 시간에 더해질 때는, 59 초가 지나고 다음 분(next minute)이 되는 것이 아니라 60 초가 지나고 다음 분이 된다.) UTC 시간과 평균태양시가 0.9 초 이내로 맞도록 보정한다.
  (윤초: 세슘 원자시계와 실제 지구의 자전·공전 속도를 기준으로 한 태양시의 차이로 인해 발생한 오차를 보정하기 위하여 추가하는 1초이다. 12월 31일의 마지막에 추가하거나, 혹은 6월 30일의 마지막에 추가한다.)
- UTC와 GMT는 초의 소숫점 단위에서만 차이가 나기 때문에 일상에서는 혼용해서 사용함
- 원자 시계를 기준으로 하여 정확도가 매우 높음
- 전 세계적으로 표준 시간으로 사용됨
  (ex) UTC 기준으로 현재 시간이 오후 1시이면, 세계 어느 지역이든 오후 1시임
- 1972년 1월 1일부터 시행

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

|             | NewYork<br/>[UTC-5] | India<br/>[UTC+5:30] |
| ----------- | ------------------- | -------------------- |
| Local Time  | 10:00 AM (EST)      | 08:30 PM (IST)       |
| Server Time | 03:00 PM (UTC)      | 03:00 PM (UTC)       |

<br/>
<br/>

# 날짜와 시간 표기 방법/규격

- 일반적으로 ISO 8601이나 RFC 3339를 사용하는 것이 권장되는데, 표준화되어 있고 다양한 언어 및 플랫폼에서 지원되기 때문

## ISO 8601

- 국제 표준화 기구(ISO)에서 제정한 날짜와 시간을 표기하는 표준
- 전 세계에서 일관된 방식으로 날짜와 시간을 표기하기 위해 사용
- `YYYY-MM-DDTHH:mm:ss.sssZ`  
   |표기|내용|
  |-----|-----|
  |YYYY|연도. 네 자리의 연도|
  |MM|월. 01부터 12까지 값|
  |DD|일. 01부터 31까지 값|
  |T|날짜와 시간을 구분하는 문자|
  |HH|시간. 00부터 23까지의 값|
  |mm|분. 00부터 59까지의 값|
  |ss|초. 00부터 59까지의 값|
  |s|밀리초. 한자리 이상의 값|
  |TZD|timezone 표기(선택적)<br/>※ TZD가 없으면 로컬 시간으로 간주함|

  ※ TZD 타임존 표기 방법

  - Z: UTC 시간대를 나타내는 표기. "Z"는 영어 단어 "Zulu"를 나타내며, 그리니치 평균시(UTC)를 가리킴  
    `2024-03-19T15:30:00Z`
  - +hh:mm or -hh:mm: 타임존 오프셋 표기 (+: UTC보다 빠름, -: UTC보다 느림)
    `2024-03-19T15:30:00+09:00`

  https://www.w3.org/TR/NOTE-datetime

  ```
  Year:
      YYYY (eg 1997)
   Year and month:
      YYYY-MM (eg 1997-07)
   Complete date:
      YYYY-MM-DD (eg 1997-07-16)
   Complete date plus hours and minutes:
      YYYY-MM-DDThh:mmTZD (eg 1997-07-16T19:20+01:00)
   Complete date plus hours, minutes and seconds:
      YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)
   Complete date plus hours, minutes, seconds and a decimal fraction of a
  second
      YYYY-MM-DDThh:mm:ss.sTZD (eg 1997-07-16T19:20:30.45+01:00)
  where:

     YYYY = four-digit year
     MM   = two-digit month (01=January, etc.)
     DD   = two-digit day of month (01 through 31)
     hh   = two digits of hour (00 through 23) (am/pm NOT allowed)
     mm   = two digits of minute (00 through 59)
     ss   = two digits of second (00 through 59)
     s    = one or more digits representing a decimal fraction of a second
     TZD  = time zone designator (Z or +hh:mm or -hh:mm)
  ```

<br/>

## RFC 3339

- 인터넷 공학 작업 그룹(IETF)에서 제정한 표준
- 인터넷에서 날짜와 시간 정보를 표현하고 교환하기 위해 만들어짐
  (이메일 등의 인터넷 통신에서 사용되는 표준 시간 형식을 정의함)
- ISO 8601의 서브셋. ISO 8601 보다 더 엄격함  
  (ex) `1985-04-12T23:20:50.52Z`  
  `1996-12-19T16:39:57-08:00`

<br/>

### ISO 8601 vs RFC 3339

- js의 new Date()는 ISO 8601을 따름

(다이어그램) https://ijmacd.github.io/rfc3339-iso8601/  
(ISO 8601, RFC 3339 설명) https://ko.wikipedia.org/wiki/ISO_8601

<br/>

## RFC2822
https://datatracker.ietf.org/doc/html/rfc2822#page-14

<br/>

## Unix 시간

- 1970년 1월 1일 00:00:00 UTC(그리니치 평균시)부터 경과한 시간을 초 단위로 표현한 것
- 시간대나 서머타임(Daylight Saving Time) 등의 개념을 고려하지 않고, UTC 시간을 기준으로 단순히 경과한 시간을 초로 표현
  -> 시간대에 따라 시간이 달라지지 않으며, 전 세계에서 동일한 값을 가짐
- 파일 시스템, 시스템 로그, 프로그래밍 등에서 사용됨
- js의 new Date().getTime()은 Unix 시간을 밀리초로 반환함

(ex) 2023년 11월 14일 15:23:00 KST -> `1699942980`

(1) 계산 과정

1. KST를 UTC로 변환
   KST는 UTC보다 9시간 빠릅니다.
   따라서 2023년 11월 14일 15:23:00 KST는 UTC로는 2023년 11월 14일 06:23:00입니다.

2. UTC를 Unix 시간으로 변환
   1970년 1월 1일 00:00:00 UTC부터 2023년 11월 14일 06:23:00 UTC까지 경과된 초의 수를 계산합니다.

=> js에서는 아래와 같이 구할 수 있음

- new Date('2023-11-14T15:23:00+09:00').getTime() / 1000
- new Date('2023/11/14 15:23:00').getTime() / 1000
- Date.UTC(2023, 10, 14, 15, 23) / 1000

<br/>
<br/>

# UTC Offset

- 협정 세계시(UTC)와 현지 로컬 시간의 차이
- '+' 또는 '-' 기호와 함께 시간(HH:MM)으로 표기
- '+' 기호는 UTC보다 빠른 시간(해를 더 먼저 보고, 해가 더 빨리 짐),   
  '-' 기호는 UTC보다 느린 시간(해를 더 늦게 보고, 해가 더 늦게 짐)
- 일광 절약 시간(DST)을 사용하는 지역은 여름철에 UTC 오프셋이 변경될 수 있음
- 일부 국가는 여러 개의 시간대를 가지고 있으며, 각 시간대마다 고유한 UTC 오프셋을 가지고 있음

(ex)

1. 대한민국의 UTC 오프셋은 +09:00 -> 즉, 한국 시간은 UTC보다 9시간 빠름
2. 뉴욕의 UTC 오프셋은 -04:00 -> 즉, 뉴욕 시간은 UTC보다 4시간 느림

<br/>
<br/>

# IANA(Internet Assigned Numbers Authority) 시간대 데이터베이스
https://timeapi.io/documentation/iana-timezones
https://www.iana.org/time-zones
https://github.com/eggert/tz
https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
https://nodatime.org/TimeZones?version=2024a&format=json

- 세계 각 지역의 표준 시간대 및 서머타임(Daylight Saving Time) 규칙을 정의하는 국제적인 표준 데이터베이스
- code/data 형태로 제공함 (js로 바로 사용하기엔 어려움...ㅜㅜ)
  -> 다른 라이브러리들은 어떻게 사용하고 있는지 분석 필요!!
- moment-timezone/luxon 등 오픈 소스 라이브러리를 사용할 수 있음
(해당 라이브러리들은 IANA database 사용)

(참고) https://data.iana.org/time-zones/tz-link.html
- 많은 최신 Javascript 런타임은 Intl.DateFimeFormat의 timeZone 옵션을 통해 기본적으로 tz를 지원함
- date-fns, Day.js, Luxon, Moment Timezone, Timezone 등 라이브러리 소개함



<br/>
<br/>

# DST (Daylight Saving Time) 일광 절약 시간제 / 서머 타임
https://namu.wiki/w/%EC%84%9C%EB%A8%B8%ED%83%80%EC%9E%84

- 하계철에는 표준시를 UTC+1:00만큼 증가시켜서 일출 및 일몰시간을 인위적으로 뒤로 조정하여 오전의 일광을 오후에 활용할 수 있도록 한다
(서머타임이 실시되면 8시를 9시로, 2시를 3시로 바꿔 표기함, 평소 8시 출근이면 서머타임 땐 실질적으로 7시에 출근하는 꼴임)
- 모든 시계의 바늘을 한 시간 앞당기고, 모든 사람이 이 변경된 시계에 따라 생활한다고 함
- 조명과 연료 등의 절감 효과를 기대할 수 있기 때문에 도입됨
- 일광 절약 시간제는 통상 봄에서 가을까지(3월 중순 ~ 11월 초) 계속됨
- 미국, 캐나다, 영국, 유럽 등에서 시행함

<br/>

![alt text](/readme/dst.png)

<br/>
<br/>

# Date 객체
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

```
Date(): string; // 문자열 반환
new Date(): Date; // Date 객체 반환
```
<br/>

※ Date()와 new Date().toString()이 반환하는 문자열은 RFC2822 형식과 유사한 문자열을 반환하나 RFC2822 형식은 아님!!, 브라우저 마다 출력값이 다를 수 있다고 함

|OS|브라우저 종류|Date()|new Date().toString()|
|-----|-----|-----|-----|
|mac|chrome|Thu Apr 04 2024 13:31:31 GMT+0900 (한국 표준시)|Thu Apr 04 2024 13:41:35 GMT+0900 (한국 표준시)|
|mac|safari|Thu Apr 04 2024 13:42:12 GMT+0900 (대한민국 표준시)|Thu Apr 04 2024 13:42:29 GMT+0900 (대한민국 표준시)|
|window|chrome|Thu Apr 04 2024 13:43:37 GMT+0900 (한국 표준시)|Thu Apr 04 2024 13:43:37 GMT+0900 (한국 표준시)|
|window|whale|Thu Apr 04 2024 13:43:37 GMT+0900 (한국 표준시)|Thu Apr 04 2024 13:43:37 GMT+0900 (한국 표준시)|
|mac|iPhone12(시뮬레이터, ios 14.4, 대한민국, 한국어 설정)<br/>(safari 개발자도구)|Thu Apr 04 2024 13:51:49 GMT+0900 (KST)|Thu Apr 04 2024 13:51:49 GMT+0900 (KST)|
|mac|iPhone14(시뮬레이터, ios16.1, 미국, 한국어 설정)|Thu Apr 04 2024 13:53:02 GMT+0900 (대한민국 표준시)|Thu Apr 04 2024 13:53:02 GMT+0900 (대한민국 표준시)|



### static method
|method|return|내용|
|-----|-----|-----|
|Date.now()|number|1970년 1월 1일 00:00:00 UTC로부터 지난 시간을 밀리초 단위의 숫자 값으로 반환. 윤초는 무시|
|Date.parse()|number|날짜를 나타내는 문자열(RFC2822 / ISO8601)을 분석한 후, 해당 날짜와 1970년 1월 1일 00:00:00 UTC의 시간 차이를 밀리초 단위의 숫자 값으로 반환 <br/> ※ Date.parse() 사용한 날짜 분석은 브라우저 간 일관적이지 못하게 동작할 수 있어 사용하지 않는 것이 좋음|
|Date.UTC()|number|생성자가 받을 수 있는 제일 많은 매개변수(구성요소 각각, 2개 ~ 7개)를 동일하게 받아서, 1970년 1월 1일 00:00:00 UTC의 시간 차이를 밀리초 단위의 숫자 값으로 반환함. 윤초는 무시|

<br/>

## new Date()
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

```

new Date()

```

| parameter                                                | return value                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp` (UNIX 타임스탬프)                                             | `Local Date`                                                                                                                                                                                                                                                                                                                       |
| new Date(1706502641069)                                  | Mon Jan 29 2024 13:30:41 GMT+0900 (한국 표준시)|
| `string (Date.parse() 메서드가 인식할 수 있는 RFC2822 / ISO8601 형태)` ||
| `string - 시간대(timezone) 표기가 없을 때`               | `Local Date` <br/> `- parameter에 시간대가 없으면 Local Date로 인지함`                                                                                                                                                                                                                                                             |
| new Date('Mon, 29 Jan 2024 04:33:07')                    | Mon Jan 29 2024 04:33:07 GMT+0900 (한국 표준시)                                                                                                                                                                                                                                                                                    |
| new Date('2024-01-29 04:33:07')                          | Mon Jan 29 2024 04:33:07 GMT+0900 (한국 표준시)                                                                                                                                                                                                                                                                                    |
| `string - 시간대(timezone) 표기가 있을 때`               | `Local Date` <br/> `- UTC 등 다른 타임존으로 입력해도, 출력은 Local Date로 함`<br/> `- Date.parse()가 인식할 수 있는 문자열` <br/> `- Date.parse() 등 날짜 파싱은 일관적이지 않고, 브라우저끼리 차이가 존재해서 사용하지 않는 것이 좋음` <br/> `- 문자열에 이슈가 있으면 NaN 반환! (ex. 2024-1-1 은 safari에서 Invalid Date 발생)` |
| new Date('Mon, 29 Jan 2024 04:33:07 GMT') // UTC         | Mon Jan 29 2024 13:33:07 GMT+0900 (한국 표준시) // KST                                                                                                                                                                                                                                                                             |
| new Date('2024-01-29T04:30:41.069Z') // ISO string = UTC | Mon Jan 29 2024 13:30:41 GMT+0900 (한국 표준시) // KST                                                                                                                                                                                                                                                                             |

<br/>
<br/>

```

new Date().method

```

| method                                                                                                                                                            | return value                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [get/set 동일] <br/> - `getFullYear()` <br/> - `getMonth()` <br/> - `getDate()` <br/> - `getHours()` <br/> - `getMinutes()` 등                                    | `Local Date`                 |
| - `toDateString` <br/> - `toString()` <br/> - `toTimeString()`                                                                                                    | `Local Date`                 |
| [get/set 동일] <br/> - `getUTCFullYear()` <br/> - `getUTCMonth()` <br/> - `getUTCDate()` <br/> - `getUTCHours()` <br/> - `getUTCMinutes()` <br/> - `getTime()` 등 | `UTC`                        |
| - `toISOString()` <br/> - `toJSON()` <br/> - `toUTCString()`                                                                                                      | `UTC`                        |
| `Date.UTC()`                                                                                                                                                      | `UTC (ms, timestamp로 반환)` |

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

# Luxon 코드 분석 (dateTime.js)

<br/>
<br/>

# Date 관련 라이브러리 비교
https://npmtrends.com/date-fns-vs-dayjs-vs-luxon-vs-moment

- moment 
https://momentjs.com/
  - moment
  - moment-timezone
  - luxon
- dayjs
- date-fns
- luxon

<br/>
<br/>
