/**
 * Function Type
 *
 * 1. 매개변수
 * 2. 반환
 *
 * - 파라미터에는 타입을 선언!
 * - 리턴타입은 타입추론이 되는편이라 굳이 선언할 필요는 없음
 */

function func(num: number, str: string): string {
    return num + str;
}

// type string
func(123, "str");

function func2(num: number, str: string) {
    return num + Number(str);
}

// type string
func2(123, "str");
