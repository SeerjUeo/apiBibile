
$(document).ready(function () {
    newQuote();
});

$("#getMessage").on("click", function () {
    newQuote();
});

function newQuote() {
    var quote = "";
    var source = "";
    var url = "https://labs.bible.org/api/?passage=random&type=json&callback=?";
    $.getJSON(url, function (data) {
        quote = data[0].text;
        source = data[0].bookname + " " + data[0].chapter + " : " + data[0].verse;
        quote = quote.slice(0, quote.length - 88);
        $("#BibleVerse").text(quote);
        $("#BibleSource").text(source);
    });
};