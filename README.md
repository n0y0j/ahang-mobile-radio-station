# @ahang/mobile-radio-station

전파누리 사이트에서 **이동통신 무선국의 위치 및 정보** 데이터를 크롤링 해주는 패키지입니다.

옥탑 프로젝트를 위해 제작된 패키지입니다.
<br />
<br />


![issue badge](https://img.shields.io/badge/puppeteer-8.0.0-red)   ![issue badge](https://img.shields.io/badge/cheerio-1.0.0-orange)
<br />
<br />


## Installation

```javascript
npm i @ahang/mobile-radio-station
```
<br />

## Usage

### `getMobileJson()`

Type: `date, number`

특정 위도와 경도 값의 위치 반경 500m 안에 있는 **이동통신 무선국의 위치 및정보**를 **json** 형식으로 리턴합니다.

```javascript
const mobile = require('@ahang/mobile-radio-station')

const data = await mobile.getMobileJson(37.5524979951415, 126.989316855952)
// [
//    {
//     uid: '322014110029942',
//     address: '서울특별시 중구 동호로25길 19, (장충동2가, 옵티칼빌딩)',
//     call_name: 'SKTL장충동빌라RRU(B1)',
//     cls_name: '기지국',
//     customer_name: '에스케이텔레콤 주식회사',
//     customer_no: 542604,
//     district_code: '11140144',
//     is_allow: 'Y',
//     purpose_code: 'E2000',
//     service_code: '18',
//     service_name: '이동전화(LTE)서비스 제공용(지상_기지국)',
//     position: [ 127.001868, 37.558619 ]
//   },
//   {
//     uid: '322013110035534',
//     address: '서울특별시 중구 동호로 249, (장충동2가)',
//     call_name: 'KTIO신라호텔_신',
//     cls_name: '기지국',
//     customer_name: '주식회사 케이티',
//     customer_no: 542610,
//     district_code: '11140144',
//     is_allow: 'Y',
//     purpose_code: 'C3100',
//     service_code: '15',
//     service_name: '이동통신(3G)서비스 제공용(옥내_광기지국)',
//     position: [ 127.007938, 37.557499 ]
//   },
//   ...
//   ...
// ]
```




