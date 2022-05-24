// Readonly
// # 예제 1
type Age = number;
type Name = string;
type Player = {
  // 타입스크립트는 readonly 옵션을 제공한다
  // 자바스크립트는 제공안함
  readonly name: Name;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });
const seung = playerMaker("seung");

seung.age = 20;
// seung.name = "Lee" => readonly 에러

// # 예제 2
const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1) => readonly 에러

// 배열에도 readonly 옵션 가능
const player: readonly [string, number, boolean] = ["Lee", 1, true];
// player[0] = 1 => type 에러

// 되도록 any 타입을 사용하지 않는 것이 안전하다.
// any타입 사용 시 a + b 와 같은 타입스크립트 규칙을 벗어난 이상한 연산 가능하게 됨
const a: any[] = [1, 2, 3, 4];
const b: any = true;
