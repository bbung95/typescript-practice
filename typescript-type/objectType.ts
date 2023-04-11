/**
 * Object Type
 *
 */

// object 타입은 any와 다를게 없는 상황
const obj: object = {
    str: "str",
    num: 123,
    child: {
        str: "str",
        num: 123,
    },
};
// error
// obj.num;

// 세부적으로 객체의 타입을 선언할 수 있다
const obj2: {
    str: string;
    num: number;
    child: {
        str: string;
        num: number;
    };
} = {
    str: "str",
    num: 123,
    child: {
        str: "str",
        num: 123,
    },
};
obj2.num;
