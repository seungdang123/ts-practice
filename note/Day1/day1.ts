console.log("Hello TypeScript!!");

// 타입스크립트는 자동으로 변수가 어떤 타입인지 추론함
// number 타입 변수에 string 넣으려고하면 에러메세지 출력해줌
let a = 1; //=> number
let b = "hello"; //=> string
let c = [1, 2, 3]; //=> number array

// 직접적으로 타입을 명시해주는 것도 가능
let d: boolean[];
d = [true, false, true, false];

// 타입스크립트는 자동완성 시켜줌 개꿀
// "?" 를 사용해서 optional 적용
const player: {
  name: string;
  age?: number;
} = {
  name: "Seunghwan",
};

console.log(player.name); //=> player. 까지만 타이핑하면 알아서 자동완성(name or age 옵션 보여줌) 시켜줌

if (player.age && player.age < 10) {
  console.log(player.age);
}

// Type alis
// 타입 명시 반복해서 사용하는 것 귀찮
// 타입 앨리어스를 이용해서 반복되는 타입명시코드를 줄일 수 있다(재사용성 高)
type Player = {
  name: string;
  age?: number;
};

// Player타입을 guest객체 선언에 사용 후 playerMaker함수에 재사용

const guest: Player = {
  name: "Someone",
  age: 5,
};

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const whoAreYou = playerMaker("seunghwan");
whoAreYou.age = 12;
console.log(whoAreYou);

// 애로우 함수에도 적용 가능
const arrowFunction = (name: string): Player => ({ name });
const arrow = arrowFunction("arrow");
arrow.age = 33;
console.log(arrow);
