"use strict";
const playerMaker = (name) => ({ name });
const seung = playerMaker("seung");
seung.age = 20;
// seung.name = "Lee" => readonly 에러
// # 예제 2
const numbers = [1, 2, 3, 4];
// numbers.push(1) => readonly 에러
// 배열 타이핑
const player = ["Lee", 1, true];
// player[0] = 1 => type 에러

// 되도록 any 타입을 사용하지 않는 것이 안전하다.
// any타입 사용 시 a + b 와 같은 타입스크립트 규칙을 벗어난 이상한 연산 가능하게 됨
const a = [1, 2, 3, 4];
const b = true;
