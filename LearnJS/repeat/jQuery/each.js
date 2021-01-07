// each
var eachArr = [
    { title: "practice1", url: "https://sample1.com" },
    { title: "practice2", url: "https://sample2.com" },
];

$.each(eachArr,function(idx,item){
    var resultArr = '';
    resultArr += idx + ':' + item.title + item.url;
    console.log(resultArr);
})

var eachObj = {
    practice1:'https://sample1.com',
    practice2:'https://sample2.com'
}

$.each(eachObj,function(idx,item){
    var resultObj = '';
    resultObj += idx + ":" + item;
    console.log(resultObj);
})

$('.list li').each(function(idx,item){
    $(item).addClass("li_" + idx);
})