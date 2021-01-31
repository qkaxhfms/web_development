$.ajax({
    url: "./data/data.json",
    dataType: "json",
})
    .done(function (data) {
        // console.log(data);
        // console.log(data.language);
        // console.log(data.language.name);
        // console.log(data.language.category);
        // console.log(data.language.developer);
        var el = "";
        $.each(data.language, function (idx, val) {
            // console.log(idx);
            // console.log(val);

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
        });

        $(".table tbody").append(el);

        // console.log("success");
    })
    .fail(function () {
        console.log("fail");
    });
