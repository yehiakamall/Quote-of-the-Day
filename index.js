



 
// this my code before i search 



// function randomly(){
    
// var Quote = [' "you were given this live because you are strong enough yo live it"','“You only live once, but if you do it right, once is enough.”','"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."','"Well done is better than well said."','“The only thing we have to fear is fear itself.”','“It is during our darkest moments that we must focus to see the light.” ']
// var person = ["'--fury(2014)'","― Mae West","-Martin Luther King Jr.","-Benjamin Franklin"," --Franklin D. Roosevelt","--Aristotle"]
 
 

// var Quote1= Math.floor(Math.random() * Quote.length);
// var person1= Math.floor(Math.random() * person.length);
// document.getElementById("quotep").innerHTML=Quote[Quote1];
// document.getElementById("people").innerHTML=person[person1];
// }



// this is my code after i searched

function randomly() {
    var quotes = [
        { text: '"You were given this life because you are strong enough to live it."', author: "--Fury (2014)" },
        { text: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
        { text: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."', author: "-Martin Luther King Jr." },
        { text: '"Well done is better than well said."', author: "-Benjamin Franklin" },
        { text: "“The only thing we have to fear is fear itself.”", author: "--Franklin D. Roosevelt" },
        { text: "“It is during our darkest moments that we must focus to see the light.”", author: "--Aristotle" }
    ];


    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];


    document.getElementById("quotep").innerHTML = randomQuote.text;
    document.getElementById("people").innerHTML = randomQuote.author;
}

