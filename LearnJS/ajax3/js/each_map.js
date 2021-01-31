// var arr = [1, 2, 3, 4, 5];
// $.each(arr, function (idx, val) {
//     // console.log(idx);
//     // console.log(val);
//     // console.log(idx + ":" + val);
//     // if (idx == 2) {
//     //     return false; //break랑 동일한 기능
//     // }
//     // console.log(idx + ":" + val);
//     if (idx < 2) {
//         return;
//     }
//     console.log(idx + ":" + val);
// });
// $.each([1, 2, 3, 4, 5], function (idx, val) {
//     console.log("배열을 통째로 넣기" + idx + ":" + val);
// });

// var obj = {
//     name: "kim",
//     age: "29",
//     hello: function () {
//         console.log("hello guys");
//     },
// };

// $.each(obj, function (idx, val) {
//     console.log(idx);
//     console.log(val);
// });

// $("span").each(function (idx, item) {
//     var text = $(item).text();
//     console.log(text);
// });

// each함수의 callback함수는 break나 continue로 동작하기 때문에
// 특정 값을 리턴하고 싶은 경우에는 상위 스코프에
// 특정 변수를 선언해 두고 값을 할당하는 방법밖에 없다.

var target = null;
var arr = [
    {
        name: "kim",
        age: 10,
    },
    {
        name: "lee",
        age: 14,
    },
    {
        name: "park",
        age: 5,
    },
];

$.each(arr, function (idx, val) {
    if (val.name == "park") {
        target = val;
        return false;
    }
});

console.log("park씨의 나이는" + target.age + "세 입니다.");

var result = $.map(arr, function (val, idx) {
    console.log(val);
    console.log(idx);
    return val;
});

console.log(result);
