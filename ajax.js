// JavaScript med AJAX
// Vi använder AJAX för att hämta innehållet på en hemsida

// Vad är AJAX?
// Det är inte ett programmeringsspråk...

// ...det är en teknik, en kombination av saker, för att hämta data från URLs
// AJAX - Asyncronous JavaScript and XML

// Påbörja en hämtning
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
console.log("någonting hände");

}

request.open('GET', 'http://mardby.se/AJK15G/lorem_text.php');
request.send();
