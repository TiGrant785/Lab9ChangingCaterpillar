'use strict';
$(function() {
    $("#restore").hide();
    $("#transform").on('click', function() {
        $("#h1").text("The Butterfly");
        $("#p1").html("This is a <strong>butterfly</strong> in its natural habitat:");
        $("#img").attr("src", "https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png");
        $("#h1").css("color", "orange");
        let info="<p id='p2'>Butterflies are insects in the marcolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly colored wings, and conspicuous fluttering flight.</p>";
        $("#restore").show();
        $("#transform").hide();
        $("body").append(info);
        $("#p2").addClass("result");
        $("#link").text("Butterfly");
        $("#link").attr("href", "https://en.wikipedia.org/wiki/Butterfly");
    });

    $("#restore").on('click', function() {
        console.log("#restore");
        location.reload(true);
    });
    
});