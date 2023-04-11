/**
 * void
 *
 * - 함수의 반환이 없는 경우를 명시
 * - 타입 추론에 위임하자
 *
 * JavaScript에서는 암시적으로 undefined 반환
 * 그러나 void와 undefined는 TypeScript에서 같은 것이 아님
 */

function voidFunc(): undefined {
    return undefined;
}

function voidFunc2(): void {}

// func와 func2는 다르다
// 리턴타입을 선언하지 않으면 타입스크립트는 자동으로 void타입으로 설정된다
// void는 선언하지 않고 타입추론에 맡기는게 편하다.
