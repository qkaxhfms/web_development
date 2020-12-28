// template literals
// 템플릿 리터럴
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals

{
    const weather = "🌤";
    const temparature = "16°C";

    // 💩
    console.log("Today weather is " + weather + " and temparature is " + temparature + ".");

    // ✨

    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}