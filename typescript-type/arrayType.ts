/**
 * Array Type
 *
 * - type []
 * - Array<type>
 */

const strArr: string[] = ["str", "str2", "str3"];
const strArr2: Array<string> = ["str", "str2", "str3"];
const numArr: Array<number> = [1, 2, 3];
const boolArr: boolean[] = [false, true, 10 > 1];

// number[] 에 문자열 값을 넣으려고 하면 error 발생
// numArr.push("123");

// Tuple
const arr = ["str", 123, false];
