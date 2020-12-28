// nullish_coalescing_operator
// 널 병합 연산자
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

{
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
        const name = "Ellie";
        const userName = name || "Guest";
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || "Guest";
        console.log(userName);
    }

    // 💩
    {
        const name = "";
        const userName = name || "Guest";
        console.log(userName);

        const num = 0;
        const message = num || "undefined";
        console.log(message);
    }

    // ✨
    {
        const name = "";
        const userName = name ?? "Guest";
        console.log(userName);

        const num = 0;
        const message = num ?? "undefined";
        console.log(message);
    }
}