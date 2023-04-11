/**
 * undefined & null
 *
 * JavaScript에서와 마찬가지로
 * 고유의 특별한 타입으로 인정한다.
 *
 * 이외에 void, never와 같이 더 세밀한 타입도 제공
 *
 * stringNullCheck가 핵심
 * 둘중 하나만 사용하던지 사용을 하지 않는것을 추천
 */

const nu: null = null;
const un: undefined = undefined;

// true
console.log(nu == un);

// false
console.log(nu === un);
