/**
 * unknown
 *
 * 새로운 최상위 타입
 * any처럼 모든 값을 허용하지만 상대적으로 엄격하다.
 * TS에서 unknown으로 추론하는 경우는 없으니 개발자가 직접 명시해야함
 * assertion 혹은 타입 가드와 함께 사용한다.
 */

function unknownfunc(x: any) {
    let val1: any = x;
    let val2: unknown = x;
    let val3: string = x;
    let val4: boolean = x;
    let val5: number = x;
    let val6: string[] = x;
    let val7: {} = x;
}

function unknownfunc2(x: unknown) {
    let val1: any = x;
    let val2: unknown = x;
    // error 발생
    // let val3: string = x;
    // let val4: boolean = x;
    // let val5: number = x;
    // let val6: string[] = x;
    // let val7: {} = x;
}
