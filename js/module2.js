const conHello = "안녕하세요";
const fnPlusNumbers = (pNum1, pNum2) => pNum1 + pNum2;

export { conHello, fnPlusNumbers };
// export { conHello as myConHello, fnPlusNumbers as myFnPlusNumbers };

// export {객체1, 객체2};  여러개를 export 할때
// import 문에서도 { 객체1, 객체2 } 동일한 객체명을 사용해야 함
// 객체명을 변경하려면 export 문에서 as 문 뒤에서 변경하여 내보냄
// import 문에서 * 로 한꺼번에 받아 as 문 뒤에 대표이름 만들어 사용함
