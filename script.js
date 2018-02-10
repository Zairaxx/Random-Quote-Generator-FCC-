
/* Quote List */


function Quote(quote, author) {
    this.quote = quote;
    this.author = author;
}

var quote1 = new Quote("When captured birds grow wiser, they try to open the cage with their beaks. They don't give up, because they want to fly again.", "Genma Shirainu");
var quote2 = new Quote("Evil expects evil from others.", "Osamu Dazai");
var quote3 = new Quote("It's a programmer's job to make the most of limited resources to turn an impractical idea into reality.", "Akasaka Ryuunosuke");
var quote4 = new Quote("I yearn for true gender equality. I have no patience for one who talks about female privilege when it suits them, and then complains about someone \"not being a man\" when it's convenient.", "Kazuma Satou");
var quote5 = new Quote("Stop pouting! You learned something valuable. Remember the lesson, not the disappointment.", "Horo");
var quote6 = new Quote("No matter what you're doing, the most essential thing is to not give up. Fail as many times as it takes. Keep trying persistently until you can call yourself 'average'. If you can collect a nice group of average-level skills, that's already above-average. You've created your own sort of 'talent'.", "Yuuji Kazami");
var quote7 = new Quote("Well it\'s not like the world is full of sunshine and daisies. If society was only shaped by the view that one must be happy-go-lucky all the time, Hollywood wouldn\'t make tear-jerking movies, would they?", "Hachiman Hikigaya");
var quote8 = new Quote("It's not like people only look for help by saying \"please help me.\" In similiar vein, it's not like you're only in love with someone if you say \"I love you.\" Everyone has things they can't say on impulse.", "Meme Oshino");
var quote9 = new Quote("A castle that vanishes at the first gust of wind is worthless. A skyscraper within your mind will never fall down.", "Satsuki Kiryuuin");
var quote10 = new Quote("You cannot go into battle believing you will lose.", "Akisame Koetsuji");


var arrayOfQuotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];

var chooseQuote = function() {
    var randomNumber = Math.floor(Math.random() * (9 + 1));
    var newElement = document.getElementById("theQuote");
    newElement.innerHTML = "\"" + arrayOfQuotes[randomNumber].quote + "\"";
    var quoteArea = document.getElementById("quoteSpace");
    var quoteAuthor = document.getElementById("theAuthor");
    quoteAuthor.innerHTML = " - " + arrayOfQuotes[randomNumber].author;
    quoteArea.appendChild(newElement);
    quoteArea.appendChild(quoteAuthor);
};

document.getElementById("newQuote").addEventListener("click", chooseQuote);
document.addEventListener("DOMContentLoaded", chooseQuote);

/* Adding the quote and author to span-elements inside article & section-*/
