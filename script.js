const url = "https://api.themotivate365.com/stoic-quote";

fetch(url)

.then(function(response){
    return response.json();
})

.then(function(quoteJSON){
    data = quoteJSON;
    let qotd = data.quote;
    let author = data.author;
    console.log(data);

    let qRef = document.getElementById("quote");
    let aRef = document.getElementById("author");
    
    qRef.innerHTML = "Quote of the day: " + qotd;
    aRef.innerHTML = "- " + author;
})

console.log(data)
