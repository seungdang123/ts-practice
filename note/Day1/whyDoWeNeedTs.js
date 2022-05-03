// 개발자가 미친 코드 써도 어떻게든 작동시켜주려고 함
// JS의 이러한 친절함은 앱의 안정성을 떨어뜨림(런타임 오류 발생가능성高)
console.log([1, 2, 3, 4] + false); // -> 1,2,3,4false

// Java, Go 등의 정상적인 언어라면 코드를 멈추고 에러 메세지를 띄움
// JS는 이상한 함수를 작성해도 어떻게든 작동시켜서 이상한 결과를 리턴함 ㅋㅋ
function divide(a, b) {
  return console.log(a / b);
}

divide("xxxxx"); // -> NaN

// 런타임 오류
// 코드 실행 전에 에러를 체크해주지 않음
// 코드 실행 중 에러를 발생시킴 (최악)
// 좋은 언어라면 코드 실행 전 seunghwan 객체 안에 hello 함수가 없다는 걸 체크해 줌
// Rust, Go 등에서는 아래의 코드는 실행 조차 안됨
const seunghwan = { name: "seunghwan" };
seunghwan.hello();
