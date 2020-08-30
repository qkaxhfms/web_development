# polyfill

- 런타임에 필요한 기능을 주입하는 기능

## 사용방법

1. core-js에서 필요한 폴리필 가져오기 npm : core-js
2. @babel/preset-env 프리셋 이용하기

### npm.js 에서 사용방법

import 'core-js/features/promise';
import 'core-js/features/object/values';
import 'core-js/features/array/includes';

코드 최상단에 이런 식으로 import문만 적어주면 된다.
코드의 크기가 작지만, 폴리필을 빠짐없이 작성해야하기 때문에 실수가 발생할 수도 있다.

### babel/preset-env 프리셋 이용하기

1. npm을 이용해 프리셋 설치
   npm i @babel/preset-env

2. 폴리필 테스트를 위한 코드 작성

const p = Promise.resolve(10);
const obj = {
a : 10,
b : 20,
c : 30
};
const arr = Object.values(obj)
const exist = arr.includes(20);

3. .babelrc 설정파일을 작성

{
"presets": [
["@babel/preset-env",{
"targets": ">= 0.25%, not dead"
}]
]
