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
  
  if (request.readyState == 4 && request.status == 200) {
  // I variabeld res(response) finns det information...
  console.log("Vi har fått ett svar");
  console.log("svaret (response) är " + request.responseText);
    
    // spara texten i en variabel
    var data = request.responseText;
    document.write(data);
  
	}
}

request.open('GET', 'http://api.spotify.com/v1/users/hello');
request.send();
console.log("sista raden i koden...");
