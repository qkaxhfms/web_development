// data
$.ajax({
    url: "./data.json",
    dataType: "json",
})
    .done(function (data) {
        console.log(data.language);
        console.log("성공!");
        var el = "";
        $.each(data.language, function (idx, val) {
            console.log(idx);
            console.log(val);

            el += "<tr>";
            el +=
                "<td>" +
                val.name +
                "</td>" +
                "<td>" +
                val.category +
                "</td>" +
                "<td>" +
                val.developer +
                "</td>";
            el += "</tr>";
            // 3 이하
            if (idx < 3) {
                console.log("ㅎㅎㅎㅎㅎㅎ");
                $(".wrapper").removeClass("typeA");
                $(".wrapper").addClass("typeB");
            } else {
                console.log("ㅁㅁㅁㅁㅁㅁ");
                $(".wrapper").removeClass("typeB");
                $(".wrapper").addClass("typeA");
            }
        });
        $(".table tbody").append(el);
    })
    .fail(function () {
        console.log("실패!");
    });
