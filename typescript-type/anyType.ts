/**
 * any Type
 *
 * 모든 값(타입)의 집합
 * any 사용 지양하기
 * - unkown
 * - Generic
 * - Type Guadrd
 * - Type Assertion
 * - ban-ts-comment
 *
 * noImplicitAny or strict 옵션 true 권장
 */

// any타입은 모든 타입을 허용하기에 에러가 발생하지 않는다.
// any타입은 타입에 따른 assistant를 받을 수 없다.
function funcc(anyParam: any) {
    anyParam.trim();
}

funcc([1, 2, 3]);
