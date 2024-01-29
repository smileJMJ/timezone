# timezone

# Timezone이란?
- 지구의 각 나라/지역별 위도, 경도가 다르기 때문에 생기는 각 지역별 시간대
- 세계적으로 UTC를 공통적으로 사용하며, 각 지역별 Timezone으로는 KST, PST 등이 있음

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
| `string - 시간대(timezone) 표기가 있을 때` | `Local Date` <br/> `- UTC 등 다른 타임존으로 입력해도, 출력은 Local Date로 함` |
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
